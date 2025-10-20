'use client';

import Script from 'next/script';

// Type declaration for global tracking function
declare global {
  interface Window {
    trackCTA?: (ctaName: string, ctaLocation: string) => void;
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] w-full flex justify-center">
      {/* Analytics and conversion tracking */}
      <Script
        id="analytics-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Google Analytics 4 tracking
            (function(g,t,a,c,k,o,p){g.GoogleAnalyticsObject=c;g[c]=g[c]||function(){(g[c].q=g[c].q||[]).push(arguments)};g[c].l=1*t;o=t.createElement(a);p=t.getElementsByTagName(a)[0];o.async=1;o.src='https://www.google-analytics.com/analytics.js';p.parentNode.insertBefore(o,p)})(window,document,'script','ga');
            ga('create', 'GA_MEASUREMENT_ID', 'auto');
            ga('send', 'pageview');
            
            // Conversion tracking for CTA clicks - make it globally available
            window.trackCTA = function(ctaName, ctaLocation) {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: ctaName,
                  custom_parameter_1: ctaLocation
                });
              }
              // Fallback to console for debugging
              console.log('CTA Clicked:', ctaName, 'Location:', ctaLocation);
            }
            
            // Track scroll depth
            let maxScroll = 0;
            window.addEventListener('scroll', function() {
              const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
              if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'scroll', {
                    event_category: 'Engagement',
                    event_label: 'Scroll Depth',
                    value: scrollPercent
                  });
                }
              }
            });
          `
        }}
      />
      <div className="w-full max-w-7xl">
      {/* Header */}
      <header className="border-2 border-[#111111] bg-white p-4 md:p-6 w-full">
        <div className="flex justify-center items-center">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#111111] uppercase">
            BLAZE IT
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FF4500]/10 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-[#111111]/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FF4500]/5 rounded-full animate-ping"></div>
        </div>
        
        <div className="text-center w-full relative z-10">
          {/* Trust indicators */}
          <div className="mb-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-[#111111]/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>LIVE ON APTOS</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF4500] rounded-full"></div>
              <span>1000+ ACTIVE TRADERS</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>$50K+ PRIZE POOLS</span>
            </div>
          </div>

          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-[#111111] mb-6 sm:mb-8 md:mb-12 lg:mb-16 leading-none uppercase">
            <span className="inline-block hover:scale-110 transition-transform duration-500">TRADE</span>
            <br />
            <span className="text-[#FF4500] inline-block hover:scale-110 transition-transform duration-500 delay-100">CRYPTO</span>
            <br />
            <span className="inline-block hover:scale-110 transition-transform duration-500 delay-200">LIKE A</span>
            <br />
            <span className="text-[#FF4500] inline-block hover:scale-110 transition-transform duration-500 delay-300">GAME</span>
          </div>
          
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#111111] mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 max-w-4xl mx-auto px-4 font-mono font-medium uppercase tracking-wider text-center" style={{textAlign: 'center'}}>
            <span className="animate-fade-in-up">SWIPE. TRADE. WIN.</span> A GAMIFIED CRYPTO TRADING PLATFORM ON APTOS WITH COMPETITIVE PORTFOLIO QUESTS.
          </div>

          {/* Enhanced CTA buttons with urgency */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center px-4 mb-8">
            <a href="https://trade.blazeit.app" target="_blank" rel="noopener noreferrer" className="relative bg-[#FF4500] text-white border-2 border-[#111111] px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-5 md:py-6 lg:py-7 font-mono font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase tracking-wider hover:bg-[#111111] hover:text-[#FF4500] hover:scale-105 hover:-rotate-1 transition-all duration-300 w-full sm:w-auto min-h-[44px] flex items-center justify-center group overflow-hidden" onClick={() => window.trackCTA?.('Start Trading', 'Hero Section')}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative group-hover:animate-pulse">START TRADING</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </a>
            <a href="https://quest.blazeit.app" target="_blank" rel="noopener noreferrer" className="bg-white text-[#111111] border-2 border-[#111111] px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-5 md:py-6 lg:py-7 font-mono font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase tracking-wider hover:bg-[#111111] hover:text-white hover:scale-105 hover:rotate-1 transition-all duration-300 w-full sm:w-auto min-h-[44px] flex items-center justify-center group" onClick={() => window.trackCTA?.('View Quests', 'Hero Section')}>
              <span className="group-hover:animate-bounce">VIEW QUESTS</span>
            </a>
          </div>

          {/* Social proof */}
          <div className="text-xs sm:text-sm font-mono text-[#111111]/60 uppercase tracking-wider">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <span>⚡ INSTANT EXECUTION</span>
              <span>🎮 GAMIFIED EXPERIENCE</span>
              <span>🏆 COMPETITIVE REWARDS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full bg-white">
        <div className="w-full">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] uppercase mb-6">
              JOIN THE REVOLUTION
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF4500] mb-2">1,247</div>
                <div className="text-sm sm:text-base font-mono text-[#111111] uppercase tracking-wider">ACTIVE TRADERS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF4500] mb-2">$127K</div>
                <div className="text-sm sm:text-base font-mono text-[#111111] uppercase tracking-wider">TOTAL VOLUME</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF4500] mb-2">89%</div>
                <div className="text-sm sm:text-base font-mono text-[#111111] uppercase tracking-wider">WIN RATE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 md:py-40 lg:py-48 xl:py-56 2xl:py-64 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
        <div className="w-full">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-20 sm:mb-24 md:mb-32 lg:mb-40 text-[#111111] uppercase">
            HOW IT WORKS
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full">
            {/* Trade Feature */}
            <div className="bg-white border-2 border-[#111111] p-4 sm:p-6 md:p-8 relative m-2 sm:m-3 md:m-4 group hover:scale-105 hover:rotate-1 transition-all duration-500 cursor-pointer transform-gpu">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FF4500] -z-10 group-hover:bg-[#111111] transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-[#FF4500] group-hover:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-colors duration-500 group-hover:animate-pulse">01</div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#111111] group-hover:text-white uppercase transition-colors duration-500">TRADE</div>
              <div className="text-xs sm:text-sm md:text-base text-[#111111] group-hover:text-white mb-6 font-mono font-medium uppercase tracking-wider transition-colors duration-500">
                SWIPE-BASED INTERFACE FOR TOKEN DISCOVERY. SWIPE RIGHT TO BUY, LEFT TO SKIP, UP TO WATCHLIST.
              </div>
              <div className="border-2 border-[#111111] bg-[#FF4500] group-hover:bg-white text-white group-hover:text-[#111111] p-3 sm:p-4 text-center font-mono font-semibold text-xs sm:text-sm md:text-base uppercase transition-all duration-500 group-hover:scale-105">
                FULL-SCREEN EXPERIENCE
              </div>
              {/* Mobile touch indicator */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#FF4500] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
            </div>

            {/* Analysis Feature */}
            <div className="bg-white border-2 border-[#111111] p-4 sm:p-6 md:p-8 relative m-2 sm:m-3 md:m-4 group hover:scale-105 hover:-rotate-1 transition-all duration-500 cursor-pointer transform-gpu">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FF4500] -z-10 group-hover:bg-[#111111] transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#111111]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-[#FF4500] group-hover:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-colors duration-500 group-hover:animate-bounce">02</div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#111111] group-hover:text-white uppercase transition-colors duration-500">ANALYSIS</div>
              <div className="text-xs sm:text-sm md:text-base text-[#111111] group-hover:text-white mb-6 font-mono font-medium uppercase tracking-wider transition-colors duration-500">
                MINIMALIST DASHBOARD SHOWCASING YOUR PORTFOLIO VALUE, PROFIT/LOSS, AND HOLDINGS PERFORMANCE.
              </div>
              <div className="border-2 border-[#111111] bg-[#111111] group-hover:bg-white text-white group-hover:text-[#111111] p-3 sm:p-4 text-center font-mono font-semibold text-xs sm:text-sm md:text-base uppercase transition-all duration-500 group-hover:scale-105">
                REAL-TIME METRICS
              </div>
              {/* Live data indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-green-500">LIVE</span>
              </div>
            </div>

            {/* Quest Feature */}
            <div className="bg-white border-2 border-[#111111] p-4 sm:p-6 md:p-8 relative m-2 sm:m-3 md:m-4 group hover:scale-105 hover:rotate-1 transition-all duration-500 cursor-pointer transform-gpu">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FF4500] -z-10 group-hover:bg-[#111111] transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-[#FF4500] group-hover:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-colors duration-500 group-hover:animate-spin">03</div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#111111] group-hover:text-white uppercase transition-colors duration-500">QUEST</div>
              <div className="text-xs sm:text-sm md:text-base text-[#111111] group-hover:text-white mb-6 font-mono font-medium uppercase tracking-wider transition-colors duration-500">
                COMPETITIVE, TIME-BASED PORTFOLIO CHALLENGES WITH PRIZE POOLS. BUILD VIRTUAL PORTFOLIOS.
              </div>
              <div className="border-2 border-[#111111] bg-[#F5F5F5] group-hover:bg-[#111111] text-[#111111] group-hover:text-white p-3 sm:p-4 text-center font-mono font-semibold text-xs sm:text-sm md:text-base uppercase transition-all duration-500 group-hover:scale-105">
                COMPETE & WIN
              </div>
              {/* Prize indicator */}
              <div className="absolute top-4 right-4 text-xs font-mono text-[#FF4500] font-bold">
                $5K PRIZE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Experience */}
      <section className="py-24 sm:py-32 md:py-40 lg:py-48 xl:py-56 2xl:py-64 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white w-full">
        <div className="w-full text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-20 sm:mb-24 md:mb-32 lg:mb-40 text-[#111111] uppercase">
            INTERACTIVE EXPERIENCE
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 w-full">
            <div className="bg-white border-2 border-[#111111] p-6 sm:p-8 md:p-10 relative m-2 sm:m-3 md:m-4 group hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FF4500] -z-10 group-hover:bg-[#111111] transition-colors duration-300"></div>
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-[#FF4500] group-hover:text-white transition-colors duration-300">3D</div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#111111] group-hover:text-white transition-colors duration-300 uppercase">WEBGL VISUALS</div>
              <div className="text-sm sm:text-base md:text-lg text-[#111111] group-hover:text-white transition-colors duration-300 font-mono font-medium uppercase tracking-wider mb-6">
                IMMERSIVE 3D TRADING INTERFACE WITH REAL-TIME PARTICLE EFFECTS AND DYNAMIC LIGHTING.
              </div>
              <div className="border-2 border-[#111111] bg-[#FF4500] group-hover:bg-white text-white group-hover:text-[#111111] p-4 text-center font-mono font-semibold text-sm sm:text-base md:text-lg uppercase transition-all duration-300">
                INTERACTIVE 3D
              </div>
            </div>

            <div className="bg-white border-2 border-[#111111] p-6 sm:p-8 md:p-10 relative m-2 sm:m-3 md:m-4 group hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#111111] -z-10 group-hover:bg-[#FF4500] transition-colors duration-300"></div>
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-[#111111] group-hover:text-white transition-colors duration-300">⚡</div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#111111] group-hover:text-white transition-colors duration-300 uppercase">SVELTE MICROINTERACTIONS</div>
              <div className="text-sm sm:text-base md:text-lg text-[#111111] group-hover:text-white transition-colors duration-300 font-mono font-medium uppercase tracking-wider mb-6">
                SMOOTH ANIMATIONS AND RESPONSIVE INTERACTIONS THAT MAKE EVERY SWIPE FEEL REWARDING.
              </div>
              <div className="border-2 border-[#111111] bg-[#111111] group-hover:bg-[#FF4500] text-white group-hover:text-white p-4 text-center font-mono font-semibold text-sm sm:text-base md:text-lg uppercase transition-all duration-300">
                FLUID MOTION
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20">
            <div className="bg-white border-2 border-[#111111] p-6 sm:p-8 md:p-10 relative m-2 sm:m-3 md:m-4 group hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#F5F5F5] -z-10 group-hover:bg-[#FF4500] transition-colors duration-300"></div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#111111] group-hover:text-white transition-colors duration-300">🎮</div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#111111] group-hover:text-white transition-colors duration-300 uppercase">GAMIFIED INTERFACE</div>
              <div className="text-sm sm:text-base md:text-lg text-[#111111] group-hover:text-white transition-colors duration-300 font-mono font-medium uppercase tracking-wider mb-6 max-w-4xl mx-auto text-center" style={{textAlign: 'center'}}>
                COMBINING WEBGL&apos;S 3D CAPABILITIES WITH SVELTE&apos;S REACTIVE MICROINTERACTIONS TO CREATE AN UNPRECEDENTED TRADING EXPERIENCE.
              </div>
              <div className="border-2 border-[#111111] bg-[#F5F5F5] group-hover:bg-[#111111] text-[#111111] group-hover:text-white p-4 text-center font-mono font-semibold text-sm sm:text-base md:text-lg uppercase transition-all duration-300">
                NEXT-GEN TRADING
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Touch Experience */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full bg-[#F5F5F5]">
        <div className="w-full text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#111111] uppercase">
            MOBILE-FIRST DESIGN
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white border-2 border-[#111111] p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">👆</div>
              <div className="text-lg font-bold text-[#111111] uppercase mb-2">SWIPE GESTURES</div>
              <div className="text-sm font-mono text-[#111111]/70 uppercase tracking-wider">INTUITIVE TOUCH CONTROLS</div>
            </div>
            <div className="bg-white border-2 border-[#111111] p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-lg font-bold text-[#111111] uppercase mb-2">INSTANT FEEDBACK</div>
              <div className="text-sm font-mono text-[#111111]/70 uppercase tracking-wider">REAL-TIME ANIMATIONS</div>
            </div>
            <div className="bg-white border-2 border-[#111111] p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-lg font-bold text-[#111111] uppercase mb-2">PRECISION TRADING</div>
              <div className="text-sm font-mono text-[#111111]/70 uppercase tracking-wider">ACCURATE TOUCH TARGETS</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 md:py-40 lg:py-48 xl:py-56 2xl:py-64 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full relative overflow-hidden">
        {/* Urgency background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#FF4500]/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#111111]/5 rounded-full animate-bounce"></div>
        </div>
        
        <div className="text-center w-full relative z-10">
          {/* Urgency indicator */}
          <div className="mb-8 inline-flex items-center gap-2 bg-[#FF4500] text-white px-4 py-2 rounded-full text-sm font-mono font-semibold uppercase tracking-wider animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            LIMITED TIME: 50% BONUS REWARDS
          </div>
          
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 text-[#111111] uppercase leading-none">
            <span className="inline-block hover:scale-110 transition-transform duration-500">READY TO</span>
            <br />
            <span className="text-[#FF4500] inline-block hover:scale-110 transition-transform duration-500 delay-100">BLAZE IT?</span>
          </div>
          
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#111111] mb-16 sm:mb-20 md:mb-24 lg:mb-32 xl:mb-40 max-w-4xl mx-auto px-4 font-mono font-medium uppercase tracking-wider text-center" style={{textAlign: 'center'}}>
            JOIN THE REVOLUTIONARY TRADING EXPERIENCE. CONNECT YOUR WALLET AND START SWIPING YOUR WAY TO PROFITS.
          </div>

          {/* Enhanced CTA buttons with FOMO */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 justify-center items-center px-4 mb-8">
            <a href="https://trade.blazeit.app" target="_blank" rel="noopener noreferrer" className="relative bg-[#FF4500] text-white border-2 border-[#111111] px-10 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-5 sm:py-6 md:py-7 lg:py-8 font-mono font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase tracking-wider hover:bg-[#111111] hover:text-[#FF4500] hover:scale-110 hover:-rotate-2 transition-all duration-500 w-full sm:w-auto min-h-[44px] flex items-center justify-center group overflow-hidden" onClick={() => window.trackCTA?.('Launch App', 'Final CTA')}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative group-hover:animate-pulse">LAUNCH APP</span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            </a>
            <a href="https://github.com/Blaze-Trade/" target="_blank" rel="noopener noreferrer" className="bg-[#111111] text-white border-2 border-[#111111] px-10 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-5 sm:py-6 md:py-7 lg:py-8 font-mono font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase tracking-wider hover:bg-[#FF4500] hover:scale-110 hover:rotate-2 transition-all duration-500 w-full sm:w-auto min-h-[44px] flex items-center justify-center group" onClick={() => window.trackCTA?.('Read Docs', 'Final CTA')}>
              <span className="group-hover:animate-bounce">READ DOCS</span>
            </a>
          </div>

          {/* Social proof and urgency */}
          <div className="text-xs sm:text-sm font-mono text-[#111111]/60 uppercase tracking-wider">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
              <span>🔥 1,247 TRADERS ONLINE NOW</span>
              <span>⚡ INSTANT EXECUTION</span>
              <span>🏆 $50K+ PRIZE POOLS</span>
            </div>
            <div className="text-[#FF4500] font-bold">
              ⚠️ BONUS REWARDS END IN 24 HOURS
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-2 border-[#111111] bg-[#111111] text-white p-6 sm:p-8 md:p-10 w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            <div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white uppercase">BLAZE IT</div>
              <div className="text-xs sm:text-sm font-mono font-medium text-white/80 uppercase tracking-wider">
                GAMIFIED CRYPTO TRADING ON APTOS
              </div>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-mono font-semibold mb-4 text-white uppercase tracking-wider">PLATFORM</div>
              <div className="space-y-2 text-white/80 font-mono text-xs sm:text-sm">
                <div>Trade</div>
                <div>Analysis</div>
                <div>Quests</div>
                <div>Leaderboard</div>
              </div>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-mono font-semibold mb-4 text-white uppercase tracking-wider">CONNECT</div>
              <div className="space-y-2 text-white/80 font-mono text-xs sm:text-sm">
                <a href="https://x.com/blaze_aptos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 block">
                  Twitter
                </a>
                <a href="https://github.com/Blaze-Trade/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 block">
                  GitHub
                </a>
                <a href="mailto:team.blazetrade@gmail.com" className="hover:text-white transition-colors duration-200 block">
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <div className="text-xs sm:text-sm font-mono font-medium text-white/60 uppercase tracking-wider">
              © 2025 BLAZE IT. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
