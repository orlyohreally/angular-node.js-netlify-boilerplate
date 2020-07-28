import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {
  primary: string;
  accent: string;
  warn: string;

  constructor() {}

  ngOnInit() {
    this.primary = '#011627';
    this.accent = '#011627';
    this.warn = '#011627';
  }
}
