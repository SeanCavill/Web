exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.benefactorBoard = (req, res) => {
  res.status(200).send("Benefactor Content.");
};

exports.memberBoard = (req, res) => {
  res.status(200).send("Member Content.");
};
