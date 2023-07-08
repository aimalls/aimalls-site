import { FC, useRef, useState } from "react";
import { iFileInput } from "../../../hooks/useTask";
import { compressor, dataURLtoFile } from "../../../helpers/file-compressor";
import { IonIcon, IonLabel } from "@ionic/react";
import { attach } from "ionicons/icons";

import "./FileInput.scss"

export interface iProps {
    field: iFileInput,
    onChange: (value: any) => any
}
export const FileInput: FC<iProps> = ({ field, onChange }): JSX.Element => {

    const fileInput = useRef<HTMLInputElement>(null)

    const [fileName, setFileName] = useState<string>()

    const handleUploadPaymentProof = async (file: any) => {

        const the_file = file.target.files
        await compressor(the_file[0], false, async function (result: any, file_name: any) {

            let image = dataURLtoFile(result, file_name)
            onChange(image)
            setFileName(image.name)

        });
    }

    const handleFileInputClick = () => {
        fileInput.current?.click()
    }

    return (
        <div className='file-input-wrapper ion-ouline' onClick={() => handleFileInputClick()}>
            <IonLabel position="floating">Upload { fileName }</IonLabel>
            <IonIcon icon={attach} size=''></IonIcon>
        <input ref={fileInput} type={ field.type } onChange={(e) => handleUploadPaymentProof(e)} className="file-input" />
        </div>
    )
};
export default FileInput;