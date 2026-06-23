import AuthService from "../services/auth.service.js";

// POST /auth/login
const login = (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son requeridos." });
    }

    const token = AuthService.login(email, password);

    if (!token) {
      return res.status(401).json({ error: "Credenciales inválidas. Acceso no autorizado." });
    }

    res.status(200).json({
      message: "Login exitoso.",
      token,
      type: "Bearer",
    });
  } catch (error) {
    console.error("Error en el login:", error.message);
    res.status(500).json({ error: "Error interno durante la autenticación." });
  }
};

export default { login };
