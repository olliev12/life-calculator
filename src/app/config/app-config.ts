import { ValidatorFn, Validators } from "@angular/forms";
import { RadioGroupComponent } from "../calculator-home/shared/radio-group/radio-group.component";

export interface CalculatorType {
  name: string,
  label: string,
  route: string
  children: Calculator[]
}

export interface Calculator {
  name: string,
  label: string,
  route: string
}

export interface FormField {
  type: string;
  label?: string;
  placeholder?:string;
  value?: any;
  validators: ValidatorFn[];
  valueAccessor?: any;
  selectOptions?: { label: string; value: any }[]; // define selectOptions property for dropdown fields
  radioOptions?: { label: string; value: any }[]; // define radioOptions property for radio button fields
}

export interface FormConfig {
  [key: string]: FormField;
}

export const exampleConfig: FormConfig = {
  name: {
    type: 'text',
    label: 'Name',
    value: '',
    validators: [Validators.required]
  },
  email: {
    type: 'text',
    label: 'Email',
    value: '',
    validators: [Validators.required, Validators.email]
  },
  password: {
    type: 'text',
    label: 'Password',
    value: '',
    validators: [Validators.required, Validators.minLength(6)]
  },
  gender: {
    type: 'radio',
    label: 'Gender',
    value: '',
    radioOptions: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' }
    ],
    validators: [Validators.required],
    valueAccessor: RadioGroupComponent
  },
  activity: {
    type: 'select',
    label: 'Activity',
    value: '',
    selectOptions: [
      {label: 'Little to no exercise', value: 1.2},
      {label: 'Light exercise (1-3 days per week)', value: 1.375},
      {label: 'Moderate exercise (3-5 days per week)', value: 1.55},
      {label: 'Heavy exercise (6-7 days per week)', value: 1.725},
      {label: 'Very heavy exercise (twice per day, extra heavy workouts)', value: 1.9}
    ],
    validators: [Validators.required]
  }
};

export const calorieConfig: FormConfig = {
  gender: {
    type: 'radio',
    label: 'Gender',
    value: '',
    radioOptions: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' }
    ],
    validators: [Validators.required],
    valueAccessor: RadioGroupComponent
  },
  activity: {
    type: 'select',
    label: 'Activity',
    value: '',
    selectOptions: [
      {label: 'Little to no exercise', value: 1.2},
      {label: 'Light exercise (1-3 days per week)', value: 1.375},
      {label: 'Moderate exercise (3-5 days per week)', value: 1.55},
      {label: 'Heavy exercise (6-7 days per week)', value: 1.725},
      {label: 'Very heavy exercise (twice per day, extra heavy workouts)', value: 1.9}
    ],
    validators: [Validators.required]
  },
  age: {
    type: 'number',
    label: 'Age',
    value: '',
    validators: [Validators.required]
  },
  weight: {
    type: 'number',
    label: 'Weight',
    value: '',
    validators: [Validators.required]
  },
  height: {
    type: 'number',
    label: 'Height',
    value: '',
    validators: [Validators.required]
  }
};

export const fitnessCalculators: Calculator[] = [
  {
    name: "calorie",
    label: "Calorie Calculator",
    route: "calorie"
  },
  {
    name: "bmi",
    label: "BMI Calculator",
    route: "bmi"
  },
  {
    name: "bodyFat",
    label: "Body Fat Calculator",
    route: "body-fat"
  },
  {
    name: "bmr",
    label: "BMR Calculator",
    route: "bmr"
  },
  {
    name: "macro",
    label: "Macro Calculator",
    route: "macro"
  },
  {
    name: "tdee",
    label: "TDEE Calculator",
    route: "tdee"
  }
];
export const financialCalculators: Calculator[] = [
  {
    name: "interest",
    label: "Interest Calculator",
    route: "interest"
  },
  {
    name: "investment",
    label: "Investment Calculator",
    route: "investment"
  },
  {
    name: "incomeTax",
    label: "Income Tax Calculator",
    route: "income-tax"
  },
  {
    name: "rent",
    label: "Rent Calculator",
    route: "rent"
  },
  {
    name: "tip",
    label: "Tip Calculator",
    route: "tip"
  },
  {
    name: "adsense",
    label: "Adsense Revenue Calculator",
    route: "adsense"
  }
];
export const mathCalculators: Calculator[] = [
  {
    name: "standard",
    label: "Standard Calculator",
    route: "standard"
  },
  {
    name: "scientific",
    label: "Scientific Calculator",
    route: "scientific"
  },
  {
    name: "fraction",
    label: "Fraction Calculator",
    route: "fraction"
  },
  {
    name: "percentage",
    label: "Percentage Calculator",
    route: "percentage"
  },
  {
    name: "randomNumber",
    label: "Random Number Generator",
    route: "random-number"
  }
];
export const otherCalculators: Calculator[] = [
  {
    name: "password",
    label: "Password Generator",
    route: "password"
  },
  {
    name: "gpa",
    label: "GPA Calculator",
    route: "gpa"
  },
  {
    name: "temperature",
    label: "Temperature Calculator",
    route: "temperature"
  }
];

export const calculators: CalculatorType[] = [
  {
    name: "fitness",
    label: "Fitness",
    route: "fitness-calculators",
    children: fitnessCalculators
  },
  {
    name: "financial",
    label: "Financial",
    route: "financial-calculators",
    children: financialCalculators
  },
  {
    name: "math",
    label: "Math",
    route: "math-calculators",
    children: mathCalculators
  },
  {
    name: "other",
    label: "Other",
    route: "other-calculators",
    children: otherCalculators
  }
];

export const pages: CalculatorType[] = [
  {
    name: 'about',
    label: 'About Us',
    route: 'about',
    children: []
  },
  {
    name: 'blog',
    label: 'Blog',
    route: 'blog',
    children: []
  },
  {
    name: 'privacy',
    label: 'Privacy Policy',
    route: 'privacy',
    children: []
  },
  {
    name: 'all calculators',
    label: 'All Calculators',
    route: 'all',
    children: []
  }
]

export class AppConfig {
}
