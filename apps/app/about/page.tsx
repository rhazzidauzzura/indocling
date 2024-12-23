import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="About"
        description="Di tengah kesibukan sehari-hari, kebersihan menjadi kebutuhan utama, tak hanya sekadar untuk kenyamanan, tetapi juga untuk menjaga kesehatan. Di Indonesia, kesadaran akan pentingnya kebersihan semakin tinggi, dan itulah yang mendorong kami untuk terus mengedukasi dan melayani masyarakat tentang pentingnya merawat kebersihan soft interior rumah dan kantor."
      /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
