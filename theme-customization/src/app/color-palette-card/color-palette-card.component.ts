import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-palette-card',
  templateUrl: './color-palette-card.component.html',
  styleUrls: ['./color-palette-card.component.scss']
})
export class ColorPaletteCardComponent implements OnInit {
  @Input() title: string;
  @Input() color: string;
  @Input() classes: string[];

  constructor() {}

  ngOnInit() {}
}
