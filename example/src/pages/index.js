import Image from 'next/image'
import { Inter } from 'next/font/google'
import {BunkCards} from "components/customBlocks/bunkCards/bunkCards";
import {Converter} from "components/customBlocks/converter/converter";
import {InviteFriend} from "components/customBlocks/inviteFriendCard/inviteFriendCard";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <BunkCards/>
      <InviteFriend/>

    </main>
  )
}
