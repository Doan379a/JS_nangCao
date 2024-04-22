const game = {
  team1: "Bayern Munich",
  tema2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pacard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2024",
  odds: {
    team1: 1.33,
    x: 3.25,
    tema2: 6.5,
  },
};

// 1
const gameEvents = [
  { minute: 17, event: " Vào" },
  { minute: 36, event: " Thay người - Weigl ra, Ben vào" },
  { minute: 47, event: " Vào" },
  { minute: 61, event: " Thay người - Brandt ra, Reyna vào" },
  { minute: 64, event: " Thẻ vàng - Davies" },
  { minute: 69, event: " Vào" },
  { minute: 72, event: " Thay người - Coman ra, Rons vào" },
  { minute: 76, event: " Thẻ vàng - Hummels" },
  { minute: 82, event: " Vào" },
  { minute: 87, event: " Thay người - Gnarby ra, Musiala vào" },
];

// Tạo mảng chứa các sự kiện khác nhau không trùng nhau
const events = [...new Set(gameEvents.values())];

console.log(events);
// 2
// gameEvents.delete(64);
// 3
console.log(`1 sự kiện xảy ra, trung bình mỗi ${90 / gameEvents.length} phút`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `1 sự kiện xảy ra, trung bình mỗi ${time / gameEvents.length} phút`
);

// 4
for (const event1 of gameEvents) {
  const { minute, event } = event1;
  const hiep = minute <= 45 ? "Hiệp 1" : "Hiệp 2";

  console.log(`[${hiep}] Phút ${minute}: ${event}`);
}

// ///////////////////////////////////////
function convertAndLog() {
  const inputText = document.getElementById("inputText").value;

  // Tách  mảng các từ
  const words = inputText.split(/\s+/);

  const camelCaseWords = words.map((word) => {
    const parts = word.split("_");
    return (
      parts[0] +
      parts
        .slice(1)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("")
    );
  });

  camelCaseWords.forEach((result, index) => {
    const checkmarks = "✅".repeat(index + 1);
    console.log(result, checkmarks);
  });
}

/////////////////////////////
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener(
    "click",
    (function (header) {
      return function () {
        header.style.color = "blue";
      };
    })(header)
  );
})();
