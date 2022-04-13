var arrSV = [];
function save() {
  // console.log(123);
  let fullname = document.getElementById("fullname").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  let gender = "";
  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else if (document.getElementById("female").checked) {
    gender = document.getElementById("female").value;
  }
  // if (_.isEmpty(fullname)) {
  //     document.getElementById('fullname-error').innerHTML = 'Chưa nhập họ và tên';
  // }else{
  //     document.getElementById('fullname-error').innerHTML = '';
  // }

  if (fullname && phone && address && gender) {
    // lưu vào trong ds sinh viên
    let student = {
      fullname: fullname,
      phone: phone,
      address: address,
    };
    arrSV.push(student);
    console.log(arrSV);
    $("#tbList").empty();
    arrSV.forEach((item, index) => {
    //   var dataRow = document.getElementById("tbList");
    //   let STT = index;
    //   let tr = document.createElement("tr");
    //   let td = document.createElement("td");
   
    //   tr.append(studentarr)
    //     dataRow.innerHTML = `<td>${STT}</td><td>${item.fullname}</td><td>${item.phone}</td><td>${item.address}</td>`
      var studentarr =
      '<tr><td>' +
      index +
      '</td><td>' +
      item.fullname +
      '</td><td>' +
      item.phone +
      '</td><td>' +
      item.address +
      '</td></tr>';
      $("#tbList").append(studentarr);
    });
  }
}
