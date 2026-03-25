// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mroczne Tajemnice",
  tagline: "Strona modyfikacji Mroczne Tajemnice i Mroczne Tajemnice 2.5",
  favicon: "img/images/MT_2.5_logo_WWW.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://www.mrocznetajemnice.pl",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bezimienny111", // Usually your GitHub org/user name.
  projectName: "MroczneTajemniceSite", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pl",
    locales: ["pl"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "ignore",
          blogSidebarCount: 0,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "newsy",
        routeBasePath: "newsy",
        path: "./newsy",
        showReadingTime: true,
        onInlineTags: "warn",
        onInlineAuthors: "warn",
        onUntruncatedBlogPosts: "ignore",
        blogSidebarCount: 0,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/images/menu.png",
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: true,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Mroczne Tajemnice",
          src: "img/images/MT_2.5_logo_WWW.png",
          style: { height: "42px", width: "auto" },
        },
        items: [
          {
            to: "/newsy",
            label: "Newsy Gothic",
            position: "left",
          },
          {
            to: "/blog",
            label: "Blog MT",
            position: "left",
          },
          {
            to: "/historia",
            label: "Kalendarium MT",
            position: "left",
          },
          {
            to: "/autorzy",
            label: "Autorzy modyfikacji",
            position: "left",
          },
          {
            type: "dropdown",
            label: "Download",
            position: "right",
            items: [
              {
                label: "Mroczne Tajemnice 2.5",
                href: "https://sefaris.eu/mroczne-tajemnice-2-5",
              },
              {
                label: "Mroczne Tajemnice 2.02",
                href: "https://www.sefaris.eu/mroczne-tajemnice",
              },
              {
                label: "Union i Pluginy",
                href: "https://www.sefaris.eu/union/plugins",
              },
              {
                label: "DX11",
                href: "https://github.com/SaiyansKing/GD3D11/releases",
              },
              {
                label: "Legacy Alt Renderer",
                href: "https://github.com/SaiyansKing/Gothic-LegacyAltRenderer/releases",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Przydatne linki",
            position: "right",
            items: [
              {
                label: "Solucja 2.5",
                href: "https://mt.mody.sefaris.eu/#/",
              },
              {
                label: "Solucja 2.02",
                href: "pathname:///files/Solucja_MT.pdf",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Zaprzyjaźnieni",
            position: "right",
            items: [
              {
                html: '<img src="/img/images/poziomka.png" alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:5px;"/>PoziomkaZ (twórcy oryginału)',
                href: "https://poziomkaz.pl/",
              },
              {
                html: '<img src="/img/images/bezi.png" alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:5px;"/>Bezi - YT/Mody Gothic',
                href: "https://discord.gg/hP2g4MQS5T",
                className: "discord-link",
              },
              {
                html: '<img src="/img/images/sefaris.webp" alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:5px;"/>Sefaris',
                href: "https://discord.gg/9EVFJv5Uyf",
                className: "discord-link",
              },
              {
                html: '<img src="/img/images/gothicxmod.jpg" alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:5px;"/>Gothic I: Amplified',
                href: "https://discord.gg/G2Qu6SuE5E",
                className: "discord-link",
              },
              {
                html: '<img src="/img/images/Simon.png" alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:5px;"/>Simon Said',
                href: "https://discord.gg/QjfXQeb7a",
                className: "discord-link",
              },
              {
                html: '<img src="/img/images/Puna.png" alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:5px;"/>Puna Family',
                href: "https://discord.gg/puna",
                className: "discord-link",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `© ${new Date().getFullYear()} Mroczne Tajemnice — Prowadzone przez <a href="https://www.youtube.com/@Bezimienny111" target="_blank" rel="noopener noreferrer">Bezimienny111</a> | Mod oryginalnie stworzony przez <a href="https://poziomkaz.pl/" target="_blank" rel="noopener noreferrer"><img src="/img/images/poziomka.png" alt="" style="width:13px;height:13px;vertical-align:middle;margin-right:4px;"/>PoziomkaZ</a><br/><small>Gothic™ oraz Gothic II™ są zastrzeżonymi znakami towarowymi firmy THQ Nordic GmbH. Mroczne Tajemnice jest nieoficjalną, niekomercyjną modyfikacją tworzoną przez fanów i nie jest powiązana ani zatwierdzona przez THQ Nordic GmbH ani Piranha Bytes.</small>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
