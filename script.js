// ==========================================
// STUDENT GRADING CALCULATOR - VERSION 1.1
// ==========================================


// Main Calculate Function
function calculateResult() {

    // Get student name
    let studentName =
        document.getElementById("studentName").value.trim();


    // Get marks
    let math =
        Number(document.getElementById("math").value);

    let english =
        Number(document.getElementById("english").value);

    let database =
        Number(document.getElementById("database").value);

    let programming =
        Number(document.getElementById("programming").value);


    // ==========================================
    // VALIDATION
    // ==========================================

    if (studentName === "") {

        alert("Please enter the student name.");

        return;
    }


    if (
        math < 0 || math > 100 ||
        english < 0 || english > 100 ||
        database < 0 || database > 100 ||
        programming < 0 || programming > 100
    ) {

        alert("Please enter marks between 0 and 100.");

        return;
    }


    // ==========================================
    // CALCULATE TOTAL
    // ==========================================

    let total =
        math +
        english +
        database +
        programming;


    // ==========================================
    // CALCULATE AVERAGE
    // ==========================================

    let average =
        total / 4;


    // ==========================================
    // CALCULATE GRADE
    // ==========================================

    let grade;


    if (average >= 80) {

        grade = "A";

    }
    else if (average >= 70) {

        grade = "B";

    }
    else if (average >= 60) {

        grade = "C";

    }
    else if (average >= 50) {

        grade = "D";

    }
    else {

        grade = "F";
    }


    // ==========================================
    // PASS / FAIL
    // ==========================================

    let status;


    if (average >= 50) {

        status = "PASS";

    }
    else {

        status = "FAIL";
    }


    // ==========================================
    // DISPLAY STUDENT INFORMATION
    // ==========================================

    document.getElementById("resultName").textContent =
        studentName;


    document.getElementById("resultMath").textContent =
        math;


    document.getElementById("resultEnglish").textContent =
        english;


    document.getElementById("resultDatabase").textContent =
        database;


    document.getElementById("resultProgramming").textContent =
        programming;


    // ==========================================
    // DISPLAY CALCULATED RESULTS
    // ==========================================

    document.getElementById("total").textContent =
        total;


    document.getElementById("average").textContent =
        average.toFixed(2) + "%";


    document.getElementById("grade").textContent =
        grade;


    document.getElementById("status").textContent =
        status;
}



// ==========================================
// RESET / CLEAR FUNCTION
// ==========================================

function resetForm() {


    // Clear student name
    document.getElementById("studentName").value = "";


    // Clear marks
    document.getElementById("math").value = "";

    document.getElementById("english").value = "";

    document.getElementById("database").value = "";

    document.getElementById("programming").value = "";


    // Clear displayed results
    document.getElementById("resultName").textContent = "-";

    document.getElementById("resultMath").textContent = "-";

    document.getElementById("resultEnglish").textContent = "-";

    document.getElementById("resultDatabase").textContent = "-";

    document.getElementById("resultProgramming").textContent = "-";


    // Clear calculated results
    document.getElementById("total").textContent = "-";

    document.getElementById("average").textContent = "-";

    document.getElementById("grade").textContent = "-";

    document.getElementById("status").textContent = "-";
}