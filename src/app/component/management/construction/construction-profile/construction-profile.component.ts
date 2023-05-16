import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ConstructionService} from "../../../../service/construction.service";
import {ThongKeHoSo} from "../../../../dto/ThongKeHoSo";

@Component({
  selector: 'app-construction-profile',
  templateUrl: './construction-profile.component.html',
  styleUrls: ['./construction-profile.component.css']
})
export class ConstructionProfileComponent implements OnInit {
  selectedOption: string = '';
  isDataLoaded: boolean = false;
  selectedDiv?: number;
  tongSoLuongHoSo: string = '';
  thongKeHoSoList: ThongKeHoSo[] = [];
  tieuDeHoSo: string = '';

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private constructionService: ConstructionService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.constructionService.getAllThongKeHoSoCongTrinh('HANG_MUC').subscribe(
      data => {
        this.thongKeHoSoList = data.body.thongKeHoSoList;
        this.tongSoLuongHoSo = data.body.tongSoLuongHoSo;
        this.isDataLoaded = true;
        this.selectedOption = 'HANG_MUC';
        // @ts-ignore
        this.tabProfileSelected(Number(this.thongKeHoSoList.at(0).giaTriThongKe), this.thongKeHoSoList.at(0).tieuDeHoSo);
      }
    )
  }

  isSelected(profileId: number) {
    return this.selectedDiv === profileId;
  }

  tabProfileSelected(profileId: number, tieuDeHoSo: string) {
    this.tieuDeHoSo = tieuDeHoSo;
    const element = this.elementRef.nativeElement.querySelector('#profile' + profileId);
    this.selectedDiv = profileId;
    this.renderer.addClass(element, 'active');
  }

  onOptionChange(event: any) {
    this.constructionService.getAllThongKeHoSoCongTrinh(this.selectedOption).subscribe(
      data => {
        this.thongKeHoSoList = data.body.thongKeHoSoList;
        this.tongSoLuongHoSo = data.body.tongSoLuongHoSo;
        this.isDataLoaded = true;
        if (this.selectedOption === 'NAM_THANH_LAP') {
          const currentYear = new Date().getFullYear().toString();
          for (let i = 0; i < this.thongKeHoSoList.length; i++) {
            if (this.thongKeHoSoList.at(i)?.giaTriThongKe === currentYear) {
              // @ts-ignore
              this.tabProfileSelected(Number(this.thongKeHoSoList.at(i)?.giaTriThongKe), this.thongKeHoSoList.at(i).tieuDeHoSo);
            }
          }
        } else {
          // @ts-ignore
          this.tabProfileSelected(Number(this.thongKeHoSoList.at(0)?.giaTriThongKe), this.thongKeHoSoList.at(0).tieuDeHoSo);
        }
      }
    )
  }

  protected readonly Number = Number;
}
