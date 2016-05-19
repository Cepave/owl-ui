require('require-hooks')(({ext})=> {
  switch (ext) {
    case '.styl':
    case '.css':
      return null
  }
})
