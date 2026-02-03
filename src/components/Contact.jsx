import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// EmailJS는 선택적으로 import (패키지 설치 후 활성화)
let emailjs = null
try {
  emailjs = require('@emailjs/browser')
} catch (e) {
  console.warn('EmailJS not installed. Please run: npm install @emailjs/browser')
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // EmailJS가 설치되지 않은 경우
    if (!emailjs) {
      alert('이메일 전송 기능을 사용하려면 다음 명령어를 실행해주세요:\nnpm install @emailjs/browser\n\n그리고 Contact.jsx 파일에서 EmailJS 설정을 완료해주세요.')
      setIsSubmitting(false)
      return
    }

    try {
      // EmailJS 설정 필요
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
          to_email: 'contact@purecycle.com'
        },
        'YOUR_PUBLIC_KEY'
      )

      alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Email sending failed:', error)
      alert('문의 전송에 실패했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} id="contact" className="relative h-screen w-full flex items-center justify-center snap-start snap-always" style={{ background: 'linear-gradient(135deg, rgba(75, 54, 33, 0.05) 0%, rgba(224, 192, 89, 0.08) 50%, rgba(255, 255, 255, 0.95) 100%)' }}>
      <div className="w-full max-w-[1920px] mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center h-full overflow-y-auto pt-12 sm:pt-16 md:pt-20 lg:pt-32 pb-4 sm:pb-6 md:pb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-2.5 sm:mb-3 md:mb-4 lg:mb-5 text-coffee relative inline-block w-full">
              Contact
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[36px] h-0.5 bg-gradient-to-r from-coffee to-coffee-dark rounded"></span>
            </h2>
            
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-coffee-dark text-center mb-2.5 sm:mb-3 md:mb-4 leading-relaxed font-normal">
              PURECOFFOIL®에 대해 궁금한 점이 있으신가요? 아래 양식을 작성해주시면 빠른 시일 내에 연락드리겠습니다.
            </p>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-sm p-2.5 sm:p-3 md:p-4 lg:p-5 rounded-xl shadow-xl border border-coffee-light"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[10px] sm:text-xs font-medium text-coffee mb-1 sm:mb-1.5">
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="이름을 입력해주세요"
                    className="w-full px-2 sm:px-2.5 py-1 sm:py-1.5 border border-coffee-light rounded-lg text-[10px] sm:text-xs text-coffee bg-white focus:outline-none focus:border-coffee focus:ring-2 focus:ring-coffee-light transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[10px] sm:text-xs font-medium text-coffee mb-1 sm:mb-1.5">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@company.com"
                    className="w-full px-2 sm:px-2.5 py-1 sm:py-1.5 border border-coffee-light rounded-lg text-[10px] sm:text-xs text-coffee bg-white focus:outline-none focus:border-coffee focus:ring-2 focus:ring-coffee-light transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
                <div className="flex flex-col">
                  <label htmlFor="company" className="text-[10px] sm:text-xs font-medium text-coffee mb-1 sm:mb-1.5">
                    회사명
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="회사명을 입력해주세요"
                    className="w-full px-2 sm:px-2.5 py-1 sm:py-1.5 border border-coffee-light rounded-lg text-[10px] sm:text-xs text-coffee bg-white focus:outline-none focus:border-coffee focus:ring-2 focus:ring-coffee-light transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[10px] sm:text-xs font-medium text-coffee mb-1 sm:mb-1.5">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    className="w-full px-2 sm:px-2.5 py-1 sm:py-1.5 border border-coffee-light rounded-lg text-[10px] sm:text-xs text-coffee bg-white focus:outline-none focus:border-coffee focus:ring-2 focus:ring-coffee-light transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-3 sm:mb-4">
                  <label htmlFor="message" className="text-[10px] sm:text-xs font-medium text-coffee mb-1 sm:mb-1.5">
                    문의 내용 *
                  </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="문의 내용을 입력해주세요"
                  className="w-full px-2 sm:px-2.5 py-1 sm:py-1.5 border border-coffee-light rounded-lg text-[10px] sm:text-xs text-coffee bg-white focus:outline-none focus:border-coffee focus:ring-2 focus:ring-coffee-light transition-all resize-vertical min-h-[60px] sm:min-h-[72px]"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-white border-none px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium rounded-lg cursor-pointer transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #4B3621 0%, #E0C059 100%)'
                }}
              >
                {isSubmitting ? 'Sending...' : '문의 보내기'}
              </motion.button>
            </motion.form>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center text-[9px] sm:text-[10px] md:text-xs text-coffee-dark mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-coffee-light"
            >
              © {new Date().getFullYear()} PuReCycle. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
