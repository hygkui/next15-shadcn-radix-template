# Next.js 15 Advanced Template

## 🚀 Project Overview

This is a cutting-edge web application template integrating the latest technologies:
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI
- Radix UI
- Turbopack

## 🛠 Prerequisites

- Node.js 20+
- pnpm (recommended)

## 🏁 Getting Started

### 1. Clone the Repository
```bash
git clone https://your-repo-url.git
cd your-project-name
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Run Development Server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your application.

## 📦 Adding Components

### Shadcn UI Components
We use the latest `shadcn@latest` for adding UI components:

```bash
# Add a new component
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add dialog
```

### Radix UI Components
Radix UI components are pre-imported. To add new ones:

1. Install the specific Radix package:
```bash
pnpm add @radix-ui/react-[component-name]
```

2. Import in your component:
```typescript
import * as ComponentName from '@radix-ui/react-[component-name]'
```

### Custom Components
Create custom components in the `components/` directory:

```typescript
// components/MyCustomComponent.tsx
'use client'

import React from 'react'

export function MyCustomComponent() {
  return (
    <div>
      {/* Your custom component logic */}
    </div>
  )
}
```

## 🔧 Configuration

### Environment Variables
1. Create a `.env.local` file in the project root
2. Add your environment-specific configurations

Example:
```bash
NEXT_PUBLIC_API_URL=https://your-api.com
NEXT_PUBLIC_FEATURE_FLAG=true
```

## 🌐 Deployment

### Vercel Deployment
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Build for Production
```bash
pnpm build
pnpm start
```

## 📚 Key Features

- 🔥 Cutting-edge Next.js 15 with React 19
- 🚀 Turbopack for lightning-fast development
- 🎨 Shadcn UI and Radix UI components
- 💨 Tailwind CSS for rapid styling
- 🔒 TypeScript for type safety

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🎉 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
