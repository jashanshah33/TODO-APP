const List = require("../models/list");

// const todoList = [
//   {
//     description: "car wash",
//     category: "personal",
//     date: "APR 28, 2019",
//   },
//   {
//     description: "project",
//     category: "school",
//     date: "JUNE 02, 2019",
//   },
//   {
//     description: "room paint",
//     category: "Home",
//     date: "jan 08, 2020",
//   },
// ];

module.exports.home = function (req, res) {
  List.find({}, function (err, list) {
    if (err) {
      console.log("Unable to fetch Data");
    }
    res.render("home", {
      title: "Todo List",
      todoList: list,
    });
  });
};

module.exports.create_list = function (req, res) {
  console.log(req.body);

  List.create({
    description: req.body.description,
    categories: req.body.categories,
    date: req.body.date,
  });

  return res.redirect("back");
};

module.exports.delete_list = function (req, res) {
  console.log("deleted");

  return res.redirect("back");

};
