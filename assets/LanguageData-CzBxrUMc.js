const o="/horses-webapp/assets/horse-Dm8y0QUe.png",a="selectedLanguage";function n(){return window.localStorage.getItem(a)}function t(){const e=window.navigator.language;return e&&e.substring(0,2)}function g(e){window.localStorage.setItem(a,e)}function s(e){return n()||t()||e}const u=[{label:"УКР",code:"uk",addPipe:!0},{label:"ENG",code:"en",addPipe:!1}],r=new Set(["uk","en"]),c="en";export{g as a,c as d,o as h,u as l,r as s,s as u};
