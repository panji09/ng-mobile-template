import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgZorroAntdMobileModule, RouterModule],
  exports: [CommonModule, NgZorroAntdMobileModule, RouterModule],
})
export class SharedModule {}
