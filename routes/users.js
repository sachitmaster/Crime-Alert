require('dotenv').config()
const mongoose =  require('mongoose')
const plm = require('passport-local-mongoose')

mongoose.connect(`mongodb+srv://sachitkumarsahu6:QDo4u55akvTsNTW9@cluster0.yzju8.mongodb.net/`)

// Define the user schema
const userSchema =  mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  password: {
    
    type: String,
  },
});

// Create the User model
userSchema.plugin(plm)
module.exports  = mongoose.model('User', userSchema);