export function onFileChange(event: File, context: any, objectName: string) {
    if(event) {
        let file = event;
        let index = file.name.lastIndexOf('.');
        let fileExtension = file.name.substr(index + 1);
        let fileName = file.name.substr(0, index);
        let filetype = file.type;
        var reader = new FileReader();
        let base64string: any;
        reader.onload = (event:any) => {
            let fileData = event.target.result;
            var startIndex = fileData.indexOf('base64');
            base64string =  fileData.substr(startIndex + 7);
            let fileHandler: FileHandler = {
                base64string: base64string,
                fileExtension: fileExtension,
                fileType: filetype,
                fileName: fileName
            };
            context[objectName] = { /* context[objectName].handledFile = { */
                base64string: base64string,
                fileExtension: fileExtension,
                fileType: filetype,
                fileName: fileName
            };

            context['changed'].emit(fileHandler);
        }
        reader.readAsDataURL(event);
    }
    else {
        console.log('Something went wrong');
    }
}

export class FileHandler {
    base64string: string;
    fileExtension: string;
    fileType: string;
    fileName: string;
}





