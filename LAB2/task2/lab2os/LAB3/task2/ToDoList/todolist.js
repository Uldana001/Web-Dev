const plans = []

function addTask(){
    let inp = document.getElementById("myInput").value; // получение значения из поля 
    if ( inp ){
        plans.push({
            value: inp,
            done: false
        }); // храним значение в массиве 
        createTask(); // функция для отображения тасков 
    } 
}

function createTask(){
    let ul = document.getElementById("myList"); // захват листа 
    ul.innerHTML=""; // очищаем лист 
    plans.forEach((toDo, index) =>{ // работа с каждым отдельным элементом 
        let li = document.createElement("li") // создаем элементы для листа
        let p = document.createElement("p") 
        p.innerHTML=`${toDo.value}`; // добавляем текст 
        let btn = document.createElement("button"); // создаем кнопку для удаления 
        btn.innerText="Del"; // даем ему текст
        let btn1 = document.createElement("button")
        let div = document.createElement("div")
        btn1.innerText="Do"
        btn.addEventListener("click", ()=>{ 
            plans.splice(index,1); //удаляется обнавляется 
            createTask(); // обновленное отображение
        }) //добавляешь событие для кнопки
        btn1.addEventListener("click", ()=>{
            toDo.done=!toDo.done;
            p.style.textDecoration="line-through"
        })
        li.appendChild(p);
        div.appendChild(btn);
        div.appendChild(btn1);
        li.appendChild(div);
        ul.appendChild(li); // лист кладем в наш список 
    })
}
