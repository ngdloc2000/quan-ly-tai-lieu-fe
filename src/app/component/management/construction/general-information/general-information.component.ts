import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ConstructionService} from "../../../../service/construction.service";
import {Router} from "@angular/router";
import * as $ from 'jquery';


@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {
  countAll: any;
  listCTAll: any;
  listCT: any;
  listCTLienQuan: any;

  infoForm: any = {
    infoTypeSelect: 'link',
  };
  congTrinhSelectedMessage?: string;
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

    this.constructionService.getAllCongTrinh().subscribe((response: any) => {
      this.listCTLienQuan = response;
    })

    this.initModalTrang3();
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
    // @ts-ignore
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
  }

  initModalTrang3() {
    const addNewBtn1 = document.getElementById('addNewBtn-1')!;
    const functionList1 = document.getElementById('functionList-1')!;

    const form = document.querySelector("form")!;
    const inputFields = form.querySelectorAll("input, select")!;

    functionList1.style.display = "none";
    addNewBtn1.addEventListener('click', function () {
      functionList1.style.display = "block";
    });

    functionList1.addEventListener('click', function (event) {
      const functionName = (event.target! as HTMLElement).getAttribute('data-function');
      functionList1.style.display = "none";
    });

    function clearFormInputs() {
      inputFields.forEach((field) => {
        (field as HTMLInputElement).value = "";
      });
    }
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

  openModal(target: any) {
    this.infoForm.infoTypeSelect = 'file';
    if (target == 1) {
      const modal = document.getElementById('myModal-1');
      // @ts-ignore
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    } else if (target == 2) {
      const modal = document.getElementById('myModal-2');
      // @ts-ignore
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  closeModal(event: any, f: any) {
    console.log(event);
    console.log(f)
    if (event.id == "cancelBtn-1") {
      const element = this.elementRef.nativeElement.querySelector('#myModal-1');
      const element1 = document.querySelector('.modal-backdrop');
      this.renderer.setStyle(element, 'display', 'none');
      this.renderer.removeClass(element1, 'modal-backdrop');
      f.reset();
    } else if (event.id == "closeBtn-delete-1") {
      const element = this.elementRef.nativeElement.querySelector('#modalDelete-1');
      const element1 = document.querySelector('.modal-backdrop');
      this.renderer.setStyle(element, 'display', 'none');
      this.renderer.removeClass(element1, 'modal-backdrop');
    } else if (event.id == "cancelBtn-2") {
      const element = this.elementRef.nativeElement.querySelector('#myModal-2');
      const element1 = document.querySelector('.modal-backdrop');
      this.renderer.setStyle(element, 'display', 'none');
      this.renderer.removeClass(element1, 'modal-backdrop');
      f.reset();
    }
  }

  acceptDeleteCT() {
    this.constructionService.deleteCongTrinh(this.itemCT).subscribe((response: any) => {
      console.log(response);
      location.reload();
    });
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

    if (this.infoForm.infoTypeSelect == "link") {
      formData.append("link", this.infoForm.link);
    } else {
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

    this.constructionService.createCongTrinh(formData).subscribe((response: any) => {
      console.log(response);
      location.reload();
    });

  }

  updateCongTrinh() {
    console.log(this.infoForm)
    const formData = new FormData();
    formData.append("maCT", this.infoForm.maCT);
    formData.append("quanLyTaiSanType", this.infoForm.quanLyTaiSanType);
    formData.append("trangThaiCongTrinh", this.infoForm.trangThaiCongTrinh);
    formData.append("viPhamLanChiem", this.infoForm.viPhamLanChiem);
    formData.append("lichSuCT", this.infoForm.lichSuCT);

    this.constructionService.updateThongTinQuanLyCongTrinh(formData).subscribe((response: any) => {
      console.log(response);
      location.reload();
    });
  }

  onCTSelected(maCT: string) {
    const infoFormSelected = this.listCTLienQuan.find((ct: any) => ct.maCT == maCT);
    this.infoForm.maCT = infoFormSelected.maCT;
    this.infoForm.quanLyTaiSanType = infoFormSelected.quanLyTaiSanType;
    this.infoForm.trangThaiCongTrinh = infoFormSelected.trangThaiCongTrinh;
    this.infoForm.lichSuCT = infoFormSelected.lichSuCT;
    this.infoForm.viPhamLanChiem = 'Đang cập nhật';
    console.log(this.infoForm);
  }

  searchCongTrinhName(event: any) {
    console.log(event.value)
    if (event.value.length > 0) {
      this.listCT = this.listCTAll.filter((ct: any) => ct.name.toLocaleLowerCase().includes(event.value.toLocaleLowerCase()));
    } else {
      this.listCT = this.listCTAll;
    }
  }
}
