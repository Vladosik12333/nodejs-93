const wrapper = (ctrl) => (req, res, next) => {
  try {
    ctrl(req, res);
  } catch (error) {
    next(error);
  }
};

module.exports = wrapper;
