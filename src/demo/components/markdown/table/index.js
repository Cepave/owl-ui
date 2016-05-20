import React, {PropTypes} from 'react'
import s from './table.styl'

Table.propTypes = {
  ths: PropTypes.array.isRequired,
  tds: PropTypes.array.isRequired,
}

Table.defaultProps = {
  ths: [],
  tds: [],
  renderTd: null,
  renderTh: null
}


function Table({ths, tds, renderTd, renderTh, ...props}) {
  return (
    <table {...props} className={s.table}>
      <tbody>
        <tr>
          {ths.map((th, i)=> {
            if (renderTh) {
              return (
                <th key={i}>
                  { renderTh({th, idx: i}) }
                </th>
              )
            }
            return <th key={i}>{th}</th>
          })}
        </tr>
        {tds.map((trs, i)=> {
          return (
            <tr key={i}>
              {trs.map((td, j) => {
                if (renderTd) {
                  return(
                    <td key={`${i}-${j}`}>
                      { renderTd({td, idx: j, th: ths[j]}) }
                    </td>
                  )
                }
                return <td key={`${i}-${j}`}>{td}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
module.exports = Table
