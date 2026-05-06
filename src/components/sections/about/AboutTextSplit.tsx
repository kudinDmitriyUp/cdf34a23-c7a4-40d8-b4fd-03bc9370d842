import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";

interface AboutTextSplitProps {
  title: string;
  descriptions: string[];
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
}

const AboutTextSplit = ({
  title,
  descriptions,
  primaryButton,
  secondaryButton,
}: AboutTextSplitProps) => {
  return (
    <section aria-label="About section" className="py-20">
      <div className="flex flex-col gap-30 mx-auto w-content-width">
        <div className="flex flex-col md:flex-row gap-3 md:gap-15">
          <div className="w-full md:w-1/2">
            <TextAnimation
              text={title}
              variant="slide-up"
              gradientText={true}
              tag="h2"
              className="text-7xl font-medium"
            />
          </div>

          <div className="flex flex-col gap-5 w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1391339.833523533!2d-20.95039999999999!3d64.86319999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2sIceland!5e0!3m2!1sen!2sus!4v1620231436345!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps Iceland"
            ></iframe>
          </div>
        </div>

        <div className="w-full border-b border-foreground/10" />
      </div>
    </section>
  );
};

export default AboutTextSplit;
