/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   age: () => (/* binding */ age),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   lastName: () => (/* binding */ lastName),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   sum: () => (/* binding */ sum)
/* harmony export */ });
/*
Esta é uma forma de realizar um export onde passamos as variáveis dentro do export

const name = "Ernando";
const lastName = "Braga";
const age = 45;

function sum(x, y){
    return x + y;
}

export{name as name2, lastName, age, sum};

Como foi visto que denttro do export a palavra chave [ as ] que esta sendo utilizada para renomear a variável
onde o name passa e ser chamada de name2 porque ela foi renomenada assim também podemos renomear class, function
e métodos. Dentro do modulo é permitido apenas um default segui o exemplo de como utilizar o default


*/

// Outra forma de realizaar o export e declarando p export já na própria variável corfome o exemplo abaixo
// export const name = "Ernando";
// export const lastName = "Braga";
// export const age = 45;

// export function sum(x, y){
//     return x + y;
// }

// export default function sum(x, y){
//     return x + y;
// }

// export class Pessoa {
//     constructor(name, lastName){
//         this.name = name;
//         this.lastName = lastName;
//     }
// }

/*
Para que uma constante seja default não sera posivel aplicar o default direto na constante
exemplo -> exoprt default name = "Ernando"; isso irár apresenta um erro.
Para que uma constante venha ser default a forma correnta é exemplo -> exeport{name as default},
com isso a constante name passara a ser default.
*/
var name = "Ernando";
var lastName = "Braga";
var age = 45;
function sum(x, y) {
  return x + y;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (x, y) {
  return x * y;
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1.js */ "./src/modulo1.js");
/*
 Realizando a importação de uma function, variável ou class que é default
 conforme o exemplo.

 import soma from "./modulo1.js";
console.log(soma(5,8));
*/

console.log((0,_modulo1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(6, 5));
console.log(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.name, _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.lastName, _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.age, (0,_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.sum)(4, 5));

// import name from "./modulo1";
// console.log(name);

/*
Quando realizamos a importação do default não presisa de chave apenas declaramos o nome da variável
quew neste caso é qualquerName que é uma function default será exportada conforme o exmplo assima.
*/

//Realizando o import de todo de uma vez conforme o exempo abaixo
// import * as MeuModulo from "./modulo1.js"
// console.log(MeuModulo);

//import {name, lastName, age, sum as soma, Pessoa} from "./modulo1.js"; 

// console.log(name, lastName, age);
// console.log(soma(5, 4));
// const pessoa = new Pessoa("Maria", "Fernando");
// console.log(pessoa);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map