const {src, dest, series, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
//const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");

//Utilities
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");

function cssBuild() {
    return src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./build/css/"))
}

function buildJs() {
    return src("./src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("bundle.min.js"))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("./build/js/"))
}

function watchArchivos() {
    watch("./scss/**/*.scss", cssBuild)
    watch("./src/js/*.js", buildJs)
}

// function minImage() {
//    return src("./src/**/**.*")
//    .pipe(imagemin())
//    .pipe(dest("./build/img/"))
// }

exports.cssBuild = cssBuild;
exports.watchArchivos= watchArchivos;
//exports.minImage = minImage;
exports.buildJs= buildJs;

exports.default = series (buildJs, cssBuild, watchArchivos);
