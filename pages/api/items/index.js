const handler = async (req, res) => {
  const { itemsId } = req.query;
  res.status(200).json(`This is the All items `);
};

export default handler;
