import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { PresentationComponent } from "./presentation/presentation.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TalkWithMeComponent } from "./talk-with-me/talk-with-me.component";
import { ProfessionalAchievementsComponent } from "./professional-achievements/professional-achievements.component";
import { WhatsappButtonComponent } from "./whatsapp/whatsapp-button.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, NgOptimizedImage, ToolbarComponent, AboutMeComponent, PresentationComponent, SkillsComponent, ProjectsComponent, TalkWithMeComponent, ProfessionalAchievementsComponent, WhatsappButtonComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'portfolio';
}
