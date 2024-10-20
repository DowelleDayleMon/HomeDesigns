import styles from './App.module.css'
import Sample from './assets/Sample.webp'
import About from './assets/About.jpg'

import SampleDesign from './components/SampleDesign'
import Details from './components/Details'
import Header from './components/Header'


const App = () => {

  return (
    <div className={styles.App}>
      {/* <section className={styles.First}>
        <nav>

        </nav>
      </section> */}
      <section className={styles.Second}>
        <Header Upper="Categories" Title="Interior Design Gallery" Text="Explore our collection of thoughtfully designed spaces that showcase our expertise in blending style and function. Each project reflects our commitment to creating interiors that inspire and elevate everyday living" />
        
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

      <section className={styles.Fifth}>
          <Header Upper="Gallery" Title="Interior Design Library" Text="Explore our collection of thoughtfully designed spaces that showcase our expertise in blending style and function. Each project reflects our commitment to creating interiors that inspire and elevate everyday living"  />
          <div className={styles.Gallery_container}>
            <div className={styles.Gallery1}>
              <div></div>
              <div></div>
            </div>

            <div className={styles.Gallery2}>
              <div></div>
              <div></div>
            </div>

            <div className={styles.Gallery3}>
              <div></div>
              <div></div>
            </div>


          </div>
      </section>
    </div>
  )
}

export default App
