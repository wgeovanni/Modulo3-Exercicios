// Classe abstrata
class Form {

    calculateArea() {
        throw new Error("Método deve ser implementado na classe concreta")
    };

    calculatePerimeter() {
        throw new Error("Método deve ser implementado na classe concreta")
    };
}

// Cada classe que estende de Form deve implementar o cálculo de área e perímetro
class Square extends Form {
    constructor(type, measurements) {
        super()
        this.type = type;
        this.measurements = measurements
    }

    calculateArea() {
        let area = this.measurements.side * this.measurements.side;
        return area;
    }

    calculatePerimeter() {
        let perimeter = 4 * this.measurements.side;
        return perimeter;
    }
}

class Circle extends Form {
    constructor(type, measurements) {
        super()
        this.type = type
        this.measurements = measurements
    }

    calculateArea() {
        let area = Math.PI * this.measurements.radius * this.measurements.radius
        return area.toFixed(2);
    }

    calculatePerimeter() {
        let area = 2 * Math.PI * this.measurements.radius
        return area.toFixed(2)
    }
}

class Triangle extends Form {
    constructor(type, measurements) {
        super()
        this.type = type
        this.measurements = measurements
    }

    calculateArea() {
        let area = (this.measurements.base * this.measurements.height) / 2
        return area.toFixed(2)
    }

    calculatePerimeter() {
        let perimeter = this.measurements.side1 + this.measurements.side2 + this.measurements.side3
        return perimeter
    }
}

function calculateFormArea(form) {
    return form.calculateArea()
}

function calculateFormPerimeter(form) {
    return form.calculatePerimeter()
}
// Unitary tests
const forma1 = new Square('square', { side: 5 });
console.log('Área do quadrado:', calculateFormArea(forma1));
console.log('Perímetro do quadrado:', calculateFormPerimeter(forma1));

const forma2 = new Circle('circulo', { radius: 3 });
console.log('Área do círculo:', calculateFormArea(forma2));
console.log('Perímetro do círculo:', calculateFormPerimeter(forma2));

const forma3 = new Triangle('triangulo', { base: 4, height: 6, side1: 3, side2: 4, side3: 5 });
console.log('Área do triângulo:', calculateFormArea(forma3));
console.log('Perímetro do triângulo:', calculateFormPerimeter(forma3));