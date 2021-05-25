import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedFeature = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(feature: string): any{
    this.selectedFeature.emit(feature);
  }

}
