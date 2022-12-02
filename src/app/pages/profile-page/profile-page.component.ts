import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProfilePageModel } from '../../model/profile-page-model';
import { finalize, Observable, Subject } from 'rxjs';
import { ProfilePageService } from './profile-page.service';
import { WebcamImage } from 'ngx-webcam';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  profile$: Observable<ProfilePageModel | null> = this.profilePageService.get();

  trigger$ = new Subject<void>();

  @ViewChild('filePreview')
  private filePreview!: ElementRef;

  constructor(
    private readonly profilePageService: ProfilePageService,
    private readonly storage: AngularFireStorage
  ) {}

  handleSnapshot($event: WebcamImage) {
    this.filePreview.nativeElement.src = $event.imageAsDataUrl;
    const base64Img = $event.imageAsBase64;

    const u8arr = this.toByteArray(base64Img);

    const filename = 'tmp.jpeg';
    const file: File = new File([u8arr], filename, { type: 'image/jpeg' });

    const fileRef = this.storage.ref(filename);
    this.storage
      .upload(filename, file)
      .snapshotChanges()
      .pipe(finalize(() => fileRef.getDownloadURL().subscribe(console.log)))
      .subscribe();
    console.log('Received an image!');
  }

  takePhoto() {
    this.trigger$.next();
  }

  hasPreview() {
    const preview = this.filePreview?.nativeElement?.src;
    return preview && !preview.includes('#');
  }

  private toByteArray(base64Img: string) {
    const bstr = atob(base64Img);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return u8arr;
  }
}
