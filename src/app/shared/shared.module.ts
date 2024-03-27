import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TuiModeModule, TuiDropdownModule, TuiDataListModule, TuiTextfieldControllerModule, TuiSvgModule, TuiHostedDropdownModule, TuiAlertModule, TuiDialogModule, TuiHintModule, TuiFormatPhonePipeModule } from '@taiga-ui/core';
import { TuiInputModule, TuiDataListWrapperModule, TuiInputYearModule, TuiComboBoxModule, TuiAvatarModule, TuiInputPhoneModule, TuiFilterByInputPipeModule, TuiPromptModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';

@NgModule({
  declarations: [],
  imports: [ NgOptimizedImage ],
  exports: [
    CommonModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    TuiModeModule,
    TuiInputModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiComboBoxModule,
    TuiDropdownModule,
    TuiSelectModule,
    TuiInputYearModule,
    TuiDataListModule,
    TuiTextfieldControllerModule,
    TuiMoneyModule,
    TuiSvgModule,
    TuiDropdownModule,
    TuiAvatarModule,
    TuiHostedDropdownModule,
    TuiInputPhoneModule,
    TuiFilterByInputPipeModule,
    TuiHintModule,
    TuiFormatPhonePipeModule,
  ]
})
export class SharedModule { }
