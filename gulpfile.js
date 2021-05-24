var gulp = require("gulp");
// var changed = require('gulp-changed');
// var imagemin = require('gulp-imagemin');
var watch = require("gulp-watch");


// Logs message 
gulp.task("message", function(done) {
    console.log("gulp message received...");
    done();
});

gulp.task("copyHtml", function(done) {
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
        done();
});


gulp.task("copyCss", function(done) {
    gulp.src("src/css/*.css")
        .pipe(gulp.dest("dist/css"));
        done();
});

gulp.task("copyBootstrap", function(done) {
    gulp.src("node_modules/bootstrap/dist/css/*")
        .pipe(gulp.dest("dist/css/bootstrap"));
        done();
});

gulp.task("copyFontawesome", function(done) {
    gulp.src([
        './node_modules/@fortawesome/fontawesome-free/*css/all.min.css',
        './node_modules/@fortawesome/fontawesome-free/*webfonts/*',
    ])
        .pipe(gulp.dest('dist/fontawesome'));
        done();
});

// gulp.task('imagemin', function(done) {
//     var imgSrc = 'src/images/*.+(png|jpg|gif)',
//     imgDst = 'dist/images';
    
//     gulp.src(imgSrc)
//     .pipe(changed(imgDst))
//     .pipe(imagemin())
//     .pipe(gulp.dest(imgDst));
//     done();
// });

gulp.task("copyImages", function(done) {
    gulp.src("src/images/*")
        .pipe(gulp.dest("dist/images"));
        done();
});

gulp.task("default", gulp.parallel("copyHtml", "copyCss", "copyBootstrap", "copyFontawesome", "copyImages"));

gulp.task("watch", function(done) {
    gulp.watch("src/css/*.css", gulp.series("copyCss"));
    gulp.watch("src/*.html", gulp.series("copyHtml"));
    done();
});

