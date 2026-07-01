import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly message = input( '🔥 Viral • 😈 Caótico • 🦸 Heroico • 😂 Compartilhável' );
}