const t={body:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};let e=null;t.btnStart.addEventListener("click",(()=>{e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btnStart.setAttribute("disabled",!0)})),t.btnStop.addEventListener("click",(()=>{clearInterval(e),t.btnStart.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.c9a42143.js.map
