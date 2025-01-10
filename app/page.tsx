import * as Tabs from '@radix-ui/react-tabs';
import { RadixCard } from '@/components/RadixCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Next.js 15 Advanced Template
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            A cutting-edge web application starter integrating the latest React 19 and Next.js 15 technologies with modern UI components and developer experience.
          </p>
        </header>

        <section className="mb-16">
          <RadixCard />
        </section>

        <Tabs.Root 
          defaultValue="features" 
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <Tabs.List className="grid grid-cols-3 gap-4 mb-6">
            <Tabs.Trigger 
              value="features" 
              className="data-[state=active]:bg-blue-100 p-3 rounded-lg"
            >
              Features
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="technologies" 
              className="data-[state=active]:bg-blue-100 p-3 rounded-lg"
            >
              Technologies
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="roadmap" 
              className="data-[state=active]:bg-blue-100 p-3 rounded-lg"
            >
              Roadmap
            </Tabs.Trigger>
          </Tabs.List>
          
          <Tabs.Content value="features" className="p-4 bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✨ Next.js 15 with React 19 Integration</li>
              <li>🚀 Turbopack Development Server</li>
              <li>🎨 Shadcn UI Components</li>
              <li>🔒 Type-Safe Development</li>
            </ul>
          </Tabs.Content>

          <Tabs.Content value="technologies" className="p-4 bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Core Technologies</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Frontend</h3>
                <ul className="text-gray-700">
                  <li>React 19</li>
                  <li>Next.js 15</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Styling</h3>
                <ul className="text-gray-700">
                  <li>Tailwind CSS</li>
                  <li>Shadcn UI</li>
                  <li>Radix UI</li>
                </ul>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="roadmap" className="p-4 bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Project Roadmap</h2>
            <div className="space-y-3 text-gray-700">
              <p>🔹 Enhance state management</p>
              <p>🔹 Add more interactive components</p>
              <p>🔹 Improve performance optimizations</p>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </main>
  );
}
