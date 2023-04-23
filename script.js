const title = document.querySelector("title");
const header = document.querySelector(".ftl h2");
const biot = document.querySelector(".pbo span");
const desm = document.querySelector("meta[name='description']");
const authr = document.querySelector("meta[name='author']");
const prel = document.querySelector(".prel");

function chngTc(e,r,c){
  if(c == "false"){
    e.textContent = r.textContent;
  }
  else{
    e.content = r.textContent;
  }
};

function webShare(){
  const shareData = {
    title:header.textContent,
    url: window.location.href,
    text:header.textContent
};
  navigator.share(shareData);
};


const share = document.querySelector(".share");
share.addEventListener("click",webShare);

const ftr = document.querySelector(".u");
if(ftr.length == 0 || ftr.textContent != 'by r2waytocreate' || !ftr){
  alert("error");
}

title.textContent = `${title.textContent} | ${header.textContent}`;

chngTc(desm,biot,"true");
chngTc(authr,header,"true");

function clkL(a,e){
  let b = document.querySelector(a);
  let c = document.querySelector(e).href;
  b.addEventListener('click',()=>{
    window.location.href = c;
  });
};

clkL(".ins",".insa");
clkL(".fac",".faca");
clkL(".you",".youa");
clkL(".lin",".lina");
clkL(".git",".gita");
clkL(".pla",".plaa");
clkL(".por",".pora");

document.addEventListener("DOMContentLoaded",()=>{
  setTimeout(()=>{
   prel.style.opacity = '0';
   prel.style.visibility = 'hidden';
  },1500);
});