var room = 1;

function education_fields() {
  room++;
  var objTo = document.getElementById("education_fields");
  var divtest = document.createElement("div");
  divtest.setAttribute("class", "mt-3 removeclass" + room);
  var rdiv = "removeclass" + room;
  divtest.innerHTML =
    '<form class="row g-4"><div class="col-lg-4 col-md-5 col-sm-12 col-12"><div class="form-group"><input type="date" class="form-control" id="ScheduleDate" name="ScheduleDate" placeholder="mm/dd/year"></div></div><div class="col-lg-4 col-md-4 col-sm-12 col-12"> <div class="form-group"><input type="time" class="form-control" id="ScheduleTime" name="ScheduleTime" placeholder="h:m"> </div></div><div class="col-lg-4 col-md-3 col-sm-12 col-12"><div class="form-group"><div class="reg-btns"><button onclick="education_fields();" class="btn save-btn w-auto" type="button"><i class="bi bi-plus-lg"></i></button><button class="btn reset-btn w-auto" type="button" onclick="remove_education_fields(' +
    room +
    ');"> <i class="fa-solid fa-trash"></i> </button> </div></div></form>';

  objTo.appendChild(divtest);
  feather.replace();
}

function remove_education_fields(rid) {
  $(".removeclass" + rid).remove();
}

function education_fields1() {
  room++;
  var objTo = document.getElementById("education_fields1");
  var divtest = document.createElement("div");
  divtest.setAttribute("class", "mt-3 removeclass" + room);
  var rdiv = "removeclass" + room;
  divtest.innerHTML =
    '<form class="row g-4"><div class="col-lg-1 col-md-2 col-sm-6 col-12"><div class="form-group card dropzone border-dashed"><div class="card-img"><div class="img-preview position-relative"><div class="yes"><img id="ImgPreview6" src="assets/images/icon/cloud_upload2.png" alt="broken_image" class="preview_6 upload-img mx-auto" /></div><input type="file" id="imag6" title="Upload_img" class="form-control input-img"/></div><button type="button" id="removeImage_6" class="close-btn btn-rmv_6"><i class="bi bi-x-circle-fill"></i></button></div></div></div><div class="col-lg-2 col-md-2 col-sm-6 col-12"><div class="form-group"><label class="form-label" for="Title">Title</label><input type="text" class="form-control" id="Title" name="Title" placeholder="Gallery"></div></div><div class="col-lg-1 col-md-2 col-sm-6 col-12"><div class="form-group"><label class="form-label" for="TicketType">Ticket Type</label><select class="form-select form-control" aria-label="Default select example"><option selected>Regular</option><option value="1">Regular1</option><option value="2">Regular2</option></select></div></div><div class="col-lg-2 col-md-2 col-sm-6 col-12"><div class="form-group"><label class="form-label" for="NumberSeat">Number of Seat</label><input type="text" class="form-control" id="NumberSeat" name="NumberSeat" placeholder="150"></div></div><div class="col-lg-1 col-md-2 col-sm-6 col-12"><div class="form-group"><label class="form-label" for="Rows">Rows</label><input type="text" class="form-control" id="Rows" name="Rows" placeholder="Rows"></div></div><div class="col-lg-1 col-md-2 col-sm-6 col-12"><div class="form-group"><label class="form-label" for="Colume">Columes</label><input type="text" class="form-control" id="Colume" name="Colume" placeholder="Colume"></div></div><div class="col-lg-2 col-md-2 col-sm-6 col-12"><div class="form-group"><label class="form-label">Select Seat Number</label><button type="button" class="btn save-btn seat-btn w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Seat Number</button></div></div><div class="col-lg-2 col-md-2 col-sm-12 col-12"><div class="form-group"><label class="form-label">Option</label><div class="reg-btns"><button onclick="education_fields1();" class="btn save-btn w-auto" type="button"><i class="bi bi-plus-lg"></i></button><button class="btn reset-btn w-auto" type="button" onclick="remove_education_fields1(' +
    room +
    ');"> <i class="fa-solid fa-trash"></i></button></div></div></div></div></form>';

  objTo.appendChild(divtest);
  feather.replace();
}

function remove_education_fields1(rid) {
  $(".removeclass" + rid).remove();
}

function education_fields2() {
  room++;
  var objTo = document.getElementById("education_fields2");
  var divtest = document.createElement("div");
  divtest.setAttribute("class", "mt-3 removeclass" + room);
  var rdiv = "removeclass" + room;
  divtest.innerHTML =
    '<form class="row g-4"><div class="col-lg-4 col-md-6 col-sm-12 col-12"><div class="form-group"><label class="form-label" for="SeatNumber">Seat Number</label><input type="text" class="form-control" id="SeatNumber" name="SeatNumber" placeholder="SeatNumber"></div></div><div class="col-lg-2 col-md-6 col-sm-12 col-12"><div class="form-group"><label class="form-label" for="Rows">Rows</label><input type="text" class="form-control" id="Rows" name="Rows" placeholder="Rows"></div></div><div class="col-lg-2 col-md-6 col-sm-12 col-12"> <div class="form-group"><label class="form-label" for="Colume">Colume</label> <input type="text" class="form-control" id="Colume" name="Colume" placeholder="Colume"> </div></div><div class="col-lg-4 col-md-12 col-sm-12 col-12"> <div class="form-group"> <label class="form-label">&nbsp;</label><div class="reg-btns"><button onclick="education_fields2();" class="btn save-btn w-auto" type="button"><i class="bi bi-plus-lg"></i></button><button class="btn reset-btn w-auto" type="button" onclick="remove_education_fields2(' +
    room +
    ');"> <i class="fa-solid fa-trash"></i> </button> </div></div></form>';

  objTo.appendChild(divtest);
  feather.replace();
}

function remove_education_fields2(rid) {
  $(".removeclass" + rid).remove();
}

// function education_fields1() {
//   room++;
//   var objTo = document.getElementById("education_fields1");
//   var divtest = document.createElement("div");
//   divtest.setAttribute("class", "removeclass" + room);
//   var rdiv = "removeclass" + room;
//   divtest.innerHTML =
//     '<form class="row"><div class="col-md-5 col-sm-12 col-12"><div class="form-group"><input type="text" class="form-control" id="Schoolname" name="Schoolname" placeholder="Enter Website URL"></div></div><div class="col-md-5 col-sm-12 col-12"> <div class="form-group"> <input type="text" class="form-control" id="Age" name="Age" placeholder="Page Title"> </div></div><div class="col-sm-2"> <div class="form-group"> <button class="btn rounded-pill btn-outline-dark font-weight-medium waves-effect waves-light" type="button" onclick="remove_education_fields(' +
//     room +
//     ');"> <i class="ri-delete-bin-line fs-5"></i> </button> </div></div></form>';

//   objTo.appendChild(divtest);
//   feather.replace();
// }

// function remove_education_fields1(rid) {
//   $(".removeclass" + rid).remove();
// }
