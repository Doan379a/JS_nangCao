// const content = document.querySelector(".content");
// let url = "http://localhost:3000/products";
// const tbody = document.querySelector("tbody");
// fetch(url)
//   .then((rep) => rep.json())
//   .then((data) => {
//     tbody.innerHTML = data
//       .map(
//         (item) => ` <tr>
//   <td>${item.id}</td>
//   <td>${item.name}</td>
//   <td>${item.price}</td>
//   <td>${item.image}</td>
//   <td>
//     <button data-id="${item.id}" class="btnsua">sua</button>
//     <button data-id="${item.id}" class="btnxoa">xoa</button>
//   </td>
// </tr>`
//       )
//       .join("");
//     //xoa
//     document.querySelectorAll(".btnxoa").forEach((btn) => {
//       btn.addEventListener("click", (e) => {
//         e.preventDefault();
//         id = btn.dataset.id;
//         if (confirm("ban co muon xoa ko")) {
//           fetch(`${url}/${id}`, { method: "DELETE" })
//             .then((rep) => rep.json())
//             .then(() => alert("xoa thanh cong"))
//             .catch((err) => console.log(err));
//         }
//       });
//     });
//     //sua
//     document.querySelectorAll(".btnsua").forEach((btn) => {
//       btn.addEventListener("click", () => {
//         id = btn.dataset.id;
//         fetch(`${url}/${id}`)
//           .then((rep) => rep.json())
//           .then((data) => {
//             const { name, price, image } = data;
//             content.innerHTML = `<form action="">
//           <input type="text" name="" id="proname" value="${name}"/>
//           <input type="text" name="" id="progia" value="${price}"/>
//           <input type="text" name="" id="proanh"value="${image}" />
//           <input type="submit" name="" id="btnsubmit" />
//           </form>`;
//             document
//               .querySelector("#btnsubmit")
//               .addEventListener("click", (e) => {
//                 e.preventDefault();
//                 const proname = document.querySelector("#proname").value;
//                 const progia = document.querySelector("#progia").value;
//                 const proanh = document.querySelector("#proanh").value;
//                 if (!proname || !progia || isNaN(progia)) {
//                   alert("ban nhap chua dung du lieu");
//                   return;
//                 }
//                 const newdata = {
//                   id,
//                   name: proname,
//                   price: progia,
//                   image: proanh,
//                 };
//                 fetch(`${url}/${id}`, {
//                   method: "PUT",
//                   headers: { "Content-Type": "application/json" },
//                   body: JSON.stringify(newdata),
//                 })
//                   .then((rep) => rep.json())
//                   .then(() => alert("sua thanh cong"))
//                   .catch((err) => console.log(err));
//               });
//           })
//           .catch((err) => console.log(err));
//       });
//     });
//   })
//   .catch((err) => console.log(err));
// ////them
// document.querySelector(".btnthem")?.addEventListener("click", () => {
//   content.innerHTML = `<form action="">
//     <input type="text" name="" id="proname" />
//     <input type="text" name="" id="progia" />
//     <input type="text" name="" id="proanh"/>
//     <input type="submit" name="" id="btnsubmit" />
//     </form>`;
//   document.querySelector("#btnsubmit").addEventListener("click", (e) => {
//     e.preventDefault();
//     const proname = document.querySelector("#proname").value;
//     const progia = document.querySelector("#progia").value;
//     const proanh = document.querySelector("#proanh").value;
//     if (!proname || !progia || isNaN(progia)) {
//       alert("ban nhap chua dung du lieu");
//       return;
//     }
//     const newdata = {
//       name: proname,
//       price: progia,
//       image: proanh,
//     };
//     fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newdata),
//     })
//       .then((rep) => rep.json())
//       .then(() => alert("them thanh cong"))
//       .catch((err) => console.log(err));
//   });
// });
// ////dang nhap
// document.querySelector("#btnlogin").addEventListener("click", (e) => {
//   e.preventDefault();
//   const user = document.querySelector("#protk").value;
//   const pass = document.querySelector("#promk").value;
//   fetch("http://localhost:3000/users")
//     .then((rep) => rep.json())
//     .then((data) => {
//       if (data.some((dt) => dt.username === user && dt.password === pass)) {
//         alert("dang nhap thanh cong");
//         window.location.href = "./index9.html";
//       } else {
//         alert("ban nhap sai du lieu");
//       }
//     });
// });
