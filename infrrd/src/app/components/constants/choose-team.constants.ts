import { IFormFields } from "./form.constants";

export const Choose_Team_Config = [
    {
        fieldType: IFormFields.SELECT,
        id: 'choose-team',
        width: 180,
        height: 80,
        initValue: 'Choose Team',
        top: 50,
        list: [{
            value: 'Product Team',
            displayValue: 'Product Team',
            key: 'team'          
        },
        {
            value: 'IDC',
            displayValue: 'IDC',
            key: 'team'             
        },
        {
            value: 'OCBC',
            displayValue: 'OCBC' ,
            key: 'team'            
        },
        {
            value: 'Radian',
            displayValue: 'Radian',
            key: 'team'             
        },
        {
            value: 'Rustify',
            displayValue: 'Rustify',
            key: 'team'          
        }]
    }
]