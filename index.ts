import { genders, Gender, ListOptions } from './genders';

interface GenderOption {
	label: string;
	value: string;
}

function GenderOptions(genders: Gender[], listName: ListOptions) {
	return genders
		.filter((gender) => gender.list === listName)
		.map(({ label, value }): GenderOption => ({ label, value }));
}

const basic = GenderOptions(genders, 'basic');
const standard = basic.concat(GenderOptions(genders, 'standard'));
const extended = standard.concat(GenderOptions(genders, 'extended'));

export const genderOptions = {
	basic,
	standard,
	extended,
};
