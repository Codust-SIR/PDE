import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Pathways to Digital Employment",
  tagline: "Unlocking Potential, Crafting Futures: Learn, Shine, Succeed.",
  favicon: "img/pde-logo.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Codust-SIR/PDE.git/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Codust-SIR/PDE.git/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/pde-logo.png",
    navbar: {
      title: "PDE ",
      logo: {
        alt: "PDE Logo",
        src: "img/pde-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Courses",
        },
        { to: "/blog", label: "Blog", position: "left" },

        {
          href: "https://github.com/Codust-SIR",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          items: [
            {
              html: `
                <a
          style="
            display: flex;
            flex: 0.4;
            gap: 10px;
            color: white;
            text-decoration: none;
          "
          href="https://sirafrica.org"
          underline="none"
        >
          <img
            height={100}
            width={100}
            alt="SIR"
            src="/img/sirafrica_logo_bw.png"
            style="
              height: 45px;
              width: 45px;
            "
          />
          <div>
            <h3
              variant="h5"
              component="h5"
              style="
                flex-grow: 1;
                color: white;
                font-weight: 800px;
                letter-spacing: 3;
              "
            >
              SIR
            </h3>
            <p
              variant="body2"
              component="p"
              style={{
                flexGrow: 1,
                letter-spacing: 1,
                color: white,
              }}
            >
              Learn, Earn, Innovate
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </a>
                `,
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/SolidarityInit1",
            },
            {
              label: "WhatsApp",
              href: "https://chat.whatsapp.com/FwoP7nh5HrpBfYDVP9HuGt",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Codust-SIR",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Solidarity Initiative for Refugees`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    docsSidebars: {
      // Display the "Basic" sidebar when on a page in the "Basic" section
      basic: [
        {
          type: "autogenerated",
          dirName: "./docs/basic-ict",
        },
      ],
      // Display the "Advanced" sidebar when on a page in the "Advanced" section
      advanced: [
        {
          type: "autogenerated",
          dirName: "./docs/advanced-ict",
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
