import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-construction-profile',
  templateUrl: './construction-profile.component.html',
  styleUrls: ['./construction-profile.component.css']
})
export class ConstructionProfileComponent implements OnInit {

  selectedDiv: number = 0;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {

  }

  isSelected(profileId: number) {
    return this.selectedDiv === profileId;
  }

  tabProfileSelected(profileId: number) {
    const element = this.elementRef.nativeElement.querySelector('#profile' + profileId);
    this.selectedDiv = profileId;
    this.renderer.addClass(element, 'active');
  }

}
