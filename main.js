(function(){[].forEach.call(document.querySelectorAll(".shot-thumb img"),function(i){i.src=i.parentNode.dataset.img});[].forEach.call(document.querySelectorAll("img[data-from]"),function(i){var b=document.getElementById(i.dataset.from);if(b)i.src=b.dataset.img})})();
(function(){
var lb=document.getElementById("lightbox"),im=document.getElementById("lbImg"),cap=document.getElementById("lbCap"),last=null;
function close(){lb.hidden=true;im.removeAttribute("src");document.body.style.overflow="";if(last)last.focus()}
document.addEventListener("click",function(e){var t=e.target.closest("[data-img]");
if(t){last=t;im.src=t.dataset.img;im.alt="Certificat : "+t.dataset.title;cap.textContent=t.dataset.title;lb.hidden=false;document.body.style.overflow="hidden";lb.querySelector(".lb-close").focus();return}
if(e.target===lb||e.target.closest(".lb-close"))close()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!lb.hidden)close()});
})();
(function(){
var b=document.querySelector(".menu-btn"),n=document.getElementById("nav");
b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
n.addEventListener("click",function(e){if(e.target.tagName==="A"){n.classList.remove("open");b.setAttribute("aria-expanded","false")}});
var links=[].slice.call(n.querySelectorAll('a[href^="#"]')),secs=links.map(function(a){return document.querySelector(a.getAttribute("href"))});
function spy(){var y=window.scrollY+140,cur=-1;secs.forEach(function(x,i){if(x&&x.offsetTop<=y)cur=i});links.forEach(function(a,i){a.classList.toggle("active",i===cur)})}
window.addEventListener("scroll",spy,{passive:true});spy();
})();
(function(){
var p=document.querySelector("#photoSrc img"),s=document.getElementById("photoFrame");if(p&&s){s.appendChild(p)}
var roles=["Web","Full Stack","Java"],el=document.getElementById("role");
if(window.matchMedia("(prefers-reduced-motion:reduce)").matches){return}
var r=0,c=0,del=false;
function tick(){var w=roles[r];el.textContent=w.slice(0,c);
if(!del&&c===w.length){del=true;return setTimeout(tick,1400)}
if(del&&c===0){del=false;r=(r+1)%roles.length}
c+=del?-1:1;setTimeout(tick,del?45:90)}
tick();
})();
