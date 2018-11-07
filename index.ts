import { genders, Gender, ListOptions, GenderOption } from './lib/genders';
export { Gender, ListOptions, GenderOption } from './lib/genders';
import { sortGenders } from './lib/sort';

function GenderOptions(genders: Gender[], listName: ListOptions) {
	const list = genders
		.filter((gender) => gender.list === listName)
		.map(({ label, value }): GenderOption => ({ label, value }));

	sortGenders(list);

	return list;
}

const basic = GenderOptions(genders, 'basic');
const standard = basic.concat(GenderOptions(genders, 'standard'));
const extended = standard.concat(GenderOptions(genders, 'extended'));

export const genderOptions = {
	basic,
	standard,
	extended,
};
