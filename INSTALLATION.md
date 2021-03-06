@vlah.io/ngx-success-box

Package generated with `angular-cli` as follows
----------------------------------------------------------

### Create new

```
  ng new ngx-success-box --createApplication=false --prefix=vlahio
  cd ngx-success-box
```

### Generate new library

```
  cd ngx-success-box
  ng generate library ngx-success-box --prefix=vlahio
```

### Generate test application

```
  cd ngx-success-box
  ng generate application ngx-success-box-test
```

### Automatically add exports to `public-api.ts`

This can easily be achieved by running the command `npm run fix-public-api`.

### Building, Packaging & Publishing

To build, package and publish a new version run one of the following:

```  
  npm run make-patch-release
  npm run make-minor-release
  npm run make-major-release
```

### Available commands

```
  npm run ng
  npm run start
  npm run build
  npm run test
  npm run test-lib
  npm run lint
  npm run e2e
  npm run fix-public-api
  npm run fix-readme
  npm run fix-version-patch
  npm run fix-version-minor
  npm run fix-version-major
  npm run git-add-version
  npm run git-commit
  npm run git-push
  npm run prep-release
  npm run prep-package
  npm run make-patch-release
  npm run make-minor-release
  npm run make-major-release
  npm run publish-release
```

### Notes

1. `peerDependencies` module names are maintained inside `ng-package.json` (see the example bellow).
   ```
    "lib": {
      "entryFile": "src/public-api.ts",
      "umdModuleIds": {
        "subsink": "subsink"
      }
    }
   ```
2. In case the `CSS` contains `url` to image assets add to `ng-package.json` the `cssUrl` key/value set to `inline` (see the example bellow).
   ```
    "lib": {
      "entryFile": "src/public-api.ts",
      "cssUrl": "inline"
    }
   ```
3. Make sure `peerDependencies` is properly maintained in both `package.json` files.
4. When using directives depended on `CSS` in the `test` application don't forget to add the necessary imports (see the example bellow).
   ```
    @import "../../ngx-success-box/src/assets/css/ngx-success-box.css";
   ```
5. When this package was generated:
   1. This `INSTALLATION.md` was added.
   2. A `LICENSE` and `README` file were added as well.
   3. Both files (`README.md` and `LICENCE`) were added in the root directory and copied in the library's rood folder as well.
   4. To properly handle how `public-api.ts` file is maintained `scan.js` was created.
   5. `package.json` was updated with scripts, the `@vlah.io` prefix and some other file specific key/values.
   6. Further more, both `package.json` files get their `peerDependencies` added and then kept in sync.
   7. Added `types=["jasmine"]` to `tsconfig.lib.json`.
   8. Added to `karma.conf.js` the following:
      ```
        client: {
          jasmine: {
            random: false
          }
        }
      ```
