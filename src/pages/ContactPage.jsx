import { Seo } from "@/components/layout/Seo";
import { PageHead } from "@/components/layout/PageHead";
import { ContactPanel } from "@/components/sections/ContactPanel";
import { FaqList } from "@/components/sections/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact — Crispo"
        description="Questions, bulk orders or a partnership idea? Reach the Crispo team by phone, email or at the tasting counter."
      />

      <PageHead
        title="Talk To Us"
        text="Order questions, bulk orders or a partnership idea — a real person reads every message and replies within one business day."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Contact" },
        ]}
      />

      <ContactPanel />

      <FaqList id="faq" />

      <CtaBand to="/stores" />
    </>
  );
}
