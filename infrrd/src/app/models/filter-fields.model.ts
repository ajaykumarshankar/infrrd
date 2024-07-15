import { IFormFields } from "../components/constants/form.constants";
import { ISelect } from "./select.model";

export interface IFilterFields {
    fieldType: IFormFields;
    id: string
    width: number,
    height: number,
    initValue: string,
    label?: string,
    list: ISelect[],
    top?: number;
}