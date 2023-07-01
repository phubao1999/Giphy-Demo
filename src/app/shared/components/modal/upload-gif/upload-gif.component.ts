import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isEmpty, isNil } from 'lodash';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { take } from 'rxjs';
import { GiphyApiService } from 'src/app/core/services';
import { IUploadGif } from 'src/app/shared/model';

@Component({
  selector: 'app-upload-gif',
  templateUrl: './upload-gif.component.html',
})
export class UploadGifComponent implements OnInit {
  form!: FormGroup;
  base64textString: string = '';

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private giphyApiService: GiphyApiService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: [null],
      tag: [null],
      fileUrl: [null, [Validators.required]],
      file: [null, [Validators.required]],
    });

    this.form.get('fileUrl')?.valueChanges.subscribe((value) => {
      if (!isNil(value) && !isEmpty(value.trim())) {
        this.form.get('file')?.setValidators(null);
        this.form.get('file')?.updateValueAndValidity();
      }
    });

    this.form.get('file')?.valueChanges.subscribe((value) => {
      if (!isNil(value)) {
        this.form.get('fileUrl')?.setValidators(null);
      }
    });
  }

  convertFile(evt: any) {
    const files = evt.target.files;
    const file = files[0];
    if (files && file) {
      if (Math.round(file.size / 1024) < 100000) {
        this.form.get('fileUrl')?.updateValueAndValidity();
        let reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
      }
    }
  }

  close(): void {
    this.modalRef.close();
  }

  uploadFile() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if (this.form.valid) {
      const body: IUploadGif = {
        username: this.form.get('userName')?.value,
        tags: this.form.get('tag')?.value,
        source_image_url: this.form.get('fileUrl')?.value,
        file: this.base64textString,
      };
      console.log(body);
      this.giphyApiService
        .uploadGif(body)
        .pipe(take(1))
        .subscribe((res) => {
          console.log(res);
        });
    }
  }

  private _handleReaderLoaded(readerEvt: any): void {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }
}
