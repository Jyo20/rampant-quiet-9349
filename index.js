let left = 1;
let right = 0;
function show() {
  for (let i = left; i < right; i++) {
    document.getElementById("cd" + i).style.display = "inline-block";
  }
}
function moveLeft() {
  document.getElementById("cd" + left).style.display = "none";
  left++;
  right++;
  for (let i = left; i < right; i++) {
    document.getElementById("cd" + i).style.display = "inline-block";
  }
}
