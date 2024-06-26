var $table = $("#table");
$(function () {
  $("#toolbar")
    .find("select")
    .change(function () {
      $table.bootstrapTable("refreshOptions", {
        exportDataType: $(this).val(),
      });
    });
});

var trBoldBlue = $("tbody");

$(trBoldBlue).on("click", "tr", function () {
  $(this).toggleClass("selectTr");
});

//  here Start tab Content

document.addEventListener("DOMContentLoaded", function () {
  const tabBtn1 = document.querySelector(".tab-btn-1");
  const tabBtn2 = document.querySelector(".tab-btn-2");
  const tabBtn3 = document.querySelector(".tab-btn-3");
  const tabContent1 = document.querySelector(".tab-content-1");
  const tabContent2 = document.querySelector(".tab-content-2");
  const tabContent3 = document.querySelector(".tab-content-3");
  const handleTabClick = (activeTab) => {
    tabContent1.classList.toggle("d-none", activeTab !== "tab-btn-1");
    tabContent2.classList.toggle("d-none", activeTab !== "tab-btn-2");
    tabContent3.classList.toggle("d-none", activeTab !== "tab-btn-3");
    tabBtn1.classList.toggle("tab-btn-active", activeTab === "tab-btn-1");
    tabBtn2.classList.toggle("tab-btn-active", activeTab === "tab-btn-2");
    tabBtn3.classList.toggle("tab-btn-active", activeTab === "tab-btn-3");
  };

  tabBtn1.addEventListener("click", () => handleTabClick("tab-btn-1"));
  tabBtn2.addEventListener("click", () => handleTabClick("tab-btn-2"));
  tabBtn3.addEventListener("click", () => handleTabClick("tab-btn-3"));
});

//  here Start tab Content
// Text Editor here Also Set here
document.addEventListener("DOMContentLoaded", () => {
  tinymce.init({
    selector: "div#textEditor",
    height: 300,
    plugins: [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "help",
      "wordcount",
    ],
    toolbar:
      "undo redo | blocks | " +
      "bold italic backcolor | alignleft aligncenter " +
      "alignright alignjustify | bullist numlist outdent indent | " +
      "removeformat | help",
    content_style:
      "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
  });
});

// Text Editor here Also Set here
const dropzone = document.querySelector(".upload-main-box");
const previewContainer = document.querySelector(".preview-container");
const fileInput = document.getElementById("fileInput");

// Optional visual enhancement on drag over
dropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropzone.classList.add("dragover");
});

dropzone.addEventListener("dragleave", (event) => {
  event.preventDefault();
  dropzone.classList.remove("dragover");
});

// Handle both drag and drop and manual file selection
dropzone.addEventListener("drop", handleFiles);
fileInput.addEventListener("change", handleFiles);

function handleFiles(event) {
  event.preventDefault();
  const files =
    event.type === "drop" ? event.dataTransfer.files : event.target.files;

  // Validate selected files (optional)
  const allowedExtensions = ["jpg", "jpeg", "png", "pdf"];
  const invalidFiles = [];
  for (const file of files) {
    const extension = file.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      invalidFiles.push(file.name);
    }
  }

  if (invalidFiles.length > 0) {
    alert(
      `Invalid file types selected: ${invalidFiles.join(
        ", "
      )}. Only JPG, JPEG, PNG, and PDF files are allowed.`
    );
    return;
  }

  // Process valid files
  for (const file of files) {
    const preview = document.createElement("div");
    preview.classList.add("preview-item");

    const img = document.createElement("img");
    img.classList.add("preview-img");

    const reader = new FileReader();
    reader.onload = () => {
      if (file.type.startsWith("image/")) {
        img.src = reader.result;
      } else {
        img.src = "your-default-file-icon.png"; // Replace with your default icon
      }
    };

    reader.readAsDataURL(file);

    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      previewContainer.removeChild(preview);
    });

    preview.appendChild(img);
    preview.appendChild(deleteButton);
    previewContainer.appendChild(preview);
  }
}
