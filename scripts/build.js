import gu from 'gulp'
import webpack from 'webpack'
import webpackConf from '../webpack.config'
import uglify from 'gulp-uglify'
import clean from 'gulp-clean-css'
import rename from 'gulp-rename'
import {rm} from 'shelljs'

rm('-r', ['dist'])

webpack(webpackConf, (er, stats)=> {
  console.log(stats.toString({
    colors: true
  }))

  const dist = ()=> {
    return gu.dest('dist')
  }

  gu.src('dist/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dist())

  gu.src('dist/*.css')
    .pipe(clean())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dist())
})

