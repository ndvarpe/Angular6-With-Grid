import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
  templateUrl: './status.component.html',
  selector: 'pm-circles',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnChanges {
  @Input() status: number;
  statusWidth: number;
  @Output() statusClicked: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(): void {
    this.statusWidth = (this.status / 5) * 70;
  }

  onClick(): void {
    this.statusClicked.emit(`The status of the funnel is at step ${this.status}`);
  }
}
