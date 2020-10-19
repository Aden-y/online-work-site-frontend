import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-setting',
  templateUrl: './theme-setting.component.html',
  styleUrls: ['./theme-setting.component.css']
})
export class ThemeSettingComponent implements OnInit {
  favoriteTheme: string;
  themes: string[] = ['Deep Purple & Amber', 'Indigo & Pink', 'Pink & Blue-grey', 'Purple & Green'];
  constructor() { }


  ngOnInit(): void {
  }

}
