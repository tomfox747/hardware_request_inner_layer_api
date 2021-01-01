const App = require('./app');
const port = 7071;

App.listen(port, () =>{
    console.log(`hardware request inner server is lisening on port ${port}`);
})