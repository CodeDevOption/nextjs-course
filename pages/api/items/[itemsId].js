const handler = async (req, res) => {
  const { itemsId } = req.query;
  res.status(200).json(`Item Found ID : ${itemsId}`);
};

export default handler;
