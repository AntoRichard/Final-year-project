const mongoose = require('mongoose');


class Database  {
    async databaseConnection() {
        try {
            await mongoose.connect('mongodb://localhost/exam', { useNewUrlParser: true, useUnifiedTopology: true  });
            console.log('Database connected');
        } catch (err) {
            console.log(err.message);
        }
    }
}

module.exports = Database;