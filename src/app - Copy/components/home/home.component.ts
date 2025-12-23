import { Component, OnInit } from '@angular/core';
import { Work } from '../../Models/work.model';
import { WorksapiService } from '../../services/worksapi.service';
import { WorkGridComponent } from "../../shared/work-grid/work-grid.component";
import { HttpClientModule } from '@angular/common/http';
import { WorksPageContainerComponent } from "../works-page-container/works-page-container.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, WorksPageContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
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
    // debugger;
    // this.workService.getWorks().subscribe(data => {
    //   this.works = data;
    // });
  }

}
