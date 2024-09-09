import { tSocialMidia } from "@/ProjectData/socialMidias";
import Link from "next/link";

export default function SocialMidiasIcon({ icon: Icon, link }: tSocialMidia) {
  return (
    <Link href={link} target="_blank">
      <div className="rounded-full bg-slate-50 w-10 h-10 flex items-center justify-center shadow-inner shadow-black">
        <Icon className="text-main2 text-xl"/>
      </div>
    </Link>
  );
}
