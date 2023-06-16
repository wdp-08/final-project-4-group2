// load data dari localstorage, jika tidak ada maka akan diisi array kosong
let getAllData = localStorage.getItem("dataSkor");
const globalData = getAllData ? JSON.parse(getAllData) : [];

const dataFilter = globalData.sort((a, b) => b.score - a.score);
console.log(dataFilter);
buildTable(dataFilter);

// method looping data kemudian ditembak ke table body
function buildTable(data) {
  let table = document.getElementById("table-body");

  let no = 1;
  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
    <td>${no++}</td>
    <td>${data[i].nickname}</td >
    <td>${data[i].score}</td>
    </tr > `;

    table.innerHTML += row;
  }
}
