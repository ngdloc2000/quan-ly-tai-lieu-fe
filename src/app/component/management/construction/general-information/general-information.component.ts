import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ConstructionService} from "../../../../service/construction.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit{
  countAll: any;
  listCTAll: any;
  listCT: any;
  // @ts-ignore
  infoForm: any = {};
  // @ts-ignore
  congTrinhSelectedMessage: string;
  ortherInfomation: any;
  itemCT: any;

  images: File[] = [];
  files?: FileList;

  constructor(private router: Router,
              private constructionService: ConstructionService,
              private renderer: Renderer2,
              private elementRef: ElementRef
              ) {
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
    this.initRightBarTrang3();
  }

  changeCongTrinhType(type: string, message: string, count: number) {
    this.congTrinhSelectedMessage = `${message} (${count} công trình)`;

    this.constructionService.getListCongTrinh(type).subscribe((response: any) => {
      this.listCTAll = response;
      this.listCT = this.listCTAll;
    })
    let tab_pane_id_cos = document.getElementById("tab-pane-id");
    // @ts-ignore
    tab_pane_id_cos.style.display = "block";

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
    this.itemCT = maCT;
    const modal = document.getElementById('modalDelete-1');

    // Sử dụng API Bootstrap để mở modal
    // @ts-ignore
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
  }
  initModalTrang3() {
    const addNewBtn1 = document.getElementById('addNewBtn-1')!;
    const functionList1 = document.getElementById('functionList-1')!;
    // Get the form and all input fields
    const form = document.querySelector("form")!;
    const inputFields = form.querySelectorAll("input, select")!;

    // Hide the function list initially
    functionList1.style.display = "none";
    // Show the function list when addNewBtn is clicked and hide the modal
    addNewBtn1.addEventListener('click', function () {
      console.log('newBtn1 them moi');
      functionList1.style.display = "block";
    });

    functionList1.addEventListener('click', function (event) {
      const functionName = (event.target! as HTMLElement).getAttribute('data-function');
      functionList1.style.display = "none";
    });

    // Function to clear all input fields in the form
    function clearFormInputs() {
      inputFields.forEach((field) => {
        (field as HTMLInputElement).value = "";
      });
    }
  }


  initRightBarTrang3() {
    document.addEventListener('DOMContentLoaded', function () {
      var ellipsisMenus = document.querySelectorAll('.m-t-3');

      ellipsisMenus.forEach(function (ellipsisMenu) {
        var ellipsisBtn = ellipsisMenu.querySelector('.ellipsis-btn')!;
        var menu = ellipsisMenu.querySelector('.menu-ellipsis1')! as HTMLElement;
        var menuItems = ellipsisMenu.querySelectorAll('.menu-item-ell')!;

        ellipsisBtn.addEventListener('click', function () {
          menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });

        menuItems.forEach(function (menuItem) {
          menuItem.addEventListener('click', function () {
            menu.style.display = 'none';
            // Thực hiện chức năng tương ứng với từng lựa chọn ở đây
          });
        });
      });

      document.addEventListener('click', function (event) {
        var openMenu = document.querySelector('.menu[style="display: block;"]') as HTMLElement;
        if (openMenu && !(event.target as HTMLElement).closest('.ellipsis-menu')) {
          openMenu.style.display = 'none';
        }
      });
    });

    /*---------------------------------------------Ellipsis-nav----------------------------------------------------------*/
    document.addEventListener('DOMContentLoaded', function () {
      var ellipsisMenusNav = document.querySelectorAll('.side-menu')!;

      ellipsisMenusNav.forEach(function (ellipsisMenu) {
        var ellipsisBtnNav = ellipsisMenu.querySelector('.ellipsis-btn-nav')!;
        var menu = ellipsisMenu.querySelector('.menu-ellipsis1-nav') as HTMLElement;
        var menuItems = ellipsisMenu.querySelectorAll('.menu-item-ell-nav')!;

        ellipsisBtnNav.addEventListener('click', function () {
          menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });

        menuItems.forEach(function (menuItem) {
          menuItem.addEventListener('click', function () {
            menu.style.display = 'none';
            // Thực hiện chức năng tương ứng với từng lựa chọn ở đây
          });
        });
      });

      document.addEventListener('click', function (event) {
        var openMenu = document.querySelector('.menu[style="display: block;"]') as HTMLElement;
        if (openMenu && !(event.target as HTMLElement).closest('.ellipsis-menu')) {
          openMenu.style.display = 'none';
        }
      });
    });
  }

  addFile() {
    var input = document.getElementById('input-file')! as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.files = input.files;
    }
  }

  removeSelectedImage1() {
    var select = document.getElementById('imageFiles-1')! as HTMLSelectElement;
    var selected = select.selectedIndex;
    if (selected >= 0) {
      this.images.splice(selected, 1);
    }
  }

  updateImageOptions1() {
    var input = document.getElementById('imageInput-1')! as HTMLInputElement;

    if (input.files) {
      for (var i = 0; i < input.files.length; i++) {
        this.images.push(input.files[i])
      }
    }
  }




  createCongTrinh() {
    console.log(this.files);
    console.log(this.images)
    console.log(this.infoForm)

    const formData = new FormData();
    formData.set("viTri", this.infoForm.viTri);
    formData.append("name", this.infoForm.name);
    formData.append("type", this.infoForm.type);
    formData.append("quyMo", this.infoForm.quyMo);
    formData.append("thietBi", this.infoForm.thietBi);
    formData.append("thongTinKhac", this.infoForm.thongTinKhac);
    formData.append("soThuTu", this.infoForm.soThuTu);

    if(this.infoForm.infoTypeSelect == "Link"){
      formData.append("link", this.infoForm.link);
    }else {
      if (this.files && this.files.length > 0) {
        for (let i = 0; i < this.files.length; i++) {
          formData.append("files", this.files.item(i)!, this.files[i].name);
        }
      }
    }
    if (this.images) {
      for (let i = 0; i < this.images.length; i++) {
        formData.append("images", this.images[i], this.images[i].name);
      }
    }

    const aemails = formData.getAll("images");
    console.log(aemails);

    const filess = formData.getAll("files");
    console.log(filess);

    this.constructionService.createCongTrinh(formData).subscribe((response: any) => {
      console.log(response);
      location.reload();
    });

  }

  openModal() {
    // Lấy modal theo id
    const modal = document.getElementById('myModal-1');

    // Sử dụng API Bootstrap để mở modal
    // @ts-ignore
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
  }

  closeModal(event: any) {
    console.log(event);
    if(event.id == "cancelBtn-1"){
      const element = this.elementRef.nativeElement.querySelector('#myModal-1');
      const element1 = document.querySelector('.modal-backdrop');
      // const modal = document.getElementById('myModal-1');
      this.renderer.setStyle(element, 'display', 'none');
      this.renderer.removeClass(element1, 'modal-backdrop');
    }
    else if(event.id == "closeBtn-delete-1"){
      const element = this.elementRef.nativeElement.querySelector('#modalDelete-1');
      const element1 = document.querySelector('.modal-backdrop');
      this.renderer.setStyle(element, 'display', 'none');
      this.renderer.removeClass(element1, 'modal-backdrop');
    }
  }

  acceptDeleteCT() {
    this.constructionService.deleteCongTrinh(this.itemCT).subscribe((response: any) => {
      console.log(response);
      location.reload();
    });
  }
}
