import mongoose, { Document, Schema } from "mongoose";

export interface ISignupFormSchema extends Document {
  name: string;
  email: string;
  password: string;
}

const SignupSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    default: "user",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let SignupFormSchema;
try {
  SignupFormSchema = mongoose.model<ISignupFormSchema>("user");
} catch (err) {
  SignupFormSchema = mongoose.model<ISignupFormSchema>("user", SignupSchema);
}

export default SignupFormSchema;
