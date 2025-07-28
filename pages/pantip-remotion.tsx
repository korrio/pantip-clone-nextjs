import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { PantipRemotion } from '../components/animations/PantipRemotion';

const PantipRemotionPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#fbb546] border-t-transparent"></div>
          </div>
          <div className="text-[#d2cde1]">กำลังโหลดแอนิเมชัน Pantip...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Pantip Forum Animation - พันทิป แอนิเมชัน</title>
        <meta name="description" content="Sophisticated Pantip forum interface animation with authentic Thai elements" />
        <meta name="keywords" content="pantip, animation, thai forum, remotion, pantip clone" />
      </Head>
      
      <div className="relative">
        {/* Header Controls */}
        <div className="absolute top-6 left-6 z-20">
          <div className="rounded-2xl bg-black/50 p-4 backdrop-blur-md border border-[#fbb546]/20">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#fbb546] to-[#e09935]">
                <span className="text-lg font-bold text-white">พ</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Pantip Animation</h1>
                <p className="text-sm text-gray-300">พันทิป แอนิเมชัน เดโม</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation & Controls */}
        <div className="absolute top-6 right-6 z-20">
          <div className="flex gap-3">
            <button
              onClick={() => window.location.href = '/'}
              className="rounded-xl bg-black/50 px-5 py-3 text-sm text-white backdrop-blur-md border border-white/10 transition-all hover:bg-black/70 hover:border-[#fbb546]/30"
            >
              ← กลับสู่ฟอรัม
            </button>
            <button
              onClick={() => window.location.href = '/remotion'}
              className="rounded-xl bg-[#3c3963]/80 px-5 py-3 text-sm text-white backdrop-blur-md border border-[#3c3963] transition-all hover:bg-[#3c3963]"
            >
              Claude Demo
            </button>
            <button
              onClick={() => window.location.reload()}
              className="rounded-xl bg-gradient-to-r from-[#fbb546] to-[#e09935] px-5 py-3 text-sm text-white transition-all hover:from-[#e09935] hover:to-[#d18829]"
            >
              🔄 รีสตาร์ท
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
          <PantipRemotion />
        </div>

        {/* Animation Features Panel */}
        <div className="absolute bottom-6 left-6 z-20">
          <div className="rounded-2xl bg-black/50 p-5 backdrop-blur-md border border-[#fbb546]/20 max-w-sm">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#fbb546] mb-3">✨ คุณสมบัติแอนิเมชัน</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#fbb546]"></div>
                  <span>แอนิเมชันไอโซเมตริก 3D</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#3c3963]"></div>
                  <span>อินเทอร์เฟซพันทิปแท้</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#d2cde1]"></div>
                  <span>เอฟเฟกต์ลอยและกระจาย</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>กระทู้และหมวดหมู่จริง</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>ภาษาไทยและเนื้อหาแท้</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span>การเปลี่ยนผ่านแบบลื่น</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs Panel */}
        <div className="absolute top-1/2 right-6 z-20 -translate-y-1/2">
          <div className="rounded-2xl bg-black/50 p-5 backdrop-blur-md border border-[#3c3963]/30 max-w-xs">
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white mb-3">🔧 ข้อมูลทางเทคนิค</h4>
              <div className="space-y-2.5 text-xs text-gray-300">
                <div className="flex items-center justify-between">
                  <span>เฟรมเรต:</span>
                  <span className="text-[#fbb546]">~20 FPS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>ความละเอียด:</span>
                  <span className="text-[#fbb546]">1000×700</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>มุมมอง:</span>
                  <span className="text-[#fbb546]">Isometric 3D</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>ระยะเวลา:</span>
                  <span className="text-[#fbb546]">15 วินาที</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>ลูปแอนิเมชัน:</span>
                  <span className="text-green-400">เปิด</span>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-600">
                <h5 className="text-xs font-semibold text-white mb-2">คอมโพเนนต์:</h5>
                <div className="space-y-1.5 text-xs">
                  {[
                    { name: 'แบนเนอร์หลัก', status: 'active' },
                    { name: 'เมนูนำทาง', status: 'active' },
                    { name: 'ห้องสนทนา', status: 'active' },
                    { name: 'กระทู้ล่าสุด', status: 'active' },
                    { name: 'แท็กฮิต', status: 'active' },
                    { name: 'เอฟเฟกต์ลอย', status: 'active' }
                  ].map((component, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`h-1.5 w-1.5 rounded-full ${component.status === 'active' ? 'bg-green-400' : 'bg-gray-500'}`}></div>
                      <span className="text-gray-300">{component.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Progress */}
        <div className="absolute bottom-6 right-6 z-20">
          <div className="rounded-2xl bg-black/50 p-4 backdrop-blur-md border border-[#3c3963]/30">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white">⏱️ ไทม์ไลน์แอนิเมชัน</h4>
              <div className="space-y-1.5 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>0-2s:</span>
                  <span className="text-[#fbb546]">ปรากฏคอนเทนเนอร์</span>
                </div>
                <div className="flex justify-between">
                  <span>1-3s:</span>
                  <span className="text-[#fbb546]">สไลด์หัวเรื่อง</span>
                </div>
                <div className="flex justify-between">
                  <span>2-4s:</span>
                  <span className="text-[#fbb546]">เมนูนำทาง</span>
                </div>
                <div className="flex justify-between">
                  <span>3-5s:</span>
                  <span className="text-[#fbb546]">ห้องสนทนา</span>
                </div>
                <div className="flex justify-between">
                  <span>4-6s:</span>
                  <span className="text-[#fbb546]">กระทู้ล่าสุด</span>
                </div>
                <div className="flex justify-between">
                  <span>7-9s:</span>
                  <span className="text-[#fbb546]">ข้อความไทย</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Integration */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
          <div className="rounded-full bg-black/50 px-8 py-3 backdrop-blur-md border border-[#fbb546]/20">
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-[#fbb546] to-[#e09935] flex items-center justify-center">
                  <span className="text-xs font-bold text-white">พ</span>
                </div>
                <span className="font-semibold text-[#fbb546]">Pantip Clone</span>
              </div>
              <span className="text-gray-500">×</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Remotion Animation</span>
                <div className="h-6 w-6 rounded bg-[#3c3963] flex items-center justify-center">
                  <span className="text-xs font-bold text-white">R</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Stats */}
        <div className="absolute top-1/2 left-6 z-20 -translate-y-1/2">
          <div className="rounded-2xl bg-black/50 p-4 backdrop-blur-md border border-green-500/20">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-green-400 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                สถิติสด
              </h4>
              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>กระทู้ทั้งหมด:</span>
                  <span className="text-green-400 font-mono">25</span>
                </div>
                <div className="flex justify-between">
                  <span>ห้องสนทนา:</span>
                  <span className="text-green-400 font-mono">10</span>
                </div>
                <div className="flex justify-between">
                  <span>แท็กฮิต:</span>
                  <span className="text-green-400 font-mono">5</span>
                </div>
                <div className="flex justify-between">
                  <span>ผู้ใช้ออนไลน์:</span>
                  <span className="text-green-400 font-mono">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span>ความเร็ว:</span>
                  <span className="text-green-400 font-mono">60fps</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Status */}
        <div className="absolute top-6 left-1/2 z-20 -translate-x-1/2">
          <div className="rounded-full bg-gradient-to-r from-[#fbb546] to-[#e09935] px-6 py-2 shadow-lg">
            <div className="flex items-center gap-3 text-sm font-semibold text-white">
              <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
              <span>กำลังเล่นแอนิเมชันพันทิป</span>
              <div className="h-2 w-2 rounded-full bg-white/70"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PantipRemotionPage;