import React from 'react';
import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from '../../lib/mockRemotion';

export const IsometricClaudeUI: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Convert Remotion frame to component's frame system
  const componentFrame = Math.floor((frame * 20) / fps); // Convert to ~20fps equivalent

  // Animation functions
  const interpolateValue = (value: number, inputRange: [number, number], outputRange: [number, number], options: { easing?: string } = {}) => {
    const [inputMin, inputMax] = inputRange;
    const [outputMin, outputMax] = outputRange;
    
    if (value <= inputMin) return outputMin;
    if (value >= inputMax) return outputMax;
    
    const progress = (value - inputMin) / (inputMax - inputMin);
    let easedProgress = progress;
    
    // Apply easing
    if (options.easing === 'easeOut') {
      easedProgress = 1 - Math.pow(1 - progress, 3);
    }
    
    return outputMin + (outputMax - outputMin) * easedProgress;
  };

  // Animation timings
  const containerAppear = interpolateValue(componentFrame, [0, 30], [0, 1], { easing: 'easeOut' });
  const messageAppear = interpolateValue(componentFrame, [40, 70], [0, 1], { easing: 'easeOut' });
  const responseAppear = interpolateValue(componentFrame, [80, 110], [0, 1], { easing: 'easeOut' });
  const sidebarSlide = interpolateValue(componentFrame, [20, 50], [-200, 0], { easing: 'easeOut' });
  
  const typingDots = Math.sin(componentFrame * 0.3) * 0.5 + 0.5;
  const floatingAnimation = Math.sin(componentFrame * 0.1) * 3;

  // Thai text smooth appearance animation
  const textAppearScale = interpolateValue(componentFrame, [120, 140], [0.8, 1], { easing: 'easeOut' });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#252525',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Main Container */}
      <div 
        style={{
          position: 'relative',
          transition: 'all 0.5s ease-out',
          transform: `
            perspective(1000px) 
            rotateX(15deg) 
            rotateY(-10deg) 
            scale(${containerAppear})
            translateY(${floatingAnimation}px)
          `,
          opacity: containerAppear,
        }}
      >
        {/* Browser Window */}
        <div 
          style={{
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            width: '800px',
            height: '600px',
            overflow: 'hidden',
            border: '1px solid rgba(193, 95, 60, 0.3)',
            backgroundColor: '#252525',
          }}
        >
          {/* Browser Header */}
          <div 
            style={{
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              padding: '0 16px',
              borderBottom: '1px solid rgba(193, 95, 60, 0.2)',
              backgroundColor: 'rgba(177, 173, 161, 0.1)',
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#c15f3c' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#b1ada1' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#c15f3c' }}></div>
            </div>
            <div style={{ flex: 1, margin: '0 16px' }}>
              <div 
                style={{
                  borderRadius: '8px',
                  padding: '6px 16px',
                  fontSize: '12px',
                  backgroundColor: 'rgba(37, 37, 37, 0.8)',
                  color: '#b1ada1',
                  border: '1px solid rgba(193, 95, 60, 0.3)',
                }}
              >
                claude.ai
              </div>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 500, color: '#b1ada1' }}>Anthropic Claude</div>
          </div>

          <div style={{ display: 'flex', height: 'calc(100% - 40px)' }}>
            {/* Sidebar */}
            <div 
              style={{
                width: '256px',
                borderRight: '1px solid rgba(193, 95, 60, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                transform: `translateX(${sidebarSlide}px)`,
                backgroundColor: 'rgba(177, 173, 161, 0.05)',
                transition: 'transform 0.8s ease-out',
              }}
            >
              {/* Sidebar Header */}
              <div style={{ padding: '16px', borderBottom: '1px solid rgba(193, 95, 60, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Claude Logo */}
                  <div 
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#c15f3c',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div style={{ width: '24px', height: '24px', color: 'white', fontSize: '20px' }}>●</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '18px', color: '#b1ada1' }}>Claude</div>
                    <div style={{ fontSize: '12px', color: 'rgba(177, 173, 161, 0.7)' }}>by Anthropic</div>
                  </div>
                </div>
              </div>

              {/* Chat History */}
              <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: '#b1ada1' }}>
                  📱 Recent Conversations
                </div>
                {[
                  { title: 'React Component Help', icon: '⚛️' },
                  { title: 'Data Analysis Project', icon: '📊' },
                  { title: 'Creative Writing Ideas', icon: '✍️' },
                  { title: 'Code Review Session', icon: '🔍' }
                ].map((chat, index) => (
                  <div 
                    key={index}
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      fontSize: '14px',
                      opacity: interpolateValue(componentFrame, [30 + index * 5, 60 + index * 5], [0, 1]),
                      transform: `translateY(${interpolateValue(componentFrame, [30 + index * 5, 60 + index * 5], [10, 0])}px)`,
                      backgroundColor: 'rgba(177, 173, 161, 0.1)',
                      color: '#b1ada1',
                      border: '1px solid rgba(193, 95, 60, 0.2)',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '16px' }}>{chat.icon}</span>
                      <span style={{ fontWeight: 500 }}>{chat.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* New Chat Button */}
              <div style={{ padding: '16px', borderTop: '1px solid rgba(193, 95, 60, 0.2)' }}>
                <button 
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 600,
                    backgroundColor: '#c15f3c',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  ➕ Start New Chat
                </button>
              </div>
            </div>

            {/* Main Chat Area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(37, 37, 37, 0.3)' }}>
              {/* Chat Header */}
              <div 
                style={{
                  padding: '16px',
                  borderBottom: '1px solid rgba(193, 95, 60, 0.2)',
                  backgroundColor: 'rgba(177, 173, 161, 0.05)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#c15f3c',
                      }}
                    >
                      <div style={{ width: '20px', height: '20px', color: 'white', fontSize: '16px' }}>●</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: '#b1ada1' }}>Claude Sonnet 4</div>
                      <div style={{ fontSize: '12px', color: 'rgba(177, 173, 161, 0.7)' }}>AI Assistant by Anthropic</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#c15f3c' }}></div>
                    <span style={{ fontSize: '12px', color: 'rgba(177, 173, 161, 0.8)' }}>Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', overflow: 'hidden' }}>
                {/* User Message */}
                <div 
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    opacity: messageAppear,
                    transform: `translateY(${(1 - messageAppear) * 20}px)`,
                    transition: 'all 0.8s ease-out',
                  }}
                >
                  <div 
                    style={{
                      padding: '16px',
                      borderRadius: '16px',
                      maxWidth: '384px',
                      backgroundColor: '#c15f3c',
                      border: '1px solid rgba(193, 95, 60, 0.5)',
                      color: 'white',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                          Can you help me create an isometric animation for a web interface using Claude's design system?
                        </p>
                      </div>
                      <div 
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          fontSize: '12px',
                          marginTop: '2px',
                        }}
                      >
                        👤
                      </div>
                    </div>
                  </div>
                </div>

                {/* Claude Response */}
                <div 
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    opacity: responseAppear,
                    transform: `translateY(${(1 - responseAppear) * 20}px)`,
                    transition: 'all 0.8s ease-out',
                  }}
                >
                  <div style={{ display: 'flex', gap: '12px', maxWidth: '512px' }}>
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#c15f3c',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        flexShrink: 0,
                      }}
                    >
                      <div style={{ width: '24px', height: '24px', color: 'white', fontSize: '20px' }}>●</div>
                    </div>
                    <div 
                      style={{
                        padding: '16px',
                        borderRadius: '16px',
                        backgroundColor: 'rgba(177, 173, 161, 0.1)',
                        border: '1px solid rgba(193, 95, 60, 0.2)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div 
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            padding: '4px 8px',
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(193, 95, 60, 0.2)',
                            color: '#b1ada1',
                          }}
                        >
                          Claude
                        </div>
                        <div style={{ fontSize: '12px', color: 'rgba(177, 173, 161, 0.7)' }}>AI Assistant</div>
                      </div>
                      <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#b1ada1', margin: 0 }}>
                        I'd be delighted to help you create an isometric animation using our design principles! Our design system emphasizes clean aesthetics, thoughtful interaction, and sophisticated color palettes.
                        {componentFrame > 110 && (
                          <>
                            <br/><br/>
                            I'll use our signature colors and clean typography with smooth animations that reflect Claude's intelligent and helpful personality. The isometric perspective will add depth while maintaining clarity and accessibility.
                          </>
                        )}
                      </p>
                      {componentFrame < 110 && (
                        <div style={{ display: 'flex', gap: '4px', marginTop: '12px' }}>
                          <div 
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#c15f3c',
                              opacity: typingDots,
                              transition: 'opacity 0.4s ease-in-out',
                            }}
                          ></div>
                          <div 
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#b1ada1',
                              opacity: Math.sin(componentFrame * 0.3 + 0.5) * 0.5 + 0.5,
                              transition: 'opacity 0.4s ease-in-out',
                            }}
                          ></div>
                          <div 
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#c15f3c',
                              opacity: Math.sin(componentFrame * 0.3 + 1) * 0.5 + 0.5,
                              transition: 'opacity 0.4s ease-in-out',
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div 
                style={{
                  padding: '16px',
                  borderTop: '1px solid rgba(193, 95, 60, 0.2)',
                  backgroundColor: 'rgba(177, 173, 161, 0.05)',
                }}
              >
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div 
                    style={{
                      flex: 1,
                      padding: '16px',
                      border: '1px solid rgba(193, 95, 60, 0.3)',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(37, 37, 37, 0.8)',
                      color: '#b1ada1',
                      fontSize: `${14 * textAppearScale}px`,
                      transform: `scale(${textAppearScale})`,
                      transition: 'all 0.3s ease-out',
                      fontWeight: 400,
                    }}
                  >
                    เว่อเกินไปละไอสัด Claude...
                  </div>
                  <button 
                    style={{
                      padding: '16px',
                      borderRadius: '12px',
                      backgroundColor: '#c15f3c',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div style={{ width: '20px', height: '20px', color: 'white', fontSize: '16px' }}>→</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div 
          style={{
            position: 'absolute',
            top: '-40px',
            right: '-40px',
            width: '80px',
            height: '80px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotateX(15deg) rotateY(-10deg) translateY(${Math.sin(componentFrame * 0.08) * 5}px)`,
            opacity: interpolateValue(componentFrame, [60, 90], [0, 0.8]),
            backgroundColor: '#c15f3c',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <div style={{ width: '40px', height: '40px', color: 'white', fontSize: '32px' }}>⭐</div>
        </div>
        
        <div 
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '-20px',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotateX(15deg) rotateY(-10deg) translateY(${Math.sin(componentFrame * 0.12 + 1) * 7}px)`,
            opacity: interpolateValue(componentFrame, [70, 100], [0, 0.7]),
            backgroundColor: '#b1ada1',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span style={{ color: 'white', fontSize: '24px' }}>🤖</span>
        </div>

        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '-32px',
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotateX(15deg) rotateY(-10deg) translateY(${Math.sin(componentFrame * 0.1 + 2) * 4}px)`,
            opacity: interpolateValue(componentFrame, [80, 110], [0, 0.6]),
            backgroundColor: '#c15f3c',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span style={{ color: 'white', fontSize: '20px' }}>💡</span>
        </div>
      </div>

      {/* Progress Indicator */}
      <div 
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '9999px',
          padding: '12px 24px',
          backgroundColor: 'rgba(193, 95, 60, 0.2)',
          border: '1px solid rgba(193, 95, 60, 0.3)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div style={{ display: 'none', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#b1ada1' }}>
          <div 
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#c15f3c',
              animation: 'pulse 2s infinite',
            }}
          ></div>
          <span style={{ fontWeight: 500 }}>Claude Animation • Frame: {componentFrame}/150</span>
        </div>
      </div>

      {/* Anthropic Branding */}
      <div style={{ position: 'absolute', top: '16px', left: '16px', fontSize: '14px', fontWeight: 500, color: '#b1ada1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div 
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#c15f3c',
            }}
          >
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>A</span>
          </div>
          <span>Anthropic</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};