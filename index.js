const express = require('express');
require('dotenv/config');
const app = express();
require('./src/routers/routers')(app);

app.listen(process.env.PORT || '4000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
});