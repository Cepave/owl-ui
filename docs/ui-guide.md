## 檔名/模組化命名方式

- 檔案與目錄名稱需全部採用`小寫`，可以降低 Mac 上 require `不分大小寫`問題的風險。

- 模塊裡的單字區分需用連字符 `-` 區隔開來，目錄亦同。

```js
// bad
toggleCss.js

// good
toggle-css.js
```

### 測試用例檔名
- 歸放在各自組件內 `__test__` 目錄下

- 可取名為 `module-name.spec.js`

  ​
> 為什麼不是 `module-name-spec.js`？因為會讓人誤認為成有一個叫 `module-name-spec` 的 module 而不是一個 `module-name` 的 `spec`


## ES2015 import/export 與 require 的抉擇
### import 引入模塊

優先採用 ES2015 的 `import` 方式引入模塊，
與 `Object Mapping` 的宣告方式

```javascript
// bad
const React = require('react')
const {PropTypes, Component} = React

// good
import React, {PropTypes, Component} from 'react'
```

如遇到限制與特殊情況時可直接採用 `require`

-  只被引用一次，或是不需要任何宣告變數立即觸發的情況

```javascript
// good but a little extra
import colors from 'colors'
import moduleFunc from './module-func'
moduleFunc({})

// good
import 'colors'
require('./module-func')({})
```

- 有時候我們不希望最上方就加載進來，需透過一些條件加載或是運行在函數內

```javascript
if (condition) {
  const moduleName = require('module-name')
}

func(){
  const moduleName = require('module-name')
}
```

### export 輸出模塊
一律採用 `module.exports` 或 `exports.xxx` 的方式。


