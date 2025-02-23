import { connect } from "mongoose";

const NEXT_MONGODB_URI =
  process.env.NEXT_MONGODB_URI || "mongodb://localhost:27017/polls";

const options = {
  useUnifiedTopology: true,
  autoIndex: true,
};

const connectToDatabase = (): Promise<typeof import("mongoose")> =>
  connect(NEXT_MONGODB_URI, options);

export default connectToDatabase;
