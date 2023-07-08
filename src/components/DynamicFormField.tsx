import { FC } from "react";
import { tCustomField } from "../hooks/useTask";
import { IonInput } from "@ionic/react";

export interface iProps {
    field: tCustomField
}

export const DynamicFormField: FC<iProps> = ({ field }): JSX.Element => {
    return (
        <div>
            
            { field?.fieldType == 'text' ?
                <IonInput {...field} />
            : field?.fieldType == 'file' ? 
                <input {...field} />
            : null}
        </div>
    )
};
export default DynamicFormField;