const defaultBtn = document.getElementById('register');
const updatetBtn = document.getElementById('update');
const registered = document.getElementById('nwcar');
const updated = document.getElementById('xtdcar');

window.addEventListener('load', (e) =>{
  registered.style.display = 'block';
  defaultBtn.style.background = 'blue';
  updatetBtn.style.background = '#32508e';
});

updatetBtn.addEventListener('click', (e) => {
  registered.style.display = 'none';
updated.style.display = 'block';
updatetBtn.style.background = 'blue';
defaultBtn.style.background = '#32508e';
});

defaultBtn.addEventListener('click', (e) => {
  updated.style.display = 'none';
  registered.style.display = 'block';
 defaultBtn.style.background = 'blue';
 updatetBtn.style.background = '#32508e';
});