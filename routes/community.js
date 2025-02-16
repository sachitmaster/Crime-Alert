require('dotenv').config()

const mongoose =  require('mongoose')
const plm = require('passport-local-mongoose')

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.mmjrsjm.mongodb.net/?retryWrites=true&w=majority`)

// Define the user schema
const communitySchema =  mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

// Create the User model
userSchema.plugin(plm)
module.exports  = mongoose.model('Community', communitySchema);