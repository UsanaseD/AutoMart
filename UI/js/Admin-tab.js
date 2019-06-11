const defaultBtn = document.getElementById('defaultOpenbtn');
const reportBtn = document.getElementById('reportedbtn');
const ads = document.getElementById('ads');
const report = document.getElementById('reported');
const delete0btn = document.getElementById ('delete0');
const delete1btn = document.getElementById ('delete1');
const delete2btn = document.getElementById ('delete2');
const delete3btn = document.getElementById ('delete3');
const delete4btn = document.getElementById ('delete4');


window.addEventListener('load', (e) =>{
  ads.style.display = 'block';
  defaultBtn.style.background = 'blue';
  reportBtn.style.background = '#32508e';
  ads.style.background = '#f2f2f2';
});

reportBtn.addEventListener('click', (e) => {
  ads.style.display = 'none';
report.style.display = 'block';
reportBtn.style.background = 'blue';
defaultBtn.style.background = '#32508e';
report.style.background= '#f2f2f2';
});

defaultBtn.addEventListener('click', (e) =>{
  report.style.display = 'none';
  ads.style.display = 'block';
  reportBtn.style.background = '#32508e';
  defaultBtn.style.background = 'blue';
  ads.style.background= '#f2f2f2';
});

delete0btn.addEventListener('click', (e)=> {
  alert("Post Deleted succefully!");
});

delete1btn.addEventListener('click', (e)=> {
  alert("Post Deleted succefully!");
});
delete2btn.addEventListener('click', (e)=> {
  alert("Post Deleted succefully!");
});
delete3btn.addEventListener('click', (e)=> {
  alert("Post Deleted succefully!");
});
delete4btn.addEventListener('click', (e)=> {
  alert("Post Deleted succefully!");
});
