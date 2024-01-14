
const PcGame = () => {
  return (
    <section style={{border: '0.01px solid #fffefe2b'}} className='bg-[rgba(37,39,48,0.34)] rounded-2xl max-w-[1750px] m-auto py-12 flex items-center flex-col mt-[130px] '>
      <h1 className='text-center text-4xl'>«Rust — одна из самых жестоких игр в Steam, <br /> и именно это делает ее такой привлекательной».</h1>
      <span className=' mt-6 w-[500px] h-[1.5px] bg-red-900'></span>
        <button className='mt-7'>
          <a target='_blank' className='text-[#e4dad1] text-2xl transition ease-in-out delay-150 hover:text-[#903d3d] ' href="https://www.pcgamer.com/rust-review/">ПК-геймер</a>
        </button>
    </section>
  )
}

export default PcGame