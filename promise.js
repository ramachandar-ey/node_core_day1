function task1(a,b){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
          //  resolve(a+b)
           reject('something went wrong')
        },200)
    })
}


task1(23,34)
.then((resp)=>{
    console.log(resp)
}).catch((err)=>{
    console.log('error',err)
})