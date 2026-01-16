const mongoose = required('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    guestEmail: String,
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
        quantity: Number,
        price: Number 
    }],
    totalamount: { type: Number, required: true },
    shippingAddress: {
        name: String,
        phone: String,
        street: String, 
        city: String,
        province: String,
        postalCode: String
    },
    deliveryMethod: {
        type: String,
        enum: ['collection', 'paxi'],
        required: true
    },
    paxiPoint: String,
    paymentReference: String,
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending'
    },
    orderStatus: {
        type: String,
        enum: ['processing', 'shipped', 'delivered', 'cancelled'],
        default: 'processing'
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);