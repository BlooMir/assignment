const userName = document.querySelector("#username")
const userMajor = document.querySelector("#major")
const tbody = document.querySelector("#tbody");
const applyBtn = document.querySelector("#apply");


applyBtn.addEventListener("click", (e) => {
    const line = document.createElement("tr");
    const nameT = document.createElement("td");
    const majorT = document.createElement("td");

    nameT.innerHTML = `${userName.value}`;
    majorT.innerHTML = `${userMajor.value}`;

    line.appendChild(nameT);
    line.appendChild(majorT);
    
    tbody.appendChild(line);

    e.preventDefault();
})
