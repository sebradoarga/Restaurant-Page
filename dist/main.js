(()=>{"use strict";const t=t=>{const e=document.createElement("div");t.appendChild(e),e.setAttribute("id","headerImage");const n=document.createElement("div");t.appendChild(n);const i=document.createElement("h1");n.appendChild(i),n.setAttribute("id","pageText"),i.classList.add("pageTitle"),i.textContent="Tommy's Pizzeria";const a=document.createElement("p");n.appendChild(a),a.setAttribute("id","textCopy"),a.textContent="By far the best pizza in town."},e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","navTabs"),document.body.appendChild(n),document.body.insertBefore(n,e);const i=document.createElement("button"),a=document.createElement("button"),d=document.createElement("button");n.appendChild(i),n.appendChild(a),n.appendChild(d),i.textContent="Home",a.textContent="Menu",d.textContent="Contact",i.setAttribute("id","activeButton"),t(e),a.addEventListener("click",(()=>{e.innerHTML="",i.setAttribute("id",""),d.setAttribute("id",""),a.setAttribute("id","activeButton"),(t=>{const e=(t,e)=>{const n=t;return{name:n,displayPizza:()=>{const i=document.createElement("div");a.appendChild(i),i.classList.add("pizzaContainer");const d=t.split(" ");i.setAttribute("id",d[0]);const o=document.createElement("h2");i.appendChild(o),o.classList.add("pizzaTitle"),o.textContent=n;const s=document.createElement("div");i.appendChild(s),s.classList.add("pizzaImage");const c=document.createElement("p");i.appendChild(c),c.classList.add("pizzaDescription"),c.textContent="Tomato sauce, mozzarella, ";for(let t=0;t<e.length;t++)t===e.length-1?c.textContent+="and "+e[t]+".":c.textContent+=e[t]+", "}}},n=document.createElement("div");t.appendChild(n),n.setAttribute("id","menuHeader");const i=document.createElement("h1");n.appendChild(i),i.classList.add("pageTitle"),i.setAttribute("id","menuTitle"),i.textContent="Menu";const a=document.createElement("div");t.appendChild(a),a.setAttribute("id","menuContainer");const d=e("Margherita",["oregano"]),o=e("Quattro Stagioni",["mushrooms","ham","artichokes","olives","oregano"]),s=e("Diavola",["spicy salami","chilli pepper"]),c=e("Spinach",["spinach"]),l=e("Funghi",["mushrooms"]);d.displayPizza(),o.displayPizza(),s.displayPizza(),c.displayPizza(),l.displayPizza()})(e)})),i.addEventListener("click",(()=>{e.innerHTML="",a.setAttribute("id",""),d.setAttribute("id",""),i.setAttribute("id","activeButton"),t(e)}))})();