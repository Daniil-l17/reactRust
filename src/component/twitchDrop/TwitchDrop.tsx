const TwitchDrop = () => {
  return (
    <section className="py-[40px]">
      <div
        className="h-[800px] rounded-[40px] m-auto max-w-[1850px] flex justify-center"
        style={{
          backgroundImage: 'url(/twitch-bg.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          border: '1.5px solid #fffefe2b'
        }}>
        <div className="mt-[260px] flex flex-col items-center">
          <h1 className=" mb-8 text-[while] text-[90px] font-bold uppercase text-center">
            Twitch Drops
          </h1>
          <p className="text-center text-[#c8bbdc]">
            Ежемесячные подарки Twitch Drops от ваших любимых стримеров.
          </p>
          <a href="https://twitch.facepunch.com/" target="_blank">
            <button className="mt-[40px] rounded-md font-semibold text-[white] px-6 py-4 bg-[red] transition duration-150 hover:bg-[#5a2525]">
              Получить Twitch Drops
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TwitchDrop;
