module.exports = ({state, html, ...opts})=> {
  return `<!DOCTYPE html>
<title>OWL UI Component</title>
<script> window.__STATE = ${JSON.stringify(state)} </script>
<div id="app">${html}</div>
<script src="//localhost:3001/owl-ui.js"></script>
`
}
