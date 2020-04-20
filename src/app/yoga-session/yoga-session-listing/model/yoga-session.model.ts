import { Url } from 'url';
import { User } from '@app/authentication/model/user.model';

export class YogaSession {
    sessionStartTime : Date;
	sessionEndTime : Date
	seatsAvailable : bigint;
	trainerName: string;
	liveStreamUrl: Url;
	students: User[] = [];
}