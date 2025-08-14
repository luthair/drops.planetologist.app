# Twitch Drops Tracker 🎮

A beautiful, modern web application for tracking your favorite Twitch streamers and discovering active Twitch drops campaigns. Never miss a drop again!

![Twitch Drops Tracker](https://img.shields.io/badge/Next.js-15.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎯 **Live Streamer Tracking**
- **Real-time monitoring** of your favorite streamers' online status
- **Dynamic grid layout** with beautiful cards showing stream thumbnails, viewer counts, and game categories
- **Auto-refresh** every 30 seconds to keep information current
- **Loading states** with elegant skeleton placeholders

### 📋 **Drops Campaign Management**
- **Interactive accordion interface** for browsing active, upcoming, and ended drop campaigns
- **Detailed campaign information** including requirements, dates, and game titles
- **Full-screen image viewer** for drop screenshots and rewards
- **Smart sorting** by campaign status (active campaigns shown first)

### 🎨 **Beautiful Design**
- **Modern gaming aesthetic** with purple/pink gradient themes
- **Glassmorphism effects** with backdrop blur and transparency
- **Smooth animations** and hover effects throughout the interface
- **Fully responsive** design that works perfectly on all devices
- **Dark theme** optimized for gaming environments

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- A Twitch Developer account (for live data)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/drops.planetologist.app.git
   cd drops.planetologist.app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional for demo)
   ```bash
   cp .env.example .env
   ```
   Add your Twitch API credentials to `.env`:
   ```env
   TWITCH_CLIENT_ID=your_twitch_client_id
   TWITCH_ACCESS_TOKEN=your_twitch_access_token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Twitch API Setup

To use real Twitch data instead of mock data:

1. **Create a Twitch application** at [dev.twitch.tv](https://dev.twitch.tv/console)
2. **Get your Client ID** from the application dashboard
3. **Generate an access token** using the Client Credentials flow
4. **Add credentials to your `.env` file**
5. **Uncomment the real API code** in `src/app/api/streamers/route.ts`

### Customizing Streamers

Edit the streamer list in `src/app/api/streamers/route.ts`:
```typescript
const STREAMER_USERNAMES = [
  "your_favorite_streamer",
  "another_streamer",
  // Add more streamers here
];
```

### Customizing Drops

Update drop campaigns in `src/data/sample-data.ts` or connect to your preferred drops data source.

## 🛠️ Tech Stack

This project is built with:

- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com)** - Accessible component primitives
- **[Lucide React](https://lucide.dev)** - Beautiful icon library
- **[T3 Stack](https://create.t3.gg/)** - Typesafe full-stack development

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler check
- `npm run format:write` - Format code with Prettier

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built on the [T3 Stack](https://create.t3.gg/)
- Icons by [Lucide](https://lucide.dev)
- UI components by [Radix UI](https://www.radix-ui.com)
- Not affiliated with Twitch Interactive, Inc.
