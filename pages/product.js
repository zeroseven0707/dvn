import Head from "next/head";
import product from "../public/styles/product.module.css";
import Image from "next/image";
import Footer from './components/_footer';
import Production from './components/_productionYoutube';
import Testimoni from './components/_testimoniYoutube';
import Reviews from './components/_reviews';
import Burger from "./components/_burger";

export default function Product() {
  return (
    <>
      <Head>
        <title>DVN Scincare - Product</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div>
          <div className={product.text_header}>Product</div>
          <img src="/image/Botol_DVN.svg" className={product.image_product} />
          <picture >
              <source srcset="/image/mobile-product.svg" media="(max-width: 768px)"/>
              <img src="/image/product.png" className={product.image} />
          </picture>
          <img src="/image/awankirifooter.png" className={product.awan1} />
          <img src="/image/awankirifooter.png" className={product.awan2} />
        </div>
      </section>
        <Burger />
      <section>
      <div className={product.youtube}>
        <p><span>Our</span> Production Process</p>
        <Production videoId="IKCSNNeRTDA" />
      </div>
      </section>
      <section className={product.benefit}>
          <div className={product.ingredientsContainer}>
          <div className={product.garisContainer}>
          </div>
          <img src="/image/awan3.png" className={product.awan3} />
          <img src="/image/awan4.png" className={product.awan4} />
          <img src="/image/Botol_DVN.svg" className={product.botol} />
          <div className={product.flexText}>
            <p className={product.mainIngredients}>Main<span> Ingredients</span></p>
            <p className={product.mainDetail}>Collagen Peptide  <img src="/image/peptide-blue.svg" className={product.peptide_blue} /></p>
          </div>
          <img src="/image/CollagenPeptide.svg" className={product.peptide} />
          <div className={product.kotak_informasi}>
            <div>
              <p>Benefits</p>
              <ul>
                <li>Easily absorbed by the body</li>
                <li>Maintains skin structure (activation of collagen formation and <br/> cell regeneration)</li>
                <li>Nourishes skin cells so that the skin barrier is stronger</li>
                <li>Maintain skin elasticity</li>
              </ul>
            </div>
          </div>
          <img src="/image/ingredients.svg" className={product.imagereviews} />
          </div>
      </section>
      <section>
        <div className={product.containerWorks}>
          <div>
            <img src="/image/works.png" className={product.image_works} />
          </div>
          <div className={product.howtoworks}>
            <p><span>How Does it</span> Works</p>
          </div>
          <div className={product.text}>
              <p className={product.text_works}>Viqua Pomegranate and Vitamin C are the main components that are formed in one chewable tablet and absorbed by the body, to help maintain natural collagen and fiber in the skin. L-Glutathione and Japanese Knotweed radix Extract work as antioxidants to prevent excess melanin production, so the skin looks brighter.</p>
          </div>
        </div>
      </section>
      <section>
        <div className={product.container_featured}>
          <div className={product.featured}>
          <div>
            < p className={product.title_featured}><span>Featured</span> Product</p>
            <div className={product.imageFeatured}>
              <img src="/image/Botol_DVN.svg" className={product.imageFeatureds}/>
            </div>
          </div>
            <div className={product.detailFeaturedMobile}>
              <p className={product.title_featuredMobile}><span>Featured</span> Product</p>
              <p className={product.title}>D.V.N Chewable Tablet</p>
              <div className={product.tombolMobile}>
                <button className={product.buynowMobile}>Buy now</button>
                <button className={product.consultMobile}>Consult with us</button>
              </div>
            </div>
            <div className={product.detailFeatured}>
              <p className={product.title}>D.V.N Chewable Tablet</p>
              <p className={product.text}>Discover our standout featured product, meticulously crafted to exceed your expectations. It embodies a fusion of quality and innovation, boasting a multitude of certifications that underscore its excellence. With HALAL certification, it ensures adherence to strict dietary requirements, while GMP and ISO 9001 registrations guarantee manufacturing practices of the highest caliber. Endorsed by BPOM, it meets Indonesian regulatory standards with precision.Furthermore, it has triumphed in rigorous heavy metal and hazardous materials testing, ensuring unparalleled safety. What sets it apart is its patented ingredients sourced from Spain, epitomizing cutting-edge research and efficacy. Enriched with the finest collagen sourced from Korea and Europe, it offers unparalleled benefits for your well-being. Elevate your experience with our product, where quality, safety, and innovation converge seamlessly.</p>
              <div className={product.tombol}>
                <button className={product.buynow}>Buy now</button>
                <button className={product.consult}>Consult With us</button>
              </div>
            </div>
          </div>
          <div className={product.MobileDetailFeatured}>
              <p className={product.text}>Discover our standout featured product, meticulously crafted to exceed your expectations. It embodies a fusion of quality and innovation, boasting a multitude of certifications that underscore its excellence. With HALAL certification, it ensures adherence to strict dietary requirements, while GMP and ISO 9001 registrations guarantee manufacturing practices of the highest caliber. Endorsed by BPOM, it meets Indonesian regulatory standards with precision. <br/><br/> Furthermore, it has triumphed in rigorous heavy metal and hazardous materials testing, ensuring unparalleled safety. What sets it apart is its patented ingredients sourced from Spain, epitomizing cutting-edge research and efficacy. Enriched with the finest collagen sourced from Korea and Europe, it offers unparalleled benefits for your well-being. Elevate your experience with our product, where quality, safety, and innovation converge seamlessly.</p>
            </div>
        </div>
      </section>
      <section className={product.ContainerReviews}>
        <div className={product.reviews}>
          <p className={product.textnya}><span>Review</span> what people say</p>
        </div>
      <Reviews />
      </section>
      <section>
        <div className={product.youtube2}>
        <div className={product.detail_youtube2_mobile}>
            <p className={product.testimonial}>Testimonials</p>
            <p className={product.testimonial_detail}>Hear what they have to say</p>
        </div>
        <div className={product.video_youtube2}>
          <Testimoni videoId="IKCSNNeRTDA" thumbnailUrl="image/youtube.png" />
        </div>
        <div className={product.detail_youtube2}>
            <p className={product.testimonial}>Testimonials</p>
            <p className={product.testimonial_detail}>Hear what they have to say</p>
        </div>
        </div>
      </section>
    </>
  );
}
