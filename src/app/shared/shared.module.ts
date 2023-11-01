import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiAlertModule, TuiDialogModule, TuiButtonModule, TuiThemeNightModule, TuiModeModule, TuiLoaderModule, TuiDropdownModule, TuiDataListModule, TuiTextfieldControllerModule, TuiSvgModule, TuiHostedDropdownModule } from '@taiga-ui/core';
import { TuiTabsModule, TuiCarouselModule, TuiPaginationModule, TuiIslandModule, TuiPushModule, TuiInputModule, TuiDataListWrapperModule, TuiInputYearModule, TuiComboBoxModule, TuiAvatarModule, TuiTagModule, TuiInputFilesModule } from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { CommonModule } from '@angular/common';
import { TuiPreviewModule } from '@taiga-ui/addon-preview';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiLoaderModule,
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
    TuiSvgModule,
    TuiPreviewModule,
    TuiDropdownModule,
    TuiAvatarModule,
    TuiHostedDropdownModule
  ]
})
export class SharedModule { }
