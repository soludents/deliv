import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-store-item-detail',
  templateUrl: './store-item-detail.component.html',
  styleUrls: ['./store-item-detail.component.scss']
})
export class StoreItemDetailComponent {

  @Input() name: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() price: number;

  @Output() save = new EventEmitter<any>();

  onSave(item) {
    this.save.emit(item);
  }
}
