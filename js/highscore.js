const dataFilter = globalData.sort((a, b) => b.score - a.score)


// method looping data kemudian ditembak ke table body
function buildTable(data) {
  let table = document.getElementById("table-body");

  let no = 1
  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
    <td>${no++}</td>
    <td>${data[i].firstname + ' ' + data[i].lastname
      }</td >
    <td>${data[i].score}</td>
    </tr > `;

    table.innerHTML += row;
  }
};

buildTable(dataFilter);

let getAllData = localStorage.getItem("data")

// load data dari localstorage, jika tidak ada maka akan diisi array kosong
const globalData = getAllData ? JSON.parse(getAllData) : []
