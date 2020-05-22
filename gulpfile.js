"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

//task para o sass
gulp.task('default', watch);

gulp.task('sass', compilaSass);

function compilaSass(){
    return gulp
        .src("sass/**/*.sass")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest("css"));

} 

function watch() {
    gulp.watch("sass/**/*.sass", compilaSass);
}

