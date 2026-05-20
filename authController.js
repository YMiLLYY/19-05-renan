const authService = require("../services/authService");

const login = (req, res) => {
  const { email, senha } = req.body;

  const resultado = authService.login(email, senha);

  if (!resultado.success) {
    return res.status(400).json({
      success: false,
      message: resultado.message
    });
  }

  return res.status(200).json({
    success: true,
    message: resultado.message
  });
};

module.exports = { login };