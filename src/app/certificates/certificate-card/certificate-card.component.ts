import {Component, Input, OnInit} from '@angular/core';
import {CertificateDescription} from "../_models/CertificateDescription";

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.scss']
})
export class CertificateCardComponent implements OnInit {

  @Input() certificate: CertificateDescription;


  constructor() { }

  ngOnInit(): void {
  }

}
