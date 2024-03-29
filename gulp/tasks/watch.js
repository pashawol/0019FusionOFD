module.exports = function () {

	// Your "watch" task
	$.gulp.task('watch', function () {
		$.gulp.watch([$.sourse + '/sass/**/*.css', $.sourse + '/pug/blocks/**/*.scss', $.sourse + '/sass/**/*.scss', $.sourse + '/sass/**/*.sass'], $.gulp.series('sass'));
		$.gulp.watch($.sourse + '/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch($.sourse + '/svg/*.svg', $.gulp.series('svg'));
		$.gulp.watch([$.sourse + '/js/libs.js'], $.gulp.series('scripts'));
		$.gulp.watch($.sourse + '/sass/*.svg', $.gulp.series('svgCopy'));

		$.gulp.watch([$.sourse + '/js/common.js'], $.gulp.series('scripts:common')); 
		$.gulp.watch($.sourse + '/img', $.gulp.series('img-responsive')); 
	});

}