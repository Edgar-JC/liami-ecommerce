const {src, dest, series, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

function buildStyles() {
    return src("./scss/**/*.scss")
    .pipe(sass())
    .pipe(dest("./build/css/"))
}

function watchArchivos() {
    watch("./scss/**/*.scss", buildStyles)
}

function minImage() {
    return src("./src/**/**.*")
    .pipe(imagemin())
    .pipe(dest("./build/img/"))
}

exports.buildStyles = buildStyles;
exports.watchArchivos= watchArchivos;

exports.default =series(minImage, buildStyles, watchArchivos);