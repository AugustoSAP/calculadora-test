// calculadora.test.js

const Calculadora = require('./calculadora');

test('deve somar dois números corretamente', () => {
  expect(Calculadora.somar(1, 2)).toBe(3);
});

test('deve subtrair dois números corretamente', () => {
  expect(Calculadora.subtrair(5, 3)).toBe(2);
});

test('deve multiplicar dois números corretamente', () => {
  expect(Calculadora.multiplicar(4, 3)).toBe(12);
});

test('deve dividir dois números corretamente', () => {
  expect(Calculadora.dividir(6, 3)).toBe(2);
});

test('não deve permitir divisão por zero', () => {
  expect(() => {
    Calculadora.dividir(1, 0);
  }).toThrow("Divisão por zero não permitida");
});
