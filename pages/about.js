import Head from "next/head";
import about from "@/styles/about.module.css";
import Image from "next/image";
import Footer from './components/_footer';
import Burger from "./components/_burger";
import { useTranslation } from 'next-i18next';


export default function About() {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>DVN Scincare - About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section>
          <div className={about.about}>
            <picture>
              <source srcSet="/image/mobile-about.svg" media="(max-width: 768px)"/>
              <img src="/image/about.svg" className={about.image}/>
            </picture>
            <div className={about.aboutheader}>
            <div className={about.aboutheadertitle}>
              <p className={about.titleheader} suppressHydrationWarning>{t('about')}</p>
            </div>
            <div className={about.aboutheadertext}>
              <p className={about.titledetail} suppressHydrationWarning>{t('dvn story')}</p>
            </div>
            </div>
          </div>
          <div>
            <img src="/image/garis.png"className={about.garisimage}/>
            <img src="/image/awankirifooter.png" className={about.awan1}/>
            <img src="/image/awankirifooter.png" className={about.awan2}/>
            <img src="/image/aboutkanan.svg" className={about.awan3}/>
          </div>
          <div className={about.tombol}>
            <button className={about.brand} suppressHydrationWarning>{t('brand')}</button>
            <button className={about.management} suppressHydrationWarning>{t('management')}</button>
          </div>
        </section>
      <Burger />
        <section className={about.section}>
            <div className={about.col_1}>
            <div className={about.container_core}>
                <p className={about.core} suppressHydrationWarning><span className={about.black} suppressHydrationWarning>{t('core')}</span> {t('brand values')}</p>
                <p className={about.value_core} suppressHydrationWarning>{t('dvn core')}</p>
              </div>
            </div>
            <div className={about.col_2}>
              <picture>
                <source srcSet="/image/mobile-dvn.svg" media="(max-width: 768px)"/>
                <img src="/image/dvn_about.svg" layout="responsive"/>
              </picture>
            </div>
        </section>
        <section className={about.section}>
            <div className={about.col_3}>
            <picture className={about.duo}>
              <source srcSet="/image/mobile-duo.svg" media="(max-width: 768px)"/>
              <Image src="/image/duo.svg" width={295.7} height={149.27} layout="responsive"/>
            </picture>
            </div>
            <div className={about.col_4}>
            <div className={about.container_core}>
                <p className={about.core} suppressHydrationWarning><span className={about.black} suppressHydrationWarning>{t('global leading')}</span><br />{t('beauty concept')}</p>
                <p className={about.value_core} suppressHydrationWarning>{t('dvn adheres')}</p>
              </div>
            </div>
        </section>
        <section className={about.section}>
            <div className={about.col_5}>
            <div className={about.container_core}>
                <p className={about.core} suppressHydrationWarning><span className={about.black} suppressHydrationWarning>{t('brand')}</span><br /> {t('original intention')}</p>
                <p className={about.value_core} suppressHydrationWarning>{t('dvn original')}</p>
              </div>
            </div>
            <div className={about.col_6}>
            <picture className={about.botol_dvn}>
              <source srcSet="/image/mobile-botol.svg" media="(max-width: 768px)"/>
              <Image src="/image/botol_dvn.svg" width={0.7} height={149.27} layout="responsive" />
            </picture>
            </div>
        </section>
        <section className={about.section}>
            <div className={about.col_one_image}>
            <div className={about.content}>
                <p className={about.core_down} suppressHydrationWarning>{t('brand mission')}</p>
                <p className={about.value_core_down} suppressHydrationWarning>{t('dvn mission')}</p>
              </div>
            {/* <Image src="/image/blur1.png" className={about.blur1} width={295.7} height={149.27}/> */}
            </div>
            <div className={about.col_two_image}>
            <div className={about.content}>
                <p className={about.core_down} suppressHydrationWarning>{t('brand vision')}</p>
                <p className={about.value_core_down} suppressHydrationWarning>{t('dvn vision')}</p>
              </div>
            {/* <Image src="/image/blur2.png" className={about.blur2} width={295.7} height={149.27}/> */}
            </div>
        </section>
        <section className={about.sectionAdvan}>
            <div className={about.container_text}>

              <div className={about.container_text_1}>
                <h1 suppressHydrationWarning>{t('brand')}<span suppressHydrationWarning> {t('advantages')}</span></h1>
                <div className={about.p_layout}>
                <p suppressHydrationWarning>{t('leading technologi')}</p>
                <p suppressHydrationWarning>{t('inner and outer')}</p>
                </div>
              </div>

              <img src="/image/dvn-group.png" />

              <div className={about.container_text_3}>
                <h1 suppressHydrationWarning>{t('customized')} <span suppressHydrationWarning>{t('solution')}</span></h1>
                <p suppressHydrationWarning>{t('product our')}</p>
              </div>

            </div>
            <div className={about.container_text_2}>
              <h1 suppressHydrationWarning>{t('brand')}<span suppressHydrationWarning> {t('philosophy')}</span></h1>
              <p suppressHydrationWarning>{t('we upload')}</p>
            </div>
        </section>
        <Footer />
    </>
  );
}
