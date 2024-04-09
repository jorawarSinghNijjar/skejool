import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { WeeklyViewComponent } from '../weekly-view/weekly-view.component';
import { DailyViewComponent } from '../daily-view/daily-view.component';
import { MonthlyViewComponent } from '../monthly-view/monthly-view.component';

@Component({
  selector: 'app-view-box',
  standalone: true,
  imports: [TabViewModule, WeeklyViewComponent, DailyViewComponent, MonthlyViewComponent],
  templateUrl: './view-box.component.html',
  styleUrl: './view-box.component.css'
})
export class ViewBoxComponent {

}
