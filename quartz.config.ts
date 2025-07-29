import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Forgetful Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      host: "https://umami.itscattime.com/",
      websiteId: "8bee4a2f-a495-474b-8aad-3066bc5c7f45",
    },
    locale: "en-US",
    baseUrl: "forgetfulnotes.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Bitter", // Schibsted Grotesk
        body: "Poppins", // Source Sans Pro
        code: "Fira Mono", // IBM Plex Mono
      },
      colors: {
        lightMode: {
          light: "#F8F8F8",
          lightgray: "#E5E5E5",
          gray: "#8F8F8F",
          darkgray: "#4E4E4E", // #2E2E2E
          dark: "#2B2B2B", // #1C1C1C
          secondary: "#091217",
          tertiary: "#AA336A",
          highlight: "#8F9FA925",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1E1E2E", // background // #161618
          lightgray: "#6C7086", // borders // #393639
          gray: "#A6ADC8", // graph links, heavy borders // #646464
          darkgray: "#CDD6F4", // body text // #D4D4D4
          dark: "#CDD6F4", // header text, icons // #EBEBEC
          secondary: "#9BE895", // links, nodes // #7B97AA
          tertiary: "#C072C4", // hover states, visited links // #84A59D
          highlight: "#8F9FA925", // internal link background
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
