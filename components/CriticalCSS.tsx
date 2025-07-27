import Head from 'next/head'

const CriticalCSS = () => {
  return (
    <Head>
      <style jsx>{`
        /* Critical CSS for above-the-fold content */
        html {
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
          line-height: 1.5;
          -webkit-text-size-adjust: 100%;
          tab-size: 4;
        }
        
        body {
          margin: 0;
          font-family: inherit;
          line-height: inherit;
          background-color: #3c3963;
          color: white;
          overflow-x: hidden;
        }
        
        /* Header critical styles */
        header {
          background-color: #232144;
          position: relative;
          z-index: 50;
        }
        
        nav {
          display: flex;
          align-items: center;
          background-color: #2d2a49;
          border: 1px solid #1f2937;
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.875rem;
          font-weight: 300;
        }
        
        /* Loading state */
        .loading-skeleton {
          background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        /* Mobile-first responsive */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          nav {
            font-size: 0.75rem;
          }
          
          .hidden-mobile {
            display: none;
          }
        }
        
        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          body {
            background-color: #000;
            color: #fff;
          }
          
          header {
            background-color: #000;
            border-bottom: 2px solid #fff;
          }
        }
      `}</style>
    </Head>
  )
}

export default CriticalCSS