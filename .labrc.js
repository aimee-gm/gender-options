module.exports = {
	pattern: '\\.spec',
	sourcemaps: true,
	transform: 'node_modules/lab-transform-typescript',
	lint: false,
	assert: 'code',
	verbose: true,
	coverage: true,
	'coverage-all': true,
	'coverage-path': './src',
	'coverage-pattern': '\.*',
	reporter: ['console', 'html'],
	output: ['stdout', 'coverage.html']
};
