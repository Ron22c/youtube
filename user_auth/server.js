const express = require('express');

const UserRouter = require('./routers/user.router')

const app = express();

app.use(express.json());

app.use('/api/v1/user', UserRouter);

app.listen(4000, ()=>console.log('server is up on port 4000'))