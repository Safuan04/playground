#!/usr/bin/node
// Async/Await = Async = makes a function return a promise
//                            Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const walkDog = true;

            if(walkDog){
            resolve("You walk the dog");
            }
            else{
                reject("You didnt walk the dog");
            }
        }, 2000);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You cleaned the kitchen");
            }
            else{
                reject("You didnt clean the kitchen");
            }
        }, 3000);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = false;

            if(trashTakenOut){
                resolve("You took the trash out");
            }
            else{
                reject("You didnt take the trash out");
            }
        }, 1500);
    });
}

async function doChores(){

    try{
        const walkdogResult = await walkDog();
        console.log(walkdogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("Good job yu did it!!")
    }
    catch(error){
        console.error(error)
    }

}

doChores();
