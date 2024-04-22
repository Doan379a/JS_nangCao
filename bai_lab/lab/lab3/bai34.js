// TEST DATA
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

// Bước 1: Tính khẩu phần ăn khuyến nghị và thêm vào mỗi object
dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// Bước 2: Tìm chó của Sarah và kiểm tra khẩu phần ăn
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
if (sarahDog) {
    const diff = sarahDog.curFood - sarahDog.recommendedFood;
    console.log(`Sarah's dog eats ${diff > 0 ? 'too much' : 'too little'}`);
}

// Bước 3: Tạo mảng chủ của chó ăn quá nhiều và chủ của chó ăn quá ít
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

dogs.forEach(dog => {
    const diffPercent = (dog.curFood / dog.recommendedFood) * 100;

    if (diffPercent > 110) {
        ownersEatTooMuch.push(...dog.owners);
    } else if (diffPercent < 90) {
        ownersEatTooLittle.push(...dog.owners);
    }
});

// Bước 4: In ra mảng chủ
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// Bước 5: Kiểm tra xem có chó nào ăn đúng khẩu phần ăn khuyến nghị không
const allEatRecommended = dogs.every(dog => dog.curFood === dog.recommendedFood);
console.log(`All dogs eat recommended food: ${allEatRecommended}`);

// Bước 6: Kiểm tra xem có chó nào ăn ở mức hợp lý không
const allEatReasonably = dogs.every(dog => {
    const diffPercent = (dog.curFood / dog.recommendedFood) * 100;
    return diffPercent >= 90 && diffPercent <= 110;
});
console.log(`All dogs eat reasonably: ${allEatReasonably}`);

// Bước 7: In ra tất cả chó có khẩu phần ăn hợp lý
const dogsEatReasonably = dogs.filter(dog => {
    const diffPercent = (dog.curFood / dog.recommendedFood) * 100;
    return diffPercent >= 90 && diffPercent <= 110;
});
console.log("Dogs that eat reasonably:", dogsEatReasonably);

// Bước 8: Tạo mảng chó mới và sắp xếp theo khẩu phần ăn đề nghị
const sortedDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log("Sorted dogs by recommended food:", sortedDogs);
