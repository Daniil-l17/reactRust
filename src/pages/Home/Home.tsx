import PcGame from '../../component/PcGame/PcGame'
import Resap from '../../component/Resap/Resap'
import RustPlus from '../../component/Rust+/RustPlus'
import BeforeHeader from '../../component/header/BeforeHeader'
import NavFooter from '../../component/predFooter/NavFooter'
import TwitchDrop from '../../component/twitchDrop/TwitchDrop'


const Home = () => {
  return (
    <>
    <BeforeHeader/>
    <PcGame/>
    <Resap/>
    <TwitchDrop/>
    <RustPlus/>
    <NavFooter/>
    </>
  )
}

export default Home