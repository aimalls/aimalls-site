import { FC } from "react";
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
            {...field}
        ></IonInput>
    )
};
export default TextInput;