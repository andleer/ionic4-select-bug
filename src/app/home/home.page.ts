import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IWidget } from './widget.model';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('widgetSelect1') widgetSelect1: IonSelect;
  @ViewChild('widgetSelect2') widgetSelect2: IonSelect;
  @ViewChild('widgetSelect3') widgetSelect3: IonSelect;

  public pseudoApiSource: IWidget[];

  public widgets1: IWidget[];
  public widgets2: IWidget[];
  public widgets3: IWidget[];

  public selectedWidgetId: number;

  // always shows
  public readonly delay1 = 10;

  // 55 - 70ms seem to cause the bug on my
  // X1 Carbon i7-7600U CPU @ 2.80 - 2.90 GHz
  // at 65 on my device this seems intermittent
  // I don't know if this is event driven
  // or just a timing side effect
  public readonly delay2 = 65;

  // never shows. bug!!!
  public readonly delay3 = 200;

  ngOnInit(): void {
    this.pseudoApiSource = [
      { id: 1, name: 'Widget A', isDefault: false, },
      { id: 2, name: 'Widget B', isDefault: false, },
      { id: 3, name: 'Widget C', isDefault: false, },
      { id: 4, name: 'Widget D', isDefault: true, },
      { id: 5, name: 'Widget E', isDefault: false, },
      { id: 6, name: 'Widget F', isDefault: false, },
    ];

    this.selectedWidgetId = 4;

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
