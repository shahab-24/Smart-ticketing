// function showElementById(elementId){
//   document.getElementById(elementId);
// }
let seatNo = 40;
let zero= 0;
const seats = document.getElementsByClassName('seat-no');
for(const seat of seats){
  
  seat.addEventListener('click', function (e){
    seatNo = seatNo - 1;
    document.getElementById('forty').innerText = seatNo;
    zero = zero + 1;
    document.getElementById('zero').innerText = zero;
    

    const buttons = document.querySelectorAll('.seat-no');


    
    // const selectList = document.getElementById('select-list');
    // const li = document.createElement('li');
    // const seatName = document.createElement('p');
    // seatName.innerText = seat;
    // const classs = document.createElement('p');
    // classs.innerText = Economy;
    // const price = document.createElement('p');
    // price.innerText = 550;

    // li.appendChild(seatName);
    // li.appendChild(classs);
    // li.appendChild(price);
    // selectList.appendChild(li);
    setColor();
    });
}



const buttons = document.querySelectorAll('.seat-no');

function setColor(){
  
    buttons.addEventListener('click', function(){
      for(const button of buttons){
        button.classList.add('green');
      }

    }
    )
}
