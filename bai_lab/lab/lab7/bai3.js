// Định nghĩa lớp cha Car
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// Phương thức tăng tốc độ trong lớp cha Car
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} tăng tốc, tốc độ mới: ${this.speed} km/h`);
};

// Phương thức giảm tốc độ trong lớp cha Car
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} giảm tốc, tốc độ mới: ${this.speed} km/h`);
};

// Định nghĩa lớp con ElectricCar kế thừa từ lớp Car
function ElectricCar(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

// Kế thừa phương thức từ lớp cha Car
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

// Phương thức sạc pin của ElectricCar
ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`Đã sạc pin lên ${this.charge}%`);
};

// Phương thức tăng tốc độ của ElectricCar
ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} đi với vận tốc ${this.speed} km/h, với mức pin ${this.charge}%`
  );
};

// Khởi tạo đối tượng ElectricCar
const tesla = new ElectricCar("Tesla", 120, 23);

// Thực hiện các phương thức
console.log(
  `Dữ liệu xe: Xe ô tô ${tesla.make} đang di chuyển với vận tốc ${tesla.speed} km/h, có mức pin là ${tesla.charge}%`
);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
