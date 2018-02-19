import { Injectable } from '@angular/core';
import * as domHelper from '../../helpers/dom.helper';
@Injectable()
export class ThemeService {
  egretThemes = [{
    name: 'egret-dark-purple',
    baseColor: '#9c27b0',
    isActive: false
  }, {
    name: 'egret-dark-pink',
    baseColor: '#e91e63',
    isActive: false
  }, {
    name: 'egret-blue',
    baseColor: '#247ba0',
    isActive: false
  }, {
    name: 'egret-indigo',
    baseColor: '#3f51b5',
    isActive: true
  }];
  activatedThemeName: String;
  constructor() {
    this.changeTheme({name: 'egret-indigo'});
  }
  changeTheme(theme) {
    domHelper.changeTheme(this.egretThemes, theme.name);
    this.egretThemes.forEach((t) => {
      t.isActive = false;
      if(t.name === theme.name) {
        t.isActive = true;
        this.activatedThemeName = theme.name;
      }
    });
  }
}
