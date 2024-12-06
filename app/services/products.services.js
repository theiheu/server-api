const { Products } = require("../model"); // Đảm bảo đường dẫn đúng

const getALl = async () => {
    const productList = await Products.find();
    return productList.length > 0 ? productList : "Not Found!";
};

const getById = async (id) => {
    const product = await Products.findById(id);
    return product;
};

const create = async (name, price, screen, blackcamera, frontcamera, img, description, type) => {
    const newProduct = new Products({ name, price, screen, blackcamera, frontcamera, img, description, type });
    await newProduct.save();
    return newProduct;
};

const update = async (id, name, price, screen, blackcamera, frontcamera, img, description, type) => {
    const product = await Products.findById(id);
    if (product) {
        product.name = name;
        product.price = price;
        product.screen = screen;
        product.blackcamera = blackcamera;
        product.frontcamera = frontcamera;
        product.img = img;
        product.description = description;
        product.type = type;
        const productUpdated = await product.save();
        return productUpdated;
    } else {
        return null;
    }
};

const deleteById = async (id) => {
    const product = await Products.findById(id);
    if (product) {
        await Products.deleteOne({ _id: id });
        return product;
    } else {
        return false;
    }
};

module.exports = {
    getALl,
    getById,
    create,
    update,
    deleteById,
};
