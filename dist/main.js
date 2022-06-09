/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_projectCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/projectCollection.js */ "./src/modules/projectCollection.js");
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");



const projectCollection = new _modules_projectCollection_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectCollection);

document.addEventListener('DOMContentLoaded', _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadHomepage);

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _projectCollection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectCollection.js */ "./src/modules/projectCollection.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "./src/index.js");






class UI {
    static loadHomepage(){
        UI.addNewItemMenuButtons();
        UI.refreshProjects();
    }

    static addNewItemMenuButtons(){
        const addTaskMenu = document.querySelector('#addTaskMenu');
        const doneAddingTasks = document.querySelector('#doneAddingTasks');

        addTaskMenu.addEventListener('click', UI.openAddTaskMenu);
        doneAddingTasks.addEventListener('click', UI.closeAddTaskMenu);

        const addProjectMenu = document.querySelector('#addProjectMenu');
        const doneAddingProjects = document.querySelector('#doneAddingProjects');

        addProjectMenu.addEventListener('click', UI.openAddProjectMenu);
        doneAddingProjects.addEventListener('click', UI.closeAddProjectMenu);
        
        const addTask = document.querySelector('#addTask');
        const addProject = document.querySelector('#addProject');

        addProject.addEventListener('click', UI.addProject);


    }

    static refreshProjects() {
        document.querySelector('#projectContainer').innerHTML = '';
        let projects = _index_js__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects();
        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            const projectNameSpan = document.createElement('span');
            projectNameSpan.classList.add('projectName');
            projectNameSpan.textContent = project.getName();
            const deleteProjectButton = document.createElement('button');
            deleteProjectButton.classList.add('deleteProject');
            deleteProjectButton.textContent = 'X';
            projectDiv.appendChild(projectNameSpan);
            projectDiv.appendChild(deleteProjectButton);
            document.getElementById('projectContainer').appendChild(projectDiv);
        });
        UI.refreshProjectDeleteButtons();
    }

    static refreshProjectDeleteButtons() {
        const projectDeleteButtons = document.querySelectorAll('.deleteProject');
        projectDeleteButtons.forEach(projectDeleteButton => projectDeleteButton.addEventListener('click', UI.deleteProject));
    }

    static deleteProject() {
        _index_js__WEBPACK_IMPORTED_MODULE_3__["default"].deleteProject(this.parentNode.children[0].textContent);
        UI.refreshProjects();
    }

    static addProject(){
        const name = document.querySelector('#newProjectName').value;
        if(name == '' || _index_js__WEBPACK_IMPORTED_MODULE_3__["default"].contains(name)){
            return;
        }
        _index_js__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](name));
        console.log(`Project: '${name}' was added`);
        UI.refreshProjects();
    }

    static openAddTaskMenu(){
        document.querySelector('.addTask p').classList.remove('active');
        document.querySelectorAll('.addTask *:not(p)').forEach(element => element.classList.add('active'));
    }

    static closeAddTaskMenu(){
        document.querySelectorAll('.addTask *:not(p)').forEach(element => element.classList.remove('active'));
        document.querySelector('.addTask p').classList.add('active');
    }

    static openAddProjectMenu(){
        document.querySelector('.addProject p').classList.remove('active');
        document.querySelectorAll('.addProject *:not(p)').forEach(element => element.classList.add('active'));
    }

    static closeAddProjectMenu(){
        document.querySelectorAll('.addProject *:not(p)').forEach(element => element.classList.remove('active'));
        document.querySelector('.addProject p').classList.add('active');
    }
}

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name
    this.tasks = []
  }

  setName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setTasks(tasks) {
    this.tasks = tasks
  }

  getTasks() {
    return this.tasks
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getName() === taskName)
  }

  contains(taskName) {
    return this.tasks.some((task) => task.getName() === taskName)
  }

  addTask(newTask) {
    if (this.tasks.find((task) => task.getName() === newTask.name)) return
    this.tasks.push(newTask)
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName)
  }
}


/***/ }),

/***/ "./src/modules/projectCollection.js":
/*!******************************************!*\
  !*** ./src/modules/projectCollection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectCollection)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");



class ProjectCollection {
  constructor() {
    this.projects = []
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('First Priority'))
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Second Priority'))
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Third Priority'))
  }

  setProjects(projects) {
    this.projects = projects
  }

  getProjects() {
    return this.projects
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName)
  }

  contains(projectName) {
    return this.projects.some((project) => project.getName() === projectName)
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.name === newProject.name))
      return
    this.projects.push(newProject)
  }

  deleteProject(projectName) {
    const projectToDelete = this.projects.find(
      (project) => project.getName() === projectName
    )
    this.projects.splice(this.projects.indexOf(projectToDelete), 1)
  }
}


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name) {
      this.name = name
    }
  
    setName(name) {
      this.name = name
    }
  
    getName() {
      return this.name
    }
  }
  

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStEO0FBQzlCOztBQUVqQyw4QkFBOEIscUVBQWlCO0FBQy9DLGlFQUFlLGlCQUFpQixFQUFDOztBQUVqQyw4Q0FBOEMsbUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05oQztBQUNNO0FBQ29COztBQUVYOztBQUU3QjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qiw2REFBNkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLCtEQUErQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsMERBQTBCO0FBQ25EO0FBQ0E7QUFDQSxRQUFRLDREQUE0QixLQUFLLG1EQUFPO0FBQ2hELGlDQUFpQyxLQUFLO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2tDO0FBQ047O0FBRWI7QUFDZjtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFPO0FBQ2xDLDJCQUEyQixtREFBTztBQUNsQywyQkFBMkIsbURBQU87QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0Q29sbGVjdGlvbiBmcm9tICcuL21vZHVsZXMvcHJvamVjdENvbGxlY3Rpb24uanMnO1xuaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSS5qcyc7XG5cbmNvbnN0IHByb2plY3RDb2xsZWN0aW9uID0gbmV3IFByb2plY3RDb2xsZWN0aW9uKCk7XG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0Q29sbGVjdGlvbjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmxvYWRIb21lcGFnZSk7IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgUHJvamVjdENvbGxlY3Rpb24gZnJvbSAnLi9wcm9qZWN0Q29sbGVjdGlvbi5qcyc7XG5cbmltcG9ydCBwcm9qZWN0Q29sbGVjdGlvbiBmcm9tICcuLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgICBzdGF0aWMgbG9hZEhvbWVwYWdlKCl7XG4gICAgICAgIFVJLmFkZE5ld0l0ZW1NZW51QnV0dG9ucygpO1xuICAgICAgICBVSS5yZWZyZXNoUHJvamVjdHMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkTmV3SXRlbU1lbnVCdXR0b25zKCl7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tNZW51Jyk7XG4gICAgICAgIGNvbnN0IGRvbmVBZGRpbmdUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb25lQWRkaW5nVGFza3MnKTtcblxuICAgICAgICBhZGRUYXNrTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLm9wZW5BZGRUYXNrTWVudSk7XG4gICAgICAgIGRvbmVBZGRpbmdUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNsb3NlQWRkVGFza01lbnUpO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3RNZW51Jyk7XG4gICAgICAgIGNvbnN0IGRvbmVBZGRpbmdQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb25lQWRkaW5nUHJvamVjdHMnKTtcblxuICAgICAgICBhZGRQcm9qZWN0TWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLm9wZW5BZGRQcm9qZWN0TWVudSk7XG4gICAgICAgIGRvbmVBZGRpbmdQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNsb3NlQWRkUHJvamVjdE1lbnUpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrJyk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdCcpO1xuXG4gICAgICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5hZGRQcm9qZWN0KTtcblxuXG4gICAgfVxuXG4gICAgc3RhdGljIHJlZnJlc2hQcm9qZWN0cygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RDb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbGV0IHByb2plY3RzID0gcHJvamVjdENvbGxlY3Rpb24uZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZVNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdCcpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVTcGFuKTtcbiAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdENvbnRhaW5lcicpLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgICAgICB9KTtcbiAgICAgICAgVUkucmVmcmVzaFByb2plY3REZWxldGVCdXR0b25zKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZnJlc2hQcm9qZWN0RGVsZXRlQnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlUHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9ucy5mb3JFYWNoKHByb2plY3REZWxldGVCdXR0b24gPT4gcHJvamVjdERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmRlbGV0ZVByb2plY3QpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlUHJvamVjdCgpIHtcbiAgICAgICAgcHJvamVjdENvbGxlY3Rpb24uZGVsZXRlUHJvamVjdCh0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpO1xuICAgICAgICBVSS5yZWZyZXNoUHJvamVjdHMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdCgpe1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3ROYW1lJykudmFsdWU7XG4gICAgICAgIGlmKG5hbWUgPT0gJycgfHwgcHJvamVjdENvbGxlY3Rpb24uY29udGFpbnMobmFtZSkpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RDb2xsZWN0aW9uLmFkZFByb2plY3QobmV3IFByb2plY3QobmFtZSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdDogJyR7bmFtZX0nIHdhcyBhZGRlZGApO1xuICAgICAgICBVSS5yZWZyZXNoUHJvamVjdHMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb3BlbkFkZFRhc2tNZW51KCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrIHAnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZFRhc2sgKjpub3QocCknKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb3NlQWRkVGFza01lbnUoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZFRhc2sgKjpub3QocCknKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrIHAnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb3BlbkFkZFByb2plY3RNZW51KCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0IHAnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZFByb2plY3QgKjpub3QocCknKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb3NlQWRkUHJvamVjdE1lbnUoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZFByb2plY3QgKjpub3QocCknKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0IHAnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy50YXNrcyA9IFtdXG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVcbiAgfVxuXG4gIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzXG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrc1xuICB9XG5cbiAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSlcbiAgfVxuXG4gIGNvbnRhaW5zKHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKVxuICB9XG5cbiAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgaWYgKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IG5ld1Rhc2submFtZSkpIHJldHVyblxuICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICB9XG5cbiAgZGVsZXRlVGFzayh0YXNrTmFtZSkge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5uYW1lICE9PSB0YXNrTmFtZSlcbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Q29sbGVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnRmlyc3QgUHJpb3JpdHknKSlcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1NlY29uZCBQcmlvcml0eScpKVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnVGhpcmQgUHJpb3JpdHknKSlcbiAgfVxuXG4gIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzXG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSlcbiAgfVxuXG4gIGNvbnRhaW5zKHByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKVxuICB9XG5cbiAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuZXdQcm9qZWN0Lm5hbWUpKVxuICAgICAgcmV0dXJuXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZVxuICAgIClcbiAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdFRvRGVsZXRlKSwgMSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cbiAgXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuICBcbiAgICBnZXROYW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cbiAgfVxuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9