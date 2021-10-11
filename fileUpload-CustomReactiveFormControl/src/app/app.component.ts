import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileHandler } from './shared/helpers/handleFileInput';
import { requiredFileType } from './shared/helpers/requiredFileType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'File upload - Custom reactive form control';
  fileCtrl: FormControl = new FormControl('', requiredFileType(['pdf']));
  handledFile: FileHandler;

  onFileUpload(file: FileHandler) {
    console.log('Uploaded file', file);
    this.handledFile = file;
  }
}
