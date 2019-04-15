import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements AfterViewInit {

  @Input() url: string;
  @Input() width: number;
  @Input() height: number;
  @Input() tiltEnabled = false;

  @ViewChild('postImage') postImage: ElementRef;

  ngAfterViewInit() {
    if (!this.tiltEnabled) {
      return;
    }

    VanillaTilt.init(this.postImage.nativeElement, {
      max: 25,
      speed: 400
    });
  }
}
