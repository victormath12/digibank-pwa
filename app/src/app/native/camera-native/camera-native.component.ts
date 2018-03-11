import { Component, OnInit, ViewChild, AfterViewInit, Input, Output } from '@angular/core';

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

  private context: any;
  private browser = <any>navigator;

  showVideo: any = false;
  isSupportUserMedia: boolean;
  isSupportWebRTC: boolean;
  listCameras: any;

  constructor() { }

  ngOnInit() {
    this.verifyBrowserSupport();
    console.log(this.isSupportUserMedia);
    console.log(this.isSupportWebRTC);
  }

  ngAfterViewInit() {
    this.initCamera();
  }

  takePicture() {
    this.context.drawImage(this.videoPlayer.nativeElement, 0, 0, 300, 150);
    this.showVideo = true;
  }

  savePicture() {
    this.showVideo = false;
    let imgData: any = this.canvas.nativeElement.toDataURL('img/png');
    imgData = imgData.replace('data:image/png;base64,', '');
    const picture = {
      imageBase64: imgData,
      camera: 'frontal',
      userMedia: 'user',
      time: '22:22pm'
    };
    console.log(picture);

  }

  getListCameras() {
    navigator.mediaDevices.enumerateDevices().then(callback => {
       console.log(callback);
       this.listCameras = callback;
     });
  }

  changeCamera() { }

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
