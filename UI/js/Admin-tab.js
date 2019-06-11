const defaultBtn = document.getElementById('defaultOpenbtn');
const reportBtn = document.getElementById('reportedbtn');
const ads = document.getElementById('ads');
const report = document.getElementById('reported');

window.addEventListener('load', (e) =>{
  ads.style.display = 'block';
  defaultBtn.style.background = 'blue';
  reportBtn.style.background = '#32508e';
});

reportBtn.addEventListener('click', (e) => {
  ads.style.display = 'none';
report.style.display = 'block';
reportBtn.style.background = 'blue';
defaultBtn.style.background = '#32508e';
});

defaultBtn.addEventListener('click', (e) =>{
  report.style.display = 'none';
  ads.style.display = 'block';
  reportBtn.style.background = '#32508e';
  defaultBtn.style.background = 'blue';
});
