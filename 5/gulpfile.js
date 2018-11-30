var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var htmlmin = require('gulp-htmlmin');
var cleancss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var gccs = require('gulp-gccs');
var uglify = require('gulp-uglify')

gulp.task('sass', function(){
    gulp.src('./dev/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'))
        .pipe(connect.reload());
});
    
gulp.task('html', function(){
    gulp.src('./dev/**/*.html')
    .pipe(gulp.dest('./public/'))
    .pipe(connect.reload());
});

gulp.task ('server', function () {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch('./dev/*.html',['html']);
    gulp.watch('./dev/**/*.scss',['sass']);
    gulp.watch('./dev/**/*.js',['js']);
    gulp.watch('./dev/img/*',['img']);
});

gulp.task('js', function () {
    gulp.src('./dev/js/**/*.js')
    .pipe(gulp.dest('./public/js/'))
    .pipe(connect.reload());
});

gulp.task('img', function () {
    gulp.src('./dev/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/img/'))
});

gulp.task('build', function () {
    gulp.src('./public/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./build/'));

    gulp.src('./public/**/*.css')
        .pipe(cleancss())
        .pipe(gulp.dest('./build/'));

    gulp.src('./public/img/*')
        .pipe(gulp.dest('./build/img/'));

    gulp.src('./public/**/*.js')
        .pipe(gccs())
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['html','sass','server','js','img','watch', 'build']);
