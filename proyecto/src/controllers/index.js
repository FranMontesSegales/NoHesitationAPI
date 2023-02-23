function bienvenida(req, res) {
    res.status(200).send('Repiola compadre andas bien picante');
  }
  
  module.exports = {
    bienvenida,
  };
  