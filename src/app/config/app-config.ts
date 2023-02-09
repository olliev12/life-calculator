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
  }
];
export const mathCalculators: Calculator[] = [
  {
    name: "scientific",
    label: "Scientific Calculator",
    route: "scientific"
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
