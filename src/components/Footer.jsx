import { motion } from 'framer-motion'
import { Mail, MapPin, Building2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative h-screen w-full flex items-center justify-center bg-white snap-start snap-always">
      {/* 1920:1080 비율 컨테이너 */}
      <div className="w-full max-w-[1920px] mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-coffee mb-4">PuReCycle</h3>
              <p className="text-coffee-dark mb-2">
                IoT 기반 신선도 보증형 커피박 업사이클링 오일 원료
              </p>
              <p className="text-sm text-coffee-dark mb-2">
                첫 아이템: <span className="font-semibold">PURECOFFOIL®</span>
              </p>
              <p className="text-sm text-coffee-dark">
                특허 출원번호: 특허-2025-0212940
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-coffee mb-4">연락처</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-coffee-dark">
                  <Mail size={18} />
                  <span>contact@purecycle.com</span>
                </div>
                <div className="flex items-center gap-3 text-coffee-dark">
                  <MapPin size={18} />
                  <span>서울특별시</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-coffee mb-4">제작</h4>
              <div className="flex items-center gap-3 text-coffee-dark mb-2">
                <Building2 size={18} />
                <span>중앙대학교 전자전기공학부</span>
              </div>
              <p className="text-sm text-coffee-dark">
                창업팀
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-coffee-light pt-8 text-center text-coffee-dark text-sm"
          >
            <p>© 2025 PuReCycle. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
