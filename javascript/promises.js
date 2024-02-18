#!/usr/bin/node
// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

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
            
            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You took the trash out");
            }
            else{
                reject("You didnt take the trash out");
            }
        }, 1500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log('Good job you did it!!')})
         .catch(error => console.error(error));
