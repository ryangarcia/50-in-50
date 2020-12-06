const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.getElementById('btn');


btn.addEventListener('click', ()=> {
  search.classList.toggle('active');
  input.focus();
})