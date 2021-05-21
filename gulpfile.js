var gulp = require("gulp");


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

gulp.task("default", function(done) {
    console.log("gulp message received...");
    done();
});