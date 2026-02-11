// Minimal JS: menu toggle and current year
document.addEventListener('DOMContentLoaded',function(){
  const toggle=document.getElementById('nav-toggle');
  const nav=document.getElementById('nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>nav.classList.toggle('show'))
  }
  const yearEl=document.getElementById('year');
  if(yearEl) yearEl.textContent=(new Date()).getFullYear();
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        const target=document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
          history.replaceState(null,'',href);
        }
      }
    })
  })
});
