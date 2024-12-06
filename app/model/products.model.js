const mongoose = require('mongoose');

// Định nghĩa mô hình sản phẩm
const createProductsModel = () => {
    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true, // Có thể thêm yêu cầu nếu cần
        },
        price: {
            type: Number,
            required: true, // Có thể thêm yêu cầu nếu cần
        },
        screen: {
            type: String,
        },
        blackcamera: {
            type: String,
        },
        frontcamera: {
            type: String,
        },
        img: {
            type: String,
        },
        description: {
            type: String,
        },
        type: {
            type: String,
        }
    });

    return mongoose.model('Product', productSchema);
};

module.exports = {
    createProductsModel,
};
