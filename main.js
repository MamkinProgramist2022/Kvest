let start = document.getElementById("start");
let title;
let input;
let body = document.body;

start.addEventListener("click", () => {
    // полностью удаляем элемент из вёрстки
    start.parentNode.removeChild(start);

    title = document.createElement("h1");
    input = document.createElement("input");

    title.textContent = "Введите ваше имя!";
    body.append(title)
    body.append(input)

    input.addEventListener("keyup", (event)=> {
        // event - это объект с информацией о событии
        if (event.code == "Enter") {
            title.textContent = "Добро пожаловать, " + input.value;
            input.parentNode.removeChild(input);

            setTimeout( () => {
                title.parentNode.removeChild(title);
                // Запускаем next level
                iLoveMath();
            }, 2000 )
        }
    })
})


function CreateTextLevel (question, answer, nextLevel){
    title = document.createElement("h1");
    input = document.createElement("input");
    preTitle = document.createElement("p");
    
    title.textContent = question;

    body.append(title, input, preTitle);

    input.addEventListener("keyup", (event)=> {
        if (event.code == "Enter") {
            if (input.value == answer) {
                // console.log(answer.value.toLowerCase());
                input.parentNode.removeChild(input);
                preTitle.textContent = "Верно!";
                // через 1.5 секунды запускаем следующий уровень
                setTimeout( () => {
                    title.parentNode.removeChild(title);
                    preTitle.parentNode.removeChild(preTitle);
                    // Запускаем nextLevel
                    if (nextLevel != null) {
                        nextLevel();
                    }
                }, 1500)
            } else {
                preTitle.textContent = "Неверно :( попробуйте ещё раз!";
                    input.value = "";
            }
        }
    })
}

function Patrick () {
    title = document.createElement("h1");
    preTitle = document.createElement("p");

    title.textContent = 'На какой картинке Обкуреный патрик?'

    img1 = document.createElement("img");
    img2 = document.createElement("img");

    img1.src = "./images/patrick.jpg";
    img2.src = "./images/stupid_patrick.jpg"

    img1.alt = "PATRICK";
    img2.alt = "Obdolbany Patrick"

    body.append(patrick_img, title, preTitle);

    img1.addEventListener("click", ()=> {
      preTitle.textContent = "Неверно";
    })
    
    img2.addEventListener("click", ()=> {
      preTitle.textContent = "Верно";

        img1.parentNode.removeChild(img1);
        img2.parentNode.removeChild(img2);
})

}

// function iLoveMath (){
//     CreateTextLevel("Сколько будет 2 * 8?", 16, Patrick);
// }

// function iLoveGeography () {
//     CreateTextLevel("Какая столица Грузии?", "Тбилиси", kirill);
// }

// function kirill () {
//     CreateTextLevel("Кирилл лох?", "да", null);
// }