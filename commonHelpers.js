import{S as m,i as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const l=document.querySelector(".gallery");function f(o){const r=o.map(s=>` <li class="gallery-item">
          <a class="gallery-link" href="${s.largeImageURL}">
            <img
              class="gallery-image"
              src="${s.webformatURL}"
              alt="${s.tags}"
              width="360"
              height="152"
          /></a>
          <div class="parameters-block">
            <div class="parameter">
              <h2 class="title">Likes</h2>
              <p class="amount">${s.likes}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Views</h2>
              <p class="amount">${s.views}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Comments</h2>
              <p class="amount">${s.comments}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Downloads</h2>
              <p class="amount">${s.downloads}</p>
            </div>
          </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r),new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const c=document.querySelector("form"),u=document.querySelector("#select-image"),i=document.querySelector(".loader");i.style.display="none";c.addEventListener("submit",h);function h(o){o.preventDefault(),l.innerHTML="",i.style.display="block";const r="42379891-9b2b3e5f2dd038df1d72b79a3",a="https://pixabay.com/api/",s=u.value,t=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${a}?${t}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{e.hits.length||d.error({message:"Sorry, there are no images matching your search query. Please try again!",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432}),f(e.hits),i.style.display="none",c.reset()}).catch(e=>console.log(e)).finally(()=>i.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
