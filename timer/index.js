const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const hoursItem = document.querySelector('.hours');
const minutesItem = document.querySelector('.minutes');
const secondsItem = document.querySelector('.seconds');


// Функция для форматирования времени в "hh:mm:ss"
const formatTime = (time) => {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${hours}:${minutes}:${seconds}`;
}

inputEl.addEventListener('input', () => {
  let result  = inputEl.value.replace(/[^0-9]/g,"");
  inputEl.value = result;

});

buttonEl.addEventListener('click', () => {
  let time = Number(inputEl.value);

  const createTimerAnimator = () => {
    const formattedTime = formatTime(time);
    // Анимация для обновления времени
    anime({
      targets: hoursItem,
      innerHTML: formattedTime.slice(0, 2),
      easing: 'linear',
      round: 1,

    });
    anime({
      targets: minutesItem,
      innerHTML: formattedTime.slice(3, 5),
      easing: 'linear',
      round: 1,
    });
    anime({
      targets: secondsItem,
      innerHTML: formattedTime.slice(6, 8),
      easing: 'linear',
      round: 1,

    });



    time--;

    anime({
      targets: hoursItem,
      translateX: 2,
      scale: 1,
      rotate: '1turn'

    });
    anime({
      targets: minutesItem,
      translateX: 2,
      scale: 1,
      rotate: '1turn'
    });
    anime({
      targets: secondsItem,
      translateX: 2,
      scale: 1,
      rotate: '1turn'
    });


    if (time > 0) {
      const timer = setTimeout(createTimerAnimator, 1000);
    }else{
      clearTimeout(timer);
    }
  };

  createTimerAnimator();
});
