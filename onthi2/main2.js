// let content = document.querySelector(".content");
// let tbbody = document.querySelector("tbody");
// console.log(content);
// let url = "http://localhost:3000/products";
// fetch(url)
//   .then((rep) => rep.json())
//   .then((data) => {
//     tbbody.innerHTML = data
//       .map(
//         (item) => ` <tr>
//     <td>${item.id}</td>
//     <td>${item.name}</td>
//     <td>${item.price}</td>
//     <td><img src="${item.image}" alt="" /></td>
//     <td>
//       <button class="btn-edit" data-id="${item.id}">sua</button
//       ><button class="btn-delete" data-id="${item.id}">xoa</button>
//     </td>
//   </tr>`
//       )
//       .join("");
//     document.querySelectorAll(".btn-delete").forEach((btn) => {
//       btn.addEventListener("click", () => {
//         const id = btn.dataset.id;
//         if (confirm("ban co muon xoa kho")) {
//           fetch(`${url}/${id}`, {
//             method: "DELETE",
//           })
//             .then((rep) => rep.json())
//             .then(() => alert("xoa thanh cong"))
//             .catch((err) => console.log(err));
//         }
//       });
//     });
//     ///sua
//     document.querySelectorAll(".btn-edit").forEach((btn) => {
//       btn.addEventListener("click", (e) => {
//         const id = btn.dataset.id;
//         fetch(`${url}/${id}`)
//           .then((rep) => rep.json())
//           .then((data) => {
//             const { name, price, image } = data;
//             content.innerHTML = `<form action="">
//             <h2>sua san pham</h2>
//             <input type="text"id="proname"value="${name}"/>
//             <input type="text"id="progia" value="${price}"/>
//             <input type="text"id="proanh" value="${image}"/>
//             <input type="button" value="sua san pham"class="btnsubmit" /></form>`;

//             document
//               .querySelector(".btnsubmit")
//               .addEventListener("click", (e) => {
//                 e.preventDefault();
//                 const proname = document.querySelector("#proname").value;
//                 const progia = document.querySelector("#progia").value;
//                 const proanh = document.querySelector("#proanh").value;
//                 if (!proname || !progia || isNaN(progia)) {
//                   alert("nhap ko dung dinh dang");
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
// document.querySelector(".btnthem")?.addEventListener("click", () => {
//   content.innerHTML = `<form action="">
//     <h2>them san pham</h2>
//     <input type="text" id="proname" />
//     <input type="text"  id="progia"/>
//     <input type="text" id="proanh" />
//     <input type="button" value="them san pham" class="btnsubmit"/></form>`;
//   document.querySelector(".btnsubmit").addEventListener("click", (e) => {
//     e.preventDefault();
//     const proname = document.querySelector("#proname").value;
//     const progia = document.querySelector("#progia").value;
//     const proanh = document.querySelector("#proanh").value;
//     if (!proname || !progia || isNaN(progia)) {
//       alert("nhap dung dinh dang");
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
// ///dang ky
// document.querySelector(".btnlogin")?.addEventListener("click", () => {
//   //   alert("hihi");
//   const user = document.querySelector("#protk").value;
//   const pass = document.querySelector("#promk").value;
//   fetch("http://localhost:3000/users")
//     .then((rep) => rep.json())
//     .then((data) => {
//       if (data.some((dt) => dt.username === user && dt.password === pass)) {
//         alert("dang nhap thanh cong");
//         window.location.href = "./index2.html";
//       } else {
//         alert("ban nhap sai tai khoan hoac mat khau");
//       }
//     })
//     .catch((err) => console.log(err));
// });
// console.log();
