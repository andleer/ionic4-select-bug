import { Component, OnInit, ElementRef, ViewChild, NgZone, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { IonSelect } from '@ionic/angular';

import 'zone.js/dist/zone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('widgetSelect1') widgetSelect1: IonSelect;
  @ViewChild('widgetSelect2') widgetSelect2: IonSelect;
  @ViewChild('widgetSelect3') widgetSelect3: IonSelect;

  public pseudoApiSource = [
    'Widget A',
    'Widget B',
    'Widget C',
    'Widget D',
    'Widget E',
    'Widget F',
  ];

  public widgets1: string[];
  public widgets2: string[];
  public widgets3: string[];

  public selectedWidget = this.pseudoApiSource[4];

  // always shows
  public readonly delay1 = 10;
  public readonly delay2 = 50;
  public readonly delay3 = 100;

  constructor() { }

  ngOnInit(): void {
      console.log();
    console.log('widget starting...');

    setTimeout(() => {
      this.widgets1 = this.pseudoApiSource;
      console.log('widget 1 loaded');
    }, this.delay1);

    setTimeout(() => {
      this.widgets2 = this.pseudoApiSource;
      console.log('widget 2 loaded');
    }, this.delay2);

    setTimeout(() => {
      this.widgets3 = this.pseudoApiSource;
      console.log('widget 3 loaded');
    }, this.delay3);
  }

}
