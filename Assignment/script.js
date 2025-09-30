let h1 = document.querySelector("h1");
  let text = h1.innerText;
  let colored = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      colored += " "; // keep spaces as they are
    } else {
      let color = i % 2 === 0 ? "white" : "crimson";
      colored += `<span style="color:${color}">${text[i]}</span>`;
    }
  }

  h1.innerHTML = colored;