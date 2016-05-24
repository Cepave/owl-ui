import gu from 'gulp'
import stylus from 'gulp-stylus'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import watch from 'gulp-watch'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'
import guif from 'gulp-if'
const cwd = process.cwd

const packStyl = ({out, dest, sourcemap})=> {
  gu.src('./src/stylus/index.styl')
    .pipe(plumber())
    .pipe(guif(sourcemap, sourcemaps.init()))
    .pipe(stylus({
      paths: [`${cwd}/node_modules`]
    }))
    .pipe(guif(sourcemap, sourcemaps.write()))
    .pipe(rename(out))
    .pipe(gu.dest(dest))
}

module.exports = (options = {})=> {
  const opts = {
    watch: false,
    out: 'owl-ui.css',
    dest: 'dist',
    sourcemap: false,
    ...options,
  }

  packStyl(opts)
  if (opts.watch) {
    watch('src/stylus/**/*.styl', ()=> {
      packStyl(opts)
    })
  }
}
