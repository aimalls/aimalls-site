import { FC, useState } from "react";
import { iTextInput } from "../../../hooks/useTask";
import { IonInput } from "@ionic/react";

export interface iProps {
    field: iTextInput,
    onChange: (value: string) => any
}
export const TextInput: FC<iProps> = ({field, onChange}): JSX.Element => {

    
    return (
        <IonInput
            onIonChange={(e) => onChange(e.detail.value!)}
            type={ field.type }
            fill={ field.fill }
            label={ field.label }
            labelPlacement={ field.labelPlacement }
            placeholder={ field.placeholder }
        ></IonInput>
    )
};
export default TextInput;