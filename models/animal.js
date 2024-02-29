const { model, Schema } = require('mongoose')


const animalSchema = new Schema ({
    name: { required: true, type: String },
    species: { required: true, type: String },
    image: { required: true, type: String },
    reservedForAdoption: { type: Boolean },
    user: { type: Schema.Types.ObjectId, ref: 'User'}

})

const Animal = model('Animal', animalSchema)

module.exports = Animal