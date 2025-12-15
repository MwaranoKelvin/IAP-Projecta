document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const filter = document.getElementById("filterCriteria").value;
    const table = document.querySelector(".voter-data table tbody");
    const rows = table.getElementsByTagName("tr");

    input.addEventListener("input", function(){
        const query = input.value.toLowerCase();
        const criteria = filter.value;
    

    for (let i = 0; i < rows.length; i++) {
        let cellValue = "";

        switch(criteria) {
            case "name":
                cellValue = rows[i].cells[0].textContent.toLowerCase();
                break;
            case "id":
                cellValue = rows[i].cells[1].textContent.toLowerCase();
                break;
            case "email":
                cellValue = rows[i].cells[2].textContent.toLowerCase();
                break;
        }
   rows[i].style.display = cellValue.includes(query) ? "" :"none";
    }
    });
    filter.addEventListener("change", function(){
        input.dispatchEvent(new Event("input"));
    });
});
