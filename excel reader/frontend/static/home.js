async function datahandle() {
  await fetch("/pop")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const btn = document.querySelector(".btn");
      const table = document.querySelector(".table");
      btn.style.display = "none";
      table.style.visibility = "visible";
      let tbody = document.getElementById("tbody");
      data.forEach((Element) => {
        tbody.innerHTML += `<tr>
            <td colspan="2">${Element.parties}</td>
            <td>${Element.header}</td>
            <td>${Element.header2}</td>
            <td>${Element.header3}</td>
          </tr>`;
      });
    });
}
