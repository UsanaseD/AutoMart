const defaultBtn = document.getElementById('register');
const updatetBtn = document.getElementById('update');
const registered = document.getElementById('nwcar');
const updated = document.getElementById('xtdcar');
const registerbtn = document.getElementById('registered');
const updatedbtn = document.getElementById('updated');
const updated1btn = document.getElementById('updated1');

window.addEventListener('load', (e) =>{
  registered.style.display = 'block';
  defaultBtn.style.background = 'blue';
  updatetBtn.style.background = '#32508e';
  registered.style.background = '#f2f2f2';
});

updatetBtn.addEventListener('click', (e) => {
  registered.style.display = 'none';
updated.style.display = 'block';
updatetBtn.style.background = 'blue';
defaultBtn.style.background = '#32508e';
updated.style.background = '#f2f2f2';
});

defaultBtn.addEventListener('click', (e) => {
  updated.style.display = 'none';
  registered.style.display = 'block';
 defaultBtn.style.background = 'blue';
 updatetBtn.style.background = '#32508e';
 registered.style.background = '#f2f2f2';
});
updatedbtn.addEventListener('click', (e)=> {
  alert("Post Updated succefully!");
});
updated1btn.addEventListener('click', (e)=> {
  alert("Post Updated succefully!");
});
registerbtn.addEventListener('click', (e)=> {
  alert("Post Registered succefully!");
});