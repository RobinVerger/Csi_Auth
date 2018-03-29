import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import { ResearchService } from '../services/research.service';
import { AdministrationSuspectComponent } from './administration-suspect/administration-suspect.component';
import { AdministrationUserComponent } from './administration-user/administration-user.component';
import { AdministrationCaseComponent } from './administration-case/administration-case.component';

@Component({
  selector: 'administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(
    private researchService: ResearchService
  ) {}
  @ViewChild('upDateForm') public formData;

  @ViewChild(AdministrationSuspectComponent) public suspect: AdministrationSuspectComponent;
  @ViewChild(AdministrationCaseComponent) public case: AdministrationCaseComponent;
  @ViewChild(AdministrationUserComponent) public user: AdministrationUserComponent;
  
  
    ngOnInit() {
    }
}
