import Head from "next/head";
import Footer from './components/_footer';
import FormJoin from './components/_join_dealers';
import styles from "@/styles/Faqs.module.css";
import Burger from "./components/_burger";
export default function Faqs() {
  return (
    <>
      <Head>
        <title>DVN Scincare - FAQs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <section>
    <div>
      <picture>
          <source srcset="/image/mobile-faqs.svg" media="(max-width: 768px)"/>
          <img src="/image/faqs.png" className={styles.image}/>
      </picture>
          <img src="/image/awankirifooter.png" className={styles.awan} />
          <img src="/image/awankirifooter.png" className={styles.awan2} />
          <img src="/image/Botol_DVN.svg" className={styles.image_product}/>
          <div className={styles.header_text}>
            <p className={styles.faq_header}>FAQ</p>
            <p className={styles.question_header}>(Frequently Asked Questions)</p>
          </div>
        </div>
    </section>
        <Burger />
    <div className={styles.container}>
      <section>
        <div className={styles.title}>
          <p className={styles.faq}>FAQ</p>
          <p className={styles.question}>Frequently Asked Question</p>
        </div>
        <details>
          <summary>Mengapa D.V.N berbeda?
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.carretWH} fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" className={styles.carret}/>
            </svg>
            </span>
          </summary>
          <p>Efek terdepan dari D.V.N adalah untuk mencerahkan dan menjaga kesehatan kulit. D.V.N berbentuk tablet kunyah yang mengandung Collagen Tripeptide, Collagen Peptide, Viqua Pomegranate, L-Glutathione, dan Japanese Knotweed radix Extract.</p>
        </details>
        <details>
          <summary>Siapa yang diangjurkan untuk konsumsi D.V.N?
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.carretWH} fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" className={styles.carret}/>
            </svg>
              </span>
              </summary>
          <p>Produk ini dianjurkan untuk usia 12 tahun keatas. Cocok untuk mereka menjaga kesehatan kulit terutama struktur kulit, pigmentasi, kelembapan, kekenyalan kulit, serta mencegah terjadinya kerutan</p>
        </details>
        <details>
          <summary>Apakah D.V.N aman dikonsumsi?
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.carretWH} fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" className={styles.carret}/>
            </svg>
            </span></summary>
          <p>Aman dikonsumsi karena menggunakan bahan utama yang memiliki kandungan terbaik dan telah memlalui uji laboratorium.</p>
        </details>
        <details>
          <summary>Apakah D.V.N aman dikonsumsi oleh ibu hamil dan menyusui?
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.carretWH} fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" className={styles.carret} /> 
              </svg>
            </span>
            </summary>
          <p>Aman, karena collagen merupakan struktur utama pembentukan kulit dan juga dibutuhkan untuk perkembangan janin, serta menjaga struktur kulit ibu dari stretch mark.</p>
        </details>
      </section>
    </div>
    <Footer />
    </>
  );
}
