// Найти все элементы .study__frame-inner
const frameInners = document.querySelectorAll('.study__frame-inner');

// Для каждого .study__frame-inner добавить обработчик события, который добавит класс .active к .study__frame-info при завершении анимации
frameInners.forEach(frameInner => {
  frameInner.addEventListener('animationend', () => {
    frameInner.nextElementSibling.classList.toggle('active');
  });
});
