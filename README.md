# Haolin Yang — Academic Homepage

Personal academic website for Haolin Yang (杨昊霖).

Website: https://tidalharley.github.io/

## Local preview

Open `index.html` directly in a browser. The website uses static HTML, CSS, and JavaScript, with local images, fonts, and icons. No installation or build step is required for local viewing.

The page includes:

- A biography and contact links.
- Highlighted research, with a switch to the complete publication list.
- Education, experience, honors, language proficiency, and personal interests.
- Responsive navigation and enlarged publication figures.

External paper, project, code, and profile links require an internet connection. The page itself can be viewed offline. With JavaScript disabled, all publications remain visible.

## Editing

- `index.html`: text, publication order, links, and image references.
- `stylesheet.css`: layout, typography, colors, and responsive styles.
- `navigation.js`: section navigation.
- `interactions.js`: publication selection and figure preview.
- `assets/`: local resources and third-party license files.

Local previews, unlinked manuscripts, and unused original photographs are not part of this publishing copy.

## Deployment

The existing `.github/workflows/jekyll-pages.yml` workflow is retained. A push to `main` triggers the repository's GitHub Pages build and deployment, subject to the repository's Pages settings and workflow permissions.

## Design sources and third-party assets

The layout and navigation were adapted from [d-finite/d-finite.github.io](https://github.com/d-finite/d-finite.github.io), which in turn references [Jon Barron's academic homepage](https://jonbarron.github.io/).

The referenced homepage repository does not supply a top-level license. No blanket MIT license is assumed for its site code. Confirm the applicable permissions before publicly distributing derivative code or third-party assets.

- Outfit: Google Fonts, SIL Open Font License; see `assets/fonts/outfit-OFL.txt`.
- Ma Shan Zheng: Google Fonts, SIL Open Font License; see `assets/fonts/mashanzheng-OFL.txt`. The local font subset contains the characters used in the owner's name.
- arXiv icon: Simple Icons, CC0; see `assets/files/icon/simple-icons-LICENSE.txt`.
- GitHub icon: GitHub Octicons, MIT; see `assets/files/icon/octicons-LICENSE.txt`.
- Project globe icon: Microsoft Fluent UI System Icons, MIT; see `assets/files/icon/fluent-LICENSE.txt`.
- Hugging Face icon: [Hugging Face brand assets](https://huggingface.co/brand), as referenced by the source template.
- Email, Google Scholar, and RedNote icons were carried over from the source template; their respective rights and branding requirements remain applicable.
- Institution logos belong to their respective owners. Publication figures and personal content retain their original ownership.
