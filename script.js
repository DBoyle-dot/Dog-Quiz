const dogImg = document.getElementById("dog-img");
const btn1 = document.getElementById("button-1");
const btn2 = document.getElementById("button-2");
const btn3 = document.getElementById("button-3");
const btn = document.querySelectorAll(".btn")
const result = document.getElementById("result");
const resultPercent = document.getElementById("result%");
const praise = document.getElementById("praise")
const questions = document.getElementById("questions")

let clicked = false;
let questionNum = 0;
const question = [ {
    name: "Bichon",
    img: "https://cdn.britannica.com/54/236454-050-B406A11E/Bichon-frise-dog.jpg",
    option1: "Poodle",
    option2: "Pug",
    option3: "Bichon"
}, {
    name: "Dachshund",
    img: "https://www.burgesspetcare.com/wp-content/uploads/2024/09/shutterstock_2423158743-1024x683.jpg",
    option1: "Shih Tzu",
    option2: "Dachshund",
    option3: "Beagle"
}, {
    name: "Shih Tzu",
    img: "https://cdn05.zipify.com/Nb8i-PVuOo_s_A6Osvpzb2ntla8=/fit-in/3840x0/6c076f3372004295bedc2d8f219c129a/2.jpeg",
    option1: "Poodle",
    option2: "Shih Tzu",
    option3: "Chihuahua"
}, {
    name: "Beagle",
    img: "https://image.petmd.com/files/styles/863x625/public/2022-10/beagle-dog.jpg",
    option1: "Beagle",
    option2: "Terrier",
    option3: "Cavalier"
}, {
    name: "Terrier",
    img: "https://cdn.britannica.com/49/233849-050-2ECC4F03/Yorkshire-terrier-dog-running.jpg",
    option1: "Pug",
    option2: "Bulldog",
    option3: "Terrier"
}, {
    name: "Pug",
    img: "https://cdn.britannica.com/35/233235-050-8DED07E3/Pug-dog.jpg",
    option1: "Poodle",
    option2: "Golden Retriever",
    option3: "Pug"
}
]
let score = 0;

async function getResult() {
    result.classList.remove("hidden")
    questions.classList.add("hidden")
    const percent = Math.floor((score / 6) * 100);
    resultPercent.innerText = `${percent}%`;
    if (percent >= 90) {
        praise.innerText = "Amazing Job!";
    } else if (percent >= 75) {
        praise.innerText = "Great Job!";
    } else if (percent >= 50) {
        praise.innerText = "Good Job!";
    } else if (percent >= 25) {
        praise.innerText = "You Could Do Better";
    } else {
        praise.innerText = "FAILURE! YOU SHOULD BE ASHAMED OF YOURSELF!";
    }
}
async function renderQs(i, button) {
    if (i < 6) {
        await btnView();
        await new Promise(resolve => setTimeout(resolve, 500));
        clicked = false
        dogImg.src = question[i].img;
        btn1.innerText = question[i].option1;
        btn2.innerText = question[i].option2;
        btn3.innerText = question[i].option3;
        if (questionNum !== 0) {
            button.classList.remove("correct")
            button.classList.remove("incorrect")
        }
        
    } else if (questionNum >= 6) {
        getResult()
    }
    await new Promise(resolve => setTimeout(resolve, 700));
    btn[0].classList.add("btn-view");
    await new Promise(resolve => setTimeout(resolve, 300));
    btn[1].classList.add("btn-view");
    await new Promise(resolve => setTimeout(resolve, 300));
    btn[2].classList.add("btn-view");
    console.log("hello")
}

async function btnView() {
    if (questionNum !== 0) {
        btn[0].classList.remove("btn-view");
        btn[1].classList.remove("btn-view");
        btn[2].classList.remove("btn-view");
        console.log("tjere")
    }
}

async function checkAnswer(btn, i) {
    console.log(btn.innerText)
    if (!clicked) {
        clicked = true
        if (questionNum < 6) {
            if (btn.innerText === question[i].name) {
                score++;
                btn.classList.add("correct")
            }
            if (btn.innerText !== question[i].name) {
                btn.classList.add("incorrect")
            }
            questionNum++;
        }
    }
    await new Promise(resolve => setTimeout(resolve, 500));
}



renderQs(questionNum)

btn1.addEventListener("click", async() => {
    await checkAnswer(btn1, questionNum);
    renderQs(questionNum, btn1);
})

btn2.addEventListener("click", async() => {
    await checkAnswer(btn2, questionNum)
    renderQs(questionNum, btn2);
})

btn3.addEventListener("click", async() => {
    await checkAnswer(btn3, questionNum)
    renderQs(questionNum, btn3);
})
