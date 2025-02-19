# sv

Basic application structure:

```bash
src/
├── lib/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.svelte        # Site header
│   │   │   └── ConstitutionCard.svelte  # Base card component
│   │   └── features/
│   │       └── constitution/
│   │           ├── Preamble.svelte   # Preamble section
│   │           └── Article.svelte    # Article component
│   ├── utils/
│   │   └── hieroglyphs.ts           # Hieroglyph utilities
│   └── types.ts                      # TypeScript interfaces
└── routes/
    ├── +layout.svelte               # App layout with background
    └── +page.svelte                 # Main page composition
```


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.


## Misc

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!
```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

### Deploying

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
