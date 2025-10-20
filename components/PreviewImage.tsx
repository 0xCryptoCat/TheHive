import { motion } from "framer-motion";
import { Zap, TrendingUp, Users } from "lucide-react";

/**
 * Preview Image Component for Social Media (OG Image)
 * 
 * Dimensions: 1200x630px (optimal for social media)
 * 
 * To capture:
 * 1. Open this component in your browser
 * 2. Set viewport to exactly 1200x630px in DevTools
 * 3. Take a screenshot
 * 4. Save as og-image.png in /public folder
 * 5. Update index.html meta tags to use /og-image.png
 */
export function PreviewImage() {
  return (
    <div 
      className="relative w-[1200px] h-[630px] bg-gradient-to-br from-[#473535] via-[#f38524] to-[#fafa5e] overflow-hidden"
      style={{ 
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Animated Honeycomb Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/honeycomb.svg')`,
            backgroundSize: '800px 600px',
            backgroundRepeat: 'repeat',
            filter: 'invert(1)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-16">
        {/* Header with Logo */}
        <div className="flex items-center gap-6">
          <img 
            src="/Logo.png"
            alt="The Hive Logo"
            className="w-24 h-24 rounded-2xl"
          />
          <div>
            <h1 className="text-7xl font-bold text-white mb-2">
              The Hive
            </h1>
            <p className="text-3xl text-white/90">
              Where Gaming Meets Mining
            </p>
          </div>
        </div>

        {/* Center Content */}
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-white leading-tight max-w-3xl">
            Join a Growing Ecosystem of Gaming, Mining & Community
          </h2>
          
          {/* Key Features */}
          <div className="flex gap-8">
            <div className="flex items-center gap-4 bg-white/20 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/30">
              <Zap className="w-12 h-12 text-[#fafa5e]" />
              <div>
                <div className="text-2xl font-bold text-white">Sustainable Mining</div>
                <div className="text-xl text-white/80">Green Energy</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/20 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/30">
              <TrendingUp className="w-12 h-12 text-[#fafa5e]" />
              <div>
                <div className="text-2xl font-bold text-white">GameFi Platform</div>
                <div className="text-xl text-white/80">Play & Earn</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/20 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/30">
              <Users className="w-12 h-12 text-[#fafa5e]" />
              <div>
                <div className="text-2xl font-bold text-white">Community First</div>
                <div className="text-xl text-white/80">Rewards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex gap-6 text-white/90 text-2xl">
            <span>🐝</span>
            <span>Ethereum</span>
            <span>•</span>
            <span>Web3</span>
            <span>•</span>
            <span>GameFi</span>
          </div>
          
          <div className="text-white/90 text-2xl font-mono">
            @BecomeTheHive
          </div>
        </div>
      </div>
    </div>
  );
}
