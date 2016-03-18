var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    plumber = require('gulp-plumber'),
    poststylus = require('poststylus'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    postcss = require('gulp-postcss'),
    base64 = require('postcss-base64');

gulp.task('stylus', function () {
  gulp.src('./src/stylus/style.styl')
    .pipe(plumber())
    .pipe(stylus({
      use: [
        poststylus(['autoprefixer', 'rucksack-css'])
      ]
    }))
    .pipe(postcss([
      base64({
        extensions: ['.woff2']
      })
    ]))
    .pipe(gulp.dest('.'))
});

gulp.task('watch', function () {
  gulp.watch('./src/stylus/**/*.styl', ['stylus'])
});

gulp.task('sprites', function () {
  gulp.src('./src/icon/**/*.svg')
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
    .pipe(gulp.dest('.'))
});

gulp.task('default', ['stylus', 'watch']);
