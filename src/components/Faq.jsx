import { useState } from "react";
import React from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="sm:text-sm md:text-lg text-left font-medium ">{title}</p>
        <div>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-white transition-transform duration-200 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 ">
          <p className="textwhite">{children}</p>
        </div>
      )}
    </div>
  );
};

const FaqCard = () => {
  return (
    <div className=" px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-jacarta-200">
        Mulakan Dengan Asas
      </p>
      <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-white">
        Soalan-soalan Lazim
      </h2>

      <div className="space-y-4 text-white">
        <Item title="1. Apakah blockchain?">
          Blockchain adalah teknologi yang membolehkan transaksi digital
          disimpan dan disahkan secara sejagat tanpa memerlukan pihak ketiga.
        </Item>
        <Item title="2. Siapa yang boleh mendaftar untuk platform pendidikan ini?">
          Siapa saja yang berminat untuk mempelajari lebih lanjut tentang
          blockchain boleh mendaftar dan menggunakan platform kami.
        </Item>
        <Item title="3. Adakah saya perlu mempunyai pengetahuan asas tentang blockchain?">
          Tidak, platform pendidikan kami direka untuk semua orang, termasuk
          mereka yang baru berjinak-jinak dengan blockchain.
        </Item>
        <Item title="4. Bagaimana saya boleh memulakan pembelajaran saya?">
          Anda hanya perlu mendaftar untuk akaun percuma, dan kemudian anda
          boleh mula menjelajahi modul pendidikan kami.
        </Item>
        <Item title="5. Adakah saya akan mendapat sijil setelah menamatkan kursus?">
          Ya, anda akan menerima sijil penyertaan setelah anda menamatkan modul
          pendidikan.
        </Item>
        <Item title="6. Bolehkah saya belajar pada bila-bila masa?">
          Ya, platform pendidikan kami 100% online dan boleh diakses pada
          bila-bila masa yang sesuai dengan anda.
        </Item>
        <Item title="7. Apakah kosnya untuk menggunakan platform ini?">
          Platform pendidikan blockchain ini 100% percuma. Anda boleh belajar
          dan mendapatkan manfaat tanpa sebarang kos.
        </Item>
        <Item title="8. Apakah bahasa pengajaran di platform ini?">
          Pengajaran di platform ini sepenuhnya dalam Bahasa Melayu.
        </Item>
      </div>
    </div>
  );
};

export default FaqCard;
