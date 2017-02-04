const gulp = require('gulp');
const ap = require('gulp-autoprefixer');

gulp.task('convert', () => {
  gulp.src('css/styles.css')
	.pipe(ap())
	.pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
  gulp.watch('css/styles.css', ['convert']);
});
