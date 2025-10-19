import { Component } from '@angular/core';
import { Carroslist } from '../carroslist/carroslist';

@Component({
  selector: 'app-dashboard',
  imports: [Carroslist],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
