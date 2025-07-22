# Car Rental Management System

A modern, responsive Next.js application for car rental management with scoped company authentication and clean UI design.

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or later
- npm or yarn package manager

### Installation

1. **Create the Next.js application**

   ```bash
   npx create-next-app@latest car-rental-app --typescript --tailwind --eslint
   cd car-rental-app
   ```

2. **Install additional dependencies**

   ```bash
   npm install lucide-react
   ```

3. **Replace the generated files with the project structure** (copy all files from the provided code)

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
car-rental-app/
├── pages/
│   ├── api/
│   │   ├── me.ts                    # User authentication endpoint
│   │   └── companies/[id]/cars.ts   # Company-scoped car listings
│   ├── _app.tsx                     # App wrapper with layout
│   ├── index.tsx                    # Dashboard page
│   └── cars.tsx                     # Cars listing page
├── components/
│   ├── Layout.tsx                   # Main layout wrapper
│   ├── Navbar.tsx                   # Top navigation bar
│   ├── Sidebar.tsx                  # Side navigation menu
│   ├── CarCard.tsx                  # Individual car display card
│   └── BookingModal.tsx             # Car booking modal dialog
├── types/
│   └── index.ts                     # TypeScript type definitions
├── hooks/
│   └── useAuth.ts                   # Authentication hook
├── utils/
│   └── api.ts                       # API utility functions
├── data/
│   └── mockData.json                # Mock data for development
└── styles/
    └── globals.css                  # Global styles (Tailwind)
```

## 🔐 Authentication System

### How Authentication Works

The application uses **simulated authentication** for demonstration purposes:

1. **Mock User Data**: A hardcoded user profile is stored in `/data/mockData.json`

   ```json
   {
     "user": {
       "id": 10,
       "name": "Wasif",
       "company_id": 3,
       "company_name": "QuickWheels",
       "role": "user"
     }
   }
   ```

2. **Authentication Hook**: The `useAuth` hook automatically "logs in" the user by calling `/api/me`

3. **Company Scoping**: All data access is restricted to the user's company (ID: 3 - QuickWheels)

4. **API Protection**: The `/api/companies/[id]/cars.ts` endpoint only returns cars for the specified company

### In a Real Application

For production use, you would need to implement:

- **JWT tokens** or **session-based authentication**
- **Login/logout functionality**
- **Role-based access control**
- **Password hashing and validation**
- **Database integration** instead of mock data

## ✅ What's Implemented

### Core Features

- ✅ **User Dashboard** with company-specific welcome message
- ✅ **Car Listings** scoped to user's company only
- ✅ **Car Booking Modal** with date selection and cost calculation
- ✅ **Responsive Design** that works on all devices
- ✅ **Professional UI** with modern styling using Tailwind CSS
- ✅ **Loading States** and error handling throughout
- ✅ **Toast Notifications** for user feedback
- ✅ **TypeScript** for full type safety

### Technical Implementation

- ✅ **Next.js API Routes** for backend functionality
- ✅ **React Hooks** for state management
- ✅ **Custom useAuth Hook** for authentication logic
- ✅ **Component-based Architecture** for maintainability
- ✅ **Mock Data System** for development and testing
- ✅ **Company-scoped Data Access** for multi-tenant support

### UI/UX Features

- ✅ **Sidebar Navigation** with active state indicators
- ✅ **Top Navigation Bar** with user profile display
- ✅ **Car Cards** with availability status and pricing
- ✅ **Interactive Booking Modal** with date validation
- ✅ **Dashboard Statistics** cards (mockup data)
- ✅ **Hover Effects** and smooth transitions

## ⚠️ What's Not Implemented (Intentionally Skipped)

### Backend & Database

- ❌ **Real Database Integration** (using mock JSON data instead)
- ❌ **Actual Authentication System** (simulated for demo)
- ❌ **Password Security** (no login form needed)
- ❌ **Session Management** (auto-authenticated)
- ❌ **API Validation & Security** (simplified for demo)

### Business Logic

- ❌ **Real Booking Processing** (just console logs the request)
- ❌ **Payment Integration** (booking requests only)
- ❌ **Email Notifications** (toast notifications instead)
- ❌ **Booking Approval Workflow** (simplified request system)
- ❌ **Car Availability Checking** (static availability status)

### Advanced Features

- ❌ **Multi-company Admin Panel** (single company scope)
- ❌ **User Registration** (pre-defined user)
- ❌ **File Uploads** (using external image URLs)
- ❌ **Advanced Search/Filtering** (basic car listing)
- ❌ **Booking History/Management** (dashboard shows mock stats only)

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```
