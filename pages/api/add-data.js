import connection from "@/database/conn";

const handler = async (req, res) => {
  connection().catch((error) => {
    res.json({ message: "database Connection Error", error });
  });
  res.status(200).json({ message: "database Connection Successfully" });
};

export default handler;
