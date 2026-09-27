const canvas = document.getElementById("canvas");


/* رفتن به سایت ساز */

function openBuilder() {

  document
    .getElementById("builder")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* حذف صفحه شروع */

function removeEmpty() {

  const empty =
    document.querySelector(".empty-state");

  if (empty) {
    empty.remove();
  }

}


/* ساخت المان */

function addElement(type) {

  removeEmpty();

  const element =
    document.createElement("div");

  element.className =
    "element";


  /* متن */

  if (type === "text") {

    element.innerHTML = `
      <p contenteditable="true">
        این یک متن جدید است. برای تغییر، روی آن کلیک کن.
      </p>
    `;

  }


  /* عنوان */

  if (type === "heading") {

    element.innerHTML = `
      <h2 contenteditable="true">
        عنوان سایت من
      </h2>
    `;

  }


  /* دکمه */

  if (type === "button") {

    element.innerHTML = `
      <button
        class="site-button"
        onclick="buttonClick(this)"
      >
        دکمه من
      </button>
    `;

  }


  /* تصویر */

  if (type === "image") {

    element.innerHTML = `

      <input
        type="text"
        placeholder="لینک تصویر را وارد کن..."
        style="
          width:100%;
          padding:12px;
          border-radius:8px;
          border:1px solid #333;
          background:#0d1320;
          color:white;
        "
        onchange="loadImage(this)"
      >

    `;

  }


  /* بخش */

  if (type === "section") {

    element.classList.add(
      "section-element"
    );

    element.innerHTML = `

      <h3 contenteditable="true">
        بخش جدید
      </h3>

      <p contenteditable="true">
        محتوای این بخش را بنویس.
      </p>

    `;

  }


  canvas.appendChild(element);

}


/* تصویر */

function loadImage(input) {

  const url =
    input.value.trim();

  if (!url) return;

  const element =
    input.parentElement;

  element.innerHTML = `
    <img
      src="${escapeHTML(url)}"
      alt="تصویر"
    >
  `;

}


/* دکمه */

function buttonClick(button) {

  const text =
    prompt(
      "متن دکمه:",
      button.innerText
    );

  if (text !== null) {

    button.innerText = text;

  }

}


/* رنگ پس زمینه */

function changeBackground() {

  const color =
    document.getElementById(
      "bgColor"
    ).value;

  canvas.style.background =
    color;

}


/* رنگ متن */

function changeTextColor() {

  const color =
    document.getElementById(
      "textColor"
    ).value;

  canvas.style.color =
    color;

}


/* اندازه متن */

function changeFontSize(size) {

  canvas.style.fontSize =
    size + "px";

}


/* ذخیره */

function saveProject() {

  localStorage.setItem(
    "dilcraft-project",
    canvas.innerHTML
  );

  alert(
    "پروژه ذخیره شد ✅"
  );

}


/* بارگذاری */

function loadProject() {

  const saved =
    localStorage.getItem(
      "dilcraft-project"
    );

  if (saved) {

    canvas.innerHTML =
      saved;

  }

}


/* پاک کردن */

function clearCanvas() {

  const ok =
    confirm(
      "کل پروژه پاک شود؟"
    );

  if (!ok) return;

  canvas.innerHTML = `

    <div class="empty-state">

      <div class="empty-icon">
        🚀
      </div>

      <h2>
        سایتت رو اینجا بساز
      </h2>

      <p>
        از پنل کناری یک المان اضافه کن.
      </p>

    </div>

  `;

  localStorage.removeItem(
    "dilcraft-project"
  );

}


/* پیش نمایش */

function previewSite() {

  const preview =
    window.open(
      "",
      "_blank"
    );

  if (!preview) {

    alert(
      "مرورگر اجازه باز کردن پنجره جدید را نداد."
    );

    return;

  }


  preview.document.write(`

    <!DOCTYPE html>

    <html
      lang="fa"
      dir="rtl"
    >

    <head>

      <meta charset="UTF-8">

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      >

      <title>
        سایت من
      </title>

      <style>

        body {
          margin: 0;
          padding: 40px;
          font-family: Arial;
          background: #111827;
          color: white;
        }

        .element {
          margin: 15px 0;
          padding: 15px;
        }

        img {
          max-width: 100%;
          border-radius: 12px;
        }

        button {
          background: #7c5cff;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
        }

      </style>

    </head>

    <body>

      ${canvas.innerHTML}

    </body>

    </html>

  `);

  preview.document.close();

}


/* جلوگیری از HTML خطرناک */

function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent =
    text;

  return div.innerHTML;

}


/* اجرای اولیه */

window.addEventListener(
  "load",
  loadProject
);
