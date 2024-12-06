const mongoose = require('mongoose');
require('dotenv').config();

const checkConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('Kết nối thành công');
    } catch (error) {
        console.log("Kết nối không thành công: ", error);
    }
};

checkConnect();

// Định nghĩa mô hình sản phẩm
const createProductsModel = (mongoose) => {
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        description: String,
        // Thêm các trường khác nếu cần
    });

    return mongoose.model('Product', productSchema);
};

const Products = createProductsModel(mongoose);

module.exports = {
    mongoose,
    Products,
};
