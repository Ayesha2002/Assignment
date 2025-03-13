export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  bloodPressure: {
    year: number;
    systolic: number;
    diastolic: number;
  }[];
  weight: number;
  height: number;
  bmi: number;
  temperature: number;
  oxygenSaturation: number;
  disease: string;
  lastVisit: string;
}