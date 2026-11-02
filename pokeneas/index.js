const app = require('./src/app')

const port = process.env.PORT || 80

app.listen(port, () => {
  console.log(`Pokeneas app listening on port ${port}`)
})
