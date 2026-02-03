import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Shield, Mail, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

function ChartBar({ label, value, maxValue, color, delay }) {
  const percentage = (value / maxValue) * 100
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full h-32 sm:h-36 lg:h-40 bg-coffee-light rounded-lg overflow-hidden relative">
        <motion.div
          ref={ref}
          initial={{ height: 0 }}
          animate={isInView ? { height: `${percentage}%` } : { height: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="absolute bottom-0 w-full rounded-t-lg"
          style={{ 
            backgroundColor: color,
            zIndex: 1 
          }}
        />
        <div className="absolute inset-0 flex items-end justify-center pb-1 sm:pb-1.5 pointer-events-none" style={{ zIndex: 2 }}>
          <span 
            className="font-medium text-sm sm:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            style={{ color: '#FFFFFF' }}
          >
            {value}%
          </span>
        </div>
      </div>
      <span className="text-coffee font-medium text-xs sm:text-sm">{label}</span>
    </div>
  )
}

export default function PURECOFFOIL() {
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const efficacyData = [
    { label: '항산화', value: 95, color: '#4B3621' },
    { label: '항염', value: 88, color: '#E0C059' },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center pt-16" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(224, 192, 89, 0.08) 50%, rgba(75, 54, 33, 0.05) 100%)' }}>
        <div className="w-full max-w-[1920px] mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="w-full max-w-[1200px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6 sm:mb-7"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-3 sm:mb-4 text-coffee">
                PURECOFFOIL®
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-2.5 text-coffee relative inline-block w-full">
                Benefits
                <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[36px] h-0.5 bg-gradient-to-r from-coffee to-coffee-dark rounded"></span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-coffee-dark max-w-2xl mx-auto font-normal">
                과학적으로 검증된 항산화 및 항염 효능
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 items-start lg:items-center">
              {/* 효능 그래프 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-7 shadow-2xl border border-coffee-light"
              >
                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <TrendingUp size={18} className="sm:w-5 sm:h-5 text-coffee" />
                  <h3 className="text-lg sm:text-xl font-medium text-coffee">효능 지표</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
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
                <div className="mt-4 sm:mt-5 flex items-center gap-1.5 text-coffee-dark">
                  <Shield size={12} className="text-coffee flex-shrink-0" />
                  <span className="text-xs font-normal">검증된 실험 데이터 기반</span>
                </div>
              </motion.div>

              {/* 샘플 요청 섹션 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-7 shadow-2xl border border-coffee-light"
              >
                <h3 className="text-lg sm:text-xl font-medium text-coffee mb-3 sm:mb-4">샘플 요청</h3>
                <p className="text-sm sm:text-base text-coffee-dark mb-4 sm:mb-5 leading-relaxed font-normal">
                  PURECOFFOIL®의 품질을 직접 확인해보세요. 
                  B2B 고객을 위한 샘플을 제공합니다.
                </p>
                
                <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold">
                      <span className="text-coffee text-xs font-medium">✓</span>
                    </div>
                    <span className="text-xs sm:text-sm text-coffee-dark font-normal">고품질 원료 샘플 제공</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold">
                      <span className="text-coffee text-xs font-medium">✓</span>
                    </div>
                    <span className="text-xs sm:text-sm text-coffee-dark font-normal">상세한 성분 분석 자료</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold">
                      <span className="text-coffee text-xs font-medium">✓</span>
                    </div>
                    <span className="text-xs sm:text-sm text-coffee-dark font-normal">전문가 상담 서비스</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/#contact')}
                  className="w-full px-4 sm:px-5 py-2 sm:py-2.5 text-white rounded-lg text-sm sm:text-base font-medium transition-all shadow-lg flex items-center justify-center gap-2"
                  style={{ 
                    background: 'linear-gradient(135deg, #4B3621 0%, #E0C059 100%)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <Mail size={14} className="sm:w-4 sm:h-4" />
                  <span>샘플 요청하기</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
