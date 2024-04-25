import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { MatRipple } from "@angular/material/core";

@Component({
	selector: 'app-toolbar',
	standalone: true,
	imports: [
		MatIcon,
		MatButton,
		MatMenuTrigger,
		MatMenu,
		MatMenuItem,
		MatIconButton,
		MatRipple
	],
	templateUrl: './toolbar.component.html',
	styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
