import { Injectable } from '@angular/core';
import { WhatsappSendOptions } from "./shared/models/whatsapp-send-options";

@Injectable({
	providedIn: 'root'
})
export class WhatsappService {
	private phoneNumber = 55_47_988519799;

	send(options: WhatsappSendOptions) {
		let url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.getMessage(options))}`;

		window.open(url, '_blank');
	}

	private getMessage(options: WhatsappSendOptions) {
		if (!options.name) return options.description || "";

		return `Olá, Samuel! meu nome é ${options.name} ${options.email ? '(' + options.email + ')': ''}! E` +
			`estou vindo pelo seu site\n\n${options.description}`;
	}
}
