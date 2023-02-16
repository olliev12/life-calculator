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

export class AppConfig {
}
