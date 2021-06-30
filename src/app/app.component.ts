import { Component } from '@angular/core';
 import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leoTets';
  constructor(
      private _renderer2: Renderer2, 
      @Inject(DOCUMENT) private _document: Document
  ) { }

  public ngOnInit() {

      let script = this._renderer2.createElement('script');
      script.src = `//code.tidio.co/uigamowt3ms4l5w4afozrezlfevwk88p.js`;
      script.async = true;
      this._renderer2.appendChild(this._document.body, script);
  }
}
