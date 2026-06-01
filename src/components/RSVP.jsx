import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './RSVP.css'

const initialForm = { name: '', attendance: 'yes', guests: '1', message: '' }

export default function RSVP() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const headerRef = useScrollReveal()
  const formRef = useScrollReveal()

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Vui lòng nhập họ tên'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <section className="rsvp" id="xac-nhan">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Xác nhận</span>
          <h2 className="section-title">Tham Dự Cùng Chúng Tôi</h2>
          <div className="section-divider">
            <span className="section-divider-icon">✦</span>
          </div>
          <p className="section-desc">Kính mong quý vị xác nhận tham dự để chúng tôi chuẩn bị chu đáo nhất</p>
        </div>

        <div className="rsvp-wrap reveal" ref={formRef}>
          {submitted ? (
            <div className="rsvp-success">
              <div className="rsvp-success-icon">🎉</div>
              <h3 className="rsvp-success-title">Cảm ơn bạn!</h3>
              <p className="rsvp-success-msg">
                {form.attendance === 'yes'
                  ? `Chúng tôi rất vui khi ${form.name} sẽ tham dự. Hẹn gặp lại trong ngày vui!`
                  : `Cảm ơn ${form.name} đã phản hồi. Chúng tôi sẽ nhớ bạn trong ngày đặc biệt này.`
                }
              </p>
              <button className="rsvp-reset" onClick={() => { setSubmitted(false); setForm(initialForm) }}>
                Gửi lại
              </button>
            </div>
          ) : (
            <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
              <div className="rsvp-field">
                <label className="rsvp-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  Họ và Tên <span className="rsvp-required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className={`rsvp-input ${errors.name ? 'rsvp-input--error' : ''}`}
                  placeholder="Nhập họ và tên của bạn"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="rsvp-error">{errors.name}</span>}
              </div>

              <div className="rsvp-field">
                <label className="rsvp-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Bạn có tham dự không?
                </label>
                <div className="rsvp-radio-group">
                  {[
                    { value: 'yes', label: '✓ Có, tôi sẽ tham dự', cls: 'yes' },
                    { value: 'no', label: '✗ Rất tiếc, tôi không thể', cls: 'no' },
                  ].map(opt => (
                    <label key={opt.value} className={`rsvp-radio ${form.attendance === opt.value ? `rsvp-radio--${opt.cls} rsvp-radio--active` : ''}`}>
                      <input
                        type="radio"
                        name="attendance"
                        value={opt.value}
                        checked={form.attendance === opt.value}
                        onChange={handleChange}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {form.attendance === 'yes' && (
                <div className="rsvp-field">
                  <label className="rsvp-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    Số người tham dự
                  </label>
                  <select name="guests" className="rsvp-select" value={form.guests} onChange={handleChange}>
                    {['1', '2', '3', '4', '5+'].map(n => (
                      <option key={n} value={n}>{n} người</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="rsvp-field">
                <label className="rsvp-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  Lời nhắn (tuỳ chọn)
                </label>
                <textarea
                  name="message"
                  className="rsvp-textarea"
                  placeholder="Gửi lời chúc mừng đến cô dâu & chú rể..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="rsvp-submit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Gửi Xác Nhận
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
