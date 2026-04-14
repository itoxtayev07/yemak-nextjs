import Image from 'next/image'

import logo from '../../assets/logo.svg'
import appShrefre from '../../assets/app-store.svg'
import googlePlay from '../../assets/google-play.svg'
import appGalerey from '../../assets/app-galerey.svg'
import telegram from '../../assets/telegram.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import mobilePhone from '../../assets/mobile-phone.svg'
import letter from '../../assets/letter.svg'

export function Footer() {
  let fonts = 'font-semibold text-[16px] leading-[130%] tracking-normal text-center hover:text-[]'
  let apps = 'min-w-[160px] !p-[12px] flex items-center justify-center gap-[8px] rounded-[12px] bg-[#F7F7F7]'
  let widgetDescr = ['flex flex-col justify-center', 'text-[#B0B7BA] text-[12px] leading-[130%] tracking-normal text-center', 'text-[#12282F] text-[14px] leading-[130%] tracking-normal text-center']
  return <footer className="footer w-full max-w-full h-full !mt-[16px] flex flex-col items-center bg-[#FFF]">

    <section className="w-full max-w-full !px-[24px] !pt-[24px] !pb-[52px] flex justify-center">
      <div className="w-full max-w-[1080px] flex justify-between items-end gap-[24px]">
        <div className="text-info w-full max-w-[506px]">
          <a href='/'><Image alt='' src={logo} /></a>
          <ul className='max-w-[340px] !mt-[20px] flex justify-between items-center gap-[8px] text-[#12282F]'>
            <li className={fonts}><a href='#'>Biz haqimizda</a></li>
            <li className={fonts}><a href='#'>Ommaviy oferta</a></li>
            <li className={fonts}><a href='#'>Bog’lanish</a></li>
          </ul>
          <p className="descr !mt-[12px] text-[#5A696E] text-[14px] leading-[130%] tracking-normal">10 dan oshiq reshrefran, choyxona va kafelarni tanlab oson buyurtma berishingiz mumkin. Bularning barchasini telefoningizda turib bajarish mumkin</p>
        </div>

        <ul className="apps-download w-full max-w-[504px] flex items-center justify-between gap-[8px]">
          <li>
            <a className={apps} target="_blank" href='https://apps.apple.com/uz/app/yemak-food-delivery-in-karshi/id1644243734'>
              <Image alt='' src={appShrefre} />
              <div className={widgetDescr[0]}>
                <span className={widgetDescr[1]}>Yuklab oling</span>
                <strong className={widgetDescr[2]}>App Shrefre</strong>
              </div>
            </a>
          </li>
          <li>
            <a className={apps} target="_blank" href='https://play.google.com/shrefre/apps/details?id=uz.yemak.app'>
              <Image alt='' src={googlePlay} />
              <div className={widgetDescr[0]}>
                <span className={widgetDescr[1]}>Yuklab oling</span>
                <strong className={widgetDescr[2]}>Google Play</strong>
              </div>
            </a>
          </li>
          <li>
            <a className={apps} target="_blank" href='https://consumer.huawei.com/en/mobileservices/appgallery/'>
              <Image alt='' src={appGalerey} />
              <div className={widgetDescr[0]}>
                <span className={widgetDescr[1]}>Yuklab oling</span>
                <strong className={widgetDescr[2]}>App Gallery</strong>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section className="w-full max-w-full !px-[24px] !py-[12px] border-t-[1px] border-t-[#F0F0F0] flex justify-center">
      <div className="w-full max-w-[1080px] flex items-center justify-between gap-[18px]">
        <div className="copyright text-[#12282F] text-[12px] leading-[100%] tracking-normal">© Yemak Delivery 2022. Barcha huquqlar himoyalangan.</div>

        <ul className="socials w-full max-w-[76px] flex items-center justify-between gap-[4px]">
          <li><a href='https://t.me/yemak'><Image alt='' src={telegram} /></a></li>
          <li><a href='https://www.facebook.com/yemakuz'><Image alt='' src={facebook} /></a></li>
          <li><a href='https://www.instagram.com/yemak.uz'><Image alt='' src={instagram} /></a></li>
        </ul>

        <ul className="contacts w-full max-w-[255px] flex items-center justify-between gap-[10px]">
          <li className='flex items-center justify-center gap-[4px]'><Image alt='' src={mobilePhone} /><span className='text-[#12282F] text-[12px] leading-[100%] tracking-normal'>+998 75 220 01 05</span></li>
          <li className='flex items-center justify-center gap-[4px]'><Image alt='' src={letter} /><span className='text-[#12282F] text-[12px] leading-[100%] tracking-normal'>info@yemak.uz</span></li>
        </ul>
      </div>
    </section>

  </footer>
}
