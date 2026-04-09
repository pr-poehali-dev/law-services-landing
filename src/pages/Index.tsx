import { useState } from "react";
import Icon from "@/components/ui/icon";
import Header from "@/components/lawyer/Header";
import HeroApproachServices from "@/components/lawyer/HeroApproachServices";
import AboutCasesReviewsContact from "@/components/lawyer/AboutCasesReviewsContact";
import { PHONE_HREF } from "@/components/lawyer/constants";

export default function Index() {
  const [callbackOpen, setCallbackOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-golos">
      <Header
        onCallbackOpen={() => setCallbackOpen(true)}
        callbackOpen={callbackOpen}
        onCallbackClose={() => setCallbackOpen(false)}
      />

      <HeroApproachServices onCallbackOpen={() => setCallbackOpen(true)} />

      <AboutCasesReviewsContact onCallbackOpen={() => setCallbackOpen(true)} />

      <a
        href={PHONE_HREF}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-40 sm:hidden transition-transform hover:scale-110"
        style={{ backgroundColor: "var(--gold)" }}
        aria-label="Позвонить"
      >
        <Icon name="Phone" size={22} color="white" />
      </a>
    </div>
  );
}
