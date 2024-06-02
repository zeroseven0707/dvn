import Head from "next/head";
import Footer from './components/_footer';
import FormJoin from './components/_join_dealers';
import styles from "../public/styles/Faqs.module.css";

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
            <p className={styles.faq_header}>FaQ</p>
            <p className={styles.question_header}>(Frequently Asked Questions)</p>
          </div>
        </div>
    </section>
    <div className={styles.container}>
      <section>
        <div className={styles.title}>
          <p className={styles.faq}>FAQ</p>
          <p className={styles.question}>Frequently Asked Question</p>
        </div>
        <details>
          <summary>Mengapa D.V.N berbeda?
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" className={styles.carret}/>
            </svg>
            </span>
          </summary>
          <p>Efek terdepan dari D.V.N adalah untuk mencerahkan dan menjaga kesehatan kulit. D.V.N berbentuk tablet kunyah yang mengandung Collagen Tripeptide, Collagen Peptide, Viqua Pomegranate, L-Glutathione, dan Japanese Knotweed radix Extract.</p>
        </details>
        <details>
          <summary>Accordion 2
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" className={styles.carret}/>
            </svg>
              </span>
              </summary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo fugiat perspiciatis! Nihil at
            voluptatibus veniam inventore, blanditiis quidem cumque, provident architecto voluptate asperiores culpa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </details>
        <details>
          <summary>Accordion 3
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" className={styles.carret}/>
            </svg>
            </span></summary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo fugiat perspiciatis! Nihil at
            voluptatibus veniam inventore, blanditiis quidem cumque, provident architecto voluptate asperiores culpa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </details>
        <details>
          <summary>Accordion 4
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" className={styles.carret} /> 
              </svg>
            </span>
            </summary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo fugiat perspiciatis! Nihil at
            voluptatibus veniam inventore, blanditiis quidem cumque, provident architecto voluptate asperiores culpa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </details>
      </section>
    </div>
    </>
  );
}
