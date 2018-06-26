import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { CameraService } from '../../shared/native-features/camera-service/camera.service';

@Component({
  selector: 'camera-native',
  templateUrl: './camera-native.component.html',
  styleUrls: ['./camera-native.component.scss']
})
export class CameraNativeComponent implements AfterViewInit {

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

  constructor(private cameraService: CameraService) { }

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
    this.cameraService.initCameraStream()
      .then(stream => {
        this.videoPlayer.nativeElement.src = stream;
        this.videoPlayer.nativeElement.srcObject = stream;
        this.videoPlayer.nativeElement.play();
      }).catch(error => {
        alert('[Ocorreu um erro]: ' + error);
      });
  } 

}
