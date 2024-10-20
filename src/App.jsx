import styles from './App.module.css'
import Sample from './assets/Sample.webp'
import About from './assets/About.jpg'

import SampleDesign from './components/SampleDesign'
import Details from './components/Details'

const App = () => {

  return (
    <div className={styles.App}>
      {/* <section className={styles.First}>
        <nav>

        </nav>
      </section> */}
      <section className={styles.Second}>
        <div className={styles.Second_inner}>
          <div className={styles.Categories}>
            <span>Categories</span>
            <span>Architectural Interior</span>
          </div>
          <span className={styles.Explain}>
            Transform your space with tailored architectural interior design that combines beauty, function, and your unique style.
          </span>
        </div>
        
        <div className={styles.Second_images}>
          <SampleDesign DesignImg={Sample} DesignName="Classic" />
          <SampleDesign DesignImg={Sample} DesignName="Modern" />
          <SampleDesign DesignImg={Sample} DesignName="Traditional" />
          <SampleDesign DesignImg={Sample} DesignName="Minimalist" />
          <SampleDesign className={styles.Last} DesignImg={Sample} DesignName="Mosaic" />
        </div>
      </section>

      <section className={styles.Third}>
        <div className={styles.Third_inner}>
          <Details Detail_top="8K" Detail_mid="Interior Projects" Detail_bottom="Designing spaces that inspires delight" />
          <Details Detail_top="30" Detail_mid="Interior Projects" Detail_bottom="Designing spaces that inspires delight" />
          <Details Detail_top="16K" Detail_mid="Interior Projects" Detail_bottom="Designing spaces that inspires delight" />
          <Details Detail_top="99%" Detail_mid="Interior Projects" Detail_bottom="Designing spaces that inspires delight" />
        </div>
      </section>

      <section className={styles.Fourth}>
        <img className={styles.About} src={About} alt="A modern room" />
        <div className={styles.Fourth_inner}>
          <span>ABOUT US</span>
          <span>WHO WE ARE</span>
          <p>We are a team of passionate architects and designers dedicated to creating functional, beautiful spaces that reflect your unique vision. Our focus is on delivering high-quality, innovative designs that elevate everyday living. We are a team of passionate architects and designers dedicated to creating functional, beautiful spaces that reflect your unique vision. Our focus is on delivering high-quality, innovative designs that elevate everyday living.</p>
          <button>Explore more</button>
        </div>

      </section>
    </div>
  )
}

export default App
