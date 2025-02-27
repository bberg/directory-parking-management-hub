import type Emoji from "./components/OgImage/Emoji.vue";

export default defineAppConfig({
  general: {
    // todo make dynamic
    title: "Parking Management Hub",
    logo: "/logo.png",
    // iconLogo: "fluent-emoji-flat:leaf-fluttering-in-wind",
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: "Parking Management Directory",
    description: "Directory of Parking Management Companies and Software Solutions - Parking Management Hub",
    url: "parkingmanagementhub.com",
    favicon: {
      image: "",
      emoji: "",
    },
  },
  directory: {
    search: {
      placeholder: "Search {0} Listings",
      icon: "tabler:bow",
      tags: {
        // options: none,select,show-all,
        display: "select",
        intersection: false,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: "Entry not found.",
        // options: button, simple, link
        type: "button",
        icon: "tabler:exclamation-mark",
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: "shadow",
      },
      submit: {
        show: false,
        first: false,
        title: "Submit a template",
        description:
          "Submit a template to show off a good project to other people.",
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: false,
      showOnSide: false,
      icon: "tabler:star",
      labelForCard: "Featured ✨",
    },
    tags: [
{"name": "License Plate Recognition", "color": "gray"},
  {"name": "Software Platform", "color": "gray"},
  {"name": "Resident Parking Solutions", "color": "gray"},
  {"name": "Facility Management", "color": "gray"},
  {"name": "Systems Installation", "color": "gray"},
  {"name": "Valet Services", "color": "gray"},
  {"name": "Management Software", "color": "gray"},
  {"name": "Point of Sale", "color": "gray"},
  {"name": "Enforcement", "color": "gray"},
  {"name": "Parking Access & Revenue Control", "color": "gray"},
  {"name": "Shuttle Services", "color": "gray"},
  {"name": "Event Management", "color": "gray"},
  {"name": "Security", "color": "gray"},
  {"name": "RFID Sensing", "color": "gray"},
  {"name": "Consulting", "color": "gray"}
],
    tagPages: {
      title: "Available {0} items:",
      description:
        "View all items in the {0} category...",
    },
  },
  header: {
    banner: {
      show: false,
      text: "Add your listing",
      link: "https://ParkingManagementHub.com",
      brandText: "Directory",
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: "Directory", to: "/" },
        { name: "Blog", to: "/blog" },
        // { name: "Advertise", to: "/advertise" },
        // {
        //   name: "Analytics",
        //   to: "https://us.posthog.com/shared/7dgSk4cvgNYnJwBu6R47kZXHBUBJWQ",
        //   target: "_blank",
        // },
      ],
    },
    actionButton: {
      text: "Add a Listing",
      href:  "/submit",
    },
  },
  footer: {
    description: "Parking Management Hub: A directory for finding appropriate parking management companies, software solutions, and services",
    // socials: {
    //   github: {
    //     link: "",
    //     icon: "tabler:brand-github",
    //   },
    //   facebook: {
    //     link: "",
    //     icon: "tabler:brand-facebook",
    //   },
    //   instagram: {
    //     link: "",
    //     icon: "tabler:brand-instagram",
    //   },
    //   x: {
    //     link: "https://x.com/mark_bruderer",
    //     icon: "tabler:brand-twitter",
    //   },
    //   youtube: {
    //     link: "https://www.youtube.com/@mark_hacks",
    //     icon: "tabler:brand-youtube",
    //   },
    // },
  },
  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },
});
