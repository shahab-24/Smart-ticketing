// function showElementById(elementId){
//   document.getElementById(elementId);
// }
let seatNo = 40;
let zero= 1;
let total = 0;


const seats = document.getElementsByClassName('seat-no');

for(const seat of seats){
 

  seat.addEventListener('click', function (e){
    seat.classList.add("pointer-events-none");
console.log(e.target.textContent);

    if(zero <= 4 == true){

      document.getElementById('zero').innerText = zero;
      zero++;
    document.getElementById('forty').innerText = seatNo;
    seatNo = seatNo - 1;
    seat.classList.add('bg-green-500');
    }
    const seatName = e.target.innerText;

    const price = 550;
    
    
    const economy1 = 'economy';

    const parentDiv = document.getElementById('parent-div');
    const li = document.createElement('li');
    const p1 = document.createElement('p');
    p1.innerText = seatName;
  
   
   
    const p2 = document.createElement('p');
    p2.innerText = economy1;

    const p3 = document.createElement('p');
    p3.innerText = price;
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);

    parentDiv.appendChild(li);



    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);
    
    const sum = convertedTotalCost + parseInt(price);

  const grandTotal = document.getElementById('grand-total').innerText;
  const convertedGrand = parseInt(grandTotal);
  const sum2 = convertedGrand + parseInt(price);
  
  setInnerText('total-cost', sum);
  setInnerText('grand-total', sum2);

    
    });
}

function setInnerText(id, value){
  document.getElementById(id).innerText = value;
}





