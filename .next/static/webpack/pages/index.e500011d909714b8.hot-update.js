/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./source/Components/CategoryCard/CategoryCard.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./source/Components/CategoryCard/CategoryCard.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".CategoryCard_card__x8aPZ {\\n  background-color: #f4f6ff;\\n  padding: 2rem;\\n  border-radius: 1rem;\\n  position: relative;\\n  background-color: rgb(95, 22, 95);\\n}\\n.CategoryCard_card__x8aPZ .CategoryCard_edit__tHbHu {\\n  position: absolute;\\n  top: 1.5rem;\\n  right: 1.5rem;\\n  cursor: pointer;\\n  padding: 0.5rem;\\n}\\n.CategoryCard_card__x8aPZ h2 {\\n  text-transform: uppercase;\\n  font-size: 1.4rem;\\n  color: white;\\n  font-weight: 300;\\n  margin-bottom: 1rem;\\n}\\n.CategoryCard_card__x8aPZ h3 {\\n  font-weight: 400;\\n  font-size: 2.4rem;\\n  color: white;\\n  margin-bottom: 3rem;\\n}\\n.CategoryCard_card__x8aPZ h4 {\\n  font-size: 1.2rem;\\n  font-weight: 300;\\n  color: white;\\n  text-align: right;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://source/Components/CategoryCard/CategoryCard.module.scss\",\"webpack://styles/variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,yBCIQ;EDHR,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,iCAAA;AADF;AAGE;EACE,kBAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;EACA,eAAA;AADJ;AAIE;EACE,yBAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;AAFJ;AAKE;EACE,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,mBAAA;AAHJ;AAME;EACE,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;AAJJ\",\"sourcesContent\":[\"@import '../../../styles/variables.scss';\\r\\n\\r\\n.card {\\r\\n  background-color: $sidebar;\\r\\n  padding: 2rem;\\r\\n  border-radius: 1rem;\\r\\n  position: relative;\\r\\n  background-color: rgb(95, 22, 95);\\r\\n\\r\\n  .edit {\\r\\n    position: absolute;\\r\\n    top: 1.5rem;\\r\\n    right: 1.5rem;\\r\\n    cursor: pointer;\\r\\n    padding: 0.5rem;\\r\\n  }\\r\\n\\r\\n  h2 {\\r\\n    text-transform: uppercase;\\r\\n    font-size: 1.4rem;\\r\\n    color: white;\\r\\n    font-weight: 300;\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n\\r\\n  h3 {\\r\\n    font-weight: 400;\\r\\n    font-size: 2.4rem;\\r\\n    color: white;\\r\\n    margin-bottom: 3rem;\\r\\n  }\\r\\n\\r\\n  h4 {\\r\\n    font-size: 1.2rem;\\r\\n    font-weight: 300;\\r\\n    color: white;\\r\\n    text-align: right;\\r\\n  }\\r\\n}\\r\\n\",\"// Colors\\r\\n$white: #ffffff;\\r\\n$black: #000000;\\r\\n\\r\\n$text: #5e6066;\\r\\n$income: #7f60f3;\\r\\n$expenses: #fd7477;\\r\\n$sidebar: #f4f6ff;\\r\\n\\r\\n// Typography\\r\\n$fontFamily: 'Inter', sans-serif;\\r\\n\\r\\n// breakpoints\\r\\n@mixin device($device) {\\r\\n  @if $device == 'desktop' {\\r\\n    @media only screen and (max-width: 1440px) {\\r\\n      @content;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @if $device == 'tablet' {\\r\\n    @media only screen and (max-width: 768px) {\\r\\n      @content;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @if $device == 'mobile' {\\r\\n    @media only screen and (max-width: 425px) {\\r\\n      @content;\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"card\": \"CategoryCard_card__x8aPZ\",\n\t\"edit\": \"CategoryCard_edit__tHbHu\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3NvdXJjZS9Db21wb25lbnRzL0NhdGVnb3J5Q2FyZC9DYXRlZ29yeUNhcmQubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx5S0FBcUY7QUFDL0g7QUFDQTtBQUNBLHFFQUFxRSw4QkFBOEIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsc0NBQXNDLEdBQUcsdURBQXVELHVCQUF1QixnQkFBZ0Isa0JBQWtCLG9CQUFvQixvQkFBb0IsR0FBRyxnQ0FBZ0MsOEJBQThCLHNCQUFzQixpQkFBaUIscUJBQXFCLHdCQUF3QixHQUFHLGdDQUFnQyxxQkFBcUIsc0JBQXNCLGlCQUFpQix3QkFBd0IsR0FBRyxnQ0FBZ0Msc0JBQXNCLHFCQUFxQixpQkFBaUIsc0JBQXNCLEdBQUcsT0FBTywwSkFBMEosV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxrRUFBa0UsZUFBZSxpQ0FBaUMsb0JBQW9CLDBCQUEwQix5QkFBeUIsd0NBQXdDLGlCQUFpQiwyQkFBMkIsb0JBQW9CLHNCQUFzQix3QkFBd0Isd0JBQXdCLE9BQU8sY0FBYyxrQ0FBa0MsMEJBQTBCLHFCQUFxQix5QkFBeUIsNEJBQTRCLE9BQU8sY0FBYyx5QkFBeUIsMEJBQTBCLHFCQUFxQiw0QkFBNEIsT0FBTyxjQUFjLDBCQUEwQix5QkFBeUIscUJBQXFCLDBCQUEwQixPQUFPLEtBQUssb0NBQW9DLG9CQUFvQix1QkFBdUIscUJBQXFCLHVCQUF1QixzQkFBc0IsMERBQTBELGtEQUFrRCxnQ0FBZ0Msb0RBQW9ELG1CQUFtQixTQUFTLE9BQU8sbUNBQW1DLG1EQUFtRCxtQkFBbUIsU0FBUyxPQUFPLG1DQUFtQyxtREFBbUQsbUJBQW1CLFNBQVMsT0FBTyxLQUFLLHVCQUF1QjtBQUN2aUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NvdXJjZS9Db21wb25lbnRzL0NhdGVnb3J5Q2FyZC9DYXRlZ29yeUNhcmQubW9kdWxlLnNjc3M/YmVmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNhdGVnb3J5Q2FyZF9jYXJkX194OGFQWiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmZmO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUsIDIyLCA5NSk7XFxufVxcbi5DYXRlZ29yeUNhcmRfY2FyZF9feDhhUFogLkNhdGVnb3J5Q2FyZF9lZGl0X190SGJIdSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEuNXJlbTtcXG4gIHJpZ2h0OiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5DYXRlZ29yeUNhcmRfY2FyZF9feDhhUFogaDIge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5DYXRlZ29yeUNhcmRfY2FyZF9feDhhUFogaDMge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuLkNhdGVnb3J5Q2FyZF9jYXJkX194OGFQWiBoNCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NvdXJjZS9Db21wb25lbnRzL0NhdGVnb3J5Q2FyZC9DYXRlZ29yeUNhcmQubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx5QkNJUTtFREhSLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFERjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSEo7QUFNRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzaWRlYmFyO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUsIDIyLCA5NSk7XFxyXFxuXFxyXFxuICAuZWRpdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxLjVyZW07XFxyXFxuICAgIHJpZ2h0OiAxLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDIge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDMge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDQge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIvLyBDb2xvcnNcXHJcXG4kd2hpdGU6ICNmZmZmZmY7XFxyXFxuJGJsYWNrOiAjMDAwMDAwO1xcclxcblxcclxcbiR0ZXh0OiAjNWU2MDY2O1xcclxcbiRpbmNvbWU6ICM3ZjYwZjM7XFxyXFxuJGV4cGVuc2VzOiAjZmQ3NDc3O1xcclxcbiRzaWRlYmFyOiAjZjRmNmZmO1xcclxcblxcclxcbi8vIFR5cG9ncmFwaHlcXHJcXG4kZm9udEZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4vLyBicmVha3BvaW50c1xcclxcbkBtaXhpbiBkZXZpY2UoJGRldmljZSkge1xcclxcbiAgQGlmICRkZXZpY2UgPT0gJ2Rlc2t0b3AnIHtcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgQGlmICRkZXZpY2UgPT0gJ3RhYmxldCcge1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpZiAkZGV2aWNlID09ICdtb2JpbGUnIHtcXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcclxcbiAgICAgIEBjb250ZW50O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNhcmRcIjogXCJDYXRlZ29yeUNhcmRfY2FyZF9feDhhUFpcIixcblx0XCJlZGl0XCI6IFwiQ2F0ZWdvcnlDYXJkX2VkaXRfX3RIYkh1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./source/Components/CategoryCard/CategoryCard.module.scss\n"));

/***/ })

});