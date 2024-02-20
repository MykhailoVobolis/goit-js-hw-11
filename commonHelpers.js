import{S as m,i as n}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function f(s){return s.map(t=>` <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
              width="360"
              height="152"
          /></a>
          <div class="parameters-block">
            <div class="parameter">
              <h2 class="title">Likes</h2>
              <p class="amount">${t.likes}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Views</h2>
              <p class="amount">${t.views}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Comments</h2>
              <p class="amount">${t.comments}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Downloads</h2>
              <p class="amount">${t.downloads}</p>
            </div>
          </div>
        </li>`).join("")}function d(s){const t="42417927-02b658e2f5610bf7e034ab0b0",a="https://pixabay.com/api/",o=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:200});return fetch(`${a}?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const c=document.querySelector(".gallery"),u=document.querySelector("form"),l=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});u.addEventListener("submit",p);function p(s){s.preventDefault(),c.innerHTML="",l.classList.remove("is-hidden");const t=s.target.elements.search.value.trim();d(t).then(a=>{a.hits.length||n.error({message:"Sorry, there are no images matching your search query. Please try again!",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432});const o=f(a.hits);c.insertAdjacentHTML("beforeend",o),h.refresh(),s.target.reset()}).catch(a=>{n.error({message:`${a}`,transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432})}).finally(()=>{l.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
