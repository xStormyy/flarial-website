'use client'

import Button from "@/components/ui/Button"
import Image from "next/image"

export default function Hero() {
    return (
        <header className="bg-[url('/images/background.png')] bg-no-repeat bg-cover w-100 h-screen flex overflow-hidden">
            <div className="flex flex-[40% 60%] flex-col justify-center xl:pl-10 h-full">
                <h1 className="text-5xl"><span className="text-primary">Flarial</span> Client</h1>
                <p className="w-[30ch]">A PvP client for Minecraft: Bedrock Edition</p>
                <Button variant="primary" href="https://raw.githubusercontent.com/flarialmc/newcdn/main/launcher/Flarial.Launcher.exe">Download</Button>
            </div>
            <div className="flex items-end justify-end w-full h-full">
                <img height="711" width="900" alt="Flarial Mod Menu" src="/images/mod_menu.png"/>
            </div>
        </header>
    )
}
