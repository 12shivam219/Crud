# Company Management System

A comprehensive company management application designed for efficient tracking and analysis of corporate data. Built with React, TypeScript, and PostgreSQL.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete company records
- **Company Information Management**: Track detailed company information including:
  - Company Name
  - Founded Year
  - Description
  - Website URL
  - Location (City, Country)
  - Industry Sector
  - Hiring Status
  - Employee Count
  - Growth Indicators
  - LinkedIn Profile
- **Excel Export**: Download company records in Excel format
- **Modern UI**: Clean and responsive interface built with React and shadcn/ui

## Tech Stack

- Frontend: React + TypeScript
- Backend: Node.js + Express
- Database: PostgreSQL
- ORM: Drizzle
- UI Components: shadcn/ui
- Styling: Tailwind CSS
- State Management: TanStack Query
- Form Handling: React Hook Form + Zod
- Excel Export: XLSX

## Setup

1. Clone the repository
```bash
git clone <your-repo-url>
cd company-management
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory and add:
```env
DATABASE_URL=your_postgresql_database_url
```

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── lib/         # Utilities and helpers
│   │   └── pages/       # Page components
├── server/               # Backend Express server
│   ├── routes.ts        # API routes
│   └── storage.ts       # Data storage interface
└── shared/              # Shared types and schemas
    └── schema.ts        # Database schema and types
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
