import { GenderOption } from './genders';

export function sortGenders(genders: GenderOption[]): GenderOption[] {
	return genders.sort(({ label: a }, { label: b }) => {
		return a < b ? -1 : a > b ? 1 : 0;
	});
}
