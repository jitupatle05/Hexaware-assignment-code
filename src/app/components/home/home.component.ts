import { Component, OnInit } from '@angular/core';
import { Work } from '../../Models/work.model';
import { WorksapiService } from '../../services/worksapi.service';
import { HttpClientModule } from '@angular/common/http';
import { WorksPageContainerComponent } from "../works-page-container/works-page-container.component";
import { ClientQuoteComponent } from "../../shared/client-quote/client-quote.component";
import { ClientsComponent } from '../../shared/clients/clients.component';
import { ButtonComponent } from "../../shared/button/button.component";
import { ContactFormComponent } from "../../shared/contact-form/contact-form.component";
import { fadeUp } from '../../Animations';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, WorksPageContainerComponent, ClientQuoteComponent, ClientsComponent, ButtonComponent, ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeUp],
  providers: [
    WorksapiService // If WorksapiService is provided at the component level
  ]
})
export class HomeComponent implements OnInit {

  works: Work[] = [];

  constructor(private workService: WorksapiService) {
    console.log("Constructor of home")
  }

  ngOnInit() {
    
  }

  onContactSubmitted() {
    console.log('Contact form submitted successfully');
  }

}
