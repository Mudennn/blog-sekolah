import React, { useRef, useState } from "react";
import BG from "/assets/Mask-group.png";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p className="text-white mt-2">
      Mesej anda telah dihantar! Kami akan hubungi anda secepat yang mungkin.
    </p>
  );
};

const HubungiKami = () => {
  const form = useRef();
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v07o1an",
        "template_xxd0nd7",
        form.current,
        "qKMHNpMKFtCdfBtIn"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert;
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <section>
      <img
        src={BG}
        alt="MySekolah Kripto"
        className="absolute -mt-[15%] rotate-180 w-full left-0 lg:block hidden -z-20"
      />
      <img
        src={BG}
        alt="MySekolah Kripto"
        className="absolute mt-[100%]rotate-180 left-0 h-[550px] sm:block md:hidden -z-20"
      />
      <section className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
        <div className="relative flex flex-wrap items-center mx-auto z-10">
          <div className="flex flex-col items-start lg:mt-8 mb-8 lg:flex-grow lg:w-1/2 lg:pr-6 xl:pr-24 md:mb-0 xl:mt-0">
            {/* Heading  */}
            <h2 className="text-white lg:mb-6 mb-2 text-[28px]  font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              Hubungi Kami
            </h2>
            <p className="text-white mb-9 text-base leading-relaxed">
              Maklumat lanjut atau ingin tahu sebarang penyertaan boleh hubungi
              kami. Kami sentiasa bersedia membantu anda
            </p>
            <div className="rounded-lg py-8 px-4 bg-jacarta-800 w-full border-jacarta-600 border-2">
              {/* Lokasi kami  */}
              <div className="mb-8 flex w-full text-white">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center overflow-hidden  rounded-full border-jacarta-600 border-0 md:border-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white mb-1 text-xl font-bold">
                    Lokasi Kami
                  </h4>
                  <p className="text-jacarta-300 text-base">No. 28A, Jalan 4/12B, Seksyen 4 Tambahan, 43650 Bandar Baru Bangi, Selangor Darul Ehsan</p>
                </div>
              </div>
              {/* No telefon  */}
              <div className="mb-8 flex w-full text-white">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center overflow-hidden  rounded-full border-jacarta-600 border-0 md:border-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                <h4 className="text-white mb-1 text-xl font-bold">
                    No. Telefon
                  </h4>
                  <p className="text-jacarta-300 text-base">(+60) 12345678</p>
                </div>
              </div>
              {/* Alamat Emel  */}
              <div className="flex w-full text-white">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center overflow-hidden  rounded-full border-jacarta-600 border-0 md:border-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                <h4 className="text-white mb-1 text-xl font-bold">
                    Alamat Emel
                  </h4>
                  <p className="text-jacarta-300 text-base">
                    kampusmysekolahkripto@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form  */}
        <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl mt-0 md:mt-10">
          <div className="relative rounded-lg  bg-jacarta-800 p-8 shadow-lg sm:p-12 border-jacarta-600 border-2">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <label className="text-white">
                  Nama Penuh <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Ali bin Abdul"
                  className="hover:ring-accent/10 focus:ring-accent border-jacarta-600 border-2 bg-jacarta-700 text-white placeholder:text-jacarta-300  w-full rounded  py-3 px-[14px] text-base"
                />
              </div>
              <div className="mb-6">
                <label className="text-white">
                  Alamat Email <span className="text-red">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="admin@kampussekolahkripto.com"
                  className="hover:ring-accent/10 focus:ring-accent border-jacarta-600 border-2 bg-jacarta-700 text-white placeholder:text-jacarta-300 w-full rounded  py-3 px-[14px] text-base"
                />
              </div>
              <div className="mb-6">
                <label className="text-white">
                  No Telefon <span className="text-red">*</span>
                </label>
                <input
                  type="phone"
                  name="user_phone"
                  required
                  placeholder="0162345678"
                  className="hover:ring-accent/10 focus:ring-accent border-jacarta-600 border-2 bg-jacarta-700 text-white placeholder:text-jacarta-300 w-full rounded  py-3 px-[14px] text-base"
                />
              </div>
              <div className="mb-6">
                <label className="text-white">
                  Mesej <span className="text-red">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Mesej Anda"
                  className="hover:ring-accent/10 focus:ring-accent border-jacarta-600 border-2 bg-jacarta-700 text-white placeholder:text-jacarta-300 w-full resize-none rounded py-3 px-[14px] text-base"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  value="Send"
                  className="w-full rounded-full bg-accent py-3 px-5 text-base text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Hantar
                </button>
              </div>
              <div>{result ? <Result /> : null}</div>
            </form>
          </div>
        </div>

        </div>
      </section>
    </section>
  );
};

export default HubungiKami;
