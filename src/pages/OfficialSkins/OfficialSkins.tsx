
import SkinDetail from '../../component/SkinDetail/SkinDetail';
import NavFooter from '../../component/predFooter/NavFooter';
import SkinHazmat from '../../component/skinsHazmat/SkinHazmat';
import { Skins } from './skins/Skins';

export const OfficialSkins = () => {
  return (
    <section className="">
      <div
        className="min-h-[700px] m-auto max-w-[1830px] rounded-3xl flex justify-center py-4 items-center"
        style={{
          backgroundImage: `url(./skins-header-bg-compressed.jpg)`,
          backgroundPosition: 'center',
          backgroundAttachment: 'local',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          border: '0.01px solid #fffefe2b'
        }}>
        <img src="./official-skins-logo.png" className="w-[700px] h-[250px]" alt="" />
      </div>
      <div style={{border: '0.01px solid #fffefe2b'}} className=" rounded-3xl bg-[rgba(37,39,48,0.34)] max-w-[1830px] py-14 my-20 m-auto">
        <h1 className="text-center uppercase text-5xl mb-4">Building Skins</h1>
        <p className=" uppercase text-center text-lg mb-7">
          Theme your buildings to fit your aesthetic{' '}
        </p>
        <div className=" flex justify-center gap-[60px] flex-wrap px-8">
          {Skins.map(({ Building }, index) => (
             // @ts-ignore */
            <SkinDetail key={index} el={Building} />
          ))}
        </div>
      </div>
      <div style={{border: '0.01px solid #fffefe2b'}} className="rounded-3xl bg-[rgba(37,39,48,0.34)] max-w-[1830px] py-14 my-20 m-auto">
        <h1 className="text-center uppercase text-5xl mb-4">Скины Хазматов</h1>
        <p className=" uppercase text-center text-lg mb-7">идеальная защита от непогоды </p>
        <div className=" flex justify-center gap-[60px] flex-wrap px-8">
        {Skins.map(({ Hazmat }, index) => (
           // @ts-ignore */
            <SkinHazmat key={index} el={Hazmat} />
          ))}
        </div>
      </div>
      <NavFooter/>
    </section>
  );
};
