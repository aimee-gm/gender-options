import { expect } from 'code';
import Lab from 'lab';
import { genderOptions } from '../index';

export const lab = Lab.script();
const { experiment, test, suite } = lab;

suite('The index export', () => {
	experiment('GenderOptions object', () => {
		test('is an object', () => {
			expect(genderOptions).to.be.an.object();
		});

		test('has basic, standard and extended properties', () => {
			expect(genderOptions).to.only.include(['basic', 'standard', 'extended']);
		});
	});

	experiment('GenderOptions.basic array', () => {
		test('has three elements', () => {
			expect(genderOptions.basic).length(3);
		});

		test('elements are an object with label and value', { plan: 6 }, () => {
			for (const gender of genderOptions.basic) {
				expect(gender.label).to.be.a.string();
				expect(gender.value).to.be.a.string();
			}
		});

		test('elements are ordered by their label', () => {
			expect<string[]>(
				genderOptions.basic.map((gender) => gender.value)
			).to.equal(['female', 'male', 'nonbinary']);
		});
	});

	experiment('GenderOptions.standard array', () => {
		test('has 21 elements', () => {
			expect(genderOptions.standard).length(21);
		});

		test('elements are an object with label and value', { plan: 42 }, () => {
			for (const gender of genderOptions.standard) {
				expect(gender.label).to.be.a.string();
				expect(gender.value).to.be.a.string();
			}
		});

		test('contains the GenderOptions.basic array', () => {
			expect(genderOptions.standard).to.include(genderOptions.basic);
		});
	});

	experiment('GenderOptions.extended array', () => {
		test('has 21 elements', () => {
			expect(genderOptions.extended).length(21);
		});

		test('contains the GenderOptions.standard array', () => {
			expect(genderOptions.extended).to.include(genderOptions.standard);
		});

		test('has capitalized labels', { plan: 21 }, () => {
			for (const gender of genderOptions.extended) {
				expect(gender.label).to.match(/^[A-Z][a-z- ]+$/);
			}
		});

		test('has lowercase values', { plan: 21 }, () => {
			for (const gender of genderOptions.extended) {
				expect(gender.value).to.match(/^[a-z]+$/);
			}
		});
	});
});
