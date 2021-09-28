import { Document, Schema, Model, model } from 'mongoose';

// interface describes the properties that are required to create new User to use typescript type checking
interface UserAttrs {
  email: string;
  password: string;
}

// interface describes User Model to tell typescript add new build function
interface UserModel extends Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// interface describes properties of User Document
interface UserDoc extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = model<UserDoc, UserModel>('User', userSchema);

export { User };
