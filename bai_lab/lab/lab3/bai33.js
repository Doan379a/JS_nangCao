function calcAverageHumanAge(ages) {
    // Bước 1: Tính tuổi của chó theo tuổi của người
    const dogAgesInHumanYears = ages.map(age => (age <= 2) ? age * 2 : 16 + age * 4);

    // Bước 2: Loại trừ những chú chó dưới 18 tuổi
    const filteredDogAges = dogAgesInHumanYears.filter(age => age > 18);

    // Bước 3: Tính tuổi trung bình của chó trưởng thành
    const averageAge = filteredDogAges.reduce((sum, age) => sum + age, 0) / filteredDogAges.length;

    // Bước 4: In kết quả
    console.log(`Tuổi trung bình của chó trưởng thành theo tuổi người là: ${averageAge.toFixed(2)} tuổi`);
}

// TEST DATA 1
const test1 = [5, 2, 4, 1, 15, 8, 3];
console.log("TEST DATA 1:");
calcAverageHumanAge(test1);

// TEST DATA 2
const test2 = [16, 6, 10, 5, 6, 1, 4];
console.log("\nTEST DATA 2:");
calcAverageHumanAge(test2);
