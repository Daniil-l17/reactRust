import { Link } from "react-router-dom";

const NavFooter = () => {

  const items = ['Новости','Купить Руст','Компаньон','Твич-дропы','Мерч','Консоль','фиксирует','Журнал изменений','Поддерживать','Юридический']

  return (
    <section className="py-[90px]">
      <div className="flex items-center flex-col">
      <div className="flex items-center justify-center gap-8">
        <Link to="/">
        <svg
          width="206"
          className=" cursor-pointer"
          height="48"
          viewBox="0 0 206 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path
              d="M54.125 0V48H64.3086V34.0516H68.2332V48H88.296V37.9317H78.4169V34.0516H88.296V0H54.125ZM78.1124 23.9833H64.2748V10.0683H78.1124V23.9833Z"
              fill="#A4A6A7"
            />
            <path
              d="M117.358 37.9317H103.521V0H93.3711V48H127.508V0H117.358V37.9317Z"
              fill="#A4A6A7"
            />
            <path
              d="M132.583 0V29.0341H156.57V37.9317H132.583V48H166.754V18.9659H142.767V10.0683H166.754V0H132.583Z"
              fill="#A4A6A7"
            />
            <path d="M171.829 0V10.0683H183.84V48H193.99V10.0683H206V0H171.829Z" fill="#A4A6A7" />
            <path d="M49.05 0H0.5V48H49.05V0Z" fill="#CD412B" />
            <path
              d="M16.4015 21.6417L6.08252 19.9692V30.1379L16.4015 28.4654V21.6417Z"
              fill="#1E2020"
            />
            <path d="M21.5779 21.6416H18.127V28.4318H21.5779V21.6416Z" fill="#1E2020" />
            <path
              d="M29.2915 15.7211L30.9832 5.51904H20.698L22.3896 15.7211H29.2915Z"
              fill="#1E2020"
            />
            <path d="M29.2577 17.427H22.3896V20.8388H29.2577V17.427Z" fill="#1E2020" />
            <path
              d="M25.8401 22.6419L23.3999 25.0544L25.8401 27.467L28.2802 25.0544L25.8401 22.6419Z"
              fill="#1E2020"
            />
            <path
              d="M30.1038 34.0516L36.1598 42.4808L43.4677 35.2558L34.9418 29.2683L30.1038 34.0516Z"
              fill="#1E2020"
            />
            <path
              d="M31.3042 25.6617L26.4478 30.4631L28.8879 32.8757L33.7443 28.0743L31.3042 25.6617Z"
              fill="#1E2020"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="205.5" height="48" fill="white" transform="translate(0.5)" />
            </clipPath>
          </defs>
        </svg>
        </Link>
        <svg
          width="32"
          
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <path d="M1 1L31 31" stroke="#BAB1A8" stroke-width="2" />
            <path d="M31 1L0.999999 31" stroke="#BAB1A8" stroke-width="2" />
          </g>
        </svg>
        <a target="_blank" href="https://facepunch.com/">
        
        <svg
        className=" cursor-pointer"
          width="214"
          height="48"
          viewBox="0 0 214 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.4625 0C11.2594 0 0.5 10.7762 0.5 24C0.5 37.2238 11.2594 48 24.4625 48C37.6656 48 48.425 37.2238 48.425 24C48.425 10.7762 37.6996 0 24.4625 0ZM24.4625 42.6289C14.2123 42.6289 5.89665 34.3003 5.89665 24.034C5.89665 13.7677 14.2123 5.43909 24.4625 5.43909C34.7127 5.43909 43.0283 13.7677 43.0283 24.034C43.0283 34.3003 34.7127 42.6289 24.4625 42.6289ZM23.3425 21.1781L19.5071 17.3707L16.69 20.1923L13.9747 17.4387L10.1394 21.2461L12.8886 23.9996L10.0036 26.8892L13.839 30.7305L16.69 27.841L19.6429 30.7985L23.4783 26.9572L20.5254 23.9996L23.3425 21.1781ZM38.8196 21.0767L36.0025 23.8982L38.9553 26.8558L35.12 30.6631L32.1671 27.7056L29.2821 30.5951L25.4807 26.7538L28.3657 23.8982L25.6165 21.1447L29.4179 17.3033L32.1671 20.0569L34.9842 17.2354L38.8196 21.0767Z"
              fill="#EC1C24"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60.9724 16.3558C60.9724 14.3952 61.5432 12.8839 62.6847 11.8197C63.8262 10.7556 65.4824 10.2224 67.6534 10.2224C68.1057 10.2224 68.446 10.2332 68.6721 10.2504V14.4038L68.1337 14.3759C67.3411 14.3759 66.7639 14.5457 66.4064 14.8854C66.0467 15.2229 65.8485 15.7711 65.8119 16.5235H68.6743V20.5931H65.8141V32.2946H60.9724V20.5953H59.075V16.5257H60.9724V16.3558ZM211.686 17.9918C212.895 19.1678 213.5 20.9156 213.5 23.2288V32.2924H208.902V23.9339C208.902 22.6784 208.626 21.7411 208.077 21.1241C207.525 20.5071 206.731 20.1975 205.688 20.1975C204.527 20.1975 203.606 20.5565 202.916 21.2724C202.229 21.9883 201.885 23.0525 201.885 24.4649V32.2924H197.286V10.4567H201.885V18.1079C202.494 17.4995 203.231 17.033 204.097 16.7105C204.96 16.3859 205.904 16.2247 206.927 16.2247C208.891 16.2247 210.478 16.8137 211.686 17.9918ZM175.897 17.9918C177.106 19.1677 177.711 20.9155 177.711 23.2287V32.2924H173.113V23.9339C173.113 22.6784 172.837 21.741 172.288 21.1241C171.736 20.5071 170.942 20.1975 169.899 20.1975C168.738 20.1975 167.816 20.5565 167.127 21.2724C166.44 21.9883 166.096 23.0524 166.096 24.4649V32.2924H161.497V16.4611H165.889V18.3142C166.498 17.6478 167.254 17.1318 168.159 16.7685C169.063 16.4052 170.054 16.2246 171.138 16.2246C173.1 16.2246 174.689 16.8137 175.897 17.9918ZM86.8243 16.4632V32.2923H82.4327V30.4671C81.2934 31.8409 79.6414 32.5267 77.4791 32.5267C75.9865 32.5267 74.6339 32.1934 73.4257 31.527C72.2174 30.8606 71.2698 29.9082 70.5806 28.672C69.8913 27.4359 69.5489 26.0041 69.5489 24.3767C69.5489 22.7493 69.8913 21.3175 70.5806 20.0814C71.2676 18.8452 72.2174 17.895 73.4257 17.2264C74.6339 16.56 75.9865 16.2268 77.4791 16.2268C79.5036 16.2268 81.0845 16.8653 82.226 18.1401V16.4632H86.8243ZM81.1642 27.5692C81.9309 26.7738 82.3143 25.7117 82.3143 24.3767C82.3143 23.0438 81.9309 21.9797 81.1642 21.1842C80.3974 20.3888 79.4347 19.9932 78.276 19.9932C77.0978 19.9932 76.1243 20.391 75.3576 21.1842C74.5909 21.9797 74.2075 23.0438 74.2075 24.3767C74.2075 25.7117 74.5909 26.7759 75.3576 27.5692C76.1243 28.3646 77.0957 28.7602 78.276 28.7602C79.4325 28.7602 80.3974 28.3625 81.1642 27.5692ZM92.8525 31.4819C91.5064 30.7853 90.4554 29.82 89.6972 28.5839C88.9413 27.3478 88.5622 25.9461 88.5622 24.3767C88.5622 22.8073 88.9413 21.4057 89.6972 20.1695C90.4532 18.9334 91.5042 17.9681 92.8525 17.2716C94.1986 16.575 95.717 16.2268 97.4077 16.2268C99.0769 16.2268 100.537 16.575 101.786 17.2716C103.033 17.9681 103.942 18.9635 104.513 20.2577L100.946 22.171C100.121 20.7199 98.9304 19.9932 97.3797 19.9932C96.1801 19.9932 95.1893 20.3867 94.4032 21.1692C93.6171 21.9539 93.2251 23.0223 93.2251 24.3767C93.2251 25.7311 93.6171 26.7996 94.4032 27.5842C95.1893 28.3689 96.1822 28.7602 97.3797 28.7602C98.952 28.7602 100.141 28.0335 100.946 26.5824L104.513 28.5237C103.942 29.7792 103.033 30.7595 101.786 31.4668C100.537 32.1719 99.079 32.5267 97.4077 32.5267C95.7149 32.5267 94.1965 32.1784 92.8525 31.4819ZM109.727 25.6709H121.726C121.784 24.9056 121.814 24.4928 121.816 24.4369C121.816 22.788 121.457 21.3433 120.739 20.0964C120.02 18.8495 119.034 17.8929 117.776 17.2264C116.518 16.56 115.114 16.2268 113.561 16.2268C111.969 16.2268 110.528 16.575 109.243 17.2716C107.955 17.9681 106.942 18.9398 106.206 20.1846C105.469 21.4293 105.101 22.8267 105.101 24.3767C105.101 25.9461 105.474 27.3478 106.221 28.5839C106.968 29.82 108.028 30.7853 109.404 31.4819C110.78 32.1784 112.363 32.5267 114.151 32.5267C117.02 32.5267 119.202 31.6732 120.694 29.9662L118.248 27.3177C117.696 27.8487 117.102 28.2356 116.464 28.4807C115.825 28.7258 115.092 28.8483 114.267 28.8483C113.068 28.8483 112.066 28.5646 111.261 27.9949C110.453 27.4273 109.943 26.6512 109.727 25.6709ZM109.669 22.9922C109.826 21.9732 110.259 21.1692 110.966 20.5801C111.674 19.9911 112.549 19.6966 113.591 19.6966C114.612 19.6966 115.478 19.9954 116.184 20.593C116.891 21.1928 117.324 21.9926 117.481 22.9922H109.669ZM137.054 17.2393C138.262 17.9165 139.21 18.8689 139.899 20.0943C140.586 21.3197 140.931 22.7472 140.931 24.3746C140.931 26.0041 140.586 27.4295 139.899 28.657C139.212 29.8824 138.262 30.8348 137.054 31.512C135.846 32.1892 134.504 32.5267 133.031 32.5267C131.006 32.5267 129.415 31.8903 128.256 30.6133V38.0001H123.658V16.4611H128.049V18.2863C129.189 16.9126 130.849 16.2268 133.031 16.2268C134.504 16.2246 135.844 16.5643 137.054 17.2393ZM135.137 27.5692C135.893 26.7738 136.272 25.7118 136.272 24.3767C136.272 23.0438 135.893 21.9797 135.137 21.1843C134.381 20.3888 133.412 19.9933 132.234 19.9933C131.056 19.9933 130.087 20.391 129.331 21.1843C128.575 21.9797 128.196 23.0438 128.196 24.3767C128.196 25.7118 128.575 26.7759 129.331 27.5692C130.087 28.3646 131.056 28.7602 132.234 28.7602C133.412 28.7602 134.381 28.3625 135.137 27.5692ZM159.089 32.2924V16.4612H154.487V24.2865C154.487 25.6989 154.153 26.7631 153.485 27.479C152.815 28.197 151.932 28.5539 150.832 28.5539C148.689 28.5539 147.618 27.2791 147.618 24.7294V16.4612H143.02V25.4066C143.02 27.7585 143.63 29.5364 144.849 30.7317C146.068 31.9291 147.72 32.5268 149.802 32.5268C150.784 32.5268 151.7 32.3462 152.544 31.9829C153.388 31.6217 154.116 31.0971 154.726 30.4092V32.2924H159.089ZM180.821 28.5839C181.579 29.82 182.63 30.7853 183.976 31.4819C185.322 32.1784 186.841 32.5267 188.531 32.5267C190.203 32.5267 191.661 32.1719 192.91 31.4668C194.157 30.7595 195.066 29.7792 195.637 28.5237L192.07 26.5824C191.264 28.0335 190.076 28.7602 188.503 28.7602C187.306 28.7602 186.313 28.3689 185.527 27.5842C184.741 26.7996 184.349 25.7311 184.349 24.3767C184.349 23.0223 184.741 21.9539 185.527 21.1692C186.313 20.3867 187.304 19.9932 188.503 19.9932C190.054 19.9932 191.245 20.7199 192.07 22.171L195.637 20.2577C195.066 18.9635 194.157 17.9681 192.91 17.2716C191.661 16.575 190.201 16.2268 188.531 16.2268C186.841 16.2268 185.322 16.575 183.976 17.2716C182.628 17.9681 181.577 18.9334 180.821 20.1695C180.065 21.4057 179.686 22.8073 179.686 24.3767C179.686 25.9461 180.065 27.3478 180.821 28.5839Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="213" height="48" fill="white" transform="translate(0.5)" />
            </clipPath>
          </defs>
        </svg>
        </a>
      </div>
      <ul className="flex items-center gap-5 mt-16">
      {items.map((el,index) => 
      <li className=" hover:text-[#b5b5b5] transition duration-150 cursor-pointer uppercase font-semibold" key={index}>{el}</li>
      )}
      </ul>
      </div>
    </section>
  );
};

export default NavFooter;
