import { Component, inject } from '@angular/core';
import { JsonPipe, NgOptimizedImage } from "@angular/common";
import { MatError, MatFormField, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { WhatsappService } from "../whatsapp.service";

@Component({
	selector: 'app-talk-with-me',
	standalone: true,
	imports: [
		NgOptimizedImage,
		MatFormField,
		MatLabel,
		MatInput,
		MatButton,
		FormsModule,
		ReactiveFormsModule,
		JsonPipe,
		MatError,
	],
	templateUrl: './talk-with-me.component.html',
	styleUrl: './talk-with-me.component.scss'
})
export class TalkWithMeComponent {
	form = inject(FormBuilder).nonNullable.group({
		name: ["", Validators.required],
		email: ["", [Validators.email]],
		description: [""]
	});

	private whatsapp = inject(WhatsappService);

	onSubmit() {
		this.whatsapp.send(this.form.getRawValue())
	}
}
