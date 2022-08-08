import mongoose from "mongoose";

type IMongooseProps = {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
};

function connectToDatabase({
  useNewUrlParser,
  useUnifiedTopology,
}: IMongooseProps) {
  mongoose.connect(`${process.env.DATABASE_URL}`, {
    useNewUrlParser,
    useUnifiedTopology,
  });

  const db = mongoose.connection;
  db.on("error", (error) =>
    console.log("Erro ao conectar no banco de dados", error)
  );
  db.once("open", () => console.log("🎁 Conectado no banco de dados"));
}

export default connectToDatabase;
