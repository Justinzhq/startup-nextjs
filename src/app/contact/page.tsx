import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们",
  // description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="联系我们"
        description="如果您有任何需要帮助的地方，请随时联系我们。"
      /> */}

      <Contact />
    </>
  );
};

export default ContactPage;
