const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema(
  {
     name: {
      type: String,
      trim:true,
      require: "Please Enter Your name Dude"
        },

      email:  {
        type: String,
        required: 'email should be present',
        unique: true,
        trim:true,
        lowercase:true,
      },
      
       mobile: {
        type: Number, 
        required: 'Mobile Number should be present',
        unique: true,
        trim:true,
      },
      
       collegeId: {
           type:ObjectId,
            ref: 'college' 
        },
        isDeleted: {
            type:Boolean, 
            default: false
          }

},{ timestamps: true }
);

module.exports = mongoose.model("intern", internSchema);