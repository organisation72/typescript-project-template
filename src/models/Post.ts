import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  title: String,
  content: String
})

const model = mongoose.model('Post', schema)

export default model
