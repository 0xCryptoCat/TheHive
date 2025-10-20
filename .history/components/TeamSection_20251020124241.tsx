import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Hexagon } from "./ui/hexagon";

export function TeamSection() {
  const team = [
    {
      name: "John Anderson",
      role: "Founder",
      description: "12M+ social reach, marketing visionary.",
      color: "#f38524",
      image: "https://cdn5.telesco.pe/file/tGAdlfwAicpuBjQActD3kYJ48woW6NsADuaA3ZO4zYEOPuSblezuz2bb7d-wDbuJkD_ys7rKuDTtqh3WE1jSyA1eLu2TSYl0lYkbvDj0jq52gUZNqM2oqRfzjcTqpzfWKq6LHnS5pgrFHjG0Bq66x0q7nU5bRM5sw6fDyFHvUOHtx--Rqam1eNPj03BEtAd72cdn-FvDqkVgfbT0FTDmoOgjSxtOQdSQGP7FZQZCv10Wi85UdIzGwuSUZxd5tyg5QgnInDVf2S2XCZd1Qdp6vG6vBU80MMWYXDL4_O3rtH5G9J_UzsuGj9B3uLM53FLtJqdODBtIRA9auUKpavmxwA.jpg",
    },
    {
      name: "Speros (Strong)",
      role: "Co-Founder & CBDO",
      description: "The community lead behind Shinja.",
      color: "#fafa5e",
      image: "https://cdn1.telesco.pe/file/XY40yKsygUehVJZJ6SXu4UAUbPSA2WVU_rPm-qEbTAzJQzByvlPasc7U4IY8kpgwU5843vfzE8klH_OyyVR0UAwOHmXfRb027dBUJeJyrMrNs1M7JMqtP0JBefME37DsI9kJwHWP1y7mYInJtMBUiGWNZ1Z8lsWHCu6U4L_MMYpwvuq2T3ks_8cyRZ79gJl9xzjEXGbRH7TDcygNw8EZMABliAQx1ZdoAhlK4efLdDGcqcpzWvzdLxCTP5l7ydCiIrskHlURoE3A3Jk3jiGKDF2gaqHZ3HarUVlQbWbzdzncStPPi3DuCXlLSo1kAbrpn35cUmt8giTa_RV7s8XNGg.jpg"
    },
    {
      name: "Larry Lundy",
      role: "Advisor",
      description: "Veteran crypto strategist.",
      color: "#f38524",
      image: "https://cdn5.telesco.pe/file/bRDYGHJPMPKM_AsD2eOV-60nk2r1IWvLoysoMBoRKKTFiWtKd8FZkC9GG5SvUaWT4HdCnjjJ6HCzcXx8dEutAWPRJJYJhbxA7_BKKq1tmr8pzRZyTyK_ge_6bdZLXpEeiz7PAxdQb8dkLdzfdLwQrqPRNHCTWs8D9jsOUc8yV-Bre37pbSrZrLvA8M80QfUYIkUekjuJoikivUHCjodNgzz8H09KNeLXSDvrKC6d6Cd_SXtwNalz9pMOPyjZC7UJ-xg1nw7l1T_0Sz6eZpsCIti8qnoVTt1nCYKUoapo_gv2A-qCGdZO8RjT5wmXoytZKvmfrpL3F_rlZarmRrpQeA.jpg"
    },
    {
      name: "Milking Time",
      role: "Advisor",
      description: "Web3 landscape expert.",
      color: "#fafa5e",
      image: "https://cdn4.telesco.pe/file/OAS-0kOQX3DFj4SShWDwdluu4Yj4o5Va5j0xTPKQqgWYy5boEbu8Y62RMsCeUDTMzlZCEnbz9cQm_MOOsgo7Olrrg60qCCbUpMT8S8-3EMvj32qVFo5idQkRAQ5gyD4Cvl8MEQdrbaHioAuVSpX0tFdSeqYWvFiWkBOV0S2qaZwUJX8lva499ysMLGlOYewhvS9VECIPRTA5GApq7uTFIJoMgyo8ba-11kdjWXU_gNIJ5U7KId6Y786HduvgA4BiKNGZL7-vyrqZEf1KJeBZqOKV_eQQzM_ZmyCE_iQF_BnHIqCkzL6WVxvutfl8DWnEWU4OZsxMZUBKgC9t6Onyjw.jpg"
    },
    {
      name: "CryptoCat",
      role: "Lead Developer",
      description: "Full-stack fur-ball building Honey Inc.",
      color: "#f38524",
      image: "public/dev.jpeg",
    },
    {
      name: "LuhLuh",
      role: "Design Lead",
      description: "Aesthetic architect of the Hive brand.",
      color: "#fafa5e",
      image: "https://cdn1.telesco.pe/file/g3HYXw0Ktz1h7RRkHcSnziAGT2LaQD2OAwGBdym7sGwHgnI7D3-_qmdhOpIqjtXwvHoiTfv3lCxSiP-2-1VzKdiuc9uHu0uK011C-U_7-X1jfB2dLpQAKY8I4Kh0KGHwekV5jfWhkx5UDkli1IUcFFFSHI2Lu_f-nVrAxvvLFmWMfzJSJ1tEzGRpdYvJ05Wm2LXde2xjJpPyhO9j8gQTk7LGge2y6FPV65fpCMDKE2qGRTYTu8VRNWhzeTsotP6ip1ju8tp6IlYD_mLUULFcAprG0_Hd9iamERiHX6gXmc1ybgo8rSLIqD4LbhukL484ZQGLX07S6owLv7_w0SDX5Q.jpg"
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#2d2d2d] to-[#473535] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute -inset-[50%]"
          animate={{
            y: [0, -100],
            x: [0, -50],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          style={{
            backgroundImage: `url('/honeycomb.svg')`,
            backgroundSize: '1200px 800px',
            backgroundRepeat: 'repeat',
            filter: 'invert(1)',
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8 text-[#fafaf8]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            The worker bees of the Hive.
          </motion.h2>
          <p className="text-lg md:text-xl text-[#fafaf8]/80 max-w-4xl mx-auto">
            A dedicated team of innovators, creators, and strategists united by one vision
          </p>
        </motion.div>

        {/* Team Grid with Hexagonal Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              <div className="p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#fafa5e]/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Avatar Hexagon */}
                <div className="relative mb-8 flex justify-center">
                  <div className="relative">
                    <Hexagon
                      color={member.color}
                      src={member.image}
                      size="md"
                      animate={true}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="shadow-lg"
                    >
                    </Hexagon>
                    
                    
                  </div>
                </div>

                <h3 className="text-center mb-2 text-[#fafaf8]">{member.name}</h3>
                <p
                  className="text-center text-sm mb-3"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>
                <p className="text-center text-sm text-[#fafaf8]/70">
                  {member.description}
                </p>

                {/* Connection lines (decorative) */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
