import { Component, OnInit } from '@angular/core';
import { YogaSession } from './model/yoga-session.model';
import { YogaSessionService } from '@app/yoga-session/service/yoga-session.service';

@Component({
  selector: 'app-yoga-session-listing',
  templateUrl: './yoga-session-listing.component.html',
  styleUrls: ['./yoga-session-listing.component.scss']
})
export class YogaSessionListingComponent implements OnInit {

  yogasessions: YogaSession[] = [];

  cols = [
    { field: 'trainerName', header: 'Trainer' },
    { field: 'sessionStartTime', header: 'Session Start Time' },
    { field: 'sessionEndTime', header: 'Session End Time' },
    { field: 'seatsAvailable', header: 'Available Seats' },
    { field: 'liveStreamUrl', header: 'Video Url' }  ,
    { field: 'students', header: 'Joined People'}
];

  constructor(private yogaSessionService : YogaSessionService) { }

  ngOnInit() {
    this.yogaSessionService.getAll().subscribe(data => {
        this.yogasessions = data;
    }, error => {
      alert(error.error.error_description);
    });
  }

}
