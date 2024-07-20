const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    githubId: String,
    username: String,
    password: String
});

userSchema.methods.validPassword = function (password) {
    // Implement password validation logic
    return this.password === password; // Replace with a more secure comparison
};

userSchema.statics.findOrCreate = async function (profile) {
    let user = await this.findOne({ githubId: profile.id }).exec();
    if (!user) {
        user = new this({
            githubId: profile.id,
            username: profile.username
        });
        await user.save();
    }
    return user;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
