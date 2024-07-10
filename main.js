let data , correctanswerindex
let questionIndex = 0
let select= false
let scores = 0

const BoxScore = document.querySelector('.BoxScore')
const answerdiv = document.querySelectorAll('.answer')
const getData = async () => {
    const maindata = await fetch("./data/dataQuestion.json")
    const data = await maindata.json();
    return newData(data.results)

}


function newData(data){
    const formData = data.map((item)=>{
        const object = {'question' : item.question}
        const answers = item.incorrect_answers
        const corretindex = Math.floor(Math.random() * 4)
        answers.splice(corretindex, 0 , item.correct_answer)
        object.answers = answers
        object.correctindex = corretindex
        console.log(answers)
        return object
    })
    return formData
}


function ShowQues() {
    const { question, answers, correctindex } = data[questionIndex]
    const divQues = document.querySelector(".question")

    divQues.innerText = question
    correctanswerindex = correctindex
    console.log(correctanswerindex);

    answerdiv.forEach((element, index) => {

        element.innerText = answers[index]

        element.addEventListener("click", (e) => Btn(e, index))
    });
    document.querySelector(".loaded").style.display = "none"

}


function Btn(e, index) {
    if (select) return
    const correct = index == correctanswerindex ? true : false
    if (correct) {
        select = true
        e.target.classList.add("bg-success")
        scores++
        BoxScore.innerText = scores
    }
    else {
        select = true;
        e.target.classList.add("bg-danger")
        answerdiv[correctanswerindex].classList.add("bg-success")
    }
}


const questionNum= document.querySelector('.questionNumber')

// const handQuestion = () => {
//     const {question,answers,correctindex} = data[questionIndex]
//     const clquestion = document.querySelector('.question')
//     question.innerText = question
//     correctanswerindex = correctindex
//     console.log(data[questionIndex])
//
//
// }

document.querySelector('.next').addEventListener('click', () => {
    console.log(questionIndex,data.length)
    if (questionIndex < data.length){
        if (select){
            questionIndex++
            questionNum.innerText = questionIndex
            select = false
            ShowQues()
            answerdiv.forEach((element , index ) =>{
                console.dir(element);
                element.classList.remove("bg-success","bg-danger")

            })
        }
    }
    else {
        console.log(good)
        localStorage.setItem("score" , scores)
    }
})
window.addEventListener('load', async () => {
    data = await getData()
    ShowQues()


})
const addScore = ()=>{
    const score = localStorage
}


