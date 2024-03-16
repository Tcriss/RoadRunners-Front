import { Component } from '@angular/core';
import { TuiAvatarModule } from '@taiga-ui/kit';

import { Member } from '../../interfaces';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [TuiAvatarModule]
})
export class FooterComponent {

  readonly members: Member[] = [
    {
      name: 'Cristian Tejeda',
      pictureUrl: './assets/images/members/member1.png',
      url: 'https://github.com/Tcriss',
      role: 'Frontend'
    },
    {
      name: 'Haroldy Martinez',
      pictureUrl: './assets/images/members/member2.jpg',
      url: 'https://github.com/HaroldMart',
      role: 'Backend'
    },
    {
      name: 'Isael Diroche',
      pictureUrl: './assets/images/members/member3.png',
      url: 'https://github.com/isael-Diroche',
      role: 'Designer'
    }
  ]

}
