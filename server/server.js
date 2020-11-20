const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebook");

app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
