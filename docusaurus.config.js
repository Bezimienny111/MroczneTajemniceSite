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
  favicon: "img/favicon.ico",

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
      image: "img/images/baner.png",
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: true,
      },
      navbar: {
        title: "Mroczne Tajemnice",
        items: [
          {
            to: "/newsy",
            label: "Newsy",
            position: "left",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            to: "/historia",
            label: "Historia",
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
                label: "Discord: Bezi - YT/Mody Gothic",
                href: "https://discord.gg/hP2g4MQS5T",
                className: "discord-link",
              },
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
                label: "Discord Sefaris",
                href: "https://discord.gg/9EVFJv5Uyf",
                className: "discord-link",
              },
              {
                label: "Gothic I: Amplified",
                href: "https://discord.gg/G2Qu6SuE5E",
                className: "discord-link",
              },
              {
                label: "Simon Said",
                href: "https://discord.gg/QjfXQeb7a",
                className: "discord-link",
              },
              {
                label: "PoziomkaZ (twórcy oryginału)",
                href: "https://poziomkaz.pl/",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `© ${new Date().getFullYear()} Mroczne Tajemnice — Prowadzone przez Bezimienny111 | Mod oryginalnie stworzony przez <a href="https://poziomkaz.pl/" target="_blank" rel="noopener noreferrer">PoziomkaZ</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
