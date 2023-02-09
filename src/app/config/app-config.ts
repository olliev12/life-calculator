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
  }
];
export const financialCalculators: Calculator[] = [
  {
    name: "interest",
    label: "Interest Calculator",
    route: "interest"
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
