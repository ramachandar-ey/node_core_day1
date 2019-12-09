function async(a,b){
    setTimeout(()=>{
        return a+b;
    },0)
};

function sync(a,b){
  return a+b;
}


console.log(async(2,3));

console.log(sync(10,10));