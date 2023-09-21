export type LanguageType = {
	key: string;
	label: string;
	icon?: string;
};

export const LANGUAGE_EN: LanguageType = {
	key: "en",
	label: "English",
};

export const LANGUAGE_KH: LanguageType = {
	key: "km",
	label: "ភាសាខ្មែរ",
};

export const LANGUAGE_DATA_SOURCE_KEY: string[] = [
	LANGUAGE_EN.key,
	LANGUAGE_KH.key,
];

export const LANGUAGE_DATA_SOURCE: LanguageType[] = [LANGUAGE_KH, LANGUAGE_EN];
