'use strict';
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (100 - 200)) + 1;
}
let mobileArray = [];
function MobileStore(user, tybe, condion) {
  (this.user = user),
    (this.tybe = tybe),
    (this.condion = condion),
    (this.price = Math.random()),
    mobileArray.push(this);
}
setData();
console.log(mobileArray);

MobileStore.prototype.render = function () {
  let mytable = document.getElementById('myTable');
  let tr = document.createElement('tr');
  mytable.appendChild(tr);
  let thUser = document.createElement('th');
  tr.appendChild(thUser);
  thUser.textContent = 'user';
};

let form = document.getElementById('myform');
form.addEventListener('submit', submiter);
function submiter(event) {
  event.preventDefault();
  let sub = document.getElementById('submiter');
  new MobileStore(user, type);

  let user=event.target.user.value;
  let type=event.target.tybe.value;

}

for (let i = 0; i < mobileArray.length; i++) {
  mobileArray.render();
}

function setData() {
  let dataArray = JSON.stringify(mobileArray);
  localStorage.setItem('data', dataArray);
}
function getData() {
    let newData=JSON.parse(dataArray);
    localStorage.getItem('data');
}
getData();