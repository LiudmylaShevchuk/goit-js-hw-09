function e(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3&&o({position:e,delay:t}),n({position:e,delay:t})}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(t){t.preventDefault();const o=new FormData(t.currentTarget),n={};for(const[e,t]of o.entries())n[e]=Number(t);let{amount:r,step:i,delay:a}=n;for(let t=1;t<=r;t+=1)e(t,a).then((({position:e,delay:t})=>{alert(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{alert(`❌ Rejected promise ${e} in ${t}ms`)})),a+=i}));
//# sourceMappingURL=03-promises.31d577f7.js.map