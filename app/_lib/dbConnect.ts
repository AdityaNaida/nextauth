import mongoose from "mongoose";

let connected: Boolean = false;

export default function UserDB() {
  if (connected) return;
  mongoose.connect(
    "mongodb+srv://adityanaida:vy8SwJ13L4K4G5ru@cluster0.zz4ws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      dbName: "nextauth",
    }
  );

  const connection = mongoose.connection;

  connection.once("open", () => {
    connected = true;
    console.log("MongoDB database connection established successfully.");
  });
}
