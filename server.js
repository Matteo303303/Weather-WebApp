//NEL PACKAGE.JSON VENGONO INCLUSI NODEMON ed EXPRESS
const express = require ('express')     

const app=express()

app.use(express.static('public'))

app.all('*',(req,res)=>{
    res.send('<h1>ERROR NOT FOUND 404</h1><h2>TORNA ALLA PAGINA CLICCANDO IL  LINK:<a href="/"> Meteo</a></h2>')
   
})

app.listen(80) 
