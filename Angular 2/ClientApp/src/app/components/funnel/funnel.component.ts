import { IFunnel } from './funnel';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FunnelService } from './funnel.service';

@Component({
  selector: 'app-funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FunnelComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal, private funnelService: FunnelService) {
  }

  pageTitle: string = 'Digital Workflow Funnel';
  _listFilter: string;
  funnels: IFunnel[];
  filteredFunnels: IFunnel[];
  errorMessage: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredFunnels = this.listFilter ? this.performFilter(this.listFilter) : this.funnels;
  }
  
  ngOnInit(): void {
    this.funnelService.getFunnels().subscribe(
      funnels => {
        this.funnels = funnels;
        this.filteredFunnels = this.funnels;
      },
      error => this.errorMessage = <any>error);
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

  performFilter(filterBy: string): IFunnel[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.funnels.filter((funnel: IFunnel) => funnel.clientName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onStatusClicked(message: string): void {
    this.pageTitle = 'Digital Workflow Funnel: ' + message;
  }
}
