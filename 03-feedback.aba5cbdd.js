var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,g=function(){return c.Date.now()};function m(e,t,n){var i,r,o,a,f,u,c=0,l=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),l?y(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||m&&e-c>=o}function h(){var e=g();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-u);return m?d(n,o-(e-c)):n}(e))}function w(e){return f=void 0,b&&i?y(e):(i=r=void 0,a)}function O(){var e=g(),n=T(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(m)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,o=(m="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=u=r=f=void 0},O.flush=function(){return void 0===f?a:w(g())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");let y=T();const j=t((function(e){const{name:t,value:n}=e.target;y[t]=n,localStorage.setItem("feedback_form_state",JSON.stringify(y))}),500);function T(){if(localStorage.feedback_form_state){const e=JSON.parse(localStorage.getItem("feedback_form_state"));return b.email.value=e.email,b.message.value=e.message,e}return{email:"",message:""}}b.addEventListener("input",j),b.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),e.currentTarget.reset(),console.log(y),y=T()}));
//# sourceMappingURL=03-feedback.aba5cbdd.js.map
