module.exports = ({state, html, ...opts})=> {
  return `<!DOCTYPE html>
<title>OWL UI Component</title>
<link rel="icon" href="//157.122.99.72/statics/icon/favicon.png" />
<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,300,200" rel="stylesheet" />
<link href='https://fonts.googleapis.com/css?family=Roboto:400,100italic,100,300italic,500,500italic,300,400italic,700,900italic,900,700italic' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="//cdn.jsdelivr.net/highlight.js/9.3.0/styles/vs.min.css" />
<script> window.__STATE = ${JSON.stringify(state)} </script>
<div id="app">${html}</div>
<script>
;(function(script){
  script.async = true
  script.src = '//' + location.hostname + ':3001/owl-ui.js'  
  document.body.appendChild(script)
})(document.createElement('script'))
</script>
`
}
