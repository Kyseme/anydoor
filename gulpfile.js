const gulp = require("gulp");
const less = require('gulp-less');
const path = require('path');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// gulp.task('default',function(){
//     return new Promise(function (resolve, reject) {
//         gulp.src(['src/**/*'])
//             .pipe(gulp.dest('build'));
//         resolve();
//     });
// });
gulp.task('clean', function(){
    return new Promise((res,rej)=>{
        del.sync(['build']);
        res();
    });
});

gulp.task('lesss', function () {
    return new Promise((resolve, reject) => {
        gulp.src('src/style/*.less')
            .pipe(less())
            .pipe(autoprefixer({
                browsers: ['last 3 versions'],
                cascade: false
            }))
            .pipe(cleanCSS())
            .pipe(gulp.dest('build/css'));
        resolve();
    });

});

gulp.task('default', gulp.parallel('clean','lesss'),()=>{
    console.log('done');
});
gulp.task('watch',function(){
    return new Promise((resolve,reject)=>{
        gulp.watch('src/**/*',gulp.series('default'));
        resolve();
    });
});




