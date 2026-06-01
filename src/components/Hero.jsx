import heroImg from '../assets/hero.png'
import barImg from '../assets/decoration_bar.webp'
import './Hero.css'

/* Drop your real photos into  public/photos/  with these names.
   Until then a placeholder shows. */
const GROOM_PHOTO = '/photos/groom.jpg'
const BRIDE_PHOTO = '/photos/bride.jpg'
const onPhotoError = (e) => { e.currentTarget.src = heroImg }

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-couple">
        {/* Full-bleed dark-green jasmine band, centred behind the photos */}
        <div className="hero-band">
          <img src={barImg} alt="" />
        </div>

        {/* Groom — upper-left, name to the right */}
        <div className="hero-person hero-person--groom">
          <div className="hero-photo">
            <img src={GROOM_PHOTO} alt="Trần Đức Linh" onError={onPhotoError} />
          </div>
          <div className="hero-name-block">
            <span className="hero-birthorder">Trưởng Nam</span>
            <span className="hero-name">Đức Linh</span>
          </div>
        </div>

        {/* Bride — lower, name to the left */}
        <div className="hero-person hero-person--bride">
          <div className="hero-photo">
            <img src={BRIDE_PHOTO} alt="Trương Ngọc Linh Đan" onError={onPhotoError} />
          </div>
          <div className="hero-name-block">
            <span className="hero-birthorder">Thứ Nữ</span>
            <span className="hero-name">Linh Đan</span>
          </div>
        </div>
      </div>
    </section>
  )
}
