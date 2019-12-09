function task1(a,b,callbackFn){
  setTimeout(()=>{
   callbackFn('proceesig some erro',null)///blocking

  },0)
}

function task2(a,b){//non bllcking
    return a+b;
}

task1(10,10,function(err,result){
    if(err) console.log('Error: ',err);
    else console.log('Success: ',result);
});

console.log(task2('ram','chandra'))