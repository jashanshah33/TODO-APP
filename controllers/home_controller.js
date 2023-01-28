const List = require("../models/list");

module.exports.home = function (req, res) {
  List.find({}, function (err, list) {
    if (err) {
      console.log("Unable to fetch Data");
    }
    res.render("home", {
      title: "Todo List",
      custon_id: "",
      todoList: list,
    });
  });
};

module.exports.create_list = function (req, res) {
  //console.log(req.body);
  if (!req.body.description || !req.body.categories || !req.body.date) {
    console.log('Fill all values');
    return res.redirect("back");
  }
  List.create({
    description: req.body.description,
    categories: req.body.categories,
    date: req.body.date,
  });

  return res.redirect("back");
};

module.exports.delete_list = async function (req, res) {
  //console.log(req.body);
  let ids = req.body.ids;

  if (typeof ids === "string") {
    ids = [ids];
  }

  let deleted = await List.deleteMany({
    _id: {
      $in: ids,
    },
  });

  return res.redirect("back");
};
