import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-upload-gif',
  templateUrl: './upload-gif.component.html',
  styleUrls: ['./upload-gif.component.scss'],
})
export class UploadGifComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: [null],
      tag: [null],
      fileUrl: [null],
      file: [null],
    });
  }


  close(): void {
    this.modalRef.close();
  }
}
