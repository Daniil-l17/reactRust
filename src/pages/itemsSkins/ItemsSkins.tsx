const ItemsSkins = () => {
  return (
    <section className=" pb-9">
      <div className=" w-full flex px-11 flex-col justify-center rounded-xl m-auto h-[800px]"
        style={{
          backgroundImage: `url(/background1x.jpg)`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          border: '0.01px solid #fffefe2b',
        }}>
          <h1 className=" uppercase text-6xl font-semibold text-[#c64b36]">Rust Items & Skins</h1>
          <h2 className=" uppercase text-7xl mt-4 mb-4 font-semibold text-[#fff]">Википедия</h2>
          <p className=" text-[#828f97] font-semibold w-[400px] text-xl">TotalRust — это ваше место номер один, где можно найти информацию, историю цен и лучшие цены на все скины и предметы Rust.</p>
        </div>
    </section>
  );
};

export default ItemsSkins;
