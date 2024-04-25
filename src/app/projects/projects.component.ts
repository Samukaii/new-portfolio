import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import * as portfolio from "../../assets/portfolio-config.json";
import { ALL_PROJECTS } from "../static/all-projects";

@Component({
  selector: 'app-projects',
  standalone: true,
	imports: [
		NgOptimizedImage
	],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
	projects = ALL_PROJECTS;
}
