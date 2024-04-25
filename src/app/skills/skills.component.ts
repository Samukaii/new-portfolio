import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-skills',
  standalone: true,
	imports: [
		NgOptimizedImage
	],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

	skills = [
		{
			icon: "assets/illustrations/technologies/angular.svg",
			text: "Angular 17"
		},
		{
			icon: "assets/illustrations/technologies/typescript.svg",
			text: "Typescript"
		},
		{
			icon: "assets/illustrations/technologies/ngrx.svg",
			text: "NGRX"
		},
		{
			icon: "assets/illustrations/technologies/karma.svg",
			text: "Karma"
		},
		{
			icon: "assets/illustrations/technologies/javascript.svg",
			text: "Javascript"
		},
		{
			icon: "assets/illustrations/technologies/html.svg",
			text: "HTML 5"
		},
		{
			icon: "assets/illustrations/technologies/react.svg",
			text: "React.js"
		},
		{
			icon: "assets/illustrations/technologies/jira.svg",
			text: "Jira"
		},
		{
			icon: "assets/illustrations/technologies/webstorm.svg",
			text: "Webstorm"
		},
		{
			icon: "assets/illustrations/technologies/figma.svg",
			text: "Figma"
		},
	];
}
