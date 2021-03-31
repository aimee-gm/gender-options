export type ListOptions = 'basic' | 'standard' | 'extended';

export interface Gender {
	label: string;
	value: string;
	list: ListOptions;
}

export interface GenderOption {
	label: string;
	value: string;
}

export const genders: Gender[] = [
	{
		label: 'Male',
		value: 'male',
		list: 'basic',
	},
	{
		label: 'Female',
		value: 'female',
		list: 'basic',
	},
	{
		label: 'Non-binary',
		value: 'nonbinary',
		list: 'basic',
	},
	{
		label: 'Agender',
		value: 'agender',
		list: 'standard',
	},
	{
		label: 'Androgyne',
		value: 'androgyne',
		list: 'standard',
	},
	{
		label: 'Bigender',
		value: 'bigender',
		list: 'standard',
	},
	{
		label: 'Demiboy',
		value: 'demiboy',
		list: 'standard',
	},
	{
		label: 'Demigender',
		value: 'demigender',
		list: 'standard',
	},
	{
		label: 'Demigirl',
		value: 'demigirl',
		list: 'standard',
	},
	{
		label: 'Genderfluid',
		value: 'genderfluid',
		list: 'standard',
	},
	{
		label: 'Genderflux',
		value: 'genderflux',
		list: 'standard',
	},
	{
		label: 'Genderqueer',
		value: 'genderqueer',
		list: 'standard',
	},
	{
		label: 'Intergender',
		value: 'intergender',
		list: 'standard',
	},
	{
		label: 'Polygender',
		value: 'polygender',
		list: 'standard',
	},
	{
		label: 'Neutrois',
		value: 'neutrois',
		list: 'standard',
	},
	{
		label: 'Trans-female',
		value: 'transfemale',
		list: 'standard',
	},
	{
		label: 'Trans-male',
		value: 'transmale',
		list: 'standard',
	},
	{
		label: 'Trans-feminine',
		value: 'transfeminine',
		list: 'standard',
	},
	{
		label: 'Trans-masculine',
		value: 'transmasculine',
		list: 'standard',
	},
	{
		label: 'Transgender',
		value: 'transgender',
		list: 'standard',
	},
	{
		label: 'Two-spirit',
		value: 'twospirit',
		list: 'standard',
	},
];
