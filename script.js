const sub = document.querySelector(".sub");
const fileInput = document.querySelector(".file-input");

const path = [];
const img = document.querySelector(".image");
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
let limit = 0;

sub.addEventListener("click", () => {
  limit = document.querySelector(".limit").value;
  fileInput.classList.add("show");
});

fileInput.addEventListener("change", function (event) {
  for (let i = 0; i < limit; i++) {
    if (event.target.files[i]) {
      path[i] = URL.createObjectURL(event.target.files[i]);
    }
  }
  img.src = path[0];
});

next.addEventListener("click", () => {
  let index = path.indexOf(img.src);
  if (index === path.length - 1) {
    index = 0;
    img.src = path[index];
  } else {
    img.src = path[index + 1];
  }
});

prev.addEventListener("click", () => {
  let index = path.indexOf(img.src);
  if (index === 0) {
    index = path.length - 1;
    img.src = path[index];
  } else {
    img.src = path[index - 1];
  }
});
