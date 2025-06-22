# Aureeture 2.0 - GenAI Career Copilot Platform

A revolutionary platform that combines artificial intelligence with human expertise to guide students through their career journey, from discovery to achievement.

## 🚀 Features

- **AI-Powered Career Matching**: Get matched with specialized AI copilots based on your skills and goals
- **Personalized Learning Paths**: Custom roadmaps with weekly goals and daily tasks
- **Real-World Projects**: Work on actual company challenges from top tech companies
- **Expert Mentorship**: Connect with industry professionals for guidance
- **Progress Tracking**: Gamified learning with XP points and achievements
- **Portfolio Building**: Verified project submissions via GitHub integration

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, shadcn/ui
- **Backend**: Next.js API Routes (Node.js)
- **Database**: PostgreSQL (planned)
- **Authentication**: NextAuth.js (planned)
- **Deployment**: Vercel

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/aureeture-2.0-frontend.git
cd aureeture-2.0-frontend
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Environment Setup

\`\`\`bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your configuration
nano .env.local
\`\`\`

### 4. Run the Development Server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

\`\`\`
aureeture-2.0-frontend/
├── app/                          # Next.js 14 App Router
│   ├── api/                      # API routes (Node.js backend)
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── copilots/             # AI copilot management
│   │   ├── projects/             # Project management
│   │   ├── mentors/              # Mentor system
│   │   └── users/                # User management
│   ├── career-paths/             # Career paths page
│   ├── contact/                  # Contact page
│   ├── features/                 # Features page
│   ├── how-we-work/              # How we work page
│   ├── mentors/                  # Mentors page
│   ├── projects/                 # Projects page
│   ├── coming-soon/              # Coming soon page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── loading.tsx               # Loading UI
│   ├── not-found.tsx             # 404 page
│   └── page.tsx                  # Homepage
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui components
│   ├── navbar.tsx                # Navigation component
│   ├── footer.tsx                # Footer component
│   └── theme-provider.tsx        # Theme provider
├── lib/                          # Utility functions
│   ├── utils.ts                  # General utilities
│   ├── validations.ts            # Form validations
│   └── constants.ts              # App constants
├── hooks/                        # Custom React hooks
│   ├── use-mobile.tsx            # Mobile detection hook
│   └── use-toast.ts              # Toast notifications
├── types/                        # TypeScript type definitions
│   ├── index.ts                  # Main types
│   ├── api.ts                    # API types
│   └── database.ts               # Database types
├── public/                       # Static assets
│   ├── images/                   # Image assets
│   ├── icons/                    # Icon files
│   └── favicon.ico               # Favicon
├── .env.example                  # Environment variables template
├── .env.local                    # Local environment variables
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
\`\`\`

## 🔧 Configuration

### Environment Variables

The application uses environment variables for configuration. Copy `.env.example` to `.env.local` and update the values:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_APP_NAME` | Application name | Yes |
| `NEXT_PUBLIC_APP_URL` | Application URL | Yes |
| `NEXT_PUBLIC_API_URL` | API base URL | Yes |
| `DATABASE_URL` | PostgreSQL connection string | No (future) |
| `NEXTAUTH_SECRET` | Authentication secret | No (future) |
| `OPENAI_API_KEY` | OpenAI API key for AI features | No (future) |

### Tailwind CSS

The project uses Tailwind CSS for styling with custom configurations:

- Custom color palette for brand consistency
- Responsive design utilities
- Animation classes
- Component-specific styles

## 🎨 UI Components

The project uses shadcn/ui components built on top of Radix UI:

- **Button**: Consistent button styling across the app
- **Card**: Content containers with proper spacing
- **Badge**: Status and category indicators
- **Input/Textarea**: Form input components
- **Select**: Dropdown selection components
- **Avatar**: User profile images
- **Toast**: Notification system

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 320px to 767px

## 🔄 API Routes

### Current API Structure

\`\`\`
/api/
├── /health              # Health check endpoint
├── /contact             # Contact form submission
├── /newsletter          # Newsletter subscription
└── /assessment          # Career assessment (planned)
\`\`\`

### Future API Endpoints

\`\`\`
/api/
├── /auth/               # Authentication
├── /users/              # User management
├── /copilots/           # AI copilot system
├── /projects/           # Project management
├── /mentors/            # Mentor system
├── /progress/           # Progress tracking
└── /payments/           # Payment processing
\`\`\`

## 🧪 Testing

\`\`\`bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Run tests (when implemented)
npm run test
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment

\`\`\`bash
# Build the application
npm run build

# Start production server
npm run start
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages

### Component Guidelines

- Use functional components with hooks
- Implement proper TypeScript types
- Follow the component structure pattern
- Use consistent naming conventions

### API Guidelines

- Use proper HTTP status codes
- Implement error handling
- Validate input data
- Use consistent response formats

## 🔮 Roadmap

### Phase 1 (Current)
- [x] Landing page and marketing site
- [x] Responsive design implementation
- [x] Basic navigation and routing
- [x] Contact form functionality

### Phase 2 (Next)
- [ ] User authentication system
- [ ] AI copilot matching algorithm
- [ ] Project submission system
- [ ] Progress tracking dashboard

### Phase 3 (Future)
- [ ] Payment integration
- [ ] Advanced analytics
- [ ] Mobile application
- [ ] AI chat interface

## 📞 Support

For support and questions:

- **Email**: career@aureeture.in
- **Phone**: +91 7518496446
- **Location**: Bangalore, Karnataka, India

## 📄 License

This project is proprietary software. All rights reserved.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide React** for the icon system
- **Vercel** for hosting and deployment

---

**Built with ❤️ for the next generation of professionals**
