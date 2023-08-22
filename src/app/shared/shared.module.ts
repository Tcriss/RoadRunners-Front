import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAlertModule, TuiDialogModule, TuiButtonModule, TuiThemeNightModule, TuiModeModule, TuiLoaderModule, TuiDropdownModule, TuiDataListModule, TuiTextfieldControllerModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiTabsModule, TuiCarouselModule, TuiPaginationModule, TuiIslandModule, TuiPushModule, TuiInputModule, TuiDataListWrapperModule, TuiInputYearModule, TuiComboBoxModule, TuiAvatarModule, TuiTagModule } from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiAlertModule,
    TuiDialogModule,
    TuiTabsModule,
    TuiPaginationModule,
    TuiButtonModule,
    TuiThemeNightModule, 
    TuiModeModule,
    TuiPushModule,
    TuiInputModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiDropdownModule,
    TuiInputYearModule,
    TuiDataListModule,
    TuiLoaderModule,
    TuiTextfieldControllerModule,
    TuiMoneyModule,
    TuiCarouselModule,
    TuiIslandModule,
    TuiTagModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    TuiAlertModule,
    TuiDialogModule,
    TuiTabsModule,
    TuiPaginationModule,
    TuiButtonModule,
    TuiThemeNightModule, 
    TuiModeModule,
    TuiPushModule,
    TuiInputModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiDropdownModule,
    TuiInputYearModule,
    TuiDataListModule,
    TuiLoaderModule,
    TuiTextfieldControllerModule,
    TuiMoneyModule,
    TuiCarouselModule,
    TuiIslandModule,
    TuiTagModule,
    TuiSvgModule
  ]
})
export class SharedModule { }
