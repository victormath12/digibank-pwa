import { Injectable } from '@angular/core';
import { throws } from 'assert';

@Injectable()
export class WebRTCService {

  private browser = <any> navigator;

  constructor() { }

  verifyUserMediaSupport(): boolean {
    return this.getBrowserUserMedia() != null ? true : false;
  }

  verifyWebRTCSupport(): boolean {
    return this.getBrowserMediaDevices() != null ? true : false;
  }

  getAvailableCameras(): Promise<MediaDeviceInfo[]> {
    return navigator.mediaDevices.enumerateDevices();
  }

  initCameraStream(): Promise<MediaStream> {
    if(this.verifyWebRTCSupport())
      return navigator.mediaDevices.getUserMedia({ video: true });
    else{
      return Promise.reject('Sem suporte ao WebRTC');
    }
  }

  private getBrowserUserMedia() {
    return this.browser.getUserMedia
    || this.browser.webkitGetUserMedia
    || this.browser.mozGetUserMedia
    || this.browser.msGetUserMedia
  }

  private getBrowserMediaDevices() {
    return this.browser.mediaDevices && this.browser.mediaDevices.getUserMedia
  }

}
