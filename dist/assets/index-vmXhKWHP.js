(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u=document.createElement("div");u.classList.add("page__wrapper");document.body.appendChild(u);const p=document.createElement("div");p.classList.add("nonogram__title");p.innerHTML="<p>NONOGRAM GAME</p>";u.appendChild(p);const d=document.createElement("div");d.classList.add("nonogram__wrapper");u.appendChild(d);const f=document.createElement("table");for(let s=0;s<5;s+=1){const n=document.createElement("tr");for(let c=0;c<5;c+=1){const o=document.createElement("td");o.className="nonogram-cell",n.appendChild(o)}f.appendChild(n)}d.appendChild(f);const g=5,w=5;function E(){const s=new Map;return{get(n,c){return s.get(`${n}, ${c}`)||0},set(n,c,o){o!==0?s.set(`${n}, ${c}`,o):s.delete(`${n}, ${c}`)}}}const m=E();function h(){const s=f.getElementsByTagName("tr");for(let n=0;n<g;n+=1){const c=s[n].getElementsByTagName("td");for(let o=0;o<w;o+=1){const e=m.get(n,o),t=c[o];t.style.backgroundColor=e===1?"black":"white"}}}h();function C(s){const n=s.target,c=n.parentElement.rowIndex,o=n.cellIndex,t=m.get(c,o)===1?0:1;m.set(c,o,t),h()}const y=document.querySelectorAll(".nonogram-cell");y.forEach(s=>{s.addEventListener("click",C)});function H(s){const n=s.length,c=s[0].length,o=[],e=[];for(let t=0;t<n;t+=1){const r=s[t],l=[];let i=0;for(let a=0;a<c;a+=1)r[a]===1?i+=1:i>0&&(l.push(i),i=0);i>0&&l.push(i),o.push(l)}for(let t=0;t<c;t+=1){const r=[];let l=0,i=!1;for(let a=0;a<n;a+=1)s[a][t]===1?(l+=1,i=!0):l>0&&(r.push(l),l=0);l>0&&r.push(l),i||r.push(0),e.push(r)}return{row:o,col:e}}const L=[[0,1,0,1,1],[0,1,0,1,0],[0,1,0,1,1],[1,1,0,0,1],[0,0,0,1,1]],N=H(L);function b(){const{row:s,col:n}=N,c=document.createElement("div");c.classList.add("hints","row-hints"),d.appendChild(c);for(let e=0;e<s.length;e+=1){const t=s[e],r=document.createElement("div");r.classList.add("hint"),r.textContent=t.join(" "),c.appendChild(r)}const o=document.createElement("div");o.classList.add("hints","col-hints"),d.appendChild(o);for(let e=0;e<n.length;e+=1){const t=n[e],r=document.createElement("div");r.classList.add("hint"),r.textContent=t.join(`
`),o.appendChild(r)}}b();
//# sourceMappingURL=index-vmXhKWHP.js.map