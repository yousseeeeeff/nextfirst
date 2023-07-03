import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Button} from "rma-ui";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
<p>hello </p>
        <div>
            <Button>1st button</Button>
        </div>
    </main>
  )
}
