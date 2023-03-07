const handler = async (req, res) => {
  const { itemsId } = req.query;
  res.status(200).json(itemsId);
};

export default handler;
