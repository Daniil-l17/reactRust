import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const menu = [{title: 'Сервера',link: '/servers'},{title: 'Официальные скины',link: '/skins'},{title: 'Предметы'},{title: 'Купить Rust',link: 'https://store.steampowered.com/app/252490/Rust/'}]


  return (
    <header className="py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img width={60} height={60} src="/rust-icon-512 copy.png" alt="" />
          </Link>
          <ul className="flex items-center gap-6 uppercase cursor-pointer text-lg ">
            {menu.map((el,index) => (
              <NavLink key={index} className={({isActive}) => isActive ? ' text-[#564ad8]' : 'text-[#dbd8d8] hover:text-[#564ad8] transition duration-150'} to={`${el.link}`}>
              {el.title}
              </NavLink>
            ))}
          </ul>
        </div>

      </div>
    </header>
  );
};

export default Header;
