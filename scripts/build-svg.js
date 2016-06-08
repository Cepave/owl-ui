import gu from 'gulp'
import svgstore from 'gulp-svgstore'
import svgmin from 'gulp-svgmin'
import cheerio from 'gulp-cheerio'
import rename from 'gulp-rename'
import fs from 'fs'

gu.src('icons/*.svg')
  .pipe(svgmin())
  .pipe(cheerio({
    run: ($, file)=>{
      if (file.relative.startsWith('icon-')) {
        $('[fill]').removeAttr('fill')
      }
    },
    parserOptions: { xmlMode: true }
  }))
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(cheerio({
    run: ($)=>{
      $('svg')
        .attr('style', 'display:none')
        .attr('id', 'owl-svg-icons')

      // remove symbol id prefix 'icon-'
      const icons = []
      $('symbol').each((index, el) => {
        const id = $(el).attr('id')
        const newID = id.replace(/^icon-/, '')
        $(el).attr('id', newID)

        icons.push(newID)
      })

      fs.writeFile('build/dist/owl-icons.json', JSON.stringify(icons))
    },
    parserOptions: { xmlMode: true }
  }))
  .pipe(rename('owl-icons.svg'))
  .pipe(gu.dest('build/dist'))
