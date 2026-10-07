export const WORKS_NAV_LINKS = [
  { label: "الرئيسية", href: "/", active: false, hasChevron: false },
  // { label: "الخدمات", href: "/#services", active: false, hasChevron: true },
  { label: "أعمالنا", href: "/works", active: true, hasChevron: false },
  { label: "تواصل معنا", href: "#contact", active: false, hasChevron: false },
];

export type ProjectTag = {
  label: string;
  width: number;
  /** Desktop horizontal nudge of the label for chips the design doesn't center. */
  shiftX?: number;
};

export type Project = {
  title: string;
  image: string;
  /** Media frame size on the 604px desktop column. */
  mediaWidth: number;
  mediaHeight: number;
  /** Image rect inside the media frame, as percentages of the frame. */
  inner?: { width: string; height: string; left: string; top: string };
  /** Tags in reading order (rightmost first). */
  tags: ProjectTag[];
  tagsRight?: number;
  arrowTop: number;
  href: string;
};

// Each row lists the right-hand card first (RTL reading order).
export const PROJECT_ROWS: Project[][] = [
  [
    {
      title: "ديوميديا |Diomedea",
      image: "/assets/works/diomedea.jpg",
      mediaWidth: 604,
      mediaHeight: 462,
      inner: { width: "100%", height: "95.8874%", left: "0%", top: "0%" },
      tags: [
        { label: "الموقع الإلكتروني", width: 133, shiftX: -2 },
        { label: "LMS", width: 133 },
        { label: "WordPress", width: 133 },
      ],
      arrowTop: 72,
      href: "#",
    },
    {
      title: "Che Academy",
      image: "/assets/works/che-academy.jpg",
      mediaWidth: 604,
      mediaHeight: 462,
      inner: { width: "100%", height: "96.9697%", left: "0%", top: "0%" },
      tags: [
        { label: "موقع تعريفي", width: 133 },
        { label: "انشاء موقع", width: 133 },
        { label: "تصميم المواقع", width: 133 },
      ],
      arrowTop: 65,
      href: "#",
    },
  ],
  [
    {
      title: "المحمل |Al-Mahmal",
      image: "/assets/works/al-mahmal.png",
      mediaWidth: 602,
      mediaHeight: 458,
      inner: { width: "114.2%", height: "100%", left: "-8.97%", top: "0%" },
      tags: [
        { label: "wordpress", width: 133 },
        { label: "تجربة مستخدم", width: 165 },
        { label: "موقع الكتروني", width: 133 },
      ],
      arrowTop: 65,
      href: "#",
    },
    {
      title: "فريق برق للانقاذ",
      image: "/assets/works/barq.jpg",
      mediaWidth: 604,
      mediaHeight: 459,
      tags: [
        { label: "موقع الكتروني", width: 133 },
        { label: "Odoo", width: 133 },
        { label: "تصميم وجهات", width: 133 },
      ],
      arrowTop: 72,
      href: "#",
    },
  ],
  [
    {
      title: "Guide|دليل",
      image: "/assets/works/guide.png",
      mediaWidth: 604,
      mediaHeight: 462,
      inner: { width: "101.9868%", height: "100%", left: "0%", top: "0%" },
      tags: [
        { label: "تصميم تجربة المستخدم", width: 167 },
        { label: "تطوير المنصة", width: 133 },
        { label: "استراتيجية المنصة", width: 154 },
      ],
      arrowTop: 65,
      href: "#",
    },
    {
      title: "Mermates",
      image: "/assets/works/mermates.png",
      mediaWidth: 604,
      mediaHeight: 462,
      inner: { width: "100%", height: "106.9264%", left: "0%", top: "0%" },
      tags: [
        { label: "تجربة مستخدم", width: 133 },
        { label: "wordpress", width: 133 },
        { label: "متجر الكتروني", width: 188 },
      ],
      tagsRight: 1,
      arrowTop: 65,
      href: "#",
    },
  ],
];

// Homepage preview: the first two rows, with the tag set the home design shows for Che Academy.
export const HOME_PROJECT_ROWS: Project[][] = PROJECT_ROWS.slice(0, 2).map((row) =>
  row.map((project) =>
    project.title === "Che Academy"
      ? {
          ...project,
          tags: [
            { label: "موقع تعريفي", width: 133 },
            { label: "انشاء موقع", width: 133 },
            { label: "هوية بصرية", width: 133 },
          ],
        }
      : project,
  ),
);
