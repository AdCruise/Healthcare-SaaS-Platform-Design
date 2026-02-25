
# Healthcare SaaS Platform

A modern, full-featured healthcare management SaaS platform built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Frontend:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v7
- **UI Components:** Radix UI + Shadcn/ui
- **Icons:** Lucide React
- **Notifications:** Sonner

## Features

- Modern, responsive UI with dark/light theme support
- Appointment synchronization
- Operatory mapping
- Organization selection
- Secure authentication flows
- Dashboard with analytics
- Mobile-first design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Healthcare SaaS Platform Design"
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── components/       # Reusable UI components
│   │   └── ui/          # Shadcn/ui components
│   ├── pages/           # Page components
│   ├── context/         # React context for state management
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   ├── routes.ts        # Route definitions
│   └── routes.tsx       # Route provider
├── styles/              # Global styles and theme
└── main.tsx             # App entry point
```

## Available Routes

- `/` - Landing page
- `/features` - Features overview
- `/security` - Security information
- `/signin` - Sign in page
- `/signup` - Sign up page
- `/dso-register` - DSO registration
- `/org-select` - Organization selection
- `/dashboard` - Main dashboard
- `/dashboard/operatory-mapping` - Operatory mapping
- `/dashboard/sync-monitor` - Sync monitoring

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is private and confidential.

## Support

For issues or questions, please contact the development team.
