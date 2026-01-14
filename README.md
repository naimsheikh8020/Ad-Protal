# Ad Portal - Project Documentation

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
- [How It Works](#how-it-works)
- [Project Architecture](#project-architecture)
- [Key Components & Pages](#key-components--pages)

---

## 🎯 Project Overview

**Ad Portal** is a comprehensive advertising campaign management platform built with modern web technologies. It enables users to create, manage, monitor, and optimize advertising campaigns across multiple platforms with advanced analytics, AI tools, and administrative controls.

### Primary Purpose

Ad Portal serves as an all-in-one solution for:

- Creating and managing multi-platform advertising campaigns
- Monitoring campaign performance in real-time
- Analyzing audience engagement and ROI
- Managing team members and permissions
- Handling subscriptions and billing

---

## ✨ Key Features

### User Features

1. **Campaign Management**

   - Multi-step campaign creation wizard (6 steps)
   - Platform selection (select which platforms to advertise on)
   - Objective setting (awareness, conversions, engagement, etc.)
   - Audience targeting and segmentation
   - Budget allocation and optimization
   - Creative asset management
   - Campaign review before launching

2. **Analytics & Reporting**

   - Real-time campaign performance metrics
   - Detailed analytics dashboards
   - Subscription management
   - Financial transaction tracking
   - Customizable reports

3. **AI Tools**

   - AI-powered copy generation
   - Campaign optimization suggestions
   - Ad preview generation
   - Smart audience insights

4. **Team Management**

   - Team member management
   - Role-based access control
   - Collaborative campaign management

5. **User Dashboard**
   - Campaign overview
   - Recent activity tracking
   - Quick access to all features

### Admin Features

1. **User Management**

   - View and manage all platform users
   - User role management
   - Account suspension/activation

2. **Campaign Monitoring**

   - Monitor all active campaigns
   - Campaign performance tracking
   - Content quality checks

3. **Content Moderation**

   - Review user-generated content
   - Approve/reject campaign content
   - Compliance monitoring

4. **Finance Management**

   - Transaction monitoring
   - Revenue tracking
   - Payment processing oversight

5. **Platform Analytics**

   - Overall platform usage statistics
   - User growth metrics
   - Campaign success rates
   - Revenue analytics

6. **Admin Reports**
   - Custom report generation
   - Data export functionality

### Authentication & Account

- User sign-up and sign-in
- Password reset with email verification
- Two-factor authentication (OTP)
- Email verification flow
- Account security settings

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router 7.10.1

### UI & Styling

- **Styling**: Tailwind CSS 4.1.18
- **Component Library**: Radix UI (Dialog, Separator, Slot, Tooltip)
- **Icons**: Lucide React, React Icons
- **UI Utilities**:
  - Class Variance Authority (CVA)
  - clsx (conditional classnames)
  - Tailwind Merge

### Data & Visualization

- **Charts**: Recharts 3.5.1
- **Maps**: Google Map React 2.2.5
- **HTTP Client**: Axios 1.13.2

### Additional Libraries

- **Carousels**: Swiper 12.0.3
- **PDF Generation**: jsPDF 3.0.4
- **Alerts**: SweetAlert2 11.26.10
- **OTP Input**: input-otp 1.4.2
- **UI Framework**: DaisyUI 5.5.14 (dev)

### Development Tools

- **Linting**: ESLint 9.39.1
- **TypeScript Linting**: typescript-eslint 8.46.4
- **Vite React Plugin**: @vitejs/plugin-react 5.1.1

---

## 📁 Project Structure

```
Frontend/
├── public/                          # Static assets
│   └── _redirects                  # Netlify redirect rules
│
├── src/
│   ├── main.tsx                    # React application entry point
│   ├── App.tsx                     # Main App component
│   ├── Router.tsx                  # Route configuration
│   ├── DashboardLayout.tsx         # Layout wrapper for dashboard pages
│   ├── index.css                   # Global styles
│   ├── App.css                     # App-specific styles
│   ├── free-mode.css               # Free mode styles
│   ├── main.tsx                    # React entry point
│   │
│   ├── assets/                     # Images, icons, and media
│   │
│   ├── components/                 # Reusable React components
│   │   ├── app-sidebar.tsx         # Main sidebar component
│   │   ├── AITools/                # AI-powered tools components
│   │   ├── Analytics/              # Analytics related components
│   │   │   └── Subscriptions/      # Subscription management
│   │   ├── Auth/                   # Authentication components
│   │   │   ├── SignIn.tsx
│   │   │   ├── SignUp.tsx
│   │   │   ├── ForgetPassword.tsx
│   │   │   ├── CheckEmail.tsx
│   │   │   ├── NewPassword.tsx
│   │   │   └── OTP.tsx
│   │   ├── campaign/               # Campaign-related components
│   │   ├── Reports/                # Reporting components
│   │   ├── Settings/               # Settings components
│   │   │   ├── Profile.tsx
│   │   │   ├── Security.tsx
│   │   │   ├── BusinessInfo.tsx
│   │   │   ├── Notifications.tsx
│   │   │   ├── ConnectedPlatform.tsx
│   │   │   └── UserSettings.tsx
│   │   ├── Team/                   # Team management components
│   │   └── ui/                     # Reusable UI components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── input-otp.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       └── tooltip.tsx
│   │
│   ├── hooks/                      # Custom React hooks
│   │   └── use-mobile.ts           # Mobile detection hook
│   │
│   ├── lib/                        # Utility functions
│   │   └── utils.ts
│   │
│   ├── pages/                      # Page components (full pages)
│   │   ├── Root.tsx                # Root layout
│   │   ├── ErrorPage/              # Error handling page
│   │   ├── Home/                   # Landing page components
│   │   │   ├── Home.tsx
│   │   │   ├── HowItWorksPage/
│   │   │   ├── Features/
│   │   │   ├── Pricing/
│   │   │   ├── Navbar/
│   │   │   └── Footer/
│   │   ├── Dashboard/              # User dashboard pages
│   │   │   └── UserDashboard/
│   │   │       ├── Dashboard.tsx
│   │   │       ├── Campaigns/      # Campaign list and details
│   │   │       └── ...
│   │   ├── create-campaign/        # Multi-step campaign creation
│   │   │   ├── CreateCampaignLayout.tsx
│   │   │   ├── Step1Platforms.tsx  # Select platforms
│   │   │   ├── Step2Objective.tsx  # Campaign objectives
│   │   │   ├── Step3Audience.tsx   # Audience targeting
│   │   │   ├── Step4Budget.tsx     # Budget allocation
│   │   │   ├── Step5Creative.tsx   # Ad creatives
│   │   │   └── Step6Review.tsx     # Review & launch
│   │   └── admin/                  # Admin-only pages
│   │       ├── AdminDashboard/
│   │       ├── UserManagement/
│   │       ├── CampaignMonitoring/
│   │       ├── ContentModeration/
│   │       ├── Finance/
│   │       ├── PlatformAnalytics/
│   │       ├── AdminSetting/
│   │       └── AdminReport/
│   │
│   ├── Location/                   # Location-based components
│   │   └── Location.tsx
│   │
│   └── types/                      # TypeScript type definitions
│       ├── auth.ts
│       ├── campaign.ts
│       ├── createCampaignStep1.ts
│       ├── createCampaignStep2.ts
│       ├── adPreview.ts
│       ├── recentCampaign.ts
│       ├── charts.ts
│       ├── adminDashboard.ts
│       ├── adminReports.ts
│       ├── contentModeration.ts
│       ├── finance.ts
│       ├── subscription.ts
│       ├── team.ts
│       ├── notifications.ts
│       ├── security.ts
│       └── ... (other type definitions)
│
├── index.html                      # HTML entry point
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.app.json               # App-specific TS config
├── tsconfig.node.json              # Node TS config
├── eslint.config.js                # ESLint configuration
├── components.json                 # Component library config
├── tailwind.config.js              # Tailwind CSS config
├── package.json                    # Project dependencies
└── README.md                        # Project readme
```

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **Git** for version control

### Step 1: Clone the Repository

```bash
git clone https://github.com/naimsheikh8020/Ad-Protal.git
cd Ad-Protal/Frontend
```

### Step 2: Install Dependencies

```bash
npm install
```

Or if you use yarn:

```bash
yarn install
```

### Step 3: Environment Setup

Create a `.env` file in the `Frontend` directory with necessary environment variables:

```env
VITE_API_BASE_URL=http://localhost:3000/api
# Add other environment variables as needed
```

### Step 4: Verify Installation

```bash
npm run lint
```

---

## 🎬 Running the Project

### Development Mode

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port)

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This command:

1. Runs TypeScript type checking (`tsc -b`)
2. Bundles and minifies the code with Vite (`vite build`)
3. Outputs files to the `dist/` directory

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

### Linting

Check code quality and style issues:

```bash
npm run lint
```

To fix auto-fixable issues:

```bash
npm run lint -- --fix
```

---

## 🔄 How It Works

### User Journey

#### 1. **Authentication Flow**

- User visits the application and lands on the home page
- Navigates to sign-up or sign-in
- Completes email verification with OTP
- Upon successful authentication, user is redirected to the user dashboard

#### 2. **Campaign Creation Workflow** (6-Step Process)

```
Step 1: Platform Selection
  ↓
Step 2: Define Campaign Objectives
  ↓
Step 3: Target Audience
  ↓
Step 4: Budget Allocation
  ↓
Step 5: Create/Upload Creatives
  ↓
Step 6: Review & Launch
```

- **Step 1 (Platforms)**: User selects which advertising platforms to use (e.g., Facebook, Google Ads, Instagram)
- **Step 2 (Objective)**: Define campaign goals (brand awareness, conversions, engagement, etc.)
- **Step 3 (Audience)**: Set targeting parameters (location, demographics, interests, behaviors)
- **Step 4 (Budget)**: Allocate daily/total budget and set campaign duration
- **Step 5 (Creative)**: Upload ad images, videos, and write ad copy with AI suggestions
- **Step 6 (Review)**: Review all details and launch the campaign

#### 3. **Campaign Management**

- View active and past campaigns on the Campaigns page
- Monitor performance metrics in real-time
- Access detailed campaign analytics
- Make adjustments to ongoing campaigns

#### 4. **Analytics & Reporting**

- Dashboard displays key performance indicators (KPIs)
- Charts and graphs visualize campaign performance
- Generate custom reports
- Export data for further analysis

#### 5. **AI Tools**

- Copy generation: AI suggests ad copy based on campaign parameters
- Ad preview: Generate preview of how ads will appear on different platforms
- Optimization: AI recommendations for improving campaign performance

#### 6. **Admin Dashboard**

- Admins access `/admin-dashboard` to manage the entire platform
- Monitor all user campaigns
- Review user-generated content
- Manage finances and subscriptions
- View platform-wide analytics

### Data Flow

```
User Input (Form)
  ↓
API Request (Axios)
  ↓
Backend Processing
  ↓
Response/State Update (React State)
  ↓
Component Re-render
  ↓
UI Update
```

### Routing Structure

The application uses React Router for client-side navigation with three main route groups:

1. **Public Routes** (`/`)

   - Home page
   - Features page
   - How it works page
   - Pricing page

2. **Authentication Routes** (`/auth`)

   - Sign in
   - Sign up
   - Password reset
   - Email verification
   - OTP verification

3. **Protected Routes**

   - **User Dashboard** (`/user-dashboard/*`)

     - Campaign management
     - Analytics
     - AI Tools
     - Team management
     - Settings

   - **Admin Dashboard** (`/admin-dashboard/*`)
     - Platform management
     - User management
     - Content moderation
     - Finance tracking

---

## 🏗️ Project Architecture

### Component Architecture

- **Page Components**: Full-screen components representing entire pages
- **Layout Components**: Wrapper components providing structure (sidebar, header)
- **Feature Components**: Domain-specific components (campaigns, analytics)
- **UI Components**: Reusable, generic components from the `ui/` folder
- **Custom Hooks**: Shared logic (e.g., `use-mobile` for responsive design)

### State Management

- Uses React's built-in `useState` hook for local state
- Props drilling for passing data between components
- (Consider implementing Context API or Redux for global state if not already done)

### Styling Strategy

- **Tailwind CSS** for utility-first styling
- **Tailwind Merge** to safely merge Tailwind classes
- **Class Variance Authority (CVA)** for component variants
- **DaisyUI** as a Tailwind component library

### Type Safety

- Full TypeScript implementation
- Type definitions in `src/types/` directory
- Interface definitions for API responses and form data

---

## 📱 Key Components & Pages

### Core UI Components

| Component         | Location         | Purpose                     |
| ----------------- | ---------------- | --------------------------- |
| `app-sidebar.tsx` | `components/`    | Main navigation sidebar     |
| `button`          | `components/ui/` | Reusable button component   |
| `input`           | `components/ui/` | Form input component        |
| `sheet`           | `components/ui/` | Side sheet/drawer component |
| `sidebar`         | `components/ui/` | Sidebar layout component    |
| `skeleton`        | `components/ui/` | Loading skeleton component  |

### Feature Components

| Component   | Location                | Purpose              |
| ----------- | ----------------------- | -------------------- |
| `AITools`   | `components/AITools/`   | AI-powered features  |
| `Analytics` | `components/Analytics/` | Campaign analytics   |
| `Reports`   | `components/Reports/`   | Report generation    |
| `Team`      | `components/Team/`      | Team management      |
| `Auth`      | `components/Auth/`      | Authentication pages |

### Page Components

| Page                   | Route                              | Purpose                  |
| ---------------------- | ---------------------------------- | ------------------------ |
| `Home`                 | `/`                                | Landing page             |
| `UserDashboard`        | `/user-dashboard/dashboard`        | Main user dashboard      |
| `Campaigns`            | `/user-dashboard/campaigns`        | Campaign management      |
| `CreateCampaignLayout` | `/user-dashboard/campaigns-create` | Campaign creation wizard |
| `Analytics`            | `/user-dashboard/analytics`        | Campaign analytics       |
| `AdminDashboard`       | `/admin-dashboard/dashboard`       | Admin control panel      |

---

## 🔐 Security Considerations

- Authentication required for accessing dashboard and admin features
- Protected routes prevent unauthorized access
- Password reset with email verification
- OTP-based two-factor authentication
- Role-based access control for admin features

---

## 📝 Notes

- **Build Output**: Production builds are generated in the `dist/` directory
- **Hot Module Replacement**: Enabled during development for instant feedback
- **API Integration**: Uses Axios for HTTP requests to backend API
- **Responsive Design**: Implements mobile-first responsive design with Tailwind CSS
- **Deployment**: Ready for deployment to platforms like Netlify (see `_redirects` in public folder)

---

## 🤝 Contributing

When working on this project:

1. Follow the existing folder structure
2. Use TypeScript for type safety
3. Keep components focused and reusable
4. Use Tailwind CSS for styling consistency
5. Update type definitions in `src/types/` when needed

---

## 📞 Support

For issues, questions, or contributions, please refer to the GitHub repository:
[https://github.com/naimsheikh8020/Ad-Protal](https://github.com/naimsheikh8020/Ad-Protal)

---

**Last Updated**: January 2026
**Project Version**: 0.0.0
**Status**: Active Development
