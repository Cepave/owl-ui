import React from 'react'
import s from './Nav.styl'
import {Link} from 'react-router'
import isNode from '~utils/is-node'

Nav.propTypes = {}
Nav.defaultProps = {}

function Nav({app, ...props}) {
  const page = (isNode ? app.url : location.pathname)

  return (
    <nav {...props} data-page={page}>
      <div className={s.block}>
        <b>Guide</b>
        <div className={s.blockList}>
          <Link to="/checkbox"> <span className={s.link}>組件開發</span> </Link>
        </div>
        <div className={s.blockList}>
          <Link to="/icon"> <span className={s.link}>組件測試</span></Link>
        </div>
      </div>

      <div className={s.block}>
        <b>Components</b>
        <div className={s.blockList} data-page="/icon">
          <Link to="/icon">
            <span className={`monospace ${s.link}`}>&lt;Icon /></span>
          </Link>
        </div>
        <div className={s.blockList} data-page="/tip">
          <Link to="/tip">
            <span className={`monospace ${s.link}`}>&lt;Tip /></span>
          </Link>
        </div>
        <div className={s.blockList} data-page="/select">
          <Link to="/select">
            <span className={`monospace ${s.link}`}>&lt;Select /></span>
          </Link>
        </div>
        <div className={s.blockList} data-page="/checkbox">
          <Link to="/checkbox">
            <span className={`monospace ${s.link}`}>&lt;Checkbox /></span>
          </Link>
        </div>
        <div className={s.blockList}>
          <Link to="/checkbox">
            <span className={`monospace ${s.link}`}>&lt;Tab /></span>
          </Link>
        </div>
        <div className={s.blockList}>
          <Link to="/dropdown">
            <span className={`monospace ${s.link}`}>&lt;Dropdown /></span>
          </Link>
        </div>
        <div className={s.blockList}>
          <Link to="/dropdown">
            <span className={`monospace ${s.link}`}>&lt;Input /></span>
          </Link>
        </div>
        <div className={s.blockList}>
          <Link to="/button">
            <span className={`monospace ${s.link}`}>&lt;Button /></span>
          </Link>
        </div>
        <div className={s.blockList}>
          <Link to="/dropdown">
            <span className={`monospace ${s.link}`}>&lt;Radio /></span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

module.exports = Nav
