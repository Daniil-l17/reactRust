import { CiInstagram } from 'react-icons/ci';
import { FaDiscord } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
const Footer = () => {
  const Seti = [
    { img: <CiInstagram />, link: 'https://www.instagram.com/fcpnch/' },
    { img: <FaDiscord />, link: 'https://discord.com/invite/rust' },
    { img: <FaFacebookF />, link: 'https://www.facebook.com/facepunchrust/' },
    { img: <FaYoutube />, link: 'https://www.youtube.com/c/fcpnch' },
    { img: <FaTwitter />, link: 'https://twitter.com/playrust' },
    { img: <FaTiktok />, link: 'https://www.tiktok.com/@fcpnchrust' },
  ];

  return (
    <footer style={{border: '0.01px solid #fffefe2b'}} className="py-[40px] rounded-lg  bg-[rgba(21,23,31,0.34)]">
      <div className="container">
        <div className="flex items-center justify-between">
          <h3 className=" text-lg font-semibold uppercase">
            © 2024 Facepunch Studios. All rights reserved.
          </h3>
          <ul className="flex items-center gap-5">
            {Seti.map((el, index) => (
              <a key={index} target="_blank" href={el.link}>
                <li
                  className="bg-[#55514e] text-[#fff9f9] flex items-center text-xl justify-center rounded-full py-2 px-2 hover:bg-[#181818] transition duration-300 "
                  >
                  {el.img}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
