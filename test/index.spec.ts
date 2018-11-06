import { expect } from 'code';
import Lab from 'lab';
import { GenderOptions } from '../src';

export const lab = Lab.script();
const { experiment, test, suite } = lab;

suite('Index exports', () => {
	experiment('the GenderOptions export', () => {
		test('is an array', () => {
			expect(GenderOptions).to.be.an.array();
		});
	});
});
