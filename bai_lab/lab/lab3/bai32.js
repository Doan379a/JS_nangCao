function checkDogs(dogsJulia, dogsKate) {
    // Bước 1: Xóa tuổi mèo khỏi mảng của Julia
    const juliaCopy = dogsJulia.slice(2, dogsJulia.length - 2);

    // Bước 2: Tạo mảng có cả dữ liệu của Julia (đã sửa) và Kate
    const combinedData = juliaCopy.concat(dogsKate);

    // Bước 3: In thông tin về mỗi con chó
    combinedData.forEach((age, index) => {
        if (age >= 3) {
            console.log(`Chó số ${index + 1} là người lớn và ${age} tuổi`);
        } else {
            console.log(`Chó số ${index + 1} vẫn là chó con và ${age} tuổi`);
        }
    });
}

// TEST DATA 1
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
console.log("TEST DATA 1:");
checkDogs(dogsJulia1, dogsKate1);

// TEST DATA 2
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
console.log("\nTEST DATA 2:");
checkDogs(dogsJulia2, dogsKate2);
