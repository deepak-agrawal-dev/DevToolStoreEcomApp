import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  socialLinks: any = [
    {id: 1, name: 'code', url: 'https://github.com/talktome3449', label: 'GitHub'},
    {id: 2, name: 'work', url: 'https://github.com/talktome3449', label: 'Website'},
    {id: 3, name: 'mail', url: 'https://github.com/talktome3449', label: 'Email'},
  ];
}
