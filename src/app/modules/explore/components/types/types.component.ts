import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';

import { Brand } from '../../../../common/interfaces/brand';
import { types } from '../../../../common/utils/types.list';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
        shape: 'rounded',
        appearance: TuiAppearance.Outline,
        size: 'm',
    }),
],
})
export class TypesComponent {
  
  types: Brand[] = types

}
