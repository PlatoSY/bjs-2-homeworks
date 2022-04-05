//1

function parseCount(number) {
  console.log(number);
  let parsed = Number.parseInt(number);
  // console.log(parsed);

  if (isNaN(parsed)) {
    const nonLiquid = new Error(`Невалидное значение`);
    throw nonLiquid;
  } else return parsed;
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
      const wrongTriangle = new Error(
        `Треугольник с такими сторонами не существует`
      );
      throw wrongTriangle;
    }
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    let p = (1 / 2) * this.getPerimeter();
    let triangleSquare = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c)
    );
    let triangleSquareNumber = Number(triangleSquare.toFixed(3));
    return triangleSquareNumber;
  }

  //совершенно не понимаю логику , которая должна быть внизу. Как только я пытаюсь писать эту функцию, рушатся все проверки тестов , которые верные были до этого . Ошибка вверху где-то? Новый объект треугольникак это же через new делается? Как его вернуть с двумя методами?

  //   getTriangle (a,b,c) {
  //       let triangleObject = new Triangle;
  //       try {
  //           return triangleObject ;
  //       } catch {
  //           getArea() {
  //               return `Ошибка! Треугольник не существует`
  //           },
  //           getPerimeter() {
  //               return `Ошибка! Треугольник не существует`
  //           }
  //       }
  //   }
}
