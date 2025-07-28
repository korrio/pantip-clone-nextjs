import React from 'react';
import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from '../../lib/mockRemotion';

export const PantipRemotion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Convert Remotion frame to component's frame system
  const componentFrame = Math.floor((frame * 20) / fps);

  // Animation functions with custom easing
  const interpolateValue = (value: number, inputRange: [number, number], outputRange: [number, number], options: { easing?: string } = {}) => {
    const [inputMin, inputMax] = inputRange;
    const [outputMin, outputMax] = outputRange;
    
    if (value <= inputMin) return outputMin;
    if (value >= inputMax) return outputMax;
    
    const progress = (value - inputMin) / (inputMax - inputMin);
    let easedProgress = progress;
    
    if (options.easing === 'easeOut') {
      easedProgress = 1 - Math.pow(1 - progress, 3);
    } else if (options.easing === 'easeInOut') {
      easedProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    }
    
    return outputMin + (outputMax - outputMin) * easedProgress;
  };

  // Animation timings for Pantip interface
  const containerScale = interpolateValue(componentFrame, [0, 40], [0.8, 1], { easing: 'easeOut' });
  const headerSlide = interpolateValue(componentFrame, [10, 50], [-100, 0], { easing: 'easeOut' });
  const bannerFade = interpolateValue(componentFrame, [20, 60], [0, 1], { easing: 'easeOut' });
  const navAppear = interpolateValue(componentFrame, [30, 70], [0, 1], { easing: 'easeOut' });
  const categoryGridSlide = interpolateValue(componentFrame, [50, 90], [50, 0], { easing: 'easeOut' });
  const sidebarSlide = interpolateValue(componentFrame, [60, 100], [200, 0], { easing: 'easeOut' });
  const postsAppear = interpolateValue(componentFrame, [80, 120], [0, 1], { easing: 'easeOut' });
  const floatingAnimation = Math.sin(componentFrame * 0.08) * 5;
  const textGlow = Math.sin(componentFrame * 0.15) * 0.3 + 0.7;

  // Thai forum posts data
  const mockPosts = [
    { title: 'แนะนำ MacBook ตัวใหม่สำหรับนักเรียน', tag: 'เทคโนโลยี', user: 'techguru_th', time: '2 นาทีที่แล้ว', replies: 42 },
    { title: 'รีวิวหนัง Avatar 3 เต็มๆ สปอยเยอะ!', tag: 'บันเทิง', user: 'movie_lover2024', time: '5 นาทีที่แล้ว', replies: 128 },
    { title: 'สูตรต้มยำกุ้งแม่น้ำแบบดั้งเดิม', tag: 'อาหาร', user: 'chef_bangkok', time: '12 นาทีที่แล้ว', replies: 67 },
    { title: 'เที่ยวเชียงใหม่ 3 วัน 2 คืน งบ 5000', tag: 'ท่องเที่ยว', user: 'travel_addict', time: '18 นาทีที่แล้ว', replies: 89 }
  ];

  const categories = [
    { name: 'ก้นครัว', icon: '🍳', color: '#FF6B6B' },
    { name: 'กล้อง', icon: '📷', color: '#4ECDC4' },
    { name: 'แกลเลอรี่', icon: '🖼️', color: '#45B7D1' },
    { name: 'ไกลบ้าน', icon: '✈️', color: '#96CEB4' },
    { name: 'จตุจักร', icon: '🐕', color: '#FFEAA7' },
    { name: 'เฉลิมกรุง', icon: '🎵', color: '#DDA0DD' },
    { name: 'เฉลิมไทย', icon: '🎬', color: '#98D8C8' },
    { name: 'ชานเรือน', icon: '👨‍👩‍👧‍👦', color: '#F7DC6F' },
    { name: 'ชายคา', icon: '🏠', color: '#BB8FCE' },
    { name: 'ซิลิคอน', icon: '💻', color: '#85C1E9' }
  ];

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Background Pattern */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #3c3963 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #44416f 0%, transparent 50%)
          `,
        }}
      />

      {/* Main Container */}
      <div 
        style={{
          position: 'relative',
          transform: `
            perspective(1200px) 
            rotateX(10deg) 
            rotateY(-5deg) 
            scale(${containerScale})
            translateY(${floatingAnimation}px)
          `,
          opacity: containerScale,
          width: '1000px',
          height: '700px',
        }}
      >
        {/* Pantip Forum Interface */}
        <div 
          style={{
            borderRadius: '16px',
            boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.4)',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            border: '2px solid rgba(60, 57, 99, 0.5)',
            backgroundColor: '#232144',
          }}
        >
          {/* Header with Banner */}
          <div 
            style={{
              transform: `translateY(${headerSlide}px)`,
              transition: 'transform 0.8s ease-out',
            }}
          >
            {/* Pantip Banner */}
            <div 
              style={{
                height: '100px',
                background: 'linear-gradient(135deg, #232144 0%, #2d2a49 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: bannerFade,
                borderBottom: '2px solid #44416f',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #3c3963 0%, #44416f 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <span style={{ fontSize: '32px', color: '#fbb546' }}>🗣️</span>
                </div>
                <div>
                  <h1 
                    style={{ 
                      fontSize: '42px', 
                      fontWeight: 'bold', 
                      color: '#fbb546',
                      textShadow: `0 0 20px rgba(251, 181, 70, ${textGlow})`,
                      margin: 0,
                      fontFamily: 'Arial, sans-serif'
                    }}
                  >
                    PANTIP
                  </h1>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#d2cde1', 
                    margin: 0,
                    opacity: 0.8 
                  }}>
                    เว็บบอร์ดชุมชนออนไลน์อันดับ 1 ของประเทศไทย
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Bar */}
            <div 
              style={{
                height: '50px',
                backgroundColor: '#2d2a49',
                borderBottom: '1px solid #44416f',
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                opacity: navAppear,
                transform: `translateY(${(1 - navAppear) * 20}px)`,
              }}
            >
              {[
                { name: 'หน้าแรก', icon: '🏠' },
                { name: 'แท็ก', icon: '🏷️' },
                { name: 'กิจกรรม', icon: '🎉' },
                { name: 'แลกพอยต์', icon: '💎' },
                { name: 'ตั้งกระทู้', icon: '✏️' }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '8px 16px',
                    borderRight: '1px solid #44416f',
                    fontSize: '14px',
                    color: '#d2cde1',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: interpolateValue(componentFrame, [40 + index * 5, 70 + index * 5], [0, 1]),
                    transform: `translateX(${interpolateValue(componentFrame, [40 + index * 5, 70 + index * 5], [-20, 0])}px)`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3c3963';
                    e.currentTarget.style.color = '#fbb546';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#d2cde1';
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
              
              {/* Search Box */}
              <div 
                style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  opacity: interpolateValue(componentFrame, [70, 100], [0, 1]),
                }}
              >
                <div 
                  style={{
                    background: '#44416f',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    border: '1px solid #62698d',
                    width: '200px',
                  }}
                >
                  <span style={{ fontSize: '14px', color: '#9e9aa0' }}>ค้นหาในพันทิป...</span>
                </div>
                <button 
                  style={{
                    background: '#fbb546',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  🔍
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div style={{ display: 'flex', height: 'calc(100% - 150px)' }}>
            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
              {/* Category Grid */}
              <div 
                style={{
                  marginBottom: '20px',
                  transform: `translateY(${categoryGridSlide}px)`,
                  opacity: interpolateValue(componentFrame, [50, 90], [0, 1]),
                }}
              >
                <div 
                  style={{
                    background: '#353156',
                    borderRadius: '12px',
                    border: '1px solid #44416f',
                    overflow: 'hidden',
                  }}
                >
                  <div 
                    style={{
                      background: '#1f1d33',
                      padding: '12px 20px',
                      borderBottom: '1px solid #44416f',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <h2 style={{ color: '#fbb546', fontSize: '16px', margin: 0, fontWeight: 600 }}>
                      ห้องสนทนา
                    </h2>
                    <span style={{ color: '#b39dbb', fontSize: '12px' }}>ดูทั้งหมด</span>
                  </div>
                  <div 
                    style={{
                      padding: '16px',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(5, 1fr)',
                      gap: '12px',
                    }}
                  >
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '12px',
                          borderRadius: '12px',
                          background: 'rgba(68, 65, 111, 0.3)',
                          border: '1px solid rgba(68, 65, 111, 0.5)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          opacity: interpolateValue(componentFrame, [60 + index * 3, 90 + index * 3], [0, 1]),
                          transform: `scale(${interpolateValue(componentFrame, [60 + index * 3, 90 + index * 3], [0.8, 1])})`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(68, 65, 111, 0.6)';
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(68, 65, 111, 0.3)';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <div 
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: category.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                          }}
                        >
                          {category.icon}
                        </div>
                        <span style={{ fontSize: '11px', color: '#d2cde1', textAlign: 'center' }}>
                          {category.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Latest Posts */}
              <div 
                style={{
                  background: '#353156',
                  borderRadius: '12px',
                  border: '1px solid #44416f',
                  overflow: 'hidden',
                  opacity: postsAppear,
                  transform: `translateY(${(1 - postsAppear) * 30}px)`,
                }}
              >
                <div 
                  style={{
                    background: '#1f1d33',
                    padding: '12px 20px',
                    borderBottom: '1px solid #44416f',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h2 style={{ color: '#fbb546', fontSize: '16px', margin: 0, fontWeight: 600 }}>
                    กระทู้ล่าสุด
                  </h2>
                  <span style={{ color: '#b39dbb', fontSize: '12px' }}>ปรับแต่งแท็ก</span>
                </div>
                <div style={{ padding: '16px 0' }}>
                  {mockPosts.map((post, index) => (
                    <div
                      key={index}
                      style={{
                        padding: '16px 20px',
                        borderBottom: index < mockPosts.length - 1 ? '1px solid #433f62' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        opacity: interpolateValue(componentFrame, [90 + index * 8, 120 + index * 8], [0, 1]),
                        transform: `translateX(${interpolateValue(componentFrame, [90 + index * 8, 120 + index * 8], [-30, 0])}px)`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#2c2a49';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <div 
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#fbb546',
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <h3 style={{ 
                          fontSize: '14px', 
                          color: '#d2cde1', 
                          margin: '0 0 4px 0',
                          fontWeight: 500,
                        }}>
                          {post.title}
                        </h3>
                        <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: '#62698d' }}>
                          <span>#{post.tag}</span>
                          <span>โดย {post.user}</span>
                          <span>{post.time}</span>
                          <span>{post.replies} ตอบ</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div 
              style={{
                width: '250px',
                borderLeft: '1px solid #44416f',
                transform: `translateX(${sidebarSlide}px)`,
                transition: 'transform 0.8s ease-out',
              }}
            >
              {/* Hot Tags */}
              <div 
                style={{
                  background: '#353156',
                  borderRadius: '12px',
                  border: '1px solid #44416f',
                  margin: '20px',
                  overflow: 'hidden',
                }}
              >
                <div 
                  style={{
                    background: '#1f1d33',
                    padding: '12px 16px',
                    borderBottom: '1px solid #44416f',
                  }}
                >
                  <h3 style={{ color: '#fbb546', fontSize: '14px', margin: 0, fontWeight: 600 }}>
                    แท็กฮิต
                  </h3>
                </div>
                <div style={{ padding: '16px' }}>
                  {[
                    { tag: 'เทคโนโลยี', count: 1234 },
                    { tag: 'บันเทิง', count: 987 },
                    { tag: 'อาหาร', count: 756 },
                    { tag: 'ท่องเที่ยว', count: 543 },
                    { tag: 'ไลฟ์สไตล์', count: 432 }
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        padding: '8px 0',
                        borderBottom: index < 4 ? '1px solid #433f62' : 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        opacity: interpolateValue(componentFrame, [110 + index * 5, 140 + index * 5], [0, 1]),
                      }}
                    >
                      <span style={{ fontSize: '12px', color: '#d2cde1' }}>{item.tag}</span>
                      <span 
                        style={{ 
                          fontSize: '10px', 
                          color: '#9e9aa0',
                          background: '#44416f',
                          padding: '2px 6px',
                          borderRadius: '4px',
                        }}
                      >
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Thai Elements */}
        <div 
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '100px',
            height: '100px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #fbb546 0%, #e09935 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotateX(10deg) rotateY(-5deg) translateY(${Math.sin(componentFrame * 0.06) * 8}px)`,
            opacity: interpolateValue(componentFrame, [80, 120], [0, 0.9]),
            boxShadow: '0 15px 30px rgba(251, 181, 70, 0.3)',
          }}
        >
          <span style={{ fontSize: '40px' }}>🇹🇭</span>
        </div>
        
        <div 
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '-40px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3c3963 0%, #44416f 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotateX(10deg) rotateY(-5deg) translateY(${Math.sin(componentFrame * 0.08 + 1) * 10}px)`,
            opacity: interpolateValue(componentFrame, [100, 140], [0, 0.8]),
            boxShadow: '0 15px 30px rgba(60, 57, 99, 0.4)',
          }}
        >
          <span style={{ fontSize: '32px' }}>💬</span>
        </div>

        <div 
          style={{
            position: 'absolute',
            top: '40%',
            left: '-50px',
            width: '60px',
            height: '60px',
            borderRadius: '15px',
            background: 'linear-gradient(135deg, #d2cde1 0%, #b39dbb 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotateX(10deg) rotateY(-5deg) translateY(${Math.sin(componentFrame * 0.07 + 2) * 6}px)`,
            opacity: interpolateValue(componentFrame, [120, 160], [0, 0.7]),
            boxShadow: '0 15px 30px rgba(210, 205, 225, 0.3)',
          }}
        >
          <span style={{ fontSize: '24px' }}>⭐</span>
        </div>
      </div>

      {/* Background Particles */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#fbb546',
            left: `${20 + index * 10}%`,
            top: `${10 + index * 8}%`,
            opacity: Math.sin(componentFrame * 0.05 + index) * 0.5 + 0.5,
            transform: `translateY(${Math.sin(componentFrame * 0.03 + index * 0.5) * 20}px)`,
          }}
        />
      ))}

      {/* Thai Text Overlay */}
      <div 
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(35, 33, 68, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '16px 32px',
          border: '1px solid rgba(251, 181, 70, 0.3)',
          opacity: interpolateValue(componentFrame, [140, 180], [0, 1]),
          transform: `translateX(-50%) scale(${interpolateValue(componentFrame, [140, 180], [0.8, 1])})`,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            color: '#fbb546', 
            fontSize: '18px', 
            margin: '0 0 8px 0',
            fontWeight: 600,
            textShadow: `0 0 10px rgba(251, 181, 70, ${textGlow})`,
          }}>
            พันทิปดอทคอม
          </h3>
          <p style={{ 
            color: '#d2cde1', 
            fontSize: '12px', 
            margin: 0,
            opacity: 0.8,
          }}>
            ชุมชนออนไลน์ที่ใหญ่ที่สุดในประเทศไทย • เชื่อมต่อคนไทยทั่วโลก
          </p>
        </div>
      </div>

      {/* Performance Indicator */}
      <div 
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '12px 16px',
          border: '1px solid rgba(251, 181, 70, 0.3)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#d2cde1' }}>
          <div 
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#fbb546',
              opacity: Math.sin(componentFrame * 0.2) * 0.5 + 0.5,
            }}
          />
          <span>Pantip Animation • Frame: {componentFrame}/300</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};