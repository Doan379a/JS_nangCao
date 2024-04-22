class Car {
  constructor(make, speed) {
    this.make = make;
    this._speed = speed;
  }

  // Phương thức tăng tốc độ
  accelerate() {
    this._speed += 10;
    console.log(`${this.make} tăng tốc, tốc độ mới: ${this._speed} km/h`);
  }

  // Phương thức giảm tốc độ
  brake() {
    this._speed -= 5;
    console.log(`${this.make} giảm tốc, tốc độ mới: ${this._speed} km/h`);
  }

  // Getter speedUS
  get speedUS() {
    return this._speed / 1.60934;
  }

  // Setter speedUS
  set speedUS(speedUS) {
    this._speed = speedUS * 1.60934;
  }
}

// Khởi tạo đối tượng ô tô (Car)
const car = new Car("Ford", 120);

// Test các phương thức và getter/setter
console.log(
  `Dữ liệu xe: Xe ô tô ${car.make} đang di chuyển với vận tốc ${car._speed} km/h`
);

car.accelerate();
car.brake();

console.log(
  `Tốc độ hiện tại của ${car.make} là ${car.speedUS.toFixed(2)} mi/h`
);

car.speedUS = 60; // Đổi tốc độ sang mi/h
console.log(
  `Đổi tốc độ sang mi/h, tốc độ mới của ${car.make} là ${car._speed.toFixed(
    2
  )} km/h`
);
