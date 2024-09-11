import { IconType } from "react-icons";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

export type tSocialMidia = {
  icon: IconType;
  link: string;
};

export const socialMidias: tSocialMidia[] = [
  {
    icon: FaInstagram,
    link: "https://vaavante.com.br",
  },
  {
    icon: FaFacebookF,
    link: "https://vaavante.com.br",
  },
  {
    icon: FaYoutube,
    link: "https://vaavante.com.br",
  },
  {
    icon: FaTiktok,
    link: "https://vaavante.com.br",
  },
];


export const whatsAppLink = "https://api.whatsapp.com/send?phone=83996377512&text=Olá, vi seu projeto 'auto peças' gostaria de encomendar um site."