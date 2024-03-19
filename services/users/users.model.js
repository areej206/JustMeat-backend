const mongoose = require("mongoose")

const UseSchema = mongoose.Schema({
    name: {
        require: true,
        type: String
    }

})

const User = mongoose.model('User'. UseSchema)

module.export = User