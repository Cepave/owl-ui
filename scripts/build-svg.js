import gu from 'gulp'
import svgstore from 'gulp-svgstore'
import svgmin from 'gulp-svgmin'
import cheerio from 'gulp-cheerio'
import ftp from 'gulp-ftp'

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
      $('symbol').each((index, el) => {
        const id = $(el).attr('id')
        $(el).attr('id', id.replace(/^icon-/, ''))
      })
    },
    parserOptions: { xmlMode: true }
  }))
  .pipe(gu.dest('dist'))
  .on('finish', ()=> {
    gu.src('dist/icons.svg')
      .pipe(ftp({
        host: '157.122.99.72',
        user: 'cepave_f2e',
        pass: 'tC8cse94bKxe',
        remotePath: '/statics'
      }))
  })
