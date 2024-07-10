let list = [ ]
let names = []
let index

const addName =  ()=>{
   const input = document.querySelector('.input')
   const user = document.querySelector('.user')
    const userObj = {
       userId : `${index}`,
        name : `${input.value}`,
        score : ''
    }
    console.log(index)
    index++

    list.push(userObj)

    localStorage.setItem('users' ,JSON.stringify(list))
    const username = localStorage.getItem('users')
    console.log(username.name)

    location.href = "start.html"
}


