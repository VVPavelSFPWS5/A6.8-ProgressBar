let sumBar = "0%"
$("#my-progress-bar").width(sumBar);

$('.btn').on('click', function(e) {
  //console.log(e.type); // тип события
  //console.log($(this).text()); // текст кнопки
  temp_1 = parseInt($(this).text(),10); // Преобразование в число текста кнопки
  sumBar = parseInt(sumBar, 10) // Преобразование в число текста
  //console.log(sumBar);
  sumBar = sumBar + temp_1 +"%"; // Возвращение типа текста 
  //console.log(sumBar);
  $("#my-progress-bar").width(sumBar); // Загрузка в прогресс-бар и ниже примочка в виде бонуса..
  document.getElementById('header').innerText = "А6.8 Прогресс барррр!" + "   " + (sumBar);
});

