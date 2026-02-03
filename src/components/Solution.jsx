import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Thermometer, Droplets, Wind, Activity, Sparkles } from 'lucide-react'

export default function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  
  const [sensorData, setSensorData] = useState({
    temperature: 22.5,
    humidity: 45.2,
    gas: 12.8,
    spoilageIndex: 0.1,
  })

  useEffect(() => {
    if (!isInView) return
    
    const interval = setInterval(() => {
      setSensorData(prev => ({
        temperature: 22.5 + (Math.random() - 0.5) * 0.5,
        humidity: 45.2 + (Math.random() - 0.5) * 2,
        gas: 12.8 + (Math.random() - 0.5) * 1,
        spoilageIndex: 0.1 + (Math.random() - 0.5) * 0.05,
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [isInView])

  const sensorCards = [
    {
      icon: Thermometer,
      label: '온도',
      value: sensorData.temperature.toFixed(1),
      unit: '°C',
      color: 'text-coffee',
      bgColor: 'bg-coffee-light',
    },
    {
      icon: Droplets,
      label: '습도',
      value: sensorData.humidity.toFixed(1),
      unit: '%',
      color: 'text-coffee',
      bgColor: 'bg-gold-light',
    },
    {
      icon: Wind,
      label: '가스',
      value: sensorData.gas.toFixed(1),
      unit: 'ppm',
      color: 'text-coffee',
      bgColor: 'bg-coffee-medium',
    },
    {
      icon: Activity,
      label: '산패 지수',
      value: sensorData.spoilageIndex.toFixed(1),
      unit: '%',
      color: 'text-coffee',
      bgColor: 'bg-gold-medium',
    },
  ]

  return (
    <section ref={ref} id="solution" className="relative h-screen w-full flex items-center justify-center snap-start snap-always" style={{ background: 'linear-gradient(135deg, rgba(75, 54, 33, 0.05) 0%, rgba(224, 192, 89, 0.08) 50%, rgba(255, 255, 255, 0.95) 100%)' }}>
      {/* 1920:1080 비율 컨테이너 */}
      <div className="w-full max-w-[1920px] mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-5 md:mb-7"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-coffee-light rounded-full mb-4"
            >
              <Sparkles size={10} className="text-coffee" />
              <span className="text-xs text-coffee font-semibold">특허 출원번호: 특허-2025-0212940</span>
            </motion.div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 sm:mb-2.5 text-coffee relative inline-block w-full">
              Solution
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[36px] h-0.5 bg-gradient-to-r from-coffee to-coffee-dark rounded"></span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-coffee-dark max-w-2xl mx-auto mb-1 sm:mb-1.5 md:mb-2 font-normal">
              IoT 센서를 통한 실시간 모니터링
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm text-coffee-dark max-w-2xl mx-auto font-normal">
              우리는 산패 알고리즘으로 산가 1.0 이하의 신선한 커피오일을 사용한다
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-7 shadow-2xl border border-coffee-light"
          >
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 mb-2.5 sm:mb-3 md:mb-4 lg:mb-5">
              {sensorCards.map((sensor, index) => {
                // 양옆에서 번갈아가며 오도록
                const xDirection = index % 2 === 0 ? -80 : 80
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: xDirection, y: 20 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: xDirection, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`${sensor.bgColor} rounded-lg p-1.5 sm:p-2 md:p-3 lg:p-4 border-2 border-white`}
                >
                  <div className="flex items-center justify-between mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5">
                    <sensor.icon size={14} className={`sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-[19px] lg:h-[19px] ${sensor.color}`} />
                    <span className="text-[9px] sm:text-[10px] md:text-xs text-coffee-dark font-normal">{sensor.label}</span>
                  </div>
                  <div className="flex items-baseline gap-0.5 sm:gap-1 md:gap-1.5">
                    <motion.span
                      key={sensor.value}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium ${sensor.color}`}
                    >
                      {sensor.value}
                    </motion.span>
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-coffee-dark">{sensor.unit}</span>
                  </div>
                </motion.div>
                )
              })}
            </div>

            <div className="bg-gold-light rounded-lg p-1.5 sm:p-2 md:p-3 lg:p-4 text-center border border-gold-medium">
              <div className="text-[9px] sm:text-[10px] md:text-xs text-coffee-dark mb-1 sm:mb-1.5 font-normal">실시간 모니터링 상태</div>
              <div className="flex items-center justify-center gap-1 sm:gap-1.5">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-coffee rounded-full"
                />
                <span className="text-coffee font-medium text-[10px] sm:text-xs md:text-sm">● 활성</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
