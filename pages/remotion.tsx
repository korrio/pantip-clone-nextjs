import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { IsometricClaudeUI } from '../components/animations/IsometricClaudeUI';

const RemotionPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#252525]">
        <div className="text-[#b1ada1]">Loading animation...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Claude Isometric Animation - Pantip Clone</title>
        <meta name="description" content="Isometric Claude UI animation demonstration" />
      </Head>
      
      <div className="relative">
        {/* Header Controls */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-4">
          <div className="rounded-lg bg-black/50 p-3 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#c15f3c]">
                <span className="text-sm font-bold text-white">R</span>
              </div>
              <div>
                <h1 className="text-sm font-semibold text-white">Remotion Demo</h1>
                <p className="text-xs text-gray-300">Claude Isometric Animation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex gap-2">
            <button
              onClick={() => window.location.href = '/'}
              className="rounded-lg bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            >
              ← Back to Forum
            </button>
            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-[#c15f3c] px-4 py-2 text-sm text-white transition-colors hover:bg-[#a54832]"
            >
              🔄 Restart
            </button>
          </div>
        </div>

        {/* Animation Container */}
        <div 
          className="relative"
          style={{ 
            width: '100vw', 
            height: '100vh',
            overflow: 'hidden'
          }}
        >
          <IsometricClaudeUI />
        </div>

        {/* Animation Info Panel */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#c15f3c]"></div>
                <span>Live Animation Loop</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#b1ada1]"></div>
                <span>~20fps Simulation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Isometric 3D Perspective</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details Panel */}
        <div className="absolute bottom-4 right-4 z-10">
          <div className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
            <div className="space-y-2 text-xs text-gray-300">
              <h3 className="font-semibold text-white">Animation Features:</h3>
              <ul className="space-y-1">
                <li>• Staggered element appearances</li>
                <li>• Floating 3D animations</li>
                <li>• Typing indicator simulation</li>
                <li>• Smooth easing transitions</li>
                <li>• Claude design system colors</li>
                <li>• Thai text integration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Monitor */}
        <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
          <div className="rounded-lg bg-black/50 p-3 backdrop-blur-sm">
            <div className="space-y-2 text-xs text-gray-300">
              <h4 className="font-semibold text-white">Components:</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <span>Browser Chrome</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <span>Sidebar Navigation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <span>Chat Interface</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <span>Floating Elements</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <span>Typography System</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Footer */}
        <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
          <div className="rounded-full bg-black/50 px-6 py-2 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-[#c15f3c] flex items-center justify-center">
                  <span className="text-xs font-bold text-white">A</span>
                </div>
                <span className="font-medium">Anthropic Claude</span>
              </div>
              <span>×</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">Pantip Clone</span>
                <div className="h-4 w-4 rounded bg-[#3c3963] flex items-center justify-center">
                  <span className="text-xs font-bold text-white">P</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemotionPage;