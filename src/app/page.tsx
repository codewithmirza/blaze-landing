export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] w-full">
      {/* Header */}
      <header className="brutalist-border bg-white p-4 md:p-6">
        <div className="flex justify-center items-center">
          <div className="brutalist-text-medium text-[#111111]">
            BLAZE IT
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
        <div className="text-center max-w-7xl mx-auto w-full">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#111111] mb-6 sm:mb-8 md:mb-12 leading-none uppercase">
            TRADE
            <br />
            <span className="text-[#FF4500]">CRYPTO</span>
            <br />
            LIKE A
            <br />
            <span className="text-[#FF4500]">GAME</span>
          </div>
          
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#111111] mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-3xl mx-auto px-4 font-mono font-medium uppercase tracking-wider">
            SWIPE. TRADE. WIN. A GAMIFIED CRYPTO TRADING PLATFORM ON APTOS WITH COMPETITIVE PORTFOLIO QUESTS.
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4">
            <button className="bg-[#FF4500] text-white border-2 border-[#111111] px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 font-mono font-semibold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider hover:bg-[#111111] hover:text-[#FF4500] transition-all duration-100 w-full sm:w-auto min-h-[44px]">
              START TRADING
            </button>
            <button className="bg-white text-[#111111] border-2 border-[#111111] px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 font-mono font-semibold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider hover:bg-[#111111] hover:text-white transition-all duration-100 w-full sm:w-auto min-h-[44px]">
              VIEW QUESTS
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-[#111111] uppercase">
            HOW IT WORKS
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
            {/* Trade Feature */}
            <div className="bg-white border-2 border-[#111111] p-4 sm:p-6 md:p-8 relative m-2 sm:m-3 md:m-4">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FF4500] -z-10"></div>
              <div className="text-[#FF4500] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">01</div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#111111] uppercase">TRADE</div>
              <div className="text-xs sm:text-sm md:text-base text-[#111111] mb-6 font-mono font-medium uppercase tracking-wider">
                SWIPE-BASED INTERFACE FOR TOKEN DISCOVERY. SWIPE RIGHT TO BUY, LEFT TO SKIP, UP TO WATCHLIST.
              </div>
              <div className="border-2 border-[#111111] bg-[#FF4500] text-white p-3 sm:p-4 text-center font-mono font-semibold text-xs sm:text-sm md:text-base uppercase">
                FULL-SCREEN EXPERIENCE
              </div>
            </div>

            {/* Analysis Feature */}
            <div className="bg-white border-2 border-[#111111] p-4 sm:p-6 md:p-8 relative m-2 sm:m-3 md:m-4">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FF4500] -z-10"></div>
              <div className="text-[#FF4500] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">02</div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#111111] uppercase">ANALYSIS</div>
              <div className="text-xs sm:text-sm md:text-base text-[#111111] mb-6 font-mono font-medium uppercase tracking-wider">
                MINIMALIST DASHBOARD SHOWCASING YOUR PORTFOLIO VALUE, PROFIT/LOSS, AND HOLDINGS PERFORMANCE.
              </div>
              <div className="border-2 border-[#111111] bg-[#111111] text-white p-3 sm:p-4 text-center font-mono font-semibold text-xs sm:text-sm md:text-base uppercase">
                REAL-TIME METRICS
              </div>
            </div>

            {/* Quest Feature */}
            <div className="bg-white border-2 border-[#111111] p-4 sm:p-6 md:p-8 relative m-2 sm:m-3 md:m-4">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FF4500] -z-10"></div>
              <div className="text-[#FF4500] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">03</div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#111111] uppercase">QUEST</div>
              <div className="text-xs sm:text-sm md:text-base text-[#111111] mb-6 font-mono font-medium uppercase tracking-wider">
                COMPETITIVE, TIME-BASED PORTFOLIO CHALLENGES WITH PRIZE POOLS. BUILD VIRTUAL PORTFOLIOS.
              </div>
              <div className="border-2 border-[#111111] bg-[#F5F5F5] text-[#111111] p-3 sm:p-4 text-center font-mono font-semibold text-xs sm:text-sm md:text-base uppercase">
                COMPETE & WIN
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Details */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-[#111111] uppercase">
            PLATFORM SPECS
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
            <div className="bg-white border-2 border-[#111111] p-4 sm:p-6 md:p-8 relative m-2 sm:m-3 md:m-4">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FF4500] -z-10"></div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-[#111111] uppercase">TECH STACK</div>
              <div className="space-y-3 sm:space-y-4">
                <div className="border-2 border-[#111111] bg-[#F5F5F5] p-3 sm:p-4">
                  <div className="text-xs sm:text-sm font-mono font-semibold text-[#FF4500] mb-2 uppercase">FRONTEND</div>
                  <div className="text-sm sm:text-base text-[#111111] font-mono">React + Vite + TailwindCSS</div>
                </div>
                <div className="border-2 border-[#111111] bg-[#F5F5F5] p-3 sm:p-4">
                  <div className="text-xs sm:text-sm font-mono font-semibold text-[#FF4500] mb-2 uppercase">BACKEND</div>
                  <div className="text-sm sm:text-base text-[#111111] font-mono">Hono + Cloudflare Workers</div>
                </div>
                <div className="border-2 border-[#111111] bg-[#F5F5F5] p-3 sm:p-4">
                  <div className="text-xs sm:text-sm font-mono font-semibold text-[#FF4500] mb-2 uppercase">BLOCKCHAIN</div>
                  <div className="text-sm sm:text-base text-[#111111] font-mono">Aptos Network</div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#111111] p-4 sm:p-6 md:p-8 relative m-2 sm:m-3 md:m-4">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FF4500] -z-10"></div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-[#111111] uppercase">FEATURES</div>
              <div className="space-y-3 sm:space-y-4">
                <div className="border-2 border-[#111111] bg-[#F5F5F5] p-3 sm:p-4">
                  <div className="text-xs sm:text-sm font-mono font-semibold text-[#FF4500] mb-2 uppercase">WALLET INTEGRATION</div>
                  <div className="text-sm sm:text-base text-[#111111] font-mono">Aptos Wallet Adapter</div>
                </div>
                <div className="border-2 border-[#111111] bg-[#F5F5F5] p-3 sm:p-4">
                  <div className="text-xs sm:text-sm font-mono font-semibold text-[#FF4500] mb-2 uppercase">REAL-TIME DATA</div>
                  <div className="text-sm sm:text-base text-[#111111] font-mono">CoinGecko API Integration</div>
                </div>
                <div className="border-2 border-[#111111] bg-[#F5F5F5] p-3 sm:p-4">
                  <div className="text-xs sm:text-sm font-mono font-semibold text-[#FF4500] mb-2 uppercase">GAMIFICATION</div>
                  <div className="text-sm sm:text-base text-[#111111] font-mono">Swipe Cards + Quest System</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="max-w-5xl mx-auto text-center w-full">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 md:mb-12 text-[#111111] uppercase leading-none">
            READY TO
            <br />
            <span className="text-[#FF4500]">BLAZE IT?</span>
          </div>
          
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#111111] mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-3xl mx-auto px-4 font-mono font-medium uppercase tracking-wider">
            JOIN THE REVOLUTIONARY TRADING EXPERIENCE. CONNECT YOUR WALLET AND START SWIPING YOUR WAY TO PROFITS.
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4">
            <button className="bg-[#FF4500] text-white border-2 border-[#111111] px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 py-4 sm:py-5 md:py-6 font-mono font-semibold text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-wider hover:bg-[#111111] hover:text-[#FF4500] transition-all duration-100 w-full sm:w-auto min-h-[44px]">
              LAUNCH APP
            </button>
            <button className="bg-[#111111] text-white border-2 border-[#111111] px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 py-4 sm:py-5 md:py-6 font-mono font-semibold text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-wider hover:bg-[#FF4500] transition-all duration-100 w-full sm:w-auto min-h-[44px]">
              READ DOCS
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-2 border-[#111111] bg-[#111111] text-white p-6 sm:p-8 md:p-10 w-full">
        <div className="max-w-6xl mx-auto w-full">
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
  );
}
