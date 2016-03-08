var gulp = require('gulp');
    sass = require('gulp-sass') ;
    notify = require('gulp-notify') ;
    bower = require('gulp-bower');
    compass = require('gulp-compass');
    watch = require('gulp-watch');

    var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './public/components',
};

gulp.task('sass', function() {
    return gulp.src('./public/components/sass/app.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('default', ['sass', 'fonts']);


 