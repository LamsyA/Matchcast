import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        <div>
          <h1>Discover and Engage with NFTs you love</h1>
          <p>Explore and connect with NFTs based on your preference</p>
        </div>
        <div>
          <div></div>
          {/* <Image src={ } width={ } height={ } alt="" /> */}
        </div>
      </div>
      <div>
        <h3>Experience the magic of NFTs today find your perfect match today!</h3>
        <div>
          {/* <Image src={ } width={ } height={ } alt="" /> */}
          <h4>NFT Enthusiasts, Art Collector</h4>
        </div>
      </div>
    </section>
  );
}
