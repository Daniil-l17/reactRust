import { CgAlbum } from 'react-icons/cg';

const Resap = () => {
  return (
    <section className="py-[180px]">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="resap">
            <div className="res rounded-[8px] ">
              <span>
                <CgAlbum />
              </span>
              Последние новости
            </div>
            <img
              style={{ border: '2px solid #fffefe2b' }}
              className="w-[1100px] rounded-[30px] cursor-pointer"
              src="./../../../src/image/2023-recap.jpg"
              alt=""
            />
            <div style={{ border: '2px solid #fffefe2b' }} className="surving rounded-xl ">
              <h1 className="text-center uppercase text-3xl mb-3    ">Пережить десятилетие</h1>
              <p className="text-center">
                Серверы очищены, Санта собирает вещи и убирает тела. <br /> Мы надеемся, что вам
                понравился праздничный сезон. В этом блоге мы подводим итоги 2023 года <br /> и
                рассказываем о некоторых предстоящих изменениях.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resap;
