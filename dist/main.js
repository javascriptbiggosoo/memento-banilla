/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_layout_Top_Top_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_layout_Center_Center_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _components_layout_Bottom_Bottom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);




// TODO: 배경사진 랜덤
// TODO: 4k / FHD 배경사진
class App {
  constructor({ $target }) {
    this.$top = new _components_layout_Top_Top_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ $target });
    this.$main = new _components_layout_Center_Center_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ $target });
    this.$bottom = new _components_layout_Bottom_Bottom_js__WEBPACK_IMPORTED_MODULE_2__["default"]({ $target });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchBar_SearchBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Weather_Weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



class Top {
  constructor({ $target }) {
    this.$top = document.createElement("header");
    $target.append(this.$top);

    this.$searchBar = new _SearchBar_SearchBar_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ $target: this.$top });
    this.$weather = new _Weather_Weather_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ $target: this.$top });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Top);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _ChooseSearchEngine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



class SearchBar {
  $searchForm = document.createElement("form");

  constructor({ $target }) {
    this.$searchInput = new _SearchInput_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ $target: this.$searchForm });
    this.$chooseSearchEngein = new _ChooseSearchEngine_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $target: this.$searchForm,
    });

    $target.append(this.$searchForm);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class SearchInput {
  $searchInput = document.createElement("input");
  searchEngine = "Google";

  constructor({ $target }) {
    this.$searchInput.placeholder = "Google";

    this.$searchInput.addEventListener("keydown", this.handleEnter);

    $target.append(this.$searchInput);
  }

  handleEnter(ev) {
    if (ev.key === "Enter") {
      let searchValue = ev.target.value;
      window.open(`https://google.com/search?q=${searchValue}`);
      searchValue = "";
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ChooseSearchEngine {
  constructor({ $target }) {}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChooseSearchEngine);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _APIs_weatherMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


class Weather {
  weatherData;
  isLoading = true;

  $weather = document.createElement("section");

  constructor({ $target }) {
    this.$target = $target;
    this.$weather.classList.add("weather");

    this.$target.append(this.$weather);

    setInterval(this.render(), 1000 * 60 * 1);
  }

  toggleIsLoading = () => {
    this.isLoading = !this.isLoading;
  };

  showWeather = async (pos) => {
    const { latitude: lat, longitude: lon } = pos.coords;

    const weatherData = await (0,_APIs_weatherMap_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)([lat, lon]);
    // console.log(weatherData);
    this.toggleIsLoading();

    const currentWeather = weatherData.weather[0].main;
    const currentTemp = weatherData.main.temp - 273.15;
    const weatherIcon = weatherData.weather[0].icon;

    this.$weather.innerHTML = `
    <div>
      <div>${currentWeather}</div>
      <div>${Math.round(currentTemp)}°C</div>
    </div>
    `;

    const img = document.createElement("img");
    img.classList.add("날씨그림");
    img.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    this.$weather.append(img);
  };

  render = () => {
    if (this.isLoading) this.$weather.innerHTML = "~ Loading ~";

    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showWeather, (err) => {
        alert(
          "위치 추적을 허용하지 않았거나 크롬 브라우저가 아닌 경우 날씨가 표시되지 않을 수 있습니다."
        );
        console.error(err);
      });
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
const END_POINT = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "320e9afb47e04d7cecf01d98bc8c1844";

// 좌표로 날씨 얻기
const getWeatherData = async ([lat = 33.44, lon = -94.04]) => {
  const res = await fetch(`${END_POINT}lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  const data = await res.json();

  return data;
};


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Clock_Clock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _Greeting_Greeting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



class Center {
  $center = document.createElement("main");

  constructor({ $target }) {
    $target.append(this.$center);

    this.clock = new _Clock_Clock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ $target: this.$center });
    this.Greeting = new _Greeting_Greeting_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ $target: this.$center });

    this.$center.addEventListener("hover", this.handleHover);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Center);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Clock {
  $시계 = document.createElement("div");

  constructor({ $target }) {
    this.$시계.classList.add("현재시간");
    $target.append(this.$시계);

    this.showTimenow();
  }

  영추가 = (num) => {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  };

  showTimenow = () => {
    setInterval(() => {
      const today = new Date();
      this.$시계.innerHTML = `${this.영추가(today.getHours())}:${this.영추가(
        today.getMinutes()
      )}`;
    }, 1000);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clock);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserNameInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _GreetingMessage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);




class Greeting {
  #userName = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.getItem)("userName", "");
  isNameChanging = this.#userName ? false : true;

  $greeting = document.createElement("section");
  $userNameChangeButton = document.createElement("button");

  constructor({ $target }) {
    this.$greetingMessage = new _GreetingMessage_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $target,
      userName: this.#userName,
    });
    this.$userNameInput = new _UserNameInput_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      $target: this.$greeting,
      onSubmit: this.handleNameChange,
      isNameChanging: this.isNameChanging,
    });

    this.$userNameChangeButton.innerText = "이름 변경";
    if (this.isNameChanging) {
      this.$userNameChangeButton.hidden = true;
    } else {
      this.$userNameInput.$userNameInput.hidden = true;
    }
    this.$userNameChangeButton.addEventListener("click", (ev) => {
      this.$userNameChangeButton.hidden = true;
      this.$userNameInput.$userNameInput.hidden = false;
    });
    this.$greeting.append(this.$userNameChangeButton);

    $target.append(this.$greeting);
  }

  handleNameChange = (submittedName) => {
    this.setUserName(submittedName);
    this.$userNameChangeButton.hidden = false;
  };

  setUserName = (submittedName) => {
    this.#userName = submittedName;
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.setItem)("userName", this.#userName);

    this.$greetingMessage.setUserName(this.#userName);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Greeting);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class UserNameInput {
  $userNameInput = document.createElement("input");

  constructor({ $target, onSubmit }) {
    this.$userNameInput.placeholder = "이름을 알려주세요.";
    this.$userNameInput.classList.add("user-name-input");
    this.$userNameInput.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        const submittedName = ev.target.value;
        if (submittedName) {
          onSubmit(submittedName);

          this.$userNameInput.value = "";
          this.$userNameInput.hidden = true;
        }
      }
    });

    $target.append(this.$userNameInput);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserNameInput);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class GreetingMessage {
  #userName;
  $greetingMessage = document.createElement("div");
  constructor({ $target, userName }) {
    this.#userName = userName;

    this.$greetingMessage.classList.add("greeting-message");
    $target.append(this.$greetingMessage);
    this.render();
  }

  setUserName = (submittedName) => {
    this.#userName = submittedName;
    this.render();
  };

  render = () => {
    this.$greetingMessage.innerText = `안녕하세요${
      this.#userName && ` ${this.#userName}님`
    }!`;
    // TODO: 이름 수정 기능
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GreetingMessage);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getItem: () => (/* binding */ getItem),
/* harmony export */   setItem: () => (/* binding */ setItem)
/* harmony export */ });
const localStorage = window.localStorage;

const setItem = (key, data) => {
  const 저장할거 = JSON.stringify(data);
  try {
    localStorage.setItem(key, 저장할거);
  } catch (err) {
    alert(
      `${key} 추가에 실패 했습니다. 총 데이터 용량이 5MB를 초과된 경우일 수 있습니다.`
    );
  }
};

const getItem = (key, defaultValue) => {
  const 가져올거 = localStorage.getItem(key);
  return JSON.parse(가져올거) || defaultValue;
};


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ToDo_ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _Setting_Setting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



class Bottom {
  constructor({ $target }) {
    this.$bottom = document.createElement("footer");
    $target.append(this.$bottom);

    this.setting = new _Setting_Setting_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ $target: this.$bottom });
    this.todo = new _ToDo_ToDo_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ $target: this.$bottom });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bottom);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _ToDoInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _ToDoList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);




// TODO: getItem 할 때 validation
class Todo {
  #toDos = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getItem)("toDo", []).filter((toDo) => toDo.isCompleted === false);

  constructor({ $target }) {
    const $toDoContainer = document.createElement("section");
    $toDoContainer.classList.add("todo-container");
    $target.append($toDoContainer);

    this.$toDoList = new _ToDoList_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      $target: $toDoContainer,
      initialToDos: this.#toDos,
      onToDoClick: this.handleToDoClick,
    });
    this.$toDoInput = new _ToDoInput_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $target: $toDoContainer,
      onSubmit: this.handleToDoSubmit,
    });
  }

  handleToDoClick = (toDoIdx) => {
    const nextState = this.#toDos;
    nextState[toDoIdx].isCompleted = !nextState[toDoIdx].isCompleted;
    this.setToDos(this.#toDos);
  };

  handleToDoSubmit = (toDo) => {
    const nextToDos = [
      ...this.#toDos,
      {
        toDo,
        isCompleted: false,
      },
    ];
    this.setToDos(nextToDos);
  };

  setToDos = (nextToDos) => {
    this.#toDos = nextToDos;
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setItem)("toDo", this.#toDos);

    this.$toDoList.setToDos(this.#toDos);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class TodoInput {
  $form = document.createElement("form");
  $input = document.createElement("input");

  constructor({ $target, onSubmit }) {
    this.$target = $target;
    this.onSubmit = onSubmit;

    this.$input.classList.add("to-do-input");
    this.$input.placeholder = "새 할일";

    this.$form.addEventListener("submit", this.handleSubmit.bind(this));

    this.$form.append(this.$input);
    this.$target.insertAdjacentElement("afterbegin", this.$form);
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const toDo = this.$input.value;
    if (toDo) {
      this.onSubmit(toDo);

      this.$input.value = "";
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoInput);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class TodoList {
  $toDoList = document.createElement("div");
  #toDos;

  constructor({ $target, initialToDos, onToDoClick }) {
    this.$target = $target;
    this.#toDos = initialToDos;
    this.onToDoClick = onToDoClick;

    this.$toDoList.addEventListener("click", this.handleToDoClick.bind(this));

    this.$target.insertAdjacentElement("beforeend", this.$toDoList);

    this.render();
  }

  handleToDoClick = (ev) => {
    const $li = ev.target.closest("li");

    this.onToDoClick($li.dataset.id);
  };

  render = () => {
    this.$toDoList.innerHTML = `<ul>${this.#toDos
      .map(({ toDo, isCompleted }, idx) => {
        return `<li data-id="${idx}" class="할일 ${
          isCompleted && "할일완료"
        }"><input type="checkbox" ${isCompleted && `checked`}> ${toDo}</li>`;
      })
      .join("")}</ul>`;
  };

  setToDos = (nextToDos) => {
    this.#toDos = nextToDos;

    this.render();
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Setting {
  $setting = document.createElement("i");

  constructor({ $target }) {
    this.$setting.classList.add("fa-solid", "fa-gear", "fa-2xl", "손가락");
    this.$setting.addEventListener("click", this.handleClick);

    $target.append(this.$setting);
  }

  handleClick = (ev) => {
    alert("개발 예정입니다.");
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);

 // 웹팩 빌드용

const app = new _app_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ $target: document.getElementById("app") });

})();

/******/ })()
;