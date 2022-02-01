const elopen = document.getElementById('open');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

elopen.addEventListener('click', () => {
  console.log('one');
  modal.classList.add('show');
});

close.addEventListener('click', () => {
  modal.classList.remove('show');
});






