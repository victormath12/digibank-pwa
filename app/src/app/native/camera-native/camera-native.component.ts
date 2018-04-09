import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'camera-native',
  templateUrl: './camera-native.component.html',
  styleUrls: ['./camera-native.component.css']
})
export class CameraNativeComponent implements OnInit, AfterViewInit {

  @ViewChild('camera')
  videoPlayer: any;

  @ViewChild('viewer')
  canvas: any;

  @Output()
  outputImage = new EventEmitter<any>();

  private context: any;
  private browser = <any>navigator;

  photoTaked = false;
  isSupportUserMedia: boolean;
  isSupportWebRTC: boolean;
  listCameras: any;
  imageBase64: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.verifyBrowserSupport();
    console.log(this.isSupportUserMedia);
    console.log(this.isSupportWebRTC);
  }

  ngAfterViewInit() {
    this.initCamera();
  }

  takePicture() {
    this.photoTaked = true;
    this.imageBase64 = this.canvas.nativeElement.toDataURL('img/png');
    this.outputImage.emit({
      picture: this.imageBase64
    });
  }

  closeCamera() {
    this.router.navigate(['/home']);
  }

  getListCameras() {
    navigator.mediaDevices.enumerateDevices().then(callback => {
       console.log(callback);
       this.listCameras = callback;
     });
  }

  private initCamera() {
    this.context = this.canvas.nativeElement.getContext('2d');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.videoPlayer.nativeElement.src = stream;
          this.videoPlayer.nativeElement.srcObject = stream;
          this.videoPlayer.nativeElement.play();
        });
    }
  }

  private verifyBrowserSupport() {
    this.isSupportUserMedia = this.getBrowserUserMedia() != null ? true : false;
    this.isSupportWebRTC = !!(this.browser.mediaDevices && this.browser.mediaDevices.getUserMedia);
  }

  private getBrowserUserMedia() {
    return this.browser.getUserMedia
    || this.browser.webkitGetUserMedia
    || this.browser.mozGetUserMedia
    || this.browser.msGetUserMedia;
  }

}
