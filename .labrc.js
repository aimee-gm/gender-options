module.exports = {
	pattern: '\\.spec',
	sourcemaps: true,
	transform: 'node_modules/lab-transform-typescript',
	lint: false,
	assert: 'code',
	verbose: true,
	coverage: true,
	'coverage-all': true,
	'coverage-path': './',
	'coverage-pattern': '.*\\.ts',
	'coverage-exclude': ['node_modules', 'dist'],
	reporter: ['console', 'html'],
	output: ['stdout', 'coverage.html'],
};
