import React, { useEffect, useState } from 'react';
import { BloodPressureChart } from './components/BloodPressureChart';
import { PatientCard } from './components/PatientCard';
import type { Patient } from './types';

// Mock data for development
const mockPatient: Patient = {
  id: 2,
  name: "Jessica Taylor",
  age: 32,
  gender: "Female",
  bloodPressure: [
    { year: 2019, systolic: 115, diastolic: 75 },
    { year: 2020, systolic: 118, diastolic: 77 },
    { year: 2021, systolic: 116, diastolic: 76 },
    { year: 2022, systolic: 117, diastolic: 76 },
    { year: 2023, systolic: 115, diastolic: 75 }
  ],
  weight: 62,
  height: 165,
  bmi: 22.8,
  temperature: 36.5,
  oxygenSaturation: 99,
  disease: "Asthma",
  lastVisit: "2024-02-20"
};

function App() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch('https://patientdata.api.coalitiontechnologies.com/api/v1/patient/2', {
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (!response.ok) {
          console.warn('Using mock data for development');
          setPatient(mockPatient);
          return;
        }

        const data = await response.json();
        setPatient(data);
      } catch (err) {
        console.warn('Using mock data for development');
        setPatient(mockPatient);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center">
        <div className="text-xl font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center">
        <div className="text-xl font-semibold">No patient data available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[32px] font-bold text-[#1A1C1E]">Patient Dashboard</h1>
          <div className="text-right">
            <p className="text-sm text-[#44474A]">Last Visit</p>
            <p className="text-base font-semibold text-[#1A1C1E]">{patient.lastVisit}</p>
          </div>
        </div>
        
        <PatientCard patient={patient} />
        
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6 text-[#1A1C1E]">Blood Pressure History</h2>
          <BloodPressureChart data={patient.bloodPressure} />
        </div>
      </div>
    </div>
  );
}

export default App;