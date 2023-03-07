const users = [
  { id: 1, name: "sadaruwan" },
  { id: 2, name: "lahiru" },
];

const handler = async (req, res) => {
  const { id, name } = req.body;

  const user = users.find((user) => user.id === parseInt(id));
  const index = users.indexOf(user);

  switch (req.method) {
    case "GET":
      return res.status(200).json(users);
    case "POST":
      users.push({ id: Date.now(), name: name });
      console.log(name);
      return res.status(200).json(users);
    case "PUT":
      console.log();

      if (index == -1) {
        return res.status(404).json("User Not Found");
      }

      users.splice(index, 1, { ...user, name });
      return res.status(200).json(users);
    case "DELETE":
      if (index == -1) {
        return res.status(404).json("User Not Found");
      }

      users.splice(index, 1);
      return res.status(200).json(users);
  }
};

export default handler;
