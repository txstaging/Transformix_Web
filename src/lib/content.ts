export const NAV_LINKS = [
  { label: "الرئيسية", href: "#", active: true, hasChevron: false },
  { label: "الخدمات", href: "#services", active: false, hasChevron: true },
  { label: "أعمالنا", href: "#work", active: false, hasChevron: false },
  { label: "تواصل معنا", href: "#contact", active: false, hasChevron: false },
];

export const HERO_SLIDES = [
  {
    title: "نطوّر مواقع تخدم أعمالك بوضوح وكفاءة",
    body: "نجمع بين بناء العلامة، تصميم المواقع، تجربة المستخدم وصناعة المحتوى لنصنع حضورًا متكاملًا يعبر عنك ويقربك من جمهورك.",
    align: "center" as const,
  },
  {
    title: "مواقع وتجارب تجعل كل خطوة أسهل",
    body: "نصمم مواقع وواجهات تجمع بين الشكل الاحترافي، سهولة الاستخدام وتحقيق أهداف المشروع.",
    align: "right" as const,
  },
  {
    title: "هوية واضحة تجعل علامتك أكثر حضورًا",
    body: "نبني شخصية بصرية متكاملة تساعد جمهورك على التعرف على علامتك وتذكرها بسهولة.",
    align: "right" as const,
  },
  {
    title: "بناء العلامة",
    body: "نبني شخصية بصرية متكاملة تساعد جمهورك على التعرف على علامتك وتذكرها بسهولة.",
    align: "right" as const,
  },
];

export const BRAND_LOGOS = [
  { src: "/assets/brands/barq.png", alt: "Barq", width: 66, height: 66 },
  { src: "/assets/brands/thermo.png", alt: "Thermo Integrated", width: 70, height: 70 },
  { src: "/assets/brands/tour-guides.png", alt: "Tour Guides Cooperative", width: 139, height: 78 },
  { src: "/assets/brands/brand-48.png", alt: "IB DL", width: 150, height: 64 },
  { src: "/assets/brands/brand-45.png", alt: "شعار عميل", width: 120, height: 43 },
  { src: "/assets/brands/brand-70.png", alt: "شعار عميل", width: 85, height: 74 },
  { src: "/assets/brands/ibdl-wide.png", alt: "شعار عميل", width: 179, height: 55 },
  { src: "/assets/brands/arab-league.png", alt: "جامعة الدول العربية", width: 201, height: 76 },
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
    crop: { width: "157.97%", height: "140.74%", left: "-31.25%", top: "-19.18%" },
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
    crop: { width: "130.33%", height: "136.78%", left: "-20.16%", top: "-18.26%" },
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

export const STORE_PLATFORMS = [
  { label: "متاجر word press", logo: "/assets/icons/wordpress.svg", logoWidth: 40, logoHeight: 40 },
  { label: "متاجر Odoo", logo: "/assets/icons/odoo.svg", logoWidth: 44, logoHeight: 14 },
  { label: "متاجر zoho", logo: "/assets/icons/zoho.svg", logoWidth: 50, logoHeight: 46 },
  { label: "متاجر سلة", logo: "/assets/icons/salla.svg", logoWidth: 46, logoHeight: 46 },
];

export type WorkEntry = {
  title: string;
  titleWeight: "bold" | "semibold";
  body: string;
  image: string;
  mediaHeight: number;
  wideTitle?: boolean;
  mediaWidth?: number;
  mediaAspect?: string;
  inner?: { width: string; height: string; left: string; top: string };
  tags: string[];
};

export const WORK_RIGHT: WorkEntry[] = [
  {
    title: "حضور رقمي يعرّف بأعمالك بوضوح",
    titleWeight: "semibold",
    body: "مواقع احترافية تنظّم خدمات الشركة ومحتواها، وتعكس هويتها وتساعد الزائر على الوصول إلى المعلومة والتواصل بسهولة.",
    image: "/assets/images/work-supercar.png",
    mediaHeight: 323,
    mediaAspect: "557/323",
    inner: { width: "100%", height: "129.33%", left: "0%", top: "-12.5%" },
    tags: ["مواقع شركات", "WordPress", "تصميم متجاوب"],
  },
  {
    title: "حلول رقمية مبنية حول طريقة عملك",
    titleWeight: "bold",
    body: "منصات تتضمن حسابات مستخدمين، صلاحيات، لوحات تحكم، قواعد بيانات ووظائف مخصصة حسب احتياجات المشروع.",
    image: "/assets/images/work-platform.png",
    mediaHeight: 362,
    mediaAspect: "557/362",
    tags: ["التكاملات", "داش بورد", "Front-End", "Back-End"],
  },
];

export const WORK_LEFT: WorkEntry[] = [
  {
    title: "تجربة شراء أبسط وإدارة أكثر كفاءة",
    titleWeight: "semibold",
    wideTitle: true,
    body: "متاجر إلكترونية تساعد العملاء على استكشاف المنتجات وإتمام الطلب بسهولة، مع إدارة مرنة للمنتجات والدفع والشحن.",
    image: "/assets/images/work-diving.png",
    mediaHeight: 393,
    mediaAspect: "585/393",
    inner: { width: "87.07%", height: "77.17%", left: "6.31%", top: "8.73%" },
    tags: ["Odoo", "WooCommerce", "سلة", "Zoho"],
  },
  {
    title: "رحلة واضحة من استكشاف الخدمة إلى الحجز",
    titleWeight: "semibold",
    body: "مواقع تنظّم الخدمات والباقات والمواعيد، وتسهّل على المستخدم المقارنة والتواصل أو إتمام الحجز.",
    image: "/assets/images/work-booking.png",
    mediaHeight: 339,
    mediaWidth: 509,
    mediaAspect: "509/339",
    inner: { width: "100%", height: "100.1%", left: "0%", top: "-0.05%" },
    tags: ["مسار الحجز", "نماذج ", "التكامل مع الواتساب"],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "و ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص",
    name: "Jacob Jones",
    role: "Digital Marketer",
    shadow: true,
  },
  {
    quote:
      "و ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص",
    name: "Jacob Jones",
    role: "Digital Marketer",
    shadow: true,
  },
  {
    quote:
      "و ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص",
    name: "Jacob Jones",
    role: "Digital Marketer",
    shadow: false,
  },
];

export const FOOTER_LINKS = ["الرئسية ", "الخدمات", "اعمالنا", "تواصل معنا"];

export const FOOTER_SOCIALS = [
  { name: "twitter", icon: "/assets/icons/twitter.svg", href: "#" },
  { name: "linkedin", icon: "/assets/icons/linkedin.svg", href: "#" },
  { name: "facebook", icon: "/assets/icons/facebook.svg", href: "#" },
];
