import { IFunnel } from './funnel';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FunnelComponent implements OnInit {
  closeResult: string;

  constructor() { }
  pageTitle: string = '1040 Digital Funnel';
  funnels: IFunnel[] = [
    {
      "funnelId": 1,
      "clientName": "Boothe, Marie",
      "taxYear": 2017,
      "funnelStatus": 4,
      "funnelOpened": "18/08/2018",
      "signer": "P.Parter",
      "lastActivity": "23/08/2018",
      "percentComplete": "86%"
    },
    {
      "funnelId": 2,
      "clientName": "Conley, Kaylin",
      "taxYear": 2017,
      "funnelStatus": 3,
      "funnelOpened": "12/07/2018",
      "signer": "M.Manager",
      "lastActivity": "18/08/2018",
      "percentComplete": "92%"
    },
    {
      "funnelId": 3,
      "clientName": "Abbot, Thalia",
      "taxYear": 2017,
      "funnelStatus": 1,
      "funnelOpened": "26/06/2018",
      "signer": "P.Partner",
      "lastActivity": "20/08/2018",
      "percentComplete": "0%"
    },
    {
      "funnelId": 4,
      "clientName": "Davidson, Henry",
      "taxYear": 2017,
      "funnelStatus": 2,
      "funnelOpened": "10/05/2018",
      "signer": "P.Parter",
      "lastActivity": "23/07/2018",
      "percentComplete": "45%"
    },
    {
      "funnelId": 5,
      "clientName": "Cooper, Henry",
      "taxYear": 2017,
      "funnelStatus": 3,
      "funnelOpened": "16/06/2018",
      "signer": "M.Manager",
      "lastActivity": "06/08/2018",
      "percentComplete": "63%"
    },
    {
      "funnelId": 6,
      "clientName": "Baldwin, Walker",
      "taxYear": 2017,
      "funnelStatus": 5,
      "funnelOpened": "25/05/2018",
      "signer": "P.Partner",
      "lastActivity": "22/08/2018",
      "percentComplete": "100%"
    }];
  ngOnInit() {
    console.log('Component');
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
