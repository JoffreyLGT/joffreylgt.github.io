import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return `/${l}${path}`
  }
}

export function getUrlWithoutLang(url: URL) {
  const lang = getLangFromUrl(url)
  return url.pathname.replace(lang + "/", "")
}

export function getSlugWithoutLang(slug: string) {
  const [lang, ...slugWithoutLang] = slug.split('/');
  if (lang in ui) return slugWithoutLang.join("/")
  return slug
}

export function getLangFromSlug(slug: string){
  const [lang, ..._] = slug.split('/');
  return lang in ui ? lang: ""
}

export function formatDateRespectingLang(date: Date, lang: keyof typeof ui){
  // const options = { year: 'numeric', month: 'long', day: 'numeric' };
  if (lang == "en"){
    return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium"}).format(date)
  }
    return new Intl.DateTimeFormat("fr-fr", { dateStyle: "medium"}).format(date)
}
