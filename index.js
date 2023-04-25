const app = require('./src/app.js');
const {APP_PORT} = require('./src/config/config.js');

async function stratServer() {
    app.listen(APP_PORT, (err) =>{
        if (err) {
            console.log(err);
            return;
        }
        console.log("Server is running on port " + APP_PORT);
    });
}

stratServer();