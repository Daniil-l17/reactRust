import { useEffect, useState } from 'react';

const BeforeHeader = () => {
  const [time, setTime] = useState(new Date());
  const imgMain = [
    '/abyss_section_background1.jpg',
    '/skins-header-bg-compressed.jpg',
    '/arctic-pack-bg.jpg',
    '/rust_13_nvg.jpg',
    '/rust_23_oilrig.jpg',
    '/rust_07_bradley.jpg',
    '/rust_11_modularvehicles.jpg'
  ];
  const [res, setRes] = useState('');

    useEffect(() => {
    const interv = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interv);
  }, [time]);


  useEffect(() => {
    const result = imgMain[Math.floor(Math.random() * imgMain.length)];
    setRes(result);
  }, []);

  return (
    <div
      className="min-h-[765px] rounded-3xl py-[50px] flex flex-col m-auto max-w-[1880px] justify-center px-[90px]"
      style={{
        backgroundImage: `url(./${res})`,
        backgroundPosition: 'center',
        backgroundAttachment: 'local',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: '0.01px solid #fffefe2b',
      }}>
      <h1 className=" text-9xl ">
        Иследовать <br /> Строить <br /> Выживать
      </h1>
      <p className="w-[800px] mt-9 text-left text-[22px]">
        Единственная цель в Rust — выжить. <br /> Все хочет, чтобы ты умер- дикая природа острова и
        другие обитатели, <br /> окружающая среда, другие выжившие. <br /> Сделайте все возможное,
        чтобы продержаться еще одну ночь.
      </p>
      <div className='flex items-center gap-10 mt-[40px]'>
        {' '}
        <button className="py-3 px-4 text-lg text-[#e4dad1] rounded bg-[#cd412b]">Купить раст</button>
        <a href="https://www.youtube.com/watch?v=LGcECozNXEw" target="_blank">
          <button className="py-3 rounded px-5 text-lg text-[#e4dad1] transition ease-in-out delay-150 bg-[#2a2928] border-2 border-[#4c4946] border-solid hover:bg-[#727171]  duration-300">
            Смотреть триллер
          </button>
        </a>
      </div>
      <div className=' font-semibold'>
        <h1 className='text-right'>{time.toLocaleTimeString()}</h1>
      </div>
    </div>
  );
};

export default BeforeHeader;
