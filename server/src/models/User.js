const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword;
    }
})

module.exports = mongoose.model('User', userSchema);