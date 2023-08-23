import { Inter } from "next/font/google";
import TopMenuBar from "@/Components/TopMenuBar/TopMenuBar";
import FirstPage_Welcome from "@/Components/FirstPage_Welcome/FirstPage_Welcome";
import SecondPage_Works from "@/Components/SecondPage_Works/SecondPage_Works";
import ThirdPage_Test from "@/Components/ThirdPage_Test/ThirdPage";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="overflow-hidden bg-black">
      <TopMenuBar />
      <FirstPage_Welcome></FirstPage_Welcome>
      {/* <SecondPage_Works></SecondPage_Works> */}
      <ThirdPage_Test></ThirdPage_Test>
    </main>
  );
}
