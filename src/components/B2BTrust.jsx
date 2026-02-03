import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Shield, Mail } from 'lucide-react'

function ChartBar({ label, value, maxValue, color, delay }) {
  const percentage = (value / maxValue) * 100
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full h-40 bg-coffee-light rounded-lg overflow-hidden relative">
        <motion.div
          ref={ref}
          initial={{ height: 0 }}
          animate={isInView ? { height: `${percentage}%` } : { height: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`absolute bottom-0 w-full ${color} rounded-t-lg`}
        />
        <div className="absolute inset-0 flex items-end justify-center pb-1.5">
          <span className="text-white font-bold text-base">{value}%</span>
        </div>
      </div>
      <span className="text-coffee font-semibold text-xs">{label}</span>
    </div>
  )
}

export default function B2BTrust() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const efficacyData = [
    { label: '항산화', value: 95, color: 'bg-red-500' },
    { label: '항염', value: 88, color: 'bg-blue-500' },
  ]

  return (
    <section ref={ref} id="b2b-trust" className="relative h-screen w-full flex items-center justify-center snap-start snap-always" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(224, 192, 89, 0.08) 50%, rgba(75, 54, 33, 0.05) 100%)' }}>
      {/* 1920:1080 비율 컨테이너 */}
      <div className="w-full max-w-[1920px] mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-7"
          >
            <h2 className="text-xl font-bold mb-2.5 text-coffee relative inline-block w-full">
              Benefits
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[36px] h-0.5 bg-gradient-to-r from-coffee to-coffee-dark rounded"></span>
            </h2>
            <p className="text-sm text-coffee-dark max-w-2xl mx-auto">
              Scientifically proven antioxidant and anti-inflammatory efficacy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
            {/* 효능 그래프 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 lg:p-7 shadow-2xl border border-coffee-light"
            >
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp size={19} className="text-coffee" />
                <h3 className="text-xl font-bold text-coffee">효능 지표</h3>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {efficacyData.map((data, index) => (
                  <ChartBar
                    key={index}
                    label={data.label}
                    value={data.value}
                    maxValue={100}
                    color={data.color}
                    delay={0.4 + index * 0.2}
                  />
                ))}
              </div>
              <div className="mt-5 flex items-center gap-1.5 text-coffee-dark">
                <Shield size={12} className="text-coffee" />
                <span className="text-xs">검증된 실험 데이터 기반</span>
              </div>
            </motion.div>

            {/* 샘플 요청 섹션 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 lg:p-7 shadow-2xl border border-coffee-light"
            >
              <h3 className="text-xl font-bold text-coffee mb-4">샘플 요청</h3>
              <p className="text-base text-coffee-dark mb-5 leading-relaxed">
                PURECOFFOIL®의 품질을 직접 확인해보세요. 
                B2B 고객을 위한 샘플을 제공합니다.
              </p>
              
              <div className="space-y-2.5 mb-5">
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-coffee-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-coffee text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-coffee-dark">고품질 원료 샘플 제공</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-coffee-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-coffee text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-coffee-dark">상세한 성분 분석 자료</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-coffee-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-coffee text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-coffee-dark">전문가 상담 서비스</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-5 py-2.5 bg-coffee text-white rounded-lg text-base font-semibold hover:bg-coffee-dark transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Mail size={14} />
                <span>샘플 요청하기</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
