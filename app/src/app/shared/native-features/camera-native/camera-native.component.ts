import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { WebRTCService } from '..//web-rtc/web-rtc.service';

@Component({
  selector: 'camera-native',
  templateUrl: './camera-native.component.html',
  styleUrls: ['./camera-native.component.scss']
})
export class CameraNativeComponent implements AfterViewInit {

  @Input()
  show: boolean;

  @Input()
  maskType: any;

  @ViewChild('camera')
  videoPlayer: any;

  @ViewChild('viewer')
  canvas: any;

  @Output()
  outputImage = new EventEmitter<any>();

  contextCanvas: any;

  photoTaked = false;

  constructor(private webRTC: WebRTCService) { }

  ngAfterViewInit() {
    this.initCamera();
  }

  takePhoto() {
    this.photoTaked = true;
    this.outputImage.emit({
      photoTaked: true,
      imageBase64: this.contextCanvas.toDataURL('img/png')
    });
  }

  private initCamera() {
    this.contextCanvas = this.canvas.nativeElement.getContext('2d');
    this.webRTC.initCameraStream()
      .then(stream => {
        this.videoPlayer.nativeElement.src = stream;
        this.videoPlayer.nativeElement.srcObject = stream;
        this.videoPlayer.nativeElement.play();
      }).catch(error => {
        alert('[Ocorreu um erro]: ' + error);
      });
  } 

}
