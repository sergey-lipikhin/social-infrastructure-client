import{d as o}from"./calcite-input-time-picker-d309cc7a.js";import"./index-a6c97245.js";import"./form-32f0d51b.js";import"./guid-0d265cb2.js";import"./interactive-69210934.js";import"./key-bcbe3efc.js";import"./label2-8685b2e4.js";import"./loadable-d1c829dc.js";import"./t9n-16bc3599.js";import"./observers-fa6f09b5.js";import"./focusTrapComponent-2529d051.js";import"./icon-3e71ad21.js";import"./openCloseComponent-fd175910.js";import"./action-4660a862.js";import"./loader-278c0aa3.js";import"./input-e07405c7.js";import"./progress-d7b4a9a9.js";import"./popover-da0be003.js";import"./floating-ui-f7e1fd92.js";import"./debounce-fe65f68f.js";import"./FloatingArrow-baa446af.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.1
 */var n={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function e(i,r,a){var t=n[a];return Array.isArray(t)&&(t=t[r?0:1]),t.replace("%d",i)}var m={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(r){return r+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e}};o.locale(m,null,!0);export{m as default};
