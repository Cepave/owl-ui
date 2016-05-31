# React Component

- 保持與其他一致，用 `.js` 來命名
- 目錄與檔名也與`檔名/模組化命名方式`一致

為什麼不採用 airbnb 推薦的 `.jsx` ？雖然 `.jsx` 比較好區分是否為 React Component 或一般模塊，並且 webpack 也可以設定讓 `.jsx` 變為預設，但因為快網產品有跑 **server-side rendering**，`index.jsx`下 Node 端無法變成預設載入。

```js
// bad
import Footer from './footer/footer.jsx';

// bad
import Footer from './footer/index.jsx';

// good
import Footer from './footer';
```

### Compoent 創建方式, Class vs React.createClass vs stateless
目前有三種方式來創建 React Component

### Class vs React.createClass
```javascript
// bad
const Component = React.createClass({
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
});

// good
class Component extends React.Component {
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
}
```

### stateless
如果你的組件沒有任何 state，請採用這種方式，會讓渲染效率變高

```javascript
Component.propTypes = {}
Component.defaultProps = {}

function Component({...props}) {
  return (
    <div {...props}>

    </div>
  )
}
```
### API Props 接口設計原則

####  props.children

優先思考是否可用 `children` 達成，因為這是我們寫 HTML 最本能的用法

```javascript
// bad
render() {
  <div>
    {this.props.text}
  </div>
}

// good
render() {
  <div>
    {this.props.children}
  </div>
}
```



#### [Boolean]

採用 `is` 或 `has` 前綴

```javascript
// bad
static defaultProps = {
  disabled: true
}

// good
static defaultProps = {
  isDisabled: true
}
```

####  [Array/Counts/Number]

盡量採用複數名詞

```javascript
// bad
static defaultProps = {
  count: 20,
  entry: []
}

// good
static defaultProps = {
  counts: 20,
  entries: []
}
```

####  [Function]

通常為**做什麼事**， 接口上應該有`動詞`

```javascript
// bad
static defaultProps = {
  something(){}
}

// good
static defaultProps = {
  doSomething(){}
}
```

在做一件事之前或之後，可用 `before` / `after`

```javascript
static defaultProps = {
  afterClick(){}
  beforeClick(){}
}
```

## Extends className

每個組件都需保持繼承 `className` 的 API 設計，推薦使用小巧精幹的庫 [classnames](https://github.com/JedWatson/classnames) 來達到目地

```javascript
// bad
render() {
  <div className="class-name" {...props} />
}
  
// bad
render() {
  const {className, ...props} = this.props
  <div className={`class-name ${className}`} {...props} />
}

// good extendable
import css from 'classnames'
render() {
  const {className, ...props} = this.props
  <div className={css('class-name', className)} {...props}>
}
```

