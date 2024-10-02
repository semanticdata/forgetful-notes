import {PageLayout, SharedLayout} from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  // header: [Component.PageTitle(), Component.Search(), Component.Darkmode()],
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      About: "/About",
      Blog: "https://miguelpimentel.do/",
      Meta: "/Meta",
      GitHub: "https://github.com/semanticdata/forgetful-notes/",
      Uses: "/Uses",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],

  // beforeBody: [
  //   Component.Breadcrumbs(),
  //   Component.ArticleTitle(),
  //   Component.ContentMeta(),
  //   Component.TagList(),
  // ],
  // left: [
  //   Component.PageTitle(),
  //   Component.MobileOnly(Component.Spacer()),
  //   Component.Search(),
  //   Component.Darkmode(),
  //   Component.DesktopOnly(Component.Explorer()),
  // ],
  // right: [
  //   Component.Graph(),
  //   Component.DesktopOnly(Component.TableOfContents()),
  //   Component.Backlinks(),
  // ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],

  // beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  // left: [
  //   Component.PageTitle(),
  //   Component.MobileOnly(Component.Spacer()),
  //   Component.Search(),
  //   Component.Darkmode(),
  //   Component.DesktopOnly(Component.Explorer()),
  // ],
  // right: [],
}
