# Hey Usman and Raj! 

This project is built with React, NextJS and TailwindCSS. If you're already comfortable with NextJS, feel free to dig in and get started. If not, I will provide some details below to get you up and running.


## Let's get things running

This template is built on top of [NextJS](https://nextjs.org/), a full stack development framework built on top of React.

I won't take time here going over exactly how NextJS works on a deep level (to be fair, this project doesn't use Next at a deep level), but if you're interested in learning, their docs are [here](https://nextjs.org/docs/getting-started).

At the root of your project, you'll see a `package.json` file defining our dependencies.

Most of this is boilerplate, but I will call out the following dependencies:

- `framer-motion` -> A react based animation library used for most animations
- `tailwindcss` -> All styling uses Tailwind CSS for this project
- `resend` -> An email service that we're using to receive emails from the contact forms/booking form.

Now that that's out of the way, you can get your project running by first installing dependencies.

From your terminal, run:

```
npm install 

```

This will take a minute or two, but once that's done, you should be able to run the following command:

```
npm run dev

```

This will start your project on `localhost:3000`

## The file structure

Because this is a NextJS project, we follow the standard NextJS pattern for organizing this project. If you're familiar with the latest in Next, you might know about the relatively new `app` directory. This particular project uses the older `pages` directory.

If you WOULD like to upgrade to the app directory, you can find docs on that [here](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration), but it shouldn't make any difference for a project like this one.

Inside of the `src/pages/` directly you'll find 3 files:


- `_app.jsx` -> A file which wraps around every page in our app. It contains the favicon in this case.
- `_document.jsx` -> Essentially the NextJS version of your base "HTML document". Nothing fancy here beyond the Google Tag Manager script.
- `index.jsx` -> This represents our home route. You should start digging around from here. We also define our font class names here, imported from the `src/fonts` file. If you'd like to update this font, check out [this doc](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts). As well as the meta tags for SEO.
- `env.local` -> This is where we store our environment variables. We only have the Resend API key in here.


To add MORE routes to your project, see [this doc](https://nextjs.org/docs/basic-features/pages).

Inside of the `/src/components/` directory you'll find all of the components being rendered in our home route.

## Styling

As noted, styling is done using [Tailwind CSS](https://tailwindcss.com/).

Open up the `tailwind.config.js` file to add to your configuration.

Font for this project is Roboto. This is imported from the `src/fonts.js` file.


## Adding a new component

To add a new component, create a new file in the `src/components/` directory. Then, import the component into the `index.jsx` file.

```
import { Button } from "@/components/ui/button";

```
the `@` symbol is a shortcut for the `src` directory.


