import { Link } from 'react-router-dom';

const Header = () => {
  const menu = [{title: 'Сервера',link: '/servers'},{title: 'Официальные скины',link: '/skins'},{title: 'Тест на раст',link: '/rust/gameQuiz'},{title: 'Предметы'},{title: 'Купить Rust',link: 'https://store.steampowered.com/app/252490/Rust/'}]


  return (
    <header className="py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img width={60} height={60} src="/rust-icon-512 copy.png" alt="" />
          </Link>
          <ul className="flex items-center gap-6 uppercase cursor-pointer text-lg ">
            {menu.map((el,index) => (
              <Link key={index} to={`${el.link}`}>
              <li className="text-[#e4dad1] hover:text-[#f8f7f4]">{el.title}</li>
              </Link>
            ))}
          </ul>
        </div>

      </div>
    </header>
  );
};

export default Header;
