var fs = require('fs');
var path = require('path');
const gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
const glob = require('glob');
const babel = require('gulp-babel');
var del = require('del'); //一个原生的 node 模块



//编译前删除所有文件
gulp.task('clean', function() {
  del([
    'build/**/*'
  ])
});
gulp.task('webpack', function() {
  webpack(webpackConfig, function() {
    console.log('gulp webpack结束')
  })
})

var watcher = gulp.watch('**/*.es', ['default']); //实时监控，有改动就重新启动default命令

gulp.task('build', function() {
  return gulp.src('src/**/*.es')
    .pipe(babel({
      presets: ["es2015", "stage-3"],
      plugins: ["transform-async-to-generator"]
    }))
    .pipe(gulp.dest('./build'))
    //.pipe(webpack(webpackConfig))


});

gulp.task('default', ['clean', 'build', 'webpack'], function() {
  console.log('编译结束')
});