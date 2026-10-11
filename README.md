# Barry Kuts

A personal website with editable example content built from [al-folio](https://github.com/alshedivat/al-folio), following its [Quick Start](docs/QUICKSTART.md) and [installation instructions](docs/INSTALL.md).

The site has About, Projects, and Blog navigation, with social icons at the top left of the About page, an example biography, three sample projects, two sample posts, and a news update. Illustrative personal content is explicitly marked as examples. Light and dark modes are available.

## Preview locally

With Ruby 3.3 or newer and Bundler installed:

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000>. Alternatively, with Docker running:

```sh
docker compose pull
docker compose up
```

Open <http://localhost:8080>.

## Publish to GitHub Pages

1. Change your GitHub username to `barrykuts` in **Settings → Account → Change username**, if available.
2. Create an independent repository named `barrykuts.github.io` under `barrykuts` (or rename your existing personal-site repository) and push these files to its `main` branch.
3. In **Settings → Actions → General → Workflow permissions**, select **Read and write permissions**.
4. Let the included **Deploy site** workflow finish.
5. In **Settings → Pages**, choose **Deploy from a branch**, then **gh-pages** and **/ (root)**.

The configured public URL is <https://barrykuts.github.io>, with an empty `baseurl` as required for a personal GitHub Pages site. Publishing requires pushing to your own repository; this workspace has no upstream al-folio remote.

## Customize

- `_pages/about.md`: replace the example biography and interests.
- `assets/img/photo-placeholder.svg`: replace with your portrait, then set `profile.image` in `_pages/about.md` to its filename.
- `_projects/`: replace the three illustrative project descriptions with real work.
- `_posts/`: replace the sample posts or add new dated Markdown files.
- `_news/`: add brief updates for the home page.
- `_data/socials.yml`: edit your social links.
- `_config.yml`: site identity, URL, and feature settings.
- `Gemfile` and `_config.yml`: keep dependency and plugin activation lists aligned.

No layouts, includes, styles, or scripts override the al-folio plugin runtime. The upstream MIT license is retained.
