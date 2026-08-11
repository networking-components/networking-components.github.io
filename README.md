# Networking Components marketing site

Astro source for [https://networking-components.github.io/](https://networking-components.github.io/).

A modular Rust networking lab for naming, addressing, forwarding, policy, trust, connectivity, control, and telemetry.

## Product boundary

Lab slices and roadmap scope are labeled separately. The site does not claim current production readiness or complete standards compliance.

## Local validation

```sh
npm ci --ignore-scripts
npm test
npm run check
npm run build
```

GitHub Pages publishes only the tested `dist/` artifact from `main`. Dependencies are locked and all third-party workflow actions are pinned to immutable commits.
