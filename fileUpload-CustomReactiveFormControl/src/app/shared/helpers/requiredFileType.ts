import { FormControl } from "@angular/forms";

export function requiredFileType( types: string[] ) {
    return function (control: FormControl) {
      const file = control.value;
      if ( file ) {
        const splittedString: string[] = file.name.split('.');
        const extension = splittedString[splittedString.length-1].toLowerCase();
        if (types.some(type => type.toLowerCase() === extension.toLowerCase())) {
            return null;
        } else {
            console.log('Type fits: ' + types.some(type => type.toLowerCase() === extension.toLowerCase()));
          return {
            requiredFileType: true
          };
        }
        
      }
  
      return {
        requiredFileType: true
      };
    };
  }