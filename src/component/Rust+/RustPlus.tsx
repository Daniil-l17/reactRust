const RustPlus = () => {
  return (
    <section className="py-[40px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[70px] uppercase mb-6 font-medium">
              Rust+ <br />
              Companion
            </h1>
            <p className=" text-lg">
              Официальное приложение-компаньон Rust — оставайтесь на связи с игрой,
              <br /> чтобы больше никогда не пропустить важный момент. <br /> Координируйте свои
              действия со своей командой, получайте оповещения, когда на вас нападают, удаленно
              устанавливайте ловушки и многое другое!
            </p>
            <button className=" uppercase bg-[red] rounded mt-6 py-3 px-2 font-semibold">Читать еще</button>
          </div>
          <div>
            <img src="/rustplusimage2.png" alt="" />
          </div>
        </div>
      </div>
      <div style={{ border: '1px solid #fffefe2b' }} className="relative opacity-70">
        <div className="h-[600px]"
          style={{
            backgroundImage: 'url(/image-section.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
          }}></div>
      </div>
    </section>
  );
};

export default RustPlus;
