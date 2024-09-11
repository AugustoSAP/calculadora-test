

class Calculadora {
    static somar(a, b) {
      return a + b;
    }
  
    static subtrair(a, b) {
      return a - b;
    }
  
    static multiplicar(a, b) {
      return a * b;
    }
  
    static dividir(a, b) {
      if (b === 0) {
        throw new Error("Divisão por zero não permitida");
      }
      return a / b;
    }
  }
  
  module.exports = Calculadora;
  