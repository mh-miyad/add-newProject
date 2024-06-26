class SelectManager {
  constructor(selectSelector) {
    this.container = document.querySelector("body");
    this.selectSelector = selectSelector;
    this.init();
  }

  init() {
    this.container.addEventListener("click", (e) => {
      const targetSelect = e.target.closest(this.selectSelector);
      if (targetSelect) {
        this.handleSelectClick(targetSelect);
      } else {
        this.closeAllSelects();
      }
    });

    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(this.selectSelector) &&
        !e.target.closest(".select-list")
      ) {
        this.closeAllSelects();
      }
    });
  }

  handleSelectClick(select) {
    const field = select.querySelector(".select-field");
    const list = select.querySelector(".select-list");
    this.closeOtherSelects(field);

    list.classList.toggle("open");
    field.classList.toggle("turn");

    list.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    const selectItemClickHandler = (e) => {
      const selectedItem = e.target.closest("li");

      if (selectedItem) {
        const selectDiv = selectedItem.closest(".visitor-main-box");
        const idOfSelectDiv = selectDiv.id;
        const selectedPTag = selectedItem.querySelector("p");
        const newPTag = selectedPTag.cloneNode(true);
        const getValue = newPTag.textContent.trim();
        getValueByClick(idOfSelectDiv, getValue);

        //  here i this need Switch Case

        //  here i this need Switch Case

        // Remove any event listeners attached to the cloned p tag
        newPTag.querySelectorAll("*").forEach((element) => {
          for (const eventType in element.eventListeners) {
            // Loop through all attached events
            element.removeEventListener(
              eventType,
              element.eventListeners[eventType][0]
            );
          }
        });
        field.innerHTML = ""; // Clear contents instead of removing specific tag

        // Append the cloned p tag to the select-field
        field.appendChild(newPTag);

        list.classList.remove("open");
        field.classList.remove("turn");
        list.removeEventListener("click", selectItemClickHandler);
      }
    };

    list.addEventListener("click", selectItemClickHandler);
  }

  closeOtherSelects(clickedField) {
    var selects = this.container.querySelectorAll(this.selectSelector);
    for (var i = 0; i < selects.length; i++) {
      var select = selects[i];
      var field = select.querySelector(".select-field");
      var list = select.querySelector(".select-list");

      if (field && list && field !== clickedField) {
        if (list.classList.contains("open")) {
          list.classList.remove("open");
        }
        if (field.classList.contains("turn")) {
          field.classList.remove("turn");
        }
      }
    }
  }

  closeAllSelects() {
    let selects = this.container.querySelectorAll(this.selectSelector);
    for (let i = 0; i < selects.length; i++) {
      let select = selects[i];
      const field = select.querySelector(".select-field");
      const list = select.querySelector(".select-list");

      if (list && field) {
        list.classList.remove("open");
        field.classList.remove("turn");
      }
    }
  }
}

const selectManager = new SelectManager(".select");

function getValueByClick(id, getValue) {
  deleteItem(id);
  switch (getValue) {
    case "Short Answer":
      document.querySelector(`#${id} .short-title`).classList.remove("d-none");
      document.querySelector(`#${id}  .prgraph-input`).classList.add("d-none");
      document.querySelector(`#${id}  .multiple-input`).classList.add("d-none");
      document.querySelector(`#${id}  .choice-input`).classList.add("d-none");
      document.querySelector(`#${id}  .dropdown-input`).classList.add("d-none");
      document.querySelector(`#${id}  .date-input`).classList.add("d-none");
      document.querySelector(`#${id}  .time-input`).classList.add("d-none");
      document
        .querySelector(`#${id}  .fileUpload-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .linear-scale-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-choice-grid`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-checkBox-grid`)
        .classList.add("d-none");
      break;
    case "Paragraph":
      document.querySelector(`#${id}  .short-title`).classList.add("d-none");
      document
        .querySelector(`#${id}  .prgraph-input`)
        .classList.remove("d-none");
      document.querySelector(`#${id}  .multiple-input`).classList.add("d-none");
      document.querySelector(`#${id}  .choice-input`).classList.add("d-none");
      document.querySelector(`#${id}  .dropdown-input`).classList.add("d-none");
      document.querySelector(`#${id}  .date-input`).classList.add("d-none");
      document.querySelector(`#${id}  .time-input`).classList.add("d-none");
      document
        .querySelector(`#${id}  .fileUpload-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .linear-scale-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-choice-grid`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-checkBox-grid`)
        .classList.add("d-none");
      break;
    case "Multiple Choice":
      document
        .querySelector(`#${id}  .multiple-input`)
        .classList.remove("d-none");
      document.querySelector(`#${id}  .short-title`).classList.add("d-none");
      document.querySelector(`#${id}  .prgraph-input`).classList.add("d-none");
      document.querySelector(`#${id}  .choice-input`).classList.add("d-none");
      document.querySelector(`#${id}  .dropdown-input`).classList.add("d-none");
      document.querySelector(`#${id}  .date-input`).classList.add("d-none");
      document.querySelector(`#${id}  .time-input`).classList.add("d-none");
      document
        .querySelector(`#${id}  .fileUpload-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .linear-scale-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-choice-grid`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-checkBox-grid`)
        .classList.add("d-none");
      break;
    case "Checkboxes":
      document
        .querySelector(`#${id}  .choice-input`)
        .classList.remove("d-none");
      document.querySelector(`#${id}  .short-title`).classList.add("d-none");
      document.querySelector(`#${id}  .prgraph-input`).classList.add("d-none");
      document.querySelector(`#${id}  .multiple-input`).classList.add("d-none");
      document.querySelector(`#${id}  .dropdown-input`).classList.add("d-none");
      document.querySelector(`#${id}  .date-input`).classList.add("d-none");
      document.querySelector(`#${id}  .time-input`).classList.add("d-none");
      document
        .querySelector(`#${id}  .fileUpload-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .linear-scale-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-choice-grid`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-checkBox-grid`)
        .classList.add("d-none");
      break;
    case "DropDown":
      document
        .querySelector(`#${id}  .dropdown-input`)
        .classList.remove("d-none");
      document.querySelector(`#${id}  .choice-input`).classList.add("d-none");
      document.querySelector(`#${id}  .short-title`).classList.add("d-none");
      document.querySelector(`#${id}  .prgraph-input`).classList.add("d-none");
      document.querySelector(`#${id}  .multiple-input`).classList.add("d-none");
      document.querySelector(`#${id}  .date-input`).classList.add("d-none");
      document.querySelector(`#${id}  .time-input`).classList.add("d-none");
      document
        .querySelector(`#${id}  .fileUpload-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .linear-scale-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-choice-grid`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-checkBox-grid`)
        .classList.add("d-none");
      break;
    case "File Upload":
      document
        .querySelector(`#${id}  .fileUpload-input`)
        .classList.remove("d-none");
      document
        .querySelector(`#${id}  .linear-scale-input`)
        .classList.add("d-none");
      document.querySelector(`#${id}  .dropdown-input`).classList.add("d-none");
      document.querySelector(`#${id}  .choice-input`).classList.add("d-none");
      document.querySelector(`#${id}  .short-title`).classList.add("d-none");
      document.querySelector(`#${id}  .prgraph-input`).classList.add("d-none");
      document.querySelector(`#${id}  .multiple-input`).classList.add("d-none");
      document.querySelector(`#${id}  .date-input`).classList.add("d-none");
      document.querySelector(`#${id}  .time-input`).classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-choice-grid`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-checkBox-grid`)
        .classList.add("d-none");
      break;
    case "Linear Scale":
      document
        .querySelector(`#${id}  .linear-scale-input`)
        .classList.remove("d-none");
      document
        .querySelector(`#${id}  .fileUpload-input`)
        .classList.add("d-none");
      document.querySelector(`#${id}  .dropdown-input`).classList.add("d-none");
      document.querySelector(`#${id}  .choice-input`).classList.add("d-none");
      document.querySelector(`#${id}  .short-title`).classList.add("d-none");
      document.querySelector(`#${id}  .prgraph-input`).classList.add("d-none");
      document.querySelector(`#${id}  .multiple-input`).classList.add("d-none");
      document.querySelector(`#${id}  .date-input`).classList.add("d-none");
      document.querySelector(`#${id}  .time-input`).classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-choice-grid`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-checkBox-grid`)
        .classList.add("d-none");
      break;
    case "Multiple Choice Grid":
      document
        .querySelector(`#${id}  .multiple-choice-grid`)
        .classList.remove("d-none");
      document
        .querySelector(`#${id}  .linear-scale-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .fileUpload-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-checkBox-grid`)
        .classList.add("d-none");
      document.querySelector(`#${id}  .dropdown-input`).classList.add("d-none");
      document.querySelector(`#${id}  .choice-input`).classList.add("d-none");
      document.querySelector(`#${id}  .short-title`).classList.add("d-none");
      document.querySelector(`#${id}  .prgraph-input`).classList.add("d-none");
      document.querySelector(`#${id}  .multiple-input`).classList.add("d-none");
      document.querySelector(`#${id}  .date-input`).classList.add("d-none");
      document.querySelector(`#${id}  .time-input`).classList.add("d-none");
      break;
    case "Checkbox Grid":
      document
        .querySelector(`#${id}  .multiple-checkBox-grid`)
        .classList.remove("d-none");
      document
        .querySelector(`#${id}  .multiple-choice-grid`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .linear-scale-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .fileUpload-input`)
        .classList.add("d-none");
      document.querySelector(`#${id}  .dropdown-input`).classList.add("d-none");
      document.querySelector(`#${id}  .choice-input`).classList.add("d-none");
      document.querySelector(`#${id}  .short-title`).classList.add("d-none");
      document.querySelector(`#${id}  .prgraph-input`).classList.add("d-none");
      document.querySelector(`#${id}  .multiple-input`).classList.add("d-none");
      document.querySelector(`#${id}  .date-input`).classList.add("d-none");
      document.querySelector(`#${id}  .time-input`).classList.add("d-none");
      break;
    case "Date":
      document.querySelector(`#${id}  .date-input`).classList.remove("d-none");
      document.querySelector(`#${id}  .short-title`).classList.add("d-none");
      document.querySelector(`#${id}  .prgraph-input`).classList.add("d-none");
      document.querySelector(`#${id}  .multiple-input`).classList.add("d-none");
      document.querySelector(`#${id}  .choice-input`).classList.add("d-none");
      document.querySelector(`#${id}  .dropdown-input`).classList.add("d-none");
      document.querySelector(`#${id}  .time-input`).classList.add("d-none");
      document
        .querySelector(`#${id}  .fileUpload-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .linear-scale-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-choice-grid`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-checkBox-grid`)
        .classList.add("d-none");
      break;
    case "Time":
      document.querySelector(`#${id}  .time-input`).classList.remove("d-none");
      document.querySelector(`#${id}  .short-title`).classList.add("d-none");
      document.querySelector(`#${id}  .prgraph-input`).classList.add("d-none");
      document.querySelector(`#${id}  .dropdown-input`).classList.add("d-none");
      document.querySelector(`#${id}  .multiple-input`).classList.add("d-none");
      document.querySelector(`#${id}  .choice-input`).classList.add("d-none");
      document.querySelector(`#${id}  .date-input`).classList.add("d-none");
      document
        .querySelector(`#${id}  .fileUpload-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .linear-scale-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-choice-grid`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-checkBox-grid`)
        .classList.add("d-none");
      break;
    default:
      document.querySelector(`#${id}  .short-title`).classList.add("d-none");
      document.querySelector(`#${id}  .prgraph-input`).classList.add("d-none");
      document.querySelector(`#${id}  .multiple-input`).classList.add("d-none");
      document.querySelector(`#${id}  .dropdown-input`).classList.add("d-none");
      document.querySelector(`#${id}  .choice-input`).classList.add("d-none");
      document.querySelector(`#${id}  .date-input`).classList.add("d-none");
      document.querySelector(`#${id}  .time-input`).classList.add("d-none");
      document
        .querySelector(`#${id}  .fileUpload-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .linear-scale-input`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-choice-grid`)
        .classList.add("d-none");
      document
        .querySelector(`#${id}  .multiple-checkBox-grid`)
        .classList.add("d-none");

      break;
  }
}

function deleteItem(id) {
  // close Short Answer
  document
    .querySelector(`#${id} .short-title-btn`)
    .addEventListener("click", () => {
      document.querySelector(`#${id} .short-title`).classList.add("d-none");
    });
  // close Paragraph
  document.querySelector(`#${id} .prg-btn`).addEventListener("click", () => {
    document.querySelector(`#${id} .prgraph-input`).classList.add("d-none");
  });
  //multiple choice
  document
    .querySelector(`#${id} .multiple-choice-btn`)
    .addEventListener("click", () => {
      document.querySelector(`#${id} .multiple-input`).classList.add("d-none");
    });
  //choice-input-btn
  document
    .querySelector(`#${id} .choice-input-btn`)
    .addEventListener("click", () => {
      document.querySelector(`#${id} .choice-input`).classList.add("d-none");
    });
  // Dropdown
  document
    .querySelector(`#${id} .dropdown-input-btn`)
    .addEventListener("click", () => {
      document.querySelector(`#${id} .dropdown-input`).classList.add("d-none");
    });
  // Date
  document
    .querySelector(`#${id} .date-input-btn`)
    .addEventListener("click", () => {
      document.querySelector(`#${id} .date-input`).classList.add("d-none");
    });
  // fileUpload Btn
  document
    .querySelector(`#${id} .fileUpload-input-btn`)
    .addEventListener("click", () => {
      document
        .querySelector(`#${id} .fileUpload-input`)
        .classList.add("d-none");
    });
  // Linear Scale  Btn
  document
    .querySelector(`#${id} .linearScale-input-btn`)
    .addEventListener("click", () => {
      document
        .querySelector(`#${id} .linear-scale-input`)
        .classList.add("d-none");
    });
  // Multiple choice grid  Btn
  document
    .querySelector(`#${id} .multiple-choice-grid-btn`)
    .addEventListener("click", () => {
      document
        .querySelector(`#${id} .multiple-choice-grid`)
        .classList.add("d-none");
    });
  // CheckBox grid  Btn
  document
    .querySelector(`#${id} .multiple-checkBox-grid-btn`)
    .addEventListener("click", () => {
      document
        .querySelector(`#${id} .multiple-checkBox-grid`)
        .classList.add("d-none");
    });
  // Time
  document
    .querySelector(`#${id} .time-input-btn`)
    .addEventListener("click", () => {
      document.querySelector(`#${id} .time-input`).classList.add("d-none");
    });
}

function deleteBox(id) {
  document.querySelector(`#${id}`).remove();
}
//!  here If Anyone click input

let count = 2;

function showInput(value) {
  const choiceInput = document.querySelector(`#${value}`);
  if (choiceInput) {
    choiceInput.removeAttribute("readonly");
  } else {
    console.log(`#${value} not found`);
  }
}

function addMoreInput(type, value, btn) {
  const addDiv = document.querySelector(`#${value}`);
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div class="d-flex align-items-center gap-3">
      <div class="form-check my-2 d-flex align-items-center gap-2">
        <input
          class="form-check-input"
          type="${type}"
          name="exampleRadios"
          id="exampleRadios${count}"
          value="option${count}"
        />
        <button class="btn" onclick="showInput('choice-input${count}')">
          <input
            class="form-control txt-black mt-1 fw-normal"
            id="choice-input${count}"
            placeholder="Option ${count}"
            readonly
          />
        </button>
      </div>
      <button class="mt-1 btn btn-danger ${btn}" onclick="removeInput(this)">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  `;
  addDiv.appendChild(newDiv);
  count++;
}

// Remove Input From Dynamic Delete Option
function removeInput(button) {
  const parentDiv = button.closest(".d-flex");
  parentDiv.remove();
  count--;
}
// Remove Input From Dynamic Delete Option
//!  here If Anyone click input

// Create Dynamic option
const optionMainDiv = document.getElementById("survey_create_option");
const optionCreateBtn = document.getElementById("btn-create-option");
// Create new Option !
let optionUniqueId = 2;
let count2 = 2;
optionCreateBtn.addEventListener("click", () => {
  const option1 = document.createElement("div");
  optionUniqueId++;
  count2++;
  const makeUniqueId = `survey-option-${optionUniqueId}`;
  option1.innerHTML = ` <div class="my-3   lg-w-75 py-3 pe-5 ps-4 visitor-main-box" id=${makeUniqueId}>
  <!-- content -->
  <div class="d-flex justify-content-between align-items-center">
                  <div></div>
                  <div>
                  <button class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      <i class="bi bi-pen"></i>
                    </button>
                    <button class="btn text-danger" onclick="deleteBox('${makeUniqueId}')">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
  <!-- content -->
  <div class="d-flex flex-column flex-sm-row justify-content-lg-between align-items-start select-div-1  gap-2" data-option="1">
  <div class="flex-grow-1 ">
    <div class="short-title   d-flex justify-content-between align-items-start gap-2 ">
      <div class="flex-grow-1">
        <div>
          <label for="short-tittle" class="form-label text-dark">
            Short Title
          </label>
          <input type="text" id="survey-input-1" class="form-control py-3" placeholder="Write ...">
          <div class="toolBar">
            <button class="btn fw-bold  cursor-pointer  bold-btn-1">B</button>
            <button class="btn fw-bold  cursor-pointer  italic-btn-1">I</button>
            <button class="btn fw-bold  cursor-pointer  underline-btn-1">U</button>
            <button class="btn fw-bold  link-btn-1"><i class="bi bi-link"></i></button>
          </div>
        </div>
        <button class="btn btn-warning">Save</button>
      </div>
      <button class="mt-5 btn btn-danger short-title-btn">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <div class="prgraph-input d-none  d-flex justify-content-between align-items-center  gap-2 ">
      <div class="flex-grow-1">
        <div>
          <label for="short-tittle" class="form-label text-dark">
            Paragraph 
          </label>
          <input type="text" id="survey-input-1" class="form-control py-3" placeholder="Write ...">
          <div class="toolBar">
            <button class="btn fw-bold  cursor-pointer  bold-btn-1">B</button>
            <button class="btn fw-bold  cursor-pointer  italic-btn-1">I</button>
            <button class="btn fw-bold  cursor-pointer  underline-btn-1">U</button>
            <button class="btn fw-bold  link-btn-1"><i class="bi bi-link"></i></button>
          </div>
        </div>
        <button class="btn btn-warning">Save</button>
      </div>
      <button class=" mt-0 btn btn-danger prg-btn">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <div class="multiple-input d-none my-3">
      <div class="add-more-multiple-input" id="add-more-multiple-input-${count2}">
        <div>
          <label for="Titile" class="form-label text-dark">
            Multiple Choice Tittle 
          </label>
          <input type="text"  class="form-control py-3" placeholder="Write ...">
         
        </div>
        <div class="d-flex  align-items-center  gap-3">
          <div class="form-check my-2 d-flex align-items-center gap-2 ">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
              value="option1" />
            <button class="btn " onclick="showInput('multiple-input')">
              <input class="form-control txt-black mt-1 fw-normal" id="choice-input-first"
                placeholder="Option 1"  />
            </button>
         
          </div>
          <button class=" mt-1 btn btn-danger multiple-choice-btn">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
      <div class="form-check my-2 d-flex align-items-center gap-2">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
          value="option2" />
        <Button class="btn text-muted mt-1 fw-normal"
          onclick="addMoreInput( 'radio','add-more-multiple-input-${count2}','multiple-choice-btn')">
          Add option
        </Button>
      </div>
      <button class="btn btn-warning mx-3"> Save</button>
    </div>
    <div class="choice-input d-none my-3">
      <div class="add-more-choice-input" id="add-more-choice-input-${count2}">
        <div>
          <label for="Titile" class="form-label text-dark">
             Choice Tittle 
          </label>
          <input type="text"  class="form-control py-3" placeholder="Write ...">
         
        </div>
        <div class="d-flex  align-items-center  gap-3">
          <div class="form-check my-2 d-flex align-items-center gap-2 ">
            <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1"
              value="option1" />
            <button class="btn " onclick="showInput('choice-input')">
              <input class="form-control txt-black mt-1 fw-normal" id="choice-input-first"
                placeholder="Option 1"  />
            </button>

          </div>
          <button class=" mt-1 btn btn-danger choice-input-btn">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
      <div class="form-check my-2 d-flex align-items-center gap-2">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
          value="option2" />
        <Button class="btn text-muted mt-1 fw-normal"
          onclick="addMoreInput( 'checkbox','add-more-choice-input-${count2}','choice-input-btn')">
          Add option
        </Button>
      </div>
      <button class="btn btn-warning mx-3"> Save</button>
    </div>
    <div class="dropdown-input d-none my-3">
      <div class="add-more-dropdown-input" id="add-more-dropdown-input-${count2}">
        <div>
          <label for="Titile" class="form-label text-dark">
            DropDown  Tittle 
          </label>
          <input type="text"  class="form-control py-3" placeholder="Write ...">
         
        </div>
        <div class="d-flex  align-items-center  gap-3">
          <div class="form-check my-2 d-flex align-items-center gap-2 ">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
              value="option1" />
            <button class="btn " onclick="showInput('dropdown-input')">
              <input class="form-control txt-black mt-1 fw-normal" id="choice-input-first"
                placeholder="Option 1"  />
            </button>

          </div>
          <button class=" mt-1 btn btn-danger dropdown-input-btn">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
      <div class="form-check my-2 d-flex align-items-center gap-2">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
          value="option2" />
        <Button class="btn text-muted mt-1 fw-normal"
          onclick="addMoreInput( 'radio','add-more-dropdown-input-${count2}','dropdown-input-btn')">
          Add option
        </Button>
      </div>
      <button class="btn btn-warning mx-3"> Save</button>
    </div>
    <div class="fileUpload-input d-none my-3 d-flex justify-content-between align-items-center  gap-3 ">
      <div class="flex-grow-1">
        <label for="writePrg" class="form-label txt-black">Upload File </label>
       
        <div class="form-group card dropzone border-dashed">
          <div class="card-img">
              <div class="img-preview position-relative btn-file">
                  <div class="yes" >
                      <img id="ImgPreview" src="assets/images/icon/cloud-upload.png" alt="broken_image" class="preview1 upload-img mx-auto" />
                  </div>
                  <input type="file" id="imag" title="Upload_img" class="form-control input-img"/>
              </div>
              <button type="button" id="removeImage1" class="close-btn btn-rmv1"><i class="bi bi-x-circle-fill"></i></button>
          </div>
      </div>
      </div>
      <button class=" mt-4 btn btn-danger fileUpload-input-btn">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <div class="linear-scale-input d-none my-3 d-flex justify-content-between align-items-center  gap-3 ">
      <div class="flex-grow-1 linear-scale" >
        <label for="enter-survey-name" class="form-label text-dark">
          Tittle Of Scale 
        </label>
        <input type="text" class="form-control py-3" placeholder="Write ...">
        <div class="toolBar my-3">
          <span class="mx-1 bold-btn-1">B</span>
          <span class="mx-1 italic-btn-1">I</span>
          <span class="mx-1 underline-btn-1">U</span>
          <span class="mx-1 link-btn-1"><i class="bi bi-link"></i></span>
        </div>
        <div>
           <!-- here level  select  -->
           <div class="linear-main-scale d-flex gap-5 align-items-center">
            <select name="levelFirst" class="form-select w-50 linear-scale-option-value" id="" data-linear-value="first">
              <option value="1">1</option>
            </select>
            <div>To</div>
            <select name="levelLast" class="form-select w-50 linear-scale-option-value" id="" data-linear-value="last">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

           </div>
           <!-- here level  select  -->
          <div class="linear-all-scale my-4">
             <!-- here level left name  -->
             <div class="d-flex align-items-center gap-2 my-2 linear-first">
              <span class="text-dark">1</span>
              <input class="form-control" type="text" name="" id="">
             </div>
          
           <!-- here level left name  -->

         
           <!-- here level  Right Name   -->
           <div class="d-flex align-items-center gap-2 linear-second">
            <span class="linear-second-last text-dark">2</span>
            <input class="form-control" type="text" name="" id="">
           </div>
           <!-- here level  Right Name   -->
          </div>
          <div class="linear-scale-created d-none">
            <h2 class="linear-input-main-value text-dark text-center text-capitalize "></h2>
           <div class="d-flex justify-content-between align-items-center  my-4">
            <span class="inputValue1 text-dark">1</span>
            <div class="new-created-input">
            
            </div>
            <span class="inputValue2 text-dark">10</span>
           </div>
          </div>
        </div>
       <div>
        <button class="btn btn-warning my-3 linear-scale-save-btn ">Save</button>
        <button class="btn btn-danger my-3 linear-scale-delete-btn d-none">Delete</button>
      </div>
       </div>
      <button class=" mt-4 btn btn-danger linearScale-input-btn">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <div class="multiple-choice-grid d-none my-3 d-flex justify-content-between align-items-center  gap-3">
      <div>
        <div>
          <label for="Titile" class="form-label text-dark">
            Multiple Choice Tittle 
          </label>
          <input type="text"  class="form-control py-3" placeholder="Write ...">
        </div>
        <div class="d-flex align-items-lg-start flex-column flex-xl-row gap-3 multiple-grid-choice-main-div">
         <div>
           <!-- Rows part  -->
           <div class="add-more-multiple-rows" id="add-more-multiple-rows-${count2}">
             <h2 class="text-dark mx-5 mt-2"> Rows </h2>
             <div class="d-flex align-items-center  gap-3">
              <div class="form-check my-2 d-flex align-items-center gap-2 ">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                  value="option1" />
                <button class="btn " onclick="showInput('multiple-input')">
                  <input class="form-control txt-black mt-1 fw-normal" id="choice-input-first"
                    placeholder="Option 1"  />
                </button>
              </div>
              <button class=" mt-1 btn btn-danger multiple-choice-btn">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
        </div>
         <!-- rows part add option  -->
      
         <div class="form-check my-2 d-flex align-items-center gap-2">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
            value="option2" />
          <Button class="btn text-muted mt-1 fw-normal"
            onclick="addMoreRows( 'radio','add-more-multiple-rows-${count2}','multiple-choice-btn')">
            Add option
          </Button>
        </div>
      
       <!-- rows part add option  -->
         <!-- Rows part  -->
         </div>
         <hr class="border-2 border border-dark d-lg-none">
         <div>
           
           <!-- Column part  -->
           <div class="add-more-multiple-column" id="add-more-multiple-column-${count2}">
           <h2 class="text-dark mx-5 mt-2"> Columns </h2>
          <div class="d-flex align-items-center  gap-3">
            <div class="form-check my-2 d-flex align-items-center gap-2 ">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                value="option1" />
              <button class="btn " onclick="showInput('multiple-input')">
                <input class="form-control txt-black mt-1 fw-normal" id="choice-input-first"
                  placeholder="Option 1"  />
              </button>
            </div>
            <button class=" mt-1 btn btn-danger multiple-choice-btn">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

        </div>
         <!-- Column part  -->
          <!-- Column  part add option  -->
          <div class="form-check my-2 d-flex align-items-center gap-2">
           <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
             value="option2" />
           <Button class="btn text-muted mt-1 fw-normal"
             onclick="addMoreColumn( 'radio','add-more-multiple-column-${count2}','multiple-choice-btn')">
             Add option
           </Button>
         </div>
          <!-- Column  part add option  -->
         </div>
        </div>
        <div>
          <button class="btn btn-warning save-multiple-choice-grid mx-4 px-5 my-4 py-2" onclick="saveMultipleBtn(this)"> Save </button>
        </div>
      </div>
      <button class=" mt-4 btn btn-danger multiple-choice-grid-btn">
        <i class="bi bi-x-lg"></i>
      </button>
  </div>
    <div class="multiple-checkBox-grid d-none my-3 d-flex justify-content-between align-items-center  gap-3">
      <div>
        <div>
          <label for="Titile" class="form-label text-dark">
            CheckBox  Tittle 
          </label>
          <input type="text"  class="form-control py-3" placeholder="Write ...">
        </div>
        <div class="d-flex align-items-lg-start flex-column flex-xl-row gap-3 multiple-grid-choice-main-div">
         <div>
           <!-- Rows part  -->
           <div class="add-more-multiple-rows" id="add-more-multipleCheckBox-rows-${count2}">
             <h2 class="text-dark mx-5 mt-2"> Rows </h2>
             <div class="d-flex align-items-center  gap-3">
              <div class="form-check my-2 d-flex align-items-center gap-2 ">
                <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1"
                  value="option1" />
                <button class="btn " onclick="showInput('multiple-input')">
                  <input class="form-control txt-black mt-1 fw-normal" id="choice-input-first"
                    placeholder="Option 1"  />
                </button>
              </div>
              <button class=" mt-1 btn btn-danger multiple-choice-btn">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
        </div>
         <!-- rows part add option  -->
      
         <div class="form-check my-2 d-flex align-items-center gap-2">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
            value="option2" />
          <Button class="btn text-muted mt-1 fw-normal"
            onclick="addMoreRows( 'checkbox','add-more-multipleCheckBox-rows-${count2}','multiple-choice-btn')">
            Add option
          </Button>
        </div>
      
       <!-- rows part add option  -->
         <!-- Rows part  -->
         </div>
         <hr class="border-2 border border-dark d-lg-none">
         <div>
           
           <!-- Column part  -->
           <div class="add-more-multiple-column" id="add-more-multiple-column-${count2}">
           <h2 class="text-dark mx-5 mt-2"> Columns </h2>
          <div class="d-flex align-items-center  gap-3">
            <div class="form-check my-2 d-flex align-items-center gap-2 ">
              <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1"
                value="option1" />
              <button class="btn " onclick="showInput('multiple-input')">
                <input class="form-control txt-black mt-1 fw-normal" id="choice-input-first"
                  placeholder="Option 1"  />
              </button>
            </div>
            <button class=" mt-1 btn btn-danger multiple-choice-btn">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

        </div>
         <!-- Column part  -->
          <!-- Column  part add option  -->
          <div class="form-check my-2 d-flex align-items-center gap-2">
           <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
             value="option2" />
           <Button class="btn text-muted mt-1 fw-normal"
             onclick="addMoreColumn( 'checkbox','add-more-multiple-column-${count2}','multiple-choice-btn')">
             Add option
           </Button>
         </div>
          <!-- Column  part add option  -->
         </div>
        </div>
        <div>
          <button class="btn btn-warning save-multiple-choice-grid mx-4 px-5 my-4 py-2" onclick="saveMultipleBtn(this)"> Save </button>
        </div>
      </div>
      <button class=" mt-4 btn btn-danger multiple-checkBox-grid-btn">
        <i class="bi bi-x-lg"></i>
      </button>
  </div>
    <div class="date-input d-none my-3 d-flex justify-content-between align-items-center  gap-3 ">
      <div class="flex-grow-1">
        <label for="writePrg" class="form-label txt-black">Date</label>
        <input type="date" placeholder="Write Paragraph" name="write" id="writePrg"
          class="form-control" />
      </div>
      <button class=" mt-4 btn btn-danger date-input-btn">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <div class="time-input d-none my-3 d-flex justify-content-between align-items-center  gap-3 ">
      <div class="flex-grow-1">
        <label for="writePrg" class="form-label txt-black">Time</label>
        <input type="time" placeholder="Write Paragraph" name="write" id="writePrg"
          class="form-control" />
      </div>
      <button class=" mt-4 btn btn-danger time-input-btn">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  </div>
  <div class="d-flex align-items-lg-start gap-3 mt-3">
    
    <span class="mt-2 btn-file cursor-pointer"><i class="bi bi-image fs-7"></i>
      <input type="file" />
    </span>
    <div>
      <div class="block-wrapper">
        <ul class="select">
          <li class="" style="list-style-type: none;">
            <div class="select-field" id="option-1">

              <p class="txt-black  fs-5 fw-normal row">
                <span class="col-2">
                  <img src="./assets/images/icon/short-msg.png" alt="" class="mx-2">
                </span> <span class="col-10">Short Answer</span>
              </p>
              <span></span>
            </div>
            <ul class="select-list">
              <li class="">
                <p class="txt-black  fs-5 fw-normal row">
                  <span class="col-2">
                    <img src="./assets/images/icon/short-msg.png" alt="" class="mx-2">
                  </span> <span class="col-10">Short Answer</span>
                </p>
              </li>
              <li>
                <p class="txt-black  fs-5 fw-normal row">
                  <span class="col-2">
                    <img src="./assets/images/icon/modal_list.png" alt="" class="mx-2">
                  </span> <span class="col-10">Paragraph</span>
                </p>
              </li>
              <li>
                <hr class="border-1 border border-dark">
                <p class="txt-black  fs-5 fw-normal row">
                  <span class="col-2">
                    <img src="./assets/images/icon/multiple-choice.png" alt="" class="mx-2">
                  </span> <span class="col-10">Multiple Choice</span>
                </p>
              </li>
              <li>
                <p class="txt-black  fs-5 fw-normal row">
                  <span class="col-2">
                    <img src="./assets/images/icon/checkmark.png" alt="" class="mx-2">
                  </span> <span class="col-10">Checkboxes</span>
                </p>
              </li>
              <li>
                <p class="txt-black  fs-5 fw-normal row">
                  <span class="col-2">
                    <img src="./assets/images/icon/dropdown.png" alt="" class="mx-2">
                  </span> <span class="col-10">DropDown</span>
                </p>
                <hr class="border-1 border border-dark">
              </li>
              <li>
                <p class="txt-black  fs-5 fw-normal row">
                  <span class="col-2">
                    <img src="./assets/images/icon/fileUpload.png" alt="" class="mx-2">
                  </span> <span class="col-10">File Upload</span>
                </p>
              </li>
              <li>
                <hr class="border-1 border border-dark">
                <p class="txt-black  fs-5 fw-normal row">
                  <span class="col-2">
                    <img src="./assets/images/icon/lineearScale.png" alt="" class="mx-2">
                  </span> <span class="col-10">Linear Scale</span>
                </p>
              </li>
              <li>
                <p class="txt-black  fs-5 fw-normal row">
                  <span class="col-2">
                    <img src="./assets/images/icon/multipleGrid.png" alt="" class="mx-2">
                  </span> <span class="col-10">Multiple Choice Grid</span>
                </p>
              </li>
              <li>
                <p class="txt-black  fs-5 fw-normal row">
                  <span class="col-2">
                    <img src="./assets/images/icon/checkBoxGrid.png" alt="" class="mx-2">
                  </span> <span class="col-10">Checkbox Grid</span>
                </p>
              </li>
              <li>
                <hr class="border-1 border border-dark">
                <p class="txt-black  fs-5 fw-normal row">
                  <span class="col-2">
                    <img src="./assets/images/icon/date.png" alt="" class="mx-2">
                  </span> <span class="col-10">Date</span>
                </p>
              </li>
              <li>
                <p class="txt-black  fs-5 fw-normal row">
                  <span class="col-2">
                    <img src="./assets/images/icon/time.png" alt="" class="mx-2">
                  </span> <span class="col-10">Time</span>
                </p>
              </li>
            </ul>
          </li>
        </ul>

      </div>
    </div>
  </div>
</div>

</div>`;

  optionMainDiv.appendChild(option1);
  toolBox(makeUniqueId);
  linearScale(makeUniqueId);
});

// Create Dynamic option

// linear Scale option
const linearScaleOptions = document.querySelectorAll(
  ".linear-scale-option-value"
);

linearScaleOptions.forEach((option) => {
  option.addEventListener("change", (event) => {
    // Use "change" event for better handling
    const linearScaleDiv = event.target.closest(".linear-scale");
    const inputOfValueOfMain = linearScaleDiv.querySelector(
      ".linear-scale input"
    );
    const saveBtnOfLinearScale = linearScaleDiv.querySelector(
      ".linear-scale-save-btn"
    );
    const deleteBtnOfLinearScale = linearScaleDiv.querySelector(
      ".linear-scale-delete-btn"
    );
    const linearSecondLast = linearScaleDiv.querySelector(
      ".linear-second-last"
    );
    const mainLinearScaleOf =
      linearScaleDiv.querySelector(".linear-main-scale");

    const newDivOfLinearScale = linearScaleDiv.querySelector(
      ".linear-scale-created"
    );
    const newCreatedInput = linearScaleDiv.querySelector(".new-created-input");
    const linearFirstInput = linearScaleDiv.querySelector(
      ".linear-first input"
    );
    const linearSecondInput = linearScaleDiv.querySelector(
      ".linear-second input"
    );
    const mainLinearScale = linearScaleDiv.querySelector(".linear-all-scale");
    const valueOfSelect = [];
    if (linearScaleDiv) {
      const dataLinearValue = event.target.dataset.linearValue; // Use dataset property
      const selectedValue = event.target.value;
      // Perform additional actions based on dataLinearValue and selectedValue
      if (dataLinearValue === "first") {
        valueOfSelect[0] = selectedValue;
      } else if (dataLinearValue === "last") {
        valueOfSelect[1] = selectedValue;
        linearSecondLast.innerHTML = selectedValue;
      } else {
        console.log("Invalid dataLinearValue:", dataLinearValue);
      }
    }

    saveBtnOfLinearScale.addEventListener("click", () => {
      if (newDivOfLinearScale.classList.contains("d-none")) {
        const crateInput = createCheckboxes(Number(valueOfSelect[1]));
        linearScaleDiv.querySelector(".linear-input-main-value").innerText =
          inputOfValueOfMain.value;
        linearScaleDiv.querySelector(".inputValue1").innerText =
          linearFirstInput.value;
        linearScaleDiv.querySelector(".inputValue2").innerText =
          linearSecondInput.value;
        newCreatedInput.append(crateInput);
        mainLinearScale.classList.add("d-none");
        mainLinearScaleOf.classList.add("d-none");
        newDivOfLinearScale.classList.remove("d-none");
        deleteBtnOfLinearScale.classList.remove("d-none");
      } else {
        deleteBtnOfLinearScale.classList.remove("d-none");
      }
    });
    deleteBtnOfLinearScale.addEventListener("click", () => {
      linearScaleDiv.querySelector(".linear-input-main-value").innerText = "";
      linearScaleDiv.querySelector(".inputValue1").innerText = "";
      linearScaleDiv.querySelector(".inputValue2").innerText = "";
      newCreatedInput.innerHTML = "";
      inputOfValueOfMain.value = "";
      linearFirstInput.value = "";
      linearSecondInput.value = "";
      newDivOfLinearScale.classList.add("d-none");
      mainLinearScale.classList.remove("d-none");
      mainLinearScaleOf.classList.remove("d-none");
    });
  });
});

// linear Scale option
function createCheckboxes(number) {
  if (typeof number !== "number" || number <= 0) {
    throw new Error("Number must be a positive integer.");
  }

  const div = document.createElement("div");
  div.classList.add(
    "d-flex",
    "flex-wrap",
    "gap-4",
    "align-items-center",
    "justify-content-center"
  );
  for (let i = 0; i < number; i++) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `checkbox-${i}`;
    checkbox.name = `checkbox-${i}`;

    div.appendChild(checkbox);
  }

  return div;
}

// Here Add Visibility
function toolBox(id) {
  const btn = document.querySelector(`#${id} .bold-btn-1`);
  const italicButtons = document.querySelector(`#${id} .italic-btn-1`);
  const underlineButtons = document.querySelector(`#${id} .underline-btn-1`);
  const linkButtons = document.querySelector(`#${id} .link-btn-1`);
  btn.addEventListener("click", function (e) {
    const select = e.target;
    const selectInput = select.closest(".flex-grow-1");
    const inputField = selectInput.querySelector("input");
    inputField.style.fontWeight =
      inputField.style.fontWeight === "bold" ? "normal" : "bold";
  });

  italicButtons.addEventListener("click", function (e) {
    const select = e.target;
    const selectInput = select.closest(".flex-grow-1");
    const inputField = selectInput.querySelector("input");
    inputField.style.fontStyle =
      inputField.style.fontStyle === "italic" ? "normal" : "italic";
  });

  underlineButtons.addEventListener("click", function (e) {
    const select = e.target;
    const selectInput = select.closest(".flex-grow-1");
    const inputField = selectInput.querySelector("input");
    inputField.style.textDecoration =
      inputField.style.textDecoration === "underline" ? "none" : "underline";
  });

  linkButtons.addEventListener("click", function (e) {
    const select = e.target;
    const selectInput = select.closest(".flex-grow-1");
    const inputField = selectInput.querySelector("input");
    const link = prompt("Enter the link URL:");
    if (link !== null && link.trim() !== "") {
      const selectedText = inputField.value.substring(
        inputField.selectionStart,
        inputField.selectionEnd
      );
      const linkedText = `<a href="${link}">${selectedText}</a>`;
      const newText =
        inputField.value.slice(0, inputField.selectionStart) +
        linkedText +
        inputField.value.slice(inputField.selectionEnd);
      inputField.value = newText;
    }
  });
}
//  Linier Scale Functions
function linearScale(id) {
  const linearScaleOptions = document.querySelector(`#${id} .linear-scale`);
  linearScaleOptions.addEventListener("change", (event) => {
    // Use "change" event for better handling
    const linearScaleDiv = event.target.closest(".linear-scale");
    const inputOfValueOfMain = linearScaleDiv.querySelector(
      ".linear-scale input"
    );
    const saveBtnOfLinearScale = linearScaleDiv.querySelector(
      ".linear-scale-save-btn"
    );
    const deleteBtnOfLinearScale = linearScaleDiv.querySelector(
      ".linear-scale-delete-btn"
    );
    const linearSecondLast = linearScaleDiv.querySelector(
      ".linear-second-last"
    );
    const mainLinearScaleOf =
      linearScaleDiv.querySelector(".linear-main-scale");

    const newDivOfLinearScale = linearScaleDiv.querySelector(
      ".linear-scale-created"
    );
    const newCreatedInput = linearScaleDiv.querySelector(".new-created-input");
    const linearFirstInput = linearScaleDiv.querySelector(
      ".linear-first input"
    );
    const linearSecondInput = linearScaleDiv.querySelector(
      ".linear-second input"
    );
    const mainLinearScale = linearScaleDiv.querySelector(".linear-all-scale");
    const valueOfSelect = [];
    if (linearScaleDiv) {
      const dataLinearValue = event.target.dataset.linearValue; // Use dataset property
      const selectedValue = event.target.value;
      // Perform additional actions based on dataLinearValue and selectedValue
      if (dataLinearValue === "first") {
        valueOfSelect[0] = selectedValue;
      } else if (dataLinearValue === "last") {
        valueOfSelect[1] = selectedValue;
        linearSecondLast.innerHTML = selectedValue;
      } else {
        console.log("Invalid dataLinearValue:", dataLinearValue);
      }
    }

    saveBtnOfLinearScale.addEventListener("click", () => {
      if (newDivOfLinearScale.classList.contains("d-none")) {
        const crateInput = createCheckboxes(Number(valueOfSelect[1]));
        linearScaleDiv.querySelector(".linear-input-main-value").innerText =
          inputOfValueOfMain.value;
        linearScaleDiv.querySelector(".inputValue1").innerText =
          linearFirstInput.value;
        linearScaleDiv.querySelector(".inputValue2").innerText =
          linearSecondInput.value;
        newCreatedInput.append(crateInput);
        mainLinearScale.classList.add("d-none");
        mainLinearScaleOf.classList.add("d-none");
        newDivOfLinearScale.classList.remove("d-none");
        deleteBtnOfLinearScale.classList.remove("d-none");
      } else {
        deleteBtnOfLinearScale.classList.remove("d-none");
      }
    });
    deleteBtnOfLinearScale.addEventListener("click", () => {
      linearScaleDiv.querySelector(".linear-input-main-value").innerText = "";
      linearScaleDiv.querySelector(".inputValue1").innerText = "";
      linearScaleDiv.querySelector(".inputValue2").innerText = "";
      newCreatedInput.innerHTML = "";
      inputOfValueOfMain.value = "";
      linearFirstInput.value = "";
      linearSecondInput.value = "";
      newDivOfLinearScale.classList.add("d-none");
      mainLinearScale.classList.remove("d-none");
      mainLinearScaleOf.classList.remove("d-none");
    });
  });
}

//  here Add new multiple input
let rowsValue = 2;
function addMoreRows(type, value, btn) {
  const addDiv = document.querySelector(`#${value}`);
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div class="d-flex  align-items-center gap-3">
      <div class="form-check my-2 d-flex align-items-center gap-2">
        <input
          class="form-check-input"
          type="${type}"
          name="exampleRadios"
          id="exampleRadios${rowsValue}"
          value="option${rowsValue}"
        />
        <button class="btn" onclick="showInput('choice-input${rowsValue}')">
          <input
            class="form-control txt-black mt-1 fw-normal"
            id="choice-input${rowsValue}"
            placeholder="Option ${rowsValue}"
            readonly
          />
        </button>
      </div>
      <button class="mt-1 btn btn-danger ${btn}" onclick="removeInput2(this,'rowsValue')">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  `;
  addDiv.appendChild(newDiv);
  rowsValue++;
}
let columnValue = 2;
function addMoreColumn(type, value, btn) {
  const addDiv = document.querySelector(`#${value}`);
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div class="d-flex  align-items-center gap-3">
      <div class="form-check my-2 d-flex align-items-center gap-2">
        <input
          class="form-check-input"
          type="${type}"
          name="exampleRadios"
          id="exampleRadios-column-${columnValue}"
          value="option${columnValue}"
        />
        <button class="btn" onclick="showInput('choice-input-column-${columnValue}')">
          <input
            class="form-control txt-black mt-1 fw-normal"
            id="choice-input-column-${columnValue}"
            placeholder="Option ${columnValue}"
            readonly
          />
        </button>
      </div>
      <button class="mt-1 btn btn-danger ${btn}" onclick="removeInput2(this,'columnValue')">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  `;
  addDiv.appendChild(newDiv);
  columnValue++;
}

// Remove Input From Dynamic Delete Option
function removeInput2(button, value) {
  const parentDiv = button.closest(".d-flex");
  parentDiv.remove();
  if (value === "rowsValue") {
    if (rowsValue > 2) {
      rowsValue--;
    }
  } else if (value === "columnValue") {
    if (columnValue > 2) {
      columnValue--;
    }
  }
}
// Remove Input From Dynamic Delete Option
//!  here If Anyone click input

// Function to save the multiple choice grid
function saveMultipleBtn(ele) {
  const parentDiv = ele.closest(".multiple-input");
  const mainDiv = parentDiv.querySelector(".multiple-grid-choice-main-div");
  const rowsDiv = parentDiv.querySelector(".add-more-multiple-rows");
  const rows = [];
  const rowsInputAll = rowsDiv.querySelectorAll("button .form-control");
  rowsInputAll.forEach((ele) => {
    rows.push(ele.value);
  });
  const columnDiv = parentDiv.querySelector(".add-more-multiple-column");
  const column = [];
  const columnInputAll = columnDiv.querySelectorAll("button .form-control");
  columnInputAll.forEach((ele) => {
    column.push(ele.value);
  });
  mainDiv.classList.add("d-none");
  console.log(rows, column);
}
