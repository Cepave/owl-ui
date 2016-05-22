import React, {PropTypes} from 'react'
import s from './table.styl'

Table.propTypes = {
  ths: PropTypes.array.isRequired,
  tds: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
}

Table.defaultProps = {
  ths: [],
  trs: [],
  renderTr: null,
  renderTh: null
}


function Table({ths, trs, renderTr, renderTh, ...props}) {
  if (!Array.isArray(trs)) {
    trs = Object.keys(trs).map(name =>{
      const tr = trs[name]
      tr.name = name
      return tr
    })
  }

  return (
    <table {...props} className={s.table}>
      <tbody>
        <tr>
          {ths.map((th, i)=> {
            if (renderTh) {
              return (
                <th key={i}>
                  { renderTh({th, idx: i}) || th }
                </th>
              )
            }
            return <th key={i}>{th}</th>
          })}
        </tr>
        {trs.map((tr, idx)=> {
          return (
            <tr key={idx}>
              {tr.map((td, tdIdx) => {
                if (renderTr) {
                  return (
                    <td key={`${idx}-${tdIdx}`}>
                      { renderTr({td, idx, th: ths[tdIdx], name: tr.name}) || td }
                    </td>
                  )
                }
                return <td key={`${idx}-${tdIdx}`}>{td}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
module.exports = Table
