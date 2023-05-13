import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  ngOnInit() {
    this.importScript('../../../../assets/js/trang3-sidebar.js')
    this.importScript('../../../../assets/js/trang3-menu-ellipsis.js')
    this.importScript('../../../../assets/js/trang3-menu-new-mess.js')
    this.importScript('../../../../assets/js/trang3-mess.js')
    this.importScript('../../../../assets/js/trang3-modal.js')
    this.importScript('../../../../assets/js/trang3Delete.js')
    this.importScript('../../../../assets/js/trang3-tab.js')
  }

  importScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);
  }
}
