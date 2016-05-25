import browserSync from 'browser-sync'
import {spawn} from 'child_process'

const bs = browserSync.create()

const genReport = () => {
  return spawn('nyc', ['report', '--reporter=html']).stdout
}

bs.init({
  port: 3088,
  server: 'coverage',
  open: false,
})

genReport()

bs.watch('src/components/**/__test__/*.js').on('change', () => {
  genReport().on('end', bs.reload)
})
