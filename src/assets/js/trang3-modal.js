const addNewBtn = document.getElementById('addNewBtn');
const addNewBtn1 = document.getElementById('addNewBtn-1');
const addNewBtn2 = document.getElementById('addNewBtn-2');
const addNewBtn3 = document.getElementById('addNewBtn-3');
const addNewBtn4 = document.getElementById('addNewBtn-4');
const functionList = document.getElementById('functionList');
const functionList1 = document.getElementById('functionList-1');
const functionList2 = document.getElementById('functionList-2');
const functionList3 = document.getElementById('functionList-3');
const functionList4 = document.getElementById('functionList-4');
const modal = document.getElementById('myModal');
const modal1 = document.getElementById('myModal1');
const modal2 = document.getElementById('myModal-1');
const modal3 = document.getElementById('myModal2');
const modal4 = document.getElementById('myModal-2');
const modal5 = document.getElementById('myModal3');
const modal6 = document.getElementById('myModal-3');
const modal7 = document.getElementById('myModal4');
const modal8 = document.getElementById('myModal-4');
const modal9 = document.getElementById('myModal5');
const modal10 = document.getElementById('myModal6');
const modal11 = document.getElementById('myModal7');
const modal12 = document.getElementById('myModal8');
const modal13= document.getElementById('myModal9');
const modal14= document.getElementById('myModal10');
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const span1 = document.getElementsByClassName("close-1")[0];
const span2 = document.getElementsByClassName("close-2")[0];
const span3 = document.getElementsByClassName("close-3")[0];
const span4 = document.getElementsByClassName("close-4")[0];
const span5 = document.getElementsByClassName("close-5")[0];
const span6 = document.getElementsByClassName("close-6")[0];
const span7 = document.getElementsByClassName("close-7")[0];
const span8 = document.getElementsByClassName("close-8")[0];
const span9 = document.getElementsByClassName("close-9")[0];
const span10 = document.getElementsByClassName("close-10")[0];
const span11 = document.getElementsByClassName("close-11")[0];
const span12 = document.getElementsByClassName("close-12")[0];
const span13 = document.getElementsByClassName("close-13")[0];
const span14 = document.getElementsByClassName("close-14")[0];
// Get the buttons to save and cancel changes
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn1 = document.getElementById("saveBtn1");
const cancelBtn1 = document.getElementById("cancelBtn1");
const saveBtn2 = document.getElementById("saveBtn-1");
const cancelBtn2 = document.getElementById("cancelBtn-1");
const saveBtn3 = document.getElementById("saveBtn1-2");
const cancelBtn3 = document.getElementById("cancelBtn1-2");
const saveBtn4 = document.getElementById("saveBtn-2");
const cancelBtn4 = document.getElementById("cancelBtn-2");
const saveBtn5 = document.getElementById("saveBtn1-3");
const cancelBtn5 = document.getElementById("cancelBtn1-3");
const saveBtn6 = document.getElementById("saveBtn-3");
const cancelBtn6 = document.getElementById("cancelBtn-3");
const saveBtn7 = document.getElementById("saveBtn1-4");
const cancelBtn7 = document.getElementById("cancelBtn1-4");
const saveBtn8 = document.getElementById("saveBtn-4");
const cancelBtn8 = document.getElementById("cancelBtn-4");
const saveBtn9 = document.getElementById("saveBtn1-5");
const cancelBtn9 = document.getElementById("cancelBtn1-5");
const cancelBtnHs = document.getElementById("cancelBtn-hs");
const saveBtnHS = document.getElementById("saveBtn1-hs");
const cancelBtnHs1 = document.getElementById("cancelBtn-hs-1");
const saveBtnHS1 = document.getElementById("saveBtn1-hs-1");
const cancelBtnHs2 = document.getElementById("cancelBtn-hs-2");
const saveBtnHS2 = document.getElementById("saveBtn1-hs-2");
const cancelBtnHs3 = document.getElementById("cancelBtn-hs-3");
const saveBtnHS3 = document.getElementById("saveBtn1-hs-3");
const cancelBtnHs4 = document.getElementById("cancelBtn-hs-4");
const saveBtnHS4 = document.getElementById("saveBtn1-hs-4");
// Get the form and all input fields
const form = document.querySelector("form");
const inputFields = form.querySelectorAll("input, select");

// Hide the function list initially
functionList.style.display = "none";
functionList1.style.display = "none";
functionList2.style.display = "none";
functionList3.style.display = "none";
functionList4.style.display = "none";
// Show the function list when addNewBtn is clicked and hide the modal
addNewBtn.addEventListener('click', function () {
    functionList.style.display = "block";
    modal.style.display = "none";
    modal1.style.display = "none";
    modal11.style.display = "none";
});
addNewBtn1.addEventListener('click', function () {
    functionList1.style.display = "block";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal10.style.display = "none";
});
addNewBtn2.addEventListener('click', function () {
    functionList2.style.display = "block";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal12.style.display = "none";
});
addNewBtn3.addEventListener('click', function () {
    functionList3.style.display = "block";
    modal6.style.display = "none";
    modal7.style.display = "none";
    modal13.style.display = "none";
});
addNewBtn4.addEventListener('click', function () {
    functionList4.style.display = "block";
    modal8.style.display = "none";
    modal9.style.display = "none";
    modal14.style.display = "none";
});
// Hide the function list when any function is clicked, except for "thongTinChung", and show the modal
functionList.addEventListener('click', function (event) {
    const functionName = event.target.getAttribute('data-function');
    if (functionName === "thongTinChung") {
        functionList.style.display = "none";
        modal1.style.display = "none";
        modal.style.display = "block"
        modal11.style.display = "none";
    }
    if (functionName === "thongTinQuanLy") {
        modal11.style.display = "none";
        modal.style.display = 'none';
        functionList.style.display = "none";
        modal1.style.display = "block"
    }
    if (functionName === "hoSoCongTrinh") {
        modal.style.display = 'none';
        functionList.style.display = "none";
        modal1.style.display = "none"
        modal11.style.display = "block";
    }
});
functionList1.addEventListener('click', function (event) {
    const functionName = event.target.getAttribute('data-function');
    if (functionName === "thongTinChung") {
        functionList1.style.display = "none";
        modal3.style.display = "none";
        modal2.style.display = "block"
        modal10.style.display = "none";
    }
    if (functionName === "thongTinQuanLy") {
        modal2.style.display = 'none';
        functionList1.style.display = "none";
        modal3.style.display = "block"
        modal10.style.display = "none";
    }
    if (functionName === "hoSoCongTrinh") {
        modal2.style.display = 'none';
        functionList1.style.display = "none";
        modal3.style.display = "none"
        modal10.style.display = "block";
    }
});
functionList2.addEventListener('click', function (event) {
    const functionName = event.target.getAttribute('data-function');
    if (functionName === "thongTinChung") {
        functionList2.style.display = "none";
        modal5.style.display = "none";
        modal4.style.display = "block"
        modal12.style.display = "none";
    }
    if (functionName === "thongTinQuanLy") {
        modal4.style.display = 'none';
        functionList2.style.display = "none";
        modal5.style.display = "block"
        modal12.style.display = "none";
    }
    if (functionName === "hoSoCongTrinh") {
        modal4.style.display = 'none';
        functionList2.style.display = "none";
        modal5.style.display = "none"
        modal12.style.display = "block";
    }
});
functionList3.addEventListener('click', function (event) {
    const functionName = event.target.getAttribute('data-function');
    if (functionName === "thongTinChung") {
        functionList3.style.display = "none";
        modal7.style.display = "none";
        modal6.style.display = "block"
        modal13.style.display = "none";
    }
    if (functionName === "thongTinQuanLy") {
        modal6.style.display = 'none';
        functionList3.style.display = "none";
        modal7.style.display = "block"
        modal13.style.display = "none";
    }
    if (functionName === "hoSoCongTrinh") {
        modal6.style.display = 'none';
        functionList3.style.display = "none";
        modal7.style.display = "none"
        modal13.style.display = "block";
    }
});
functionList4.addEventListener('click', function (event) {
    const functionName = event.target.getAttribute('data-function');
    if (functionName === "thongTinChung") {
        functionList4.style.display = "none";
        modal9.style.display = "none";
        modal8.style.display = "block"
        modal14.style.display = "none";
    }
    if (functionName === "thongTinQuanLy") {
        modal8.style.display = 'none';
        functionList4.style.display = "none";
        modal9.style.display = "block"
        modal14.style.display = "none";
    }
    if (functionName === "hoSoCongTrinh") {
        modal8.style.display = 'none';
        functionList4.style.display = "none";
        modal9.style.display = "none"
        modal14.style.display = "block";
    }
});
// Get the error message elements
const projectCodeError = document.getElementById("project-code-error");
const projectNameError = document.getElementById("project-name-error");
const projectLocationError = document.getElementById("project-location-error");
const projectHistoryError = document.getElementById("project-history-error");
const projectCodeHSError = document.getElementById("project-code-error-hs");
const projectNameHsError = document.getElementById("project-name-error-hs");
const projectLocationNameHsError = document.getElementById("project-location-name-error-hs");
const projectLocationHsError = document.getElementById("project-location-error-hs");
const projectDvlhsError = document.getElementById("project-dvlhs-error-hs");

const projectCodeError1 = document.getElementById("project-code-error-1");
const projectNameError1 = document.getElementById("project-name-error-1");
const projectLocationError1 = document.getElementById("project-location-error-1");
const projectHistoryError1 = document.getElementById("project-history-error-1");
const projectCodeHSError1 = document.getElementById("project-code-error-hs-1");
const projectNameHsError1 = document.getElementById("project-name-error-hs-1");
const projectLocationNameHsError1 = document.getElementById("project-location-name-error-hs-1");
const projectLocationHsError1 = document.getElementById("project-location-error-hs-1");
const projectDvlhsError1 = document.getElementById("project-dvlhs-error-hs-1");

const projectCodeError2 = document.getElementById("project-code-error-2");
const projectNameError2 = document.getElementById("project-name-error-2");
const projectLocationError2 = document.getElementById("project-location-error-2");
const projectHistoryError2 = document.getElementById("project-history-error-2");
const projectCodeHSError2 = document.getElementById("project-code-error-hs-2");
const projectNameHsError2 = document.getElementById("project-name-error-hs-2");
const projectLocationNameHsError2 = document.getElementById("project-location-name-error-hs-2");
const projectLocationHsError2 = document.getElementById("project-location-error-hs-2");
const projectDvlhsError2 = document.getElementById("project-dvlhs-error-hs-2");

const projectCodeError3 = document.getElementById("project-code-error-3");
const projectNameError3 = document.getElementById("project-name-error-3");
const projectLocationError3 = document.getElementById("project-location-error-3");
const projectHistoryError3 = document.getElementById("project-history-error-3");
const projectCodeHSError3 = document.getElementById("project-code-error-hs-3");
const projectNameHsError3 = document.getElementById("project-name-error-hs-3");
const projectLocationNameHsError3 = document.getElementById("project-location-name-error-hs-3");
const projectLocationHsError3 = document.getElementById("project-location-error-hs-3");
const projectDvlhsError3 = document.getElementById("project-dvlhs-error-hs-3");

const projectCodeError4 = document.getElementById("project-code-error-4");
const projectNameError4 = document.getElementById("project-name-error-4");
const projectLocationError4 = document.getElementById("project-location-error-4");
const projectHistoryError4 = document.getElementById("project-history-error-4");
const projectCodeHSError4 = document.getElementById("project-code-error-hs-4");
const projectNameHsError4 = document.getElementById("project-name-error-hs-4");
const projectLocationNameHsError4 = document.getElementById("project-location-name-error-hs-4");
const projectLocationHsError4 = document.getElementById("project-location-error-hs-4");
const projectDvlhsError4 = document.getElementById("project-dvlhs-error-hs-4");
// Function to clear all input fields in the form
function clearFormInputs() {
    inputFields.forEach((field) => {
        field.value = "";
    });
}

// Function to validate the input fields
function validateFormInputs() {
    let isValid = true;
    const projectCodeValue = document.getElementById("project-code-num").value;

    if (projectCodeValue === "") {
        projectCodeError.textContent = "Chưa nhập mã công trình!";
        isValid = false;
    } else {
        projectCodeError.textContent = "";
    }

    const projectNameValue = document.getElementById("project-name").value;
    if (projectNameValue === "") {
        projectNameError.textContent = "Chưa điền tên công trình";
        isValid = false;
    } else {
        projectNameError.textContent = "";
    }

    const projectLocationNameValue = document.getElementById(
        "project-location-name"
    ).value;
    const projectLocationXValue = document.getElementById(
        "project-location-x"
    ).value;
    const projectLocationYValue = document.getElementById(
        "project-location-y"
    ).value;
    if (
        projectLocationNameValue === "" ||
        projectLocationXValue === "" ||
        projectLocationYValue === ""
    ) {
        projectLocationError.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
        isValid = false;
    } else {
        projectLocationError.textContent = "";
    }

    const projectHistoryValue = document.getElementById(
        "project-history"
    ).value;
    if (
        projectHistoryValue === ""
    ) {
        projectHistoryError.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
        isValid = false;
    } else {
        projectHistoryError.textContent = "";
    }
    const projectCodeHSErrorValue1 = document.getElementById("project-code-hs-1").value;
    if (projectCodeHSErrorValue1 === "") {
        projectCodeHSError1.textContent = "Chưa nhập mã hồ sơ";
        isValid = false;
    } else {
        projectCodeHSError1.textContent = "";
    }
    const projectNameHsErrorValue1 = document.getElementById("project-name-hs-1").value;
    if (projectNameHsErrorValue1 === "") {
        projectNameHsError1.textContent = "Chưa nhập tên hồ sơ công trình";
        isValid = false;
    } else {
        projectNameHsError1.textContent = "";
    }
    const projectLocationNameHsErrorValue1 = document.getElementById("project-location-name-hs-1").value;
    if (projectLocationNameHsErrorValue1 === "") {
        projectLocationNameHsError1.textContent = "Chưa điền địa điểm công trình";
        isValid = false;
    } else {
        projectLocationNameHsError1.textContent = "";
    }
    const projectLocationHsErrorValueX1 = document.getElementById("project-location-x-hs-1").value;
    const projectLocationHsErrorValueY1 = document.getElementById("project-location-y-hs-1").value;
    if (projectLocationHsErrorValueX1 === "" || projectLocationHsErrorValueY1 === "") {
        projectLocationHsError1.textContent = "Chưa nhập tọa độ";
        isValid = false;
    } else {
        projectLocationHsError1.textContent = "";
    }
    const projectDvlhsErrorValue1 = document.getElementById("project-dvlhs-hs-1").value;
    if (projectDvlhsErrorValue1 === "") {
        projectDvlhsError1.textContent =  "Chưa nhập đơn vị lập hồ sơ";
        isValid = false;
    } else {
        projectDvlhsError1.textContent =  "";
    }
    return isValid;
}
function validateFormInputs1() {
    let isValid = true;
    const projectCodeValue1 = document.getElementById("project-code-num-1").value;
    if (projectCodeValue1 === "") {
        projectCodeError1.textContent = "Chưa nhập mã công trình!";
        isValid = false;
    } else {
        projectCodeError1.textContent = "";
    }

    const projectNameValue1 = document.getElementById("project-name-1").value;
    if (projectNameValue1 === "") {
        projectNameError1.textContent = "Chưa điền tên công trình";
        isValid = false;
    } else {
        projectNameError1.textContent = "";
    }
    const projectLocationNameValue1 = document.getElementById(
        "project-location-name-1"
    ).value;
    const projectLocationXValue1 = document.getElementById(
        "project-location-x-1"
    ).value;
    const projectLocationYValue1 = document.getElementById(
        "project-location-y-1"
    ).value;

    if (
        projectLocationNameValue1 === "" ||
        projectLocationXValue1 === "" ||
        projectLocationYValue1 === ""
    ) {
        projectLocationError1.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
        isValid = false;
    } else {
        projectLocationError1.textContent = "";
    }

    const projectHistoryValue1 = document.getElementById(
        "project-history-1"
    ).value;

    if (
        projectHistoryValue1 === ""
    ) {
        projectHistoryError1.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
        isValid = false;
    } else {
        projectHistoryError1.textContent = "";
    }
    const projectCodeHSErrorValue = document.getElementById("project-code-hs").value;
    if (projectCodeHSErrorValue === "") {
        projectCodeHSError.textContent = "Chưa nhập mã hồ sơ";
        isValid = false;
    } else {
        projectCodeHSError.textContent = "";
    }
    const projectNameHsErrorValue = document.getElementById("project-name-hs").value;
    if (projectNameHsErrorValue === "") {
        projectNameHsError.textContent = "Chưa nhập tên hồ sơ công trình";
        isValid = false;
    } else {
        projectNameHsError.textContent = "";
    }
    const projectLocationNameHsErrorValue = document.getElementById("project-location-name-hs").value;
    if (projectLocationNameHsErrorValue === "") {
        projectLocationNameHsError.textContent = "Chưa điền địa điểm công trình";
        isValid = false;
    } else {
        projectLocationNameHsError.textContent = "";
    }
    const projectLocationHsErrorValueX = document.getElementById("project-location-x-hs").value;
    const projectLocationHsErrorValueY = document.getElementById("project-location-y-hs").value;
    if (projectLocationHsErrorValueX === "" || projectLocationHsErrorValueY === "") {
        projectLocationHsError.textContent = "Chưa nhập tọa độ";
        isValid = false;
    } else {
        projectLocationHsError.textContent = "";
    }
    const projectDvlhsErrorValue = document.getElementById("project-dvlhs-hs").value;
    if (projectDvlhsErrorValue === "") {
        projectDvlhsError.textContent =  "Chưa nhập đơn vị lập hồ sơ";
        isValid = false;
    } else {
        projectDvlhsError.textContent =  "";
    }
    return isValid;
}
function validateFormInputs2() {
    let isValid = true;
    const projectCodeValue2 = document.getElementById("project-code-num-2").value;
    if (projectCodeValue2 === "") {
        projectCodeError2.textContent = "Chưa nhập mã công trình!";
        isValid = false;
    } else {
        projectCodeError2.textContent = "";
    }

    const projectNameValue2 = document.getElementById("project-name-2").value;
    if (projectNameValue2 === "") {
        projectNameError2.textContent = "Chưa điền tên công trình";
        isValid = false;
    } else {
        projectNameError2.textContent = "";
    }
    const projectLocationNameValue2 = document.getElementById(
        "project-location-name-2"
    ).value;
    const projectLocationXValue2 = document.getElementById(
        "project-location-x-2"
    ).value;
    const projectLocationYValue2 = document.getElementById(
        "project-location-y-2"
    ).value;

    if (
        projectLocationNameValue2 === "" ||
        projectLocationXValue2 === "" ||
        projectLocationYValue2 === ""
    ) {
        projectLocationError2.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
        isValid = false;
    } else {
        projectLocationError2.textContent = "";
    }
    const projectHistoryValue2 = document.getElementById(
        "project-history-2"
    ).value;
    if (
        projectHistoryValue2 === ""
    ) {
        projectHistoryError2.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
        isValid = false;
    } else {
        projectHistoryError2.textContent = "";
    }
    const projectCodeHSErrorValue2 = document.getElementById("project-code-hs-2").value;
    if (projectCodeHSErrorValue2 === "") {
        projectCodeHSError2.textContent = "Chưa nhập mã hồ sơ";
        isValid = false;
    } else {
        projectCodeHSError2.textContent = "";
    }
    const projectNameHsErrorValue2 = document.getElementById("project-name-hs-2").value;
    if (projectNameHsErrorValue2 === "") {
        projectNameHsError2.textContent = "Chưa nhập tên hồ sơ công trình";
        isValid = false;
    } else {
        projectNameHsError2.textContent = "";
    }
    const projectLocationNameHsErrorValue2 = document.getElementById("project-location-name-hs-2").value;
    if (projectLocationNameHsErrorValue2 === "") {
        projectLocationNameHsError2.textContent = "Chưa điền địa điểm công trình";
        isValid = false;
    } else {
        projectLocationNameHsError2.textContent = "";
    }
    const projectLocationHsErrorValueX2 = document.getElementById("project-location-x-hs-2").value;
    const projectLocationHsErrorValueY2 = document.getElementById("project-location-y-hs-2").value;
    if (projectLocationHsErrorValueX2 === "" || projectLocationHsErrorValueY2 === "") {
        projectLocationHsError2.textContent = "Chưa nhập tọa độ";
        isValid = false;
    } else {
        projectLocationHsError2.textContent = "";
    }
    const projectDvlhsErrorValue2 = document.getElementById("project-dvlhs-hs-2").value;
    if (projectDvlhsErrorValue2 === "") {
        projectDvlhsError2.textContent =  "Chưa nhập đơn vị lập hồ sơ";
        isValid = false;
    } else {
        projectDvlhsError2.textContent =  "";
    }
    return isValid;
}
function validateFormInputs3() {
    let isValid = true;
    const projectCodeValue3 = document.getElementById("project-code-num-3").value;
    if (projectCodeValue3 === "") {
        projectCodeError3.textContent = "Chưa nhập mã công trình!";
        isValid = false;
    } else {
        projectCodeError3.textContent = "";
    }

    const projectNameValue3 = document.getElementById("project-name-3").value;
    if (projectNameValue3 === "") {
        projectNameError3.textContent = "Chưa điền tên công trình";
        isValid = false;
    } else {
        projectNameError3.textContent = "";
    }
    const projectLocationNameValue3 = document.getElementById(
        "project-location-name-3"
    ).value;
    const projectLocationXValue3 = document.getElementById(
        "project-location-x-3"
    ).value;
    const projectLocationYValue3 = document.getElementById(
        "project-location-y-3"
    ).value;

    if (
        projectLocationNameValue3 === "" ||
        projectLocationXValue3 === "" ||
        projectLocationYValue3 === ""
    ) {
        projectLocationError3.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
        isValid = false;
    } else {
        projectLocationError3.textContent = "";
    }
    const projectHistoryValue3 = document.getElementById(
        "project-history-3"
    ).value;
    if (
        projectHistoryValue3 === ""
    ) {
        projectHistoryError3.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
        isValid = false;
    } else {
        projectHistoryError3.textContent = "";
    }
    const projectCodeHSErrorValue3 = document.getElementById("project-code-hs-3").value;
    if (projectCodeHSErrorValue3 === "") {
        projectCodeHSError3.textContent = "Chưa nhập mã hồ sơ";
        isValid = false;
    } else {
        projectCodeHSError3.textContent = "";
    }
    const projectNameHsErrorValue3 = document.getElementById("project-name-hs-3").value;
    if (projectNameHsErrorValue3 === "") {
        projectNameHsError3.textContent = "Chưa nhập tên hồ sơ công trình";
        isValid = false;
    } else {
        projectNameHsError3.textContent = "";
    }
    const projectLocationNameHsErrorValue3 = document.getElementById("project-location-name-hs-3").value;
    if (projectLocationNameHsErrorValue3 === "") {
        projectLocationNameHsError3.textContent = "Chưa điền địa điểm công trình";
        isValid = false;
    } else {
        projectLocationNameHsError3.textContent = "";
    }
    const projectLocationHsErrorValueX3 = document.getElementById("project-location-x-hs-3").value;
    const projectLocationHsErrorValueY3 = document.getElementById("project-location-y-hs-3").value;
    if (projectLocationHsErrorValueX3 === "" || projectLocationHsErrorValueY3 === "") {
        projectLocationHsError3.textContent = "Chưa nhập tọa độ";
        isValid = false;
    } else {
        projectLocationHsError3.textContent = "";
    }
    const projectDvlhsErrorValue3 = document.getElementById("project-dvlhs-hs-3").value;
    if (projectDvlhsErrorValue3 === "") {
        projectDvlhsError3.textContent =  "Chưa nhập đơn vị lập hồ sơ";
        isValid = false;
    } else {
        projectDvlhsError3.textContent =  "";
    }
    return isValid;
}
function validateFormInputs4() {
    let isValid = true;
    const projectCodeValue4 = document.getElementById("project-code-num-4").value;
    if (projectCodeValue4 === "") {
        projectCodeError4.textContent = "Chưa nhập mã công trình!";
        isValid = false;
    } else {
        projectCodeError4.textContent = "";
    }

    const projectNameValue4 = document.getElementById("project-name-4").value;
    if (projectNameValue4 === "") {
        projectNameError4.textContent = "Chưa điền tên công trình";
        isValid = false;
    } else {
        projectNameError4.textContent = "";
    }
    const projectLocationNameValue4 = document.getElementById(
        "project-location-name-4"
    ).value;
    const projectLocationXValue4 = document.getElementById(
        "project-location-x-4"
    ).value;
    const projectLocationYValue4 = document.getElementById(
        "project-location-y-4"
    ).value;

    if (
        projectLocationNameValue4 === "" ||
        projectLocationXValue4 === "" ||
        projectLocationYValue4 === ""
    ) {
        projectLocationError4.textContent = "Chưa nhập vị trí hoặc địa điểm hoặc tọa độ";
        isValid = false;
    } else {
        projectLocationError4.textContent = "";
    }
    const projectHistoryValue4 = document.getElementById(
        "project-history-4"
    ).value;
    if (
        projectHistoryValue4 === ""
    ) {
        projectHistoryError4.textContent = "Chưa nhập thông tin lịch sử xây dựng công trình";
        isValid = false;
    } else {
        projectHistoryError4.textContent = "";
    }
    const projectCodeHSErrorValue4 = document.getElementById("project-code-hs-4").value;
    if (projectCodeHSErrorValue4 === "") {
        projectCodeHSError4.textContent = "Chưa nhập mã hồ sơ";
        isValid = false;
    } else {
        projectCodeHSError4.textContent = "";
    }
    const projectNameHsErrorValue4 = document.getElementById("project-name-hs-4").value;
    if (projectNameHsErrorValue4 === "") {
        projectNameHsError4.textContent = "Chưa nhập tên hồ sơ công trình";
        isValid = false;
    } else {
        projectNameHsError4.textContent = "";
    }
    const projectLocationNameHsErrorValue4 = document.getElementById("project-location-name-hs-4").value;
    if (projectLocationNameHsErrorValue4 === "") {
        projectLocationNameHsError4.textContent = "Chưa điền địa điểm công trình";
        isValid = false;
    } else {
        projectLocationNameHsError4.textContent = "";
    }
    const projectLocationHsErrorValueX4 = document.getElementById("project-location-x-hs-4").value;
    const projectLocationHsErrorValueY4 = document.getElementById("project-location-y-hs-4").value;
    if (projectLocationHsErrorValueX4 === "" || projectLocationHsErrorValueY4 === "") {
        projectLocationHsError4.textContent = "Chưa nhập tọa độ";
        isValid = false;
    } else {
        projectLocationHsError4.textContent = "";
    }
    const projectDvlhsErrorValue4 = document.getElementById("project-dvlhs-hs-4").value;
    if (projectDvlhsErrorValue4 === "") {
        projectDvlhsError4.textContent =  "Chưa nhập đơn vị lập hồ sơ";
        isValid = false;
    } else {
        projectDvlhsError4.textContent =  "";
    }
    return isValid;
}
// Function to save the form data
function saveFormData() {
    if (validateFormInputs()) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Do something with the form data, e.g. send it to the server
        console.log(data);
        closeModal();
        clearFormInputs();
    }
}
function saveFormData1() {
    if (validateFormInputs1()) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Do something with the form data, e.g. send it to the server
        console.log(data);
        closeModal1();
        clearFormInputs();
    }
}

function saveFormData2() {
    if (validateFormInputs2()) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Do something with the form data, e.g. send it to the server
        console.log(data);
        closeModal2();
        clearFormInputs();
    }
}

function saveFormData3() {
    if (validateFormInputs3()) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Do something with the form data, e.g. send it to the server
        console.log(data);
        closeModal3();
        clearFormInputs();
    }
}

function saveFormData4() {
    if (validateFormInputs4()) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Do something with the form data, e.g. send it to the server
        console.log(data);
        closeModal4();
        clearFormInputs();
    }
}
// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    modal1.style.display = "none";
    modal11.style.display = "none";
}
function closeModal1() {
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal10.style.display = "none";
}
function closeModal2() {
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal12.style.display = "none";
}
function closeModal3() {
    modal6.style.display = "none";
    modal7.style.display = "none";
    modal13.style.display = "none";
}
function closeModal4() {
    modal8.style.display = "none";
    modal9.style.display = "none";
    modal14.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    closeModal1();
};
span1.onclick = function () {
    closeModal1();
};
span10.onclick = function () {
    closeModal1();
};
span2.onclick = function () {
    closeModal();
};
span3.onclick = function () {
    closeModal();
};
span11.onclick = function () {
    closeModal();
};
span4.onclick = function () {
    closeModal2();
};
span5.onclick = function () {
    closeModal2();
};
span12.onclick = function () {
    closeModal2();
};
span6.onclick = function () {
    closeModal3();
};
span7.onclick = function () {
    closeModal3();
};
span13.onclick = function () {
    closeModal3();
};
span8.onclick = function () {
    closeModal4();
};
span9.onclick = function () {
    closeModal4();
};
span14.onclick = function () {
    closeModal4();
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
    if (event.target === modal1) {
        closeModal();
    }
    if (event.target === modal11) {
        closeModal();
    }
    if (event.target === modal2) {
        closeModal1();
    }
    if (event.target === modal3) {
        closeModal1();
    }
    if (event.target === modal10) {
        closeModal1();
    }
    if (event.target === modal4) {
        closeModal2();
    }
    if (event.target === modal5) {
        closeModal2();
    }
    if (event.target === modal12) {
        closeModal2();
    }
    if (event.target === modal6) {
        closeModal3();
    }
    if (event.target === modal7) {
        closeModal3();
    }
    if (event.target === modal13) {
        closeModal3();
    }
    if (event.target === modal8) {
        closeModal4();
    }
    if (event.target === modal9) {
        closeModal4();
    }
    if (event.target === modal14) {
        closeModal4();
    }
    if (event.target !== functionList1 && event.target !== addNewBtn1) {
        functionList1.style.display = "none";
    }
    if (event.target !== functionList && event.target !== addNewBtn) {
        functionList.style.display = "none";
    }
    if (event.target !== functionList2 && event.target !== addNewBtn2) {
        functionList2.style.display = "none";
    }
    if (event.target !== functionList3 && event.target !== addNewBtn3) {
        functionList3.style.display = "none";
    }
    if (event.target !== functionList4 && event.target !== addNewBtn4) {
        functionList4.style.display = "none";
    }
};

// When the user clicks the save button, save the form data
saveBtn.onclick = function () {
    saveFormData();
};
saveBtn1.onclick = function () {
    saveFormData();
}
saveBtnHS1.onclick = function () {
    saveFormData();
}
saveBtn2.onclick = function () {
    saveFormData1();
}
saveBtn3.onclick = function () {
    saveFormData1();
}
saveBtnHS.onclick = function () {
    saveFormData1();
}
saveBtn4.onclick = function () {
    saveFormData2();
}
saveBtn5.onclick = function () {
    saveFormData2();
}
saveBtnHS2.onclick = function () {
    saveFormData2();
}
saveBtn6.onclick = function () {
    saveFormData3();
}
saveBtn7.onclick = function () {
    saveFormData3();
}
saveBtnHS3.onclick = function () {
    saveFormData3();
}
saveBtn8.onclick = function () {
    saveFormData4();
}
saveBtn9.onclick = function () {
    saveFormData4();
}
saveBtnHS4.onclick = function () {
    saveFormData4();
}
// When the user clicks the cancel button, close the modal
cancelBtn.onclick = function () {
    closeModal();
};
cancelBtn1.onclick = function () {
    closeModal();
}
cancelBtnHs1.onclick = function () {
    closeModal();
}
cancelBtn2.onclick = function () {
    closeModal1();
}
cancelBtn3.onclick = function () {
    closeModal1();
}
cancelBtnHs.onclick = function () {
    closeModal1();
}
cancelBtn4.onclick = function () {
    closeModal2();
}
cancelBtn5.onclick = function () {
    closeModal2();
}
cancelBtnHs2.onclick = function () {
    closeModal2();
}
cancelBtn6.onclick = function () {
    closeModal3();
}
cancelBtn7.onclick = function () {
    closeModal3();
}
cancelBtnHs3.onclick = function () {
    closeModal3();
}
cancelBtn8.onclick = function () {
    closeModal4();
}
cancelBtn9.onclick = function () {
    closeModal4();
}
cancelBtnHs4.onclick = function () {
    closeModal4();
}

// Hiển thị thẻ input-link mặc định nếu lựa chọn là "link"
const infoInput = document.querySelectorAll('.input-link');
infoInput.forEach(function (input) {
    input.style.display = "block";
    const infoType =  document.querySelectorAll('.infoType');
    infoType.forEach(function (inf) {
        inf.addEventListener("change", function () {
            const infoType = this.value;
            const infoFiles = document.querySelectorAll('.input-file');
            infoFiles.forEach(function (infoFile) {
                if (infoType === "link") {
                    input.style.display = "block";
                    infoFile.style.display = "none";
                } else if (infoType === "file") {
                    input.style.display = "none";
                    infoFile.style.display = "block";
                }
            });
            })
    });

})
function removeSelectedImage() {
    var select = document.getElementById('imageFiles');
    var selected = select.selectedIndex;
    if (selected >= 0) {
        select.remove(selected);
    }
}
function updateImageOptions() {
    var input = document.getElementById('imageInput');
    var select = document.getElementById('imageFiles');
    select.innerHTML = '';

    for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
    }
}
function removeSelectedImage1() {
    var select = document.getElementById('imageFiles-1');
    var selected = select.selectedIndex;
    if (selected >= 0) {
        select.remove(selected);
    }
}
function updateImageOptions1() {
    var input = document.getElementById('imageInput-1');
    var select = document.getElementById('imageFiles-1');
    select.innerHTML = '';

    for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
    }
}
function removeSelectedImage2() {
    var select = document.getElementById('imageFiles-2');
    var selected = select.selectedIndex;
    if (selected >= 0) {
        select.remove(selected);
    }
}
function updateImageOptions2() {
    var input = document.getElementById('imageInput-2');
    var select = document.getElementById('imageFiles-2');
    select.innerHTML = '';

    for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
    }
}
function removeSelectedImage3() {
    var select = document.getElementById('imageFiles-3');
    var selected = select.selectedIndex;
    if (selected >= 0) {
        select.remove(selected);
    }
}
function updateImageOptions3() {
    var input = document.getElementById('imageInput-3');
    var select = document.getElementById('imageFiles-3');
    select.innerHTML = '';

    for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
    }
}
function removeSelectedImage4() {
    var select = document.getElementById('imageFiles-4');
    var selected = select.selectedIndex;
    if (selected >= 0) {
        select.remove(selected);
    }
}
function updateImageOptions4() {
    var input = document.getElementById('imageInput-4');
    var select = document.getElementById('imageFiles-4');
    select.innerHTML = '';

    for (var i = 0; i < input.files.length; i++) {
        var option = document.createElement('option');
        option.value = input.files[i].name;
        option.text = input.files[i].name;
        select.add(option);
    }
}