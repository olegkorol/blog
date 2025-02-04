import type { Metadata } from "next";


// export const getSEO = ({
//   title,
//   description,
//   keywords,
//   openGraph,
//   canonicalUrlRelative,
//   extraTags,
// }: Partial<Metadata> & {
//   canonicalUrlRelative?: string;
//   extraTags?: Record<string, any>;
// } = {}): Metadata => {
//   return {
//     title: title || config.appName,
//     description: description || config.appDesc,
//     keywords: keywords || config.keywords || [config.appName],
//     applicationName: config.appName,
//     metadataBase: new URL(
//       process.env.NODE_ENV === "development"
//         ? "http://localhost:3000/"
//         : `https://${config.domain}/`
//     ),
//     openGraph: {
//       title: openGraph?.title || config.appName,
//       description: openGraph?.description || config.appDesc,
//       url: openGraph?.url || `https://${config.domain}/`,
//       siteName: openGraph?.title || config.appName,
//       images: [
//         {
//           url: `https://${config.domain}/banner.png`,
//           width: 950,
//           height: 300,
//           alt: `${config.appName} Banner`
//         },
//       ],
//       locale: "en_US",
//       type: "website",
//     } as any,

//     ...(canonicalUrlRelative && {
//       alternates: { canonical: new URL(canonicalUrlRelative, `https://${config.domain}/`) },
//     }),

//     ...extraTags,
//   } as Metadata;
// };