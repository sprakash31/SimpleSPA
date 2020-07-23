const gulp = require("gulp");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const karma = require("karma").Server;
const protractor = require("gulp-protractor").protractor;
const webdriver_standalone = require("gulp-protractor").webdriver_standalone;



// const scripts = require("./scripts");
// const styles = require("./styles");

// Some pointless comments for our project.

var devMode = false;

gulp.task("css", function (done) {
  gulp
    .src("./**/*.css")
    //.pipe(concat("style.css"))
    .pipe(gulp.dest("dist/"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
    done();
});

gulp.task("js", function (done) {
  gulp
    .src("./**/*.js")
    // npm install karma --save-dev.pipe(concat("app.js"))
    .pipe(gulp.dest("./dist"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
    done();
});

gulp.task("html", function () {
  return gulp
    .src("./**/*.html")
    .pipe(gulp.dest("./dist"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("browser-sync", function () {
  browserSync.init(null, {
    open: false,
    server: {
      baseDir: "dist",
    },
  });

  devMode = true;
  
  gulp.watch("./css/**/*.css", gulp.series("css"));
  gulp.watch("./js/**/*.js", gulp.series("js"));
  gulp.watch("./html/**/*.html", gulp.series("html"));
});

gulp.task('test', function(done) {
  karma.start({
      configFile: __dirname + '/karma.conf.js'
      //singleRun: true
  }, function() {
      done();
  });
});


    
gulp.task("webdriver_standalone", webdriver_standalone);
 
// Downloads the selenium webdriver
gulp.task(
"webdriver_update",
webdriver_update({
browsers: ["ignore_ssl"],
  })
);
 
gulp.task("e2e", function (done) {
gulp
    .src(["./e2e test/e2eTest.js"])
    .pipe(
protractor({
configFile:"./protractor.config.js",
      })
    )
    .on("error", function (e) {
console.log(e);
    })
    .on("end", function () {
done();
    });
});




gulp.task("default", gulp.parallel("js","css","html","browser-sync"));
