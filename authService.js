const login = (email, senha) => {
  if (!email || !senha) {
    return {
      success: false,
      message: "E-mail e senha são obrigatórios"
    };
  }

  if (email === "teste@email.com" && senha === "123456") {
    return {
      success: true,
      message: "Login autorizado"
    };
  }

  return {
    success: false,
    message: "E-mail ou senha inválidos"
  };
};

module.exports = { login };