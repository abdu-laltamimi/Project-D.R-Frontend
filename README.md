# Project D.R - Diabetic Retinopathy Detection System

<div align="center">
  <img src="public/mmu2.png" alt="MMU Logo" width="200"/>
  <h3>Manchester Metropolitan University</h3>
  <p>Faculty of Health and Education & Department of Computing and Mathematics</p>
</div>

## Project Overview

Project D.R is a state-of-the-art web application developed at Manchester Metropolitan University for the automated detection of Diabetic Retinopathy. This collaborative project between the Faculty of Health and Education and the Department of Computing and Mathematics utilizes advanced deep learning algorithms to analyze retinal images, providing healthcare professionals with rapid and accurate diagnostic assistance.

### Key Features

- 🔍 Real-time retinal image analysis
- 🤖 AI-powered Diabetic Retinopathy detection
- 📊 Confidence scoring system
- 📋 Automated medical recommendations
- 🖥️ Intuitive user interface
- 🖨️ Report generation and printing
- 🔒 Secure API integration
- 📱 Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Python 3.8+ (for the API server)
- Git

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/project-dr.git
   cd project-dr
   ```

2. **Frontend Setup**
   ```bash
   # Install dependencies
   npm install
   # or
   yarn install

   # Start the development server
   npm run dev
   # or
   yarn dev
   ```

## Usage Guide

1. **Launch the Application**
   - Open your browser and navigate to `http://localhost:3000`

2. **API Connection**
   - Enter the ngrok URL in the API connection field
   - Example: https://project-dr.ngrok-free.app/predict FIND IT IN THE COLAB NOTEBOOK WHEN RUNNING THE CELL
   - Click "Connect" to establish the connection

3. **Image Analysis**
   - Upload a retinal image (JPEG or PNG)
   - Wait for the AI analysis to complete
   - Review the diagnosis and confidence score
   - Check the automated recommendations

4. **Results Management**
   - Print the results for medical records
   - Save or export the analysis data

## Technical Architecture

### Frontend Stack
- **Framework**: Next.js 13+
- **UI Library**: React 18
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **State Management**: React Hooks


