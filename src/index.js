import lodashThrottle from 'lodash.throttle'; // импорт в свой проект библиотеки лодаш тротл со своей базы npm пакетов. Абсолютный путь. Имя переменной любое.npm i uuidv4
import { v4 as uuidv4 } from 'uuid'; // импорт в свой проект uuid - генератора id

import './styles.scss'; // импорт стилей

// 1-й метод импорта
import newElement from './js/create-box'; // импорт под любым именем
document.body.appendChild(newElement('Tile'));

// 2-й метод импорта
import { sum, sum2 } from './js/create-box'; // именованный импорт
console.log(sum(2, 3));
console.log(sum2(5, 5));

// 3-й метод импорта
import * as someFn from './js/create-box'; // импорт всего документа в виде обьекта
console.log(someFn.sum); // вызов конкретной функции

console.log(uuidv4()); // генератор случайного id
