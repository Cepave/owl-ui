var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    plumber = require('gulp-plumber'),
    poststylus = require('poststylus'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio');

gulp.task('stylus', function () {
  gulp.src('./src/stylus/style.styl')
    .pipe(plumber())
    .pipe(stylus({
      use: [
        poststylus(['autoprefixer', 'rucksack-css'])
      ]
    }))
    .pipe(gulp.dest('.'))
});

gulp.task('watch', function () {
  gulp.watch('./src/stylus/**/*.styl', ['stylus'])
});

gulp.task('sprites', function () {
  gulp.src('./src/icon/**/*.svg')
    .pipe(svgmin())
    .pipe(cheerio({
      run: ($)=>{
        var $page = $('#Page-1')
        var $path = $page.find('path')
        var $svg = $('svg')
        var $fill = $('[fill]')
        $svg.append($path)
        $page.remove()
        $fill.removeAttr('fill')
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
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(gulp.dest('.'))
});

gulp.task('default', ['stylus', 'watch']);
