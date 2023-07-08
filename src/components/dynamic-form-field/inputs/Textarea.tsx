import { FC } from "react";
import { iTextarea } from "../../../hooks/useTask";
import { IonTextarea } from "@ionic/react";

export interface iProps {
    field: iTextarea,
    onChange: (value: any) => any
}
export const Textarea: FC<iProps> = ({ field, onChange }): JSX.Element => {
    return (
        <IonTextarea fill={ field.fill } autoGrow={field.autoGrow} onIonChange={(e) => onChange(e.detail.value)} />
    )
};
export default Textarea;