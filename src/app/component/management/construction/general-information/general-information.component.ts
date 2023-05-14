import {Component, OnInit} from '@angular/core';
import {ConstructionService} from "../../../../service/construction.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css', '../../main/main.component.css']
})
export class GeneralInformationComponent implements OnInit{
  countAll: any;
  listCTAll: any;
  listCT: any;
  // @ts-ignore
  CongTrinhInfo: any;
  // @ts-ignore
  congTrinhSelectedMessage: string;
  ortherInfomation: any;
  images: any;

  constructor(private router: Router,
              private constructionService: ConstructionService,) {
  }
  ngOnInit(): void {
    this.constructionService.getAllCongTrinhCount().subscribe((response: any) => {
      this.countAll = response;
    })

    this.constructionService.getListCongTrinh('CONG').subscribe((response: any) => {
      this.listCTAll = response;
      this.listCT = this.listCTAll;
      this.congTrinhSelectedMessage = `Cống dưới đê (${this.countAll.congDuoiDe} công trình)`;
    })
    this.initModalTrang3();
  }

  changeCongTrinhType(type: string, message: string, count: number) {
    this.congTrinhSelectedMessage = `${message} (${count} công trình)`;

    this.constructionService.getListCongTrinh(type).subscribe((response: any) => {
      this.listCTAll = response;
      this.listCT = this.listCTAll;
    })
    let test = document.getElementById("tab-pane-id");
    // @ts-ignore
    test.style.display = "block";

    const tabs = document.querySelectorAll(".tab-item")
    const panes = document.querySelectorAll(".tab-panes")


    tabs.forEach((tab, index) => {
      if (tab.classList.contains(type)) {
        tab.classList.add("active")
      } else if (tab.classList.contains("active")) {
        tab.classList.remove("active")
      }
    });

    panes.forEach((pane, index) => {
      if (pane.classList.contains(type)) {
        pane.classList.add("active")
      } else if (pane.classList.contains("active")) {
        pane.classList.remove("active")
      }
    });

  }

  toCongTrinhInfo(maCT: any) {

  }

  iconDeleteCT(maCT: any) {

  }
  initModalTrang3() {
    const addNewBtn1 = document.getElementById('addNewBtn-1')!;
    const functionList1 = document.getElementById('functionList-1')!;
    const modal2 = document.getElementById('myModal-1')!;
    const modal3 = document.getElementById('myModal2')!;
    const modal10 = document.getElementById('myModal6')!;
    // Get the form and all input fields
    const form = document.querySelector("form")!;
    const inputFields = form.querySelectorAll("input, select")!;

    // Hide the function list initially
    functionList1.style.display = "none";
    // Show the function list when addNewBtn is clicked and hide the modal
    console.log('newBtn1 addEL 100');
    addNewBtn1.addEventListener('click', function () {
      console.log('newBtn1 them moi');
      functionList1.style.display = "block";
      modal2.style.display = "none";
      modal3.style.display = "none";
      modal10.style.display = "none";
    });

    functionList1.addEventListener('click', function (event) {
      const functionName = (event.target! as HTMLElement).getAttribute('data-function');
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

    // Get the error message elements
    const projectCodeHSError = document.getElementById("project-code-error-hs")!;//
    const projectNameHsError = document.getElementById("project-name-error-hs")!;//
    const projectLocationNameHsError = document.getElementById("project-location-name-error-hs")!;//
    const projectLocationHsError = document.getElementById("project-location-error-hs")!;//
    const projectDvlhsError = document.getElementById("project-dvlhs-error-hs")!;//

    const projectCodeError1 = document.getElementById("project-code-error-1")!;//
    const projectNameError1 = document.getElementById("project-name-error-1")!;//
    const projectLocationError1 = document.getElementById("project-location-error-1")!;//
    const projectHistoryError1 = document.getElementById("project-history-error-1")!;//
    // Function to clear all input fields in the form
    function clearFormInputs() {
      inputFields.forEach((field) => {
        (field as HTMLInputElement).value = "";
      });
    }
  }

  addFile() {

  }

  removeSelectedImage1() {

  }

  updateImageOptions1() {

  }

  createCongTrinh() {
    console.log(this.CongTrinhInfo)
  }
}
