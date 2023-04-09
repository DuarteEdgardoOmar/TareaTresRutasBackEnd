const app = require('./app.js')

require('dotenv').config()

// const port = process.env.PORT || 3000 //si no encuentra el .env, usa el puerto 3000

const port = 8080 || 3000 //si no encuentra el .env, usa el puerto 3000

app.listen(port, ()=>{
    console.log(`server in port ${port}`)
})