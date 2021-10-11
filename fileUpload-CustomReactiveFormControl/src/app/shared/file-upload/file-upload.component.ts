import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileHandler, onFileChange } from '../helpers/handleFileInput';

@Component({
  selector: 'sh-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor {
  
  onChange = (value:any) => {};
  public file: File | null = null;
  @Output() public changed: EventEmitter<FileHandler> = new EventEmitter();
  handledFile: FileHandler;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    console.log(this.onChange);
    this.onChange(file);
    this.file = file;
    console.log(this.file);
    onFileChange(this.file, this, 'handledFile');
  }

  constructor( private host: ElementRef<HTMLInputElement> ) {
  }

  writeValue( value: null ) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: any ) {
    console.log(fn);
    this.onChange = fn;
  }
  registerOnTouched( fn: any ) {
  }

}
