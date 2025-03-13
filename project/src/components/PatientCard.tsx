import React from 'react';
import { Activity, Heart, Thermometer, Weight, Ruler, Brain } from 'lucide-react';
import type { Patient } from '../types';

interface Props {
  patient: Patient;
}

export const PatientCard: React.FC<Props> = ({ patient }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-[28px] font-bold text-[#1A1C1E] mb-2">{patient.name}</h2>
          <p className="text-[#44474A] text-lg">
            {patient.age} years • {patient.gender}
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
          alt={patient.name}
          className="w-[120px] h-[120px] rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 p-4 bg-[#EDF6FF] rounded-xl">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl">
            <Heart className="w-6 h-6 text-[#0066CC]" />
          </div>
          <div>
            <p className="text-[#44474A] text-sm mb-1">Blood Pressure</p>
            <p className="text-[#1A1C1E] text-lg font-semibold">
              {patient.bloodPressure[patient.bloodPressure.length - 1].systolic}/
              {patient.bloodPressure[patient.bloodPressure.length - 1].diastolic}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#F1FFF7] rounded-xl">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl">
            <Weight className="w-6 h-6 text-[#00B341]" />
          </div>
          <div>
            <p className="text-[#44474A] text-sm mb-1">Weight</p>
            <p className="text-[#1A1C1E] text-lg font-semibold">{patient.weight} kg</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#F3F1FF] rounded-xl">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl">
            <Ruler className="w-6 h-6 text-[#6E45EB]" />
          </div>
          <div>
            <p className="text-[#44474A] text-sm mb-1">Height</p>
            <p className="text-[#1A1C1E] text-lg font-semibold">{patient.height} cm</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#FFF1F1] rounded-xl">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl">
            <Thermometer className="w-6 h-6 text-[#E93131]" />
          </div>
          <div>
            <p className="text-[#44474A] text-sm mb-1">Temperature</p>
            <p className="text-[#1A1C1E] text-lg font-semibold">{patient.temperature}°C</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#FFF8F1] rounded-xl">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl">
            <Activity className="w-6 h-6 text-[#F98600]" />
          </div>
          <div>
            <p className="text-[#44474A] text-sm mb-1">Oxygen Saturation</p>
            <p className="text-[#1A1C1E] text-lg font-semibold">{patient.oxygenSaturation}%</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#FFF1F8] rounded-xl">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl">
            <Brain className="w-6 h-6 text-[#E93187]" />
          </div>
          <div>
            <p className="text-[#44474A] text-sm mb-1">Condition</p>
            <p className="text-[#1A1C1E] text-lg font-semibold">{patient.disease}</p>
          </div>
        </div>
      </div>
    </div>
  );
};