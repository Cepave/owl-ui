import gu from 'gulp'
import svgstore from 'gulp-svgstore'
import svgmin from 'gulp-svgmin'
import cheerio from 'gulp-cheerio'

gu.src('./src/icon/**/*.svg')
  .pipe(svgmin())
  .pipe(cheerio({
    run: ($, file)=>{
      var $page = $('#Page-1')
      var $path = $page.find('path')
      var $svg = $('svg')
      var $fill = $('[fill]')
      $svg.append($path)
      if (file.relative.startsWith('icon-')) {
        $page.remove()
        $fill.removeAttr('fill')
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
        .attr('id', 'owl-svg')
      // remove symbol id prefix 'icon-'
      $('symbol').each(function(index, element) {
        var $symbolID = $(element).attr('id')
        if($symbolID.startsWith('icon-')) {
          $(element).attr('id', $symbolID.split('icon-').pop())
        }
      })
    },
    parserOptions: { xmlMode: true }
  }))
  .pipe(gu.dest('dist'))
