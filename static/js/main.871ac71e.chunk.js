(this["webpackJsonpfreecodecamp-react-calculator"]=this["webpackJsonpfreecodecamp-react-calculator"]||[]).push([[0],[,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_components_Output__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_components_Syntax__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_components_Keypad__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(12),_App_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(20),_App_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_9__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__),isOperator=/[x/+\u2011]/,endsWithOperator=/[x+\u2011/]$/,endsWithNegativeSign=/\d[x/+\u2011]{1}\u2011$/,App=function(_React$Component){Object(D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(e){var _;return Object(D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(_=_super.call(this,e)).state={initialValue:"0",previousValue:"0",expression:"",valueSign:"pos",lastClicked:""},_.MaxDig=_.MaxDig.bind(Object(D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleOperators=_.handleOperators.bind(Object(D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleEvaluate=_.handleEvaluate.bind(Object(D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.reset=_.reset.bind(Object(D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleDecimal=_.handleDecimal.bind(Object(D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleNumbers=_.handleNumbers.bind(Object(D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_}return Object(D_Workspace_freecodecamp_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"MaxDig",value:function(){var e=this;this.setState({initialValue:"Digit Limit Met",previousValue:this.state.initialValue}),setTimeout((function(){return e.setState({initialValue:e.state.previousValue})}),1e3)}},{key:"handleEvaluate",value:function handleEvaluate(){if(!this.state.initialValue.includes("Limit")){for(var expression=this.state.expression;endsWithOperator.test(expression);)expression=expression.slice(0,-1);expression=expression.replace(/x/g,"*").replace(/\u2011/g,"-").replace("--","+0+0+0+0+0+0+");var answer=Math.round(1e12*eval(expression))/1e12;this.setState({initialValue:answer.toString(),expression:expression.replace(/\*/g,"\u22c5").replace(/-/g,"\u2011").replace("+0+0+0+0+0+0+","\u2011-").replace(/(x | \/ | \+)\u2011/,"$1-").replace(/^\u2011/,"-")+"="+answer,previousValue:answer,evaluated:!0})}}},{key:"handleOperators",value:function(e){if(!this.state.initialValue.includes("Limit")){var _=e.target.value,t=this.state,a=t.expression,s=t.previousValue,i=t.evaluated;this.setState({initialValue:_,evaluated:!1}),i?this.setState({expression:s+_}):endsWithOperator.test(a)?endsWithNegativeSign.test(a)?"\u2011"!==_&&this.setState({expression:s+_}):this.setState({expression:(endsWithNegativeSign.test(a+_)?a:s)+_}):this.setState({previousValue:a,expression:a+_})}}},{key:"handleNumbers",value:function(e){if(!this.state.initialValue.includes("Limit")){var _=this.state,t=_.initialValue,a=_.expression,s=_.evaluated,i=e.target.value;this.setState({evaluated:!1}),t.length>21?this.MaxDig():s?this.setState({initialValue:i,expression:"0"!==i?i:""}):this.setState({initialValue:"0"===t||isOperator.test(t)?i:t+i,expression:"0"===t&&"0"===i?""===a?i:a:/( [^.0-9]0|^0 )$/.test(a)?a.slice(0,-1)+i:a+i})}}},{key:"handleDecimal",value:function(){!0===this.state.evaluated?this.setState({initialValue:"0.",expression:"0.",evaluated:!1}):this.state.initialValue.includes(".")||this.state.initialValue.includes("Limit")||(this.setState({evaluated:!1}),this.state.initialValue.length>21?this.MaxDig():endsWithOperator.test(this.state.expression)||"0"===this.state.initialValue&&""===this.state.expression?this.setState({initialValue:"0.",expression:this.state.expression+"0."}):this.setState({initialValue:this.state.expression.match(/(-?\d+\.?\d*)$/)[0]+".",expression:this.state.expression+"."}))}},{key:"reset",value:function(){this.setState({initialValue:"0",previousValue:"0",expression:"",valueSign:"pos",lastClicked:"",evaluated:!1})}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h1",{children:"freeCodeCamp calculator"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Syntax__WEBPACK_IMPORTED_MODULE_7__.a,{expression:this.state.expression.replace(/x/g,"\u22c5")}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Output__WEBPACK_IMPORTED_MODULE_6__.a,{currentValue:this.state.initialValue}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Keypad__WEBPACK_IMPORTED_MODULE_8__.a,{decimal:this.handleDecimal,evaluate:this.handleEvaluate,reset:this.reset,numbers:this.handleNumbers,operators:this.handleOperators})]})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},function(e,_,t){"use strict";var a=t(3),s=t(4),i=t(6),r=t(5),c=t(1),l=t(0),n=function(e){Object(i.a)(t,e);var _=Object(r.a)(t);function t(){return Object(a.a)(this,t),_.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"outputScreen",id:"display",children:this.props.currentValue})}}]),t}(c.Component);_.a=n},function(e,_,t){"use strict";t.d(_,"a",(function(){return n}));var a=t(3),s=t(4),i=t(6),r=t(5),c=t(1),l=t(0),n=function(e){Object(i.a)(t,e);var _=Object(r.a)(t);function t(){return Object(a.a)(this,t),_.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"formulaScreen",children:this.props.expression})}}]),t}(c.Component)},function(e,_,t){"use strict";t(1);var a=t(0);_.a=function(e){var _=e.decimal,t=e.evaluate,s=e.reset,i=e.numbers,r=e.operators;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{id:"first-row",children:[Object(a.jsx)("button",{className:"element",id:"clear",onClick:s,value:"AC",children:"AC"}),Object(a.jsx)("button",{id:"divide",onClick:r,value:"/",children:"/"}),Object(a.jsx)("button",{id:"multiply",onClick:r,value:"x",children:"x"})]}),Object(a.jsxs)("div",{id:"second-row",children:[Object(a.jsx)("button",{id:"seven",onClick:i,value:"7",children:"7"}),Object(a.jsx)("button",{id:"eight",onClick:i,value:"8",children:"8"}),Object(a.jsx)("button",{id:"nine",onClick:i,value:"9",children:"9"}),Object(a.jsx)("button",{id:"subtract",onClick:r,value:"\u2011",children:"\u2011"})]}),Object(a.jsxs)("div",{id:"third-row",children:[Object(a.jsx)("button",{id:"four",onClick:i,value:"4",children:"4"}),Object(a.jsx)("button",{id:"five",onClick:i,value:"5",children:"5"}),Object(a.jsx)("button",{id:"six",onClick:i,value:"6",children:"6"}),Object(a.jsx)("button",{id:"add",onClick:r,value:"+",children:"+"})]}),Object(a.jsxs)("div",{id:"fourth-row",children:[Object(a.jsxs)("div",{id:"fourth-row-subdiv",children:[Object(a.jsxs)("div",{id:"suvdiv1",children:[Object(a.jsx)("button",{id:"one",onClick:i,value:"1",children:"1"}),Object(a.jsx)("button",{id:"two",onClick:i,value:"2",children:"2"}),Object(a.jsx)("button",{id:"three",onClick:i,value:"3",children:"3"})]}),Object(a.jsxs)("div",{id:"subdiv2",children:[Object(a.jsx)("button",{className:"element",id:"zero",onClick:i,value:"0",children:"0"}),Object(a.jsx)("button",{id:"decimal",onClick:_,value:".",children:"."})]})]}),Object(a.jsx)("div",{id:"fourth-row-equal",children:Object(a.jsx)("button",{id:"equals",onClick:t,value:"=",children:"="})})]})]})}},function(e,_,t){"use strict";t.r(_);var a=t(1),s=t.n(a),i=t(8),r=t.n(i),c=(t(18),t(9)),l=t(0);r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(c.a,{})}),document.getElementById("root"))},,,,,function(e,_,t){},,function(e,_,t){}],[[13,1,2]]]);
//# sourceMappingURL=main.871ac71e.chunk.js.map