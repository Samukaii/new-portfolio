import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { WhatsappService } from "../whatsapp.service";

@Component({
  selector: 'app-whatsapp',
  standalone: true,
	imports: [
		NgOptimizedImage
	],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss'
})
export class WhatsappButtonComponent {
	private whatsapp = inject(WhatsappService);

	click() {
		this.whatsapp.send({
			description: "Olá, Samuel!"
		});
	}
}
