import { socialMidias } from "@/ProjectData/socialMidias";
import SocialMidiasIcon from "../socialMidiaIcons";

export default function PersonFooter() {
  return(
    <footer className="bg-main1 pt-12 pb-16 w410:p-4 flex justify-around items-center flex-wrap gap-12 w410:gap-3 ">
      <div>
        <h6 className="text2 mb-2 text-center w410:text-start">Social</h6>
          <ul className="flex gap-1" id="social">
            {socialMidias.map((midia,index) => (
              <li key={index}>
                <SocialMidiasIcon icon={midia.icon} link={midia.link}/>
              </li>
            ))}
          </ul>
      </div>
      <div className="flex flex-col">
        <h6 className="text2 mb-1 text-center w410:text-start">Horarios de atendimento</h6>
        <span className="text11">
          08:00 às 20:00 - Segunda a Sexta,
        </span>
        <span className="text11">
          09:00 às 15:00 - Sabado
        </span>
        <span className="text11">
          horário de Brasília
        </span>
        <span className="text11">
          {`(Exceto domingo e feriados)`}
        </span>
      </div>
    </footer>
  )
}