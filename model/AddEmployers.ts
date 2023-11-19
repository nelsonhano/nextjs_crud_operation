import mongoose, {Schema} from "mongoose";

const employerSchema = new Schema({
    firname: { 
        type: String, 
        required: [true, "Name is required."],
        trim: true,
        minLength: [2, "Name must be larger than 2 characters"],
        maxLength: [20, "Name must be less than 20 characters"]
     },
    number: { 
        type: String, 
        required: [true,"Number is required"],
        trim: true,
     },
    email: { 
        type: String, 
        required: [true, "Email is required."],
        trim: true,
     },
    status: { 
        type: String, 
        required: [true, "Check field is requied"],
     },
    date: { type: String, required: true },
})

export const Employer = mongoose.model("Employer", employerSchema);
export default Employer;