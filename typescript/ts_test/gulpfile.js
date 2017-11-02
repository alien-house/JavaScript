// gulpfile.js
var gulp = require('gulp');

var ts = require('gulp-typescript');
var tsConfig = require('./src/tsconfig.json');

var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var connect = require('gulp-connect');
var browserSync = require('browser-sync');

// TypeScriptのコンパイルとwebpackの実行
gulp.task('ts', function () {
    // TypeScriptのコンパイル
    var tsResult = gulp.src(['./src/**/*.ts', '!./src/typings'])
        // tscpnfig.jsonに書いたコンパイルオプションの取得
        .pipe(ts(tsConfig.compilerOptions))
        // webpack.config.jsに書いたwebpackの設定取得
        .pipe(webpack(webpackConfig));
    
    // JSファイルをdistに移動
    return tsResult.pipe(gulp.dest('./dist')).pipe(browserSync.reload({ stream: true }));
});


gulp.task('connect', function () {
    connect.server({
        root: './',
        livereload: true
    });
});

// Static server
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});
gulp.task('styles', function () {
    gulp.src('./*.css')
        .pipe(connect.reload());
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// 自動コンパイル
gulp.task('watch', function () {
    // src配下のTSが変更されたら、'ts'タスク（TypeScriptのコンパイル）を実行
    // gulp.watch(['./*.css'], ['bs-reload']);
    gulp.watch('./src/**/*.ts', ['ts']);
    gulp.watch(['./*.html'], ['bs-reload']);
    gulp.watch(['./*.css'], ['bs-reload']);
});

// コマンドで「> gulp」と入力するだけでtsタスクとwatchタスクをする
gulp.task('default', ['ts', 'connect', 'browser-sync', 'watch']);
