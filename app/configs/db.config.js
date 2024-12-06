require('dotenv').config();
const mongoose = require('mongoose');

const dbConfig = {
    uri: process.env.DB_URI,
};

mongoose.connect(dbConfig.uri)
    .then(() => console.log('Kết nối MongoDB thành công!'))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err));

module.exports = mongoose;
