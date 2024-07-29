import mongoose, { Document, Schema } from 'mongoose';

interface IState extends Document {
  name: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

const stateSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

const State = mongoose.model<IState>('State', stateSchema);

export default State;
export { IState };
