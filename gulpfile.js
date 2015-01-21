var gulp        = require('gulp'),
    wiredep     = require('wiredep').stream,
    connect     = require('gulp-connect'),
    usemin      = require('gulp-usemin'),
    uglify      = require('gulp-uglify'),
    rev         = require('gulp-rev')

;

var dir = {
    src: './app/',
    dest: './dist/',
    bower: {
        src: './app/components/'
    }
};

gulp.task('wiredep', function(){
   return gulp.src(dir.src+"index.html")
       .pipe(wiredep({
           bowerJson: require('./bower.json'),
           directory: dir.bower.src,
           cwd: dir.src
       }))
       .pipe(gulp.dest(dir.src));
});

gulp.task('usemin',function(){
   return gulp.src(dir.src+"index.html")
       .pipe(usemin({
           js: [uglify(), rev()]
       }))
       .pipe(gulp.dest(dir.dest));
});

gulp.task('connect:src', function(){
    connect.server({
       root: './app',
        port: 12345
    });
});

gulp.task('connect:dist', function(){
    connect.server({
        root: dir.dest,
        port: 12345
    });
});

gulp.task('default',['wiredep'],function(){
    gulp.start('usemin','connect:dist');
});