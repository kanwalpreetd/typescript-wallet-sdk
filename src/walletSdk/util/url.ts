import { URL } from "url";

let Url;
if (typeof window === "undefined") {
  Url = URL;
} else {
  Url = window.URL;
}

export const getUrlDomain = (url) => {
  return new Url(url).host;
};
