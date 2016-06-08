import gu from 'gulp'
import webpack from 'webpack'
import webpackConf from '../webpack.config'
import uglify from 'gulp-uglify'
import clean from 'gulp-clean-css'
import rename from 'gulp-rename'
import {rm} from 'shelljs'

rm('-r', ['build'])

webpack(webpackConf, (er, stats)=> {
  console.log(stats.toString({
    colors: true
  }))

  const dist = 'build/dist'
  const gudest   = ()=> {
    return gu.dest(dist)
  }

  gu.src(`${dist}/*.js`)
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gudest())

  gu.src(`${dist}/*.css`)
    .pipe(clean())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gudest())

  gu.src(['package.json'])
    .pipe(gu.dest('build'))

  gu.src('src/stylus/**', {base: './src'})
    .pipe(gu.dest('build'))
})
