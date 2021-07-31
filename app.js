const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World')
});

//  function startServer() {
   const port = process.env.PORT || 3116;
//   try{
    app.listen(port, () => {
      console.log(`Server started and listening on port ${port}`)
    })
//   }
//   catch(ex){
//     console.log("Exception in main app.js", ex);
//   }
// } 

//startServer();

module.exports = app;
