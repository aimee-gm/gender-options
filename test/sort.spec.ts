import { expect } from 'code';
import Lab, { OperationFlags, Flags } from 'lab';
import { sortGenders } from '../lib/sort';

export const lab = Lab.script();
const { experiment, test, suite, before } = lab;

suite('sortGenders()', () => {
	experiment('when supplied an out-of-order array of genders', () => {
		before(({ context }: OperationFlags) => {
			context.genders = [
				{
					label: 'Qwerty',
					value: 'qwerty',
				},
				{
					label: 'Abcdef',
					value: 'abcdef',
				},
				{
					label: 'Hijklm',
					value: 'hijklm',
				},
				{
					label: 'bfghty',
					value: 'bfghty',
				},
			];

			sortGenders(context.genders);
		});

		test('the members are order case-sensitively', ({ context }: Flags) => {
			expect(context.genders).to.equal([
				{
					label: 'Abcdef',
					value: 'abcdef',
				},
				{
					label: 'Hijklm',
					value: 'hijklm',
				},
				{
					label: 'Qwerty',
					value: 'qwerty',
				},
				{
					label: 'bfghty',
					value: 'bfghty',
				},
			]);
		});
	});

	experiment('when supplied with a list with repeated labels', () => {
		before(({ context }: OperationFlags) => {
			context.genders = [
				{
					label: 'Qwerty',
					value: 'hijklm',
				},
				{
					label: 'Qwerty',
					value: 'abcdef',
				},
			];

			sortGenders(context.genders);
		});

		test('the order is not changed', ({ context }: Flags) => {
			expect(context.genders).to.equal([
				{
					label: 'Qwerty',
					value: 'hijklm',
				},
				{
					label: 'Qwerty',
					value: 'abcdef',
				},
			]);
		});
	});
});
