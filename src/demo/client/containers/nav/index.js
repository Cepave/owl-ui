import React from 'react'
import s from './nav.styl'
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
          <a href="https://github.com/Cepave/owl-ui/blob/dev/docs/react-guide.md"> <span className={s.link}>development</span> </a>
        </div>
        <div className={s.blockList}>
          <a to="https://github.com/Cepave/owl-ui/blob/dev/docs/ui-guide.md"> <span className={s.link}>testing</span></a>
        </div>
      </div>

      <div className={s.block}>
        <b>Components</b>
        <div className={s.blockList}>
          <Link to={`/${app.repoName}/tab`}>
            <span className={`monospace ${s.link}`}>&lt;Tab /></span>
          </Link>
        </div>
        <div className={s.blockList}>
          <Link to={`/${app.repoName}/icon`}>
            <span className={`monospace ${s.link}`}>&lt;Icon /></span>
          </Link>
        </div>
        <div className={s.blockList}>
          <Link to={`/${app.repoName}/tip`}>
            <span className={`monospace ${s.link}`}>&lt;Tip /></span>
          </Link>
        </div>
        <div className={s.blockList}>
          <Link to={`/${app.repoName}/select`}>
            <span className={`monospace ${s.link}`}>&lt;Select /></span>
          </Link>
        </div>
        <div className={s.blockList}>
          <Link to={`/${app.repoName}/table`}>
            <span className={`monospace ${s.link}`}>&lt;Table /></span>
          </Link>
        </div>
        <div className={s.blockList}>
          <Link to={`/${app.repoName}/button`}>
            <span className={`monospace ${s.link}`}>&lt;Button /></span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

module.exports = Nav
