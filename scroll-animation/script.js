const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerPoint = window.innerHeight / 5 * 4; //our trigger point is 80% of the height
  
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop  < triggerPoint) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}