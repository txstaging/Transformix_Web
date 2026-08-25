import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/content";

const MARQUEE_COPIES = 4;

export default function BrandMarquee() {
  return (
    <section
      className="marquee-viewport w-full overflow-hidden bg-white py-[8px] lg:h-[108px] lg:py-0"
      aria-label="عملاؤنا"
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="w-full overflow-hidden" dir="ltr">
          <div
            className="marquee-track items-center"
            data-direction="ltr"
            style={
              {
                "--marquee-duration": "42s",
                "--marquee-copies": String(MARQUEE_COPIES),
              } as React.CSSProperties
            }
          >
            {Array.from({ length: MARQUEE_COPIES }).flatMap((_, copy) =>
              BRAND_LOGOS.map((logo, index) => (
                <div
                  key={`${copy}-${logo.src}-${index}`}
                  aria-hidden={copy > 0 || undefined}
                  className="flex h-[81px] min-w-[160px] shrink-0 items-center justify-center px-[24px] py-[24px] sm:min-w-[220px] lg:h-[97px] lg:min-w-[288px]"
                >
                  <div
                    className="relative shrink-0"
                    style={{ width: logo.width, height: logo.height }}
                  >
                    <Image
                      src={logo.src}
                      alt={copy === 0 ? logo.alt : ""}
                      fill
                      sizes={`${Math.ceil(logo.width)}px`}
                      loading="eager"
                      className="object-cover"
                      style={
                        logo.src.includes("arab-league")
                          ? { objectPosition: "center 51.3%" }
                          : undefined
                      }
                    />
                  </div>
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
