let data = []
let diary = document.querySelector('.diary')
let textBox = document.querySelector('#text-box')
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')

let LocalStorage = JSON.parse(localStorage.getItem("dataFromLocalStorage"))
if (LocalStorage) {
  data = LocalStorage;
  renderElement()
}



// save button
btn1.addEventListener("click",
  function saveFnc() {
    if (textBox.value == '') {

    } else {
      data.push(textBox.value)
      textBox.value = '';
      localStorage.setItem("dataFromLocalStorage", JSON.stringify(data))
      renderElement()
    }

  }
)
// save tab
btn2.addEventListener("click",
  function saveTab() {
    data.push(window.location.href)
    localStorage.setItem("dataFromLocalStorage", JSON.stringify(data))
    renderElement()
  }
)
// delete
btn3.addEventListener("click",
  function deleteAll() {
    localStorage.clear()
    diary.innerHTML = '';
    data=[];
  }
)


function renderElement() {
  diary.innerHTML='';
  for (let i = 0; i < data.length; i++) {
    let element = document.createElement('p')
    let element_a = document.createElement('a')
    element_a.setAttribute('href', 'https://' + data[i])
    element_a.setAttribute('target', '_blank')
    element_a.textContent = data[i];
    element.append(element_a)
    diary.append(element)
  }
}