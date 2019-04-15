import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() limit: number;
  @Input() currentPage: number;

  @Output() paginate = new EventEmitter<number>();

  onPaginate(pageNumber: number) {
    if (pageNumber < 0) {
      return;
    }

    this.paginate.emit(pageNumber);
  }

  getTotalPages(currentPage: number, limit: number) {

    const total = limit / 5;
    const difference = total % 1;
    return difference === 0 ? total : Math.floor(total + 1);
  }
}
