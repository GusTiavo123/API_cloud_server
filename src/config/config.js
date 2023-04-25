module.exports = {
    APP_PORT: 3000,
    
    dbConfig: {
        uri: 'mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority',
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
    }
};

