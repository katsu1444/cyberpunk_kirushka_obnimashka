/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function component(text) {\r\n  const element = document.createElement(\"h1\");\r\n  element.textContent = text;\r\n  return element;\r\n}\r\n\r\ndocument.body.prepend(component(\"Проект собран на Webpack\"));\r\nfunction buttonClick() {\r\n  const name = document.getElementsByTagName(\"input\")[0].value;\r\n  const email = document.getElementsByTagName(\"input\")[1].value;\r\n\r\n  if (name === \"\") {\r\n    alert(\"Пожалуйста заполните поле имени\");\r\n\r\n    document.getElementsByTagName(\"input\")[0].style.backgroundColor = \"red\";\r\n\r\n    return;\r\n  } else {\r\n    document.getElementsByTagName(\"input\")[0].style.backgroundColor = \"\";\r\n  }\r\n\r\n  if (email === \"\") {\r\n    alert(\"Пожалуйста заполните поле емейла\");\r\n\r\n    document.getElementsByTagName(\"input\")[1].style.backgroundColor = \"red\";\r\n\r\n    return;\r\n  } else {\r\n    document.getElementsByTagName(\"input\")[1].style.backgroundColor = \"\";\r\n  }\r\n\r\n  alert(\r\n    \"Привет, меня зовут \" +\r\n      document.getElementsByTagName(\"input\")[0].value +\r\n      \"!\"\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack://cyberpunk_kirushka_obnimashka/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;