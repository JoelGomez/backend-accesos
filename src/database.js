const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/crud-api-mean', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)

.then((db) => console.log('DB is conected'))
.catch((err) => console.log('Error trying connect ', err));