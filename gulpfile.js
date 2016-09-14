var gulp = require('gulp');
var tsc = require('gulp-tsc');
var seq = require('run-sequence');
var del = require('gulp-clean');
var gls = require('gulp-live-server');
var chalk = require('chalk');
var gutil = require('gulp-util');
var tslint = require('gulp-tslint');

var paths = {
    ts: {
        src: [
            'app/**/*.ts'
        ],
        dest: 'build'
    }
}

gulp.task('serve', () => {
    seq('clean', 'build', 'watch');
})

gulp.task('watch', () => {
    var server = gls('build/www.js', {env: {NODE_ENV: 'development'}}, 12345);
    server.start();
    gulp.watch(['app/**/*.ts'], () => seq('tslint', 'clean', 'build'));
    gulp.watch(['build/**/*.js', 'build/**/*.css', 'build/**/*.html'], file =>
      server.notify.apply(server, [file])
    );
    gulp.watch('build/www.js', () => {
      setTimeout(() => gutil.log('Restart Succeed!'), 500);
      server.start.bind(server)()
    });
});

gulp.task('build', () => {
    return gulp.src(paths.ts.src)
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tsc({
            module: "CommonJS",
            sourcemap: true,
            emitError: false
        }))
        .pipe(gulp.dest(paths.ts.dest));
});

gulp.task('clean', () => {
    del(paths.ts.dest);
});

gulp.task('rebuild', file => {
    seq('clean', 'build');
});

gulp.task("tslint", () => {
    return gulp.src(paths.ts.src)
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report());
});

gulp.task('default', ['rebuild']);
