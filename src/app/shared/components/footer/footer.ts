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
    {id: 1, name: 'code', url: 'https://github.com/deepak-agrawal-dev', label: 'GitHub'},
    {id: 2, name: 'work', url: 'https://deepakagrawalfolio.netlify.app', label: 'Website'},
    {id: 3, name: 'mail', url: 'agrawaldk1990@gmail.com', label: 'Email'},
  ];
}
