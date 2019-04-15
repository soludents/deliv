import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() title: string;
  @Input() icon: string;
  @Input() floatRight: boolean;
  @Input() disabled: boolean;

  @Output() click = new EventEmitter<boolean>();

  onButtonClick(event) {
    this.click.emit(event);
  }
}
