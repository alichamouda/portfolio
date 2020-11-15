import {Component, Input, OnInit} from '@angular/core';
import {CornerPatternComponent} from "../corner-pattern/corner-pattern.component";

@Component({
  selector: 'app-abstract-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  entryComponents: [CornerPatternComponent],
})
export class BannerComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  color: string;
  @Input()
  hasCheckAllButton: boolean = true;
  @Input()
  checkAllLink: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
