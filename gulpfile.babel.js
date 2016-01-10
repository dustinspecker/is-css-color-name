'use strict'
import babel from 'gulp-babel'
import del from 'del'
import gulp from 'gulp'
import eslint from 'gulp-eslint'

const configFiles = './gulpfile.babel.js'
  , srcFiles = 'src/*.js'
  , testFiles = 'test/*.js'

  , destDir = './lib/'

gulp.task('clean', () => del(destDir))

gulp.task('lint', ['clean'], () =>
  gulp.src([configFiles, srcFiles, testFiles])
    .pipe(eslint())
    .pipe(eslint.formatEach('./node_modules/eslint-path-formatter'))
    .pipe(eslint.failOnError())
)

gulp.task('compile', ['lint'], () =>
  gulp.src(srcFiles)
    .pipe(babel())
    .pipe(gulp.dest(destDir))
)

gulp.task('build', ['compile'])
