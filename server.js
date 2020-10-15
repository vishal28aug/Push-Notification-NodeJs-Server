const express = require('express');

const app = express();

//routes
const notification = require('./routes/api/notification');

//Body parser
app.use(express.json());

//Mount routers
app.use('/api/notification', notification);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('server started');
})