const canvas = document.getElementById("canvas");

function scrollToBuilder() {
  document.getElementById("builder").scrollIntoView({
    behavior: "smooth"
  });
}

function removeWelcome() {
  const welcome = document.querySelector(".welcome");

  if (welcome) {
    welcome.remove();
  }
}

function createElement(type) {

  const element = document.createElement("div");

  element.className = "element";
  element.dataset.type = type;

  if (type === "text") {

    element.innerHTML = `
      <h2 contenteditable="true">
        متن جدید
      </h2>
    `;

  }

  if (type === "button") {

    element.innerHTML = `
      <button class="site-button">
        دکمه جدید
      </button>
    `;

  }

  if (type === "image") {

    element.innerHTML = `
      <div>
        <p>لینک تصویر را وارد کن:</p>

        <input
          type="text"
          placeholder="https://example.com/image.jpg"
          onchange="setImage(this)"
          style="
            width:100%;
            padding:10px;
            margin-top:10px;
            border-radius:7px;
            border:0;
          "
        >
      </div>
    `;

  }

  if (type === "box") {

    element.classList.add("box-element");

    element.innerHTML = `
      <h3 contenteditable="true">
        بخش جدید
      </h3>
      <p contenteditable="true">
        اینجا محتوای خودت را بنویس.
      </p>
    `;

  }

  return element;
}

function addElement(type) {

  removeWelcome();

  const element = createElement(type);

  canvas.appendChild(element);

  element.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function setImage(input) {

  const url = input.value.trim();

  if (!url) return;

  const parent = input.parentElement;

  parent.innerHTML = `
    <img src="${escapeHTML(url)}" alt="تصویر سایت">
  `;
}

function changeBackground() {

  const color = document.getElementById("bgColor").value;

  canvas.style.background = color;
}

function changeTextColor() {

  const color = document.getElementById("textColor").value;

  canvas.style.color = color;
}

function changeFontSize(size) {

  canvas.style.fontSize = size + "px";
}

function saveProject() {

  localStorage.setItem(
    "webcraft-project",
    canvas.innerHTML
  );

  alert("پروژه با موفقیت ذخیره شد ✅");
}

function loadProject() {

  const saved = localStorage.getItem(
    "webcraft-project"
  );

  if (saved) {
    canvas.innerHTML = saved;
  }
}

function clearCanvas() {

  if (
    confirm("مطمئنی می‌خواهی پروژه پاک شود؟")
  ) {

    canvas.innerHTML = `
      <div class="welcome">
        <h2>سایت خودت رو اینجا بساز 🚀</h2>
        <p>
          از منوی سمت راست یک عنصر اضافه کن.
        </p>
      </div>
    `;

    localStorage.removeItem(
      "webcraft-project"
    );
  }
}

function previewSite() {

  const newWindow = window.open(
    "",
    "_blank"
  );

  if (!newWindow) {

    alert(
      "مرورگر اجازه باز کردن صفحه جدید را نداد."
    );

    return;
  }

  newWindow.document.write(`
    <!DOCTYPE html>

    <html lang="fa" dir="rtl">

    <head>

      <meta charset="UTF-8">

      <meta name="viewport"
        content="width=device-width, initial-scale=1.0">

      <title>سایت ساخته شده با WebCraft</title>

      <style>

        body {
          margin: 0;
          padding: 40px;
          font-family: Arial, sans-serif;
          background: #111827;
          color: white;
        }

        .element {
          margin: 15px 0;
          padding: 15px;
        }

        img {
          max-width: 100%;
          border-radius: 10px;
        }

        button {
          background: #7c5cff;
          color: white;
          border: 0;
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

  newWindow.document.close();
}

function escapeHTML(text) {

  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}

window.addEventListener(
  "load",
  loadProject
);
