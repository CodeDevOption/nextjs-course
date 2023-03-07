const handler = async (req, res) => {
  res.setPreviewData({
    id: Date.now(),
    name: req.query.name || "Preview Name",
    email: req.query.email || "preview@email.com",
  });
  res.redirect(req.query.redirect);
};

export default handler;
