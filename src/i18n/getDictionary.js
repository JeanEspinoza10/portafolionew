import es from './dictionaries/es.json';
import en from './dictionaries/en.json';

const dictionaries = { es, en };

export const getDictionary = (locale) => dictionaries[locale] ?? dictionaries.es;
