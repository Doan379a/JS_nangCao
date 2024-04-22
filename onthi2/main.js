// let content = document.querySelector(".content");
// let url = "http://localhost:3000/products";
// let tbody = document.querySelector("tbody");
// // console.log(tbody);
// fetch(url)
//   .then((rep) => rep.json())
//   .then((data) => {
//     tbody.innerHTML = data
//       .map(
//         (item) =>
//           `  <tr>
//         <td>${item.id}</td>
//         <td>${item.name}</td>
//         <td>${item.price}</td>
//         <td><img src="${item?.image}" alt=""  /></td>
//         <td>
//           <button class="btn-edit" data-id="${item.id}">sua</button>
//           <button  class="btn-delete" data-id="${item.id}">
//             xoa
//           </button>
//         </td>
//       </tr>`
//       )
//       .join("");
//     //xoa
//     document.querySelectorAll(".btn-delete").forEach((btn) => {
//       btn.addEventListener("click", () => {
//         const id = btn.dataset.id;
//         console.log(id);
//         // alert("hihi");
//         if (confirm("ban co mon xoa khong")) {
//           fetch(`${url}/${id}`, { method: "DELETE" })
//             .then((rep) => rep.json())
//             .then(() => alert("xoa thanh cong"))
//             .catch((err) => console.log(err));
//         }
//       });
//     });
//     ///sua
//     document.querySelectorAll(".btn-edit").forEach((btn) => {
//       btn.addEventListener("click", () => {
//         const id = btn.dataset.id;
//         fetch(`${url}/${id}`)
//           .then((rep) => rep.json())
//           .then((data) => {
//             const { name, price, image } = data;
//             const html = `<form action="">
//             <h2>sua du lieu</h2>
//             <input type="text" value="${name}" id="proname"/>
//             <input type="text"value="${price}"id="progia" />
//             <input type="text" value="${image}"id="proanh" />
//             <input type="submit" value="sua san pham" class="btnsubmit"/></form>`;
//             content.innerHTML = html;
//             const btnsubmid = document.querySelector(".btnsubmit");
//             btnsubmid.addEventListener("click", (e) => {
//               e.preventDefault();
//               const proname = document.querySelector("#proname").value;
//               const progia = document.querySelector("#progia").value;
//               const proanh = document.querySelector("#proanh").value;
//               if (!proname || !progia || !proanh || isNaN(progia)) {
//                 alert("vui long hap dung du lieu");
//                 return;
//               }
//               const newdata = {
//                 id,
//                 name: proname,
//                 price: progia,
//                 image: proanh,
//               };
//               fetch(`${url}/${id}`, {
//                 method: "PUT",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(newdata),
//               })
//                 .then((rep) => rep.json())
//                 .then(() => {
//                   alert("sua thanh cong");
//                 })
//                 .catch((err) => console.log(err));
//             });
//           })
//           .catch((err) => console.log(err));
//       });
//     });
//   })
//   .catch((err) => console.log(err));
// ///
// document.querySelector(".btnthem")?.addEventListener("click", () => {
//   const html = `<form action="">
//   <h2>them san pham</h2><input type="text"id="proname" />
//   <input type="text"id="progia" />
//   <input type="text" id="proanh"value="https://picsum.photos/200/130" />
//   <input type="button" value="them san pham" class="btnsubmit"/></form>`;
//   content.innerHTML = html;
//   const btnsubmit = document.querySelector(".btnsubmit");
//   btnsubmit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const proname = document.querySelector("#proname").value;
//     const progia = document.querySelector("#progia").value;
//     const proanh = document.querySelector("#proanh").value;
//     if (!proname || !progia || isNaN(progia)) {
//       alert("ban chua nhap dung dinh dang");
//       return;
//     }
//     const newdata = { name: proname, price: progia, image: proanh };
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
// //login
// const btnlogin = document.querySelector(".btnlogin");
// btnlogin?.addEventListener("click", (e) => {
//   e.preventDefault();
//   const user = document.querySelector("#protk").value;
//   const pass = document.querySelector("#promk").value;
//   if (!user || !pass) {
//     alert("ko dc de trong");
//     return;
//   }
//   fetch("http://localhost:3000/users")
//     .then((rep) => rep.json())
//     .then((data) => {
//       if (
//         data.some((dt) => {
//           return dt.username === user && dt.password === pass;
//         })
//       ) {
//         alert("dang nhap thanh cong");
//         window.location.href = "./index.html";
//       } else {
//         alert("ban nhap sai tai khoan hoac mat khau");
//       }
//     })
//     .catch((err) => console.log(err));
// });
