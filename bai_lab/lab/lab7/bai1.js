// Constructor function để tạo đối tượng Car
function Car(make, speed) {
  this.make = make; // Hãng xe
  this.speed = speed; // Tốc độ (km/h)

  // Phương thức tăng tốc độ
  this.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} tăng tốc, tốc độ mới: ${this.speed} km/h`);
  };

  // Phương thức giảm tốc độ
  this.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} giảm tốc, tốc độ mới: ${this.speed} km/h`);
  };
}

// Khởi tạo đối tượng ô tô 1: BMW đang chạy với tốc độ 120km/h
var car1 = new Car("BMW", 120);

// Khởi tạo đối tượng ô tô 2: Mercedes đang chạy với tốc độ 95km/h
var car2 = new Car("Mercedes", 95);

// Thử nghiệm các phương thức trên mỗi đối tượng
console.log("Thử nghiệm ô tô 1 (BMW):");
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();

console.log("\nThử nghiệm ô tô 2 (Mercedes):");
car2.accelerate();
car2.brake();
car2.accelerate();
car2.brake();
