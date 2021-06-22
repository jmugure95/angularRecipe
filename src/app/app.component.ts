import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  @Input() loadedFeature = 'recipes';

  // onNavigate(feature: string): any{
  //   this.loadedFeature = feature;
  // }

}
