export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] w-full flex justify-center">
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
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
        <div className="text-center w-full">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-[#111111] mb-6 sm:mb-8 md:mb-12 lg:mb-16 leading-none uppercase">
            TRADE
            <br />
            <span className="text-[#FF4500]">CRYPTO</span>
            <br />
            LIKE A
            <br />
            <span className="text-[#FF4500]">GAME</span>
          </div>
          
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#111111] mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 max-w-4xl mx-auto px-4 font-mono font-medium uppercase tracking-wider text-center">
            SWIPE. TRADE. WIN. A GAMIFIED CRYPTO TRADING PLATFORM ON APTOS WITH COMPETITIVE PORTFOLIO QUESTS.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center px-4">
            <a href="https://trade.blazeit.app" target="_blank" rel="noopener noreferrer" className="bg-[#FF4500] text-white border-2 border-[#111111] px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-5 md:py-6 lg:py-7 font-mono font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase tracking-wider hover:bg-[#111111] hover:text-[#FF4500] hover:scale-105 hover:-rotate-1 transition-all duration-300 w-full sm:w-auto min-h-[44px] flex items-center justify-center group">
              <span className="group-hover:animate-pulse">START TRADING</span>
            </a>
            <a href="https://quest.blazeit.app" target="_blank" rel="noopener noreferrer" className="bg-white text-[#111111] border-2 border-[#111111] px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-5 md:py-6 lg:py-7 font-mono font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase tracking-wider hover:bg-[#111111] hover:text-white hover:scale-105 hover:rotate-1 transition-all duration-300 w-full sm:w-auto min-h-[44px] flex items-center justify-center group">
              <span className="group-hover:animate-bounce">VIEW QUESTS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
        <div className="w-full">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-16 sm:mb-20 md:mb-24 lg:mb-32 text-[#111111] uppercase">
            HOW IT WORKS
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
            {/* Trade Feature */}
            <div className="bg-white border-2 border-[#111111] p-4 sm:p-6 md:p-8 relative m-2 sm:m-3 md:m-4 group hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FF4500] -z-10 group-hover:bg-[#111111] transition-colors duration-300"></div>
              <div className="text-[#FF4500] group-hover:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-colors duration-300">01</div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#111111] group-hover:text-white uppercase transition-colors duration-300">TRADE</div>
              <div className="text-xs sm:text-sm md:text-base text-[#111111] group-hover:text-white mb-6 font-mono font-medium uppercase tracking-wider transition-colors duration-300">
                SWIPE-BASED INTERFACE FOR TOKEN DISCOVERY. SWIPE RIGHT TO BUY, LEFT TO SKIP, UP TO WATCHLIST.
              </div>
              <div className="border-2 border-[#111111] bg-[#FF4500] group-hover:bg-white text-white group-hover:text-[#111111] p-3 sm:p-4 text-center font-mono font-semibold text-xs sm:text-sm md:text-base uppercase transition-all duration-300">
                FULL-SCREEN EXPERIENCE
              </div>
            </div>

            {/* Analysis Feature */}
            <div className="bg-white border-2 border-[#111111] p-4 sm:p-6 md:p-8 relative m-2 sm:m-3 md:m-4 group hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-pointer">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FF4500] -z-10 group-hover:bg-[#111111] transition-colors duration-300"></div>
              <div className="text-[#FF4500] group-hover:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-colors duration-300">02</div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#111111] group-hover:text-white uppercase transition-colors duration-300">ANALYSIS</div>
              <div className="text-xs sm:text-sm md:text-base text-[#111111] group-hover:text-white mb-6 font-mono font-medium uppercase tracking-wider transition-colors duration-300">
                MINIMALIST DASHBOARD SHOWCASING YOUR PORTFOLIO VALUE, PROFIT/LOSS, AND HOLDINGS PERFORMANCE.
              </div>
              <div className="border-2 border-[#111111] bg-[#111111] group-hover:bg-white text-white group-hover:text-[#111111] p-3 sm:p-4 text-center font-mono font-semibold text-xs sm:text-sm md:text-base uppercase transition-all duration-300">
                REAL-TIME METRICS
              </div>
            </div>

            {/* Quest Feature */}
            <div className="bg-white border-2 border-[#111111] p-4 sm:p-6 md:p-8 relative m-2 sm:m-3 md:m-4 group hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FF4500] -z-10 group-hover:bg-[#111111] transition-colors duration-300"></div>
              <div className="text-[#FF4500] group-hover:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-colors duration-300">03</div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#111111] group-hover:text-white uppercase transition-colors duration-300">QUEST</div>
              <div className="text-xs sm:text-sm md:text-base text-[#111111] group-hover:text-white mb-6 font-mono font-medium uppercase tracking-wider transition-colors duration-300">
                COMPETITIVE, TIME-BASED PORTFOLIO CHALLENGES WITH PRIZE POOLS. BUILD VIRTUAL PORTFOLIOS.
              </div>
              <div className="border-2 border-[#111111] bg-[#F5F5F5] group-hover:bg-[#111111] text-[#111111] group-hover:text-white p-3 sm:p-4 text-center font-mono font-semibold text-xs sm:text-sm md:text-base uppercase transition-all duration-300">
                COMPETE & WIN
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Experience */}
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white w-full">
        <div className="w-full text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-16 sm:mb-20 md:mb-24 lg:mb-32 text-[#111111] uppercase">
            INTERACTIVE EXPERIENCE
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full">
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
              <div className="text-sm sm:text-base md:text-lg text-[#111111] group-hover:text-white transition-colors duration-300 font-mono font-medium uppercase tracking-wider mb-6 max-w-4xl mx-auto text-center">
                COMBINING WEBGL'S 3D CAPABILITIES WITH SVELTE'S REACTIVE MICROINTERACTIONS TO CREATE AN UNPRECEDENTED TRADING EXPERIENCE.
              </div>
              <div className="border-2 border-[#111111] bg-[#F5F5F5] group-hover:bg-[#111111] text-[#111111] group-hover:text-white p-4 text-center font-mono font-semibold text-sm sm:text-base md:text-lg uppercase transition-all duration-300">
                NEXT-GEN TRADING
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
        <div className="text-center w-full">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 text-[#111111] uppercase leading-none">
            READY TO
            <br />
            <span className="text-[#FF4500]">BLAZE IT?</span>
          </div>
          
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#111111] mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 max-w-4xl mx-auto px-4 font-mono font-medium uppercase tracking-wider text-center">
            JOIN THE REVOLUTIONARY TRADING EXPERIENCE. CONNECT YOUR WALLET AND START SWIPING YOUR WAY TO PROFITS.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 justify-center items-center px-4">
            <a href="https://trade.blazeit.app" target="_blank" rel="noopener noreferrer" className="bg-[#FF4500] text-white border-2 border-[#111111] px-10 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-5 sm:py-6 md:py-7 lg:py-8 font-mono font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase tracking-wider hover:bg-[#111111] hover:text-[#FF4500] hover:scale-110 hover:-rotate-2 transition-all duration-300 w-full sm:w-auto min-h-[44px] flex items-center justify-center group">
              <span className="group-hover:animate-pulse">LAUNCH APP</span>
            </a>
            <a href="https://github.com/Blaze-Trade/" target="_blank" rel="noopener noreferrer" className="bg-[#111111] text-white border-2 border-[#111111] px-10 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-5 sm:py-6 md:py-7 lg:py-8 font-mono font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase tracking-wider hover:bg-[#FF4500] hover:scale-110 hover:rotate-2 transition-all duration-300 w-full sm:w-auto min-h-[44px] flex items-center justify-center group">
              <span className="group-hover:animate-bounce">READ DOCS</span>
            </a>
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
