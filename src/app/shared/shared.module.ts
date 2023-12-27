import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiModeModule, TuiDropdownModule, TuiDataListModule, TuiTextfieldControllerModule, TuiSvgModule, TuiHostedDropdownModule, TuiAlertModule, TuiDialogModule } from '@taiga-ui/core';
import { TuiInputModule, TuiDataListWrapperModule, TuiInputYearModule, TuiComboBoxModule, TuiAvatarModule, TuiInputPhoneModule, TuiFilterByInputPipeModule, TuiPromptModule } from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    TuiModeModule,
    TuiInputModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiDropdownModule,
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
  ]
})
export class SharedModule { }
