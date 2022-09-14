const values = ["123", "345", "a;lfij", "43o8jti85h"];

let existing = JSON.parse(localStorage.getItem('bins'));

let data;

if (!existing) {
  data = values
} else {
  data = existing
}

localStorage.setItem('bins', JSON.stringify(data))

