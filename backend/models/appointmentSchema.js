import mongoose from "mongoose";
import { Mongoose } from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First Name Must Contain At Least 4 Characters!"]
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "Last Name Must Contain At Least 4 Characters!"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Provide a Validate Email"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [11, "Phone Number Must Contain 11 Digits!"],
        maxLength: [11, "Phone Number Must Contain 11 Digits!"],
    },
    nic:{
        type: String,
        required: true,
        minLength: [13, "NIC Must Contain 13 Digits!"],
        maxLength: [13, "NIC Must Contain 13 Digits!"],   
    },
    dob:{
        type: Date,
        required: [true, "DOB is mendatory!..."],
     
    },
    gender:{
        type: String,
        required: true,
        enum: ["Male" , "Female"], 
    },
    appointment_date: {
        type: String,
        required: [true, "Appointment Date Is Required!"],
      },
      department: {
        type: String,
        required: [true, "Department Name Is Required!"],
      },
      doctor: {
        firstName: {
          type: String,
          required: [true, "Doctor Name Is Required!"],
        },
        lastName: {
          type: String,
          required: [true, "Doctor Name Is Required!"],
        },
      },
      hasVisited: {
        type: Boolean,
        default: false,
      },
      address: {
        type: String,
        required: [true, "Address Is Required!"],
      },
      doctorId: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Doctor Id Is Invalid!"],
      },
      patientId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Patient Id Is Required!"],
      },
      status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
      },

    });
    
 export const Appointment = mongoose.model("Appointment", appointmentSchema);
