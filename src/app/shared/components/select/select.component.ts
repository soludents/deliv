import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent  {

  @Input() options: string[];

  @Output() selectChange = new EventEmitter<string>();

  onSelectChange(event) {
    this.selectChange.emit(event);
  }
}
