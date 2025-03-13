# Patient Dashboard

A modern, responsive patient dashboard built with React, TypeScript, and Tailwind CSS. This application displays patient information and vital signs in a beautiful, easy-to-read interface, featuring interactive charts for blood pressure history.


## Features

- 📊 Interactive blood pressure history chart using Chart.js
- 💉 Real-time vital signs monitoring
- 👤 Patient profile information
- 📱 Fully responsive design
- 🎨 Modern UI with custom styling
- 🔄 API integration for patient data

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Chart.js / React-Chartjs-2
- Lucide React (for icons)
- Vite (build tool)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd patient-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
patient-dashboard/
├── src/
│   ├── components/
│   │   ├── BloodPressureChart.tsx
│   │   └── PatientCard.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## API Integration

The application integrates with the Coalition Technologies Patient Data API. The API endpoint used is:

```
https://patientdata.api.coalitiontechnologies.com/api/v1/patient/{id}
```

## Features in Detail

### Patient Information
- Display of patient's basic information
- Profile picture
- Age and gender
- Last visit date

### Vital Signs Monitoring
- Blood Pressure (Systolic/Diastolic)
- Weight
- Height
- Temperature
- Oxygen Saturation
- Medical Condition

### Blood Pressure Chart
- Interactive line chart
- Year-by-year blood pressure tracking
- Custom tooltips
- Responsive design

## Styling

The project uses Tailwind CSS for styling with custom configuration:
- Custom color scheme
- Inter font family
- Custom shadows
- Responsive breakpoints



## Acknowledgments

- Design inspired by Adobe XD template
- Patient photo from Unsplash
- Icons from Lucide React
- Chart implementation using Chart.js

###
Happy Coding!❤️
