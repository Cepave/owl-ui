import gu from 'gulp'
import webpack from 'webpack'
import webpackConf from '../webpack.config'
import uglify from 'gulp-uglify'
import clean from 'gulp-clean-css'
import rename from 'gulp-rename'
import del from 'del'
import pkg from '../package.json'
import fs from 'fs'
import pick from 'lodash.pick'

del.sync([
  '!build/.git',
  'build/dist/*.{js,css}',
  'build/stylus',
])
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

  const packageJSON = pick(pkg, ['name', 'dependencies',
    'license', 'author', 'version', 'main', 'description',
    'repository', 'keywords', 'bugs', 'homepage'
  ])

  fs.writeFile(`build/package.json`, JSON.stringify(packageJSON, null, 2))

  gu.src('src/stylus/**', {base: './src'})
    .pipe(gu.dest('build'))
})
