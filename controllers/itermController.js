const Iterm = require("../models/itermModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllIterms = catchAsync(async (req, res, next) => {

  const iterms = await Iterm.findAll({});
  
  res.status(200).json({
    status: "success",
    iterms,
  });
});

exports.createIterm = catchAsync(async (req, res, next) => {
  const iterm = await Iterm.create(req.body);
  res.status(200).json({
    status: "success",
    iterm,
  });
});
