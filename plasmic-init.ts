import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { RenderMarkdown } from "./components/RenderMarkdown";
import { renderMarkdownMeta } from "./components/RenderMarkdown/registerComponentMeta";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "k2JXepJdFnXqPZvXtQafhz",
      token: "mGkw9xrbgrBLZW30yjxF41cCh9mSw3aRYKfAK0aBKDmufxMrfWS6w88KH2OpRGgSGklLcE5kXuR3t805eKA8A",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

PLASMIC.registerComponent(RenderMarkdown, renderMarkdownMeta);
