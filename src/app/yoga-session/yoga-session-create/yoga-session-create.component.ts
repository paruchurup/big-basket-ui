import { Component, OnInit } from '@angular/core';
import { YogaSessionService } from '../service/yoga-session.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YogaSession } from '../yoga-session-listing/model/yoga-session.model';

@Component({
  selector: 'app-yoga-session-create',
  templateUrl: './yoga-session-create.component.html',
  styleUrls: ['./yoga-session-create.component.scss']
})
export class YogaSessionCreateComponent implements OnInit {

  yogaSessionForm: FormGroup;
  yogaSession: YogaSession = new YogaSession();
  rangeDates: Date[];
  
  constructor(private yogaSessionService : YogaSessionService, private formBuilder : FormBuilder) { }

  onSubmit(): void {
      this.yogaSession.sessionStartTime = this.yogaSessionForm.controls.sessionStartTime.value[0];
      this.yogaSession.sessionEndTime = this.yogaSessionForm.controls.sessionStartTime.value[1];
      this.yogaSession.seatsAvailable = this.yogaSessionForm.controls.seatsAvailable.value;
      this.yogaSession.trainerName = this.yogaSessionForm.controls.trainerName.value;
      this.yogaSession.liveStreamUrl = this.yogaSessionForm.controls.liveStreamUrl.value;

      this.yogaSessionService.save(this.yogaSession).subscribe(data => {
          this.yogaSession = data;
      }, error => {
        alert(error.error.error_description);
      });
  }

  ngOnInit() {
    this.setForm();
  }

  rangeChange() {
    const range = this.yogaSessionForm.controls.sessionStartTime.value;

    console.log(range[0]+'--'+range[1]);
  }

  setForm(): void {
    this.yogaSessionForm = this.formBuilder.group({
      sessionStartTime: ['', Validators.compose([Validators.required])],    
      seatsAvailable: ['', Validators.required],
      trainerName: ['', Validators.required],
      liveStreamUrl: ['', Validators.required]   
      
    });
  }
}
