console.log('task-1');

setTimeout(()=>{
    console.log('task-2') //blocking 
},100);


console.log('task-3');


setTimeout(()=>{
    console.log('task-4')
},0);

console.log('task-5');//non blocking io