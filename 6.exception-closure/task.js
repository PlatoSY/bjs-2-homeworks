//1

function parseCount(number) {
  console.log(number);
  let parsed = Number.parseInt(number);
  if (isNaN(parsed)) {
    throw new Error(`Невалидное значение`);
  } else {
    return parsed;
  }
}
function validateCount(value) {
  try {
    return parseCount(value);
  } catch (e) {
    return e;
  }
}

//2
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error(`Треугольник с такими сторонами не существует`);
    }
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    const p = (1 / 2) * this.getPerimeter();
    const triangleSquare = Number(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
    );
    return triangleSquare;
    // let triangleSquareNumber = Number(triangleSquare.toFixed(3));
    // return triangleSquareNumber;
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getArea() {
        return `Ошибка! Треугольник не существует`;
      },
      getPerimeter() {
        return `Ошибка! Треугольник не существует`;
      },
    };
  }
}
