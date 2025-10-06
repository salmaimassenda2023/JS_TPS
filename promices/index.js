console.log("Programm Strated");
const myPromise = new Promise(
    (resole,reject)=>{
        console.log("Programm is in prograss");
        setTimeout(
            ()=>{
                resole("Program Comlete ")
            },3000
        )
    }
);
// is still pending
console.log(myPromise);
// when it s comleted
myPromise.then(
    (msg)=> { console.log(msg)}
)