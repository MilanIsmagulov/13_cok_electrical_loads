let plan=['Ознакомьтесь с правилами безопасной работы','Изучите основные методы расчета электрических нагрузок','Изучив график, укажите, сколько процентов от генерируемой мощности предприятия потребляется в 13 часов','Отметьте, с помощью какого прибора можно измерить величину напряжения','Укажите, при какой нагрузке ток, протекающий по катушке индуктивности, отстает от напряжения на 90°','Укажите, векторная диаграмма какого типа нагрузки изображена на рисунке','Отметьте, характерный электроприемник какого типа нагрузки изображен на рисунке','Отметьте, характерный электроприемник какого типа нагрузки изображен на рисунке','Ознакомьтесь с картограммой нагрузок предприятия','Определите мощность осветительной нагрузки объекта по данным картограммы','Определите угол сектора осветительной нагрузки объекта по данным картограммы','Изучите определение режимов работы по суточным графикам нагрузок','Напишите число рабочих смен на предприятии в сутки','Осциллограмма тока и напряжения какого типа нагрузки представлена на рисунке']

let numberOfQuestionSum = 14;

//Добавление заголовка вопроса
let h=document.querySelector('.questions')

h.innerHTML="<div><p><span>"+ numberOfQuestion + ".</span> " + plan[numberOfQuestion-1] + "</p></div>"




let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}

let stepPlaceDescription = document.querySelector('.number_description');
stepPlaceDescription.innerHTML = numberOfQuestion + '/' + numberOfQuestionSum;


let img1 = document.createElement('img');
img1.src = './content/correct.svg'
let img2 = document.createElement('img');
img2.src = './content/incorrect.svg'




let openPopUpButton = document.querySelector('#open_popup_button')
let closePopUpButton = document.querySelector('#close_popup_button_1')
let popUpWindow = document.querySelector('#popup1')


openPopUpButton.addEventListener('click', function(){
    popUpWindow.classList.remove('close')
})

closePopUpButton.addEventListener('click', function(){
    popUpWindow.classList.add('close')
})

let openPopUpButton3 = document.querySelector('#open_popup_button_2')
if (openPopUpButton3 != null){
    openPopUpButton3.addEventListener('click', function(){
        popUpWindow3.classList.remove('close')
    })
}


//Добавление Описания в popUp
let planPopUp=document.querySelector('.popup_text')
i=1
for(let elem of plan){
   text=document.createElement('h3')
   text.innerHTML="<p><span>"+ i + ".</span> " + elem + "</p>"
   planPopUp.appendChild(text)
   i++
}

