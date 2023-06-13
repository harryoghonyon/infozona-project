"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp
    .src("app/scss/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("app/css"));
});

gulp.task("sass:watch", function () {
  gulp.watch("app/scss/app.scss", ["sass"]);
});
gulp.task("sass:watch", function (done) {
  gulp.watch("app/scss/*.scss", gulp.series("sass"));
  done();
});
