import About from "_components/home/About";
import Blogs from "_components/home/Blogs";
import CRM from "_components/home/CRM";
import Contact from "_components/home/Contact";
import Information from "_components/home/Information";
import Services from "_components/home/Services";

export default function Home() {
  /** SECTIONS **
   * crm
   * about metanext
   * services
   * information
   * blogs
   * contact
   */

  return (
    <>
      <CRM />
      <About />
      <Services />
      <Information />
      <Blogs />
      <Contact />
    </>
  );
}
