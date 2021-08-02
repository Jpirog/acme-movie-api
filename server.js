const app = require('./app');
const { syncAndSeed } = require('./db');

async function startServer() {
   try {
     await syncAndSeed();
     const port = process.env.PORT || 3116;
     app.listen(port, () => {
        console.log(`Server started and listening on port ${port}`)
    })
   }
  catch(ex){
    console.log("Exception in main server.js trying to start the server:", ex);
  }
} 

startServer();
