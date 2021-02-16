const boxes = document.querySelectorAll('.svgBox');

const boxesArr = Array.from(boxes);

boxesArr.forEach(el => {el.classList.toggle('show')})