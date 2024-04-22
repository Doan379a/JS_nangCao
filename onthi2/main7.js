// const content = document.querySelector(".content");
// let url = "http://localhost:3000/products";
// let tbody = document.querySelector("tbody");
// fetch(url)
//   .then((rep) => rep.json())
//   .then((data) => {
//     tbody.innerHTML = data
//       .map(
//         (item) => ` <tr>
//     <td>${item.id}</td>
//     <td>${item.name}</td>
//     <td>${item.price}</td>
//     <td>${item.image}</td>
//     <td>
//       <button data-id="${item.id}" class="btnsua">sua</button>
//       <button data-id="${item.id}" class="btnxoa">xoa</button>
//     </td>
//   </tr>`
//       )
//       .join("");
//     ///xoa
//     document.querySelectorAll(".btnxoa").forEach((btn) => {
//       btn.addEventListener("click", () => {
//         id = btn.dataset.id;
//         if (confirm("ban co chac muon xoa khong")) {
//           fetch(`${url}/${id}`, { method: "DELETE" })
//             .then((rep) => rep.json())
//             .then(() => alert("xoa thanh cong"))
//             .catch((err) => console.log(err));
//         }
//       });
//     });
//     //sua
//     document.querySelectorAll(".btnsua").forEach((btn) => {
//       btn.addEventListener("click", (e) => {
//         id = btn.dataset.id;
//         fetch(`${url}/${id}`)
//           .then((rep) => rep.json())
//           .then((data) => {
//             const { name, price, image } = data;
//             content.innerHTML = `<form action="">
//             <h2>sua san pham</h2>
//             <input type="text" id="proname" value="${name}"/>
//             <input type="text" id="progia" value="${price}"/>
//             <input type="text" id="proanh" value="${image}"/>
//             <input type="submit" id="btnsubmit" /></form>`;
//             document
//               .querySelector("#btnsubmit")
//               .addEventListener("click", (e) => {
//                 e.preventDefault();
//                 const proname = document.querySelector("#proname").value;
//                 const progia = document.querySelector("#progia").value;
//                 const proanh = document.querySelector("#proanh").value;
//                 const newdata = {
//                   id,
//                   name: proname,
//                   price: progia,
//                   image: proanh,
//                 };
//                 if (!proname || !progia || isNaN(progia)) {
//                   alert("ban chua nhap dung du lieu");
//                   return;
//                 }
//                 fetch(`${url}/${id}`, {
//                   method: "PUT",
//                   headers: { "Content-Type": "application/json" },
//                   body: JSON.stringify(newdata),
//                 })
//                   .then((rep) => rep.json())
//                   .then(() => alert("sua thanh cong"))
//                   .catch((err) => console.log(err));
//               });
//           });
//       });
//     });
//   })
//   .catch((err) => console.log(err));

// //them
// document.querySelector(".btnthem")?.addEventListener("click", () => {
//   content.innerHTML = `<form action="">
//   <h2>them san pham</h2>
//   <input type="text" id="proname" />
//   <input type="text" id="progia" />
//   <input type="text" id="proanh" />
//   <input type="submit" id="btnsubmit" /></form>`;
//   document.querySelector("#btnsubmit").addEventListener("click", (e) => {
//     e.preventDefault();
//     const proname = document.querySelector("#proname").value;
//     const progia = document.querySelector("#progia").value;
//     const proanh = document.querySelector("#proanh").value;
//     const newdata = { name: proname, price: progia, image: proanh };
//     if (!proname || !progia || isNaN(progia)) {
//       alert("ban chua nhap dung du lieu");
//       return;
//     }
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
// ///dang nhap
// document.querySelector("#btnlogin")?.addEventListener("click", (e) => {
//   e.preventDefault();
//   const user = document.querySelector("#protk").value;
//   const pass = document.querySelector("#promk").value;
//   fetch("http://localhost:3000/users")
//     .then((rep) => rep.json())
//     .then((data) => {
//       if (data.some((dt) => dt.username === user && dt.password === pass)) {
//         alert("danh nhap thanh cong");
//         window.location.href = "./index7.html";
//       } else {
//         alert("ban nhap sai tai khoan hoac mat khau");
//       }
//     });
// });
