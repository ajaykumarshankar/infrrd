import { IFormFields } from './form.constants';

export const Filter_Config = [
  {
    fieldType: IFormFields.SELECT,
    id: 'designation',
    width: 400,
    height: 80,
    initValue: 'Select',
    label: 'Department',
    list: [
      {
        value: 'Front End Developer',
        displayValue: 'Front End Developer',
        key: 'designation',
      },
      {
        value: 'ML Engineer',
        displayValue: 'ML Engineer',
        key: 'designation',
      },
      {
        value: 'Quality Analyst',
        displayValue: 'Quality Analyst',
        key: 'designation',
      },
      {
        value: 'Human Resource Management',
        displayValue: 'Human Resource Management',
        key: 'designation',
      },
      {
        value: 'Research & Development',
        displayValue: 'Research & Development',
        key: 'designation',
      },
    ],
  },
  {
    fieldType: IFormFields.SELECT,
    id: 'experience',
    initValue: 'Select',
    label: 'Experience',
    width: 400,
    height: 80,
    list: [
      {
        value: '5 Years Above',
        displayValue: '5 Years Above',
        key: 'experience',
      },
      {
        value: '5 Years Below',
        displayValue: '5 Years Below',
      },
      {
        value: '10 Years Above',
        displayValue: '10 Years Above',
        key: 'experience',
      },
      {
        value: 'Between 5 to 10 Years',
        displayValue: 'Between 5 to 10 Years',
        key: 'experience',
      },
    ],
  },
  {
    fieldType: IFormFields.SELECT,
    id: 'doj',
    initValue: 'Select',
    label: 'Date of Joining',
    width: 400,
    height: 80,
    list: [
      {
        value: '2007',
        displayValue: '2007',
        key: 'doj',
      },
      {
        value: '2008',
        displayValue: '2008',
        key: 'doj',
      },
      {
        value: '2009',
        displayValue: '2009',
        key: 'doj',
      },
      {
        value: '2018',
        displayValue: '2018',
        key: 'doj',
      },
      {
        value: '2015',
        displayValue: '2015',
        key: 'doj',
      },
    ],
  },
  {
    fieldType: IFormFields.SELECT,
    id: 'location',
    initValue: 'Select',
    label: 'Location',
    width: 400,
    height: 80,
    list: [
      {
        value: 'Bangalore',
        displayValue: 'Bangalore',
        key: 'location',
      },
      {
        value: 'Mumbai',
        displayValue: 'Mumbai',
        key: 'location',
      },
      {
        value: 'Noida',
        displayValue: 'Noida',
        key: 'location',
      },
    ],
  },
  {
    fieldType: IFormFields.SELECT,
    id: 'teams',
    initValue: 'Select',
    label: 'Teams',
    width: 400,
    height: 80,
    list: [
      {
        value: 'OCBC Singapore',
        displayValue: 'OCBC Singapore',
        key: 'teams',
      },
      {
        value: 'OCBC India',
        displayValue: 'OCBC India',
        key: 'teams',
      },
    ],
  },
];
