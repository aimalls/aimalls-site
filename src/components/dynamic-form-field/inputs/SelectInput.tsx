import { FC } from "react";
import { iSelectInput } from "../../../hooks/useTask";
import { IonSelect, IonSelectOption } from "@ionic/react";

export interface iProps {
    field: iSelectInput,
    onChange: (value: any) => any
}
export const SelectInput: FC<iProps> = ({ field, onChange }): JSX.Element => {
    return (
        <IonSelect placeholder={ field.placeholder } label={ field.label } labelPlacement={ field.labelPlacement } fill={ field.fill } multiple={ field.multiple } onIonChange={(e) => onChange(e.detail.value)}>
            {field.options.map((option, index) => (
                <IonSelectOption key={`select-option-${index}`} value={option.value}>{option.label}</IonSelectOption>   
            ))}
        </IonSelect>
    )
};
export default SelectInput;