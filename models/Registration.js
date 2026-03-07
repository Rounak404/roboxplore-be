import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  branch: {
    type: String,
    required: true,
    trim: true,
  },
  regdNo: {
    type: String,
    required: true,
    trim: true,
  },
  contactNo: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
})

const registrationSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
    trim: true,
  },

  leader: {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      type: String,
      required: true,
      trim: true,
    },
    regdNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    contactNo: {
      type: String,
      required: true,
      unique:true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
      trim: true,
    },
  },

  members: {
    member2: memberSchema,
    member3: memberSchema,
    member4: memberSchema,
    member5: memberSchema,
  },

  paymentScreenshot: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },

  registeredAt: {
    type: Date,
    default: Date.now,
  },
})

const Registration = mongoose.model('Registration', registrationSchema)

export default Registration
