const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser'); // without this module it is not possible to receive json on request
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

require('./app/components/User/User')(app);
require('./app/components/Client/Client')(app);
require('./app/components/Unity/Unity')(app);
require('./app/components/User/Login')(app);
require('./app/components/Piece/Piece')(app);
require('./app/components/Color/Color')(app);
require('./app/components/Characteristic/Characteristic')(app);
require('./app/components/Defect/Defect')(app);
require('./app/components/Service/Service')(app);
require('./app/components/Item/Item')(app);


app.listen(3000, () => console.log('Serve ON, PORT:3000'));