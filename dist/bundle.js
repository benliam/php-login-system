!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(){var t=$("#message-response"),e="alert alert-danger alert-dismissible";$("form#frm_Login").on("submit",function(n){var r=$(this);n.preventDefault();var s=$(this).find("#txtUsername"),o=$(this).find("#txtPassword");return""==s.val()?(t.html(`<div class="${e}">Please enter username or password</div>`),s.focus(),!1):""==o.val()?(t.html(`<div class="${e}">Please enter password</div>`),o.focus(),!1):($(this).find('button[type="submit"]').prop("disabled",!0).html("Working..."),void $.ajax({type:$(this).attr("method"),dataType:"json",url:$(this).attr("action"),data:$(this).serialize(),cache:!1}).done(function(t){r.find('button[type="submit"]').prop("disabled",!1).html("Login"),console.log("success")}))})}n.r(e),r instanceof Object&&r()}]);