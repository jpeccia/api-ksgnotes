class SessionsControllers {
  async create() {
    const { email, password } = request.body;

    return response.json({ email, password });
  }
}

module.exports = SessionsControllers;
