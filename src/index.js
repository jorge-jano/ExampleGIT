const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("hello word")
})

app.listen(5000)
console.log("aplicacion corriendo en el puerto 5000")