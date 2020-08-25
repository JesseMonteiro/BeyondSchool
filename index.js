/* 
console.log("Hello World!")

function joinner (...arr){
    var result = arr.join(',')
    return result
}

console.log(joinner('Jesse', 'lindo', 'demais'))

console.log(joinner('Jesse', 'Você', 'Consegue'))

function desconstruction (firstName, lastName){
    return firstName + ' ' + lastName
}

console.log(desconstruction(...['Jesse', 'Monteiro']))

var person = {
    name: 'Jesse',
    age: '26'
}

for (let e in person){
    console.log(e)
}

var arr = ['Jesse', 'Monteiro']

for (let e of arr){
    console.log(e)
}

function logArrayElements (element, index){
    console.log(index + ' Nome: ' + element)
}

arr.forEach(logArrayElements)

function waitBeforeWelcome (time) {
    const barrier = new Promise(function(resolve, reject){
       
       if(time < 10000){
            setTimeout(function(){
                resolve()
            }, time )

    } else {
        const error = new Error ('Time must be less then 10 seconds')
        reject(error)
    }

})

    barrier
    .then(function (){
        console.log('Hello Welcome')
    })

    .catch(function(error){
        console.log(error)
    })

}

waitBeforeWelcome(3000)

arrow functions

function waitBeforeWelcome (time) {
    const barrier = new Promise((resolve, reject) =>{
       
       if(time < 10000){
            setTimeout(() => {
                resolve()
            }, time )

    } else {
        const error = new Error ('Time must be less then 10 seconds')
        reject(error)
    }

})

    barrier
    .then( () => {
        console.log('Hello Welcome')
    })

    .catch((error) => {
        console.log(error)
    })

}

waitBeforeWelcome(1000)


async function waitBeforeWelcome(time) {
    const welcome = new Promise((resolve, reject) => {

        if (time < 10000) {
            setTimeout(() => {
                resolve('Hello world')
            }, time)

        } else {
            const error = new Error('Time must be less then 10 seconds')
            reject(error)
        }

    })
    const presentation = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('My name is Jesse')
        }, 3000)
    })

    try {
        const msg1 = await welcome
        console.log(msg1)

        const msg2 = await presentation
        console.log(msg2)
    } catch (error) {
        console.log(error)
    }

}

waitBeforeWelcome(1000)

*/

const Robot = require("./robot");

const robot = new Robot('Hana', 1, 2)

robot.walkForward()
console.log(robot.getPos())

robot.walkBackward()
console.log(robot.getPos())

robot.teleport(200, 127)
console.log(robot.getPos())



