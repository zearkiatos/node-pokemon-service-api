const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const { config } = require('./config');
const { logErrors, errorHandler, wrapErrors } = require('./src/middleware/errorHandler');
const notFoundHandler = require('./src/middleware/notFoundHandler');
const router = require('./src/routes');
require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());

router(app);

app.use(notFoundHandler);

// Errors managment middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.PORT, () => {
    console.log(`Listening http://localhost:${config.PORT} ✅`);
});