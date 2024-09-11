import BigOrderButton from '@/components/buttons/bigOrderButton'
import Image from 'next/image'
import './styles.css'

export default function MainBanner() {
  return (
    <section className="bg-main1 p-4 flex justify-between items-center">
      <div className="w-full sm:w-[40%] flex flex-col gap-3">
        <h1 className="text1 animate-fadeIn animate-slideInTop">
          Silva autopeças Excelência em servir você.
        </h1>

        <p className="text4 animate-slideInTop delay-[2000ms]">
          Há 10 anos servindo com respeito, pois para nós sua satisfação é
          prioridade. Apaixonados por carros, amantes da automobilistica e
          obsecados pela excelência.
        </p>

        <BigOrderButton className="animate-slideInTop" />
      </div>
      <div className="w-[45%] hidden sm:flex items-center ">
        <Image
          src="https://cdn.autopapo.com.br/box/uploads/2018/02/06172935/1967-vw-kombi-de-volta-para-o-futuro1.png"
          alt="kombi personalizada pelo Eleen autopeças"
          width={720}
          height={720}
          className="w-full object-scale-down rounded-lg animate-fadeIn"
        />
      </div>
    </section>
  )
}
