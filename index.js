import getInputValues from './modules/add-book.js';
import { goAdd, goContact, goList } from './modules/navigator.js';
import removeBook from './modules/remove-book.js';
import localStorageOnLoad from './modules/localstorage-onload.js';
import { DateTime } from './modules/luxon.js';

const ct = DateTime.now();
const clock = document.getElementById('time');
clock.innerHTML = ct.toLocaleString(DateTime.DATETIME_MED);

window.getInputValues = getInputValues;
window.goAdd = goAdd;
window.goContact = goContact;
window.goList = goList;
window.removeBook = removeBook;
localStorageOnLoad();