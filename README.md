# juvo

Balanced design system built around the [Harmony color palette](https://github.com/evilmartians/harmony)

## Principles

/ˈju.vo/ means to assist, serve and delight. Key characteristics of this project are:

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) compliance
- [React Server Components](https://react.dev/reference/rsc/server-components) support
- [React Hook Form](https://github.com/react-hook-form/react-hook-form) integration via `ref` prop for controls
- Single container element for top-level UI components, allowing `className` to be prepended
- [Utility-first CSS with Tailwind](https://tailwindcss.com/docs/utility-first)

## Usage

Firstly, install the package:

```sh
pnpm add juvo
```

Make sure to have all the non-optional peer dependencies available, as listed by:

```sh
npm view juvo peerDependencies peerDependenciesMeta
```

If using TypeScript, consider adopting [`@total-typescript/tsconfig`](https://github.com/total-typescript/tsconfig). Package entry points may fail to resolve otherwise.

Once the accompanying styles are loaded as shown below, components may be imported and used like:

```tsx
import { ButtonPrimary } from "juvo";

export default function App() {
  return <ButtonPrimary>Click me</ButtonPrimary>;
}
```

### With Tailwind CSS (recommended)

1. Add build-time dependencies:

   ```sh
   pnpm add -D tailwindcss postcss postcss-preset-env
   ```

2. Set up `.postcssrc.json` in your project root, making sure to disable all logical properties and values plugins:

   ```json
   {
     "plugins": {
       "tailwindcss/nesting": "postcss-nesting",
       "tailwindcss": {},
       "postcss-preset-env": {
         "features": {
           "nesting-rules": false,
           "float-clear-logical-values": false,
           "logical-overflow": false,
           "logical-overscroll-behavior": false,
           "logical-properties-and-values": false,
           "logical-resize": false,
           "logical-viewport-units": false
         }
       }
     }
   }
   ```

   - Extensive browser support is provided via [Browserslist](https://github.com/browserslist/browserslist)
   - The [official CSS Nesting syntax](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting) is used over the [Sass-like one](https://github.com/postcss/postcss-nested)

3. Configure `tailwind.config.js` in your project root, amending `content` as per [Tailwind’s framework guides](https://tailwindcss.com/docs/installation/framework-guides):

   ```ts
   import * as path from "node:path";

   import juvoPreset from "juvo/tailwind-preset";

   /** @type {import("tailwindcss").Config} */
   export default {
     content: [
       "./src/**/*.{js,jsx,ts,tsx,mdx}",
       path.join(path.dirname(require.resolve("juvo")), "**/*.js"),
     ],
     presets: [juvoPreset],
   };
   ```

   - Theme-dependent `color` tokens are exposed under the `ui-` prefix
     - To switch between color themes, `.theme-dark` and `.theme-light` classes may be applied as-is or through the [`@apply` directive](https://tailwindcss.com/docs/functions-and-directives#apply):
       ```css
       @media (prefers-color-scheme: dark) {
         @apply theme-dark;
       }
       ```
   - Transition timings are set to the `ease-out` function of Tailwind by default

4. Add `src/styles.css` and import it from your app’s root:

   ```css
   @import "tailwindcss/base";
   @import "juvo/styles/base.css";

   @import "tailwindcss/components";

   @import "tailwindcss/utilities";
   ```

### Standalone

Import styles from your app’s root:

```ts
import "juvo/styles/pregenerated.css";
```

## Inspirations

### Philosophy

- [The “everything bagel” of components](https://dio.la/article/the-everything-bagel-of-components) — Dani Guardiola
- [Reach UI Philosophy](https://gist.github.com/ryanflorence/e5c794e6093d16a69fa88d2112a292f7) — Ryan Florence
- [Margin considered harmful](https://mxstbr.com/thoughts/margin) — Max Stoiber
- [Contextual defaults](https://x.com/markdalgleish/status/1291180726218563590) — Mark Dalgleish
- [Everything You Know About Web Design Just Changed](https://www.youtube.com/watch?v=jBwBACbRuGY) — Jen Simmons

### Guidelines

- [Web Interface Guidelines](https://interfaces.rauno.me/) — Rauno Freiberg
- [Expressive React Component APIs with Discriminated Unions](https://blog.andrewbran.ch/expressive-react-component-apis-with-discriminated-unions/) — Andrew Branch

### Accessibility

- [HTML: The Inaccessible Parts](https://daverupert.com/2020/02/html-the-inaccessible-parts/) — Dave Rupert
- [Using CSS to Enforce Accessibility](https://adrianroselli.com/2021/06/using-css-to-enforce-accessibility.html) — Adrian Roselli
- [HTML Accessibility Blog](https://html5accessibility.com/stuff/) — Steve Faulkner
- [Accessiblity Support](https://a11ysupport.io/) — Michael Fairchild

### Design

- [Material Design](https://m3.material.io/) — Google
- [Visual design rules you can safely follow every time](https://www.anthonyhobday.com/sideprojects/saferules/) — Anthony Hobday
- [Choosing the correct default easing for Popmotion](https://popmotion.io/blog/20170703-choosing-a-default-easing-for-popmotion/) — Matt Perry
- [Practical UI](https://www.practical-ui.com/) — Adham Dannaway

### Examples

- [The Component Gallery](https://component.gallery/) — Iain Bean
- [UI Playbook](https://uiplaybook.dev/) — Rauno Freiberg
- [UI & UX Design Tips](https://www.uidesign.tips/) — Jim Raptis

## Contributing

Please refer to the [contribution guidelines](./CONTRIBUTING.md) for details.
