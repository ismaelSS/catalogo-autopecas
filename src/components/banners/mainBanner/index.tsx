import BigOrderButton from "@/components/buttons/bigOrderButton";
import Image from "next/image";

export default function MainBanner() {
  return(
    <section className="bg-main1 p-4 flex justify-between items-center">
      <div className="w-[40%] flex flex-col gap-3">
        <h1 className="text1">Ellen autopeças Excelência em servir você.</h1>

        <div className="flex flex-col gap-2">
          <p className="text4">Há 10 anos servindo com respeito, pois para nós sua satisfação é prioridade. Apaixonados por carros, amantes da automobilistica e obsecados pela excelência.</p>
          {/* <div className="flex flex-col">
            <p className="text5">Seg - Sex: <span className="text-text3/85">7hrs - 16hrs</span></p>
            <p className="text5">Sab: <span className="text-text3/85">7hrs - 12hrs</span></p>
          </div> */}
        </div>
        <BigOrderButton/>
      </div>
      <div className="w-[45%] flex items-center">
        <Image 
          src="https://cdn.autopapo.com.br/box/uploads/2018/02/06172935/1967-vw-kombi-de-volta-para-o-futuro1.png"
          alt="kombi personalizada pelo Eleen autopeças"
          width={720}
          height={720}
          className="w-full object-scale-down rounded-lg"
        />
      </div> 
    </section>
  )
}