import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[550px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about2.jpeg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-8 lg:w-1/2">
            <div className="wow fadeInUp max-w-[520px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Laundry Terpercaya untuk Kebersihan Anda
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Hadir sebagai solusi bagi Anda yang membutuhkan layanan kebersihan profesional dan terpercaya. Dengan pengalaman lebih dari 10 tahun, kami telah dipercaya oleh banyak pelanggan, baik di perumahan maupun perkantoran. Kepercayaan yang diberikan menjadi motivasi kami untuk terus berinovasi dan memberikan pelayanan terbaik.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Dukungan Premier untuk Layanan Laundry Anda
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Kami memahami betapa pentingnya karpet, sofa bersih dan rapi untuk setiap kesempatan. Dengan layanan laundry yang cepat, efisien, dan ramah lingkungan, kami memastikan interior Anda mendapatkan perawatan terbaik.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Layanan Laundry dengan Kualitas Terbaik
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Kami menawarkan berbagai layanan laundry dengan perhatian khusus pada kualitas dan detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
