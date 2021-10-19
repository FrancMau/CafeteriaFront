var { src, dest, watch, series, parallel } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


function css(done) {
    src('src/scss/*.scss')
    .pipe( sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe( postcss([ autoprefixer() ]))
    .pipe( dest("src/css") )

done();
}

function see() {
    watch ('src/scss/**/*.scss', css);
}


exports.css=css;
exports.see=see;
exports.default = series(css,see);


// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));

// gulp.task('sass', function () {
//     return gulp.src('src/scss/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest("src/css"));
// });

// gulp.task('watch', function () {
//     return gulp.watch('src/scss/*.scss', gulp.series('sass'));
// });

