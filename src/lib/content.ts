export const NAV_LINKS = [
  { label: "الرئيسية", href: "#", active: true, hasChevron: false },
  // { label: "الخدمات", href: "#services", active: false, hasChevron: true },
  { label: "أعمالنا", href: "/works", active: false, hasChevron: false },
  { label: "تواصل معنا", href: "#contact", active: false, hasChevron: false },
];

export const HERO_CONTENT = {
  title: "نبني حلولًا رقمية تساعد أعمالك على النمو",
  body: "نجمع بين البيانات والذكاء الاصطناعي، التصميم، تطوير التجارب الرقمية وأنظمة الأعمال لنحوّل تحدياتك إلى حلول عملية تساعدك على العمل بكفاءة أكبر والنمو بشكل أوضح.",
  cta: { label: "ابدء مشروعك معنا", href: "#contact" },
};

export const BRAND_LOGOS = [
  { src: "/assets/brands/barq.png", alt: "Barq", width: 66, height: 66 },
  {
    src: "/assets/brands/thermo.png",
    alt: "Thermo Integrated",
    width: 70,
    height: 70,
  },
  {
    src: "/assets/brands/tour-guides.png",
    alt: "Tour Guides Cooperative",
    width: 139,
    height: 78,
  },
  { src: "/assets/brands/brand-48.png", alt: "IB DL", width: 150, height: 64 },
  {
    src: "/assets/brands/brand-45.png",
    alt: "شعار عميل",
    width: 120,
    height: 43,
  },
  {
    src: "/assets/brands/brand-70.png",
    alt: "شعار عميل",
    width: 85,
    height: 74,
  },
  {
    src: "/assets/brands/ibdl-wide.png",
    alt: "شعار عميل",
    width: 179,
    height: 55,
  },
  // {
  //   src: "/assets/brands/arab-league.png",
  //   alt: "جامعة الدول العربية",
  //   width: 201,
  //   height: 76,
  // },
];

export type ServiceCard = {
  title: string;
  body: string;
  more: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageLeft: number;
  imageTop: number;
  crop?: { width: string; height: string; left: string; top: string };
};

export const SERVICES: ServiceCard[] = [
  {
    title: "تصميم وتطوير المواقع",
    body: "نطوّر مواقع متكاملة تتوافق مع أهداف أعمالك، وتساعدك على عرض خدماتك ومحتواك بصورة واضحة واحترافية..... ",
    more: "عرض المزيد",
    image: "/assets/images/svc-webdesign.png",
    imageWidth: 194,
    imageHeight: 145,
    imageLeft: 98.5,
    imageTop: 139,
  },
  {
    title: "تطوير مواقع WordPress",
    body: "نطوّر مواقع WordPress مرنة وسهلة الإدارة، مع تصميم متجاوب وتجربة استخدام تساعدك على تحديث المحتوى وإدارة الموقع بسهولة.....",
    more: "عرض المزيد",
    image: "/assets/images/svc-wordpress.png",
    imageWidth: 230,
    imageHeight: 173,
    imageLeft: 79.2,
    imageTop: 127.7,
  },
  {
    title: "إنشاء المتاجر الإلكترونية",
    body: "نطوّر مواقع مهيأة تقنيًا لمحركات البحث، مع بنية واضحة وسرعة أفضل تساعد على تحسين الظهور والوصول...",
    more: "عرض المزيد",
    image: "/assets/images/svc-ecommerce.png",
    imageWidth: 226,
    imageHeight: 170,
    imageLeft: 84.2,
    imageTop: 133.7,
  },
  {
    title: "تطوير مواقع Zoho",
    body: "ننشئ مواقع متصلة بتطبيقات Zoho لدعم إدارة العملاء، النماذج والعمليات المختلفة داخل بيئة عمل أكثر تنظيمًا.... ",
    more: "عرض المزيد",
    image: "/assets/images/svc-zoho.png",
    imageWidth: 229,
    imageHeight: 158,
    imageLeft: 85.7,
    imageTop: 142.7,
    crop: { width: "100%", height: "144.94%", left: "0%", top: "-27.85%" },
  },
  {
    title: "تطوير مواقع Odoo",
    body: "نطوّر مواقع مرتبطة بمنظومة Odoo لتسهيل إدارة العملاء، المبيعات، والمحتوى ضمن تجربة رقمية متكاملة....",
    more: "عرض المزيد",
    image: "/assets/images/svc-odoo.png",
    imageWidth: 213.684,
    imageHeight: 160,
    imageLeft: 88.2,
    imageTop: 152.7,
    crop: {
      width: "157.97%",
      height: "140.74%",
      left: "-31.25%",
      top: "-19.18%",
    },
  },
  {
    title: "مواقع محسّنة لمحركات البحث",
    body: "نطوّر مواقع مهيأة تقنيًا لمحركات البحث، مع بنية واضحة وسرعة أفضل تساعد على تحسين الظهور والوصول...",
    more: "عرض المزيد",
    image: "/assets/images/svc-seo.png",
    imageWidth: 230,
    imageHeight: 165,
    imageLeft: 104.2,
    imageTop: 138.7,
    crop: {
      width: "130.33%",
      height: "136.78%",
      left: "-20.16%",
      top: "-18.26%",
    },
  },
];

export const SITE_TYPES = [
  {
    number: "01",
    title: "مواقع الشركات",
    body: "لعرض الشركة وخدماتها وخبراتها وبناء الثقة مع العملاء.",
    icon: "/assets/icons/type-corporate.svg",
    iconWidth: 54,
    iconHeight: 52,
    filled: true,
  },
  {
    number: "02",
    title: "المواقع الخدمية",
    body: "لتوضيح الخدمات وتسهيل الطلب أو الحجز أو التواصل.",
    icon: "/assets/icons/type-service.svg",
    iconWidth: 56,
    iconHeight: 56,
    filled: false,
  },
  {
    number: "03",
    title: "المتاجر الإلكترونية",
    body: "لإدارة المنتجات والطلبات والدفع والشحن والمخزون.",
    icon: "/assets/icons/type-store.svg",
    iconWidth: 52,
    iconHeight: 52,
    filled: true,
  },
  {
    number: "04",
    title: "صفحات الهبوط",
    body: "صفحات مخصصة للحملات الإعلانية وجمع الطلبات والعملاء المحتملين.",
    icon: "/assets/icons/type-landing.svg",
    iconWidth: 52,
    iconHeight: 52,
    filled: false,
  },
  {
    number: "05",
    title: "المنصات الرقمية",
    body: "منصات تعتمد على الحسابات والاشتراكات والحجوزات والعمليات الخاصة.",
    icon: "/assets/icons/type-platform.svg",
    iconWidth: 52,
    iconHeight: 52,
    filled: true,
  },
  {
    number: "06",
    title: "بوابات العملاء",
    body: "لمتابعة الطلبات والملفات والمدفوعات وحالة الخدمات.",
    icon: "/assets/icons/type-portal.svg",
    iconWidth: 50,
    iconHeight: 55,
    filled: false,
  },
];

type Rect = { left: string; top: string; width: string; height: string };

export type StorePlatform = {
  label: string;
  logo: string;
  activeLogo: string;
  logoWidth: number;
  logoHeight: number;
  /** Logo-side padding (the design gives Odoo 16px instead of 14px). */
  padEnd: number;
  padY: number;
  /** Arrow artwork for this tab, indexed by the currently active tab. */
  arrows: [string, string, string, string];
  media: {
    image: string;
    alt: string;
    frameWidth: number;
    frameHeight: number;
    rounded: boolean;
    cardBg: boolean;
    /** Image box inside the frame, as percentages of the frame. */
    box: Rect;
    /** Optional crop of the image inside its box. */
    crop?: Rect;
  };
};

const ARROW_A = "/assets/icons/arrow-left-46-white.svg";
const ARROW_B = "/assets/icons/arrow-left-46-blue.svg";

export const STORE_PLATFORMS: StorePlatform[] = [
  {
    label: "متاجر word press",
    logo: "/assets/icons/wordpress-blue.svg",
    activeLogo: "/assets/icons/wordpress.svg",
    logoWidth: 40,
    logoHeight: 40,
    padEnd: 14,
    padY: 9,
    arrows: [ARROW_A, ARROW_A, ARROW_A, ARROW_A],
    media: {
      image: "/assets/images/store-dashboard.png",
      alt: "لوحة تحكم متجر WordPress",
      frameWidth: 556,
      frameHeight: 476,
      rounded: true,
      cardBg: false,
      box: {
        left: "-5.7554%",
        top: "0%",
        width: "113.8489%",
        height: "99.7899%",
      },
    },
  },
  {
    label: "متاجر Odoo",
    logo: "/assets/icons/odoo.svg",
    activeLogo: "/assets/icons/odoo-white.svg",
    logoWidth: 44,
    logoHeight: 14,
    padEnd: 16,
    padY: 9,
    arrows: [
      ARROW_B,
      "/assets/icons/arrow-left-46-odoo.svg",
      "/assets/icons/arrow-left-46-odoo.svg",
      "/assets/icons/arrow-left-46-odoo.svg",
    ],
    media: {
      image: "/assets/images/store-odoo.png",
      alt: "لوحة تحكم متجر Odoo",
      frameWidth: 556,
      frameHeight: 476,
      rounded: true,
      cardBg: false,
      box: {
        left: "1.4388%",
        top: "9.8739%",
        width: "97.1223%",
        height: "80.2521%",
      },
      crop: { left: "-4.31%", top: "-0.09%", width: "105.97%", height: "100%" },
    },
  },
  {
    label: "متاجر zoho",
    logo: "/assets/icons/zoho.svg",
    activeLogo: "/assets/icons/zoho.svg",
    logoWidth: 50,
    logoHeight: 46,
    padEnd: 14,
    padY: 9,
    arrows: [
      ARROW_B,
      ARROW_B,
      "/assets/icons/arrow-left-46-zoho.svg",
      "/assets/icons/arrow-left-46-zoho.svg",
    ],
    media: {
      image: "/assets/images/store-zoho.png",
      alt: "لوحة تحكم متجر Zoho",
      frameWidth: 556,
      frameHeight: 370,
      rounded: false,
      cardBg: false,
      box: { left: "0%", top: "0%", width: "100%", height: "100%" },
    },
  },
  {
    label: "متاجر سلة",
    logo: "/assets/icons/salla.svg",
    activeLogo: "/assets/icons/salla-light.svg",
    logoWidth: 46,
    logoHeight: 46,
    padEnd: 14,
    padY: 7,
    arrows: [
      ARROW_B,
      ARROW_B,
      ARROW_B,
      "/assets/icons/arrow-left-46-salla.svg",
    ],
    media: {
      image: "/assets/images/store-salla.png",
      alt: "لوحة تحكم متجر سلة",
      frameWidth: 556,
      frameHeight: 476,
      rounded: true,
      cardBg: true,
      box: {
        left: "0%",
        top: "3.9916%",
        width: "108.6331%",
        height: "84.8739%",
      },
      crop: { left: "-0.05%", top: "0%", width: "100.12%", height: "100%" },
    },
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  avatar: string;
  /** Logos render contained at their own size; photos render as a round 43px avatar. */
  avatarKind: "photo" | "logo";
  avatarSize: number;
  shadow: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "بصفتي مدربة أسرية معتمدة، كنت أسعى لتعزيز علامتي التجارية الشخصية والتواصل مع المزيد من العائلات التي تحتاج إلى التوجيه. كان العمل مع شركة FUEX Solutions بمثابة نقطة تحول بالنسبة لي. فقد أدى نهجهم الاستراتيجي في التسويق عبر وسائل التواصل الاجتماعي إلى نمو ملحوظ بنسبة 134.5% في عدد متابعي خلال ثلاثة أسابيع فقط",
    name: "د/ ريم بخيت",
    role: "مستشارة اجتماعية",
    avatar: "/assets/images/testimonial-reem.png",
    avatarKind: "photo",
    avatarSize: 43,
    shadow: true,
  },
  {
    quote:
      "يسعنا إلا أن نتقدم بجزيل الشكر لوكالتكم التسويقية على خدماتها المتميزة. لقد ساهمت أفكار فريقكم الإبداعية ونهجهم القائم على البيانات في تحقيق نتائج باهرة في فترة وجيزة. ارتفع تفاعل متابعينا على وسائل التواصل الاجتماعي بشكل ملحوظ، واكتسبت علامتنا التجارية قاعدة جماهيرية وفية.",
    name: "يسرى بوغوس",
    avatar: "/assets/images/testimonial-yb.png",
    avatarKind: "logo",
    avatarSize: 34,
    shadow: false,
  },
  {
    quote:
      "لقد فاقت وكالة Fuex توقعاتي بخدماتها المتميزة فريقهم محترف، سريع الاستجابة، ويفهم تماما احتياجات عملائهم. لقد قدموا نتائج عالية الجودة في الوقت المحدد، وكان لإبداعهم وخبرتهم أثر بالغ. أوصي بشدة بوكالة Fuex لكل من يبحث عن حلول تسويقية من الطراز الأول",
    name: "د/روزانا البخاري",
    role: "عبر بيكسفورت.",
    avatar: "/assets/images/testimonial-bixfort.png",
    avatarKind: "logo",
    avatarSize: 22,
    shadow: false,
  },
];

export const FOOTER_LINKS = [
  { label: "الرئسية ", href: "/" },
  // { label: "الخدمات", href: "/#services" },
  { label: "اعمالنا", href: "/works" },
  { label: "تواصل معنا", href: "#contact" },
];

export const FOOTER_SOCIALS = [
  { name: "twitter", icon: "/assets/icons/twitter.svg", href: "#" },
  { name: "linkedin", icon: "/assets/icons/linkedin.svg", href: "#" },
  { name: "facebook", icon: "/assets/icons/facebook.svg", href: "#" },
];
