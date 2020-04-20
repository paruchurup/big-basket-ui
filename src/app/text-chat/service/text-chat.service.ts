import { RTCPeerConnection } from 'rtcpeerconnection';


export class WebSocketService {
    conn = new WebSocket('ws://localhost:9000/socket');

    configuration : RTCConfiguration = null;

    peerConnection : RTCPeerConnection = new RTCPeerConnection(this.configuration, {
        optional : [ {
            RtpDataChannels : true
        } ]
    });

    constructor() { }

    sendTextMessage(message : string) {
        this.subject.next({message: "Hello Praveena"});
    }

    receiveTextMessage() : string {
        let message : string = "Default Message";
        this.subject.subscribe(msg => {
            console.log("message received is :",msg);
            message = JSON.stringify(msg);
        }, error => {
            console.log("error occurred :", error)
        });
        return message;
    }

}