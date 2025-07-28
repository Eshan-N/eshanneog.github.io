function fetchGradeData() {
    console.log("Fetching grade data...");
    let xhr = new XMLHttpRequest();
    let apiRoute = "/api/grades";

    xhr.onreadystatechange = function() {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status !== 200) {
                console.error(`Could not get grades. Status: ${xhr.status}`);
                return;
            }
            populateGradebook(JSON.parse(xhr.responseText));
        }
    };

    xhr.open("GET", apiRoute, true);
    xhr.send();
}
