
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    HeartFilledIcon,
    SearchIcon,
    Logo,
} from "@/components/icons";
import Image from "next/image";

export const Footer = () => {

    return (
        <NextUINavbar maxWidth="xl" position="sticky" className="flex items-center">
            <NavbarContent className="basis-1/5 sm:basis-full flex flex-col items-start" justify="end">
                <NavbarItem className="flex flex-col gap-2">
                    <NavbarBrand as="li" className="gap-3 max-w-fit">
                        <NextLink className="flex justify-start items-center gap-1" href="/">
                            <Logo />
                            <p className="font-bold text-inherit">ACME</p>
                        </NextLink>
                    </NavbarBrand>
                    <p>Platform for discovering and connecting with NFT holders</p>
                    <p>Connect with us:</p>
                    <div>
                        {/* <Image src={ } width={ } height={ } alt="" /> */}
                        {/* <Image src={ } width={ } height={ } alt="" /> */}
                        {/* <Image src={ } width={ } height={ } alt="" /> */}
                    </div>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="flex flex-col gap-2">
                    <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                        <p>Collections</p>
                    </Link>
                    <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                        <p>Matching</p>
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <p>Connections</p>
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <p>Premium</p>
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="flex flex-col gap-2">
                    <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                        <p>Creators</p>
                    </Link>
                    <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                        <p>About Us</p>
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <p>Opportunities</p>
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <p>Updates</p>
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="flex flex-col gap-2">
                    <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                        <p>Resources</p>
                    </Link>
                    <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                        <p>Blogs</p>
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <p>FAQs</p>
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <p>Assistance</p>
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="flex flex-col gap-2">
                    <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                        <p>Support</p>
                    </Link>
                    <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                        <p>Chat</p>
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <p>Feedback</p>
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <p>Contact Us</p>
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
};
