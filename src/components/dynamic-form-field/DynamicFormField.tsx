import { FC } from "react";
import { tCustomField } from "../../hooks/useTask";
import TextInput from "./inputs/TextInput";
import FileInput from "./inputs/FileInput";
import SelectInput from "./inputs/SelectInput";
import Textarea from "./inputs/Textarea";

export interface iProps {
    field: tCustomField,
    onFormFieldChange: (value: any) => any
}

export const DynamicFormField: FC<iProps> = ({ field, onFormFieldChange }): JSX.Element => {
    return (
        <div>
            
            { field?.fieldType == 'text' ?
                <TextInput field={field} onChange={ (value) => onFormFieldChange(value) } />
            : field?.fieldType == 'file' ?
                <FileInput field={field} onChange={ (value) => onFormFieldChange(value)} />
            : field?.fieldType == 'select' ?
                <SelectInput field={field} onChange={ (value) => onFormFieldChange(value)}  />
            : field?.fieldType == 'textarea' ? 
                <Textarea field={field} onChange={ (value) => onFormFieldChange(value)} />
            : null
            }
        </div>
    )
};
export default DynamicFormField;