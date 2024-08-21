import MainBanner from "@/components/banners/mainBanner";
import CustomHeader from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CustomHeader/>
      <MainBanner/>
    </main>
  );
}
