const { model, Schema, models } = require('mongoose');

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: false,
  },
}, {
  timestamps: true,
});

module.exports = models.User || model('User', UserSchema);
