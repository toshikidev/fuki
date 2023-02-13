## [0.0.12](https://github.com/toshikidev/fuki/compare/v0.0.1...v0.0.12) (2023-02-13)


### Bug Fixes

* **cdn:** fix typo in cdn link with to username on package name ([6061a3b](https://github.com/toshikidev/fuki/commit/6061a3b2ddee1a8ef83cba2aecb5f88a96ff6e25))
* **cdn:** update prior jsd cdn towards js file to the latest version with username ([d4bdd62](https://github.com/toshikidev/fuki/commit/d4bdd627530e3febd93f394c556ffbbf64b50440))
* **default theme:** 🐳 ([bdb38c8](https://github.com/toshikidev/fuki/commit/bdb38c831ed0a72cc24828b455a22116a22c09da))
* **default theme:** update default theme content with favicon and copywrite ([2a5dcc8](https://github.com/toshikidev/fuki/commit/2a5dcc8defc1741cd5fd7628567de74d406165b4))
* **repo:** update repo redirect github link on redirection page ([3528ad2](https://github.com/toshikidev/fuki/commit/3528ad2a0eb1402cdba35701c154ef8eab585bee))
* **scripts:** fix changelog build script in package info file ([3a92112](https://github.com/toshikidev/fuki/commit/3a921121d25b1565b55384893ad64a9e27752bab))
* **theme:** fix index demo theme page title for meeting convention ([d501874](https://github.com/toshikidev/fuki/commit/d5018748869c9cbe4e6647c6f2138e60504b383d))
* **theme:** fix theme title and copywrite info ([c4ec43e](https://github.com/toshikidev/fuki/commit/c4ec43e52ebc5f40c5a1ad65cb271bfd2cfcdd2d))
* **vibrant theme:** add favicon to vibrant theme as all page requires ([a67b455](https://github.com/toshikidev/fuki/commit/a67b455ef309ff914f9e2349e342d1ccedf7f084))


### Features

* **changelog:** add changelog build script in package info file for shorcut ([afe1472](https://github.com/toshikidev/fuki/commit/afe14721c3f208e1c1b31744fbd6496e08daf140))
* **changelog:** add changelog building cli via conventional commits changelog cli and corresponded toolchain ([2656a40](https://github.com/toshikidev/fuki/commit/2656a405a90e29735d6681ca468f7448cc3231f8))
* **theme:** make default moefied index theme to `toshikimoe` selectable option ([9c0abbd](https://github.com/toshikidev/fuki/commit/9c0abbdc89df46443c3a6a77a9998077898caaac))
* **tool:** move shell script shortcut toolchain to `tools` dir ([ba74df2](https://github.com/toshikidev/fuki/commit/ba74df299ede9e5492f3c70be6492e01f5692fc2))



## [0.0.1](https://github.com/toshikidev/fuki/compare/25c589908945f965c57b92db32409c9f066283fa...v0.0.1) (2023-02-12)


### Bug Fixes

* **cdn:** alter local css style file path to jsdlelivr npm package cdn serving ([256b5c5](https://github.com/toshikidev/fuki/commit/256b5c525a8780ddb4d512e89b14a3445b04d973))
* **config:** update theme variable to `themes` for fetching theme page as a regard to dir name ([8f68916](https://github.com/toshikidev/fuki/commit/8f689163e3add26f0816dcf2f428016d420c3d0f))
* **lockfile:** rm unused lockfile with yarn ([7eae958](https://github.com/toshikidev/fuki/commit/7eae9582012d83740193a2798a12fbbc8e6594a0))
* **npm:** fix gh action checkout step `npm ci` command to `yarn ci` ([7a0326f](https://github.com/toshikidev/fuki/commit/7a0326fc50f34463fe08c4f4893032c7986e5868))
* **npm:** fix gh action npm publish workflow to yarn based ([eb4125b](https://github.com/toshikidev/fuki/commit/eb4125b18a894f7c1d1531640a24f0d1b35c6a4f))
* **package info:** update script setting in json file since wrongfully placed ([14289c5](https://github.com/toshikidev/fuki/commit/14289c56d625728f0edfe00ed4f388424813f3e6))
* **pkg name:** alter npm package name for action auto build and release ([732569b](https://github.com/toshikidev/fuki/commit/732569b5f9a8b7f4521654997b0c898c17e5b30a))
* **pkg name:** alter npm package name from personal package to public wide base ([25c5899](https://github.com/toshikidev/fuki/commit/25c589908945f965c57b92db32409c9f066283fa))
* **pkg:** update package visibility and add code owner to `package.json` file ([3db39e5](https://github.com/toshikidev/fuki/commit/3db39e531b286d52c3c091f3478f84ac4f07d7d1))
* **publish:** revert publish command from yarn back to npm for successful publishing ([0b01938](https://github.com/toshikidev/fuki/commit/0b01938ed78d01e850f6a1b2942a6726e483d9b5))
* **publish:** update publish workflow for test run ([9a34acf](https://github.com/toshikidev/fuki/commit/9a34acf53643ed495aa282b68443fd530ca7f8b2))
* **spacing:** update server console log print spacing via space variable instead of utf8 ([53c43d4](https://github.com/toshikidev/fuki/commit/53c43d473773b0848a6c0db845a3881b1f1c9ab8))
* **title:** update site title and description ([bd816bd](https://github.com/toshikidev/fuki/commit/bd816bdfb0f72011a0c38058ad2a7066d0fd62ed))
* **title:** update site title and favicon ([0f314e4](https://github.com/toshikidev/fuki/commit/0f314e4d56d46d313867506ae4b6ba4dd9fe6c23))
* **visibility:** change npm package visibility to public ([6d9d5fa](https://github.com/toshikidev/fuki/commit/6d9d5fa047ca5f2a89c550b7b7161fae07d6f405))
* **yarn:** fix publish step command in workflow yarn for `npm ci` equivalent ([3dac983](https://github.com/toshikidev/fuki/commit/3dac98364ae76258d749f4d71f5506b498e4fa14))
* **yarn:** fix registry setting command in yarn to `yarn config set` ([7f8b833](https://github.com/toshikidev/fuki/commit/7f8b833d0b46cfdda29d7a3bbc9185dd8583c0f7))


### Features

* **cdn:** replace some static file links to cdn via jsdelivr ([4fda71f](https://github.com/toshikidev/fuki/commit/4fda71f643731fe52cade7dc0c68242d4c6551ec))
* **cdn:** replace some static file links to cdn via jsdelivr ([8e94c39](https://github.com/toshikidev/fuki/commit/8e94c3941cb89b255f60d445e9642e034b6b9e77))
* **gh corner:** update redirect link to repo on gh corner banner ([36e07b9](https://github.com/toshikidev/fuki/commit/36e07b98d07448bb61fc571a27c3deda1ae63fb8))
* **npm:** add npm publish script for publishing public pkg ([3507d61](https://github.com/toshikidev/fuki/commit/3507d6112ac9790e61a455b77f77a98b5e8d6259))
* **publish:** add publish automation workflow for publishing package to both npm and ghrc registry ([c4a51bf](https://github.com/toshikidev/fuki/commit/c4a51bf8d5c51cba22fa5a69dd61e2ce29d80eb7))
* **script:** add package build and release script for github action release ([838d2de](https://github.com/toshikidev/fuki/commit/838d2de2ca04727d2d7484294bd35f582565593d))



