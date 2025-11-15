# PolisPraxis 🏛️

> **Status**: 🚧 In Active Development | Apps4Athens 2.0 2025 Hackathon Project

**Bridging Citizens, Volunteers & Municipality for Collaborative Civic Projects**

A hackathon project for Apps4Athens 2.0 2025 - Building the future of civic engagement in Athens.

## 🎯 Vision

PolisPraxis is a platform that connects citizens who identify local problems or propose civic projects with volunteers, businesses, and the municipality to collaboratively solve issues and improve Athens.

## ✨ Key Features

### 📍 Interactive Map
- Pin problems and project proposals on an Athens map
- Browse active civic projects in your neighborhood
- Real-time location-based filtering

### 🤝 Pledge System (The "WOW" Factor)
- **Citizens** report issues or propose projects with initial funding
- **Volunteers & Businesses** pledge:
  - ⏰ Time (hours of work)
  - 💰 Money (financial contribution)
  - 🛠️ Materials (equipment, supplies)
- Real-time progress tracking for each project

### 🏛️ Municipality Dashboard
- Review and approve community projects
- Co-fund approved initiatives
- Monitor project progress and quality
- Ensure legal compliance

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + Framer Motion
- **Maps**: Leaflet + OpenStreetMap
- **Backend**: Supabase (PostgreSQL + Auth + Real-time)
- **Deployment**: Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase credentials

# Run development server
npm run dev
```

## 🗄️ Database Setup

1. Create a Supabase project at https://supabase.com
2. Run the SQL commands in `src/lib/database.sql`
3. Add your Supabase URL and anon key to `.env.local`

## 🏗️ Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   ├── map/         # Map-related components
│   ├── forms/       # Form components
│   └── layout/      # Layout components
├── lib/             # Core utilities and configs
├── hooks/           # Custom React hooks
├── types/           # TypeScript types
└── utils/           # Helper functions
```

## 🎨 Design Philosophy

- **Intuitive**: Easy for all ages and tech levels
- **Transparent**: Clear project status and progress
- **Collaborative**: Brings community together
- **Official**: Municipality oversight ensures quality

## 🏆 Hackathon Strategy - 24 Hours to Win

### The WOW Factor
The **real-time pledge system** with visual progress bars showing how the community comes together - time, money, and materials - to make projects happen. This creates an emotional connection and shows the power of collective action.

### Development Timeline

**Phase 1 (0-8h)**: Foundation ✅
- Next.js setup with TypeScript
- Database schema design
- Basic UI components library

**Phase 2 (8-18h)**: Core Features
- Interactive map with project pins
- Pledge system implementation
- Municipality dashboard

**Phase 3 (18-24h)**: Polish & Demo
- Animations and micro-interactions
- Demo data and scenarios
- Presentation preparation

## 📱 User Stories

1. **Maria** (65, Retired) - Reports broken sidewalk, contributes €50
2. **Nikos** (28, Developer) - Pledges 10 hours to help digitize park info
3. **Local Hardware Store** - Donates paint for community center renovation
4. **Athens Municipality** - Reviews projects, approves, and co-funds initiatives

## 🌟 MVP Checklist

- [x] Project structure created
- [x] TypeScript types defined
- [x] Database schema designed
- [x] Component structure ready
- [ ] Interactive Athens map
- [ ] Create project with location picker
- [ ] Pledge system (3 types: time/money/materials)
- [ ] Municipality approval flow
- [ ] Real-time progress visualization
- [ ] Mobile responsive design
- [ ] Demo data and presentation

## 📄 License

MIT

## 👤 Author

Sotirios Lympakis - Apps4Athens 2.0 2025

---

**Made with ❤️ for Athens** 🇬🇷