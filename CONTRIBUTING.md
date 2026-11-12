# Contributing

Thanks for helping. This guide covers issues, local setup and pull requests.

Everyone taking part follows the [code of conduct](.github/CODE_OF_CONDUCT.md).

## Issues

- Search the existing issues first.
- Use the **Bug report** or **Feature request** form.
- Report security problems privately, as described in the [security policy](.github/SECURITY.md).

## Local setup

1. Install the Node.js version in `.nvmrc` (24). With nvm: `nvm use`.
2. Install dependencies: `npm ci`.
3. Check everything works: `npm run verify`.

| Task                          | Command              |
| ----------------------------- | -------------------- |
| Build into `dist/`            | `npm run build`      |
| Build, then run `debug/`      | `npm start`          |
| Tests (Vitest)                | `npm run test`       |
| Lint with autofix             | `npm run lint`       |
| Type-check                    | `npm run typecheck`  |
| Lint check, type-check, tests | `npm run verify`     |

## Pull requests

1. Fork the repository and branch from `main`.
2. Keep each pull request to one change. Open an issue first for anything large.
3. Add or update tests next to the code (`*.test.ts` in `src/`).
4. Run `npm run verify`. The **Verify** workflow runs the same check, plus the build, on every pull request.
5. Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages and the pull request title, for example `fix: handle empty input`.

Do not edit `dist/`: it is build output. Do not bump the version: releases are made by the maintainer.

Read `ARCHITECTURE.md` before adding a dependency or crossing a module boundary.

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).
