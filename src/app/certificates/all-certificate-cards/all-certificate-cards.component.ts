import { Component, OnInit } from '@angular/core';
import {CertificateDescription} from "../_models/CertificateDescription";
import {MyCertificates} from "../_consts/MyCertificates";

@Component({
  selector: 'app-all-certificates',
  templateUrl: './all-certificate-cards.component.html',
  styleUrls: ['./all-certificate-cards.component.scss']
})
export class AllCertificateCardsComponent implements OnInit {
  certificates: CertificateDescription[] =[];

  constructor() { }

  ngOnInit(): void {
    this.certificates = MyCertificates;
  }

}
