const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");


gulp.task("typescript", function () {
    return gulp
        .src("src/**/*.ts") 
        .pipe(sourcemaps.init()) 
        .pipe(ts({ target: "ES6", module: "commonjs" })) 
        .pipe(sourcemaps.write(".")) 
        .pipe(gulp.dest("dist")); 
});

// Задача для копирования файлов
gulp.task("copy", function () {
    return gulp
        .src("src/**/*.html") // Исходные HTML-файлы
        .pipe(gulp.dest("dist")); // Папка для скопированных файлов
});

// Задача по умолчанию
gulp.task("default", gulp.parallel("typescript", "copy"));
