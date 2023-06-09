import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import LightBlue from "./LightBlueWave";
import DarkBlue from "./DarkBlueWave";

const FooterCTA = () => {
  return (
    <>
      <div className="bg-someBlue-400">
        <LightBlue />
        <div className="-mt-1 flex flex-col items-center justify-center gap-4 pb-6">
          <h4 className="text-bold px-8 text-center text-base sm:text-xl ">
            Connect with us to explore your concepts or request tailored items
          </h4>
          <button className="rounded-full border border-neutral-400 bg-white py-2 px-5 font-semibold duration-200 ease-in-out hover:scale-105">
            <Link href="/contact">Get in touch!</Link>
          </button>
        </div>
      </div>
      <div className="bg-someBlue-500">
        <DarkBlue />
        <Container classes="py-2.5 text-center text-white">
          Every product is 100% handmade.
        </Container>
      </div>
    </>
  );
};
export default FooterCTA;
