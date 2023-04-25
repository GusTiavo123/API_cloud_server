require('dotenv').config(); 

module.exports = {
    APP_PORT: 3000,
    
    dbConfig: {
        uri: process.env.MONGODB_URI,
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
    }
};

