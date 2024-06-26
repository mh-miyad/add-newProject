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

  tabBtn1.addEventListener("click", () => {
    handleTabClick("tab-btn-1");
    if (tabBtn1.classList.contains("tab-btn-active")) {
      tabBtn1.classList.remove("done-target");
      tabBtn1.classList.add("tab-btn-all");
    }
  });
  tabBtn2.addEventListener("click", () => {
    handleTabClick("tab-btn-2");
    if (tabBtn2.classList.contains("tab-btn-active")) {
      tabBtn2.classList.remove("done-target");
      tabBtn2.classList.add("tab-btn-all");
    }
  });
  tabBtn3.addEventListener("click", () => {
    handleTabClick("tab-btn-3");
    if (tabBtn2.classList.contains("tab-btn-active")) {
      tabBtn2.classList.remove("done-target");
      tabBtn2.classList.add("tab-btn-all");
    }
  });

  const saveThisTab1 = document.getElementById("saveThisTab1");
  const saveThisTab2 = document.getElementById("saveThisTab2");
  const saveThisTab3 = document.getElementById("saveThisTab3");
  const backTotab1 = document.getElementById("backToTab1");
  const backTotab2 = document.getElementById("backToTab2");
  saveThisTab1.addEventListener("click", () => {
    if (tabBtn1.classList.contains("tab-btn-active")) {
      tabBtn1.classList.remove("tab-btn-active");
      tabBtn1.classList.remove("tab-btn-all");
      tabBtn1.classList.add("done-target");
      tabBtn2.classList.add("tab-btn-active");
      tabContent1.classList.add("d-none");
      tabContent2.classList.remove("d-none");
    }
  });
  saveThisTab2.addEventListener("click", () => {
    if (tabBtn2.classList.contains("tab-btn-active")) {
      tabBtn2.classList.remove("tab-btn-active");
      tabBtn2.classList.remove("tab-btn-all");
      tabBtn2.classList.add("done-target");
      tabBtn3.classList.add("tab-btn-active");
      tabContent2.classList.add("d-none");
      tabContent3.classList.remove("d-none");
    }
  });
  backTotab1.addEventListener("click", () => {
    if (
      (tabBtn2.classList.contains("tab-btn-active") &&
        tabBtn1.classList.contains("done-target")) ||
      tabBtn2.classList.contains("done-target")
    ) {
      tabBtn1.classList.remove("done-target");
      tabBtn2.classList.remove("tab-btn-active");
      tabBtn2.classList.add("tab-btn-all");
      tabBtn1.classList.add("tab-btn-active");
      tabBtn1.classList.add("tab-btn-all");
      tabContent2.classList.add("d-none");
      tabContent1.classList.remove("d-none");
    }
  });
  saveThisTab3.addEventListener("click", () => {
    if (tabBtn3.classList.contains("tab-btn-active")) {
      tabBtn3.classList.remove("tab-btn-active");
      tabBtn3.classList.remove("tab-btn-all");
      tabBtn3.classList.add("done-target");
    }
  });
  backTotab2.addEventListener("click", () => {
    if (
      tabBtn3.classList.contains("tab-btn-active") &&
      tabBtn2.classList.contains("done-target")
    ) {
      tabBtn2.classList.remove("done-target");
      tabBtn3.classList.remove("tab-btn-active");
      tabBtn3.classList.add("tab-btn-all");
      tabBtn2.classList.add("tab-btn-active");
      tabBtn2.classList.add("tab-btn-all");
      tabContent3.classList.add("d-none");
      tabContent2.classList.remove("d-none");
    } else if (tabBtn3.classList.contains("done-target")) {
      tabBtn2.classList.remove("done-target");
      tabBtn3.classList.remove("done-target");
      tabBtn3.classList.add("tab-btn-all");
      tabBtn2.classList.add("tab-btn-active");
      tabBtn2.classList.add("tab-btn-all");
      tabContent3.classList.add("d-none");
      tabContent2.classList.remove("d-none");
    }
  });
});

//  here I create text editor
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
