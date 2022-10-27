console.log("hello world v");
const path = require('path')
const express = require('express')
const app = express()
const port = 3000



app.use(express.static('/images'))


app.get('/user', (req, res) => {
  res.send('Hello World!')
})



app.get('/image', (req, res) => {
  let imagepath= path.join(__dirname,'image.png')
  res.sendFile(imagepath)
})


app.get('/dynamicimage', (req, res) => {
  let a=req.query.name
  let imagepath= path.join(__dirname,'/images/',a)
  if(a== 'image.png'||a== 'image1.png'||a== 'image2.png'){
   
    res.sendFile(imagepath)
  //console.log(req.query.name)
}
  else{
    console.log('image is not fond')
    res.send('image is not fond')
  }
  //res.send(a)
   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
