import gulp from 'gulp';
import gulpSass  from 'gulp-sass';
import dartSass from 'sass'
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import concat from 'gulp-concat';
import minify from 'gulp-minify';
import cleanCss from 'gulp-clean-css'
const sass = gulpSass(dartSass)

// Development Tasks 
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css')) // Outputs it in the css folder
})

// Watchers
gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
})

// Gulp task to minify CSS files
gulp.task('minifycss', function() {
    return gulp.src([
            'app/css/style.css',
        ])
        // Compile SASS files
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(concat('bundle.min.css'))
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer())
        // Minify the file
        .pipe(cleanCss())
        // Output
        .pipe(gulp.dest('app/css'))
});

// Gulp task to minify JavaScript files
gulp.task('minifyjs', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.slim.min.js',
            'app/js/browser-class.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            'app/js/main.js'

        ])
        // Minify the file
        .pipe(concat('bundle.min.js'))
        .pipe(minify({
            ext: {
                min: '.js'
            },
            noSource: true
        }))
        // Output
        .pipe(gulp.dest('app/js'))
});