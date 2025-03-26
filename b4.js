let employees = [
    { name: "Nguyễn Văn A", role: "Developer" },
    { name: "Trần Thị B", role: "Designer" },
    { name: "Phạm Văn C", role: "Project Manager" }
];
let currentPage = 1;
let itemsPerPage = 2;
function addEmployee() {
    let name = document.getElementById("nameInput").value;
    let role = document.getElementById("roleInput").value;
    if (!name || !role) {
        alert("Vui lòng nhập đủ thông tin!");
        return;
    }
    employees.push({ name, role });
    document.getElementById("nameInput").value = "";
    document.getElementById("roleInput").value = "";
    updateTable();
}
function updateTable() {
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let paginatedItems = employees.slice(start, end);
    let table = document.getElementById("employeeTable");
    table.innerHTML = "";
    paginatedItems.forEach((employee, index) => {
        let row = `<tr>
            <td>${start + index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.role}</td>
        </tr>`;
        table.innerHTML += row;
    });
    updatePagination();
}
function updatePagination() {
    let totalPages = Math.ceil(employees.length / itemsPerPage);
    let pageNumbers = document.getElementById("pageNumbers");
    pageNumbers.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement("button");
        btn.innerText = i;
        btn.classList.add(i === currentPage ? "active" : "");
        btn.onclick = function () {
            currentPage = i;
            updateTable();
        };
        pageNumbers.appendChild(btn);
    }
}
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updateTable();
    }
}
function nextPage() {
    let totalPages = Math.ceil(employees.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        updateTable();
    }
}
updateTable();