import { UserInfo } from 'components/customBlocks/userInfo/userInfo'
import { WatchList } from 'components/customBlocks/watchList/watchList'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Test() {
    return (
        <div className="container">
            <UserInfo />
            <WatchList/>
        </div>
    )
}
