{
  "name": "advancedprofanityfilter",
  "version": "2.19.1",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "advancedprofanityfilter",
      "version": "2.19.1",
      "license": "SEE LICENSE IN LICENSE",
      "devDependencies": {
        "@babel/cli": "^7.14.3",
        "@babel/core": "^7.14.3",
        "@babel/plugin-proposal-class-properties": "^7.13.0",
        "@babel/plugin-proposal-object-rest-spread": "^7.14.2",
        "@babel/polyfill": "^7.12.1",
        "@babel/preset-env": "^7.14.2",
        "@babel/preset-typescript": "^7.13.0",
        "@babel/register": "^7.13.16",
        "@types/chrome": "^0.0.141",
        "@typescript-eslint/eslint-plugin": "^4.24.0",
        "@typescript-eslint/parser": "^4.24.0",
        "addons-linter": "^3.5.0",
        "adm-zip": "git+https://github.com/cthackers/adm-zip.git",
        "babel-loader": "^8.2.2",
        "chai": "^4.3.4",
        "chokidar": "^3.5.1",
        "download": "^8.0.0",
        "eslint": "^7.26.0",
        "fs-extra": "^10.0.0",
        "marked": "^2.0.4",
        "mocha": "^8.4.0",
        "nyc": "^15.1.0",
        "terser-webpack-plugin": "^5.1.2",
        "typescript": "^4.2.4",
        "webpack": "^5.37.1",
        "webpack-cli": "^4.7.0"
      }
    },
    "node_modules/@babel/cli": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/cli/-/cli-7.14.3.tgz",
      "integrity": "sha512-zU4JLvwk32ay1lhhyGfqiRUSPoltVDjhYkA3aQq8+Yby9z30s/EsFw1EPOHxWG9YZo2pAGfgdRNeHZQAYU5m9A==",
      "dev": true,
      "dependencies": {
        "commander": "^4.0.1",
        "convert-source-map": "^1.1.0",
        "fs-readdir-recursive": "^1.1.0",
        "glob": "^7.0.0",
        "make-dir": "^2.1.0",
        "slash": "^2.0.0",
        "source-map": "^0.5.0"
      },
      "bin": {
        "babel": "bin/babel.js",
        "babel-external-helpers": "bin/babel-external-helpers.js"
      },
      "optionalDependencies": {
        "@nicolo-ribaudo/chokidar-2": "2.1.8-no-fsevents",
        "chokidar": "^3.4.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/cli/node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "dev": true,
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/@babel/cli/node_modules/make-dir": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
      "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
      "dev": true,
      "dependencies": {
        "pify": "^4.0.1",
        "semver": "^5.6.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@babel/cli/node_modules/pify": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
      "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@babel/cli/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.13.tgz",
      "integrity": "sha512-HV1Cm0Q3ZrpCR93tkWOYiuYIgLxZXZFVG2VgK+MBWjUqZTundupbfx2aXarXuw5Ko5aMcjtJgbSs4vUGBS5v6g==",
      "dev": true,
      "dependencies": {
        "@babel/highlight": "^7.12.13"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.14.0.tgz",
      "integrity": "sha512-vu9V3uMM/1o5Hl5OekMUowo3FqXLJSw+s+66nt0fSWVWTtmosdzn45JHOB3cPtZoe6CTBDzvSw0RdOY85Q37+Q==",
      "dev": true
    },
    "node_modules/@babel/core": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.14.3.tgz",
      "integrity": "sha512-jB5AmTKOCSJIZ72sd78ECEhuPiDMKlQdDI/4QRI6lzYATx5SSogS1oQA2AoPecRCknm30gHi2l+QVvNUu3wZAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.12.13",
        "@babel/generator": "^7.14.3",
        "@babel/helper-compilation-targets": "^7.13.16",
        "@babel/helper-module-transforms": "^7.14.2",
        "@babel/helpers": "^7.14.0",
        "@babel/parser": "^7.14.3",
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.14.2",
        "@babel/types": "^7.14.2",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.1.2",
        "semver": "^6.3.0",
        "source-map": "^0.5.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.14.3.tgz",
      "integrity": "sha512-bn0S6flG/j0xtQdz3hsjJ624h3W0r3llttBMfyHX3YrZ/KtLYr15bjA0FXkgW7FpvrDuTuElXeVjiKlYRpnOFA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.14.2",
        "jsesc": "^2.5.1",
        "source-map": "^0.5.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.12.13.tgz",
      "integrity": "sha512-7YXfX5wQ5aYM/BOlbSccHDbuXXFPxeoUmfWtz8le2yTkTZc+BxsiEnENFoi2SlmA8ewDkG2LgIMIVzzn2h8kfw==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.13"
      }
    },
    "node_modules/@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.12.13.tgz",
      "integrity": "sha512-CZOv9tGphhDRlVjVkAgm8Nhklm9RzSmWpX2my+t7Ua/KT616pEzXsQCjinzvkRvHWJ9itO4f296efroX23XCMA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-explode-assignable-expression": "^7.12.13",
        "@babel/types": "^7.12.13"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.13.16",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.13.16.tgz",
      "integrity": "sha512-3gmkYIrpqsLlieFwjkGgLaSHmhnvlAYzZLlYVjlW+QwI+1zE17kGxuJGmIqDQdYp56XdmGeD+Bswx0UTyG18xA==",
      "dev": true,
      "dependencies": {
        "@babel/compat-data": "^7.13.15",
        "@babel/helper-validator-option": "^7.12.17",
        "browserslist": "^4.14.5",
        "semver": "^6.3.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-class-features-plugin": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.14.3.tgz",
      "integrity": "sha512-BnEfi5+6J2Lte9LeiL6TxLWdIlEv9Woacc1qXzXBgbikcOzMRM2Oya5XGg/f/ngotv1ej2A/b+3iJH8wbS1+lQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.12.13",
        "@babel/helper-function-name": "^7.14.2",
        "@babel/helper-member-expression-to-functions": "^7.13.12",
        "@babel/helper-optimise-call-expression": "^7.12.13",
        "@babel/helper-replace-supers": "^7.14.3",
        "@babel/helper-split-export-declaration": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-regexp-features-plugin": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.14.3.tgz",
      "integrity": "sha512-JIB2+XJrb7v3zceV2XzDhGIB902CmKGSpSl4q2C6agU9SNLG/2V1RtFRGPG1Ajh9STj3+q6zJMOC+N/pp2P9DA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.12.13",
        "regexpu-core": "^4.7.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-define-polyfill-provider": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.2.0.tgz",
      "integrity": "sha512-JT8tHuFjKBo8NnaUbblz7mIu1nnvUDiHVjXXkulZULyidvo/7P6TY7+YqpV37IfF+KUFxmlK04elKtGKXaiVgw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-compilation-targets": "^7.13.0",
        "@babel/helper-module-imports": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/traverse": "^7.13.0",
        "debug": "^4.1.1",
        "lodash.debounce": "^4.0.8",
        "resolve": "^1.14.2",
        "semver": "^6.1.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0-0"
      }
    },
    "node_modules/@babel/helper-explode-assignable-expression": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.13.0.tgz",
      "integrity": "sha512-qS0peLTDP8kOisG1blKbaoBg/o9OSa1qoumMjTK5pM+KDTtpxpsiubnCGP34vK8BXGcb2M9eigwgvoJryrzwWA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.13.0"
      }
    },
    "node_modules/@babel/helper-function-name": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.14.2.tgz",
      "integrity": "sha512-NYZlkZRydxw+YT56IlhIcS8PAhb+FEUiOzuhFTfqDyPmzAhRge6ua0dQYT/Uh0t/EDHq05/i+e5M2d4XvjgarQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-get-function-arity": "^7.12.13",
        "@babel/template": "^7.12.13",
        "@babel/types": "^7.14.2"
      }
    },
    "node_modules/@babel/helper-get-function-arity": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.12.13.tgz",
      "integrity": "sha512-DjEVzQNz5LICkzN0REdpD5prGoidvbdYk1BVgRUOINaWJP2t6avB27X1guXK1kXNrX0WMfsrm1A/ZBthYuIMQg==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.13"
      }
    },
    "node_modules/@babel/helper-hoist-variables": {
      "version": "7.13.16",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.13.16.tgz",
      "integrity": "sha512-1eMtTrXtrwscjcAeO4BVK+vvkxaLJSPFz1w1KLawz6HLNi9bPFGBNwwDyVfiu1Tv/vRRFYfoGaKhmAQPGPn5Wg==",
      "dev": true,
      "dependencies": {
        "@babel/traverse": "^7.13.15",
        "@babel/types": "^7.13.16"
      }
    },
    "node_modules/@babel/helper-member-expression-to-functions": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.13.12.tgz",
      "integrity": "sha512-48ql1CLL59aKbU94Y88Xgb2VFy7a95ykGRbJJaaVv+LX5U8wFpLfiGXJJGUozsmA1oEh/o5Bp60Voq7ACyA/Sw==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.13.12"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.13.12.tgz",
      "integrity": "sha512-4cVvR2/1B693IuOvSI20xqqa/+bl7lqAMR59R4iu39R9aOX8/JoYY1sFaNvUMyMBGnHdwvJgUrzNLoUZxXypxA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.13.12"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.14.2.tgz",
      "integrity": "sha512-OznJUda/soKXv0XhpvzGWDnml4Qnwp16GN+D/kZIdLsWoHj05kyu8Rm5kXmMef+rVJZ0+4pSGLkeixdqNUATDA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-imports": "^7.13.12",
        "@babel/helper-replace-supers": "^7.13.12",
        "@babel/helper-simple-access": "^7.13.12",
        "@babel/helper-split-export-declaration": "^7.12.13",
        "@babel/helper-validator-identifier": "^7.14.0",
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.14.2",
        "@babel/types": "^7.14.2"
      }
    },
    "node_modules/@babel/helper-optimise-call-expression": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.12.13.tgz",
      "integrity": "sha512-BdWQhoVJkp6nVjB7nkFWcn43dkprYauqtk++Py2eaf/GRDFm5BxRqEIZCiHlZUGAVmtwKcsVL1dC68WmzeFmiA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.13"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.13.0.tgz",
      "integrity": "sha512-ZPafIPSwzUlAoWT8DKs1W2VyF2gOWthGd5NGFMsBcMMol+ZhK+EQY/e6V96poa6PA/Bh+C9plWN0hXO1uB8AfQ==",
      "dev": true
    },
    "node_modules/@babel/helper-remap-async-to-generator": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.13.0.tgz",
      "integrity": "sha512-pUQpFBE9JvC9lrQbpX0TmeNIy5s7GnZjna2lhhcHC7DzgBs6fWn722Y5cfwgrtrqc7NAJwMvOa0mKhq6XaE4jg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.12.13",
        "@babel/helper-wrap-function": "^7.13.0",
        "@babel/types": "^7.13.0"
      }
    },
    "node_modules/@babel/helper-replace-supers": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.14.3.tgz",
      "integrity": "sha512-Rlh8qEWZSTfdz+tgNV/N4gz1a0TMNwCUcENhMjHTHKp3LseYH5Jha0NSlyTQWMnjbYcwFt+bqAMqSLHVXkQ6UA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-member-expression-to-functions": "^7.13.12",
        "@babel/helper-optimise-call-expression": "^7.12.13",
        "@babel/traverse": "^7.14.2",
        "@babel/types": "^7.14.2"
      }
    },
    "node_modules/@babel/helper-simple-access": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.13.12.tgz",
      "integrity": "sha512-7FEjbrx5SL9cWvXioDbnlYTppcZGuCY6ow3/D5vMggb2Ywgu4dMrpTJX0JdQAIcRRUElOIxF3yEooa9gUb9ZbA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.13.12"
      }
    },
    "node_modules/@babel/helper-skip-transparent-expression-wrappers": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.12.1.tgz",
      "integrity": "sha512-Mf5AUuhG1/OCChOJ/HcADmvcHM42WJockombn8ATJG3OnyiSxBK/Mm5x78BQWvmtXZKHgbjdGL2kin/HOLlZGA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.1"
      }
    },
    "node_modules/@babel/helper-split-export-declaration": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.12.13.tgz",
      "integrity": "sha512-tCJDltF83htUtXx5NLcaDqRmknv652ZWCHyoTETf1CXYJdPC7nohZohjUgieXhv0hTJdRf2FjDueFehdNucpzg==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.13"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.14.0.tgz",
      "integrity": "sha512-V3ts7zMSu5lfiwWDVWzRDGIN+lnCEUdaXgtVHJgLb1rGaA6jMrtB9EmE7L18foXJIE8Un/A/h6NJfGQp/e1J4A==",
      "dev": true
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.12.17",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.12.17.tgz",
      "integrity": "sha512-TopkMDmLzq8ngChwRlyjR6raKD6gMSae4JdYDB8bByKreQgG0RBTuKe9LRxW3wFtUnjxOPRKBDwEH6Mg5KeDfw==",
      "dev": true
    },
    "node_modules/@babel/helper-wrap-function": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.13.0.tgz",
      "integrity": "sha512-1UX9F7K3BS42fI6qd2A4BjKzgGjToscyZTdp1DjknHLCIvpgne6918io+aL5LXFcER/8QWiwpoY902pVEqgTXA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-function-name": "^7.12.13",
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.13.0",
        "@babel/types": "^7.13.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.14.0.tgz",
      "integrity": "sha512-+ufuXprtQ1D1iZTO/K9+EBRn+qPWMJjZSw/S0KlFrxCw4tkrzv9grgpDHkY9MeQTjTY8i2sp7Jep8DfU6tN9Mg==",
      "dev": true,
      "dependencies": {
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.14.0",
        "@babel/types": "^7.14.0"
      }
    },
    "node_modules/@babel/highlight": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.14.0.tgz",
      "integrity": "sha512-YSCOwxvTYEIMSGaBQb5kDDsCopDdiUGsqpatp3fOlI4+2HQSkTmEVWnVuySdAC5EWCqSWWTv0ib63RjR7dTBdg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.14.0",
        "chalk": "^2.0.0",
        "js-tokens": "^4.0.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.14.3.tgz",
      "integrity": "sha512-7MpZDIfI7sUC5zWo2+foJ50CSI5lcqDehZ0lVgIhSi4bFEk94fLAKlF3Q0nzSQQ+ca0lm+O6G9ztKVBeu8PMRQ==",
      "dev": true,
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/-/plugin-bugfix-v8-spread-parameters-in-optional-chaining-7.13.12.tgz",
      "integrity": "sha512-d0u3zWKcoZf379fOeJdr1a5WPDny4aOFZ6hlfKivgK0LY7ZxNfoaHL2fWwdGtHyVvra38FC+HVYkO+byfSA8AQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.12.1",
        "@babel/plugin-proposal-optional-chaining": "^7.13.12"
      },
      "peerDependencies": {
        "@babel/core": "^7.13.0"
      }
    },
    "node_modules/@babel/plugin-proposal-async-generator-functions": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.14.2.tgz",
      "integrity": "sha512-b1AM4F6fwck4N8ItZ/AtC4FP/cqZqmKRQ4FaTDutwSYyjuhtvsGEMLK4N/ztV/ImP40BjIDyMgBQAeAMsQYVFQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-remap-async-to-generator": "^7.13.0",
        "@babel/plugin-syntax-async-generators": "^7.8.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-class-properties": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.13.0.tgz",
      "integrity": "sha512-KnTDjFNC1g+45ka0myZNvSBFLhNCLN+GeGYLDEA8Oq7MZ6yMgfLoIRh86GRT0FjtJhZw8JyUskP9uvj5pHM9Zg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.13.0",
        "@babel/helper-plugin-utils": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-class-static-block": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-static-block/-/plugin-proposal-class-static-block-7.14.3.tgz",
      "integrity": "sha512-HEjzp5q+lWSjAgJtSluFDrGGosmwTgKwCXdDQZvhKsRlwv3YdkUEqxNrrjesJd+B9E9zvr1PVPVBvhYZ9msjvQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.14.3",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-class-static-block": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.12.0"
      }
    },
    "node_modules/@babel/plugin-proposal-dynamic-import": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.14.2.tgz",
      "integrity": "sha512-oxVQZIWFh91vuNEMKltqNsKLFWkOIyJc95k2Gv9lWVyDfPUQGSSlbDEgWuJUU1afGE9WwlzpucMZ3yDRHIItkA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-dynamic-import": "^7.8.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-export-namespace-from": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-namespace-from/-/plugin-proposal-export-namespace-from-7.14.2.tgz",
      "integrity": "sha512-sRxW3z3Zp3pFfLAgVEvzTFutTXax837oOatUIvSG9o5gRj9mKwm3br1Se5f4QalTQs9x4AzlA/HrCWbQIHASUQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-json-strings": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.14.2.tgz",
      "integrity": "sha512-w2DtsfXBBJddJacXMBhElGEYqCZQqN99Se1qeYn8DVLB33owlrlLftIbMzn5nz1OITfDVknXF433tBrLEAOEjA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-json-strings": "^7.8.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-logical-assignment-operators": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-logical-assignment-operators/-/plugin-proposal-logical-assignment-operators-7.14.2.tgz",
      "integrity": "sha512-1JAZtUrqYyGsS7IDmFeaem+/LJqujfLZ2weLR9ugB0ufUPjzf8cguyVT1g5im7f7RXxuLq1xUxEzvm68uYRtGg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-nullish-coalescing-operator": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.14.2.tgz",
      "integrity": "sha512-ebR0zU9OvI2N4qiAC38KIAK75KItpIPTpAtd2r4OZmMFeKbKJpUFLYP2EuDut82+BmYi8sz42B+TfTptJ9iG5Q==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-numeric-separator": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.14.2.tgz",
      "integrity": "sha512-DcTQY9syxu9BpU3Uo94fjCB3LN9/hgPS8oUL7KrSW3bA2ePrKZZPJcc5y0hoJAM9dft3pGfErtEUvxXQcfLxUg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-object-rest-spread": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.14.2.tgz",
      "integrity": "sha512-hBIQFxwZi8GIp934+nj5uV31mqclC1aYDhctDu5khTi9PCCUOczyy0b34W0oE9U/eJXiqQaKyVsmjeagOaSlbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.14.0",
        "@babel/helper-compilation-targets": "^7.13.16",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-transform-parameters": "^7.14.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-optional-catch-binding": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.14.2.tgz",
      "integrity": "sha512-XtkJsmJtBaUbOxZsNk0Fvrv8eiqgneug0A6aqLFZ4TSkar2L5dSXWcnUKHgmjJt49pyB/6ZHvkr3dPgl9MOWRQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-optional-chaining": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.14.2.tgz",
      "integrity": "sha512-qQByMRPwMZJainfig10BoaDldx/+VDtNcrA7qdNaEOAj6VXud+gfrkA8j4CRAU5HjnWREXqIpSpH30qZX1xivA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.12.1",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-private-methods": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-methods/-/plugin-proposal-private-methods-7.13.0.tgz",
      "integrity": "sha512-MXyyKQd9inhx1kDYPkFRVOBXQ20ES8Pto3T7UZ92xj2mY0EVD8oAVzeyYuVfy/mxAdTSIayOvg+aVzcHV2bn6Q==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.13.0",
        "@babel/helper-plugin-utils": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-private-property-in-object": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-property-in-object/-/plugin-proposal-private-property-in-object-7.14.0.tgz",
      "integrity": "sha512-59ANdmEwwRUkLjB7CRtwJxxwtjESw+X2IePItA+RGQh+oy5RmpCh/EvVVvh5XQc3yxsm5gtv0+i9oBZhaDNVTg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.12.13",
        "@babel/helper-create-class-features-plugin": "^7.14.0",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-private-property-in-object": "^7.14.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-unicode-property-regex": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.12.13.tgz",
      "integrity": "sha512-XyJmZidNfofEkqFV5VC/bLabGmO5QzenPO/YOfGuEbgU+2sSwMmio3YLb4WtBgcmmdwZHyVyv8on77IUjQ5Gvg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-async-generators": {
      "version": "7.8.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
      "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-class-properties": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
      "integrity": "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-class-static-block": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-static-block/-/plugin-syntax-class-static-block-7.12.13.tgz",
      "integrity": "sha512-ZmKQ0ZXR0nYpHZIIuj9zE7oIqCx2hw9TKi+lIo73NNrMPAZGHfS92/VRV0ZmPj6H2ffBgyFHXvJ5NYsNeEaP2A==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-dynamic-import": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
      "integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-export-namespace-from": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
      "integrity": "sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-json-strings": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
      "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-logical-assignment-operators": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
      "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-nullish-coalescing-operator": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
      "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-numeric-separator": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
      "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-object-rest-spread": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
      "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "node_modules/@babel/plugin-syntax-optional-catch-binding": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
      "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-optional-chaining": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
      "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-private-property-in-object": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-private-property-in-object/-/plugin-syntax-private-property-in-object-7.14.0.tgz",
      "integrity": "sha512-bda3xF8wGl5/5btF794utNOL0Jw+9jE5C1sLZcoK7c4uonE/y3iQiyG+KbkF3WBV/paX58VCpjhxLPkdj5Fe4w==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-top-level-await": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.12.13.tgz",
      "integrity": "sha512-A81F9pDwyS7yM//KwbCSDqy3Uj4NMIurtplxphWxoYtNPov7cJsDkAFNNyVlIZ3jwGycVsurZ+LtOA8gZ376iQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-typescript": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.12.13.tgz",
      "integrity": "sha512-cHP3u1JiUiG2LFDKbXnwVad81GvfyIOmCD6HIEId6ojrY0Drfy2q1jw7BwN7dE84+kTnBjLkXoL3IEy/3JPu2w==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-arrow-functions": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.13.0.tgz",
      "integrity": "sha512-96lgJagobeVmazXFaDrbmCLQxBysKu7U6Do3mLsx27gf5Dk85ezysrs2BZUpXD703U/Su1xTBDxxar2oa4jAGg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-async-to-generator": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.13.0.tgz",
      "integrity": "sha512-3j6E004Dx0K3eGmhxVJxwwI89CTJrce7lg3UrtFuDAVQ/2+SJ/h/aSFOeE6/n0WB1GsOffsJp6MnPQNQ8nmwhg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-imports": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-remap-async-to-generator": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-block-scoped-functions": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.12.13.tgz",
      "integrity": "sha512-zNyFqbc3kI/fVpqwfqkg6RvBgFpC4J18aKKMmv7KdQ/1GgREapSJAykLMVNwfRGO3BtHj3YQZl8kxCXPcVMVeg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-block-scoping": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.14.2.tgz",
      "integrity": "sha512-neZZcP19NugZZqNwMTH+KoBjx5WyvESPSIOQb4JHpfd+zPfqcH65RMu5xJju5+6q/Y2VzYrleQTr+b6METyyxg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-classes": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.14.2.tgz",
      "integrity": "sha512-7oafAVcucHquA/VZCsXv/gmuiHeYd64UJyyTYU+MPfNu0KeNlxw06IeENBO8bJjXVbolu+j1MM5aKQtH1OMCNg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.12.13",
        "@babel/helper-function-name": "^7.14.2",
        "@babel/helper-optimise-call-expression": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-replace-supers": "^7.13.12",
        "@babel/helper-split-export-declaration": "^7.12.13",
        "globals": "^11.1.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-computed-properties": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.13.0.tgz",
      "integrity": "sha512-RRqTYTeZkZAz8WbieLTvKUEUxZlUTdmL5KGMyZj7FnMfLNKV4+r5549aORG/mgojRmFlQMJDUupwAMiF2Q7OUg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-destructuring": {
      "version": "7.13.17",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.13.17.tgz",
      "integrity": "sha512-UAUqiLv+uRLO+xuBKKMEpC+t7YRNVRqBsWWq1yKXbBZBje/t3IXCiSinZhjn/DC3qzBfICeYd2EFGEbHsh5RLA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-dotall-regex": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.12.13.tgz",
      "integrity": "sha512-foDrozE65ZFdUC2OfgeOCrEPTxdB3yjqxpXh8CH+ipd9CHd4s/iq81kcUpyH8ACGNEPdFqbtzfgzbT/ZGlbDeQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-duplicate-keys": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.12.13.tgz",
      "integrity": "sha512-NfADJiiHdhLBW3pulJlJI2NB0t4cci4WTZ8FtdIuNc2+8pslXdPtRRAEWqUY+m9kNOk2eRYbTAOipAxlrOcwwQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-exponentiation-operator": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.12.13.tgz",
      "integrity": "sha512-fbUelkM1apvqez/yYx1/oICVnGo2KM5s63mhGylrmXUxK/IAXSIf87QIxVfZldWf4QsOafY6vV3bX8aMHSvNrA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-builder-binary-assignment-operator-visitor": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-for-of": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.13.0.tgz",
      "integrity": "sha512-IHKT00mwUVYE0zzbkDgNRP6SRzvfGCYsOxIRz8KsiaaHCcT9BWIkO+H9QRJseHBLOGBZkHUdHiqj6r0POsdytg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-function-name": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.12.13.tgz",
      "integrity": "sha512-6K7gZycG0cmIwwF7uMK/ZqeCikCGVBdyP2J5SKNCXO5EOHcqi+z7Jwf8AmyDNcBgxET8DrEtCt/mPKPyAzXyqQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-function-name": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-literals": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.12.13.tgz",
      "integrity": "sha512-FW+WPjSR7hiUxMcKqyNjP05tQ2kmBCdpEpZHY1ARm96tGQCCBvXKnpjILtDplUnJ/eHZ0lALLM+d2lMFSpYJrQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-member-expression-literals": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.12.13.tgz",
      "integrity": "sha512-kxLkOsg8yir4YeEPHLuO2tXP9R/gTjpuTOjshqSpELUN3ZAg2jfDnKUvzzJxObun38sw3wm4Uu69sX/zA7iRvg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-amd": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.14.2.tgz",
      "integrity": "sha512-hPC6XBswt8P3G2D1tSV2HzdKvkqOpmbyoy+g73JG0qlF/qx2y3KaMmXb1fLrpmWGLZYA0ojCvaHdzFWjlmV+Pw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-transforms": "^7.14.2",
        "@babel/helper-plugin-utils": "^7.13.0",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-commonjs": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.14.0.tgz",
      "integrity": "sha512-EX4QePlsTaRZQmw9BsoPeyh5OCtRGIhwfLquhxGp5e32w+dyL8htOcDwamlitmNFK6xBZYlygjdye9dbd9rUlQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-transforms": "^7.14.0",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-simple-access": "^7.13.12",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-systemjs": {
      "version": "7.13.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.13.8.tgz",
      "integrity": "sha512-hwqctPYjhM6cWvVIlOIe27jCIBgHCsdH2xCJVAYQm7V5yTMoilbVMi9f6wKg0rpQAOn6ZG4AOyvCqFF/hUh6+A==",
      "dev": true,
      "dependencies": {
        "@babel/helper-hoist-variables": "^7.13.0",
        "@babel/helper-module-transforms": "^7.13.0",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-validator-identifier": "^7.12.11",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-umd": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.14.0.tgz",
      "integrity": "sha512-nPZdnWtXXeY7I87UZr9VlsWme3Y0cfFFE41Wbxz4bbaexAjNMInXPFUpRRUJ8NoMm0Cw+zxbqjdPmLhcjfazMw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-transforms": "^7.14.0",
        "@babel/helper-plugin-utils": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-named-capturing-groups-regex": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.12.13.tgz",
      "integrity": "sha512-Xsm8P2hr5hAxyYblrfACXpQKdQbx4m2df9/ZZSQ8MAhsadw06+jW7s9zsSw6he+mJZXRlVMyEnVktJo4zjk1WA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-new-target": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.12.13.tgz",
      "integrity": "sha512-/KY2hbLxrG5GTQ9zzZSc3xWiOy379pIETEhbtzwZcw9rvuaVV4Fqy7BYGYOWZnaoXIQYbbJ0ziXLa/sKcGCYEQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-object-super": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.12.13.tgz",
      "integrity": "sha512-JzYIcj3XtYspZDV8j9ulnoMPZZnF/Cj0LUxPOjR89BdBVx+zYJI9MdMIlUZjbXDX+6YVeS6I3e8op+qQ3BYBoQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13",
        "@babel/helper-replace-supers": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-parameters": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.14.2.tgz",
      "integrity": "sha512-NxoVmA3APNCC1JdMXkdYXuQS+EMdqy0vIwyDHeKHiJKRxmp1qGSdb0JLEIoPRhkx6H/8Qi3RJ3uqOCYw8giy9A==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-property-literals": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.12.13.tgz",
      "integrity": "sha512-nqVigwVan+lR+g8Fj8Exl0UQX2kymtjcWfMOYM1vTYEKujeyv2SkMgazf2qNcK7l4SDiKyTA/nHCPqL4e2zo1A==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-regenerator": {
      "version": "7.13.15",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.13.15.tgz",
      "integrity": "sha512-Bk9cOLSz8DiurcMETZ8E2YtIVJbFCPGW28DJWUakmyVWtQSm6Wsf0p4B4BfEr/eL2Nkhe/CICiUiMOCi1TPhuQ==",
      "dev": true,
      "dependencies": {
        "regenerator-transform": "^0.14.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-reserved-words": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.12.13.tgz",
      "integrity": "sha512-xhUPzDXxZN1QfiOy/I5tyye+TRz6lA7z6xaT4CLOjPRMVg1ldRf0LHw0TDBpYL4vG78556WuHdyO9oi5UmzZBg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-shorthand-properties": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.12.13.tgz",
      "integrity": "sha512-xpL49pqPnLtf0tVluuqvzWIgLEhuPpZzvs2yabUHSKRNlN7ScYU7aMlmavOeyXJZKgZKQRBlh8rHbKiJDraTSw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-spread": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.13.0.tgz",
      "integrity": "sha512-V6vkiXijjzYeFmQTr3dBxPtZYLPcUfY34DebOU27jIl2M/Y8Egm52Hw82CSjjPqd54GTlJs5x+CR7HeNr24ckg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.12.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-sticky-regex": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.12.13.tgz",
      "integrity": "sha512-Jc3JSaaWT8+fr7GRvQP02fKDsYk4K/lYwWq38r/UGfaxo89ajud321NH28KRQ7xy1Ybc0VUE5Pz8psjNNDUglg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-template-literals": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.13.0.tgz",
      "integrity": "sha512-d67umW6nlfmr1iehCcBv69eSUSySk1EsIS8aTDX4Xo9qajAh6mYtcl4kJrBkGXuxZPEgVr7RVfAvNW6YQkd4Mw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-typeof-symbol": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.12.13.tgz",
      "integrity": "sha512-eKv/LmUJpMnu4npgfvs3LiHhJua5fo/CysENxa45YCQXZwKnGCQKAg87bvoqSW1fFT+HA32l03Qxsm8ouTY3ZQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-typescript": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typescript/-/plugin-transform-typescript-7.14.3.tgz",
      "integrity": "sha512-G5Bb5pY6tJRTC4ag1visSgiDoGgJ1u1fMUgmc2ijLkcIdzP83Q1qyZX4ggFQ/SkR+PNOatkaYC+nKcTlpsX4ag==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.14.3",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-typescript": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-escapes": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.12.13.tgz",
      "integrity": "sha512-0bHEkdwJ/sN/ikBHfSmOXPypN/beiGqjo+o4/5K+vxEFNPRPdImhviPakMKG4x96l85emoa0Z6cDflsdBusZbw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-regex": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.12.13.tgz",
      "integrity": "sha512-mDRzSNY7/zopwisPZ5kM9XKCfhchqIYwAKRERtEnhYscZB79VRekuRSoYbN0+KVe3y8+q1h6A4svXtP7N+UoCA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/polyfill": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/polyfill/-/polyfill-7.12.1.tgz",
      "integrity": "sha512-X0pi0V6gxLi6lFZpGmeNa4zxtwEmCs42isWLNjZZDE0Y8yVfgu0T2OAHlzBbdYlqbW/YXVvoBHpATEM+goCj8g==",
      "dev": true,
      "dependencies": {
        "core-js": "^2.6.5",
        "regenerator-runtime": "^0.13.4"
      }
    },
    "node_modules/@babel/preset-env": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.14.2.tgz",
      "integrity": "sha512-7dD7lVT8GMrE73v4lvDEb85cgcQhdES91BSD7jS/xjC6QY8PnRhux35ac+GCpbiRhp8crexBvZZqnaL6VrY8TQ==",
      "dev": true,
      "dependencies": {
        "@babel/compat-data": "^7.14.0",
        "@babel/helper-compilation-targets": "^7.13.16",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-validator-option": "^7.12.17",
        "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": "^7.13.12",
        "@babel/plugin-proposal-async-generator-functions": "^7.14.2",
        "@babel/plugin-proposal-class-properties": "^7.13.0",
        "@babel/plugin-proposal-class-static-block": "^7.13.11",
        "@babel/plugin-proposal-dynamic-import": "^7.14.2",
        "@babel/plugin-proposal-export-namespace-from": "^7.14.2",
        "@babel/plugin-proposal-json-strings": "^7.14.2",
        "@babel/plugin-proposal-logical-assignment-operators": "^7.14.2",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.14.2",
        "@babel/plugin-proposal-numeric-separator": "^7.14.2",
        "@babel/plugin-proposal-object-rest-spread": "^7.14.2",
        "@babel/plugin-proposal-optional-catch-binding": "^7.14.2",
        "@babel/plugin-proposal-optional-chaining": "^7.14.2",
        "@babel/plugin-proposal-private-methods": "^7.13.0",
        "@babel/plugin-proposal-private-property-in-object": "^7.14.0",
        "@babel/plugin-proposal-unicode-property-regex": "^7.12.13",
        "@babel/plugin-syntax-async-generators": "^7.8.4",
        "@babel/plugin-syntax-class-properties": "^7.12.13",
        "@babel/plugin-syntax-class-static-block": "^7.12.13",
        "@babel/plugin-syntax-dynamic-import": "^7.8.3",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3",
        "@babel/plugin-syntax-json-strings": "^7.8.3",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3",
        "@babel/plugin-syntax-private-property-in-object": "^7.14.0",
        "@babel/plugin-syntax-top-level-await": "^7.12.13",
        "@babel/plugin-transform-arrow-functions": "^7.13.0",
        "@babel/plugin-transform-async-to-generator": "^7.13.0",
        "@babel/plugin-transform-block-scoped-functions": "^7.12.13",
        "@babel/plugin-transform-block-scoping": "^7.14.2",
        "@babel/plugin-transform-classes": "^7.14.2",
        "@babel/plugin-transform-computed-properties": "^7.13.0",
        "@babel/plugin-transform-destructuring": "^7.13.17",
        "@babel/plugin-transform-dotall-regex": "^7.12.13",
        "@babel/plugin-transform-duplicate-keys": "^7.12.13",
        "@babel/plugin-transform-exponentiation-operator": "^7.12.13",
        "@babel/plugin-transform-for-of": "^7.13.0",
        "@babel/plugin-transform-function-name": "^7.12.13",
        "@babel/plugin-transform-literals": "^7.12.13",
        "@babel/plugin-transform-member-expression-literals": "^7.12.13",
        "@babel/plugin-transform-modules-amd": "^7.14.2",
        "@babel/plugin-transform-modules-commonjs": "^7.14.0",
        "@babel/plugin-transform-modules-systemjs": "^7.13.8",
        "@babel/plugin-transform-modules-umd": "^7.14.0",
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.12.13",
        "@babel/plugin-transform-new-target": "^7.12.13",
        "@babel/plugin-transform-object-super": "^7.12.13",
        "@babel/plugin-transform-parameters": "^7.14.2",
        "@babel/plugin-transform-property-literals": "^7.12.13",
        "@babel/plugin-transform-regenerator": "^7.13.15",
        "@babel/plugin-transform-reserved-words": "^7.12.13",
        "@babel/plugin-transform-shorthand-properties": "^7.12.13",
        "@babel/plugin-transform-spread": "^7.13.0",
        "@babel/plugin-transform-sticky-regex": "^7.12.13",
        "@babel/plugin-transform-template-literals": "^7.13.0",
        "@babel/plugin-transform-typeof-symbol": "^7.12.13",
        "@babel/plugin-transform-unicode-escapes": "^7.12.13",
        "@babel/plugin-transform-unicode-regex": "^7.12.13",
        "@babel/preset-modules": "^0.1.4",
        "@babel/types": "^7.14.2",
        "babel-plugin-polyfill-corejs2": "^0.2.0",
        "babel-plugin-polyfill-corejs3": "^0.2.0",
        "babel-plugin-polyfill-regenerator": "^0.2.0",
        "core-js-compat": "^3.9.0",
        "semver": "^6.3.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/preset-modules": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.4.tgz",
      "integrity": "sha512-J36NhwnfdzpmH41M1DrnkkgAqhZaqr/NBdPfQ677mLzlaXo+oDiv1deyCDtgAhz8p328otdob0Du7+xgHGZbKg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-proposal-unicode-property-regex": "^7.4.4",
        "@babel/plugin-transform-dotall-regex": "^7.4.4",
        "@babel/types": "^7.4.4",
        "esutils": "^2.0.2"
      }
    },
    "node_modules/@babel/preset-typescript": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/preset-typescript/-/preset-typescript-7.13.0.tgz",
      "integrity": "sha512-LXJwxrHy0N3f6gIJlYbLta1D9BDtHpQeqwzM0LIfjDlr6UE/D5Mc7W4iDiQzaE+ks0sTjT26ArcHWnJVt0QiHw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-validator-option": "^7.12.17",
        "@babel/plugin-transform-typescript": "^7.13.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/register": {
      "version": "7.13.16",
      "resolved": "https://registry.npmjs.org/@babel/register/-/register-7.13.16.tgz",
      "integrity": "sha512-dh2t11ysujTwByQjXNgJ48QZ2zcXKQVdV8s0TbeMI0flmtGWCdTwK9tJiACHXPLmncm5+ktNn/diojA45JE4jg==",
      "dev": true,
      "dependencies": {
        "clone-deep": "^4.0.1",
        "find-cache-dir": "^2.0.0",
        "make-dir": "^2.1.0",
        "pirates": "^4.0.0",
        "source-map-support": "^0.5.16"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/register/node_modules/make-dir": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
      "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
      "dev": true,
      "dependencies": {
        "pify": "^4.0.1",
        "semver": "^5.6.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@babel/register/node_modules/pify": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
      "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@babel/register/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.14.0.tgz",
      "integrity": "sha512-JELkvo/DlpNdJ7dlyw/eY7E0suy5i5GQH+Vlxaq1nsNJ+H7f4Vtv3jMeCEgRhZZQFXTjldYfQgv2qmM6M1v5wA==",
      "dev": true,
      "dependencies": {
        "regenerator-runtime": "^0.13.4"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.12.13.tgz",
      "integrity": "sha512-/7xxiGA57xMo/P2GVvdEumr8ONhFOhfgq2ihK3h1e6THqzTAkHbkXgB0xI9yeTfIUoH3+oAeHhqm/I43OTbbjA==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.12.13",
        "@babel/parser": "^7.12.13",
        "@babel/types": "^7.12.13"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.14.2.tgz",
      "integrity": "sha512-TsdRgvBFHMyHOOzcP9S6QU0QQtjxlRpEYOy3mcCO5RgmC305ki42aSAmfZEMSSYBla2oZ9BMqYlncBaKmD/7iA==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.12.13",
        "@babel/generator": "^7.14.2",
        "@babel/helper-function-name": "^7.14.2",
        "@babel/helper-split-export-declaration": "^7.12.13",
        "@babel/parser": "^7.14.2",
        "@babel/types": "^7.14.2",
        "debug": "^4.1.0",
        "globals": "^11.1.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.14.2.tgz",
      "integrity": "sha512-SdjAG/3DikRHpUOjxZgnkbR11xUlyDMUFJdvnIgZEE16mqmY0BINMmc4//JMJglEmn6i7sq6p+mGrFWyZ98EEw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.14.0",
        "to-fast-properties": "^2.0.0"
      }
    },
    "node_modules/@discoveryjs/json-ext": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/@discoveryjs/json-ext/-/json-ext-0.5.3.tgz",
      "integrity": "sha512-Fxt+AfXgjMoin2maPIYzFZnQjAXjAL0PHscM5pRTtatFqB+vZxAM9tLp2Optnuw3QOQC40jTNeGYFOMvyf7v9g==",
      "dev": true,
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-0.4.1.tgz",
      "integrity": "sha512-5v7TDE9plVhvxQeWLXDTvFvJBdH6pEsdnl2g/dAptmuFEPedQ4Erq5rsDsX+mvAM610IhNaO2W5V1dOOnDKxkQ==",
      "dev": true,
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.1.1",
        "espree": "^7.3.0",
        "globals": "^12.1.0",
        "ignore": "^4.0.6",
        "import-fresh": "^3.2.1",
        "js-yaml": "^3.13.1",
        "minimatch": "^3.0.4",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/globals": {
      "version": "12.4.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-12.4.0.tgz",
      "integrity": "sha512-BWICuzzDvDoH54NHKCseDanAhE3CeDorgDL5MT6LMXXj2WCnd9UC2szdk4AWLfjdgNBCXLUanXYcpBBKOSWGwg==",
      "dev": true,
      "dependencies": {
        "type-fest": "^0.8.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
      "integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
      "dev": true,
      "dependencies": {
        "camelcase": "^5.3.1",
        "find-up": "^4.1.0",
        "get-package-type": "^0.1.0",
        "js-yaml": "^3.13.1",
        "resolve-from": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dev": true,
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dev": true,
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dev": true,
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/resolve-from": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
      "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/schema": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
      "integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@mdn/browser-compat-data": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/@mdn/browser-compat-data/-/browser-compat-data-3.3.3.tgz",
      "integrity": "sha512-ikDzSgs2SbBtKVXCNfU6GzVACpUuojZS8Vu/VhM1EwtWvtfGJsrRETLbV231ODMvWtfKJThzrsk2Hp88fv9+gA==",
      "dev": true
    },
    "node_modules/@nicolo-ribaudo/chokidar-2": {
      "version": "2.1.8-no-fsevents",
      "resolved": "https://registry.npmjs.org/@nicolo-ribaudo/chokidar-2/-/chokidar-2-2.1.8-no-fsevents.tgz",
      "integrity": "sha512-+nb9vWloHNNMFHjGofEam3wopE3m1yuambrrd/fnPc+lFOMB9ROTqQlche9ByFWNkdNqfSgR/kkQtQ8DzEWt2w==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "anymatch": "^2.0.0",
        "async-each": "^1.0.1",
        "braces": "^2.3.2",
        "glob-parent": "^3.1.0",
        "inherits": "^2.0.3",
        "is-binary-path": "^1.0.0",
        "is-glob": "^4.0.0",
        "normalize-path": "^3.0.0",
        "path-is-absolute": "^1.0.0",
        "readdirp": "^2.2.1",
        "upath": "^1.1.1"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.4.tgz",
      "integrity": "sha512-33g3pMJk3bg5nXbL/+CY6I2eJDzZAni49PfJnL5fghPTggPvBd/pFNSgJsdAgWptuFu7qq/ERvOYFlhvsLTCKA==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "2.0.4",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.4.tgz",
      "integrity": "sha512-IYlHJA0clt2+Vg7bccq+TzRdJvv19c2INqBSsoOLp1je7xjtr7J26+WXR72MCdvU9q1qTzIWDfhMf+DRvQJK4Q==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.6.tgz",
      "integrity": "sha512-8Broas6vTtW4GIXTAHDoE32hnN2M5ykgCpWGbuXHQ15vEMqr23pB76e/GZcYsZCHALv50ktd24qhEyKr6wBtow==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.4",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@sindresorhus/is": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.7.0.tgz",
      "integrity": "sha512-ONhaKPIufzzrlNbqtWFFd+jlnemX6lJAgq9ZeiZtS7I1PIf/la7CW4m83rTXRnVnsMbW2k56pGYu7AUFJD9Pow==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@types/chrome": {
      "version": "0.0.141",
      "resolved": "https://registry.npmjs.org/@types/chrome/-/chrome-0.0.141.tgz",
      "integrity": "sha512-0bYsCxGKo9xdrNHiqWRjPVygDRfKA2EczhXJmKjkfBF+KQc0BFKejtdFV28ygcVH3RTjGZ+ccoJ3bb8wKFacbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/filesystem": "*",
        "@types/har-format": "*"
      }
    },
    "node_modules/@types/decompress": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/@types/decompress/-/decompress-4.2.3.tgz",
      "integrity": "sha512-W24e3Ycz1UZPgr1ZEDHlK4XnvOr+CpJH3qNsFeqXwwlW/9END9gxn3oJSsp7gYdiQxrXUHwUUd3xuzVz37MrZQ==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/download": {
      "version": "6.2.4",
      "resolved": "https://registry.npmjs.org/@types/download/-/download-6.2.4.tgz",
      "integrity": "sha512-Lo5dy3ai6LNnbL663sgdzqL1eib11u1yKH6w3v3IXEOO4kRfQpMn1qWUTaumcHLACjFp1RcBx9tUXEvJoR3vcA==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "@types/decompress": "*",
        "@types/got": "^8",
        "@types/node": "*"
      }
    },
    "node_modules/@types/eslint": {
      "version": "7.2.6",
      "resolved": "https://registry.npmjs.org/@types/eslint/-/eslint-7.2.6.tgz",
      "integrity": "sha512-I+1sYH+NPQ3/tVqCeUSBwTE/0heyvtXqpIopUUArlBm0Kpocb8FbMa3AZ/ASKIFpN3rnEx932TTXDbt9OXsNDw==",
      "dev": true,
      "dependencies": {
        "@types/estree": "*",
        "@types/json-schema": "*"
      }
    },
    "node_modules/@types/eslint-scope": {
      "version": "3.7.0",
      "resolved": "https://registry.npmjs.org/@types/eslint-scope/-/eslint-scope-3.7.0.tgz",
      "integrity": "sha512-O/ql2+rrCUe2W2rs7wMR+GqPRcgB6UiqN5RhrR5xruFlY7l9YLMn0ZkDzjoHLeiFkR8MCQZVudUuuvQ2BLC9Qw==",
      "dev": true,
      "dependencies": {
        "@types/eslint": "*",
        "@types/estree": "*"
      }
    },
    "node_modules/@types/estree": {
      "version": "0.0.47",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-0.0.47.tgz",
      "integrity": "sha512-c5ciR06jK8u9BstrmJyO97m+klJrrhCf9u3rLu3DEAJBirxRqSCvDQoYKmxuYwQI5SZChAWu+tq9oVlGRuzPAg==",
      "dev": true
    },
    "node_modules/@types/filesystem": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/filesystem/-/filesystem-0.0.29.tgz",
      "integrity": "sha512-85/1KfRedmfPGsbK8YzeaQUyV1FQAvMPMTuWFQ5EkLd2w7szhNO96bk3Rh/SKmOfd9co2rCLf0Voy4o7ECBOvw==",
      "dev": true,
      "dependencies": {
        "@types/filewriter": "*"
      }
    },
    "node_modules/@types/filewriter": {
      "version": "0.0.28",
      "resolved": "https://registry.npmjs.org/@types/filewriter/-/filewriter-0.0.28.tgz",
      "integrity": "sha1-wFTor02d11205jq8dviFFocU1LM=",
      "dev": true
    },
    "node_modules/@types/got": {
      "version": "8.3.5",
      "resolved": "https://registry.npmjs.org/@types/got/-/got-8.3.5.tgz",
      "integrity": "sha512-AaXSrIF99SjjtPVNmCmYb388HML+PKEJb/xmj4SbL2ZO0hHuETZZzyDIKfOqaEoAHZEuX4sC+FRFrHYJoIby6A==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/har-format": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@types/har-format/-/har-format-1.2.5.tgz",
      "integrity": "sha512-IG8AE1m2pWtPqQ7wXhFhy6Q59bwwnLwO36v5Rit2FrbXCIp8Sk8E2PfUCreyrdo17STwFSKDAkitVuVYbpEHvQ==",
      "dev": true
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.6.tgz",
      "integrity": "sha512-3c+yGKvVP5Y9TYBEibGNR+kLtijnj7mYrXRg+WpFb2X9xm04g/DXYkfg4hmzJQosc9snFNUPkbYIhu+KAm6jJw==",
      "dev": true
    },
    "node_modules/@types/node": {
      "version": "14.14.19",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-14.14.19.tgz",
      "integrity": "sha512-4nhBPStMK04rruRVtVc6cDqhu7S9GZai0fpXgPXrFpcPX6Xul8xnrjSdGB4KPBVYG/R5+fXWdCM8qBoiULWGPQ==",
      "dev": true
    },
    "node_modules/@types/yauzl": {
      "version": "2.9.1",
      "resolved": "https://registry.npmjs.org/@types/yauzl/-/yauzl-2.9.1.tgz",
      "integrity": "sha512-A1b8SU4D10uoPjwb0lnHmmu8wZhR9d+9o2PKBQT2jU5YPTKsxac6M2qGAdY7VcL+dHHhARVUDmeg0rOrcd9EjA==",
      "dev": true,
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-4.24.0.tgz",
      "integrity": "sha512-qbCgkPM7DWTsYQGjx9RTuQGswi+bEt0isqDBeo+CKV0953zqI0Tp7CZ7Fi9ipgFA6mcQqF4NOVNwS/f2r6xShw==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/experimental-utils": "4.24.0",
        "@typescript-eslint/scope-manager": "4.24.0",
        "debug": "^4.1.1",
        "functional-red-black-tree": "^1.0.1",
        "lodash": "^4.17.15",
        "regexpp": "^3.0.0",
        "semver": "^7.3.2",
        "tsutils": "^3.17.1"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^4.0.0",
        "eslint": "^5.0.0 || ^6.0.0 || ^7.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/semver": {
      "version": "7.3.4",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.4.tgz",
      "integrity": "sha512-tCfb2WLjqFAtXn4KEdxIhalnRtoKFN7nAwj0B3ZXCbQloV2tq5eDbcTmT68JJD3nRJq24/XgxtQKFIpQdtvmVw==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/experimental-utils": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/experimental-utils/-/experimental-utils-4.24.0.tgz",
      "integrity": "sha512-IwTT2VNDKH1h8RZseMH4CcYBz6lTvRoOLDuuqNZZoThvfHEhOiZPQCow+5El3PtyxJ1iDr6UXZwYtE3yZQjhcw==",
      "dev": true,
      "dependencies": {
        "@types/json-schema": "^7.0.3",
        "@typescript-eslint/scope-manager": "4.24.0",
        "@typescript-eslint/types": "4.24.0",
        "@typescript-eslint/typescript-estree": "4.24.0",
        "eslint-scope": "^5.0.0",
        "eslint-utils": "^2.0.0"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "*"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-4.24.0.tgz",
      "integrity": "sha512-dj1ZIh/4QKeECLb2f/QjRwMmDArcwc2WorWPRlB8UNTZlY1KpTVsbX7e3ZZdphfRw29aTFUSNuGB8w9X5sS97w==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/scope-manager": "4.24.0",
        "@typescript-eslint/types": "4.24.0",
        "@typescript-eslint/typescript-estree": "4.24.0",
        "debug": "^4.1.1"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^5.0.0 || ^6.0.0 || ^7.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-4.24.0.tgz",
      "integrity": "sha512-9+WYJGDnuC9VtYLqBhcSuM7du75fyCS/ypC8c5g7Sdw7pGL4NDTbeH38eJPfzIydCHZDoOgjloxSAA3+4l/zsA==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "4.24.0",
        "@typescript-eslint/visitor-keys": "4.24.0"
      },
      "engines": {
        "node": "^8.10.0 || ^10.13.0 || >=11.10.1"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-4.24.0.tgz",
      "integrity": "sha512-tkZUBgDQKdvfs8L47LaqxojKDE+mIUmOzdz7r+u+U54l3GDkTpEbQ1Jp3cNqqAU9vMUCBA1fitsIhm7yN0vx9Q==",
      "dev": true,
      "engines": {
        "node": "^8.10.0 || ^10.13.0 || >=11.10.1"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-4.24.0.tgz",
      "integrity": "sha512-kBDitL/by/HK7g8CYLT7aKpAwlR8doshfWz8d71j97n5kUa5caHWvY0RvEUEanL/EqBJoANev8Xc/mQ6LLwXGA==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "4.24.0",
        "@typescript-eslint/visitor-keys": "4.24.0",
        "debug": "^4.1.1",
        "globby": "^11.0.1",
        "is-glob": "^4.0.1",
        "semver": "^7.3.2",
        "tsutils": "^3.17.1"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.3.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
      "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-4.24.0.tgz",
      "integrity": "sha512-4ox1sjmGHIxjEDBnMCtWFFhErXtKA1Ec0sBpuz0fqf3P+g3JFGyTxxbF06byw0FRsPnnbq44cKivH7Ks1/0s6g==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "4.24.0",
        "eslint-visitor-keys": "^2.0.0"
      },
      "engines": {
        "node": "^8.10.0 || ^10.13.0 || >=11.10.1"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@ungap/promise-all-settled": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@ungap/promise-all-settled/-/promise-all-settled-1.1.2.tgz",
      "integrity": "sha512-sL/cEvJWAnClXw0wHk85/2L0G6Sj8UB0Ctc1TEMbKSsmpRosqhwj9gWgFRZSrBr2f9tiXISwNhCPmlfqUqyb9Q==",
      "dev": true
    },
    "node_modules/@webassemblyjs/ast": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.11.0.tgz",
      "integrity": "sha512-kX2W49LWsbthrmIRMbQZuQDhGtjyqXfEmmHyEi4XWnSZtPmxY0+3anPIzsnRb45VH/J55zlOfWvZuY47aJZTJg==",
      "dev": true,
      "dependencies": {
        "@webassemblyjs/helper-numbers": "1.11.0",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.0"
      }
    },
    "node_modules/@webassemblyjs/floating-point-hex-parser": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.11.0.tgz",
      "integrity": "sha512-Q/aVYs/VnPDVYvsCBL/gSgwmfjeCb4LW8+TMrO3cSzJImgv8lxxEPM2JA5jMrivE7LSz3V+PFqtMbls3m1exDA==",
      "dev": true
    },
    "node_modules/@webassemblyjs/helper-api-error": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.11.0.tgz",
      "integrity": "sha512-baT/va95eXiXb2QflSx95QGT5ClzWpGaa8L7JnJbgzoYeaA27FCvuBXU758l+KXWRndEmUXjP0Q5fibhavIn8w==",
      "dev": true
    },
    "node_modules/@webassemblyjs/helper-buffer": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.11.0.tgz",
      "integrity": "sha512-u9HPBEl4DS+vA8qLQdEQ6N/eJQ7gT7aNvMIo8AAWvAl/xMrcOSiI2M0MAnMCy3jIFke7bEee/JwdX1nUpCtdyA==",
      "dev": true
    },
    "node_modules/@webassemblyjs/helper-numbers": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-numbers/-/helper-numbers-1.11.0.tgz",
      "integrity": "sha512-DhRQKelIj01s5IgdsOJMKLppI+4zpmcMQ3XboFPLwCpSNH6Hqo1ritgHgD0nqHeSYqofA6aBN/NmXuGjM1jEfQ==",
      "dev": true,
      "dependencies": {
        "@webassemblyjs/floating-point-hex-parser": "1.11.0",
        "@webassemblyjs/helper-api-error": "1.11.0",
        "@xtuc/long": "4.2.2"
      }
    },
    "node_modules/@webassemblyjs/helper-wasm-bytecode": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.11.0.tgz",
      "integrity": "sha512-MbmhvxXExm542tWREgSFnOVo07fDpsBJg3sIl6fSp9xuu75eGz5lz31q7wTLffwL3Za7XNRCMZy210+tnsUSEA==",
      "dev": true
    },
    "node_modules/@webassemblyjs/helper-wasm-section": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.11.0.tgz",
      "integrity": "sha512-3Eb88hcbfY/FCukrg6i3EH8H2UsD7x8Vy47iVJrP967A9JGqgBVL9aH71SETPx1JrGsOUVLo0c7vMCN22ytJew==",
      "dev": true,
      "dependencies": {
        "@webassemblyjs/ast": "1.11.0",
        "@webassemblyjs/helper-buffer": "1.11.0",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.0",
        "@webassemblyjs/wasm-gen": "1.11.0"
      }
    },
    "node_modules/@webassemblyjs/ieee754": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.11.0.tgz",
      "integrity": "sha512-KXzOqpcYQwAfeQ6WbF6HXo+0udBNmw0iXDmEK5sFlmQdmND+tr773Ti8/5T/M6Tl/413ArSJErATd8In3B+WBA==",
      "dev": true,
      "dependencies": {
        "@xtuc/ieee754": "^1.2.0"
      }
    },
    "node_modules/@webassemblyjs/leb128": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.11.0.tgz",
      "integrity": "sha512-aqbsHa1mSQAbeeNcl38un6qVY++hh8OpCOzxhixSYgbRfNWcxJNJQwe2rezK9XEcssJbbWIkblaJRwGMS9zp+g==",
      "dev": true,
      "dependencies": {
        "@xtuc/long": "4.2.2"
      }
    },
    "node_modules/@webassemblyjs/utf8": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.11.0.tgz",
      "integrity": "sha512-A/lclGxH6SpSLSyFowMzO/+aDEPU4hvEiooCMXQPcQFPPJaYcPQNKGOCLUySJsYJ4trbpr+Fs08n4jelkVTGVw==",
      "dev": true
    },
    "node_modules/@webassemblyjs/wasm-edit": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.11.0.tgz",
      "integrity": "sha512-JHQ0damXy0G6J9ucyKVXO2j08JVJ2ntkdJlq1UTiUrIgfGMmA7Ik5VdC/L8hBK46kVJgujkBIoMtT8yVr+yVOQ==",
      "dev": true,
      "dependencies": {
        "@webassemblyjs/ast": "1.11.0",
        "@webassemblyjs/helper-buffer": "1.11.0",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.0",
        "@webassemblyjs/helper-wasm-section": "1.11.0",
        "@webassemblyjs/wasm-gen": "1.11.0",
        "@webassemblyjs/wasm-opt": "1.11.0",
        "@webassemblyjs/wasm-parser": "1.11.0",
        "@webassemblyjs/wast-printer": "1.11.0"
      }
    },
    "node_modules/@webassemblyjs/wasm-gen": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.11.0.tgz",
      "integrity": "sha512-BEUv1aj0WptCZ9kIS30th5ILASUnAPEvE3tVMTrItnZRT9tXCLW2LEXT8ezLw59rqPP9klh9LPmpU+WmRQmCPQ==",
      "dev": true,
      "dependencies": {
        "@webassemblyjs/ast": "1.11.0",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.0",
        "@webassemblyjs/ieee754": "1.11.0",
        "@webassemblyjs/leb128": "1.11.0",
        "@webassemblyjs/utf8": "1.11.0"
      }
    },
    "node_modules/@webassemblyjs/wasm-opt": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.11.0.tgz",
      "integrity": "sha512-tHUSP5F4ywyh3hZ0+fDQuWxKx3mJiPeFufg+9gwTpYp324mPCQgnuVKwzLTZVqj0duRDovnPaZqDwoyhIO8kYg==",
      "dev": true,
      "dependencies": {
        "@webassemblyjs/ast": "1.11.0",
        "@webassemblyjs/helper-buffer": "1.11.0",
        "@webassemblyjs/wasm-gen": "1.11.0",
        "@webassemblyjs/wasm-parser": "1.11.0"
      }
    },
    "node_modules/@webassemblyjs/wasm-parser": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.11.0.tgz",
      "integrity": "sha512-6L285Sgu9gphrcpDXINvm0M9BskznnzJTE7gYkjDbxET28shDqp27wpruyx3C2S/dvEwiigBwLA1cz7lNUi0kw==",
      "dev": true,
      "dependencies": {
        "@webassemblyjs/ast": "1.11.0",
        "@webassemblyjs/helper-api-error": "1.11.0",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.0",
        "@webassemblyjs/ieee754": "1.11.0",
        "@webassemblyjs/leb128": "1.11.0",
        "@webassemblyjs/utf8": "1.11.0"
      }
    },
    "node_modules/@webassemblyjs/wast-printer": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.11.0.tgz",
      "integrity": "sha512-Fg5OX46pRdTgB7rKIUojkh9vXaVN6sGYCnEiJN1GYkb0RPwShZXp6KTDqmoMdQPKhcroOXh3fEzmkWmCYaKYhQ==",
      "dev": true,
      "dependencies": {
        "@webassemblyjs/ast": "1.11.0",
        "@xtuc/long": "4.2.2"
      }
    },
    "node_modules/@webpack-cli/configtest": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@webpack-cli/configtest/-/configtest-1.0.3.tgz",
      "integrity": "sha512-WQs0ep98FXX2XBAfQpRbY0Ma6ADw8JR6xoIkaIiJIzClGOMqVRvPCWqndTxf28DgFopWan0EKtHtg/5W1h0Zkw==",
      "dev": true,
      "peerDependencies": {
        "webpack": "4.x.x || 5.x.x",
        "webpack-cli": "4.x.x"
      }
    },
    "node_modules/@webpack-cli/info": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@webpack-cli/info/-/info-1.2.4.tgz",
      "integrity": "sha512-ogE2T4+pLhTTPS/8MM3IjHn0IYplKM4HbVNMCWA9N4NrdPzunwenpCsqKEXyejMfRu6K8mhauIPYf8ZxWG5O6g==",
      "dev": true,
      "dependencies": {
        "envinfo": "^7.7.3"
      },
      "peerDependencies": {
        "webpack-cli": "4.x.x"
      }
    },
    "node_modules/@webpack-cli/serve": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@webpack-cli/serve/-/serve-1.4.0.tgz",
      "integrity": "sha512-xgT/HqJ+uLWGX+Mzufusl3cgjAcnqYYskaB7o0vRcwOEfuu6hMzSILQpnIzFMGsTaeaX4Nnekl+6fadLbl1/Vg==",
      "dev": true,
      "peerDependencies": {
        "webpack-cli": "4.x.x"
      },
      "peerDependenciesMeta": {
        "webpack-dev-server": {
          "optional": true
        }
      }
    },
    "node_modules/@xtuc/ieee754": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
      "integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==",
      "dev": true
    },
    "node_modules/@xtuc/long": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz",
      "integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==",
      "dev": true
    },
    "node_modules/accepts": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
      "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "mime-types": "~2.1.24",
        "negotiator": "0.6.2"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/acorn": {
      "version": "8.2.4",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.2.4.tgz",
      "integrity": "sha512-Ibt84YwBDDA890eDiDCEqcbwvHlBvzzDkU2cGBBDDI1QWT12jTiXIOn2CIw5KK4i6N5Z2HUxwYjzriDyqaqqZg==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.1.tgz",
      "integrity": "sha512-K0Ptm/47OKfQRpNQ2J/oIN/3QYiK6FwW+eJbILhsdxh2WTLdl+30o8aGdTbm5JbffpFFAg/g+zi1E+jvJha5ng==",
      "dev": true
    },
    "node_modules/addons-linter": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/addons-linter/-/addons-linter-3.5.0.tgz",
      "integrity": "sha512-Fic4AxTAEOUGQGdFiUbtJG3kEtCJd/fjwnGMLp/HIJwR6GJclV5yUvszWdedtWrhOBCM/hMaloVdWXfymWi/xQ==",
      "dev": true,
      "dependencies": {
        "@mdn/browser-compat-data": "3.3.3",
        "addons-scanner-utils": "4.5.0",
        "ajv": "6.12.6",
        "ajv-merge-patch": "4.1.0",
        "chalk": "4.1.1",
        "cheerio": "1.0.0-rc.9",
        "columnify": "1.5.4",
        "common-tags": "1.8.0",
        "deepmerge": "4.2.2",
        "dispensary": "0.62.0",
        "eslint": "7.26.0",
        "eslint-plugin-no-unsanitized": "3.1.5",
        "eslint-visitor-keys": "2.1.0",
        "espree": "7.3.1",
        "esprima": "4.0.1",
        "fluent-syntax": "0.13.0",
        "glob": "7.1.7",
        "image-size": "1.0.0",
        "is-mergeable-object": "1.1.1",
        "jed": "1.1.1",
        "os-locale": "5.0.0",
        "pino": "6.11.3",
        "postcss": "8.2.14",
        "relaxed-json": "1.0.3",
        "semver": "7.3.5",
        "source-map-support": "0.5.19",
        "tosource": "1.0.0",
        "upath": "2.0.1",
        "yargs": "16.2.0",
        "yauzl": "2.10.0"
      },
      "bin": {
        "addons-linter": "bin/addons-linter"
      },
      "engines": {
        "node": ">=12.21.0"
      }
    },
    "node_modules/addons-linter/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/addons-linter/node_modules/chalk": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.1.tgz",
      "integrity": "sha512-diHzdDKxcU+bAsUboHLPEDQiw0qEe0qd7SYUn3HgcFlWgbDcfLGswOHYeGrHKzG9z6UYf01d9VFMfZxPM1xZSg==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/addons-linter/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/addons-linter/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "node_modules/addons-linter/node_modules/execa": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/execa/-/execa-4.1.0.tgz",
      "integrity": "sha512-j5W0//W7f8UxAn8hXVnwG8tLwdiUy4FJLcSupCg6maBYZDpyBvTApK7KyuI4bKj8KOh1r2YH+6ucuYtJv1bTZA==",
      "dev": true,
      "dependencies": {
        "cross-spawn": "^7.0.0",
        "get-stream": "^5.0.0",
        "human-signals": "^1.1.1",
        "is-stream": "^2.0.0",
        "merge-stream": "^2.0.0",
        "npm-run-path": "^4.0.0",
        "onetime": "^5.1.0",
        "signal-exit": "^3.0.2",
        "strip-final-newline": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/addons-linter/node_modules/get-stream": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
      "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
      "dev": true,
      "dependencies": {
        "pump": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/addons-linter/node_modules/glob": {
      "version": "7.1.7",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.7.tgz",
      "integrity": "sha512-OvD9ENzPLbegENnYP5UUfJIirTg4+XwMWGaQfQTY0JenxNvvIKP3U3/tAQSPIu/lHxXYSZmpXlUHeqAIdKzBLQ==",
      "dev": true,
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/addons-linter/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/addons-linter/node_modules/invert-kv": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-3.0.1.tgz",
      "integrity": "sha512-CYdFeFexxhv/Bcny+Q0BfOV+ltRlJcd4BBZBYFX/O0u4npJrgZtIcjokegtiSMAvlMTJ+Koq0GBCc//3bueQxw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/addons-linter/node_modules/is-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
      "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/addons-linter/node_modules/lcid": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/lcid/-/lcid-3.1.1.tgz",
      "integrity": "sha512-M6T051+5QCGLBQb8id3hdvIW8+zeFV2FyBGFS9IEK5H9Wt4MueD4bW1eWikpHgZp+5xR3l5c8pZUkQsIA0BFZg==",
      "dev": true,
      "dependencies": {
        "invert-kv": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/addons-linter/node_modules/mem": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/mem/-/mem-5.1.1.tgz",
      "integrity": "sha512-qvwipnozMohxLXG1pOqoLiZKNkC4r4qqRucSoDwXowsNGDSULiqFTRUF05vcZWnwJSG22qTsynQhxbaMtnX9gw==",
      "dev": true,
      "dependencies": {
        "map-age-cleaner": "^0.1.3",
        "mimic-fn": "^2.1.0",
        "p-is-promise": "^2.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/addons-linter/node_modules/os-locale": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-5.0.0.tgz",
      "integrity": "sha512-tqZcNEDAIZKBEPnHPlVDvKrp7NzgLi7jRmhKiUoa2NUmhl13FtkAGLUVR+ZsYvApBQdBfYm43A4tXXQ4IrYLBA==",
      "dev": true,
      "dependencies": {
        "execa": "^4.0.0",
        "lcid": "^3.0.0",
        "mem": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/addons-linter/node_modules/p-is-promise": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/p-is-promise/-/p-is-promise-2.1.0.tgz",
      "integrity": "sha512-Y3W0wlRPK8ZMRbNq97l4M5otioeA5lm1z7bkNkxCka8HSPjR0xRWmpCmc9utiaLP9Jb1eD8BgeIxTW4AIF45Pg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/addons-linter/node_modules/semver": {
      "version": "7.3.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
      "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/addons-linter/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/addons-linter/node_modules/upath": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/upath/-/upath-2.0.1.tgz",
      "integrity": "sha512-1uEe95xksV1O0CYKXo8vQvN1JEbtJp7lb7C5U9HMsIp6IVwntkH/oNUzyVNQSd4S1sYk2FpSSW44FqMc8qee5w==",
      "dev": true,
      "engines": {
        "node": ">=4",
        "yarn": "*"
      }
    },
    "node_modules/addons-scanner-utils": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/addons-scanner-utils/-/addons-scanner-utils-4.5.0.tgz",
      "integrity": "sha512-ZLUbRIhh/USLzKbsYgQuML7l1Es6bg4hMfjSPOJfcPf2+WkDJVwqGXdct/Jqt+KTt2OXPHrtvbV7AGYaU4fduw==",
      "dev": true,
      "dependencies": {
        "@types/yauzl": "2.9.1",
        "common-tags": "1.8.0",
        "first-chunk-stream": "3.0.0",
        "strip-bom-stream": "4.0.0",
        "upath": "2.0.1",
        "yauzl": "2.10.0"
      },
      "peerDependencies": {
        "@types/download": "6.2.4",
        "body-parser": "1.19.0",
        "download": "8.0.0",
        "express": "4.17.1",
        "safe-compare": "1.1.4"
      }
    },
    "node_modules/addons-scanner-utils/node_modules/upath": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/upath/-/upath-2.0.1.tgz",
      "integrity": "sha512-1uEe95xksV1O0CYKXo8vQvN1JEbtJp7lb7C5U9HMsIp6IVwntkH/oNUzyVNQSd4S1sYk2FpSSW44FqMc8qee5w==",
      "dev": true,
      "engines": {
        "node": ">=4",
        "yarn": "*"
      }
    },
    "node_modules/adm-zip": {
      "resolved": "git+ssh://git@github.com/cthackers/adm-zip.git#1d22ff693cbb060300bbe83658ccd6f6dec042bf",
      "dev": true,
      "engines": {
        "node": ">=6.0"
      }
    },
    "node_modules/aggregate-error": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
      "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
      "dev": true,
      "dependencies": {
        "clean-stack": "^2.0.0",
        "indent-string": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ajv-keywords": {
      "version": "3.5.2",
      "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.5.2.tgz",
      "integrity": "sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==",
      "dev": true,
      "peerDependencies": {
        "ajv": "^6.9.1"
      }
    },
    "node_modules/ajv-merge-patch": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ajv-merge-patch/-/ajv-merge-patch-4.1.0.tgz",
      "integrity": "sha512-0mAYXMSauA8RZ7r+B4+EAOYcZEcO9OK5EiQCR7W7Cv4E44pJj56ZnkKLJ9/PAcOc0dT+LlV9fdDcq2TxVJfOYw==",
      "dev": true,
      "dependencies": {
        "fast-json-patch": "^2.0.6",
        "json-merge-patch": "^0.2.3"
      }
    },
    "node_modules/ajv/node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "node_modules/ansi-colors": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.1.tgz",
      "integrity": "sha512-JoX0apGbHaUJBNl6yF+p6JAFYZ666/hhCGKN5t9QFjbJQKUU/g8MNbFDbvfrgKXvI1QpZplPOnwIo99lX/AAmA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/anymatch": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "micromatch": "^3.1.4",
        "normalize-path": "^2.1.1"
      }
    },
    "node_modules/anymatch/node_modules/normalize-path": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
      "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "remove-trailing-separator": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/append-transform": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/append-transform/-/append-transform-2.0.0.tgz",
      "integrity": "sha512-7yeyCEurROLQJFv5Xj4lEGTy0borxepjFv1g22oAdqFu//SrAlDl1O1Nxx15SH1RoliUml6p8dwJW9jvZughhg==",
      "dev": true,
      "dependencies": {
        "default-require-extensions": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/archive-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/archive-type/-/archive-type-4.0.0.tgz",
      "integrity": "sha1-+S5yIzBW38aWlHJ0nCZ72wRrHXA=",
      "dev": true,
      "dependencies": {
        "file-type": "^4.2.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/archive-type/node_modules/file-type": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-4.4.0.tgz",
      "integrity": "sha1-G2AOX8ofvcboDApwxxyNul95BsU=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/archy": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/archy/-/archy-1.0.0.tgz",
      "integrity": "sha1-+cjBN1fMHde8N5rHeyxipcKGjEA=",
      "dev": true
    },
    "node_modules/argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "dependencies": {
        "sprintf-js": "~1.0.2"
      }
    },
    "node_modules/arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI=",
      "dev": true,
      "peer": true
    },
    "node_modules/array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/array-unique": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/asn1": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
      "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
      "dev": true,
      "dependencies": {
        "safer-buffer": "~2.1.0"
      }
    },
    "node_modules/assert-plus": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
      "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
      "dev": true,
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/assertion-error": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-1.1.0.tgz",
      "integrity": "sha512-jgsaNduz+ndvGyFt3uSuWqvy4lCnIJiovtouQN5JZHOKCS2QuhEdbcQHFhVksz2N2U9hXJo8odG7ETyWlEeuDw==",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/async": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/async/-/async-3.2.0.tgz",
      "integrity": "sha512-TR2mEZFVOj2pLStYxLht7TyfuRzaydfpxr3k9RpHIzMgw7A64dzsdqCxH1WJyQdoe8T10nDXd9wnEigmiuHIZw==",
      "dev": true
    },
    "node_modules/async-each": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.3.tgz",
      "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ==",
      "dev": true,
      "optional": true
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
      "dev": true
    },
    "node_modules/atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
      "dev": true,
      "optional": true,
      "bin": {
        "atob": "bin/atob.js"
      },
      "engines": {
        "node": ">= 4.5.0"
      }
    },
    "node_modules/atomic-sleep": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/atomic-sleep/-/atomic-sleep-1.0.0.tgz",
      "integrity": "sha512-kNOjDqAh7px0XWNI+4QbzoiR/nTkHAWNud2uvnJquD1/x5a7EQZMJT0AczqK0Qn67oY/TTQ1LbUKajZpp3I9tQ==",
      "dev": true,
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/aws-sign2": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
      "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/aws4": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.11.0.tgz",
      "integrity": "sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA==",
      "dev": true
    },
    "node_modules/babel-loader": {
      "version": "8.2.2",
      "resolved": "https://registry.npmjs.org/babel-loader/-/babel-loader-8.2.2.tgz",
      "integrity": "sha512-JvTd0/D889PQBtUXJ2PXaKU/pjZDMtHA9V2ecm+eNRmmBCMR09a+fmpGTNwnJtFmFl5Ei7Vy47LjBb+L0wQ99g==",
      "dev": true,
      "dependencies": {
        "find-cache-dir": "^3.3.1",
        "loader-utils": "^1.4.0",
        "make-dir": "^3.1.0",
        "schema-utils": "^2.6.5"
      },
      "engines": {
        "node": ">= 8.9"
      }
    },
    "node_modules/babel-loader/node_modules/find-cache-dir": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.1.tgz",
      "integrity": "sha512-t2GDMt3oGC/v+BMwzmllWDuJF/xcDtE5j/fCGbqDD7OLuJkj0cfh1YSA5VKPvwMeLFLNDBkwOKZ2X85jGLVftQ==",
      "dev": true,
      "dependencies": {
        "commondir": "^1.0.1",
        "make-dir": "^3.0.2",
        "pkg-dir": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/babel-loader/node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dev": true,
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/babel-loader/node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dev": true,
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/babel-loader/node_modules/make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "dev": true,
      "dependencies": {
        "semver": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/babel-loader/node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dev": true,
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/babel-loader/node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/babel-loader/node_modules/pkg-dir": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
      "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
      "dev": true,
      "dependencies": {
        "find-up": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/babel-loader/node_modules/schema-utils": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-2.7.1.tgz",
      "integrity": "sha512-SHiNtMOUGWBQJwzISiVYKu82GiV4QYGePp3odlY1tuKO7gPtphAT5R/py0fA6xtbgLL/RvtJZnU9b8s0F1q0Xg==",
      "dev": true,
      "dependencies": {
        "@types/json-schema": "^7.0.5",
        "ajv": "^6.12.4",
        "ajv-keywords": "^3.5.2"
      },
      "engines": {
        "node": ">= 8.9.0"
      }
    },
    "node_modules/babel-plugin-dynamic-import-node": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.3.tgz",
      "integrity": "sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==",
      "dev": true,
      "dependencies": {
        "object.assign": "^4.1.0"
      }
    },
    "node_modules/babel-plugin-polyfill-corejs2": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs2/-/babel-plugin-polyfill-corejs2-0.2.0.tgz",
      "integrity": "sha512-9bNwiR0dS881c5SHnzCmmGlMkJLl0OUZvxrxHo9w/iNoRuqaPjqlvBf4HrovXtQs/au5yKkpcdgfT1cC5PAZwg==",
      "dev": true,
      "dependencies": {
        "@babel/compat-data": "^7.13.11",
        "@babel/helper-define-polyfill-provider": "^0.2.0",
        "semver": "^6.1.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/babel-plugin-polyfill-corejs3": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs3/-/babel-plugin-polyfill-corejs3-0.2.0.tgz",
      "integrity": "sha512-zZyi7p3BCUyzNxLx8KV61zTINkkV65zVkDAFNZmrTCRVhjo1jAS+YLvDJ9Jgd/w2tsAviCwFHReYfxO3Iql8Yg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-define-polyfill-provider": "^0.2.0",
        "core-js-compat": "^3.9.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/babel-plugin-polyfill-regenerator": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-regenerator/-/babel-plugin-polyfill-regenerator-0.2.0.tgz",
      "integrity": "sha512-J7vKbCuD2Xi/eEHxquHN14bXAW9CXtecwuLrOIDJtcZzTaPzV1VdEfoUf9AzcRBMolKUQKM9/GVojeh0hFiqMg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-define-polyfill-provider": "^0.2.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
      "dev": true
    },
    "node_modules/base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base64-js": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-0.0.8.tgz",
      "integrity": "sha1-EQHpVE9KdrG8OybUUsqW16NeeXg=",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/bcrypt-pbkdf": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
      "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
      "dev": true,
      "dependencies": {
        "tweetnacl": "^0.14.3"
      }
    },
    "node_modules/big.js": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/big.js/-/big.js-5.2.2.tgz",
      "integrity": "sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ==",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/binary-extensions": {
      "version": "1.13.1",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",
      "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw==",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/bl": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/bl/-/bl-1.2.3.tgz",
      "integrity": "sha512-pvcNpa0UU69UT341rO6AYy4FVAIkUHuZXRIWbq+zHnsVcRzDDjIAhGuuYoi0d//cwIwtt4pkpKycWEfjdV+vww==",
      "dev": true,
      "dependencies": {
        "readable-stream": "^2.3.5",
        "safe-buffer": "^5.1.1"
      }
    },
    "node_modules/body-parser": {
      "version": "1.19.0",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
      "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "bytes": "3.1.0",
        "content-type": "~1.0.4",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "on-finished": "~2.3.0",
        "qs": "6.7.0",
        "raw-body": "2.4.0",
        "type-is": "~1.6.17"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/body-parser/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24=",
      "dev": true
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/braces/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/browser-stdout": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/browser-stdout/-/browser-stdout-1.3.1.tgz",
      "integrity": "sha512-qhAVI1+Av2X7qelOfAIYwXONood6XlZE/fXaBSmW/T5SzLAmCgzi+eiWE7fUvbHaeNBQH13UftjpXxsfLkMpgw==",
      "dev": true
    },
    "node_modules/browserslist": {
      "version": "4.16.6",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.16.6.tgz",
      "integrity": "sha512-Wspk/PqO+4W9qp5iUTJsa1B/QrYn1keNCcEP5OvP7WBwT4KaDly0uONYmC6Xa3Z5IqnUgS0KcgLYu1l74x0ZXQ==",
      "dev": true,
      "dependencies": {
        "caniuse-lite": "^1.0.30001219",
        "colorette": "^1.2.2",
        "electron-to-chromium": "^1.3.723",
        "escalade": "^3.1.1",
        "node-releases": "^1.1.71"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/browserslist"
      }
    },
    "node_modules/buffer": {
      "version": "3.6.0",
      "resolved": "http://registry.npmjs.org/buffer/-/buffer-3.6.0.tgz",
      "integrity": "sha1-pyyTb3e5a/UvX357RnGAYoVR3vs=",
      "dev": true,
      "dependencies": {
        "base64-js": "0.0.8",
        "ieee754": "^1.1.4",
        "isarray": "^1.0.0"
      }
    },
    "node_modules/buffer-alloc": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/buffer-alloc/-/buffer-alloc-1.2.0.tgz",
      "integrity": "sha512-CFsHQgjtW1UChdXgbyJGtnm+O/uLQeZdtbDo8mfUgYXCHSM1wgrVxXm6bSyrUuErEb+4sYVGCzASBRot7zyrow==",
      "dev": true,
      "dependencies": {
        "buffer-alloc-unsafe": "^1.1.0",
        "buffer-fill": "^1.0.0"
      }
    },
    "node_modules/buffer-alloc-unsafe": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/buffer-alloc-unsafe/-/buffer-alloc-unsafe-1.1.0.tgz",
      "integrity": "sha512-TEM2iMIEQdJ2yjPJoSIsldnleVaAk1oW3DBVUykyOLsEsFmEc9kn+SFFPz+gl54KQNxlDnAwCXosOS9Okx2xAg==",
      "dev": true
    },
    "node_modules/buffer-crc32": {
      "version": "0.2.13",
      "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
      "integrity": "sha1-DTM+PwDqxQqhRUq9MO+MKl2ackI=",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/buffer-fill": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/buffer-fill/-/buffer-fill-1.0.0.tgz",
      "integrity": "sha1-+PeLdniYiO858gXNY39o5wISKyw=",
      "dev": true
    },
    "node_modules/buffer-from": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
      "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
      "dev": true
    },
    "node_modules/bytes": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
      "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg==",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/cacheable-request": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-2.1.4.tgz",
      "integrity": "sha1-DYCIAbY0KtM8kd+dC0TcCbkeXD0=",
      "dev": true,
      "dependencies": {
        "clone-response": "1.0.2",
        "get-stream": "3.0.0",
        "http-cache-semantics": "3.8.1",
        "keyv": "3.0.0",
        "lowercase-keys": "1.0.0",
        "normalize-url": "2.0.1",
        "responselike": "1.0.2"
      }
    },
    "node_modules/cacheable-request/node_modules/lowercase-keys": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.0.tgz",
      "integrity": "sha1-TjNms55/VFfjXxMkvfb4jQv8cwY=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/caching-transform": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/caching-transform/-/caching-transform-4.0.0.tgz",
      "integrity": "sha512-kpqOvwXnjjN44D89K5ccQC+RUrsy7jB/XLlRrx0D7/2HNcTPqzsb6XgYoErwko6QsV184CA2YgS1fxDiiDZMWA==",
      "dev": true,
      "dependencies": {
        "hasha": "^5.0.0",
        "make-dir": "^3.0.0",
        "package-hash": "^4.0.0",
        "write-file-atomic": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/caching-transform/node_modules/make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "dev": true,
      "dependencies": {
        "semver": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.0.tgz",
      "integrity": "sha512-AEXsYIyyDY3MCzbwdhzG3Jx1R0J2wetQyUynn6dYHAO+bg8l1k7jwZtRv4ryryFs7EP+NDlikJlVe59jr0cM2w==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.0"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001228",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001228.tgz",
      "integrity": "sha512-QQmLOGJ3DEgokHbMSA8cj2a+geXqmnpyOFT0lhQV6P3/YOJvGDEwoedcwxEQ30gJIwIIunHIicunJ2rzK5gB2A==",
      "dev": true,
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/browserslist"
      }
    },
    "node_modules/caseless": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
      "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
      "dev": true
    },
    "node_modules/chai": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/chai/-/chai-4.3.4.tgz",
      "integrity": "sha512-yS5H68VYOCtN1cjfwumDSuzn/9c+yza4f3reKXlE5rUg7SFcCEy90gJvydNgOYtblyf4Zi6jIWRnXOgErta0KA==",
      "dev": true,
      "dependencies": {
        "assertion-error": "^1.1.0",
        "check-error": "^1.0.2",
        "deep-eql": "^3.0.1",
        "get-func-name": "^2.0.0",
        "pathval": "^1.1.1",
        "type-detect": "^4.0.5"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/check-error": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/check-error/-/check-error-1.0.2.tgz",
      "integrity": "sha1-V00xLt2Iu13YkS6Sht1sCu1KrII=",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/cheerio": {
      "version": "1.0.0-rc.9",
      "resolved": "https://registry.npmjs.org/cheerio/-/cheerio-1.0.0-rc.9.tgz",
      "integrity": "sha512-QF6XVdrLONO6DXRF5iaolY+odmhj2CLj+xzNod7INPWMi/x9X4SOylH0S/vaPpX+AUU6t04s34SQNh7DbkuCng==",
      "dev": true,
      "dependencies": {
        "cheerio-select": "^1.4.0",
        "dom-serializer": "^1.3.1",
        "domhandler": "^4.2.0",
        "htmlparser2": "^6.1.0",
        "parse5": "^6.0.1",
        "parse5-htmlparser2-tree-adapter": "^6.0.1",
        "tslib": "^2.2.0"
      },
      "engines": {
        "node": ">= 6"
      },
      "funding": {
        "url": "https://github.com/cheeriojs/cheerio?sponsor=1"
      }
    },
    "node_modules/cheerio-select": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/cheerio-select/-/cheerio-select-1.4.0.tgz",
      "integrity": "sha512-sobR3Yqz27L553Qa7cK6rtJlMDbiKPdNywtR95Sj/YgfpLfy0u6CGJuaBKe5YE/vTc23SCRKxWSdlon/w6I/Ew==",
      "dev": true,
      "dependencies": {
        "css-select": "^4.1.2",
        "css-what": "^5.0.0",
        "domelementtype": "^2.2.0",
        "domhandler": "^4.2.0",
        "domutils": "^2.6.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/cheerio/node_modules/tslib": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.2.0.tgz",
      "integrity": "sha512-gS9GVHRU+RGn5KQM2rllAlR3dU6m7AcpJKdtH8gFvQiC4Otgk98XnmMU+nZenHt/+VhnBPWwgrJsyrdcw6i23w==",
      "dev": true
    },
    "node_modules/chokidar": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.1.tgz",
      "integrity": "sha512-9+s+Od+W0VJJzawDma/gvBNQqkTiqYTWLuZoyAsivsI4AaWTCzHG06/TMjsf1cYe9Cb97UCEhjz7HvnPk2p/tw==",
      "dev": true,
      "dependencies": {
        "anymatch": "~3.1.1",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.0",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.5.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.1"
      }
    },
    "node_modules/chokidar/node_modules/anymatch": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.1.tgz",
      "integrity": "sha512-mM8522psRCqzV+6LhomX5wgp25YVibjh8Wj23I5RPkPppSVSjyKD2A2mBJmWGa+KN7f2D6LNh9jkBCeyLktzjg==",
      "dev": true,
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/chokidar/node_modules/binary-extensions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/chokidar/node_modules/braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "dev": true,
      "dependencies": {
        "fill-range": "^7.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/chokidar/node_modules/fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "dev": true,
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/chokidar/node_modules/fsevents": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.1.tgz",
      "integrity": "sha512-YR47Eg4hChJGAB1O3yEAOkGO+rlzutoICGqGo9EZ4lKWokzZRSyIW1QmTzqjtw8MJdj9srP869CuWw/hyzSiBw==",
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.1.tgz",
      "integrity": "sha512-FnI+VGOpnlGHWZxthPGR+QhR78fuiK0sNLkHQv+bL9fQi57lNNdquIbna/WrfROrolq8GK5Ek6BiMwqL/voRYQ==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/chokidar/node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/chokidar/node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/chokidar/node_modules/readdirp": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.5.0.tgz",
      "integrity": "sha512-cMhu7c/8rdhkHXWsY+osBhfSy0JikwpHK/5+imo+LpeasTF8ouErHrlYkwT0++njiyuDvc7OFY5T3ukvZ8qmFQ==",
      "dev": true,
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/chokidar/node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/chrome-trace-event": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.2.tgz",
      "integrity": "sha512-9e/zx1jw7B4CO+c/RXoCsfg/x1AfUBioy4owYH0bJprEYAx5hRFLRhWBqHAG57D0ZM4H7vxbP7bPe0VwhQRYDQ==",
      "dev": true,
      "dependencies": {
        "tslib": "^1.9.0"
      },
      "engines": {
        "node": ">=6.0"
      }
    },
    "node_modules/class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/clean-stack": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
      "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/cliui": {
      "version": "7.0.4",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
      "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
      "dev": true,
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^7.0.0"
      }
    },
    "node_modules/cliui/node_modules/ansi-regex": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
      "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui/node_modules/string-width": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
      "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
      "dev": true,
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui/node_modules/strip-ansi": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
      "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/clone": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
      "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4=",
      "dev": true,
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/clone-deep": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
      "integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
      "dev": true,
      "dependencies": {
        "is-plain-object": "^2.0.4",
        "kind-of": "^6.0.2",
        "shallow-clone": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/clone-response": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
      "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
      "dev": true,
      "dependencies": {
        "mimic-response": "^1.0.0"
      }
    },
    "node_modules/collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/color-convert": {
      "version": "1.9.2",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.2.tgz",
      "integrity": "sha512-3NUJZdhMhcdPn8vJ9v2UQJoH0qqoGUkYTgFEPZaPjEtwmmKUfNV46zZmgB2M5M4DCEQHMaCfWHCxiBflLm04Tg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.1"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.1.tgz",
      "integrity": "sha1-SxQVMEz1ACjqgWQ2Q72C6gWANok=",
      "dev": true
    },
    "node_modules/colorette": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.2.2.tgz",
      "integrity": "sha512-MKGMzyfeuutC/ZJ1cba9NqcNpfeqMUcYmyF1ZFY6/Cn7CNSAKx6a+s48sqLqyAiZuaP2TcqMhoo+dlwFnVxT9w==",
      "dev": true
    },
    "node_modules/columnify": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/columnify/-/columnify-1.5.4.tgz",
      "integrity": "sha1-Rzfd8ce2mop8NAVweC6UfuyOeLs=",
      "dev": true,
      "dependencies": {
        "strip-ansi": "^3.0.0",
        "wcwidth": "^1.0.0"
      }
    },
    "node_modules/columnify/node_modules/strip-ansi": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
      "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dev": true,
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/commander": {
      "version": "2.20.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.0.tgz",
      "integrity": "sha512-7j2y+40w61zy6YC2iRNpUe/NwhNyoXrYpHMrSunaMG64nRnaf96zO/KMQR4OyN/UnE5KLyEBnKHd4aG3rskjpQ==",
      "dev": true
    },
    "node_modules/common-tags": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/common-tags/-/common-tags-1.8.0.tgz",
      "integrity": "sha512-6P6g0uetGpW/sdyUy/iQQCbFF0kWVMSIVSyYz7Zgjcgh8mgw8PQzDNZeyZ5DQ2gM7LBoZPHmnjz8rUthkBG5tw==",
      "dev": true,
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/commondir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
      "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs=",
      "dev": true
    },
    "node_modules/component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
      "dev": true,
      "optional": true
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
      "dev": true
    },
    "node_modules/content-disposition": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
      "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
      "dev": true,
      "dependencies": {
        "safe-buffer": "5.1.2"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/convert-source-map": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
      "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
      "dev": true,
      "dependencies": {
        "safe-buffer": "~5.1.1"
      }
    },
    "node_modules/cookie": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
      "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg==",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw=",
      "dev": true,
      "peer": true
    },
    "node_modules/copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/core-js": {
      "version": "2.6.12",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
      "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ==",
      "dev": true
    },
    "node_modules/core-js-compat": {
      "version": "3.12.1",
      "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.12.1.tgz",
      "integrity": "sha512-i6h5qODpw6EsHAoIdQhKoZdWn+dGBF3dSS8m5tif36RlWvW3A6+yu2S16QHUo3CrkzrnEskMAt9f8FxmY9fhWQ==",
      "dev": true,
      "dependencies": {
        "browserslist": "^4.16.6",
        "semver": "7.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/core-js"
      }
    },
    "node_modules/core-js-compat/node_modules/semver": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
      "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
      "dev": true
    },
    "node_modules/cross-spawn": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
      "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
      "dev": true,
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/css-select": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/css-select/-/css-select-4.1.2.tgz",
      "integrity": "sha512-nu5ye2Hg/4ISq4XqdLY2bEatAcLIdt3OYGFc9Tm9n7VSlFBcfRv0gBNksHRgSdUDQGtN3XrZ94ztW+NfzkFSUw==",
      "dev": true,
      "dependencies": {
        "boolbase": "^1.0.0",
        "css-what": "^5.0.0",
        "domhandler": "^4.2.0",
        "domutils": "^2.6.0",
        "nth-check": "^2.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/css-what": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/css-what/-/css-what-5.0.0.tgz",
      "integrity": "sha512-qxyKHQvgKwzwDWC/rGbT821eJalfupxYW2qbSJSAtdSTimsr/MlaGONoNLllaUPZWf8QnbcKM/kPVYUQuEKAFA==",
      "dev": true,
      "engines": {
        "node": ">= 6"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/dashdash": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
      "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
      "dev": true,
      "dependencies": {
        "assert-plus": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/debug": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
      "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
      "dev": true,
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/debug/node_modules/ms": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
      "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
      "dev": true
    },
    "node_modules/decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
      "dev": true,
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/decompress": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/decompress/-/decompress-4.2.1.tgz",
      "integrity": "sha512-e48kc2IjU+2Zw8cTb6VZcJQ3lgVbS4uuB1TfCHbiZIP/haNXm+SVyhu+87jts5/3ROpd82GSVCoNs/z8l4ZOaQ==",
      "dev": true,
      "dependencies": {
        "decompress-tar": "^4.0.0",
        "decompress-tarbz2": "^4.0.0",
        "decompress-targz": "^4.0.0",
        "decompress-unzip": "^4.0.1",
        "graceful-fs": "^4.1.10",
        "make-dir": "^1.0.0",
        "pify": "^2.3.0",
        "strip-dirs": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/decompress-response": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
      "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
      "dev": true,
      "dependencies": {
        "mimic-response": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/decompress-tar": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/decompress-tar/-/decompress-tar-4.1.1.tgz",
      "integrity": "sha512-JdJMaCrGpB5fESVyxwpCx4Jdj2AagLmv3y58Qy4GE6HMVjWz1FeVQk1Ct4Kye7PftcdOo/7U7UKzYBJgqnGeUQ==",
      "dev": true,
      "dependencies": {
        "file-type": "^5.2.0",
        "is-stream": "^1.1.0",
        "tar-stream": "^1.5.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/decompress-tar/node_modules/file-type": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-5.2.0.tgz",
      "integrity": "sha1-LdvqfHP/42No365J3DOMBYwritY=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/decompress-tarbz2": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/decompress-tarbz2/-/decompress-tarbz2-4.1.1.tgz",
      "integrity": "sha512-s88xLzf1r81ICXLAVQVzaN6ZmX4A6U4z2nMbOwobxkLoIIfjVMBg7TeguTUXkKeXni795B6y5rnvDw7rxhAq9A==",
      "dev": true,
      "dependencies": {
        "decompress-tar": "^4.1.0",
        "file-type": "^6.1.0",
        "is-stream": "^1.1.0",
        "seek-bzip": "^1.0.5",
        "unbzip2-stream": "^1.0.9"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/decompress-tarbz2/node_modules/file-type": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-6.2.0.tgz",
      "integrity": "sha512-YPcTBDV+2Tm0VqjybVd32MHdlEGAtuxS3VAYsumFokDSMG+ROT5wawGlnHDoz7bfMcMDt9hxuXvXwoKUx2fkOg==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/decompress-targz": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/decompress-targz/-/decompress-targz-4.1.1.tgz",
      "integrity": "sha512-4z81Znfr6chWnRDNfFNqLwPvm4db3WuZkqV+UgXQzSngG3CEKdBkw5jrv3axjjL96glyiiKjsxJG3X6WBZwX3w==",
      "dev": true,
      "dependencies": {
        "decompress-tar": "^4.1.1",
        "file-type": "^5.2.0",
        "is-stream": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/decompress-targz/node_modules/file-type": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-5.2.0.tgz",
      "integrity": "sha1-LdvqfHP/42No365J3DOMBYwritY=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/decompress-unzip": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/decompress-unzip/-/decompress-unzip-4.0.1.tgz",
      "integrity": "sha1-3qrM39FK6vhVePczroIQ+bSEj2k=",
      "dev": true,
      "dependencies": {
        "file-type": "^3.8.0",
        "get-stream": "^2.2.0",
        "pify": "^2.3.0",
        "yauzl": "^2.4.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/decompress-unzip/node_modules/file-type": {
      "version": "3.9.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-3.9.0.tgz",
      "integrity": "sha1-JXoHg4TR24CHvESdEH1SpSZyuek=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/decompress-unzip/node_modules/get-stream": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-2.3.1.tgz",
      "integrity": "sha1-Xzj5PzRgCWZu4BUKBUFn+Rvdld4=",
      "dev": true,
      "dependencies": {
        "object-assign": "^4.0.1",
        "pinkie-promise": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/deep-eql": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/deep-eql/-/deep-eql-3.0.1.tgz",
      "integrity": "sha512-+QeIQyN5ZuO+3Uk5DYh6/1eKO0m0YmJFGNmFHGACpf1ClL1nmlV/p4gNgbl2pJGxgXb4faqo6UE+M5ACEMyVcw==",
      "dev": true,
      "dependencies": {
        "type-detect": "^4.0.0"
      },
      "engines": {
        "node": ">=0.12"
      }
    },
    "node_modules/deep-equal": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-1.1.1.tgz",
      "integrity": "sha512-yd9c5AdiqVcR+JjcwUQb9DkhJc8ngNr0MahEBGvDiJw8puWab2yZlh+nkasOnZP+EGTAP6rRp2JzJhJZzvNF8g==",
      "dev": true,
      "dependencies": {
        "is-arguments": "^1.0.4",
        "is-date-object": "^1.0.1",
        "is-regex": "^1.0.4",
        "object-is": "^1.0.1",
        "object-keys": "^1.1.1",
        "regexp.prototype.flags": "^1.2.0"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
      "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
      "dev": true
    },
    "node_modules/deepmerge": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.2.2.tgz",
      "integrity": "sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/default-require-extensions": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/default-require-extensions/-/default-require-extensions-3.0.0.tgz",
      "integrity": "sha512-ek6DpXq/SCpvjhpFsLFRVtIxJCRw6fUR42lYMVZuUMK7n8eMz4Uh5clckdBjEpLhn/gEBZo7hDJnJcwdKLKQjg==",
      "dev": true,
      "dependencies": {
        "strip-bom": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/defaults": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
      "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
      "dev": true,
      "dependencies": {
        "clone": "^1.0.2"
      }
    },
    "node_modules/define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "dev": true,
      "dependencies": {
        "object-keys": "^1.0.12"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
      "dev": true,
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA=",
      "dev": true,
      "peer": true
    },
    "node_modules/diff": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/diff/-/diff-5.0.0.tgz",
      "integrity": "sha512-/VTCrvm5Z0JGty/BWHljh+BAiw3IK+2j87NGMu8Nwc/f48WoDAC395uomO9ZD117ZOBaHmkX1oyLvkVM/aIT3w==",
      "dev": true,
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "dependencies": {
        "path-type": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dispensary": {
      "version": "0.62.0",
      "resolved": "https://registry.npmjs.org/dispensary/-/dispensary-0.62.0.tgz",
      "integrity": "sha512-x8vqPX7owhzDp3Y6t/iOuTuNoWx5hlZKITlzlybETsZoY05cYDubGpwt0soLfRLAWLuxX1lq0lTc/vXtk/CDCw==",
      "dev": true,
      "dependencies": {
        "async": "~3.2.0",
        "natural-compare-lite": "~1.4.0",
        "pino": "~6.11.0",
        "request": "~2.88.0",
        "sha.js": "~2.4.4",
        "source-map-support": "~0.5.4",
        "yargs": "~16.2.0"
      },
      "bin": {
        "dispensary": "bin/dispensary"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/dom-serializer": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-1.3.2.tgz",
      "integrity": "sha512-5c54Bk5Dw4qAxNOI1pFEizPSjVsx5+bpJKmL2kPn8JhBUq2q09tTCa3mjijun2NfK78NMouDYNMBkOrPZiS+ig==",
      "dev": true,
      "dependencies": {
        "domelementtype": "^2.0.1",
        "domhandler": "^4.2.0",
        "entities": "^2.0.0"
      },
      "funding": {
        "url": "https://github.com/cheeriojs/dom-serializer?sponsor=1"
      }
    },
    "node_modules/domelementtype": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.2.0.tgz",
      "integrity": "sha512-DtBMo82pv1dFtUmHyr48beiuq792Sxohr+8Hm9zoxklYPfa6n0Z3Byjj2IV7bmr2IyqClnqEQhfgHJJ5QF0R5A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fb55"
        }
      ]
    },
    "node_modules/domhandler": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-4.2.0.tgz",
      "integrity": "sha512-zk7sgt970kzPks2Bf+dwT/PLzghLnsivb9CcxkvR8Mzr66Olr0Ofd8neSbglHJHaHa2MadfoSdNlKYAaafmWfA==",
      "dev": true,
      "dependencies": {
        "domelementtype": "^2.2.0"
      },
      "engines": {
        "node": ">= 4"
      },
      "funding": {
        "url": "https://github.com/fb55/domhandler?sponsor=1"
      }
    },
    "node_modules/domutils": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/domutils/-/domutils-2.6.0.tgz",
      "integrity": "sha512-y0BezHuy4MDYxh6OvolXYsH+1EMGmFbwv5FKW7ovwMG6zTPWqNPq3WF9ayZssFq+UlKdffGLbOEaghNdaOm1WA==",
      "dev": true,
      "dependencies": {
        "dom-serializer": "^1.0.1",
        "domelementtype": "^2.2.0",
        "domhandler": "^4.2.0"
      },
      "funding": {
        "url": "https://github.com/fb55/domutils?sponsor=1"
      }
    },
    "node_modules/download": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/download/-/download-8.0.0.tgz",
      "integrity": "sha512-ASRY5QhDk7FK+XrQtQyvhpDKanLluEEQtWl/J7Lxuf/b+i8RYh997QeXvL85xitrmRKVlx9c7eTrcRdq2GS4eA==",
      "dev": true,
      "dependencies": {
        "archive-type": "^4.0.0",
        "content-disposition": "^0.5.2",
        "decompress": "^4.2.1",
        "ext-name": "^5.0.0",
        "file-type": "^11.1.0",
        "filenamify": "^3.0.0",
        "get-stream": "^4.1.0",
        "got": "^8.3.1",
        "make-dir": "^2.1.0",
        "p-event": "^2.1.0",
        "pify": "^4.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/download/node_modules/get-stream": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
      "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
      "dev": true,
      "dependencies": {
        "pump": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/download/node_modules/make-dir": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
      "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
      "dev": true,
      "dependencies": {
        "pify": "^4.0.1",
        "semver": "^5.6.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/download/node_modules/pify": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
      "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/download/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/duplexer3": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
      "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI=",
      "dev": true
    },
    "node_modules/ecc-jsbn": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
      "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
      "dev": true,
      "dependencies": {
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.1.0"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0=",
      "dev": true,
      "peer": true
    },
    "node_modules/electron-to-chromium": {
      "version": "1.3.735",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.735.tgz",
      "integrity": "sha512-cp7MWzC3NseUJV2FJFgaiesdrS+A8ZUjX5fLAxdRlcaPDkaPGFplX930S5vf84yqDp4LjuLdKouWuVOTwUfqHQ==",
      "dev": true
    },
    "node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true
    },
    "node_modules/emojis-list": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-3.0.0.tgz",
      "integrity": "sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/end-of-stream": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.1.tgz",
      "integrity": "sha512-1MkrZNvWTKCaigbn+W15elq2BB/L22nqrSY5DKlo3X6+vclJm8Bb5djXJBmEX6fS3+zCh/F4VBK5Z2KxJt4s2Q==",
      "dev": true,
      "dependencies": {
        "once": "^1.4.0"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.8.2",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.8.2.tgz",
      "integrity": "sha512-F27oB3WuHDzvR2DOGNTaYy0D5o0cnrv8TeI482VM4kYgQd/FT9lUQwuNsJ0oOHtBUq7eiW5ytqzp7nBFknL+GA==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/enquirer": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/enquirer/-/enquirer-2.3.6.tgz",
      "integrity": "sha512-yjNnPr315/FjS4zIsUxYguYUPP2e1NK4d7E7ZOLiyYCcbFBiTMyID+2wvm2w6+pZ/odMA7cRkjhsPbltwBOrLg==",
      "dev": true,
      "dependencies": {
        "ansi-colors": "^4.1.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/entities": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-2.2.0.tgz",
      "integrity": "sha512-p92if5Nz619I0w+akJrLZH0MX0Pb5DX39XOwQTtXSdQQOaYH03S1uIQp4mhOZtAXrxq4ViO67YTiLBo2638o9A==",
      "dev": true,
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/envinfo": {
      "version": "7.8.1",
      "resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.8.1.tgz",
      "integrity": "sha512-/o+BXHmB7ocbHEAs6F2EnG0ogybVVUdkRunTT2glZU9XAaGmhqskrvKwqXuDfNjEO0LZKWdejEEpnq8aM0tOaw==",
      "dev": true,
      "bin": {
        "envinfo": "dist/cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.17.7",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.17.7.tgz",
      "integrity": "sha512-VBl/gnfcJ7OercKA9MVaegWsBHFjV492syMudcnQZvt/Dw8ezpcOHYZXa/J96O8vx+g4x65YKhxOwDUh63aS5g==",
      "dev": true,
      "dependencies": {
        "es-to-primitive": "^1.2.1",
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1",
        "is-callable": "^1.2.2",
        "is-regex": "^1.1.1",
        "object-inspect": "^1.8.0",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.1",
        "string.prototype.trimend": "^1.0.1",
        "string.prototype.trimstart": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-module-lexer": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-0.4.1.tgz",
      "integrity": "sha512-ooYciCUtfw6/d2w56UVeqHPcoCFAiJdz5XOkYpv/Txl1HMUozpXjz/2RIQgqwKdXNDPSF1W7mJCFse3G+HDyAA==",
      "dev": true
    },
    "node_modules/es-to-primitive": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es6-error": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/es6-error/-/es6-error-4.1.1.tgz",
      "integrity": "sha512-Um/+FxMr9CISWh0bi5Zv0iOD+4cFh5qLeks1qhAopKVAJw3drgKbKySikp7wGhDL0HPeaja0P5ULZrxLkniUVg==",
      "dev": true
    },
    "node_modules/escalade": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
      "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg=",
      "dev": true,
      "peer": true
    },
    "node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/eslint": {
      "version": "7.26.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-7.26.0.tgz",
      "integrity": "sha512-4R1ieRf52/izcZE7AlLy56uIHHDLT74Yzz2Iv2l6kDaYvEu9x+wMB5dZArVL8SYGXSYV2YAg70FcW5Y5nGGNIg==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "7.12.11",
        "@eslint/eslintrc": "^0.4.1",
        "ajv": "^6.10.0",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.0.1",
        "doctrine": "^3.0.0",
        "enquirer": "^2.3.5",
        "eslint-scope": "^5.1.1",
        "eslint-utils": "^2.1.0",
        "eslint-visitor-keys": "^2.0.0",
        "espree": "^7.3.1",
        "esquery": "^1.4.0",
        "esutils": "^2.0.2",
        "file-entry-cache": "^6.0.1",
        "functional-red-black-tree": "^1.0.1",
        "glob-parent": "^5.0.0",
        "globals": "^13.6.0",
        "ignore": "^4.0.6",
        "import-fresh": "^3.0.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "js-yaml": "^3.13.1",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash": "^4.17.21",
        "minimatch": "^3.0.4",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.1",
        "progress": "^2.0.0",
        "regexpp": "^3.1.0",
        "semver": "^7.2.1",
        "strip-ansi": "^6.0.0",
        "strip-json-comments": "^3.1.0",
        "table": "^6.0.4",
        "text-table": "^0.2.0",
        "v8-compile-cache": "^2.0.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-plugin-no-unsanitized": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/eslint-plugin-no-unsanitized/-/eslint-plugin-no-unsanitized-3.1.5.tgz",
      "integrity": "sha512-s/6w++p1590h/H/dE2Wo660bOkaM/3OEK14Y7xm1UT0bafxkKw1Cq0ksjxkxLdH/WWd014DlsLKuD6CyNrR2Dw==",
      "dev": true,
      "peerDependencies": {
        "eslint": "^5 || ^6 || ^7"
      }
    },
    "node_modules/eslint-scope": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
      "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
      "dev": true,
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^4.1.1"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/eslint-utils": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-2.1.0.tgz",
      "integrity": "sha512-w94dQYoauyvlDc43XnGB8lU3Zt713vNChgt4EWwhXAP2XkBvndfxF0AgIqKOOasjPIPzj9JqgwkwbCYD0/V3Zg==",
      "dev": true,
      "dependencies": {
        "eslint-visitor-keys": "^1.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz",
      "integrity": "sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-2.1.0.tgz",
      "integrity": "sha512-0rSmRBzXgDzIsD6mGdJgevzgezI534Cer5L/vyMX0kHzT/jiB43jRhd9YUlMGYLQy2zprNmoT8qasCGtY+QaKw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/eslint/node_modules/@babel/code-frame": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.11.tgz",
      "integrity": "sha512-Zt1yodBx1UcyiePMSkWnU4hPqhwq7hGi2nFL1LeA3EUl+q2LQx16MISgJ0+z7dnmgvP9QtIleuETGOiOH1RcIw==",
      "dev": true,
      "dependencies": {
        "@babel/highlight": "^7.10.4"
      }
    },
    "node_modules/eslint/node_modules/ansi-regex": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
      "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/eslint/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/eslint/node_modules/astral-regex": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-2.0.0.tgz",
      "integrity": "sha512-Z7tMw1ytTXt5jqMcOP+OQteU1VuNK9Y02uuJtKQ1Sv69jXQKKg5cibLwGJow8yzZP+eAc18EmLGPal0bp36rvQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/eslint/node_modules/chalk": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
      "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/eslint/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/eslint/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "node_modules/eslint/node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "node_modules/eslint/node_modules/glob-parent": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.1.tgz",
      "integrity": "sha512-FnI+VGOpnlGHWZxthPGR+QhR78fuiK0sNLkHQv+bL9fQi57lNNdquIbna/WrfROrolq8GK5Ek6BiMwqL/voRYQ==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/eslint/node_modules/globals": {
      "version": "13.8.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.8.0.tgz",
      "integrity": "sha512-rHtdA6+PDBIjeEvA91rpqzEvk/k3/i7EeNQiryiWuJH0Hw9cpyJMAt2jtbAwUaRdhD+573X4vWw6IcjKPasi9Q==",
      "dev": true,
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/eslint/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/eslint/node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true
    },
    "node_modules/eslint/node_modules/semver": {
      "version": "7.3.4",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.4.tgz",
      "integrity": "sha512-tCfb2WLjqFAtXn4KEdxIhalnRtoKFN7nAwj0B3ZXCbQloV2tq5eDbcTmT68JJD3nRJq24/XgxtQKFIpQdtvmVw==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/eslint/node_modules/slice-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-4.0.0.tgz",
      "integrity": "sha512-qMCMfhY040cVHT43K9BFygqYbUPFZKHOg7K73mtTWJRb8pyP3fzf4Ixd5SzdEJQ6MRUg/WBnOLxghZtKKurENQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "astral-regex": "^2.0.0",
        "is-fullwidth-code-point": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/eslint/node_modules/string-width": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
      "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
      "dev": true,
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/eslint/node_modules/strip-ansi": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
      "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/eslint/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/eslint/node_modules/table": {
      "version": "6.0.7",
      "resolved": "https://registry.npmjs.org/table/-/table-6.0.7.tgz",
      "integrity": "sha512-rxZevLGTUzWna/qBLObOe16kB2RTnnbhciwgPbMMlazz1yZGVEgnZK762xyVdVznhqxrfCeBMmMkgOOaPwjH7g==",
      "dev": true,
      "dependencies": {
        "ajv": "^7.0.2",
        "lodash": "^4.17.20",
        "slice-ansi": "^4.0.0",
        "string-width": "^4.2.0"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/eslint/node_modules/table/node_modules/ajv": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-7.0.3.tgz",
      "integrity": "sha512-R50QRlXSxqXcQP5SvKUrw8VZeypvo12i2IX0EeR5PiZ7bEKeHWgzgo264LDadUsCU42lTJVhFikTqJwNeH34gQ==",
      "dev": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2",
        "uri-js": "^4.2.2"
      }
    },
    "node_modules/eslint/node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/espree": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-7.3.1.tgz",
      "integrity": "sha512-v3JCNCE64umkFpmkFGqzVKsOT0tN1Zr+ueqLZfpV1Ob8e+CEgPWa+OxCoGH3tnhimMKIaBm4m/vaRpJ/krRz2g==",
      "dev": true,
      "dependencies": {
        "acorn": "^7.4.0",
        "acorn-jsx": "^5.3.1",
        "eslint-visitor-keys": "^1.3.0"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/espree/node_modules/acorn": {
      "version": "7.4.1",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
      "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/espree/node_modules/eslint-visitor-keys": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz",
      "integrity": "sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "dev": true,
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/esquery": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.4.0.tgz",
      "integrity": "sha512-cCDispWt5vHHtwMY2YrAQ4ibFkAL8RbH5YGBnZBc90MolvvfkkQcJro/aZiAQUlQ3qgrYS6D6v8Gc5G5CQsc9w==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esquery/node_modules/estraverse": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
      "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esrecurse/node_modules/estraverse": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
      "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.2.0.tgz",
      "integrity": "sha1-De4/7TH81GlhjOc0IJn8GvoL2xM=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.2.tgz",
      "integrity": "sha1-Cr9PHKpbyx96nYrMbepPqqBLrJs=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/events": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/events/-/events-3.2.0.tgz",
      "integrity": "sha512-/46HWwbfCX2xTawVfkKLGxMifJYQBWMwY1mjywRtb4c9x8l5NP3KoJtnIOiL1hfdRkIuYhETxQlo62IF8tcnlg==",
      "dev": true,
      "engines": {
        "node": ">=0.8.x"
      }
    },
    "node_modules/execa": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/execa/-/execa-5.0.0.tgz",
      "integrity": "sha512-ov6w/2LCiuyO4RLYGdpFGjkcs0wMTgGE8PrkTHikeUy5iJekXyPIKUjifk5CsE0pt7sMCrMZ3YNqoCj6idQOnQ==",
      "dev": true,
      "dependencies": {
        "cross-spawn": "^7.0.3",
        "get-stream": "^6.0.0",
        "human-signals": "^2.1.0",
        "is-stream": "^2.0.0",
        "merge-stream": "^2.0.0",
        "npm-run-path": "^4.0.1",
        "onetime": "^5.1.2",
        "signal-exit": "^3.0.3",
        "strip-final-newline": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/execa?sponsor=1"
      }
    },
    "node_modules/execa/node_modules/get-stream": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
      "integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/execa/node_modules/human-signals": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
      "integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==",
      "dev": true,
      "engines": {
        "node": ">=10.17.0"
      }
    },
    "node_modules/execa/node_modules/is-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
      "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/expand-brackets": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "debug": "^2.3.3",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "posix-character-classes": "^0.1.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/expand-brackets/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/express": {
      "version": "4.17.1",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
      "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "accepts": "~1.3.7",
        "array-flatten": "1.1.1",
        "body-parser": "1.19.0",
        "content-disposition": "0.5.3",
        "content-type": "~1.0.4",
        "cookie": "0.4.0",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.1.2",
        "fresh": "0.5.2",
        "merge-descriptors": "1.0.1",
        "methods": "~1.1.2",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "~2.0.5",
        "qs": "6.7.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.1.2",
        "send": "0.17.1",
        "serve-static": "1.14.1",
        "setprototypeof": "1.1.1",
        "statuses": "~1.5.0",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/express/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/ext-list": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/ext-list/-/ext-list-2.2.2.tgz",
      "integrity": "sha512-u+SQgsubraE6zItfVA0tBuCBhfU9ogSRnsvygI7wht9TS510oLkBRXBsqopeUG/GBOIQyKZO9wjTqIu/sf5zFA==",
      "dev": true,
      "dependencies": {
        "mime-db": "^1.28.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ext-name": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/ext-name/-/ext-name-5.0.0.tgz",
      "integrity": "sha512-yblEwXAbGv1VQDmow7s38W77hzAgJAO50ztBLMcUyUBfxv1HC+LGwtiEN+Co6LtlqT/5uwVOxsD4TNIilWhwdQ==",
      "dev": true,
      "dependencies": {
        "ext-list": "^2.0.0",
        "sort-keys-length": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "dev": true
    },
    "node_modules/extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extend-shallow/node_modules/is-extendable": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
      "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-plain-object": "^2.0.4"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "array-unique": "^0.3.2",
        "define-property": "^1.0.0",
        "expand-brackets": "^2.1.4",
        "extend-shallow": "^2.0.1",
        "fragment-cache": "^0.2.1",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extsprintf": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
      "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
      "dev": true,
      "engines": [
        "node >=0.6.0"
      ]
    },
    "node_modules/fast-deep-equal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
      "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
      "dev": true
    },
    "node_modules/fast-glob": {
      "version": "3.2.5",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.5.tgz",
      "integrity": "sha512-2DtFcgT68wiTTiwZ2hNdJfcHNke9XOfnwmBRWXhmeKM8rF0TGwmC/Qto3S7RoZKp5cilZbxzO5iTNTQsJ+EeDg==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.0",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.2",
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fast-glob/node_modules/braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "dev": true,
      "dependencies": {
        "fill-range": "^7.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fast-glob/node_modules/fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "dev": true,
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-glob/node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/fast-glob/node_modules/micromatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.4.tgz",
      "integrity": "sha512-pRmzw/XUcwXGpD9aI9q/0XOwLNygjETJ8y0ao0wdqprrzDa4YnxLcz7fQRZr8voh8V10kGhABbNcHVk5wHgWwg==",
      "dev": true,
      "dependencies": {
        "braces": "^3.0.1",
        "picomatch": "^2.2.3"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/fast-glob/node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/fast-json-patch": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/fast-json-patch/-/fast-json-patch-2.2.1.tgz",
      "integrity": "sha512-4j5uBaTnsYAV5ebkidvxiLUYOwjQ+JSFljeqfTxCrH9bDmlCQaOJFS84oDJ2rAXZq2yskmk3ORfoP9DCwqFNig==",
      "dev": true,
      "dependencies": {
        "fast-deep-equal": "^2.0.1"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.0.0.tgz",
      "integrity": "sha1-1RQsDK7msRifh9OnYREGT4bIu/I=",
      "dev": true
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
      "dev": true
    },
    "node_modules/fast-redact": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/fast-redact/-/fast-redact-3.0.1.tgz",
      "integrity": "sha512-kYpn4Y/valC9MdrISg47tZOpYBNoTXKgT9GYXFpHN/jYFs+lFkPoisY+LcBODdKVMY96ATzvzsWv+ES/4Kmufw==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/fast-safe-stringify": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/fast-safe-stringify/-/fast-safe-stringify-2.0.7.tgz",
      "integrity": "sha512-Utm6CdzT+6xsDk2m8S6uL8VHxNwI6Jub+e9NYTcAms28T84pTa25GJQV9j0CY0N1rM8hK4x6grpF2BQf+2qwVA==",
      "dev": true
    },
    "node_modules/fastest-levenshtein": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/fastest-levenshtein/-/fastest-levenshtein-1.0.12.tgz",
      "integrity": "sha512-On2N+BpYJ15xIC974QNVuYGMOlEVt4s0EOI3wwMqOmK1fdDY+FN/zltPV8vosq4ad4c/gJ1KHScUn/6AWIgiow==",
      "dev": true
    },
    "node_modules/fastq": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.11.0.tgz",
      "integrity": "sha512-7Eczs8gIPDrVzT+EksYBcupqMyxSHXXrHOLRRxU2/DicV8789MRBRR8+Hc2uWzUupOs4YS4JzBmBxjjCVBxD/g==",
      "dev": true,
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fd-slicer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.1.0.tgz",
      "integrity": "sha1-JcfInLH5B3+IkbvmHY85Dq4lbx4=",
      "dev": true,
      "dependencies": {
        "pend": "~1.2.0"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/file-type": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-11.1.0.tgz",
      "integrity": "sha512-rM0UO7Qm9K7TWTtA6AShI/t7H5BPjDeGVDaNyg9BjHAj3PysKy7+8C8D137R88jnR3rFJZQB/tFgydl5sN5m7g==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/filename-reserved-regex": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/filename-reserved-regex/-/filename-reserved-regex-2.0.0.tgz",
      "integrity": "sha1-q/c9+rc10EVECr/qLZHzieu/oik=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/filenamify": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/filenamify/-/filenamify-3.0.0.tgz",
      "integrity": "sha512-5EFZ//MsvJgXjBAFJ+Bh2YaCTRF/VP1YOmGrgt+KJ4SFRLjI87EIdwLLuT6wQX0I4F9W41xutobzczjsOKlI/g==",
      "dev": true,
      "dependencies": {
        "filename-reserved-regex": "^2.0.0",
        "strip-outer": "^1.0.0",
        "trim-repeated": "^1.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/fill-range": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fill-range/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/finalhandler": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
      "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "statuses": "~1.5.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/finalhandler/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/find-cache-dir": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
      "integrity": "sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==",
      "dev": true,
      "dependencies": {
        "commondir": "^1.0.1",
        "make-dir": "^2.0.0",
        "pkg-dir": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/find-cache-dir/node_modules/make-dir": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
      "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
      "dev": true,
      "dependencies": {
        "pify": "^4.0.1",
        "semver": "^5.6.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/find-cache-dir/node_modules/pify": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
      "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/find-cache-dir/node_modules/semver": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.0.tgz",
      "integrity": "sha512-Ya52jSX2u7QKghxeoFGpLwCtGlt7j0oY9DYb5apt9nPlJ42ID+ulTXESnt/qAQcoSERyZ5sl3LDIOw0nAn/5DA==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/find-up": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
      "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
      "dev": true,
      "dependencies": {
        "locate-path": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/first-chunk-stream": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/first-chunk-stream/-/first-chunk-stream-3.0.0.tgz",
      "integrity": "sha512-LNRvR4hr/S8cXXkIY5pTgVP7L3tq6LlYWcg9nWBuW7o1NMxKZo6oOVa/6GIekMGI0Iw7uC+HWimMe9u/VAeKqw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/flat": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/flat/-/flat-5.0.2.tgz",
      "integrity": "sha512-b6suED+5/3rTpUBdG1gupIl8MPFCAMA0QXwmljLhvCUKcUvdE4gWky9zpuGCcXHOsz4J9wPGNWq6OKpmIzz3hQ==",
      "dev": true,
      "bin": {
        "flat": "cli.js"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.0.4.tgz",
      "integrity": "sha512-dm9s5Pw7Jc0GvMYbshN6zchCA9RgQlzzEZX3vylR9IqFfS8XciblUXOKfW6SiuJ0e13eDYZoZV5wdrev7P3Nwg==",
      "dev": true,
      "dependencies": {
        "flatted": "^3.1.0",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatstr": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/flatstr/-/flatstr-1.0.12.tgz",
      "integrity": "sha512-4zPxDyhCyiN2wIAtSLI6gc82/EjqZc1onI4Mz/l0pWrAlsSfYH/2ZIcU+e3oA2wDwbzIWNKwa23F8rh6+DRWkw==",
      "dev": true
    },
    "node_modules/flatted": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.1.1.tgz",
      "integrity": "sha512-zAoAQiudy+r5SvnSw3KJy5os/oRJYHzrzja/tBDqrZtNhUw8bt6y8OBzMWcjWr+8liV8Eb6yOhw8WZ7VFZ5ZzA==",
      "dev": true
    },
    "node_modules/fluent-syntax": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/fluent-syntax/-/fluent-syntax-0.13.0.tgz",
      "integrity": "sha512-0Bk1AsliuYB550zr4JV9AYhsETsD3ELXUQzdXGJfIc1Ni/ukAfBdQInDhVMYJUaT2QxoamNslwkYF7MlOrPUwg==",
      "dev": true,
      "engines": {
        "node": ">=8.9.0"
      }
    },
    "node_modules/for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/foreground-child": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-2.0.0.tgz",
      "integrity": "sha512-dCIq9FpEcyQyXKCkyzmlPTFNgrCzPudOe+mhvJU5zAtlBnGVy2yKxtfsxK2tQBThwq225jcvBjpw1Gr40uzZCA==",
      "dev": true,
      "dependencies": {
        "cross-spawn": "^7.0.0",
        "signal-exit": "^3.0.2"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/forever-agent": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
      "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/form-data": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
      "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
      "dev": true,
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.6",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 0.12"
      }
    },
    "node_modules/forwarded": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
      "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ=",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "map-cache": "^0.2.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/from2": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/from2/-/from2-2.3.0.tgz",
      "integrity": "sha1-i/tVAr3kpNNs/e6gB/zKIdfjgq8=",
      "dev": true,
      "dependencies": {
        "inherits": "^2.0.1",
        "readable-stream": "^2.0.0"
      }
    },
    "node_modules/fromentries": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/fromentries/-/fromentries-1.3.2.tgz",
      "integrity": "sha512-cHEpEQHUg0f8XdtZCc2ZAhrHzKzT0MrFUTcvx+hfxYu7rGMDc5SKoXFh+n4YigxsHXRzc6OrCshdR1bWH6HHyg==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/fs-constants": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz",
      "integrity": "sha512-y6OAwoSIf7FyjMIv94u+b5rdheZEjzR63GTyZJm5qh4Bi+2YgwLCcI/fPFZkL5PSixOt6ZNKm+w+Hfp/Bciwow==",
      "dev": true
    },
    "node_modules/fs-extra": {
      "version": "10.0.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.0.0.tgz",
      "integrity": "sha512-C5owb14u9eJwizKGdchcDUQeFtlSHHthBk8pbX9Vc1PFZrLombudjDnNns88aYslCyF6IY5SUw3Roz6xShcEIQ==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/fs-readdir-recursive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fs-readdir-recursive/-/fs-readdir-recursive-1.1.0.tgz",
      "integrity": "sha512-GNanXlVr2pf02+sPN40XN8HG+ePaNcvM0q5mZBd668Obwb0yD5GiUbZOFgwn8kGMY6I3mdyDJzieUy3PTYyTRA==",
      "dev": true
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
      "dev": true
    },
    "node_modules/function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
      "dev": true
    },
    "node_modules/functional-red-black-tree": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz",
      "integrity": "sha1-GwqzvVU7Kg1jmdKcDj6gslIHgyc=",
      "dev": true
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "dev": true,
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-func-name": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/get-func-name/-/get-func-name-2.0.0.tgz",
      "integrity": "sha1-6td0q+5y4gQJQzoGY2YCPdaIekE=",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.0.2.tgz",
      "integrity": "sha512-aeX0vrFm21ILl3+JpFFRNe9aUvp6VFZb2/CTbgLb8j75kOhvoNYjt9d8KA/tJG4gSo8nzEDedRl0h7vDmBYRVg==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1"
      }
    },
    "node_modules/get-package-type": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
      "integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==",
      "dev": true,
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/get-stream": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz",
      "integrity": "sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/getpass": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
      "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
      "dev": true,
      "dependencies": {
        "assert-plus": "^1.0.0"
      }
    },
    "node_modules/glob": {
      "version": "7.1.6",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
      "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
      "dev": true,
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
      "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-glob": "^3.1.0",
        "path-dirname": "^1.0.0"
      }
    },
    "node_modules/glob-parent/node_modules/is-glob": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
      "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-extglob": "^2.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/glob-to-regexp": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.4.1.tgz",
      "integrity": "sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==",
      "dev": true
    },
    "node_modules/globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/globby": {
      "version": "11.0.3",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.0.3.tgz",
      "integrity": "sha512-ffdmosjA807y7+lA1NM0jELARVmYul/715xiILEjo3hBLPTcirgQNnXECn5g3mtR8TOLCVbkfua1Hpen25/Xcg==",
      "dev": true,
      "dependencies": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.1.1",
        "ignore": "^5.1.4",
        "merge2": "^1.3.0",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globby/node_modules/ignore": {
      "version": "5.1.8",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.1.8.tgz",
      "integrity": "sha512-BMpfD7PpiETpBl/A6S498BaIJ6Y/ABT93ETbby2fP00v4EbvPBXWEoaR1UBPKs3iR53pJY7EtZk5KACI57i1Uw==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/globby/node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/got": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/got/-/got-8.3.2.tgz",
      "integrity": "sha512-qjUJ5U/hawxosMryILofZCkm3C84PLJS/0grRIpjAwu+Lkxxj5cxeCU25BG0/3mDSpXKTyZr8oh8wIgLaH0QCw==",
      "dev": true,
      "dependencies": {
        "@sindresorhus/is": "^0.7.0",
        "cacheable-request": "^2.1.1",
        "decompress-response": "^3.3.0",
        "duplexer3": "^0.1.4",
        "get-stream": "^3.0.0",
        "into-stream": "^3.1.0",
        "is-retry-allowed": "^1.1.0",
        "isurl": "^1.0.0-alpha5",
        "lowercase-keys": "^1.0.0",
        "mimic-response": "^1.0.0",
        "p-cancelable": "^0.4.0",
        "p-timeout": "^2.0.1",
        "pify": "^3.0.0",
        "safe-buffer": "^5.1.1",
        "timed-out": "^4.0.1",
        "url-parse-lax": "^3.0.0",
        "url-to-options": "^1.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/got/node_modules/pify": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
      "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.4.tgz",
      "integrity": "sha512-WjKPNJF79dtJAVniUlGGWHYGz2jWxT6VhN/4m1NdkbZ2nOsEF+cI1Edgql5zCRhs/VsQYRvrXctxktVXZUkixw==",
      "dev": true
    },
    "node_modules/graceful-readlink": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/graceful-readlink/-/graceful-readlink-1.0.1.tgz",
      "integrity": "sha1-TK+tdrxi8C+gObL5Tpo906ORpyU=",
      "dev": true
    },
    "node_modules/growl": {
      "version": "1.10.5",
      "resolved": "https://registry.npmjs.org/growl/-/growl-1.10.5.tgz",
      "integrity": "sha512-qBr4OuELkhPenW6goKVXiv47US3clb3/IbuWF9KNKEijAy9oeHxU9IgzjvJhHkUzhaj7rOUD7+YGWqUjLp5oSA==",
      "dev": true,
      "engines": {
        "node": ">=4.x"
      }
    },
    "node_modules/har-schema": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
      "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/har-validator": {
      "version": "5.1.5",
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
      "integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
      "deprecated": "this library is no longer supported",
      "dev": true,
      "dependencies": {
        "ajv": "^6.12.3",
        "har-schema": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/has-symbol-support-x": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/has-symbol-support-x/-/has-symbol-support-x-1.4.2.tgz",
      "integrity": "sha512-3ToOva++HaW+eCpgqZrCfN51IPB+7bJNVT6CUATzueB5Heb8o6Nam0V3HG5dlDvZU1Gn5QLcbahiKw/XVk5JJw==",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.1.tgz",
      "integrity": "sha512-PLcsoqu++dmEIZB+6totNFKq/7Do+Z0u4oT0zKOJNl3lYK6vGwwu2hjHs+68OEZbTjiUE9bgOABXbP/GvrS0Kg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/has-to-string-tag-x": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/has-to-string-tag-x/-/has-to-string-tag-x-1.4.1.tgz",
      "integrity": "sha512-vdbKfmw+3LoOYVr+mtxHaX5a96+0f3DljYd8JOqvOLsf5mw2Otda2qCDT9qRqLAhrjyQ0h7ual5nOiASpsGNFw==",
      "dev": true,
      "dependencies": {
        "has-symbol-support-x": "^1.4.1"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values/node_modules/kind-of": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
      "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/hasha": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/hasha/-/hasha-5.2.2.tgz",
      "integrity": "sha512-Hrp5vIK/xr5SkeN2onO32H0MgNZ0f17HRNH39WfL0SYUNOTZ5Lz1TJ8Pajo/87dYGEFlLMm7mIc/k/s6Bvz9HQ==",
      "dev": true,
      "dependencies": {
        "is-stream": "^2.0.0",
        "type-fest": "^0.8.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/hasha/node_modules/is-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
      "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/he": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
      "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
      "dev": true,
      "bin": {
        "he": "bin/he"
      }
    },
    "node_modules/html-escaper": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
      "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==",
      "dev": true
    },
    "node_modules/htmlparser2": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-6.1.0.tgz",
      "integrity": "sha512-gyyPk6rgonLFEDGoeRgQNaEUvdJ4ktTmmUh/h2t7s+M8oPpIPxgNACWa+6ESR57kXstwqPiCut0V8NRpcwgU7A==",
      "dev": true,
      "funding": [
        "https://github.com/fb55/htmlparser2?sponsor=1",
        {
          "type": "github",
          "url": "https://github.com/sponsors/fb55"
        }
      ],
      "dependencies": {
        "domelementtype": "^2.0.1",
        "domhandler": "^4.0.0",
        "domutils": "^2.5.2",
        "entities": "^2.0.0"
      }
    },
    "node_modules/http-cache-semantics": {
      "version": "3.8.1",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-3.8.1.tgz",
      "integrity": "sha512-5ai2iksyV8ZXmnZhHH4rWPoxxistEexSi5936zIQ1bnNTW5VnA85B6P/VpXiRM017IgRvb2kKo1a//y+0wSp3w==",
      "dev": true
    },
    "node_modules/http-errors": {
      "version": "1.7.2",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
      "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "depd": "~1.1.2",
        "inherits": "2.0.3",
        "setprototypeof": "1.1.1",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/http-signature": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
      "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
      "dev": true,
      "dependencies": {
        "assert-plus": "^1.0.0",
        "jsprim": "^1.2.2",
        "sshpk": "^1.7.0"
      },
      "engines": {
        "node": ">=0.8",
        "npm": ">=1.3.7"
      }
    },
    "node_modules/human-signals": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-1.1.1.tgz",
      "integrity": "sha512-SEQu7vl8KjNL2eoGBLF3+wAjpsNfA9XMlXAYj/3EdaNfAlxKthD1xjEQfGOUhllCGGJVNY34bRr6lPINhNjyZw==",
      "dev": true,
      "engines": {
        "node": ">=8.12.0"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ieee754": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.1.12.tgz",
      "integrity": "sha512-GguP+DRY+pJ3soyIiGPTvdiVXjZ+DbXOxGpXn3eMvNW4x4irjqXm4wHKscC+TfxSJ0yw/S1F24tqdMNsMZTiLA==",
      "dev": true
    },
    "node_modules/ignore": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz",
      "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/image-size": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/image-size/-/image-size-1.0.0.tgz",
      "integrity": "sha512-JLJ6OwBfO1KcA+TvJT+v8gbE6iWbj24LyDNFgFEN0lzegn6cC6a/p3NIDaepMsJjQjlUWqIC7wJv8lBFxPNjcw==",
      "dev": true,
      "dependencies": {
        "queue": "6.0.2"
      },
      "bin": {
        "image-size": "bin/image-size.js"
      },
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
      "dev": true,
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/import-local": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/import-local/-/import-local-3.0.2.tgz",
      "integrity": "sha512-vjL3+w0oulAVZ0hBHnxa/Nm5TAurf9YLQJDhqRZyqb+VKGOB6LU8t9H1Nr5CIo16vh9XfJTOoHwU0B71S557gA==",
      "dev": true,
      "dependencies": {
        "pkg-dir": "^4.2.0",
        "resolve-cwd": "^3.0.0"
      },
      "bin": {
        "import-local-fixture": "fixtures/cli.js"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/import-local/node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dev": true,
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/import-local/node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dev": true,
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/import-local/node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dev": true,
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/import-local/node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/import-local/node_modules/pkg-dir": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
      "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
      "dev": true,
      "dependencies": {
        "find-up": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
      "dev": true,
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/indent-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
      "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "dev": true,
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
      "dev": true
    },
    "node_modules/interpret": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/interpret/-/interpret-2.2.0.tgz",
      "integrity": "sha512-Ju0Bz/cEia55xDwUWEa8+olFpCiQoypjnQySseKtmjNrnps3P+xfpUmGr90T7yjlVJmOtybRvPXhKMbHr+fWnw==",
      "dev": true,
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/into-stream": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/into-stream/-/into-stream-3.1.0.tgz",
      "integrity": "sha1-lvsKk2wSur1v8XUqF9BWFqvQlMY=",
      "dev": true,
      "dependencies": {
        "from2": "^2.1.1",
        "p-is-promise": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-accessor-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-arguments": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.1.0.tgz",
      "integrity": "sha512-1Ij4lOMPl/xB5kBDn7I+b2ttPMKa8szhEIrXDuXQD/oe3HJLTLhqhgGspwgyGd6MOywBUqVvYicF72lkgDnIHg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-binary-path": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
      "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "binary-extensions": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
      "dev": true,
      "optional": true
    },
    "node_modules/is-callable": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.2.tgz",
      "integrity": "sha512-dnMqspv5nU3LoewK2N/y7KLtxtakvTuaCsU9FU50/QDmdbHNy/4/JuRtMHqRU22o3q+W89YQndQEeCVwK+3qrA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.4.0.tgz",
      "integrity": "sha512-6A2fkfq1rfeQZjxrZJGerpLCTHRNEBiSgnu0+obeJpEPZRUooHgsizvzv0ZjJwOz3iWIHdJtVWJ/tmPr3D21/A==",
      "dev": true,
      "dependencies": {
        "has": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-data-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz",
      "integrity": "sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-descriptor/node_modules/kind-of": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "dev": true,
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-mergeable-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-mergeable-object/-/is-mergeable-object-1.1.1.tgz",
      "integrity": "sha512-CPduJfuGg8h8vW74WOxHtHmtQutyQBzR+3MjQ6iDHIYdbOnm1YC7jv43SqCoU8OPGTJD4nibmiryA4kmogbGrA==",
      "dev": true
    },
    "node_modules/is-natural-number": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-natural-number/-/is-natural-number-4.0.1.tgz",
      "integrity": "sha1-q5124dtM7VHjXeDHLr7PCfc0zeg=",
      "dev": true
    },
    "node_modules/is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-object": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-object/-/is-object-1.0.1.tgz",
      "integrity": "sha1-iVJojF7C/9awPsyF52ngKQMINHA=",
      "dev": true
    },
    "node_modules/is-plain-obj": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
      "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dev": true,
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-regex": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.1.tgz",
      "integrity": "sha512-1+QkEcxiLlB7VEyFtyBg94e08OAsvq7FUBgApTq/w2ymCLyKJgDPsybBENVtA7XCQEgEXxKPonG+mvYRxh/LIg==",
      "dev": true,
      "dependencies": {
        "has-symbols": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-retry-allowed": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-retry-allowed/-/is-retry-allowed-1.1.0.tgz",
      "integrity": "sha1-EaBgVotnM5REAz0BJaYaINVk+zQ=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-stream": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
      "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz",
      "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
      "dev": true,
      "dependencies": {
        "has-symbols": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
      "dev": true
    },
    "node_modules/is-utf8": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
      "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",
      "dev": true
    },
    "node_modules/is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
      "dev": true
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
      "dev": true
    },
    "node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/isstream": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
      "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
      "dev": true
    },
    "node_modules/istanbul-lib-coverage": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.0.0.tgz",
      "integrity": "sha512-UiUIqxMgRDET6eR+o5HbfRYP1l0hqkWOs7vNxC/mggutCMUIhWMm8gAHb8tHlyfD3/l6rlgNA5cKdDzEAf6hEg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-hook": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-hook/-/istanbul-lib-hook-3.0.0.tgz",
      "integrity": "sha512-Pt/uge1Q9s+5VAZ+pCo16TYMWPBIl+oaNIjgLQxcX0itS6ueeaA+pEfThZpH8WxhFgCiEb8sAJY6MdUKgiIWaQ==",
      "dev": true,
      "dependencies": {
        "append-transform": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-instrument": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-4.0.3.tgz",
      "integrity": "sha512-BXgQl9kf4WTCPCCpmFGoJkz/+uhvm7h7PFKUYxh7qarQd3ER33vHG//qaE8eN25l07YqZPpHXU9I09l/RD5aGQ==",
      "dev": true,
      "dependencies": {
        "@babel/core": "^7.7.5",
        "@istanbuljs/schema": "^0.1.2",
        "istanbul-lib-coverage": "^3.0.0",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-processinfo": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/istanbul-lib-processinfo/-/istanbul-lib-processinfo-2.0.2.tgz",
      "integrity": "sha512-kOwpa7z9hme+IBPZMzQ5vdQj8srYgAtaRqeI48NGmAQ+/5yKiHLV0QbYqQpxsdEF0+w14SoB8YbnHKcXE2KnYw==",
      "dev": true,
      "dependencies": {
        "archy": "^1.0.0",
        "cross-spawn": "^7.0.0",
        "istanbul-lib-coverage": "^3.0.0-alpha.1",
        "make-dir": "^3.0.0",
        "p-map": "^3.0.0",
        "rimraf": "^3.0.0",
        "uuid": "^3.3.3"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-processinfo/node_modules/make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "dev": true,
      "dependencies": {
        "semver": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/istanbul-lib-report": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
      "integrity": "sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw==",
      "dev": true,
      "dependencies": {
        "istanbul-lib-coverage": "^3.0.0",
        "make-dir": "^3.0.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-report/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-report/node_modules/make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "dev": true,
      "dependencies": {
        "semver": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/istanbul-lib-report/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-source-maps": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.0.tgz",
      "integrity": "sha512-c16LpFRkR8vQXyHZ5nLpY35JZtzj1PQY1iZmesUbf1FZHbIupcWfjgOXBY9YHkLEQ6puz1u4Dgj6qmU/DisrZg==",
      "dev": true,
      "dependencies": {
        "debug": "^4.1.1",
        "istanbul-lib-coverage": "^3.0.0",
        "source-map": "^0.6.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-source-maps/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/istanbul-reports": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.0.2.tgz",
      "integrity": "sha512-9tZvz7AiR3PEDNGiV9vIouQ/EAcqMXFmkcA1CDFTwOB98OZVDL0PH9glHotf5Ugp6GCOTypfzGWI/OqjWNCRUw==",
      "dev": true,
      "dependencies": {
        "html-escaper": "^2.0.0",
        "istanbul-lib-report": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/isurl": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isurl/-/isurl-1.0.0.tgz",
      "integrity": "sha512-1P/yWsxPlDtn7QeRD+ULKQPaIaN6yF368GZ2vDfv0AL0NwpStafjWCDDdn0k8wgFMWpVAqG7oJhxHnlud42i9w==",
      "dev": true,
      "dependencies": {
        "has-to-string-tag-x": "^1.2.0",
        "is-object": "^1.0.1"
      },
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/jed": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/jed/-/jed-1.1.1.tgz",
      "integrity": "sha1-elSbvZ/+FYWwzQoZHiAwVb7ldLQ=",
      "dev": true
    },
    "node_modules/jest-worker": {
      "version": "26.6.2",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-26.6.2.tgz",
      "integrity": "sha512-KWYVV1c4i+jbMpaBC+U++4Va0cp8OisU185o73T1vo99hqi7w8tSJfUXYswwqqrjzwxa6KpRK54WhPvwf5w6PQ==",
      "dev": true,
      "dependencies": {
        "@types/node": "*",
        "merge-stream": "^2.0.0",
        "supports-color": "^7.0.0"
      },
      "engines": {
        "node": ">= 10.13.0"
      }
    },
    "node_modules/jest-worker/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jest-worker/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true
    },
    "node_modules/js-yaml": {
      "version": "3.13.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.13.1.tgz",
      "integrity": "sha512-YfbcO7jXDdyj0DGxYVSlSeQNHbD7XPWvrVWeVUujrQEoZzWJIRrCPoyk6kL6IAjAG2IolMK4T0hNUe0HOUs5Jw==",
      "dev": true,
      "dependencies": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsbn": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
      "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
      "dev": true
    },
    "node_modules/jsesc": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
      "dev": true,
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
      "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg=",
      "dev": true
    },
    "node_modules/json-merge-patch": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/json-merge-patch/-/json-merge-patch-0.2.3.tgz",
      "integrity": "sha1-+ixrWvh9p3uuKWalidUuI+2B/kA=",
      "dev": true,
      "dependencies": {
        "deep-equal": "^1.0.0"
      }
    },
    "node_modules/json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
      "dev": true
    },
    "node_modules/json-schema": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
      "dev": true
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE=",
      "dev": true
    },
    "node_modules/json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
      "dev": true
    },
    "node_modules/json5": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.1.3.tgz",
      "integrity": "sha512-KXPvOm8K9IJKFM0bmdn8QXh7udDh1g/giieX0NLCaMnb4hEiVFqnop2ImTXCc5e0/oHz3LTqmHGtExn5hfMkOA==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dev": true,
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/jsprim": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
      "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
      "dev": true,
      "engines": [
        "node >=0.6.0"
      ],
      "dependencies": {
        "assert-plus": "1.0.0",
        "extsprintf": "1.3.0",
        "json-schema": "0.2.3",
        "verror": "1.10.0"
      }
    },
    "node_modules/keyv": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.0.0.tgz",
      "integrity": "sha512-eguHnq22OE3uVoSYG0LVWNP+4ppamWr9+zWBe1bsNcovIMy6huUJFPgy4mGwCd/rnl3vOLGW1MTlu4c57CT1xA==",
      "dev": true,
      "dependencies": {
        "json-buffer": "3.0.0"
      }
    },
    "node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/loader-runner": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-4.2.0.tgz",
      "integrity": "sha512-92+huvxMvYlMzMt0iIOukcwYBFpkYJdpl2xsZ7LrlayO7E8SOv+JJUEK17B/dJIHAOLMfh2dZZ/Y18WgmGtYNw==",
      "dev": true,
      "engines": {
        "node": ">=6.11.5"
      }
    },
    "node_modules/loader-utils": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.4.0.tgz",
      "integrity": "sha512-qH0WSMBtn/oHuwjy/NucEgbx5dbxxnxup9s4PVXJUDHZBQY+s0NWA9rJf53RBnQZxfch7euUui7hpoAPvALZdA==",
      "dev": true,
      "dependencies": {
        "big.js": "^5.2.2",
        "emojis-list": "^3.0.0",
        "json5": "^1.0.1"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/loader-utils/node_modules/json5": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
      "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/locate-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
      "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
      "dev": true,
      "dependencies": {
        "p-locate": "^3.0.0",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
      "dev": true
    },
    "node_modules/lodash.debounce": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz",
      "integrity": "sha1-gteb/zCmfEAF/9XiUVMArZyk168=",
      "dev": true
    },
    "node_modules/lodash.flattendeep": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/lodash.flattendeep/-/lodash.flattendeep-4.4.0.tgz",
      "integrity": "sha1-+wMJF/hqMTTlvJvsDWngAT3f7bI=",
      "dev": true
    },
    "node_modules/log-symbols": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.0.0.tgz",
      "integrity": "sha512-FN8JBzLx6CzeMrB0tg6pqlGU1wCrXW+ZXGH481kfsBqer0hToTIiHdjH4Mq8xJUbvATujKCvaREGWpGUionraA==",
      "dev": true,
      "dependencies": {
        "chalk": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/log-symbols/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/log-symbols/node_modules/chalk": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.1.tgz",
      "integrity": "sha512-diHzdDKxcU+bAsUboHLPEDQiw0qEe0qd7SYUn3HgcFlWgbDcfLGswOHYeGrHKzG9z6UYf01d9VFMfZxPM1xZSg==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/log-symbols/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/log-symbols/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "node_modules/log-symbols/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/log-symbols/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/lowercase-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
      "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "dev": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/make-dir": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-1.3.0.tgz",
      "integrity": "sha512-2w31R7SJtieJJnQtGc7RVL2StM2vGYVfqUOvUDxH6bC6aJTxPxTF0GnIgCyu7tjockiUWAYQRbxa7vKn34s5sQ==",
      "dev": true,
      "dependencies": {
        "pify": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/make-dir/node_modules/pify": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
      "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/map-age-cleaner": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/map-age-cleaner/-/map-age-cleaner-0.1.3.tgz",
      "integrity": "sha512-bJzx6nMoP6PDLPBFmg7+xRKeFZvFboMrGlxmNj9ClvX53KrmvM5bXFXEWjbz4cz1AFn+jWJ9z/DJSz7hrs0w3w==",
      "dev": true,
      "dependencies": {
        "p-defer": "^1.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "object-visit": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/marked": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/marked/-/marked-2.0.4.tgz",
      "integrity": "sha512-MIL0xKRDQM3DE7dJr/wa6JV0EmK9yZ3cwuTc2bu66FNm/tmEMm9cJCgJZpt9R+K1T+pB2iBNV55wvnwSd345zg==",
      "dev": true,
      "bin": {
        "marked": "bin/marked"
      },
      "engines": {
        "node": ">= 8.16.2"
      }
    },
    "node_modules/media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g=",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E=",
      "dev": true,
      "peer": true
    },
    "node_modules/merge-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
      "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
      "dev": true
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4=",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/micromatch": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
      "dev": true,
      "peer": true,
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.36.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.36.0.tgz",
      "integrity": "sha512-L+xvyD9MkoYMXb1jAmzI/lWYAxAMCPvIBSWur0PZ5nOf5euahRLVqH//FKW9mWp2lkqUgYiXPgkzfMUFi4zVDw==",
      "dev": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.28",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.28.tgz",
      "integrity": "sha512-0TO2yJ5YHYr7M2zzT7gDU1tbwHxEUWBCLt0lscSNpcdAfFyJOVEpRYNS7EXVcTLNj/25QO8gulHC5JtTzSE2UQ==",
      "dev": true,
      "dependencies": {
        "mime-db": "1.45.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types/node_modules/mime-db": {
      "version": "1.45.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.45.0.tgz",
      "integrity": "sha512-CkqLUxUk15hofLoLyljJSrukZi8mAtgd+yE5uO4tqRZsdsAJKv0O+rFMhVDRJgozy+yG6md5KwuXhD4ocIoP+w==",
      "dev": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mimic-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/mimic-response": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
      "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
      "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw==",
      "dev": true
    },
    "node_modules/mixin-deep": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/mixin-deep/node_modules/is-extendable": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
      "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-plain-object": "^2.0.4"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/mocha": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/mocha/-/mocha-8.4.0.tgz",
      "integrity": "sha512-hJaO0mwDXmZS4ghXsvPVriOhsxQ7ofcpQdm8dE+jISUOKopitvnXFQmpRR7jd2K6VBG6E26gU3IAbXXGIbu4sQ==",
      "dev": true,
      "dependencies": {
        "@ungap/promise-all-settled": "1.1.2",
        "ansi-colors": "4.1.1",
        "browser-stdout": "1.3.1",
        "chokidar": "3.5.1",
        "debug": "4.3.1",
        "diff": "5.0.0",
        "escape-string-regexp": "4.0.0",
        "find-up": "5.0.0",
        "glob": "7.1.6",
        "growl": "1.10.5",
        "he": "1.2.0",
        "js-yaml": "4.0.0",
        "log-symbols": "4.0.0",
        "minimatch": "3.0.4",
        "ms": "2.1.3",
        "nanoid": "3.1.20",
        "serialize-javascript": "5.0.1",
        "strip-json-comments": "3.1.1",
        "supports-color": "8.1.1",
        "which": "2.0.2",
        "wide-align": "1.1.3",
        "workerpool": "6.1.0",
        "yargs": "16.2.0",
        "yargs-parser": "20.2.4",
        "yargs-unparser": "2.0.0"
      },
      "bin": {
        "_mocha": "bin/_mocha",
        "mocha": "bin/mocha"
      },
      "engines": {
        "node": ">= 10.12.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mochajs"
      }
    },
    "node_modules/mocha/node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true
    },
    "node_modules/mocha/node_modules/debug": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
      "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
      "dev": true,
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/mocha/node_modules/debug/node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
      "dev": true
    },
    "node_modules/mocha/node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mocha/node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mocha/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mocha/node_modules/js-yaml": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.0.0.tgz",
      "integrity": "sha512-pqon0s+4ScYUvX30wxQi3PogGFAlUyH0awepWvwkj4jD4v+ova3RiYw8bmA6x2rDrEaj8i/oWKoRxpVNW+Re8Q==",
      "dev": true,
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/mocha/node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mocha/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true
    },
    "node_modules/mocha/node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mocha/node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mocha/node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mocha/node_modules/supports-color": {
      "version": "8.1.1",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
      "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
      "dev": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/supports-color?sponsor=1"
      }
    },
    "node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
      "dev": true
    },
    "node_modules/nanoid": {
      "version": "3.1.20",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.1.20.tgz",
      "integrity": "sha512-a1cQNyczgKbLX9jwbS/+d7W8fX/RfgYR7lVWwWOGIPNgK2m0MWvrGF6/m4kk6U3QcFMnZf3RIhL0v2Jgh/0Uxw==",
      "dev": true,
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/nanomatch": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
      "dev": true
    },
    "node_modules/natural-compare-lite": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare-lite/-/natural-compare-lite-1.4.0.tgz",
      "integrity": "sha1-F7CVgZiJef3a/gIB6TG6kzyWy7Q=",
      "dev": true
    },
    "node_modules/negotiator": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
      "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw==",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
      "dev": true
    },
    "node_modules/node-modules-regexp": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
      "integrity": "sha1-jZ2+KJZKSsVxLpExZCEHxx6Q7EA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/node-preload": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/node-preload/-/node-preload-0.2.1.tgz",
      "integrity": "sha512-RM5oyBy45cLEoHqCeh+MNuFAxO0vTFBLskvQbOKnEE7YTTSN4tbN8QWDIPQ6L+WvKsB/qLEGpYe2ZZ9d4W9OIQ==",
      "dev": true,
      "dependencies": {
        "process-on-spawn": "^1.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/node-releases": {
      "version": "1.1.72",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.72.tgz",
      "integrity": "sha512-LLUo+PpH3dU6XizX3iVoubUNheF/owjXCZZ5yACDxNnPtgFuludV1ZL3ayK1kVep42Rmm0+R9/Y60NQbZ2bifw==",
      "dev": true
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-url": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-2.0.1.tgz",
      "integrity": "sha512-D6MUW4K/VzoJ4rJ01JFKxDrtY1v9wrgzCX5f2qj/lzH1m/lW6MhUZFKerVsnyjOhOsYzI9Kqqak+10l4LvLpMw==",
      "dev": true,
      "dependencies": {
        "prepend-http": "^2.0.0",
        "query-string": "^5.0.1",
        "sort-keys": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/normalize-url/node_modules/sort-keys": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-2.0.0.tgz",
      "integrity": "sha1-ZYU1WEhh7JfXMNbPQYIuH1ZoQSg=",
      "dev": true,
      "dependencies": {
        "is-plain-obj": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-path": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
      "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
      "dev": true,
      "dependencies": {
        "path-key": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nth-check": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.0.0.tgz",
      "integrity": "sha512-i4sc/Kj8htBrAiH1viZ0TgU8Y5XqCaV/FziYK6TBczxmeKm3AEFWqqF3195yKudrarqy7Zu80Ra5dobFjn9X/Q==",
      "dev": true,
      "dependencies": {
        "boolbase": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/fb55/nth-check?sponsor=1"
      }
    },
    "node_modules/nyc": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/nyc/-/nyc-15.1.0.tgz",
      "integrity": "sha512-jMW04n9SxKdKi1ZMGhvUTHBN0EICCRkHemEoE5jm6mTYcqcdas0ATzgUgejlQUHMvpnOZqGB5Xxsv9KxJW1j8A==",
      "dev": true,
      "dependencies": {
        "@istanbuljs/load-nyc-config": "^1.0.0",
        "@istanbuljs/schema": "^0.1.2",
        "caching-transform": "^4.0.0",
        "convert-source-map": "^1.7.0",
        "decamelize": "^1.2.0",
        "find-cache-dir": "^3.2.0",
        "find-up": "^4.1.0",
        "foreground-child": "^2.0.0",
        "get-package-type": "^0.1.0",
        "glob": "^7.1.6",
        "istanbul-lib-coverage": "^3.0.0",
        "istanbul-lib-hook": "^3.0.0",
        "istanbul-lib-instrument": "^4.0.0",
        "istanbul-lib-processinfo": "^2.0.2",
        "istanbul-lib-report": "^3.0.0",
        "istanbul-lib-source-maps": "^4.0.0",
        "istanbul-reports": "^3.0.2",
        "make-dir": "^3.0.0",
        "node-preload": "^0.2.1",
        "p-map": "^3.0.0",
        "process-on-spawn": "^1.0.0",
        "resolve-from": "^5.0.0",
        "rimraf": "^3.0.0",
        "signal-exit": "^3.0.2",
        "spawn-wrap": "^2.0.0",
        "test-exclude": "^6.0.0",
        "yargs": "^15.0.2"
      },
      "bin": {
        "nyc": "bin/nyc.js"
      },
      "engines": {
        "node": ">=8.9"
      }
    },
    "node_modules/nyc/node_modules/ansi-regex": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
      "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/nyc/node_modules/cliui": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz",
      "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
      "dev": true,
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^6.2.0"
      }
    },
    "node_modules/nyc/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/nyc/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "node_modules/nyc/node_modules/find-cache-dir": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.1.tgz",
      "integrity": "sha512-t2GDMt3oGC/v+BMwzmllWDuJF/xcDtE5j/fCGbqDD7OLuJkj0cfh1YSA5VKPvwMeLFLNDBkwOKZ2X85jGLVftQ==",
      "dev": true,
      "dependencies": {
        "commondir": "^1.0.1",
        "make-dir": "^3.0.2",
        "pkg-dir": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/avajs/find-cache-dir?sponsor=1"
      }
    },
    "node_modules/nyc/node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dev": true,
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dev": true,
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "dev": true,
      "dependencies": {
        "semver": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/nyc/node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dev": true,
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/pkg-dir": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
      "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
      "dev": true,
      "dependencies": {
        "find-up": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/resolve-from": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
      "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/string-width": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
      "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
      "dev": true,
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/strip-ansi": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
      "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/wrap-ansi": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
      "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/y18n": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.3.tgz",
      "integrity": "sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ==",
      "dev": true
    },
    "node_modules/nyc/node_modules/yargs": {
      "version": "15.4.1",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz",
      "integrity": "sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==",
      "dev": true,
      "dependencies": {
        "cliui": "^6.0.0",
        "decamelize": "^1.2.0",
        "find-up": "^4.1.0",
        "get-caller-file": "^2.0.1",
        "require-directory": "^2.1.1",
        "require-main-filename": "^2.0.0",
        "set-blocking": "^2.0.0",
        "string-width": "^4.2.0",
        "which-module": "^2.0.0",
        "y18n": "^4.0.0",
        "yargs-parser": "^18.1.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/yargs-parser": {
      "version": "18.1.3",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
      "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
      "dev": true,
      "dependencies": {
        "camelcase": "^5.0.0",
        "decamelize": "^1.2.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/oauth-sign": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
      "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.9.0.tgz",
      "integrity": "sha512-i3Bp9iTqwhaLZBxGkRfo5ZbE07BQRT7MGu8+nNgwW9ItGp1TzCTw2DLEoWwjClxBjOFI/hWljTAmYGCEwmtnOw==",
      "dev": true
    },
    "node_modules/object-is": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/object-is/-/object-is-1.1.4.tgz",
      "integrity": "sha512-1ZvAZ4wlF7IyPVOcE1Omikt7UpaFlOQq0HlSti+ZvDH3UiD2brwGMwDbyV43jao2bKJ+4+WdPJHSd7kgzKYVqg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "dev": true,
      "peer": true,
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "dev": true,
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "dev": true,
      "dependencies": {
        "mimic-fn": "^2.1.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.1",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.1.tgz",
      "integrity": "sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==",
      "dev": true,
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.3"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-cancelable": {
      "version": "0.4.1",
      "resolved": "http://registry.npmjs.org/p-cancelable/-/p-cancelable-0.4.1.tgz",
      "integrity": "sha512-HNa1A8LvB1kie7cERyy21VNeHb2CWJJYqyyC2o3klWFfMGlFmWv2Z7sFgZH8ZiaYL95ydToKTFVXgMV/Os0bBQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-defer": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-defer/-/p-defer-1.0.0.tgz",
      "integrity": "sha1-n26xgvbJqozXQwBKfU+WsZaw+ww=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-event": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/p-event/-/p-event-2.1.0.tgz",
      "integrity": "sha512-sDEpDVnzLGlJj3k590uUdpfEUySP5yAYlvfTCu5hTDvSTXQVecYWKcEwdO49PrZlnJ5wkfAvtawnno/jyXeqvA==",
      "dev": true,
      "dependencies": {
        "p-timeout": "^2.0.1"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
      "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-is-promise": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/p-is-promise/-/p-is-promise-1.1.0.tgz",
      "integrity": "sha1-nJRWmJ6fZYgBewQ01WCXZ1w9oF4=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-limit": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.2.0.tgz",
      "integrity": "sha512-pZbTJpoUsCzV48Mc9Nh51VbwO0X9cuPFE8gYwx9BTCt9SF8/b7Zljd2fVgOxhIF/HDTKgpVzs+GPhyKfjLLFRQ==",
      "dev": true,
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/p-locate": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
      "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
      "dev": true,
      "dependencies": {
        "p-limit": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/p-map": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-3.0.0.tgz",
      "integrity": "sha512-d3qXVTF/s+W+CdJ5A29wywV2n8CQQYahlgz2bFiA+4eVNJbHJodPZ+/gXwPGh0bOqA+j8S+6+ckmvLGPk1QpxQ==",
      "dev": true,
      "dependencies": {
        "aggregate-error": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/p-timeout": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/p-timeout/-/p-timeout-2.0.1.tgz",
      "integrity": "sha512-88em58dDVB/KzPEx1X0N3LwFfYZPyDc4B6eF38M1rk9VTZMbxXXgjugz8mmwpS9Ox4BDZ+t6t3QP5+/gazweIA==",
      "dev": true,
      "dependencies": {
        "p-finally": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/package-hash": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/package-hash/-/package-hash-4.0.0.tgz",
      "integrity": "sha512-whdkPIooSu/bASggZ96BWVvZTRMOFxnyUG5PnTSGKoJE2gd5mbVNmR2Nj20QFzxYYgAXpoqC+AiXzl+UMRh7zQ==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.15",
        "hasha": "^5.0.0",
        "lodash.flattendeep": "^4.4.0",
        "release-zalgo": "^1.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse5": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-6.0.1.tgz",
      "integrity": "sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw==",
      "dev": true
    },
    "node_modules/parse5-htmlparser2-tree-adapter": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/parse5-htmlparser2-tree-adapter/-/parse5-htmlparser2-tree-adapter-6.0.1.tgz",
      "integrity": "sha512-qPuWvbLgvDGilKc5BoicRovlT4MtYT6JfJyBOMDsKoiT+GiuP5qyrPCnR9HcPECIJJmZh5jRndyNThnhhb/vlA==",
      "dev": true,
      "dependencies": {
        "parse5": "^6.0.1"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-dirname": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
      "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA=",
      "dev": true,
      "optional": true
    },
    "node_modules/path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
      "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw==",
      "dev": true
    },
    "node_modules/path-to-regexp": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w=",
      "dev": true,
      "peer": true
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pathval": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/pathval/-/pathval-1.1.1.tgz",
      "integrity": "sha512-Dp6zGqpTdETdR63lehJYPeIOqpiNBNtc7BpWSLrOje7UaIsE5aY92r/AunQA7rsXvet3lrJ3JnZX29UPTKXyKQ==",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/pend": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/pend/-/pend-1.2.0.tgz",
      "integrity": "sha1-elfrVQpng/kRUzH89GY9XI4AelA=",
      "dev": true
    },
    "node_modules/performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
      "dev": true
    },
    "node_modules/picomatch": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.3.tgz",
      "integrity": "sha512-KpELjfwcCDUb9PeigTs2mBJzXUPzAuP2oPcA989He8Rte0+YUAjw1JVedDhuTKPkHjSYzMN3npC9luThGYEKdg==",
      "dev": true,
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pinkie": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pinkie-promise": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
      "dev": true,
      "dependencies": {
        "pinkie": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pino": {
      "version": "6.11.3",
      "resolved": "https://registry.npmjs.org/pino/-/pino-6.11.3.tgz",
      "integrity": "sha512-drPtqkkSf0ufx2gaea3TryFiBHdNIdXKf5LN0hTM82SXI4xVIve2wLwNg92e1MT6m3jASLu6VO7eGY6+mmGeyw==",
      "dev": true,
      "dependencies": {
        "fast-redact": "^3.0.0",
        "fast-safe-stringify": "^2.0.7",
        "flatstr": "^1.0.12",
        "pino-std-serializers": "^3.1.0",
        "quick-format-unescaped": "^4.0.3",
        "sonic-boom": "^1.0.2"
      },
      "bin": {
        "pino": "bin.js"
      }
    },
    "node_modules/pino-std-serializers": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/pino-std-serializers/-/pino-std-serializers-3.2.0.tgz",
      "integrity": "sha512-EqX4pwDPrt3MuOAAUBMU0Tk5kR/YcCM5fNPEzgCO2zJ5HfX0vbiH9HbJglnyeQsN96Kznae6MWD47pZB5avTrg==",
      "dev": true
    },
    "node_modules/pirates": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.1.tgz",
      "integrity": "sha512-WuNqLTbMI3tmfef2TKxlQmAiLHKtFhlsCZnPIpuv2Ow0RDVO8lfy1Opf4NUzlMXLjPl+Men7AuVdX6TA+s+uGA==",
      "dev": true,
      "dependencies": {
        "node-modules-regexp": "^1.0.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/pkg-dir": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
      "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
      "dev": true,
      "dependencies": {
        "find-up": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/postcss": {
      "version": "8.2.14",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.2.14.tgz",
      "integrity": "sha512-+jD0ZijcvyCqPQo/m/CW0UcARpdFylq04of+Q7RKX6f/Tu+dvpUI/9Sp81+i6/vJThnOBX09Quw0ZLOVwpzX3w==",
      "dev": true,
      "dependencies": {
        "colorette": "^1.2.2",
        "nanoid": "^3.1.22",
        "source-map": "^0.6.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      }
    },
    "node_modules/postcss/node_modules/nanoid": {
      "version": "3.1.23",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.1.23.tgz",
      "integrity": "sha512-FiB0kzdP0FFVGDKlRLEQ1BgDzU87dy5NnzjeW9YZNt+/c3+q82EQDUwniSAUxp/F0gFNI1ZhKU1FqYsMuqZVnw==",
      "dev": true,
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/postcss/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prepend-http": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
      "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.0.tgz",
      "integrity": "sha512-MtEC1TqN0EU5nephaJ4rAtThHtC86dNN9qCuEhtshvpVBkAW5ZO7BASN9REnF9eoXGcRub+pFuKEpOHE+HbEMw==",
      "dev": true
    },
    "node_modules/process-on-spawn": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/process-on-spawn/-/process-on-spawn-1.0.0.tgz",
      "integrity": "sha512-1WsPDsUSMmZH5LeMLegqkPDrsGgsWwk1Exipy2hvB0o/F0ASzbpIctSCcZIK1ykJvtTJULEH+20WOFjMvGnCTg==",
      "dev": true,
      "dependencies": {
        "fromentries": "^1.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/progress": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/progress/-/progress-2.0.3.tgz",
      "integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==",
      "dev": true,
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
      "integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "forwarded": "~0.1.2",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/psl": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
      "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==",
      "dev": true
    },
    "node_modules/pump": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
      "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
      "dev": true,
      "dependencies": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/qs": {
      "version": "6.7.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
      "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ==",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/query-string": {
      "version": "5.1.1",
      "resolved": "http://registry.npmjs.org/query-string/-/query-string-5.1.1.tgz",
      "integrity": "sha512-gjWOsm2SoGlgLEdAGt7a6slVOk9mGiXmPFMqrEhLQ68rhQuBnpfs3+EmlvqKyxnCo9/PPlF+9MtY02S1aFg+Jw==",
      "dev": true,
      "dependencies": {
        "decode-uri-component": "^0.2.0",
        "object-assign": "^4.1.0",
        "strict-uri-encode": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/queue": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/queue/-/queue-6.0.2.tgz",
      "integrity": "sha512-iHZWu+q3IdFZFX36ro/lKBkSvfkztY5Y7HMiPlOUjhupPcG2JMfst2KKEpu5XndviX/3UhFbRngUPNKtgvtZiA==",
      "dev": true,
      "dependencies": {
        "inherits": "~2.0.3"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/quick-format-unescaped": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/quick-format-unescaped/-/quick-format-unescaped-4.0.3.tgz",
      "integrity": "sha512-MaL/oqh02mhEo5m5J2rwsVL23Iw2PEaGVHgT2vFt8AAsr0lfvQA5dpXo9TPu0rz7tSBdUPgkbam0j/fj5ZM8yg==",
      "dev": true
    },
    "node_modules/randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
      "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
      "dev": true,
      "dependencies": {
        "safe-buffer": "^5.1.0"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
      "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "bytes": "3.1.0",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/readable-stream": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
      "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
      "dev": true,
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/readdirp": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",
      "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "graceful-fs": "^4.1.11",
        "micromatch": "^3.1.10",
        "readable-stream": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/rechoir": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.7.0.tgz",
      "integrity": "sha512-ADsDEH2bvbjltXEP+hTIAmeFekTFK0V2BTxMkok6qILyAJEXV0AFfoWcAq4yfll5VdIMd/RVXq0lR+wQi5ZU3Q==",
      "dev": true,
      "dependencies": {
        "resolve": "^1.9.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/regenerate": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
      "integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==",
      "dev": true
    },
    "node_modules/regenerate-unicode-properties": {
      "version": "8.2.0",
      "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-8.2.0.tgz",
      "integrity": "sha512-F9DjY1vKLo/tPePDycuH3dn9H1OTPIkVD9Kz4LODu+F2C75mgjAJ7x/gwy6ZcSNRAAkhNlJSOHRe8k3p+K9WhA==",
      "dev": true,
      "dependencies": {
        "regenerate": "^1.4.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/regenerator-runtime": {
      "version": "0.13.7",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.7.tgz",
      "integrity": "sha512-a54FxoJDIr27pgf7IgeQGxmqUNYrcV338lf/6gH456HZ/PhX+5BcwHXG9ajESmwe6WRO0tAzRUrRmNONWgkrew==",
      "dev": true
    },
    "node_modules/regenerator-transform": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.14.5.tgz",
      "integrity": "sha512-eOf6vka5IO151Jfsw2NO9WpGX58W6wWmefK3I1zEGr0lOD0u8rwPaNqQL1aRxUaxLeKO3ArNh3VYg1KbaD+FFw==",
      "dev": true,
      "dependencies": {
        "@babel/runtime": "^7.8.4"
      }
    },
    "node_modules/regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.3.0.tgz",
      "integrity": "sha512-2+Q0C5g951OlYlJz6yu5/M33IcsESLlLfsyIaLJaG4FA2r4yP8MvVMJUUP/fVBkSpbbbZlS5gynbEWLipiiXiQ==",
      "dev": true,
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.0-next.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/regexpp": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/regexpp/-/regexpp-3.1.0.tgz",
      "integrity": "sha512-ZOIzd8yVsQQA7j8GCSlPGXwg5PfmA1mrq0JP4nGhh54LaKN3xdai/vHUDu74pKwV8OxseMS65u2NImosQcSD0Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/regexpu-core": {
      "version": "4.7.1",
      "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-4.7.1.tgz",
      "integrity": "sha512-ywH2VUraA44DZQuRKzARmw6S66mr48pQVva4LBeRhcOltJ6hExvWly5ZjFLYo67xbIxb6W1q4bAGtgfEl20zfQ==",
      "dev": true,
      "dependencies": {
        "regenerate": "^1.4.0",
        "regenerate-unicode-properties": "^8.2.0",
        "regjsgen": "^0.5.1",
        "regjsparser": "^0.6.4",
        "unicode-match-property-ecmascript": "^1.0.4",
        "unicode-match-property-value-ecmascript": "^1.2.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/regjsgen": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.5.2.tgz",
      "integrity": "sha512-OFFT3MfrH90xIW8OOSyUrk6QHD5E9JOTeGodiJeBS3J6IwlgzJMNE/1bZklWz5oTg+9dCMyEetclvCVXOPoN3A==",
      "dev": true
    },
    "node_modules/regjsparser": {
      "version": "0.6.9",
      "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.6.9.tgz",
      "integrity": "sha512-ZqbNRz1SNjLAiYuwY0zoXW8Ne675IX5q+YHioAGbCw4X96Mjl2+dcX9B2ciaeyYjViDAfvIjFpQjJgLttTEERQ==",
      "dev": true,
      "dependencies": {
        "jsesc": "~0.5.0"
      },
      "bin": {
        "regjsparser": "bin/parser"
      }
    },
    "node_modules/regjsparser/node_modules/jsesc": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
      "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=",
      "dev": true,
      "bin": {
        "jsesc": "bin/jsesc"
      }
    },
    "node_modules/relaxed-json": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/relaxed-json/-/relaxed-json-1.0.3.tgz",
      "integrity": "sha512-b7wGPo7o2KE/g7SqkJDDbav6zmrEeP4TK2VpITU72J/M949TLe/23y/ZHJo+pskcGM52xIfFoT9hydwmgr1AEg==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.4.2",
        "commander": "^2.6.0"
      },
      "bin": {
        "rjson": "bin/rjson.js"
      },
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/release-zalgo": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/release-zalgo/-/release-zalgo-1.0.0.tgz",
      "integrity": "sha1-CXALflB0Mpc5Mw5TXFqQ+2eFFzA=",
      "dev": true,
      "dependencies": {
        "es6-error": "^4.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/remove-trailing-separator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",
      "dev": true,
      "optional": true
    },
    "node_modules/repeat-element": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.3.tgz",
      "integrity": "sha512-ahGq0ZnV5m5XtZLMb+vP76kcAM5nkLqk0lpqAuojSKGgQtn4eRi4ZZGm2olo2zKFH+sMsWaqOCW1dqAnOru72g==",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/request": {
      "version": "2.88.2",
      "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
      "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
      "deprecated": "request has been deprecated, see https://github.com/request/request/issues/3142",
      "dev": true,
      "dependencies": {
        "aws-sign2": "~0.7.0",
        "aws4": "^1.8.0",
        "caseless": "~0.12.0",
        "combined-stream": "~1.0.6",
        "extend": "~3.0.2",
        "forever-agent": "~0.6.1",
        "form-data": "~2.3.2",
        "har-validator": "~5.1.3",
        "http-signature": "~1.2.0",
        "is-typedarray": "~1.0.0",
        "isstream": "~0.1.2",
        "json-stringify-safe": "~5.0.1",
        "mime-types": "~2.1.19",
        "oauth-sign": "~0.9.0",
        "performance-now": "^2.1.0",
        "qs": "~6.5.2",
        "safe-buffer": "^5.1.2",
        "tough-cookie": "~2.5.0",
        "tunnel-agent": "^0.6.0",
        "uuid": "^3.3.2"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/request/node_modules/qs": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
      "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
      "dev": true,
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-main-filename": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
      "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
      "dev": true
    },
    "node_modules/resolve": {
      "version": "1.20.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
      "integrity": "sha512-wENBPt4ySzg4ybFQW2TT1zMQucPK95HSh/nq2CFTZVOGut2+pQvSsgtda4d26YrYcr067wjbmzOG8byDPBX63A==",
      "dev": true,
      "dependencies": {
        "is-core-module": "^2.2.0",
        "path-parse": "^1.0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-cwd": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
      "integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
      "dev": true,
      "dependencies": {
        "resolve-from": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve-cwd/node_modules/resolve-from": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
      "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
      "dev": true,
      "optional": true
    },
    "node_modules/responselike": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
      "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
      "dev": true,
      "dependencies": {
        "lowercase-keys": "^1.0.0"
      }
    },
    "node_modules/ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.12"
      }
    },
    "node_modules/reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true,
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "dev": true,
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "dev": true
    },
    "node_modules/safe-compare": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/safe-compare/-/safe-compare-1.1.4.tgz",
      "integrity": "sha512-b9wZ986HHCo/HbKrRpBJb2kqXMK9CEWIE1egeEvZsYn69ay3kdfl9nG3RyOcR+jInTDf7a86WQ1d4VJX7goSSQ==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "buffer-alloc": "^1.2.0"
      }
    },
    "node_modules/safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "ret": "~0.1.10"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "dev": true
    },
    "node_modules/schema-utils": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
      "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
      "dev": true,
      "dependencies": {
        "@types/json-schema": "^7.0.6",
        "ajv": "^6.12.5",
        "ajv-keywords": "^3.5.2"
      },
      "engines": {
        "node": ">= 10.13.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/seek-bzip": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/seek-bzip/-/seek-bzip-1.0.5.tgz",
      "integrity": "sha1-z+kXyz0nS8/6x5J1ivUxc+sfq9w=",
      "dev": true,
      "dependencies": {
        "commander": "~2.8.1"
      },
      "bin": {
        "seek-bunzip": "bin/seek-bunzip",
        "seek-table": "bin/seek-bzip-table"
      }
    },
    "node_modules/seek-bzip/node_modules/commander": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.8.1.tgz",
      "integrity": "sha1-Br42f+v9oMMwqh4qBy09yXYkJdQ=",
      "dev": true,
      "dependencies": {
        "graceful-readlink": ">= 1.0.0"
      },
      "engines": {
        "node": ">= 0.6.x"
      }
    },
    "node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/send": {
      "version": "0.17.1",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
      "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "~1.7.2",
        "mime": "1.6.0",
        "ms": "2.1.1",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/send/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/send/node_modules/debug/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
      "dev": true,
      "peer": true
    },
    "node_modules/send/node_modules/ms": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
      "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
      "dev": true,
      "peer": true
    },
    "node_modules/serialize-javascript": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-5.0.1.tgz",
      "integrity": "sha512-SaaNal9imEO737H2c05Og0/8LUXG7EnsZyMa8MzkmuHoELfT6txuj0cMqRj6zfPKnmQ1yasR4PCJc8x+M4JSPA==",
      "dev": true,
      "dependencies": {
        "randombytes": "^2.1.0"
      }
    },
    "node_modules/serve-static": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
      "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
      "dev": true
    },
    "node_modules/set-value": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/set-value/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
      "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw==",
      "dev": true,
      "peer": true
    },
    "node_modules/sha.js": {
      "version": "2.4.11",
      "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
      "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
      "dev": true,
      "dependencies": {
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      },
      "bin": {
        "sha.js": "bin.js"
      }
    },
    "node_modules/shallow-clone": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
      "integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/signal-exit": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
      "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA==",
      "dev": true
    },
    "node_modules/slash": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
      "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^3.2.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-util/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/snapdragon/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sonic-boom": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/sonic-boom/-/sonic-boom-1.4.1.tgz",
      "integrity": "sha512-LRHh/A8tpW7ru89lrlkU4AszXt1dbwSjVWguGrmlxE7tawVmDBlI1PILMkXAxJTwqhgsEeTHzj36D5CmHgQmNg==",
      "dev": true,
      "dependencies": {
        "atomic-sleep": "^1.0.0",
        "flatstr": "^1.0.12"
      }
    },
    "node_modules/sort-keys": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-1.1.2.tgz",
      "integrity": "sha1-RBttTTRnmPG05J6JIK37oOVD+a0=",
      "dev": true,
      "dependencies": {
        "is-plain-obj": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sort-keys-length": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/sort-keys-length/-/sort-keys-length-1.0.1.tgz",
      "integrity": "sha1-nLb09OnkgVWmqgZx7dM2/xR5oYg=",
      "dev": true,
      "dependencies": {
        "sort-keys": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-list-map": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/source-list-map/-/source-list-map-2.0.1.tgz",
      "integrity": "sha512-qnQ7gVMxGNxsiL4lEuJwe/To8UnK7fAnmbGEEH8RpLouuKbeEm0lhbQVFIrNSuB+G7tVrAlVsZgETT5nljf+Iw==",
      "dev": true
    },
    "node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-resolve": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.19",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
      "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
      "dev": true,
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/source-map-support/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-url": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.0.tgz",
      "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM=",
      "dev": true,
      "optional": true
    },
    "node_modules/spawn-wrap": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/spawn-wrap/-/spawn-wrap-2.0.0.tgz",
      "integrity": "sha512-EeajNjfN9zMnULLwhZZQU3GWBoFNkbngTUPfaawT4RkMiviTxcX0qfhVbGey39mfctfDHkWtuecgQ8NJcyQWHg==",
      "dev": true,
      "dependencies": {
        "foreground-child": "^2.0.0",
        "is-windows": "^1.0.2",
        "make-dir": "^3.0.0",
        "rimraf": "^3.0.0",
        "signal-exit": "^3.0.2",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/spawn-wrap/node_modules/make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "dev": true,
      "dependencies": {
        "semver": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "extend-shallow": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
      "dev": true
    },
    "node_modules/sshpk": {
      "version": "1.16.1",
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
      "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
      "dev": true,
      "dependencies": {
        "asn1": "~0.2.3",
        "assert-plus": "^1.0.0",
        "bcrypt-pbkdf": "^1.0.0",
        "dashdash": "^1.12.0",
        "ecc-jsbn": "~0.1.1",
        "getpass": "^0.1.1",
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.0.2",
        "tweetnacl": "~0.14.0"
      },
      "bin": {
        "sshpk-conv": "bin/sshpk-conv",
        "sshpk-sign": "bin/sshpk-sign",
        "sshpk-verify": "bin/sshpk-verify"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-extend/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/strict-uri-encode": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-1.1.0.tgz",
      "integrity": "sha1-J5siXfHVgrH1TmWt3UNS4Y+qBxM=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dev": true,
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "dev": true,
      "dependencies": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.3.tgz",
      "integrity": "sha512-ayH0pB+uf0U28CtjlLvL7NaohvR1amUvVZk+y3DYb0Ey2PUV5zPkkKy9+U1ndVEIXO8hNg18eIv9Jntbii+dKw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.3.tgz",
      "integrity": "sha512-oBIBUy5lea5tt0ovtOFiEQaBkoBBkyJhZXzJYrSmDo5IUUqbOPvVezuRs/agBIdZ2p2Eo1FD6bD9USyBLfl3xg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3"
      }
    },
    "node_modules/strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-ansi/node_modules/ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-bom": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
      "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom-buf": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom-buf/-/strip-bom-buf-2.0.0.tgz",
      "integrity": "sha512-gLFNHucd6gzb8jMsl5QmZ3QgnUJmp7qn4uUSHNwEXumAp7YizoGYw19ZUVfuq4aBOQUtyn2k8X/CwzWB73W2lQ==",
      "dev": true,
      "dependencies": {
        "is-utf8": "^0.2.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom-stream": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom-stream/-/strip-bom-stream-4.0.0.tgz",
      "integrity": "sha512-0ApK3iAkHv6WbgLICw/J4nhwHeDZsBxIIsOD+gHgZICL6SeJ0S9f/WZqemka9cjkTyMN5geId6e8U5WGFAn3cQ==",
      "dev": true,
      "dependencies": {
        "first-chunk-stream": "^3.0.0",
        "strip-bom-buf": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-dirs": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/strip-dirs/-/strip-dirs-2.1.0.tgz",
      "integrity": "sha512-JOCxOeKLm2CAS73y/U4ZeZPTkE+gNVCzKt7Eox84Iej1LT/2pTWYpZKJuxwQpvX1LiZb1xokNR7RLfuBAa7T3g==",
      "dev": true,
      "dependencies": {
        "is-natural-number": "^4.0.1"
      }
    },
    "node_modules/strip-final-newline": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
      "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/strip-outer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/strip-outer/-/strip-outer-1.0.1.tgz",
      "integrity": "sha512-k55yxKHwaXnpYGsOzg4Vl8+tDrWylxDEpknGjhTiZB8dFRU5rTo9CAzeycivxV3s+zlTKwrs6WxMxR95n26kwg==",
      "dev": true,
      "dependencies": {
        "escape-string-regexp": "^1.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/tapable": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.0.tgz",
      "integrity": "sha512-FBk4IesMV1rBxX2tfiK8RAmogtWn53puLOQlvO8XuwlgxcYbP4mVPS9Ph4aeamSyyVjOl24aYWAuc8U5kCVwMw==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tar-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/tar-stream/-/tar-stream-1.6.2.tgz",
      "integrity": "sha512-rzS0heiNf8Xn7/mpdSVVSMAWAoy9bfb1WOTYC78Z0UQKeKa/CWS8FOq0lKGNa8DWKAn9gxjCvMLYc5PGXYlK2A==",
      "dev": true,
      "dependencies": {
        "bl": "^1.0.0",
        "buffer-alloc": "^1.2.0",
        "end-of-stream": "^1.0.0",
        "fs-constants": "^1.0.0",
        "readable-stream": "^2.3.0",
        "to-buffer": "^1.1.1",
        "xtend": "^4.0.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/terser": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/terser/-/terser-5.7.0.tgz",
      "integrity": "sha512-HP5/9hp2UaZt5fYkuhNBR8YyRcT8juw8+uFbAme53iN9hblvKnLUTKkmwJG6ocWpIKf8UK4DoeWG4ty0J6S6/g==",
      "dev": true,
      "dependencies": {
        "commander": "^2.20.0",
        "source-map": "~0.7.2",
        "source-map-support": "~0.5.19"
      },
      "bin": {
        "terser": "bin/terser"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/terser-webpack-plugin": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-5.1.2.tgz",
      "integrity": "sha512-6QhDaAiVHIQr5Ab3XUWZyDmrIPCHMiqJVljMF91YKyqwKkL5QHnYMkrMBy96v9Z7ev1hGhSEw1HQZc2p/s5Z8Q==",
      "dev": true,
      "dependencies": {
        "jest-worker": "^26.6.2",
        "p-limit": "^3.1.0",
        "schema-utils": "^3.0.0",
        "serialize-javascript": "^5.0.1",
        "source-map": "^0.6.1",
        "terser": "^5.7.0"
      },
      "engines": {
        "node": ">= 10.13.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      },
      "peerDependencies": {
        "webpack": "^5.1.0"
      }
    },
    "node_modules/terser-webpack-plugin/node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/terser-webpack-plugin/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/terser/node_modules/source-map": {
      "version": "0.7.3",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz",
      "integrity": "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/test-exclude": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
      "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
      "dev": true,
      "dependencies": {
        "@istanbuljs/schema": "^0.1.2",
        "glob": "^7.1.4",
        "minimatch": "^3.0.4"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha1-f17oI66AUgfACvLfSoTsP8+lcLQ=",
      "dev": true
    },
    "node_modules/through": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
      "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU=",
      "dev": true
    },
    "node_modules/timed-out": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/timed-out/-/timed-out-4.0.1.tgz",
      "integrity": "sha1-8y6srFoXW+ol1/q1Zas+2HQe9W8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-buffer": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/to-buffer/-/to-buffer-1.1.1.tgz",
      "integrity": "sha512-lx9B5iv7msuFYE3dytT+KE5tap+rNYw+K4jVkb9R/asAb+pbBSM17jtunHplhBe6RRJdZx3Pn2Jph24O32mOVg==",
      "dev": true
    },
    "node_modules/to-fast-properties": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-object-path/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
      "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/tosource": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/tosource/-/tosource-1.0.0.tgz",
      "integrity": "sha1-QtiN0RZhi88A1hBt1URvNCeQL/E=",
      "dev": true,
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/tough-cookie": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
      "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
      "dev": true,
      "dependencies": {
        "psl": "^1.1.28",
        "punycode": "^2.1.1"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/trim-repeated": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/trim-repeated/-/trim-repeated-1.0.0.tgz",
      "integrity": "sha1-42RqLqTokTEr9+rObPsFOAvAHCE=",
      "dev": true,
      "dependencies": {
        "escape-string-regexp": "^1.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/tslib": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.9.3.tgz",
      "integrity": "sha512-4krF8scpejhaOgqzBEcGM7yDIEfi0/8+8zDRZhNZZ2kjmHJ4hv3zCbQWxoJGz1iw5U0Jl0nma13xzHXcncMavQ==",
      "dev": true
    },
    "node_modules/tsutils": {
      "version": "3.19.1",
      "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-3.19.1.tgz",
      "integrity": "sha512-GEdoBf5XI324lu7ycad7s6laADfnAqCw6wLGI+knxvw9vsIYBaJfYdmeCEG3FMMUiSm3OGgNb+m6utsWf5h9Vw==",
      "dev": true,
      "dependencies": {
        "tslib": "^1.8.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
      "dev": true,
      "dependencies": {
        "safe-buffer": "^5.0.1"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/tweetnacl": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
      "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
      "dev": true
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-detect": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
      "integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "dev": true,
      "peer": true,
      "dependencies": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/typedarray-to-buffer": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
      "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
      "dev": true,
      "dependencies": {
        "is-typedarray": "^1.0.0"
      }
    },
    "node_modules/typescript": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.2.4.tgz",
      "integrity": "sha512-V+evlYHZnQkaz8TRBuxTA92yZBPotr5H+WhQ7bD3hZUndx5tGOa1fuCgeSjxAzM1RiN5IzvadIXTVefuuwZCRg==",
      "dev": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=4.2.0"
      }
    },
    "node_modules/unbzip2-stream": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/unbzip2-stream/-/unbzip2-stream-1.3.0.tgz",
      "integrity": "sha512-kE2WkurNnPUMcryNioS68DDbhoPB8Qxsd8btHSj+sd5Pjh2GsjmeHLzMSqV9HHziAo8FzVxVCJl9ZYhk7yY1pA==",
      "dev": true,
      "dependencies": {
        "buffer": "^3.0.1",
        "through": "^2.3.6"
      }
    },
    "node_modules/unicode-canonical-property-names-ecmascript": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-1.0.4.tgz",
      "integrity": "sha512-jDrNnXWHd4oHiTZnx/ZG7gtUTVp+gCcTTKr8L0HjlwphROEW3+Him+IpvC+xcJEFegapiMZyZe02CyuOnRmbnQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-match-property-ecmascript": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-1.0.4.tgz",
      "integrity": "sha512-L4Qoh15vTfntsn4P1zqnHulG0LdXgjSO035fEpdtp6YxXhMT51Q6vgM5lYdG/5X3MjS+k/Y9Xw4SFCY9IkR0rg==",
      "dev": true,
      "dependencies": {
        "unicode-canonical-property-names-ecmascript": "^1.0.4",
        "unicode-property-aliases-ecmascript": "^1.0.4"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-match-property-value-ecmascript": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-1.2.0.tgz",
      "integrity": "sha512-wjuQHGQVofmSJv1uVISKLE5zO2rNGzM/KCYZch/QQvez7C1hUhBIuZ701fYXExuufJFMPhv2SyL8CyoIfMLbIQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-property-aliases-ecmascript": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-1.1.0.tgz",
      "integrity": "sha512-PqSoPh/pWetQ2phoj5RLiaqIk4kCNwoV3CI+LfGmWLKI3rE3kl1h59XpX2BjgDrmbxD9ARtQobPGU1SguCYuQg==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/union-value": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/universalify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.0.tgz",
      "integrity": "sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ==",
      "dev": true,
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-value": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
      "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "get-value": "^2.0.3",
        "has-values": "^0.1.4",
        "isobject": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-value/node_modules/isobject": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
      "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
      "dev": true,
      "optional": true,
      "dependencies": {
        "isarray": "1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-values": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
      "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/upath": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
      "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg==",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=4",
        "yarn": "*"
      }
    },
    "node_modules/uri-js": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
      "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
      "dev": true,
      "optional": true
    },
    "node_modules/url-parse-lax": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
      "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
      "dev": true,
      "dependencies": {
        "prepend-http": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/url-to-options": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/url-to-options/-/url-to-options-1.0.1.tgz",
      "integrity": "sha1-FQWgOiiaSMvXpDTvuu7FBV9WM6k=",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/use": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
      "dev": true
    },
    "node_modules/utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/uuid": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
      "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
      "dev": true,
      "bin": {
        "uuid": "bin/uuid"
      }
    },
    "node_modules/v8-compile-cache": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.2.0.tgz",
      "integrity": "sha512-gTpR5XQNKFwOd4clxfnhaqvfqMpqEwr4tOtCyz4MtYZX2JYhfr1JvBFKdS+7K/9rfpZR3VLX+YWBbKoxCgS43Q==",
      "dev": true
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw=",
      "dev": true,
      "peer": true,
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/verror": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
      "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
      "dev": true,
      "engines": [
        "node >=0.6.0"
      ],
      "dependencies": {
        "assert-plus": "^1.0.0",
        "core-util-is": "1.0.2",
        "extsprintf": "^1.2.0"
      }
    },
    "node_modules/watchpack": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.1.0.tgz",
      "integrity": "sha512-UjgD1mqjkG99+3lgG36at4wPnUXNvis2v1utwTgQ43C22c4LD71LsYMExdWXh4HZ+RmW+B0t1Vrg2GpXAkTOQw==",
      "dev": true,
      "dependencies": {
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.1.2"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/wcwidth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
      "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
      "dev": true,
      "dependencies": {
        "defaults": "^1.0.3"
      }
    },
    "node_modules/webpack": {
      "version": "5.37.1",
      "resolved": "https://registry.npmjs.org/webpack/-/webpack-5.37.1.tgz",
      "integrity": "sha512-btZjGy/hSjCAAVHw+cKG+L0M+rstlyxbO2C+BOTaQ5/XAnxkDrP5sVbqWhXgo4pL3X2dcOib6rqCP20Zr9PLow==",
      "dev": true,
      "dependencies": {
        "@types/eslint-scope": "^3.7.0",
        "@types/estree": "^0.0.47",
        "@webassemblyjs/ast": "1.11.0",
        "@webassemblyjs/wasm-edit": "1.11.0",
        "@webassemblyjs/wasm-parser": "1.11.0",
        "acorn": "^8.2.1",
        "browserslist": "^4.14.5",
        "chrome-trace-event": "^1.0.2",
        "enhanced-resolve": "^5.8.0",
        "es-module-lexer": "^0.4.0",
        "eslint-scope": "^5.1.1",
        "events": "^3.2.0",
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.2.4",
        "json-parse-better-errors": "^1.0.2",
        "loader-runner": "^4.2.0",
        "mime-types": "^2.1.27",
        "neo-async": "^2.6.2",
        "schema-utils": "^3.0.0",
        "tapable": "^2.1.1",
        "terser-webpack-plugin": "^5.1.1",
        "watchpack": "^2.0.0",
        "webpack-sources": "^2.1.1"
      },
      "bin": {
        "webpack": "bin/webpack.js"
      },
      "engines": {
        "node": ">=10.13.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      },
      "peerDependenciesMeta": {
        "webpack-cli": {
          "optional": true
        }
      }
    },
    "node_modules/webpack-cli": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/webpack-cli/-/webpack-cli-4.7.0.tgz",
      "integrity": "sha512-7bKr9182/sGfjFm+xdZSwgQuFjgEcy0iCTIBxRUeteJ2Kr8/Wz0qNJX+jw60LU36jApt4nmMkep6+W5AKhok6g==",
      "dev": true,
      "dependencies": {
        "@discoveryjs/json-ext": "^0.5.0",
        "@webpack-cli/configtest": "^1.0.3",
        "@webpack-cli/info": "^1.2.4",
        "@webpack-cli/serve": "^1.4.0",
        "colorette": "^1.2.1",
        "commander": "^7.0.0",
        "execa": "^5.0.0",
        "fastest-levenshtein": "^1.0.12",
        "import-local": "^3.0.2",
        "interpret": "^2.2.0",
        "rechoir": "^0.7.0",
        "v8-compile-cache": "^2.2.0",
        "webpack-merge": "^5.7.3"
      },
      "bin": {
        "webpack-cli": "bin/cli.js"
      },
      "engines": {
        "node": ">=10.13.0"
      },
      "peerDependencies": {
        "webpack": "4.x.x || 5.x.x"
      },
      "peerDependenciesMeta": {
        "@webpack-cli/generators": {
          "optional": true
        },
        "@webpack-cli/migrate": {
          "optional": true
        },
        "webpack-bundle-analyzer": {
          "optional": true
        },
        "webpack-dev-server": {
          "optional": true
        }
      }
    },
    "node_modules/webpack-cli/node_modules/commander": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-7.2.0.tgz",
      "integrity": "sha512-QrWXB+ZQSVPmIWIhtEO9H+gwHaMGYiF5ChvoJ+K9ZGHG/sVsa6yiesAD1GC/x46sET00Xlwo1u49RVVVzvcSkw==",
      "dev": true,
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/webpack-merge": {
      "version": "5.7.3",
      "resolved": "https://registry.npmjs.org/webpack-merge/-/webpack-merge-5.7.3.tgz",
      "integrity": "sha512-6/JUQv0ELQ1igjGDzHkXbVDRxkfA57Zw7PfiupdLFJYrgFqY5ZP8xxbpp2lU3EPwYx89ht5Z/aDkD40hFCm5AA==",
      "dev": true,
      "dependencies": {
        "clone-deep": "^4.0.1",
        "wildcard": "^2.0.0"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/webpack-sources": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-2.2.0.tgz",
      "integrity": "sha512-bQsA24JLwcnWGArOKUxYKhX3Mz/nK1Xf6hxullKERyktjNMC4x8koOeaDNTA2fEJ09BdWLbM/iTW0ithREUP0w==",
      "dev": true,
      "dependencies": {
        "source-list-map": "^2.0.1",
        "source-map": "^0.6.1"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/webpack-sources/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
      "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
      "dev": true
    },
    "node_modules/wide-align": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
      "integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
      "dev": true,
      "dependencies": {
        "string-width": "^1.0.2 || 2"
      }
    },
    "node_modules/wildcard": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/wildcard/-/wildcard-2.0.0.tgz",
      "integrity": "sha512-JcKqAHLPxcdb9KM49dufGXn2x3ssnfjbcaQdLlfZsL9rH9wgDQjUtDxbo8NE0F6SFvydeu1VhZe7hZuHsB2/pw==",
      "dev": true
    },
    "node_modules/word-wrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/workerpool": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/workerpool/-/workerpool-6.1.0.tgz",
      "integrity": "sha512-toV7q9rWNYha963Pl/qyeZ6wG+3nnsyvolaNUS8+R5Wtw6qJPTxIlOP1ZSvcGhEJw+l3HMMmtiNo9Gl61G4GVg==",
      "dev": true
    },
    "node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
      "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/wrap-ansi/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/string-width": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
      "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
      "dev": true,
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
      "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "dev": true
    },
    "node_modules/write-file-atomic": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
      "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
      "dev": true,
      "dependencies": {
        "imurmurhash": "^0.1.4",
        "is-typedarray": "^1.0.0",
        "signal-exit": "^3.0.2",
        "typedarray-to-buffer": "^3.1.5"
      }
    },
    "node_modules/xtend": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.1.tgz",
      "integrity": "sha1-pcbVMr5lbiPbgg77lDofBJmNY68=",
      "dev": true,
      "engines": {
        "node": ">=0.4"
      }
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "dev": true
    },
    "node_modules/yargs": {
      "version": "16.2.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",
      "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",
      "dev": true,
      "dependencies": {
        "cliui": "^7.0.2",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.0",
        "y18n": "^5.0.5",
        "yargs-parser": "^20.2.2"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs-parser": {
      "version": "20.2.4",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.4.tgz",
      "integrity": "sha512-WOkpgNhPTlE73h4VFAFsOnomJVaovO8VqLDzy5saChRBFQFBoMYirowyW+Q9HB4HFF4Z7VZTiG3iSzJJA29yRA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs-unparser": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/yargs-unparser/-/yargs-unparser-2.0.0.tgz",
      "integrity": "sha512-7pRTIA9Qc1caZ0bZ6RYRGbHJthJWuakf+WmHK0rVeLkNrrGhfoabBNdue6kdINI6r4if7ocq9aD/n7xwKOdzOA==",
      "dev": true,
      "dependencies": {
        "camelcase": "^6.0.0",
        "decamelize": "^4.0.0",
        "flat": "^5.0.2",
        "is-plain-obj": "^2.1.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs-unparser/node_modules/camelcase": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.2.0.tgz",
      "integrity": "sha512-c7wVvbw3f37nuobQNtgsgG9POC9qMbNuMQmTCqZv23b6MIz0fcYpBiOlv9gEN/hdLdnZTDQhg6e9Dq5M1vKvfg==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/yargs-unparser/node_modules/decamelize": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-4.0.0.tgz",
      "integrity": "sha512-9iE1PgSik9HeIIw2JO94IidnE3eBoQrFJ3w7sFuzSX4DpmZ3v5sZpUiV5Swcf6mQEF+Y0ru8Neo+p+nyh2J+hQ==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/yargs-unparser/node_modules/is-plain-obj": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-2.1.0.tgz",
      "integrity": "sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/ansi-regex": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
      "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/string-width": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
      "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
      "dev": true,
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/strip-ansi": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
      "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yauzl": {
      "version": "2.10.0",
      "resolved": "https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz",
      "integrity": "sha1-x+sXyT4RLLEIb6bY5R+wZnt5pfk=",
      "dev": true,
      "dependencies": {
        "buffer-crc32": "~0.2.3",
        "fd-slicer": "~1.1.0"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  },
  "dependencies": {
    "@babel/cli": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/cli/-/cli-7.14.3.tgz",
      "integrity": "sha512-zU4JLvwk32ay1lhhyGfqiRUSPoltVDjhYkA3aQq8+Yby9z30s/EsFw1EPOHxWG9YZo2pAGfgdRNeHZQAYU5m9A==",
      "dev": true,
      "requires": {
        "@nicolo-ribaudo/chokidar-2": "2.1.8-no-fsevents",
        "chokidar": "^3.4.0",
        "commander": "^4.0.1",
        "convert-source-map": "^1.1.0",
        "fs-readdir-recursive": "^1.1.0",
        "glob": "^7.0.0",
        "make-dir": "^2.1.0",
        "slash": "^2.0.0",
        "source-map": "^0.5.0"
      },
      "dependencies": {
        "commander": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
          "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
          "dev": true
        },
        "make-dir": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
          "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
          "dev": true,
          "requires": {
            "pify": "^4.0.1",
            "semver": "^5.6.0"
          }
        },
        "pify": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
          "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
          "dev": true
        },
        "semver": {
          "version": "5.7.1",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
          "dev": true
        }
      }
    },
    "@babel/code-frame": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.13.tgz",
      "integrity": "sha512-HV1Cm0Q3ZrpCR93tkWOYiuYIgLxZXZFVG2VgK+MBWjUqZTundupbfx2aXarXuw5Ko5aMcjtJgbSs4vUGBS5v6g==",
      "dev": true,
      "requires": {
        "@babel/highlight": "^7.12.13"
      }
    },
    "@babel/compat-data": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.14.0.tgz",
      "integrity": "sha512-vu9V3uMM/1o5Hl5OekMUowo3FqXLJSw+s+66nt0fSWVWTtmosdzn45JHOB3cPtZoe6CTBDzvSw0RdOY85Q37+Q==",
      "dev": true
    },
    "@babel/core": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.14.3.tgz",
      "integrity": "sha512-jB5AmTKOCSJIZ72sd78ECEhuPiDMKlQdDI/4QRI6lzYATx5SSogS1oQA2AoPecRCknm30gHi2l+QVvNUu3wZAg==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.12.13",
        "@babel/generator": "^7.14.3",
        "@babel/helper-compilation-targets": "^7.13.16",
        "@babel/helper-module-transforms": "^7.14.2",
        "@babel/helpers": "^7.14.0",
        "@babel/parser": "^7.14.3",
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.14.2",
        "@babel/types": "^7.14.2",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.1.2",
        "semver": "^6.3.0",
        "source-map": "^0.5.0"
      }
    },
    "@babel/generator": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.14.3.tgz",
      "integrity": "sha512-bn0S6flG/j0xtQdz3hsjJ624h3W0r3llttBMfyHX3YrZ/KtLYr15bjA0FXkgW7FpvrDuTuElXeVjiKlYRpnOFA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.14.2",
        "jsesc": "^2.5.1",
        "source-map": "^0.5.0"
      }
    },
    "@babel/helper-annotate-as-pure": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.12.13.tgz",
      "integrity": "sha512-7YXfX5wQ5aYM/BOlbSccHDbuXXFPxeoUmfWtz8le2yTkTZc+BxsiEnENFoi2SlmA8ewDkG2LgIMIVzzn2h8kfw==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.13"
      }
    },
    "@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.12.13.tgz",
      "integrity": "sha512-CZOv9tGphhDRlVjVkAgm8Nhklm9RzSmWpX2my+t7Ua/KT616pEzXsQCjinzvkRvHWJ9itO4f296efroX23XCMA==",
      "dev": true,
      "requires": {
        "@babel/helper-explode-assignable-expression": "^7.12.13",
        "@babel/types": "^7.12.13"
      }
    },
    "@babel/helper-compilation-targets": {
      "version": "7.13.16",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.13.16.tgz",
      "integrity": "sha512-3gmkYIrpqsLlieFwjkGgLaSHmhnvlAYzZLlYVjlW+QwI+1zE17kGxuJGmIqDQdYp56XdmGeD+Bswx0UTyG18xA==",
      "dev": true,
      "requires": {
        "@babel/compat-data": "^7.13.15",
        "@babel/helper-validator-option": "^7.12.17",
        "browserslist": "^4.14.5",
        "semver": "^6.3.0"
      }
    },
    "@babel/helper-create-class-features-plugin": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.14.3.tgz",
      "integrity": "sha512-BnEfi5+6J2Lte9LeiL6TxLWdIlEv9Woacc1qXzXBgbikcOzMRM2Oya5XGg/f/ngotv1ej2A/b+3iJH8wbS1+lQ==",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.12.13",
        "@babel/helper-function-name": "^7.14.2",
        "@babel/helper-member-expression-to-functions": "^7.13.12",
        "@babel/helper-optimise-call-expression": "^7.12.13",
        "@babel/helper-replace-supers": "^7.14.3",
        "@babel/helper-split-export-declaration": "^7.12.13"
      }
    },
    "@babel/helper-create-regexp-features-plugin": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.14.3.tgz",
      "integrity": "sha512-JIB2+XJrb7v3zceV2XzDhGIB902CmKGSpSl4q2C6agU9SNLG/2V1RtFRGPG1Ajh9STj3+q6zJMOC+N/pp2P9DA==",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.12.13",
        "regexpu-core": "^4.7.1"
      }
    },
    "@babel/helper-define-polyfill-provider": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.2.0.tgz",
      "integrity": "sha512-JT8tHuFjKBo8NnaUbblz7mIu1nnvUDiHVjXXkulZULyidvo/7P6TY7+YqpV37IfF+KUFxmlK04elKtGKXaiVgw==",
      "dev": true,
      "requires": {
        "@babel/helper-compilation-targets": "^7.13.0",
        "@babel/helper-module-imports": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/traverse": "^7.13.0",
        "debug": "^4.1.1",
        "lodash.debounce": "^4.0.8",
        "resolve": "^1.14.2",
        "semver": "^6.1.2"
      }
    },
    "@babel/helper-explode-assignable-expression": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.13.0.tgz",
      "integrity": "sha512-qS0peLTDP8kOisG1blKbaoBg/o9OSa1qoumMjTK5pM+KDTtpxpsiubnCGP34vK8BXGcb2M9eigwgvoJryrzwWA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.13.0"
      }
    },
    "@babel/helper-function-name": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.14.2.tgz",
      "integrity": "sha512-NYZlkZRydxw+YT56IlhIcS8PAhb+FEUiOzuhFTfqDyPmzAhRge6ua0dQYT/Uh0t/EDHq05/i+e5M2d4XvjgarQ==",
      "dev": true,
      "requires": {
        "@babel/helper-get-function-arity": "^7.12.13",
        "@babel/template": "^7.12.13",
        "@babel/types": "^7.14.2"
      }
    },
    "@babel/helper-get-function-arity": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.12.13.tgz",
      "integrity": "sha512-DjEVzQNz5LICkzN0REdpD5prGoidvbdYk1BVgRUOINaWJP2t6avB27X1guXK1kXNrX0WMfsrm1A/ZBthYuIMQg==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.13"
      }
    },
    "@babel/helper-hoist-variables": {
      "version": "7.13.16",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.13.16.tgz",
      "integrity": "sha512-1eMtTrXtrwscjcAeO4BVK+vvkxaLJSPFz1w1KLawz6HLNi9bPFGBNwwDyVfiu1Tv/vRRFYfoGaKhmAQPGPn5Wg==",
      "dev": true,
      "requires": {
        "@babel/traverse": "^7.13.15",
        "@babel/types": "^7.13.16"
      }
    },
    "@babel/helper-member-expression-to-functions": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.13.12.tgz",
      "integrity": "sha512-48ql1CLL59aKbU94Y88Xgb2VFy7a95ykGRbJJaaVv+LX5U8wFpLfiGXJJGUozsmA1oEh/o5Bp60Voq7ACyA/Sw==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.13.12"
      }
    },
    "@babel/helper-module-imports": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.13.12.tgz",
      "integrity": "sha512-4cVvR2/1B693IuOvSI20xqqa/+bl7lqAMR59R4iu39R9aOX8/JoYY1sFaNvUMyMBGnHdwvJgUrzNLoUZxXypxA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.13.12"
      }
    },
    "@babel/helper-module-transforms": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.14.2.tgz",
      "integrity": "sha512-OznJUda/soKXv0XhpvzGWDnml4Qnwp16GN+D/kZIdLsWoHj05kyu8Rm5kXmMef+rVJZ0+4pSGLkeixdqNUATDA==",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.13.12",
        "@babel/helper-replace-supers": "^7.13.12",
        "@babel/helper-simple-access": "^7.13.12",
        "@babel/helper-split-export-declaration": "^7.12.13",
        "@babel/helper-validator-identifier": "^7.14.0",
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.14.2",
        "@babel/types": "^7.14.2"
      }
    },
    "@babel/helper-optimise-call-expression": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.12.13.tgz",
      "integrity": "sha512-BdWQhoVJkp6nVjB7nkFWcn43dkprYauqtk++Py2eaf/GRDFm5BxRqEIZCiHlZUGAVmtwKcsVL1dC68WmzeFmiA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.13"
      }
    },
    "@babel/helper-plugin-utils": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.13.0.tgz",
      "integrity": "sha512-ZPafIPSwzUlAoWT8DKs1W2VyF2gOWthGd5NGFMsBcMMol+ZhK+EQY/e6V96poa6PA/Bh+C9plWN0hXO1uB8AfQ==",
      "dev": true
    },
    "@babel/helper-remap-async-to-generator": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.13.0.tgz",
      "integrity": "sha512-pUQpFBE9JvC9lrQbpX0TmeNIy5s7GnZjna2lhhcHC7DzgBs6fWn722Y5cfwgrtrqc7NAJwMvOa0mKhq6XaE4jg==",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.12.13",
        "@babel/helper-wrap-function": "^7.13.0",
        "@babel/types": "^7.13.0"
      }
    },
    "@babel/helper-replace-supers": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.14.3.tgz",
      "integrity": "sha512-Rlh8qEWZSTfdz+tgNV/N4gz1a0TMNwCUcENhMjHTHKp3LseYH5Jha0NSlyTQWMnjbYcwFt+bqAMqSLHVXkQ6UA==",
      "dev": true,
      "requires": {
        "@babel/helper-member-expression-to-functions": "^7.13.12",
        "@babel/helper-optimise-call-expression": "^7.12.13",
        "@babel/traverse": "^7.14.2",
        "@babel/types": "^7.14.2"
      }
    },
    "@babel/helper-simple-access": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.13.12.tgz",
      "integrity": "sha512-7FEjbrx5SL9cWvXioDbnlYTppcZGuCY6ow3/D5vMggb2Ywgu4dMrpTJX0JdQAIcRRUElOIxF3yEooa9gUb9ZbA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.13.12"
      }
    },
    "@babel/helper-skip-transparent-expression-wrappers": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.12.1.tgz",
      "integrity": "sha512-Mf5AUuhG1/OCChOJ/HcADmvcHM42WJockombn8ATJG3OnyiSxBK/Mm5x78BQWvmtXZKHgbjdGL2kin/HOLlZGA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.1"
      }
    },
    "@babel/helper-split-export-declaration": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.12.13.tgz",
      "integrity": "sha512-tCJDltF83htUtXx5NLcaDqRmknv652ZWCHyoTETf1CXYJdPC7nohZohjUgieXhv0hTJdRf2FjDueFehdNucpzg==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.13"
      }
    },
    "@babel/helper-validator-identifier": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.14.0.tgz",
      "integrity": "sha512-V3ts7zMSu5lfiwWDVWzRDGIN+lnCEUdaXgtVHJgLb1rGaA6jMrtB9EmE7L18foXJIE8Un/A/h6NJfGQp/e1J4A==",
      "dev": true
    },
    "@babel/helper-validator-option": {
      "version": "7.12.17",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.12.17.tgz",
      "integrity": "sha512-TopkMDmLzq8ngChwRlyjR6raKD6gMSae4JdYDB8bByKreQgG0RBTuKe9LRxW3wFtUnjxOPRKBDwEH6Mg5KeDfw==",
      "dev": true
    },
    "@babel/helper-wrap-function": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.13.0.tgz",
      "integrity": "sha512-1UX9F7K3BS42fI6qd2A4BjKzgGjToscyZTdp1DjknHLCIvpgne6918io+aL5LXFcER/8QWiwpoY902pVEqgTXA==",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.12.13",
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.13.0",
        "@babel/types": "^7.13.0"
      }
    },
    "@babel/helpers": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.14.0.tgz",
      "integrity": "sha512-+ufuXprtQ1D1iZTO/K9+EBRn+qPWMJjZSw/S0KlFrxCw4tkrzv9grgpDHkY9MeQTjTY8i2sp7Jep8DfU6tN9Mg==",
      "dev": true,
      "requires": {
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.14.0",
        "@babel/types": "^7.14.0"
      }
    },
    "@babel/highlight": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.14.0.tgz",
      "integrity": "sha512-YSCOwxvTYEIMSGaBQb5kDDsCopDdiUGsqpatp3fOlI4+2HQSkTmEVWnVuySdAC5EWCqSWWTv0ib63RjR7dTBdg==",
      "dev": true,
      "requires": {
        "@babel/helper-validator-identifier": "^7.14.0",
        "chalk": "^2.0.0",
        "js-tokens": "^4.0.0"
      }
    },
    "@babel/parser": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.14.3.tgz",
      "integrity": "sha512-7MpZDIfI7sUC5zWo2+foJ50CSI5lcqDehZ0lVgIhSi4bFEk94fLAKlF3Q0nzSQQ+ca0lm+O6G9ztKVBeu8PMRQ==",
      "dev": true
    },
    "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/-/plugin-bugfix-v8-spread-parameters-in-optional-chaining-7.13.12.tgz",
      "integrity": "sha512-d0u3zWKcoZf379fOeJdr1a5WPDny4aOFZ6hlfKivgK0LY7ZxNfoaHL2fWwdGtHyVvra38FC+HVYkO+byfSA8AQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.12.1",
        "@babel/plugin-proposal-optional-chaining": "^7.13.12"
      }
    },
    "@babel/plugin-proposal-async-generator-functions": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.14.2.tgz",
      "integrity": "sha512-b1AM4F6fwck4N8ItZ/AtC4FP/cqZqmKRQ4FaTDutwSYyjuhtvsGEMLK4N/ztV/ImP40BjIDyMgBQAeAMsQYVFQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-remap-async-to-generator": "^7.13.0",
        "@babel/plugin-syntax-async-generators": "^7.8.4"
      }
    },
    "@babel/plugin-proposal-class-properties": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.13.0.tgz",
      "integrity": "sha512-KnTDjFNC1g+45ka0myZNvSBFLhNCLN+GeGYLDEA8Oq7MZ6yMgfLoIRh86GRT0FjtJhZw8JyUskP9uvj5pHM9Zg==",
      "dev": true,
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.13.0",
        "@babel/helper-plugin-utils": "^7.13.0"
      }
    },
    "@babel/plugin-proposal-class-static-block": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-static-block/-/plugin-proposal-class-static-block-7.14.3.tgz",
      "integrity": "sha512-HEjzp5q+lWSjAgJtSluFDrGGosmwTgKwCXdDQZvhKsRlwv3YdkUEqxNrrjesJd+B9E9zvr1PVPVBvhYZ9msjvQ==",
      "dev": true,
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.14.3",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-class-static-block": "^7.12.13"
      }
    },
    "@babel/plugin-proposal-dynamic-import": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.14.2.tgz",
      "integrity": "sha512-oxVQZIWFh91vuNEMKltqNsKLFWkOIyJc95k2Gv9lWVyDfPUQGSSlbDEgWuJUU1afGE9WwlzpucMZ3yDRHIItkA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-dynamic-import": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-export-namespace-from": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-namespace-from/-/plugin-proposal-export-namespace-from-7.14.2.tgz",
      "integrity": "sha512-sRxW3z3Zp3pFfLAgVEvzTFutTXax837oOatUIvSG9o5gRj9mKwm3br1Se5f4QalTQs9x4AzlA/HrCWbQIHASUQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-json-strings": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.14.2.tgz",
      "integrity": "sha512-w2DtsfXBBJddJacXMBhElGEYqCZQqN99Se1qeYn8DVLB33owlrlLftIbMzn5nz1OITfDVknXF433tBrLEAOEjA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-json-strings": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-logical-assignment-operators": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-logical-assignment-operators/-/plugin-proposal-logical-assignment-operators-7.14.2.tgz",
      "integrity": "sha512-1JAZtUrqYyGsS7IDmFeaem+/LJqujfLZ2weLR9ugB0ufUPjzf8cguyVT1g5im7f7RXxuLq1xUxEzvm68uYRtGg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4"
      }
    },
    "@babel/plugin-proposal-nullish-coalescing-operator": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.14.2.tgz",
      "integrity": "sha512-ebR0zU9OvI2N4qiAC38KIAK75KItpIPTpAtd2r4OZmMFeKbKJpUFLYP2EuDut82+BmYi8sz42B+TfTptJ9iG5Q==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-numeric-separator": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.14.2.tgz",
      "integrity": "sha512-DcTQY9syxu9BpU3Uo94fjCB3LN9/hgPS8oUL7KrSW3bA2ePrKZZPJcc5y0hoJAM9dft3pGfErtEUvxXQcfLxUg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4"
      }
    },
    "@babel/plugin-proposal-object-rest-spread": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.14.2.tgz",
      "integrity": "sha512-hBIQFxwZi8GIp934+nj5uV31mqclC1aYDhctDu5khTi9PCCUOczyy0b34W0oE9U/eJXiqQaKyVsmjeagOaSlbw==",
      "dev": true,
      "requires": {
        "@babel/compat-data": "^7.14.0",
        "@babel/helper-compilation-targets": "^7.13.16",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-transform-parameters": "^7.14.2"
      }
    },
    "@babel/plugin-proposal-optional-catch-binding": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.14.2.tgz",
      "integrity": "sha512-XtkJsmJtBaUbOxZsNk0Fvrv8eiqgneug0A6aqLFZ4TSkar2L5dSXWcnUKHgmjJt49pyB/6ZHvkr3dPgl9MOWRQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-optional-chaining": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.14.2.tgz",
      "integrity": "sha512-qQByMRPwMZJainfig10BoaDldx/+VDtNcrA7qdNaEOAj6VXud+gfrkA8j4CRAU5HjnWREXqIpSpH30qZX1xivA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.12.1",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-private-methods": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-methods/-/plugin-proposal-private-methods-7.13.0.tgz",
      "integrity": "sha512-MXyyKQd9inhx1kDYPkFRVOBXQ20ES8Pto3T7UZ92xj2mY0EVD8oAVzeyYuVfy/mxAdTSIayOvg+aVzcHV2bn6Q==",
      "dev": true,
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.13.0",
        "@babel/helper-plugin-utils": "^7.13.0"
      }
    },
    "@babel/plugin-proposal-private-property-in-object": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-property-in-object/-/plugin-proposal-private-property-in-object-7.14.0.tgz",
      "integrity": "sha512-59ANdmEwwRUkLjB7CRtwJxxwtjESw+X2IePItA+RGQh+oy5RmpCh/EvVVvh5XQc3yxsm5gtv0+i9oBZhaDNVTg==",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.12.13",
        "@babel/helper-create-class-features-plugin": "^7.14.0",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-private-property-in-object": "^7.14.0"
      }
    },
    "@babel/plugin-proposal-unicode-property-regex": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.12.13.tgz",
      "integrity": "sha512-XyJmZidNfofEkqFV5VC/bLabGmO5QzenPO/YOfGuEbgU+2sSwMmio3YLb4WtBgcmmdwZHyVyv8on77IUjQ5Gvg==",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-syntax-async-generators": {
      "version": "7.8.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
      "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-class-properties": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
      "integrity": "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-syntax-class-static-block": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-static-block/-/plugin-syntax-class-static-block-7.12.13.tgz",
      "integrity": "sha512-ZmKQ0ZXR0nYpHZIIuj9zE7oIqCx2hw9TKi+lIo73NNrMPAZGHfS92/VRV0ZmPj6H2ffBgyFHXvJ5NYsNeEaP2A==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-syntax-dynamic-import": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
      "integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-export-namespace-from": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
      "integrity": "sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.3"
      }
    },
    "@babel/plugin-syntax-json-strings": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
      "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-logical-assignment-operators": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
      "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-nullish-coalescing-operator": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
      "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-numeric-separator": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
      "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-object-rest-spread": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
      "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-optional-catch-binding": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
      "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-optional-chaining": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
      "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-private-property-in-object": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-private-property-in-object/-/plugin-syntax-private-property-in-object-7.14.0.tgz",
      "integrity": "sha512-bda3xF8wGl5/5btF794utNOL0Jw+9jE5C1sLZcoK7c4uonE/y3iQiyG+KbkF3WBV/paX58VCpjhxLPkdj5Fe4w==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0"
      }
    },
    "@babel/plugin-syntax-top-level-await": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.12.13.tgz",
      "integrity": "sha512-A81F9pDwyS7yM//KwbCSDqy3Uj4NMIurtplxphWxoYtNPov7cJsDkAFNNyVlIZ3jwGycVsurZ+LtOA8gZ376iQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-syntax-typescript": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.12.13.tgz",
      "integrity": "sha512-cHP3u1JiUiG2LFDKbXnwVad81GvfyIOmCD6HIEId6ojrY0Drfy2q1jw7BwN7dE84+kTnBjLkXoL3IEy/3JPu2w==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-arrow-functions": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.13.0.tgz",
      "integrity": "sha512-96lgJagobeVmazXFaDrbmCLQxBysKu7U6Do3mLsx27gf5Dk85ezysrs2BZUpXD703U/Su1xTBDxxar2oa4jAGg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0"
      }
    },
    "@babel/plugin-transform-async-to-generator": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.13.0.tgz",
      "integrity": "sha512-3j6E004Dx0K3eGmhxVJxwwI89CTJrce7lg3UrtFuDAVQ/2+SJ/h/aSFOeE6/n0WB1GsOffsJp6MnPQNQ8nmwhg==",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-remap-async-to-generator": "^7.13.0"
      }
    },
    "@babel/plugin-transform-block-scoped-functions": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.12.13.tgz",
      "integrity": "sha512-zNyFqbc3kI/fVpqwfqkg6RvBgFpC4J18aKKMmv7KdQ/1GgREapSJAykLMVNwfRGO3BtHj3YQZl8kxCXPcVMVeg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-block-scoping": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.14.2.tgz",
      "integrity": "sha512-neZZcP19NugZZqNwMTH+KoBjx5WyvESPSIOQb4JHpfd+zPfqcH65RMu5xJju5+6q/Y2VzYrleQTr+b6METyyxg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0"
      }
    },
    "@babel/plugin-transform-classes": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.14.2.tgz",
      "integrity": "sha512-7oafAVcucHquA/VZCsXv/gmuiHeYd64UJyyTYU+MPfNu0KeNlxw06IeENBO8bJjXVbolu+j1MM5aKQtH1OMCNg==",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.12.13",
        "@babel/helper-function-name": "^7.14.2",
        "@babel/helper-optimise-call-expression": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-replace-supers": "^7.13.12",
        "@babel/helper-split-export-declaration": "^7.12.13",
        "globals": "^11.1.0"
      }
    },
    "@babel/plugin-transform-computed-properties": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.13.0.tgz",
      "integrity": "sha512-RRqTYTeZkZAz8WbieLTvKUEUxZlUTdmL5KGMyZj7FnMfLNKV4+r5549aORG/mgojRmFlQMJDUupwAMiF2Q7OUg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0"
      }
    },
    "@babel/plugin-transform-destructuring": {
      "version": "7.13.17",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.13.17.tgz",
      "integrity": "sha512-UAUqiLv+uRLO+xuBKKMEpC+t7YRNVRqBsWWq1yKXbBZBje/t3IXCiSinZhjn/DC3qzBfICeYd2EFGEbHsh5RLA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0"
      }
    },
    "@babel/plugin-transform-dotall-regex": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.12.13.tgz",
      "integrity": "sha512-foDrozE65ZFdUC2OfgeOCrEPTxdB3yjqxpXh8CH+ipd9CHd4s/iq81kcUpyH8ACGNEPdFqbtzfgzbT/ZGlbDeQ==",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-duplicate-keys": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.12.13.tgz",
      "integrity": "sha512-NfADJiiHdhLBW3pulJlJI2NB0t4cci4WTZ8FtdIuNc2+8pslXdPtRRAEWqUY+m9kNOk2eRYbTAOipAxlrOcwwQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-exponentiation-operator": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.12.13.tgz",
      "integrity": "sha512-fbUelkM1apvqez/yYx1/oICVnGo2KM5s63mhGylrmXUxK/IAXSIf87QIxVfZldWf4QsOafY6vV3bX8aMHSvNrA==",
      "dev": true,
      "requires": {
        "@babel/helper-builder-binary-assignment-operator-visitor": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-for-of": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.13.0.tgz",
      "integrity": "sha512-IHKT00mwUVYE0zzbkDgNRP6SRzvfGCYsOxIRz8KsiaaHCcT9BWIkO+H9QRJseHBLOGBZkHUdHiqj6r0POsdytg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0"
      }
    },
    "@babel/plugin-transform-function-name": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.12.13.tgz",
      "integrity": "sha512-6K7gZycG0cmIwwF7uMK/ZqeCikCGVBdyP2J5SKNCXO5EOHcqi+z7Jwf8AmyDNcBgxET8DrEtCt/mPKPyAzXyqQ==",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-literals": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.12.13.tgz",
      "integrity": "sha512-FW+WPjSR7hiUxMcKqyNjP05tQ2kmBCdpEpZHY1ARm96tGQCCBvXKnpjILtDplUnJ/eHZ0lALLM+d2lMFSpYJrQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-member-expression-literals": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.12.13.tgz",
      "integrity": "sha512-kxLkOsg8yir4YeEPHLuO2tXP9R/gTjpuTOjshqSpELUN3ZAg2jfDnKUvzzJxObun38sw3wm4Uu69sX/zA7iRvg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-modules-amd": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.14.2.tgz",
      "integrity": "sha512-hPC6XBswt8P3G2D1tSV2HzdKvkqOpmbyoy+g73JG0qlF/qx2y3KaMmXb1fLrpmWGLZYA0ojCvaHdzFWjlmV+Pw==",
      "dev": true,
      "requires": {
        "@babel/helper-module-transforms": "^7.14.2",
        "@babel/helper-plugin-utils": "^7.13.0",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      }
    },
    "@babel/plugin-transform-modules-commonjs": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.14.0.tgz",
      "integrity": "sha512-EX4QePlsTaRZQmw9BsoPeyh5OCtRGIhwfLquhxGp5e32w+dyL8htOcDwamlitmNFK6xBZYlygjdye9dbd9rUlQ==",
      "dev": true,
      "requires": {
        "@babel/helper-module-transforms": "^7.14.0",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-simple-access": "^7.13.12",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      }
    },
    "@babel/plugin-transform-modules-systemjs": {
      "version": "7.13.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.13.8.tgz",
      "integrity": "sha512-hwqctPYjhM6cWvVIlOIe27jCIBgHCsdH2xCJVAYQm7V5yTMoilbVMi9f6wKg0rpQAOn6ZG4AOyvCqFF/hUh6+A==",
      "dev": true,
      "requires": {
        "@babel/helper-hoist-variables": "^7.13.0",
        "@babel/helper-module-transforms": "^7.13.0",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-validator-identifier": "^7.12.11",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      }
    },
    "@babel/plugin-transform-modules-umd": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.14.0.tgz",
      "integrity": "sha512-nPZdnWtXXeY7I87UZr9VlsWme3Y0cfFFE41Wbxz4bbaexAjNMInXPFUpRRUJ8NoMm0Cw+zxbqjdPmLhcjfazMw==",
      "dev": true,
      "requires": {
        "@babel/helper-module-transforms": "^7.14.0",
        "@babel/helper-plugin-utils": "^7.13.0"
      }
    },
    "@babel/plugin-transform-named-capturing-groups-regex": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.12.13.tgz",
      "integrity": "sha512-Xsm8P2hr5hAxyYblrfACXpQKdQbx4m2df9/ZZSQ8MAhsadw06+jW7s9zsSw6he+mJZXRlVMyEnVktJo4zjk1WA==",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.13"
      }
    },
    "@babel/plugin-transform-new-target": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.12.13.tgz",
      "integrity": "sha512-/KY2hbLxrG5GTQ9zzZSc3xWiOy379pIETEhbtzwZcw9rvuaVV4Fqy7BYGYOWZnaoXIQYbbJ0ziXLa/sKcGCYEQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-object-super": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.12.13.tgz",
      "integrity": "sha512-JzYIcj3XtYspZDV8j9ulnoMPZZnF/Cj0LUxPOjR89BdBVx+zYJI9MdMIlUZjbXDX+6YVeS6I3e8op+qQ3BYBoQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13",
        "@babel/helper-replace-supers": "^7.12.13"
      }
    },
    "@babel/plugin-transform-parameters": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.14.2.tgz",
      "integrity": "sha512-NxoVmA3APNCC1JdMXkdYXuQS+EMdqy0vIwyDHeKHiJKRxmp1qGSdb0JLEIoPRhkx6H/8Qi3RJ3uqOCYw8giy9A==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0"
      }
    },
    "@babel/plugin-transform-property-literals": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.12.13.tgz",
      "integrity": "sha512-nqVigwVan+lR+g8Fj8Exl0UQX2kymtjcWfMOYM1vTYEKujeyv2SkMgazf2qNcK7l4SDiKyTA/nHCPqL4e2zo1A==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-regenerator": {
      "version": "7.13.15",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.13.15.tgz",
      "integrity": "sha512-Bk9cOLSz8DiurcMETZ8E2YtIVJbFCPGW28DJWUakmyVWtQSm6Wsf0p4B4BfEr/eL2Nkhe/CICiUiMOCi1TPhuQ==",
      "dev": true,
      "requires": {
        "regenerator-transform": "^0.14.2"
      }
    },
    "@babel/plugin-transform-reserved-words": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.12.13.tgz",
      "integrity": "sha512-xhUPzDXxZN1QfiOy/I5tyye+TRz6lA7z6xaT4CLOjPRMVg1ldRf0LHw0TDBpYL4vG78556WuHdyO9oi5UmzZBg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-shorthand-properties": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.12.13.tgz",
      "integrity": "sha512-xpL49pqPnLtf0tVluuqvzWIgLEhuPpZzvs2yabUHSKRNlN7ScYU7aMlmavOeyXJZKgZKQRBlh8rHbKiJDraTSw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-spread": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.13.0.tgz",
      "integrity": "sha512-V6vkiXijjzYeFmQTr3dBxPtZYLPcUfY34DebOU27jIl2M/Y8Egm52Hw82CSjjPqd54GTlJs5x+CR7HeNr24ckg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.12.1"
      }
    },
    "@babel/plugin-transform-sticky-regex": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.12.13.tgz",
      "integrity": "sha512-Jc3JSaaWT8+fr7GRvQP02fKDsYk4K/lYwWq38r/UGfaxo89ajud321NH28KRQ7xy1Ybc0VUE5Pz8psjNNDUglg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-template-literals": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.13.0.tgz",
      "integrity": "sha512-d67umW6nlfmr1iehCcBv69eSUSySk1EsIS8aTDX4Xo9qajAh6mYtcl4kJrBkGXuxZPEgVr7RVfAvNW6YQkd4Mw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0"
      }
    },
    "@babel/plugin-transform-typeof-symbol": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.12.13.tgz",
      "integrity": "sha512-eKv/LmUJpMnu4npgfvs3LiHhJua5fo/CysENxa45YCQXZwKnGCQKAg87bvoqSW1fFT+HA32l03Qxsm8ouTY3ZQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-typescript": {
      "version": "7.14.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typescript/-/plugin-transform-typescript-7.14.3.tgz",
      "integrity": "sha512-G5Bb5pY6tJRTC4ag1visSgiDoGgJ1u1fMUgmc2ijLkcIdzP83Q1qyZX4ggFQ/SkR+PNOatkaYC+nKcTlpsX4ag==",
      "dev": true,
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.14.3",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/plugin-syntax-typescript": "^7.12.13"
      }
    },
    "@babel/plugin-transform-unicode-escapes": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.12.13.tgz",
      "integrity": "sha512-0bHEkdwJ/sN/ikBHfSmOXPypN/beiGqjo+o4/5K+vxEFNPRPdImhviPakMKG4x96l85emoa0Z6cDflsdBusZbw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-transform-unicode-regex": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.12.13.tgz",
      "integrity": "sha512-mDRzSNY7/zopwisPZ5kM9XKCfhchqIYwAKRERtEnhYscZB79VRekuRSoYbN0+KVe3y8+q1h6A4svXtP7N+UoCA==",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/polyfill": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/polyfill/-/polyfill-7.12.1.tgz",
      "integrity": "sha512-X0pi0V6gxLi6lFZpGmeNa4zxtwEmCs42isWLNjZZDE0Y8yVfgu0T2OAHlzBbdYlqbW/YXVvoBHpATEM+goCj8g==",
      "dev": true,
      "requires": {
        "core-js": "^2.6.5",
        "regenerator-runtime": "^0.13.4"
      }
    },
    "@babel/preset-env": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.14.2.tgz",
      "integrity": "sha512-7dD7lVT8GMrE73v4lvDEb85cgcQhdES91BSD7jS/xjC6QY8PnRhux35ac+GCpbiRhp8crexBvZZqnaL6VrY8TQ==",
      "dev": true,
      "requires": {
        "@babel/compat-data": "^7.14.0",
        "@babel/helper-compilation-targets": "^7.13.16",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-validator-option": "^7.12.17",
        "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": "^7.13.12",
        "@babel/plugin-proposal-async-generator-functions": "^7.14.2",
        "@babel/plugin-proposal-class-properties": "^7.13.0",
        "@babel/plugin-proposal-class-static-block": "^7.13.11",
        "@babel/plugin-proposal-dynamic-import": "^7.14.2",
        "@babel/plugin-proposal-export-namespace-from": "^7.14.2",
        "@babel/plugin-proposal-json-strings": "^7.14.2",
        "@babel/plugin-proposal-logical-assignment-operators": "^7.14.2",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.14.2",
        "@babel/plugin-proposal-numeric-separator": "^7.14.2",
        "@babel/plugin-proposal-object-rest-spread": "^7.14.2",
        "@babel/plugin-proposal-optional-catch-binding": "^7.14.2",
        "@babel/plugin-proposal-optional-chaining": "^7.14.2",
        "@babel/plugin-proposal-private-methods": "^7.13.0",
        "@babel/plugin-proposal-private-property-in-object": "^7.14.0",
        "@babel/plugin-proposal-unicode-property-regex": "^7.12.13",
        "@babel/plugin-syntax-async-generators": "^7.8.4",
        "@babel/plugin-syntax-class-properties": "^7.12.13",
        "@babel/plugin-syntax-class-static-block": "^7.12.13",
        "@babel/plugin-syntax-dynamic-import": "^7.8.3",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3",
        "@babel/plugin-syntax-json-strings": "^7.8.3",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3",
        "@babel/plugin-syntax-private-property-in-object": "^7.14.0",
        "@babel/plugin-syntax-top-level-await": "^7.12.13",
        "@babel/plugin-transform-arrow-functions": "^7.13.0",
        "@babel/plugin-transform-async-to-generator": "^7.13.0",
        "@babel/plugin-transform-block-scoped-functions": "^7.12.13",
        "@babel/plugin-transform-block-scoping": "^7.14.2",
        "@babel/plugin-transform-classes": "^7.14.2",
        "@babel/plugin-transform-computed-properties": "^7.13.0",
        "@babel/plugin-transform-destructuring": "^7.13.17",
        "@babel/plugin-transform-dotall-regex": "^7.12.13",
        "@babel/plugin-transform-duplicate-keys": "^7.12.13",
        "@babel/plugin-transform-exponentiation-operator": "^7.12.13",
        "@babel/plugin-transform-for-of": "^7.13.0",
        "@babel/plugin-transform-function-name": "^7.12.13",
        "@babel/plugin-transform-literals": "^7.12.13",
        "@babel/plugin-transform-member-expression-literals": "^7.12.13",
        "@babel/plugin-transform-modules-amd": "^7.14.2",
        "@babel/plugin-transform-modules-commonjs": "^7.14.0",
        "@babel/plugin-transform-modules-systemjs": "^7.13.8",
        "@babel/plugin-transform-modules-umd": "^7.14.0",
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.12.13",
        "@babel/plugin-transform-new-target": "^7.12.13",
        "@babel/plugin-transform-object-super": "^7.12.13",
        "@babel/plugin-transform-parameters": "^7.14.2",
        "@babel/plugin-transform-property-literals": "^7.12.13",
        "@babel/plugin-transform-regenerator": "^7.13.15",
        "@babel/plugin-transform-reserved-words": "^7.12.13",
        "@babel/plugin-transform-shorthand-properties": "^7.12.13",
        "@babel/plugin-transform-spread": "^7.13.0",
        "@babel/plugin-transform-sticky-regex": "^7.12.13",
        "@babel/plugin-transform-template-literals": "^7.13.0",
        "@babel/plugin-transform-typeof-symbol": "^7.12.13",
        "@babel/plugin-transform-unicode-escapes": "^7.12.13",
        "@babel/plugin-transform-unicode-regex": "^7.12.13",
        "@babel/preset-modules": "^0.1.4",
        "@babel/types": "^7.14.2",
        "babel-plugin-polyfill-corejs2": "^0.2.0",
        "babel-plugin-polyfill-corejs3": "^0.2.0",
        "babel-plugin-polyfill-regenerator": "^0.2.0",
        "core-js-compat": "^3.9.0",
        "semver": "^6.3.0"
      }
    },
    "@babel/preset-modules": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.4.tgz",
      "integrity": "sha512-J36NhwnfdzpmH41M1DrnkkgAqhZaqr/NBdPfQ677mLzlaXo+oDiv1deyCDtgAhz8p328otdob0Du7+xgHGZbKg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-proposal-unicode-property-regex": "^7.4.4",
        "@babel/plugin-transform-dotall-regex": "^7.4.4",
        "@babel/types": "^7.4.4",
        "esutils": "^2.0.2"
      }
    },
    "@babel/preset-typescript": {
      "version": "7.13.0",
      "resolved": "https://registry.npmjs.org/@babel/preset-typescript/-/preset-typescript-7.13.0.tgz",
      "integrity": "sha512-LXJwxrHy0N3f6gIJlYbLta1D9BDtHpQeqwzM0LIfjDlr6UE/D5Mc7W4iDiQzaE+ks0sTjT26ArcHWnJVt0QiHw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/helper-validator-option": "^7.12.17",
        "@babel/plugin-transform-typescript": "^7.13.0"
      }
    },
    "@babel/register": {
      "version": "7.13.16",
      "resolved": "https://registry.npmjs.org/@babel/register/-/register-7.13.16.tgz",
      "integrity": "sha512-dh2t11ysujTwByQjXNgJ48QZ2zcXKQVdV8s0TbeMI0flmtGWCdTwK9tJiACHXPLmncm5+ktNn/diojA45JE4jg==",
      "dev": true,
      "requires": {
        "clone-deep": "^4.0.1",
        "find-cache-dir": "^2.0.0",
        "make-dir": "^2.1.0",
        "pirates": "^4.0.0",
        "source-map-support": "^0.5.16"
      },
      "dependencies": {
        "make-dir": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
          "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
          "dev": true,
          "requires": {
            "pify": "^4.0.1",
            "semver": "^5.6.0"
          }
        },
        "pify": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
          "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
          "dev": true
        },
        "semver": {
          "version": "5.7.1",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
          "dev": true
        }
      }
    },
    "@babel/runtime": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.14.0.tgz",
      "integrity": "sha512-JELkvo/DlpNdJ7dlyw/eY7E0suy5i5GQH+Vlxaq1nsNJ+H7f4Vtv3jMeCEgRhZZQFXTjldYfQgv2qmM6M1v5wA==",
      "dev": true,
      "requires": {
        "regenerator-runtime": "^0.13.4"
      }
    },
    "@babel/template": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.12.13.tgz",
      "integrity": "sha512-/7xxiGA57xMo/P2GVvdEumr8ONhFOhfgq2ihK3h1e6THqzTAkHbkXgB0xI9yeTfIUoH3+oAeHhqm/I43OTbbjA==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.12.13",
        "@babel/parser": "^7.12.13",
        "@babel/types": "^7.12.13"
      }
    },
    "@babel/traverse": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.14.2.tgz",
      "integrity": "sha512-TsdRgvBFHMyHOOzcP9S6QU0QQtjxlRpEYOy3mcCO5RgmC305ki42aSAmfZEMSSYBla2oZ9BMqYlncBaKmD/7iA==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.12.13",
        "@babel/generator": "^7.14.2",
        "@babel/helper-function-name": "^7.14.2",
        "@babel/helper-split-export-declaration": "^7.12.13",
        "@babel/parser": "^7.14.2",
        "@babel/types": "^7.14.2",
        "debug": "^4.1.0",
        "globals": "^11.1.0"
      }
    },
    "@babel/types": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.14.2.tgz",
      "integrity": "sha512-SdjAG/3DikRHpUOjxZgnkbR11xUlyDMUFJdvnIgZEE16mqmY0BINMmc4//JMJglEmn6i7sq6p+mGrFWyZ98EEw==",
      "dev": true,
      "requires": {
        "@babel/helper-validator-identifier": "^7.14.0",
        "to-fast-properties": "^2.0.0"
      }
    },
    "@discoveryjs/json-ext": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/@discoveryjs/json-ext/-/json-ext-0.5.3.tgz",
      "integrity": "sha512-Fxt+AfXgjMoin2maPIYzFZnQjAXjAL0PHscM5pRTtatFqB+vZxAM9tLp2Optnuw3QOQC40jTNeGYFOMvyf7v9g==",
      "dev": true
    },
    "@eslint/eslintrc": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-0.4.1.tgz",
      "integrity": "sha512-5v7TDE9plVhvxQeWLXDTvFvJBdH6pEsdnl2g/dAptmuFEPedQ4Erq5rsDsX+mvAM610IhNaO2W5V1dOOnDKxkQ==",
      "dev": true,
      "requires": {
        "ajv": "^6.12.4",
        "debug": "^4.1.1",
        "espree": "^7.3.0",
        "globals": "^12.1.0",
        "ignore": "^4.0.6",
        "import-fresh": "^3.2.1",
        "js-yaml": "^3.13.1",
        "minimatch": "^3.0.4",
        "strip-json-comments": "^3.1.1"
      },
      "dependencies": {
        "globals": {
          "version": "12.4.0",
          "resolved": "https://registry.npmjs.org/globals/-/globals-12.4.0.tgz",
          "integrity": "sha512-BWICuzzDvDoH54NHKCseDanAhE3CeDorgDL5MT6LMXXj2WCnd9UC2szdk4AWLfjdgNBCXLUanXYcpBBKOSWGwg==",
          "dev": true,
          "requires": {
            "type-fest": "^0.8.1"
          }
        }
      }
    },
    "@istanbuljs/load-nyc-config": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
      "integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
      "dev": true,
      "requires": {
        "camelcase": "^5.3.1",
        "find-up": "^4.1.0",
        "get-package-type": "^0.1.0",
        "js-yaml": "^3.13.1",
        "resolve-from": "^5.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
          "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
          "dev": true,
          "requires": {
            "locate-path": "^5.0.0",
            "path-exists": "^4.0.0"
          }
        },
        "locate-path": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
          "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
          "dev": true,
          "requires": {
            "p-locate": "^4.1.0"
          }
        },
        "p-locate": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
          "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
          "dev": true,
          "requires": {
            "p-limit": "^2.2.0"
          }
        },
        "path-exists": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
          "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
          "dev": true
        },
        "resolve-from": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
          "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
          "dev": true
        }
      }
    },
    "@istanbuljs/schema": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
      "integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==",
      "dev": true
    },
    "@mdn/browser-compat-data": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/@mdn/browser-compat-data/-/browser-compat-data-3.3.3.tgz",
      "integrity": "sha512-ikDzSgs2SbBtKVXCNfU6GzVACpUuojZS8Vu/VhM1EwtWvtfGJsrRETLbV231ODMvWtfKJThzrsk2Hp88fv9+gA==",
      "dev": true
    },
    "@nicolo-ribaudo/chokidar-2": {
      "version": "2.1.8-no-fsevents",
      "resolved": "https://registry.npmjs.org/@nicolo-ribaudo/chokidar-2/-/chokidar-2-2.1.8-no-fsevents.tgz",
      "integrity": "sha512-+nb9vWloHNNMFHjGofEam3wopE3m1yuambrrd/fnPc+lFOMB9ROTqQlche9ByFWNkdNqfSgR/kkQtQ8DzEWt2w==",
      "dev": true,
      "optional": true,
      "requires": {
        "anymatch": "^2.0.0",
        "async-each": "^1.0.1",
        "braces": "^2.3.2",
        "glob-parent": "^3.1.0",
        "inherits": "^2.0.3",
        "is-binary-path": "^1.0.0",
        "is-glob": "^4.0.0",
        "normalize-path": "^3.0.0",
        "path-is-absolute": "^1.0.0",
        "readdirp": "^2.2.1",
        "upath": "^1.1.1"
      }
    },
    "@nodelib/fs.scandir": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.4.tgz",
      "integrity": "sha512-33g3pMJk3bg5nXbL/+CY6I2eJDzZAni49PfJnL5fghPTggPvBd/pFNSgJsdAgWptuFu7qq/ERvOYFlhvsLTCKA==",
      "dev": true,
      "requires": {
        "@nodelib/fs.stat": "2.0.4",
        "run-parallel": "^1.1.9"
      }
    },
    "@nodelib/fs.stat": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.4.tgz",
      "integrity": "sha512-IYlHJA0clt2+Vg7bccq+TzRdJvv19c2INqBSsoOLp1je7xjtr7J26+WXR72MCdvU9q1qTzIWDfhMf+DRvQJK4Q==",
      "dev": true
    },
    "@nodelib/fs.walk": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.6.tgz",
      "integrity": "sha512-8Broas6vTtW4GIXTAHDoE32hnN2M5ykgCpWGbuXHQ15vEMqr23pB76e/GZcYsZCHALv50ktd24qhEyKr6wBtow==",
      "dev": true,
      "requires": {
        "@nodelib/fs.scandir": "2.1.4",
        "fastq": "^1.6.0"
      }
    },
    "@sindresorhus/is": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.7.0.tgz",
      "integrity": "sha512-ONhaKPIufzzrlNbqtWFFd+jlnemX6lJAgq9ZeiZtS7I1PIf/la7CW4m83rTXRnVnsMbW2k56pGYu7AUFJD9Pow==",
      "dev": true
    },
    "@types/chrome": {
      "version": "0.0.141",
      "resolved": "https://registry.npmjs.org/@types/chrome/-/chrome-0.0.141.tgz",
      "integrity": "sha512-0bYsCxGKo9xdrNHiqWRjPVygDRfKA2EczhXJmKjkfBF+KQc0BFKejtdFV28ygcVH3RTjGZ+ccoJ3bb8wKFacbw==",
      "dev": true,
      "requires": {
        "@types/filesystem": "*",
        "@types/har-format": "*"
      }
    },
    "@types/decompress": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/@types/decompress/-/decompress-4.2.3.tgz",
      "integrity": "sha512-W24e3Ycz1UZPgr1ZEDHlK4XnvOr+CpJH3qNsFeqXwwlW/9END9gxn3oJSsp7gYdiQxrXUHwUUd3xuzVz37MrZQ==",
      "dev": true,
      "peer": true,
      "requires": {
        "@types/node": "*"
      }
    },
    "@types/download": {
      "version": "6.2.4",
      "resolved": "https://registry.npmjs.org/@types/download/-/download-6.2.4.tgz",
      "integrity": "sha512-Lo5dy3ai6LNnbL663sgdzqL1eib11u1yKH6w3v3IXEOO4kRfQpMn1qWUTaumcHLACjFp1RcBx9tUXEvJoR3vcA==",
      "dev": true,
      "peer": true,
      "requires": {
        "@types/decompress": "*",
        "@types/got": "^8",
        "@types/node": "*"
      }
    },
    "@types/eslint": {
      "version": "7.2.6",
      "resolved": "https://registry.npmjs.org/@types/eslint/-/eslint-7.2.6.tgz",
      "integrity": "sha512-I+1sYH+NPQ3/tVqCeUSBwTE/0heyvtXqpIopUUArlBm0Kpocb8FbMa3AZ/ASKIFpN3rnEx932TTXDbt9OXsNDw==",
      "dev": true,
      "requires": {
        "@types/estree": "*",
        "@types/json-schema": "*"
      }
    },
    "@types/eslint-scope": {
      "version": "3.7.0",
      "resolved": "https://registry.npmjs.org/@types/eslint-scope/-/eslint-scope-3.7.0.tgz",
      "integrity": "sha512-O/ql2+rrCUe2W2rs7wMR+GqPRcgB6UiqN5RhrR5xruFlY7l9YLMn0ZkDzjoHLeiFkR8MCQZVudUuuvQ2BLC9Qw==",
      "dev": true,
      "requires": {
        "@types/eslint": "*",
        "@types/estree": "*"
      }
    },
    "@types/estree": {
      "version": "0.0.47",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-0.0.47.tgz",
      "integrity": "sha512-c5ciR06jK8u9BstrmJyO97m+klJrrhCf9u3rLu3DEAJBirxRqSCvDQoYKmxuYwQI5SZChAWu+tq9oVlGRuzPAg==",
      "dev": true
    },
    "@types/filesystem": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/filesystem/-/filesystem-0.0.29.tgz",
      "integrity": "sha512-85/1KfRedmfPGsbK8YzeaQUyV1FQAvMPMTuWFQ5EkLd2w7szhNO96bk3Rh/SKmOfd9co2rCLf0Voy4o7ECBOvw==",
      "dev": true,
      "requires": {
        "@types/filewriter": "*"
      }
    },
    "@types/filewriter": {
      "version": "0.0.28",
      "resolved": "https://registry.npmjs.org/@types/filewriter/-/filewriter-0.0.28.tgz",
      "integrity": "sha1-wFTor02d11205jq8dviFFocU1LM=",
      "dev": true
    },
    "@types/got": {
      "version": "8.3.5",
      "resolved": "https://registry.npmjs.org/@types/got/-/got-8.3.5.tgz",
      "integrity": "sha512-AaXSrIF99SjjtPVNmCmYb388HML+PKEJb/xmj4SbL2ZO0hHuETZZzyDIKfOqaEoAHZEuX4sC+FRFrHYJoIby6A==",
      "dev": true,
      "peer": true,
      "requires": {
        "@types/node": "*"
      }
    },
    "@types/har-format": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/@types/har-format/-/har-format-1.2.5.tgz",
      "integrity": "sha512-IG8AE1m2pWtPqQ7wXhFhy6Q59bwwnLwO36v5Rit2FrbXCIp8Sk8E2PfUCreyrdo17STwFSKDAkitVuVYbpEHvQ==",
      "dev": true
    },
    "@types/json-schema": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.6.tgz",
      "integrity": "sha512-3c+yGKvVP5Y9TYBEibGNR+kLtijnj7mYrXRg+WpFb2X9xm04g/DXYkfg4hmzJQosc9snFNUPkbYIhu+KAm6jJw==",
      "dev": true
    },
    "@types/node": {
      "version": "14.14.19",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-14.14.19.tgz",
      "integrity": "sha512-4nhBPStMK04rruRVtVc6cDqhu7S9GZai0fpXgPXrFpcPX6Xul8xnrjSdGB4KPBVYG/R5+fXWdCM8qBoiULWGPQ==",
      "dev": true
    },
    "@types/yauzl": {
      "version": "2.9.1",
      "resolved": "https://registry.npmjs.org/@types/yauzl/-/yauzl-2.9.1.tgz",
      "integrity": "sha512-A1b8SU4D10uoPjwb0lnHmmu8wZhR9d+9o2PKBQT2jU5YPTKsxac6M2qGAdY7VcL+dHHhARVUDmeg0rOrcd9EjA==",
      "dev": true,
      "requires": {
        "@types/node": "*"
      }
    },
    "@typescript-eslint/eslint-plugin": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-4.24.0.tgz",
      "integrity": "sha512-qbCgkPM7DWTsYQGjx9RTuQGswi+bEt0isqDBeo+CKV0953zqI0Tp7CZ7Fi9ipgFA6mcQqF4NOVNwS/f2r6xShw==",
      "dev": true,
      "requires": {
        "@typescript-eslint/experimental-utils": "4.24.0",
        "@typescript-eslint/scope-manager": "4.24.0",
        "debug": "^4.1.1",
        "functional-red-black-tree": "^1.0.1",
        "lodash": "^4.17.15",
        "regexpp": "^3.0.0",
        "semver": "^7.3.2",
        "tsutils": "^3.17.1"
      },
      "dependencies": {
        "semver": {
          "version": "7.3.4",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.4.tgz",
          "integrity": "sha512-tCfb2WLjqFAtXn4KEdxIhalnRtoKFN7nAwj0B3ZXCbQloV2tq5eDbcTmT68JJD3nRJq24/XgxtQKFIpQdtvmVw==",
          "dev": true,
          "requires": {
            "lru-cache": "^6.0.0"
          }
        }
      }
    },
    "@typescript-eslint/experimental-utils": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/experimental-utils/-/experimental-utils-4.24.0.tgz",
      "integrity": "sha512-IwTT2VNDKH1h8RZseMH4CcYBz6lTvRoOLDuuqNZZoThvfHEhOiZPQCow+5El3PtyxJ1iDr6UXZwYtE3yZQjhcw==",
      "dev": true,
      "requires": {
        "@types/json-schema": "^7.0.3",
        "@typescript-eslint/scope-manager": "4.24.0",
        "@typescript-eslint/types": "4.24.0",
        "@typescript-eslint/typescript-estree": "4.24.0",
        "eslint-scope": "^5.0.0",
        "eslint-utils": "^2.0.0"
      }
    },
    "@typescript-eslint/parser": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-4.24.0.tgz",
      "integrity": "sha512-dj1ZIh/4QKeECLb2f/QjRwMmDArcwc2WorWPRlB8UNTZlY1KpTVsbX7e3ZZdphfRw29aTFUSNuGB8w9X5sS97w==",
      "dev": true,
      "requires": {
        "@typescript-eslint/scope-manager": "4.24.0",
        "@typescript-eslint/types": "4.24.0",
        "@typescript-eslint/typescript-estree": "4.24.0",
        "debug": "^4.1.1"
      }
    },
    "@typescript-eslint/scope-manager": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-4.24.0.tgz",
      "integrity": "sha512-9+WYJGDnuC9VtYLqBhcSuM7du75fyCS/ypC8c5g7Sdw7pGL4NDTbeH38eJPfzIydCHZDoOgjloxSAA3+4l/zsA==",
      "dev": true,
      "requires": {
        "@typescript-eslint/types": "4.24.0",
        "@typescript-eslint/visitor-keys": "4.24.0"
      }
    },
    "@typescript-eslint/types": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-4.24.0.tgz",
      "integrity": "sha512-tkZUBgDQKdvfs8L47LaqxojKDE+mIUmOzdz7r+u+U54l3GDkTpEbQ1Jp3cNqqAU9vMUCBA1fitsIhm7yN0vx9Q==",
      "dev": true
    },
    "@typescript-eslint/typescript-estree": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-4.24.0.tgz",
      "integrity": "sha512-kBDitL/by/HK7g8CYLT7aKpAwlR8doshfWz8d71j97n5kUa5caHWvY0RvEUEanL/EqBJoANev8Xc/mQ6LLwXGA==",
      "dev": true,
      "requires": {
        "@typescript-eslint/types": "4.24.0",
        "@typescript-eslint/visitor-keys": "4.24.0",
        "debug": "^4.1.1",
        "globby": "^11.0.1",
        "is-glob": "^4.0.1",
        "semver": "^7.3.2",
        "tsutils": "^3.17.1"
      },
      "dependencies": {
        "semver": {
          "version": "7.3.5",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
          "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
          "dev": true,
          "requires": {
            "lru-cache": "^6.0.0"
          }
        }
      }
    },
    "@typescript-eslint/visitor-keys": {
      "version": "4.24.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-4.24.0.tgz",
      "integrity": "sha512-4ox1sjmGHIxjEDBnMCtWFFhErXtKA1Ec0sBpuz0fqf3P+g3JFGyTxxbF06byw0FRsPnnbq44cKivH7Ks1/0s6g==",
      "dev": true,
      "requires": {
        "@typescript-eslint/types": "4.24.0",
        "eslint-visitor-keys": "^2.0.0"
      }
    },
    "@ungap/promise-all-settled": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@ungap/promise-all-settled/-/promise-all-settled-1.1.2.tgz",
      "integrity": "sha512-sL/cEvJWAnClXw0wHk85/2L0G6Sj8UB0Ctc1TEMbKSsmpRosqhwj9gWgFRZSrBr2f9tiXISwNhCPmlfqUqyb9Q==",
      "dev": true
    },
    "@webassemblyjs/ast": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.11.0.tgz",
      "integrity": "sha512-kX2W49LWsbthrmIRMbQZuQDhGtjyqXfEmmHyEi4XWnSZtPmxY0+3anPIzsnRb45VH/J55zlOfWvZuY47aJZTJg==",
      "dev": true,
      "requires": {
        "@webassemblyjs/helper-numbers": "1.11.0",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.0"
      }
    },
    "@webassemblyjs/floating-point-hex-parser": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.11.0.tgz",
      "integrity": "sha512-Q/aVYs/VnPDVYvsCBL/gSgwmfjeCb4LW8+TMrO3cSzJImgv8lxxEPM2JA5jMrivE7LSz3V+PFqtMbls3m1exDA==",
      "dev": true
    },
    "@webassemblyjs/helper-api-error": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.11.0.tgz",
      "integrity": "sha512-baT/va95eXiXb2QflSx95QGT5ClzWpGaa8L7JnJbgzoYeaA27FCvuBXU758l+KXWRndEmUXjP0Q5fibhavIn8w==",
      "dev": true
    },
    "@webassemblyjs/helper-buffer": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.11.0.tgz",
      "integrity": "sha512-u9HPBEl4DS+vA8qLQdEQ6N/eJQ7gT7aNvMIo8AAWvAl/xMrcOSiI2M0MAnMCy3jIFke7bEee/JwdX1nUpCtdyA==",
      "dev": true
    },
    "@webassemblyjs/helper-numbers": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-numbers/-/helper-numbers-1.11.0.tgz",
      "integrity": "sha512-DhRQKelIj01s5IgdsOJMKLppI+4zpmcMQ3XboFPLwCpSNH6Hqo1ritgHgD0nqHeSYqofA6aBN/NmXuGjM1jEfQ==",
      "dev": true,
      "requires": {
        "@webassemblyjs/floating-point-hex-parser": "1.11.0",
        "@webassemblyjs/helper-api-error": "1.11.0",
        "@xtuc/long": "4.2.2"
      }
    },
    "@webassemblyjs/helper-wasm-bytecode": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.11.0.tgz",
      "integrity": "sha512-MbmhvxXExm542tWREgSFnOVo07fDpsBJg3sIl6fSp9xuu75eGz5lz31q7wTLffwL3Za7XNRCMZy210+tnsUSEA==",
      "dev": true
    },
    "@webassemblyjs/helper-wasm-section": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.11.0.tgz",
      "integrity": "sha512-3Eb88hcbfY/FCukrg6i3EH8H2UsD7x8Vy47iVJrP967A9JGqgBVL9aH71SETPx1JrGsOUVLo0c7vMCN22ytJew==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.11.0",
        "@webassemblyjs/helper-buffer": "1.11.0",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.0",
        "@webassemblyjs/wasm-gen": "1.11.0"
      }
    },
    "@webassemblyjs/ieee754": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.11.0.tgz",
      "integrity": "sha512-KXzOqpcYQwAfeQ6WbF6HXo+0udBNmw0iXDmEK5sFlmQdmND+tr773Ti8/5T/M6Tl/413ArSJErATd8In3B+WBA==",
      "dev": true,
      "requires": {
        "@xtuc/ieee754": "^1.2.0"
      }
    },
    "@webassemblyjs/leb128": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.11.0.tgz",
      "integrity": "sha512-aqbsHa1mSQAbeeNcl38un6qVY++hh8OpCOzxhixSYgbRfNWcxJNJQwe2rezK9XEcssJbbWIkblaJRwGMS9zp+g==",
      "dev": true,
      "requires": {
        "@xtuc/long": "4.2.2"
      }
    },
    "@webassemblyjs/utf8": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.11.0.tgz",
      "integrity": "sha512-A/lclGxH6SpSLSyFowMzO/+aDEPU4hvEiooCMXQPcQFPPJaYcPQNKGOCLUySJsYJ4trbpr+Fs08n4jelkVTGVw==",
      "dev": true
    },
    "@webassemblyjs/wasm-edit": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.11.0.tgz",
      "integrity": "sha512-JHQ0damXy0G6J9ucyKVXO2j08JVJ2ntkdJlq1UTiUrIgfGMmA7Ik5VdC/L8hBK46kVJgujkBIoMtT8yVr+yVOQ==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.11.0",
        "@webassemblyjs/helper-buffer": "1.11.0",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.0",
        "@webassemblyjs/helper-wasm-section": "1.11.0",
        "@webassemblyjs/wasm-gen": "1.11.0",
        "@webassemblyjs/wasm-opt": "1.11.0",
        "@webassemblyjs/wasm-parser": "1.11.0",
        "@webassemblyjs/wast-printer": "1.11.0"
      }
    },
    "@webassemblyjs/wasm-gen": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.11.0.tgz",
      "integrity": "sha512-BEUv1aj0WptCZ9kIS30th5ILASUnAPEvE3tVMTrItnZRT9tXCLW2LEXT8ezLw59rqPP9klh9LPmpU+WmRQmCPQ==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.11.0",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.0",
        "@webassemblyjs/ieee754": "1.11.0",
        "@webassemblyjs/leb128": "1.11.0",
        "@webassemblyjs/utf8": "1.11.0"
      }
    },
    "@webassemblyjs/wasm-opt": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.11.0.tgz",
      "integrity": "sha512-tHUSP5F4ywyh3hZ0+fDQuWxKx3mJiPeFufg+9gwTpYp324mPCQgnuVKwzLTZVqj0duRDovnPaZqDwoyhIO8kYg==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.11.0",
        "@webassemblyjs/helper-buffer": "1.11.0",
        "@webassemblyjs/wasm-gen": "1.11.0",
        "@webassemblyjs/wasm-parser": "1.11.0"
      }
    },
    "@webassemblyjs/wasm-parser": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.11.0.tgz",
      "integrity": "sha512-6L285Sgu9gphrcpDXINvm0M9BskznnzJTE7gYkjDbxET28shDqp27wpruyx3C2S/dvEwiigBwLA1cz7lNUi0kw==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.11.0",
        "@webassemblyjs/helper-api-error": "1.11.0",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.0",
        "@webassemblyjs/ieee754": "1.11.0",
        "@webassemblyjs/leb128": "1.11.0",
        "@webassemblyjs/utf8": "1.11.0"
      }
    },
    "@webassemblyjs/wast-printer": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.11.0.tgz",
      "integrity": "sha512-Fg5OX46pRdTgB7rKIUojkh9vXaVN6sGYCnEiJN1GYkb0RPwShZXp6KTDqmoMdQPKhcroOXh3fEzmkWmCYaKYhQ==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.11.0",
        "@xtuc/long": "4.2.2"
      }
    },
    "@webpack-cli/configtest": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@webpack-cli/configtest/-/configtest-1.0.3.tgz",
      "integrity": "sha512-WQs0ep98FXX2XBAfQpRbY0Ma6ADw8JR6xoIkaIiJIzClGOMqVRvPCWqndTxf28DgFopWan0EKtHtg/5W1h0Zkw==",
      "dev": true,
      "requires": {}
    },
    "@webpack-cli/info": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@webpack-cli/info/-/info-1.2.4.tgz",
      "integrity": "sha512-ogE2T4+pLhTTPS/8MM3IjHn0IYplKM4HbVNMCWA9N4NrdPzunwenpCsqKEXyejMfRu6K8mhauIPYf8ZxWG5O6g==",
      "dev": true,
      "requires": {
        "envinfo": "^7.7.3"
      }
    },
    "@webpack-cli/serve": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@webpack-cli/serve/-/serve-1.4.0.tgz",
      "integrity": "sha512-xgT/HqJ+uLWGX+Mzufusl3cgjAcnqYYskaB7o0vRcwOEfuu6hMzSILQpnIzFMGsTaeaX4Nnekl+6fadLbl1/Vg==",
      "dev": true,
      "requires": {}
    },
    "@xtuc/ieee754": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
      "integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==",
      "dev": true
    },
    "@xtuc/long": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz",
      "integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==",
      "dev": true
    },
    "accepts": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
      "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
      "dev": true,
      "peer": true,
      "requires": {
        "mime-types": "~2.1.24",
        "negotiator": "0.6.2"
      }
    },
    "acorn": {
      "version": "8.2.4",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.2.4.tgz",
      "integrity": "sha512-Ibt84YwBDDA890eDiDCEqcbwvHlBvzzDkU2cGBBDDI1QWT12jTiXIOn2CIw5KK4i6N5Z2HUxwYjzriDyqaqqZg==",
      "dev": true
    },
    "acorn-jsx": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.1.tgz",
      "integrity": "sha512-K0Ptm/47OKfQRpNQ2J/oIN/3QYiK6FwW+eJbILhsdxh2WTLdl+30o8aGdTbm5JbffpFFAg/g+zi1E+jvJha5ng==",
      "dev": true
    },
    "addons-linter": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/addons-linter/-/addons-linter-3.5.0.tgz",
      "integrity": "sha512-Fic4AxTAEOUGQGdFiUbtJG3kEtCJd/fjwnGMLp/HIJwR6GJclV5yUvszWdedtWrhOBCM/hMaloVdWXfymWi/xQ==",
      "dev": true,
      "requires": {
        "@mdn/browser-compat-data": "3.3.3",
        "addons-scanner-utils": "4.5.0",
        "ajv": "6.12.6",
        "ajv-merge-patch": "4.1.0",
        "chalk": "4.1.1",
        "cheerio": "1.0.0-rc.9",
        "columnify": "1.5.4",
        "common-tags": "1.8.0",
        "deepmerge": "4.2.2",
        "dispensary": "0.62.0",
        "eslint": "7.26.0",
        "eslint-plugin-no-unsanitized": "3.1.5",
        "eslint-visitor-keys": "2.1.0",
        "espree": "7.3.1",
        "esprima": "4.0.1",
        "fluent-syntax": "0.13.0",
        "glob": "7.1.7",
        "image-size": "1.0.0",
        "is-mergeable-object": "1.1.1",
        "jed": "1.1.1",
        "os-locale": "5.0.0",
        "pino": "6.11.3",
        "postcss": "8.2.14",
        "relaxed-json": "1.0.3",
        "semver": "7.3.5",
        "source-map-support": "0.5.19",
        "tosource": "1.0.0",
        "upath": "2.0.1",
        "yargs": "16.2.0",
        "yauzl": "2.10.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "dev": true,
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.1.tgz",
          "integrity": "sha512-diHzdDKxcU+bAsUboHLPEDQiw0qEe0qd7SYUn3HgcFlWgbDcfLGswOHYeGrHKzG9z6UYf01d9VFMfZxPM1xZSg==",
          "dev": true,
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "dev": true,
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
          "dev": true
        },
        "execa": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/execa/-/execa-4.1.0.tgz",
          "integrity": "sha512-j5W0//W7f8UxAn8hXVnwG8tLwdiUy4FJLcSupCg6maBYZDpyBvTApK7KyuI4bKj8KOh1r2YH+6ucuYtJv1bTZA==",
          "dev": true,
          "requires": {
            "cross-spawn": "^7.0.0",
            "get-stream": "^5.0.0",
            "human-signals": "^1.1.1",
            "is-stream": "^2.0.0",
            "merge-stream": "^2.0.0",
            "npm-run-path": "^4.0.0",
            "onetime": "^5.1.0",
            "signal-exit": "^3.0.2",
            "strip-final-newline": "^2.0.0"
          }
        },
        "get-stream": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
          "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
          "dev": true,
          "requires": {
            "pump": "^3.0.0"
          }
        },
        "glob": {
          "version": "7.1.7",
          "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.7.tgz",
          "integrity": "sha512-OvD9ENzPLbegENnYP5UUfJIirTg4+XwMWGaQfQTY0JenxNvvIKP3U3/tAQSPIu/lHxXYSZmpXlUHeqAIdKzBLQ==",
          "dev": true,
          "requires": {
            "fs.realpath": "^1.0.0",
            "inflight": "^1.0.4",
            "inherits": "2",
            "minimatch": "^3.0.4",
            "once": "^1.3.0",
            "path-is-absolute": "^1.0.0"
          }
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
          "dev": true
        },
        "invert-kv": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-3.0.1.tgz",
          "integrity": "sha512-CYdFeFexxhv/Bcny+Q0BfOV+ltRlJcd4BBZBYFX/O0u4npJrgZtIcjokegtiSMAvlMTJ+Koq0GBCc//3bueQxw==",
          "dev": true
        },
        "is-stream": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
          "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw==",
          "dev": true
        },
        "lcid": {
          "version": "3.1.1",
          "resolved": "https://registry.npmjs.org/lcid/-/lcid-3.1.1.tgz",
          "integrity": "sha512-M6T051+5QCGLBQb8id3hdvIW8+zeFV2FyBGFS9IEK5H9Wt4MueD4bW1eWikpHgZp+5xR3l5c8pZUkQsIA0BFZg==",
          "dev": true,
          "requires": {
            "invert-kv": "^3.0.0"
          }
        },
        "mem": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/mem/-/mem-5.1.1.tgz",
          "integrity": "sha512-qvwipnozMohxLXG1pOqoLiZKNkC4r4qqRucSoDwXowsNGDSULiqFTRUF05vcZWnwJSG22qTsynQhxbaMtnX9gw==",
          "dev": true,
          "requires": {
            "map-age-cleaner": "^0.1.3",
            "mimic-fn": "^2.1.0",
            "p-is-promise": "^2.1.0"
          }
        },
        "os-locale": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-5.0.0.tgz",
          "integrity": "sha512-tqZcNEDAIZKBEPnHPlVDvKrp7NzgLi7jRmhKiUoa2NUmhl13FtkAGLUVR+ZsYvApBQdBfYm43A4tXXQ4IrYLBA==",
          "dev": true,
          "requires": {
            "execa": "^4.0.0",
            "lcid": "^3.0.0",
            "mem": "^5.0.0"
          }
        },
        "p-is-promise": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/p-is-promise/-/p-is-promise-2.1.0.tgz",
          "integrity": "sha512-Y3W0wlRPK8ZMRbNq97l4M5otioeA5lm1z7bkNkxCka8HSPjR0xRWmpCmc9utiaLP9Jb1eD8BgeIxTW4AIF45Pg==",
          "dev": true
        },
        "semver": {
          "version": "7.3.5",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
          "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
          "dev": true,
          "requires": {
            "lru-cache": "^6.0.0"
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "dev": true,
          "requires": {
            "has-flag": "^4.0.0"
          }
        },
        "upath": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/upath/-/upath-2.0.1.tgz",
          "integrity": "sha512-1uEe95xksV1O0CYKXo8vQvN1JEbtJp7lb7C5U9HMsIp6IVwntkH/oNUzyVNQSd4S1sYk2FpSSW44FqMc8qee5w==",
          "dev": true
        }
      }
    },
    "addons-scanner-utils": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/addons-scanner-utils/-/addons-scanner-utils-4.5.0.tgz",
      "integrity": "sha512-ZLUbRIhh/USLzKbsYgQuML7l1Es6bg4hMfjSPOJfcPf2+WkDJVwqGXdct/Jqt+KTt2OXPHrtvbV7AGYaU4fduw==",
      "dev": true,
      "requires": {
        "@types/yauzl": "2.9.1",
        "common-tags": "1.8.0",
        "first-chunk-stream": "3.0.0",
        "strip-bom-stream": "4.0.0",
        "upath": "2.0.1",
        "yauzl": "2.10.0"
      },
      "dependencies": {
        "upath": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/upath/-/upath-2.0.1.tgz",
          "integrity": "sha512-1uEe95xksV1O0CYKXo8vQvN1JEbtJp7lb7C5U9HMsIp6IVwntkH/oNUzyVNQSd4S1sYk2FpSSW44FqMc8qee5w==",
          "dev": true
        }
      }
    },
    "adm-zip": {
      "version": "git+ssh://git@github.com/cthackers/adm-zip.git#1d22ff693cbb060300bbe83658ccd6f6dec042bf",
      "dev": true,
      "from": "adm-zip@git+https://github.com/cthackers/adm-zip.git"
    },
    "aggregate-error": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
      "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
      "dev": true,
      "requires": {
        "clean-stack": "^2.0.0",
        "indent-string": "^4.0.0"
      }
    },
    "ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "requires": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "dependencies": {
        "fast-deep-equal": {
          "version": "3.1.3",
          "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
          "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
          "dev": true
        }
      }
    },
    "ajv-keywords": {
      "version": "3.5.2",
      "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.5.2.tgz",
      "integrity": "sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==",
      "dev": true,
      "requires": {}
    },
    "ajv-merge-patch": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ajv-merge-patch/-/ajv-merge-patch-4.1.0.tgz",
      "integrity": "sha512-0mAYXMSauA8RZ7r+B4+EAOYcZEcO9OK5EiQCR7W7Cv4E44pJj56ZnkKLJ9/PAcOc0dT+LlV9fdDcq2TxVJfOYw==",
      "dev": true,
      "requires": {
        "fast-json-patch": "^2.0.6",
        "json-merge-patch": "^0.2.3"
      }
    },
    "ansi-colors": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.1.tgz",
      "integrity": "sha512-JoX0apGbHaUJBNl6yF+p6JAFYZ666/hhCGKN5t9QFjbJQKUU/g8MNbFDbvfrgKXvI1QpZplPOnwIo99lX/AAmA==",
      "dev": true
    },
    "ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
      "dev": true
    },
    "ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "requires": {
        "color-convert": "^1.9.0"
      }
    },
    "anymatch": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
      "dev": true,
      "optional": true,
      "requires": {
        "micromatch": "^3.1.4",
        "normalize-path": "^2.1.1"
      },
      "dependencies": {
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "dev": true,
          "optional": true,
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        }
      }
    },
    "append-transform": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/append-transform/-/append-transform-2.0.0.tgz",
      "integrity": "sha512-7yeyCEurROLQJFv5Xj4lEGTy0borxepjFv1g22oAdqFu//SrAlDl1O1Nxx15SH1RoliUml6p8dwJW9jvZughhg==",
      "dev": true,
      "requires": {
        "default-require-extensions": "^3.0.0"
      }
    },
    "archive-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/archive-type/-/archive-type-4.0.0.tgz",
      "integrity": "sha1-+S5yIzBW38aWlHJ0nCZ72wRrHXA=",
      "dev": true,
      "requires": {
        "file-type": "^4.2.0"
      },
      "dependencies": {
        "file-type": {
          "version": "4.4.0",
          "resolved": "https://registry.npmjs.org/file-type/-/file-type-4.4.0.tgz",
          "integrity": "sha1-G2AOX8ofvcboDApwxxyNul95BsU=",
          "dev": true
        }
      }
    },
    "archy": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/archy/-/archy-1.0.0.tgz",
      "integrity": "sha1-+cjBN1fMHde8N5rHeyxipcKGjEA=",
      "dev": true
    },
    "argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "requires": {
        "sprintf-js": "~1.0.2"
      }
    },
    "arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "dev": true,
      "optional": true
    },
    "arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
      "dev": true,
      "optional": true
    },
    "arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
      "dev": true,
      "optional": true
    },
    "array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI=",
      "dev": true,
      "peer": true
    },
    "array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true
    },
    "array-unique": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
      "dev": true,
      "optional": true
    },
    "asn1": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
      "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
      "dev": true,
      "requires": {
        "safer-buffer": "~2.1.0"
      }
    },
    "assert-plus": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
      "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
      "dev": true
    },
    "assertion-error": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-1.1.0.tgz",
      "integrity": "sha512-jgsaNduz+ndvGyFt3uSuWqvy4lCnIJiovtouQN5JZHOKCS2QuhEdbcQHFhVksz2N2U9hXJo8odG7ETyWlEeuDw==",
      "dev": true
    },
    "assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
      "dev": true,
      "optional": true
    },
    "async": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/async/-/async-3.2.0.tgz",
      "integrity": "sha512-TR2mEZFVOj2pLStYxLht7TyfuRzaydfpxr3k9RpHIzMgw7A64dzsdqCxH1WJyQdoe8T10nDXd9wnEigmiuHIZw==",
      "dev": true
    },
    "async-each": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.3.tgz",
      "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ==",
      "dev": true,
      "optional": true
    },
    "asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
      "dev": true
    },
    "atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
      "dev": true,
      "optional": true
    },
    "atomic-sleep": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/atomic-sleep/-/atomic-sleep-1.0.0.tgz",
      "integrity": "sha512-kNOjDqAh7px0XWNI+4QbzoiR/nTkHAWNud2uvnJquD1/x5a7EQZMJT0AczqK0Qn67oY/TTQ1LbUKajZpp3I9tQ==",
      "dev": true
    },
    "aws-sign2": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
      "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
      "dev": true
    },
    "aws4": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.11.0.tgz",
      "integrity": "sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA==",
      "dev": true
    },
    "babel-loader": {
      "version": "8.2.2",
      "resolved": "https://registry.npmjs.org/babel-loader/-/babel-loader-8.2.2.tgz",
      "integrity": "sha512-JvTd0/D889PQBtUXJ2PXaKU/pjZDMtHA9V2ecm+eNRmmBCMR09a+fmpGTNwnJtFmFl5Ei7Vy47LjBb+L0wQ99g==",
      "dev": true,
      "requires": {
        "find-cache-dir": "^3.3.1",
        "loader-utils": "^1.4.0",
        "make-dir": "^3.1.0",
        "schema-utils": "^2.6.5"
      },
      "dependencies": {
        "find-cache-dir": {
          "version": "3.3.1",
          "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.1.tgz",
          "integrity": "sha512-t2GDMt3oGC/v+BMwzmllWDuJF/xcDtE5j/fCGbqDD7OLuJkj0cfh1YSA5VKPvwMeLFLNDBkwOKZ2X85jGLVftQ==",
          "dev": true,
          "requires": {
            "commondir": "^1.0.1",
            "make-dir": "^3.0.2",
            "pkg-dir": "^4.1.0"
          }
        },
        "find-up": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
          "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
          "dev": true,
          "requires": {
            "locate-path": "^5.0.0",
            "path-exists": "^4.0.0"
          }
        },
        "locate-path": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
          "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
          "dev": true,
          "requires": {
            "p-locate": "^4.1.0"
          }
        },
        "make-dir": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
          "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
          "dev": true,
          "requires": {
            "semver": "^6.0.0"
          }
        },
        "p-locate": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
          "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
          "dev": true,
          "requires": {
            "p-limit": "^2.2.0"
          }
        },
        "path-exists": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
          "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
          "dev": true
        },
        "pkg-dir": {
          "version": "4.2.0",
          "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
          "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
          "dev": true,
          "requires": {
            "find-up": "^4.0.0"
          }
        },
        "schema-utils": {
          "version": "2.7.1",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-2.7.1.tgz",
          "integrity": "sha512-SHiNtMOUGWBQJwzISiVYKu82GiV4QYGePp3odlY1tuKO7gPtphAT5R/py0fA6xtbgLL/RvtJZnU9b8s0F1q0Xg==",
          "dev": true,
          "requires": {
            "@types/json-schema": "^7.0.5",
            "ajv": "^6.12.4",
            "ajv-keywords": "^3.5.2"
          }
        }
      }
    },
    "babel-plugin-dynamic-import-node": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.3.tgz",
      "integrity": "sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==",
      "dev": true,
      "requires": {
        "object.assign": "^4.1.0"
      }
    },
    "babel-plugin-polyfill-corejs2": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs2/-/babel-plugin-polyfill-corejs2-0.2.0.tgz",
      "integrity": "sha512-9bNwiR0dS881c5SHnzCmmGlMkJLl0OUZvxrxHo9w/iNoRuqaPjqlvBf4HrovXtQs/au5yKkpcdgfT1cC5PAZwg==",
      "dev": true,
      "requires": {
        "@babel/compat-data": "^7.13.11",
        "@babel/helper-define-polyfill-provider": "^0.2.0",
        "semver": "^6.1.1"
      }
    },
    "babel-plugin-polyfill-corejs3": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs3/-/babel-plugin-polyfill-corejs3-0.2.0.tgz",
      "integrity": "sha512-zZyi7p3BCUyzNxLx8KV61zTINkkV65zVkDAFNZmrTCRVhjo1jAS+YLvDJ9Jgd/w2tsAviCwFHReYfxO3Iql8Yg==",
      "dev": true,
      "requires": {
        "@babel/helper-define-polyfill-provider": "^0.2.0",
        "core-js-compat": "^3.9.1"
      }
    },
    "babel-plugin-polyfill-regenerator": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-regenerator/-/babel-plugin-polyfill-regenerator-0.2.0.tgz",
      "integrity": "sha512-J7vKbCuD2Xi/eEHxquHN14bXAW9CXtecwuLrOIDJtcZzTaPzV1VdEfoUf9AzcRBMolKUQKM9/GVojeh0hFiqMg==",
      "dev": true,
      "requires": {
        "@babel/helper-define-polyfill-provider": "^0.2.0"
      }
    },
    "balanced-match": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
      "dev": true
    },
    "base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "dev": true,
      "optional": true,
      "requires": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "optional": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "optional": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "optional": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "base64-js": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-0.0.8.tgz",
      "integrity": "sha1-EQHpVE9KdrG8OybUUsqW16NeeXg=",
      "dev": true
    },
    "bcrypt-pbkdf": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
      "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
      "dev": true,
      "requires": {
        "tweetnacl": "^0.14.3"
      }
    },
    "big.js": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/big.js/-/big.js-5.2.2.tgz",
      "integrity": "sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ==",
      "dev": true
    },
    "binary-extensions": {
      "version": "1.13.1",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",
      "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw==",
      "dev": true,
      "optional": true
    },
    "bl": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/bl/-/bl-1.2.3.tgz",
      "integrity": "sha512-pvcNpa0UU69UT341rO6AYy4FVAIkUHuZXRIWbq+zHnsVcRzDDjIAhGuuYoi0d//cwIwtt4pkpKycWEfjdV+vww==",
      "dev": true,
      "requires": {
        "readable-stream": "^2.3.5",
        "safe-buffer": "^5.1.1"
      }
    },
    "body-parser": {
      "version": "1.19.0",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
      "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
      "dev": true,
      "peer": true,
      "requires": {
        "bytes": "3.1.0",
        "content-type": "~1.0.4",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "on-finished": "~2.3.0",
        "qs": "6.7.0",
        "raw-body": "2.4.0",
        "type-is": "~1.6.17"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "peer": true,
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24=",
      "dev": true
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "braces": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "dev": true,
      "optional": true,
      "requires": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "browser-stdout": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/browser-stdout/-/browser-stdout-1.3.1.tgz",
      "integrity": "sha512-qhAVI1+Av2X7qelOfAIYwXONood6XlZE/fXaBSmW/T5SzLAmCgzi+eiWE7fUvbHaeNBQH13UftjpXxsfLkMpgw==",
      "dev": true
    },
    "browserslist": {
      "version": "4.16.6",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.16.6.tgz",
      "integrity": "sha512-Wspk/PqO+4W9qp5iUTJsa1B/QrYn1keNCcEP5OvP7WBwT4KaDly0uONYmC6Xa3Z5IqnUgS0KcgLYu1l74x0ZXQ==",
      "dev": true,
      "requires": {
        "caniuse-lite": "^1.0.30001219",
        "colorette": "^1.2.2",
        "electron-to-chromium": "^1.3.723",
        "escalade": "^3.1.1",
        "node-releases": "^1.1.71"
      }
    },
    "buffer": {
      "version": "3.6.0",
      "resolved": "http://registry.npmjs.org/buffer/-/buffer-3.6.0.tgz",
      "integrity": "sha1-pyyTb3e5a/UvX357RnGAYoVR3vs=",
      "dev": true,
      "requires": {
        "base64-js": "0.0.8",
        "ieee754": "^1.1.4",
        "isarray": "^1.0.0"
      }
    },
    "buffer-alloc": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/buffer-alloc/-/buffer-alloc-1.2.0.tgz",
      "integrity": "sha512-CFsHQgjtW1UChdXgbyJGtnm+O/uLQeZdtbDo8mfUgYXCHSM1wgrVxXm6bSyrUuErEb+4sYVGCzASBRot7zyrow==",
      "dev": true,
      "requires": {
        "buffer-alloc-unsafe": "^1.1.0",
        "buffer-fill": "^1.0.0"
      }
    },
    "buffer-alloc-unsafe": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/buffer-alloc-unsafe/-/buffer-alloc-unsafe-1.1.0.tgz",
      "integrity": "sha512-TEM2iMIEQdJ2yjPJoSIsldnleVaAk1oW3DBVUykyOLsEsFmEc9kn+SFFPz+gl54KQNxlDnAwCXosOS9Okx2xAg==",
      "dev": true
    },
    "buffer-crc32": {
      "version": "0.2.13",
      "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
      "integrity": "sha1-DTM+PwDqxQqhRUq9MO+MKl2ackI=",
      "dev": true
    },
    "buffer-fill": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/buffer-fill/-/buffer-fill-1.0.0.tgz",
      "integrity": "sha1-+PeLdniYiO858gXNY39o5wISKyw=",
      "dev": true
    },
    "buffer-from": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
      "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
      "dev": true
    },
    "bytes": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
      "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg==",
      "dev": true,
      "peer": true
    },
    "cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "dev": true,
      "optional": true,
      "requires": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      }
    },
    "cacheable-request": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-2.1.4.tgz",
      "integrity": "sha1-DYCIAbY0KtM8kd+dC0TcCbkeXD0=",
      "dev": true,
      "requires": {
        "clone-response": "1.0.2",
        "get-stream": "3.0.0",
        "http-cache-semantics": "3.8.1",
        "keyv": "3.0.0",
        "lowercase-keys": "1.0.0",
        "normalize-url": "2.0.1",
        "responselike": "1.0.2"
      },
      "dependencies": {
        "lowercase-keys": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.0.tgz",
          "integrity": "sha1-TjNms55/VFfjXxMkvfb4jQv8cwY=",
          "dev": true
        }
      }
    },
    "caching-transform": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/caching-transform/-/caching-transform-4.0.0.tgz",
      "integrity": "sha512-kpqOvwXnjjN44D89K5ccQC+RUrsy7jB/XLlRrx0D7/2HNcTPqzsb6XgYoErwko6QsV184CA2YgS1fxDiiDZMWA==",
      "dev": true,
      "requires": {
        "hasha": "^5.0.0",
        "make-dir": "^3.0.0",
        "package-hash": "^4.0.0",
        "write-file-atomic": "^3.0.0"
      },
      "dependencies": {
        "make-dir": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
          "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
          "dev": true,
          "requires": {
            "semver": "^6.0.0"
          }
        }
      }
    },
    "call-bind": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.0.tgz",
      "integrity": "sha512-AEXsYIyyDY3MCzbwdhzG3Jx1R0J2wetQyUynn6dYHAO+bg8l1k7jwZtRv4ryryFs7EP+NDlikJlVe59jr0cM2w==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.0"
      }
    },
    "callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true
    },
    "camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
      "dev": true
    },
    "caniuse-lite": {
      "version": "1.0.30001228",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001228.tgz",
      "integrity": "sha512-QQmLOGJ3DEgokHbMSA8cj2a+geXqmnpyOFT0lhQV6P3/YOJvGDEwoedcwxEQ30gJIwIIunHIicunJ2rzK5gB2A==",
      "dev": true
    },
    "caseless": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
      "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
      "dev": true
    },
    "chai": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/chai/-/chai-4.3.4.tgz",
      "integrity": "sha512-yS5H68VYOCtN1cjfwumDSuzn/9c+yza4f3reKXlE5rUg7SFcCEy90gJvydNgOYtblyf4Zi6jIWRnXOgErta0KA==",
      "dev": true,
      "requires": {
        "assertion-error": "^1.1.0",
        "check-error": "^1.0.2",
        "deep-eql": "^3.0.1",
        "get-func-name": "^2.0.0",
        "pathval": "^1.1.1",
        "type-detect": "^4.0.5"
      }
    },
    "chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "requires": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      }
    },
    "check-error": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/check-error/-/check-error-1.0.2.tgz",
      "integrity": "sha1-V00xLt2Iu13YkS6Sht1sCu1KrII=",
      "dev": true
    },
    "cheerio": {
      "version": "1.0.0-rc.9",
      "resolved": "https://registry.npmjs.org/cheerio/-/cheerio-1.0.0-rc.9.tgz",
      "integrity": "sha512-QF6XVdrLONO6DXRF5iaolY+odmhj2CLj+xzNod7INPWMi/x9X4SOylH0S/vaPpX+AUU6t04s34SQNh7DbkuCng==",
      "dev": true,
      "requires": {
        "cheerio-select": "^1.4.0",
        "dom-serializer": "^1.3.1",
        "domhandler": "^4.2.0",
        "htmlparser2": "^6.1.0",
        "parse5": "^6.0.1",
        "parse5-htmlparser2-tree-adapter": "^6.0.1",
        "tslib": "^2.2.0"
      },
      "dependencies": {
        "tslib": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.2.0.tgz",
          "integrity": "sha512-gS9GVHRU+RGn5KQM2rllAlR3dU6m7AcpJKdtH8gFvQiC4Otgk98XnmMU+nZenHt/+VhnBPWwgrJsyrdcw6i23w==",
          "dev": true
        }
      }
    },
    "cheerio-select": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/cheerio-select/-/cheerio-select-1.4.0.tgz",
      "integrity": "sha512-sobR3Yqz27L553Qa7cK6rtJlMDbiKPdNywtR95Sj/YgfpLfy0u6CGJuaBKe5YE/vTc23SCRKxWSdlon/w6I/Ew==",
      "dev": true,
      "requires": {
        "css-select": "^4.1.2",
        "css-what": "^5.0.0",
        "domelementtype": "^2.2.0",
        "domhandler": "^4.2.0",
        "domutils": "^2.6.0"
      }
    },
    "chokidar": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.1.tgz",
      "integrity": "sha512-9+s+Od+W0VJJzawDma/gvBNQqkTiqYTWLuZoyAsivsI4AaWTCzHG06/TMjsf1cYe9Cb97UCEhjz7HvnPk2p/tw==",
      "dev": true,
      "requires": {
        "anymatch": "~3.1.1",
        "braces": "~3.0.2",
        "fsevents": "~2.3.1",
        "glob-parent": "~5.1.0",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.5.0"
      },
      "dependencies": {
        "anymatch": {
          "version": "3.1.1",
          "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.1.tgz",
          "integrity": "sha512-mM8522psRCqzV+6LhomX5wgp25YVibjh8Wj23I5RPkPppSVSjyKD2A2mBJmWGa+KN7f2D6LNh9jkBCeyLktzjg==",
          "dev": true,
          "requires": {
            "normalize-path": "^3.0.0",
            "picomatch": "^2.0.4"
          }
        },
        "binary-extensions": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
          "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
          "dev": true
        },
        "braces": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
          "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
          "dev": true,
          "requires": {
            "fill-range": "^7.0.1"
          }
        },
        "fill-range": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
          "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
          "dev": true,
          "requires": {
            "to-regex-range": "^5.0.1"
          }
        },
        "fsevents": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.1.tgz",
          "integrity": "sha512-YR47Eg4hChJGAB1O3yEAOkGO+rlzutoICGqGo9EZ4lKWokzZRSyIW1QmTzqjtw8MJdj9srP869CuWw/hyzSiBw==",
          "dev": true,
          "optional": true
        },
        "glob-parent": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.1.tgz",
          "integrity": "sha512-FnI+VGOpnlGHWZxthPGR+QhR78fuiK0sNLkHQv+bL9fQi57lNNdquIbna/WrfROrolq8GK5Ek6BiMwqL/voRYQ==",
          "dev": true,
          "requires": {
            "is-glob": "^4.0.1"
          }
        },
        "is-binary-path": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
          "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
          "dev": true,
          "requires": {
            "binary-extensions": "^2.0.0"
          }
        },
        "is-number": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
          "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
          "dev": true
        },
        "readdirp": {
          "version": "3.5.0",
          "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.5.0.tgz",
          "integrity": "sha512-cMhu7c/8rdhkHXWsY+osBhfSy0JikwpHK/5+imo+LpeasTF8ouErHrlYkwT0++njiyuDvc7OFY5T3ukvZ8qmFQ==",
          "dev": true,
          "requires": {
            "picomatch": "^2.2.1"
          }
        },
        "to-regex-range": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
          "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
          "dev": true,
          "requires": {
            "is-number": "^7.0.0"
          }
        }
      }
    },
    "chrome-trace-event": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.2.tgz",
      "integrity": "sha512-9e/zx1jw7B4CO+c/RXoCsfg/x1AfUBioy4owYH0bJprEYAx5hRFLRhWBqHAG57D0ZM4H7vxbP7bPe0VwhQRYDQ==",
      "dev": true,
      "requires": {
        "tslib": "^1.9.0"
      }
    },
    "class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "dev": true,
      "optional": true,
      "requires": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "clean-stack": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
      "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
      "dev": true
    },
    "cliui": {
      "version": "7.0.4",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
      "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
      "dev": true,
      "requires": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^7.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
          "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
          "dev": true
        },
        "is-fullwidth-code-point": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
          "dev": true
        },
        "string-width": {
          "version": "4.2.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
          "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
          "dev": true,
          "requires": {
            "emoji-regex": "^8.0.0",
            "is-fullwidth-code-point": "^3.0.0",
            "strip-ansi": "^6.0.0"
          }
        },
        "strip-ansi": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
          "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
          "dev": true,
          "requires": {
            "ansi-regex": "^5.0.0"
          }
        }
      }
    },
    "clone": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
      "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4=",
      "dev": true
    },
    "clone-deep": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
      "integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
      "dev": true,
      "requires": {
        "is-plain-object": "^2.0.4",
        "kind-of": "^6.0.2",
        "shallow-clone": "^3.0.0"
      }
    },
    "clone-response": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
      "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
      "dev": true,
      "requires": {
        "mimic-response": "^1.0.0"
      }
    },
    "collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "dev": true,
      "optional": true,
      "requires": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      }
    },
    "color-convert": {
      "version": "1.9.2",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.2.tgz",
      "integrity": "sha512-3NUJZdhMhcdPn8vJ9v2UQJoH0qqoGUkYTgFEPZaPjEtwmmKUfNV46zZmgB2M5M4DCEQHMaCfWHCxiBflLm04Tg==",
      "dev": true,
      "requires": {
        "color-name": "1.1.1"
      }
    },
    "color-name": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.1.tgz",
      "integrity": "sha1-SxQVMEz1ACjqgWQ2Q72C6gWANok=",
      "dev": true
    },
    "colorette": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.2.2.tgz",
      "integrity": "sha512-MKGMzyfeuutC/ZJ1cba9NqcNpfeqMUcYmyF1ZFY6/Cn7CNSAKx6a+s48sqLqyAiZuaP2TcqMhoo+dlwFnVxT9w==",
      "dev": true
    },
    "columnify": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/columnify/-/columnify-1.5.4.tgz",
      "integrity": "sha1-Rzfd8ce2mop8NAVweC6UfuyOeLs=",
      "dev": true,
      "requires": {
        "strip-ansi": "^3.0.0",
        "wcwidth": "^1.0.0"
      },
      "dependencies": {
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        }
      }
    },
    "combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dev": true,
      "requires": {
        "delayed-stream": "~1.0.0"
      }
    },
    "commander": {
      "version": "2.20.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.0.tgz",
      "integrity": "sha512-7j2y+40w61zy6YC2iRNpUe/NwhNyoXrYpHMrSunaMG64nRnaf96zO/KMQR4OyN/UnE5KLyEBnKHd4aG3rskjpQ==",
      "dev": true
    },
    "common-tags": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/common-tags/-/common-tags-1.8.0.tgz",
      "integrity": "sha512-6P6g0uetGpW/sdyUy/iQQCbFF0kWVMSIVSyYz7Zgjcgh8mgw8PQzDNZeyZ5DQ2gM7LBoZPHmnjz8rUthkBG5tw==",
      "dev": true
    },
    "commondir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
      "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs=",
      "dev": true
    },
    "component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
      "dev": true,
      "optional": true
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
      "dev": true
    },
    "content-disposition": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
      "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
      "dev": true,
      "requires": {
        "safe-buffer": "5.1.2"
      }
    },
    "content-type": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==",
      "dev": true,
      "peer": true
    },
    "convert-source-map": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
      "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
      "dev": true,
      "requires": {
        "safe-buffer": "~5.1.1"
      }
    },
    "cookie": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
      "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg==",
      "dev": true,
      "peer": true
    },
    "cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw=",
      "dev": true,
      "peer": true
    },
    "copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
      "dev": true,
      "optional": true
    },
    "core-js": {
      "version": "2.6.12",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
      "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ==",
      "dev": true
    },
    "core-js-compat": {
      "version": "3.12.1",
      "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.12.1.tgz",
      "integrity": "sha512-i6h5qODpw6EsHAoIdQhKoZdWn+dGBF3dSS8m5tif36RlWvW3A6+yu2S16QHUo3CrkzrnEskMAt9f8FxmY9fhWQ==",
      "dev": true,
      "requires": {
        "browserslist": "^4.16.6",
        "semver": "7.0.0"
      },
      "dependencies": {
        "semver": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
          "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A==",
          "dev": true
        }
      }
    },
    "core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
      "dev": true
    },
    "cross-spawn": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
      "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
      "dev": true,
      "requires": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      }
    },
    "css-select": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/css-select/-/css-select-4.1.2.tgz",
      "integrity": "sha512-nu5ye2Hg/4ISq4XqdLY2bEatAcLIdt3OYGFc9Tm9n7VSlFBcfRv0gBNksHRgSdUDQGtN3XrZ94ztW+NfzkFSUw==",
      "dev": true,
      "requires": {
        "boolbase": "^1.0.0",
        "css-what": "^5.0.0",
        "domhandler": "^4.2.0",
        "domutils": "^2.6.0",
        "nth-check": "^2.0.0"
      }
    },
    "css-what": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/css-what/-/css-what-5.0.0.tgz",
      "integrity": "sha512-qxyKHQvgKwzwDWC/rGbT821eJalfupxYW2qbSJSAtdSTimsr/MlaGONoNLllaUPZWf8QnbcKM/kPVYUQuEKAFA==",
      "dev": true
    },
    "dashdash": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
      "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0"
      }
    },
    "debug": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
      "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
      "dev": true,
      "requires": {
        "ms": "^2.1.1"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
          "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
          "dev": true
        }
      }
    },
    "decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
      "dev": true
    },
    "decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
      "dev": true
    },
    "decompress": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/decompress/-/decompress-4.2.1.tgz",
      "integrity": "sha512-e48kc2IjU+2Zw8cTb6VZcJQ3lgVbS4uuB1TfCHbiZIP/haNXm+SVyhu+87jts5/3ROpd82GSVCoNs/z8l4ZOaQ==",
      "dev": true,
      "requires": {
        "decompress-tar": "^4.0.0",
        "decompress-tarbz2": "^4.0.0",
        "decompress-targz": "^4.0.0",
        "decompress-unzip": "^4.0.1",
        "graceful-fs": "^4.1.10",
        "make-dir": "^1.0.0",
        "pify": "^2.3.0",
        "strip-dirs": "^2.0.0"
      }
    },
    "decompress-response": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
      "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
      "dev": true,
      "requires": {
        "mimic-response": "^1.0.0"
      }
    },
    "decompress-tar": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/decompress-tar/-/decompress-tar-4.1.1.tgz",
      "integrity": "sha512-JdJMaCrGpB5fESVyxwpCx4Jdj2AagLmv3y58Qy4GE6HMVjWz1FeVQk1Ct4Kye7PftcdOo/7U7UKzYBJgqnGeUQ==",
      "dev": true,
      "requires": {
        "file-type": "^5.2.0",
        "is-stream": "^1.1.0",
        "tar-stream": "^1.5.2"
      },
      "dependencies": {
        "file-type": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/file-type/-/file-type-5.2.0.tgz",
          "integrity": "sha1-LdvqfHP/42No365J3DOMBYwritY=",
          "dev": true
        }
      }
    },
    "decompress-tarbz2": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/decompress-tarbz2/-/decompress-tarbz2-4.1.1.tgz",
      "integrity": "sha512-s88xLzf1r81ICXLAVQVzaN6ZmX4A6U4z2nMbOwobxkLoIIfjVMBg7TeguTUXkKeXni795B6y5rnvDw7rxhAq9A==",
      "dev": true,
      "requires": {
        "decompress-tar": "^4.1.0",
        "file-type": "^6.1.0",
        "is-stream": "^1.1.0",
        "seek-bzip": "^1.0.5",
        "unbzip2-stream": "^1.0.9"
      },
      "dependencies": {
        "file-type": {
          "version": "6.2.0",
          "resolved": "https://registry.npmjs.org/file-type/-/file-type-6.2.0.tgz",
          "integrity": "sha512-YPcTBDV+2Tm0VqjybVd32MHdlEGAtuxS3VAYsumFokDSMG+ROT5wawGlnHDoz7bfMcMDt9hxuXvXwoKUx2fkOg==",
          "dev": true
        }
      }
    },
    "decompress-targz": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/decompress-targz/-/decompress-targz-4.1.1.tgz",
      "integrity": "sha512-4z81Znfr6chWnRDNfFNqLwPvm4db3WuZkqV+UgXQzSngG3CEKdBkw5jrv3axjjL96glyiiKjsxJG3X6WBZwX3w==",
      "dev": true,
      "requires": {
        "decompress-tar": "^4.1.1",
        "file-type": "^5.2.0",
        "is-stream": "^1.1.0"
      },
      "dependencies": {
        "file-type": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/file-type/-/file-type-5.2.0.tgz",
          "integrity": "sha1-LdvqfHP/42No365J3DOMBYwritY=",
          "dev": true
        }
      }
    },
    "decompress-unzip": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/decompress-unzip/-/decompress-unzip-4.0.1.tgz",
      "integrity": "sha1-3qrM39FK6vhVePczroIQ+bSEj2k=",
      "dev": true,
      "requires": {
        "file-type": "^3.8.0",
        "get-stream": "^2.2.0",
        "pify": "^2.3.0",
        "yauzl": "^2.4.2"
      },
      "dependencies": {
        "file-type": {
          "version": "3.9.0",
          "resolved": "https://registry.npmjs.org/file-type/-/file-type-3.9.0.tgz",
          "integrity": "sha1-JXoHg4TR24CHvESdEH1SpSZyuek=",
          "dev": true
        },
        "get-stream": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-2.3.1.tgz",
          "integrity": "sha1-Xzj5PzRgCWZu4BUKBUFn+Rvdld4=",
          "dev": true,
          "requires": {
            "object-assign": "^4.0.1",
            "pinkie-promise": "^2.0.0"
          }
        }
      }
    },
    "deep-eql": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/deep-eql/-/deep-eql-3.0.1.tgz",
      "integrity": "sha512-+QeIQyN5ZuO+3Uk5DYh6/1eKO0m0YmJFGNmFHGACpf1ClL1nmlV/p4gNgbl2pJGxgXb4faqo6UE+M5ACEMyVcw==",
      "dev": true,
      "requires": {
        "type-detect": "^4.0.0"
      }
    },
    "deep-equal": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-1.1.1.tgz",
      "integrity": "sha512-yd9c5AdiqVcR+JjcwUQb9DkhJc8ngNr0MahEBGvDiJw8puWab2yZlh+nkasOnZP+EGTAP6rRp2JzJhJZzvNF8g==",
      "dev": true,
      "requires": {
        "is-arguments": "^1.0.4",
        "is-date-object": "^1.0.1",
        "is-regex": "^1.0.4",
        "object-is": "^1.0.1",
        "object-keys": "^1.1.1",
        "regexp.prototype.flags": "^1.2.0"
      }
    },
    "deep-is": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
      "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
      "dev": true
    },
    "deepmerge": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.2.2.tgz",
      "integrity": "sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg==",
      "dev": true
    },
    "default-require-extensions": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/default-require-extensions/-/default-require-extensions-3.0.0.tgz",
      "integrity": "sha512-ek6DpXq/SCpvjhpFsLFRVtIxJCRw6fUR42lYMVZuUMK7n8eMz4Uh5clckdBjEpLhn/gEBZo7hDJnJcwdKLKQjg==",
      "dev": true,
      "requires": {
        "strip-bom": "^4.0.0"
      }
    },
    "defaults": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
      "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
      "dev": true,
      "requires": {
        "clone": "^1.0.2"
      }
    },
    "define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "dev": true,
      "requires": {
        "object-keys": "^1.0.12"
      }
    },
    "define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "dev": true,
      "optional": true,
      "requires": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      },
      "dependencies": {
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "optional": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "optional": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "optional": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
      "dev": true
    },
    "depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
      "dev": true,
      "peer": true
    },
    "destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA=",
      "dev": true,
      "peer": true
    },
    "diff": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/diff/-/diff-5.0.0.tgz",
      "integrity": "sha512-/VTCrvm5Z0JGty/BWHljh+BAiw3IK+2j87NGMu8Nwc/f48WoDAC395uomO9ZD117ZOBaHmkX1oyLvkVM/aIT3w==",
      "dev": true
    },
    "dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "requires": {
        "path-type": "^4.0.0"
      }
    },
    "dispensary": {
      "version": "0.62.0",
      "resolved": "https://registry.npmjs.org/dispensary/-/dispensary-0.62.0.tgz",
      "integrity": "sha512-x8vqPX7owhzDp3Y6t/iOuTuNoWx5hlZKITlzlybETsZoY05cYDubGpwt0soLfRLAWLuxX1lq0lTc/vXtk/CDCw==",
      "dev": true,
      "requires": {
        "async": "~3.2.0",
        "natural-compare-lite": "~1.4.0",
        "pino": "~6.11.0",
        "request": "~2.88.0",
        "sha.js": "~2.4.4",
        "source-map-support": "~0.5.4",
        "yargs": "~16.2.0"
      }
    },
    "doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "requires": {
        "esutils": "^2.0.2"
      }
    },
    "dom-serializer": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-1.3.2.tgz",
      "integrity": "sha512-5c54Bk5Dw4qAxNOI1pFEizPSjVsx5+bpJKmL2kPn8JhBUq2q09tTCa3mjijun2NfK78NMouDYNMBkOrPZiS+ig==",
      "dev": true,
      "requires": {
        "domelementtype": "^2.0.1",
        "domhandler": "^4.2.0",
        "entities": "^2.0.0"
      }
    },
    "domelementtype": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.2.0.tgz",
      "integrity": "sha512-DtBMo82pv1dFtUmHyr48beiuq792Sxohr+8Hm9zoxklYPfa6n0Z3Byjj2IV7bmr2IyqClnqEQhfgHJJ5QF0R5A==",
      "dev": true
    },
    "domhandler": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-4.2.0.tgz",
      "integrity": "sha512-zk7sgt970kzPks2Bf+dwT/PLzghLnsivb9CcxkvR8Mzr66Olr0Ofd8neSbglHJHaHa2MadfoSdNlKYAaafmWfA==",
      "dev": true,
      "requires": {
        "domelementtype": "^2.2.0"
      }
    },
    "domutils": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/domutils/-/domutils-2.6.0.tgz",
      "integrity": "sha512-y0BezHuy4MDYxh6OvolXYsH+1EMGmFbwv5FKW7ovwMG6zTPWqNPq3WF9ayZssFq+UlKdffGLbOEaghNdaOm1WA==",
      "dev": true,
      "requires": {
        "dom-serializer": "^1.0.1",
        "domelementtype": "^2.2.0",
        "domhandler": "^4.2.0"
      }
    },
    "download": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/download/-/download-8.0.0.tgz",
      "integrity": "sha512-ASRY5QhDk7FK+XrQtQyvhpDKanLluEEQtWl/J7Lxuf/b+i8RYh997QeXvL85xitrmRKVlx9c7eTrcRdq2GS4eA==",
      "dev": true,
      "requires": {
        "archive-type": "^4.0.0",
        "content-disposition": "^0.5.2",
        "decompress": "^4.2.1",
        "ext-name": "^5.0.0",
        "file-type": "^11.1.0",
        "filenamify": "^3.0.0",
        "get-stream": "^4.1.0",
        "got": "^8.3.1",
        "make-dir": "^2.1.0",
        "p-event": "^2.1.0",
        "pify": "^4.0.1"
      },
      "dependencies": {
        "get-stream": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
          "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
          "dev": true,
          "requires": {
            "pump": "^3.0.0"
          }
        },
        "make-dir": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
          "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
          "dev": true,
          "requires": {
            "pify": "^4.0.1",
            "semver": "^5.6.0"
          }
        },
        "pify": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
          "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
          "dev": true
        },
        "semver": {
          "version": "5.7.1",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
          "dev": true
        }
      }
    },
    "duplexer3": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
      "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI=",
      "dev": true
    },
    "ecc-jsbn": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
      "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
      "dev": true,
      "requires": {
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.1.0"
      }
    },
    "ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0=",
      "dev": true,
      "peer": true
    },
    "electron-to-chromium": {
      "version": "1.3.735",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.735.tgz",
      "integrity": "sha512-cp7MWzC3NseUJV2FJFgaiesdrS+A8ZUjX5fLAxdRlcaPDkaPGFplX930S5vf84yqDp4LjuLdKouWuVOTwUfqHQ==",
      "dev": true
    },
    "emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true
    },
    "emojis-list": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-3.0.0.tgz",
      "integrity": "sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q==",
      "dev": true
    },
    "encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
      "dev": true,
      "peer": true
    },
    "end-of-stream": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.1.tgz",
      "integrity": "sha512-1MkrZNvWTKCaigbn+W15elq2BB/L22nqrSY5DKlo3X6+vclJm8Bb5djXJBmEX6fS3+zCh/F4VBK5Z2KxJt4s2Q==",
      "dev": true,
      "requires": {
        "once": "^1.4.0"
      }
    },
    "enhanced-resolve": {
      "version": "5.8.2",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.8.2.tgz",
      "integrity": "sha512-F27oB3WuHDzvR2DOGNTaYy0D5o0cnrv8TeI482VM4kYgQd/FT9lUQwuNsJ0oOHtBUq7eiW5ytqzp7nBFknL+GA==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      }
    },
    "enquirer": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/enquirer/-/enquirer-2.3.6.tgz",
      "integrity": "sha512-yjNnPr315/FjS4zIsUxYguYUPP2e1NK4d7E7ZOLiyYCcbFBiTMyID+2wvm2w6+pZ/odMA7cRkjhsPbltwBOrLg==",
      "dev": true,
      "requires": {
        "ansi-colors": "^4.1.1"
      }
    },
    "entities": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-2.2.0.tgz",
      "integrity": "sha512-p92if5Nz619I0w+akJrLZH0MX0Pb5DX39XOwQTtXSdQQOaYH03S1uIQp4mhOZtAXrxq4ViO67YTiLBo2638o9A==",
      "dev": true
    },
    "envinfo": {
      "version": "7.8.1",
      "resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.8.1.tgz",
      "integrity": "sha512-/o+BXHmB7ocbHEAs6F2EnG0ogybVVUdkRunTT2glZU9XAaGmhqskrvKwqXuDfNjEO0LZKWdejEEpnq8aM0tOaw==",
      "dev": true
    },
    "es-abstract": {
      "version": "1.17.7",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.17.7.tgz",
      "integrity": "sha512-VBl/gnfcJ7OercKA9MVaegWsBHFjV492syMudcnQZvt/Dw8ezpcOHYZXa/J96O8vx+g4x65YKhxOwDUh63aS5g==",
      "dev": true,
      "requires": {
        "es-to-primitive": "^1.2.1",
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1",
        "is-callable": "^1.2.2",
        "is-regex": "^1.1.1",
        "object-inspect": "^1.8.0",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.1",
        "string.prototype.trimend": "^1.0.1",
        "string.prototype.trimstart": "^1.0.1"
      }
    },
    "es-module-lexer": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-0.4.1.tgz",
      "integrity": "sha512-ooYciCUtfw6/d2w56UVeqHPcoCFAiJdz5XOkYpv/Txl1HMUozpXjz/2RIQgqwKdXNDPSF1W7mJCFse3G+HDyAA==",
      "dev": true
    },
    "es-to-primitive": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "dev": true,
      "requires": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      }
    },
    "es6-error": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/es6-error/-/es6-error-4.1.1.tgz",
      "integrity": "sha512-Um/+FxMr9CISWh0bi5Zv0iOD+4cFh5qLeks1qhAopKVAJw3drgKbKySikp7wGhDL0HPeaja0P5ULZrxLkniUVg==",
      "dev": true
    },
    "escalade": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
      "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
      "dev": true
    },
    "escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg=",
      "dev": true,
      "peer": true
    },
    "escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true
    },
    "eslint": {
      "version": "7.26.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-7.26.0.tgz",
      "integrity": "sha512-4R1ieRf52/izcZE7AlLy56uIHHDLT74Yzz2Iv2l6kDaYvEu9x+wMB5dZArVL8SYGXSYV2YAg70FcW5Y5nGGNIg==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "7.12.11",
        "@eslint/eslintrc": "^0.4.1",
        "ajv": "^6.10.0",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.0.1",
        "doctrine": "^3.0.0",
        "enquirer": "^2.3.5",
        "eslint-scope": "^5.1.1",
        "eslint-utils": "^2.1.0",
        "eslint-visitor-keys": "^2.0.0",
        "espree": "^7.3.1",
        "esquery": "^1.4.0",
        "esutils": "^2.0.2",
        "file-entry-cache": "^6.0.1",
        "functional-red-black-tree": "^1.0.1",
        "glob-parent": "^5.0.0",
        "globals": "^13.6.0",
        "ignore": "^4.0.6",
        "import-fresh": "^3.0.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "js-yaml": "^3.13.1",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash": "^4.17.21",
        "minimatch": "^3.0.4",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.1",
        "progress": "^2.0.0",
        "regexpp": "^3.1.0",
        "semver": "^7.2.1",
        "strip-ansi": "^6.0.0",
        "strip-json-comments": "^3.1.0",
        "table": "^6.0.4",
        "text-table": "^0.2.0",
        "v8-compile-cache": "^2.0.3"
      },
      "dependencies": {
        "@babel/code-frame": {
          "version": "7.12.11",
          "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.11.tgz",
          "integrity": "sha512-Zt1yodBx1UcyiePMSkWnU4hPqhwq7hGi2nFL1LeA3EUl+q2LQx16MISgJ0+z7dnmgvP9QtIleuETGOiOH1RcIw==",
          "dev": true,
          "requires": {
            "@babel/highlight": "^7.10.4"
          }
        },
        "ansi-regex": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
          "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
          "dev": true
        },
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "dev": true,
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "astral-regex": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-2.0.0.tgz",
          "integrity": "sha512-Z7tMw1ytTXt5jqMcOP+OQteU1VuNK9Y02uuJtKQ1Sv69jXQKKg5cibLwGJow8yzZP+eAc18EmLGPal0bp36rvQ==",
          "dev": true
        },
        "chalk": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
          "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
          "dev": true,
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "dev": true,
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
          "dev": true
        },
        "fast-deep-equal": {
          "version": "3.1.3",
          "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
          "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
          "dev": true
        },
        "glob-parent": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.1.tgz",
          "integrity": "sha512-FnI+VGOpnlGHWZxthPGR+QhR78fuiK0sNLkHQv+bL9fQi57lNNdquIbna/WrfROrolq8GK5Ek6BiMwqL/voRYQ==",
          "dev": true,
          "requires": {
            "is-glob": "^4.0.1"
          }
        },
        "globals": {
          "version": "13.8.0",
          "resolved": "https://registry.npmjs.org/globals/-/globals-13.8.0.tgz",
          "integrity": "sha512-rHtdA6+PDBIjeEvA91rpqzEvk/k3/i7EeNQiryiWuJH0Hw9cpyJMAt2jtbAwUaRdhD+573X4vWw6IcjKPasi9Q==",
          "dev": true,
          "requires": {
            "type-fest": "^0.20.2"
          }
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
          "dev": true
        },
        "is-fullwidth-code-point": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
          "dev": true
        },
        "json-schema-traverse": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
          "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
          "dev": true
        },
        "semver": {
          "version": "7.3.4",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.4.tgz",
          "integrity": "sha512-tCfb2WLjqFAtXn4KEdxIhalnRtoKFN7nAwj0B3ZXCbQloV2tq5eDbcTmT68JJD3nRJq24/XgxtQKFIpQdtvmVw==",
          "dev": true,
          "requires": {
            "lru-cache": "^6.0.0"
          }
        },
        "slice-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-4.0.0.tgz",
          "integrity": "sha512-qMCMfhY040cVHT43K9BFygqYbUPFZKHOg7K73mtTWJRb8pyP3fzf4Ixd5SzdEJQ6MRUg/WBnOLxghZtKKurENQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^4.0.0",
            "astral-regex": "^2.0.0",
            "is-fullwidth-code-point": "^3.0.0"
          }
        },
        "string-width": {
          "version": "4.2.0",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
          "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
          "dev": true,
          "requires": {
            "emoji-regex": "^8.0.0",
            "is-fullwidth-code-point": "^3.0.0",
            "strip-ansi": "^6.0.0"
          }
        },
        "strip-ansi": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
          "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
          "dev": true,
          "requires": {
            "ansi-regex": "^5.0.0"
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "dev": true,
          "requires": {
            "has-flag": "^4.0.0"
          }
        },
        "table": {
          "version": "6.0.7",
          "resolved": "https://registry.npmjs.org/table/-/table-6.0.7.tgz",
          "integrity": "sha512-rxZevLGTUzWna/qBLObOe16kB2RTnnbhciwgPbMMlazz1yZGVEgnZK762xyVdVznhqxrfCeBMmMkgOOaPwjH7g==",
          "dev": true,
          "requires": {
            "ajv": "^7.0.2",
            "lodash": "^4.17.20",
            "slice-ansi": "^4.0.0",
            "string-width": "^4.2.0"
          },
          "dependencies": {
            "ajv": {
              "version": "7.0.3",
              "resolved": "https://registry.npmjs.org/ajv/-/ajv-7.0.3.tgz",
              "integrity": "sha512-R50QRlXSxqXcQP5SvKUrw8VZeypvo12i2IX0EeR5PiZ7bEKeHWgzgo264LDadUsCU42lTJVhFikTqJwNeH34gQ==",
              "dev": true,
              "requires": {
                "fast-deep-equal": "^3.1.1",
                "json-schema-traverse": "^1.0.0",
                "require-from-string": "^2.0.2",
                "uri-js": "^4.2.2"
              }
            }
          }
        },
        "type-fest": {
          "version": "0.20.2",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
          "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
          "dev": true
        }
      }
    },
    "eslint-plugin-no-unsanitized": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/eslint-plugin-no-unsanitized/-/eslint-plugin-no-unsanitized-3.1.5.tgz",
      "integrity": "sha512-s/6w++p1590h/H/dE2Wo660bOkaM/3OEK14Y7xm1UT0bafxkKw1Cq0ksjxkxLdH/WWd014DlsLKuD6CyNrR2Dw==",
      "dev": true,
      "requires": {}
    },
    "eslint-scope": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
      "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
      "dev": true,
      "requires": {
        "esrecurse": "^4.3.0",
        "estraverse": "^4.1.1"
      }
    },
    "eslint-utils": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-2.1.0.tgz",
      "integrity": "sha512-w94dQYoauyvlDc43XnGB8lU3Zt713vNChgt4EWwhXAP2XkBvndfxF0AgIqKOOasjPIPzj9JqgwkwbCYD0/V3Zg==",
      "dev": true,
      "requires": {
        "eslint-visitor-keys": "^1.1.0"
      },
      "dependencies": {
        "eslint-visitor-keys": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz",
          "integrity": "sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==",
          "dev": true
        }
      }
    },
    "eslint-visitor-keys": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-2.1.0.tgz",
      "integrity": "sha512-0rSmRBzXgDzIsD6mGdJgevzgezI534Cer5L/vyMX0kHzT/jiB43jRhd9YUlMGYLQy2zprNmoT8qasCGtY+QaKw==",
      "dev": true
    },
    "espree": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-7.3.1.tgz",
      "integrity": "sha512-v3JCNCE64umkFpmkFGqzVKsOT0tN1Zr+ueqLZfpV1Ob8e+CEgPWa+OxCoGH3tnhimMKIaBm4m/vaRpJ/krRz2g==",
      "dev": true,
      "requires": {
        "acorn": "^7.4.0",
        "acorn-jsx": "^5.3.1",
        "eslint-visitor-keys": "^1.3.0"
      },
      "dependencies": {
        "acorn": {
          "version": "7.4.1",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
          "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==",
          "dev": true
        },
        "eslint-visitor-keys": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz",
          "integrity": "sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==",
          "dev": true
        }
      }
    },
    "esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "dev": true
    },
    "esquery": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.4.0.tgz",
      "integrity": "sha512-cCDispWt5vHHtwMY2YrAQ4ibFkAL8RbH5YGBnZBc90MolvvfkkQcJro/aZiAQUlQ3qgrYS6D6v8Gc5G5CQsc9w==",
      "dev": true,
      "requires": {
        "estraverse": "^5.1.0"
      },
      "dependencies": {
        "estraverse": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
          "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ==",
          "dev": true
        }
      }
    },
    "esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "requires": {
        "estraverse": "^5.2.0"
      },
      "dependencies": {
        "estraverse": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
          "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ==",
          "dev": true
        }
      }
    },
    "estraverse": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.2.0.tgz",
      "integrity": "sha1-De4/7TH81GlhjOc0IJn8GvoL2xM=",
      "dev": true
    },
    "esutils": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.2.tgz",
      "integrity": "sha1-Cr9PHKpbyx96nYrMbepPqqBLrJs=",
      "dev": true
    },
    "etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
      "dev": true,
      "peer": true
    },
    "events": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/events/-/events-3.2.0.tgz",
      "integrity": "sha512-/46HWwbfCX2xTawVfkKLGxMifJYQBWMwY1mjywRtb4c9x8l5NP3KoJtnIOiL1hfdRkIuYhETxQlo62IF8tcnlg==",
      "dev": true
    },
    "execa": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/execa/-/execa-5.0.0.tgz",
      "integrity": "sha512-ov6w/2LCiuyO4RLYGdpFGjkcs0wMTgGE8PrkTHikeUy5iJekXyPIKUjifk5CsE0pt7sMCrMZ3YNqoCj6idQOnQ==",
      "dev": true,
      "requires": {
        "cross-spawn": "^7.0.3",
        "get-stream": "^6.0.0",
        "human-signals": "^2.1.0",
        "is-stream": "^2.0.0",
        "merge-stream": "^2.0.0",
        "npm-run-path": "^4.0.1",
        "onetime": "^5.1.2",
        "signal-exit": "^3.0.3",
        "strip-final-newline": "^2.0.0"
      },
      "dependencies": {
        "get-stream": {
          "version": "6.0.1",
          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
          "integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
          "dev": true
        },
        "human-signals": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
          "integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==",
          "dev": true
        },
        "is-stream": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
          "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw==",
          "dev": true
        }
      }
    },
    "expand-brackets": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
      "dev": true,
      "optional": true,
      "requires": {
        "debug": "^2.3.3",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "posix-character-classes": "^0.1.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "optional": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "express": {
      "version": "4.17.1",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
      "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
      "dev": true,
      "peer": true,
      "requires": {
        "accepts": "~1.3.7",
        "array-flatten": "1.1.1",
        "body-parser": "1.19.0",
        "content-disposition": "0.5.3",
        "content-type": "~1.0.4",
        "cookie": "0.4.0",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.1.2",
        "fresh": "0.5.2",
        "merge-descriptors": "1.0.1",
        "methods": "~1.1.2",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "~2.0.5",
        "qs": "6.7.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.1.2",
        "send": "0.17.1",
        "serve-static": "1.14.1",
        "setprototypeof": "1.1.1",
        "statuses": "~1.5.0",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "peer": true,
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "ext-list": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/ext-list/-/ext-list-2.2.2.tgz",
      "integrity": "sha512-u+SQgsubraE6zItfVA0tBuCBhfU9ogSRnsvygI7wht9TS510oLkBRXBsqopeUG/GBOIQyKZO9wjTqIu/sf5zFA==",
      "dev": true,
      "requires": {
        "mime-db": "^1.28.0"
      }
    },
    "ext-name": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/ext-name/-/ext-name-5.0.0.tgz",
      "integrity": "sha512-yblEwXAbGv1VQDmow7s38W77hzAgJAO50ztBLMcUyUBfxv1HC+LGwtiEN+Co6LtlqT/5uwVOxsD4TNIilWhwdQ==",
      "dev": true,
      "requires": {
        "ext-list": "^2.0.0",
        "sort-keys-length": "^1.0.0"
      }
    },
    "extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "dev": true
    },
    "extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dev": true,
      "optional": true,
      "requires": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "dev": true,
          "optional": true,
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        }
      }
    },
    "extglob": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
      "dev": true,
      "optional": true,
      "requires": {
        "array-unique": "^0.3.2",
        "define-property": "^1.0.0",
        "expand-brackets": "^2.1.4",
        "extend-shallow": "^2.0.1",
        "fragment-cache": "^0.2.1",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "optional": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "optional": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "optional": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "extsprintf": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
      "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
      "dev": true
    },
    "fast-deep-equal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
      "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
      "dev": true
    },
    "fast-glob": {
      "version": "3.2.5",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.5.tgz",
      "integrity": "sha512-2DtFcgT68wiTTiwZ2hNdJfcHNke9XOfnwmBRWXhmeKM8rF0TGwmC/Qto3S7RoZKp5cilZbxzO5iTNTQsJ+EeDg==",
      "dev": true,
      "requires": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.0",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.2",
        "picomatch": "^2.2.1"
      },
      "dependencies": {
        "braces": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
          "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
          "dev": true,
          "requires": {
            "fill-range": "^7.0.1"
          }
        },
        "fill-range": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
          "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
          "dev": true,
          "requires": {
            "to-regex-range": "^5.0.1"
          }
        },
        "glob-parent": {
          "version": "5.1.2",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
          "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
          "dev": true,
          "requires": {
            "is-glob": "^4.0.1"
          }
        },
        "is-number": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
          "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
          "dev": true
        },
        "micromatch": {
          "version": "4.0.4",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.4.tgz",
          "integrity": "sha512-pRmzw/XUcwXGpD9aI9q/0XOwLNygjETJ8y0ao0wdqprrzDa4YnxLcz7fQRZr8voh8V10kGhABbNcHVk5wHgWwg==",
          "dev": true,
          "requires": {
            "braces": "^3.0.1",
            "picomatch": "^2.2.3"
          }
        },
        "to-regex-range": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
          "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
          "dev": true,
          "requires": {
            "is-number": "^7.0.0"
          }
        }
      }
    },
    "fast-json-patch": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/fast-json-patch/-/fast-json-patch-2.2.1.tgz",
      "integrity": "sha512-4j5uBaTnsYAV5ebkidvxiLUYOwjQ+JSFljeqfTxCrH9bDmlCQaOJFS84oDJ2rAXZq2yskmk3ORfoP9DCwqFNig==",
      "dev": true,
      "requires": {
        "fast-deep-equal": "^2.0.1"
      }
    },
    "fast-json-stable-stringify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.0.0.tgz",
      "integrity": "sha1-1RQsDK7msRifh9OnYREGT4bIu/I=",
      "dev": true
    },
    "fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
      "dev": true
    },
    "fast-redact": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/fast-redact/-/fast-redact-3.0.1.tgz",
      "integrity": "sha512-kYpn4Y/valC9MdrISg47tZOpYBNoTXKgT9GYXFpHN/jYFs+lFkPoisY+LcBODdKVMY96ATzvzsWv+ES/4Kmufw==",
      "dev": true
    },
    "fast-safe-stringify": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/fast-safe-stringify/-/fast-safe-stringify-2.0.7.tgz",
      "integrity": "sha512-Utm6CdzT+6xsDk2m8S6uL8VHxNwI6Jub+e9NYTcAms28T84pTa25GJQV9j0CY0N1rM8hK4x6grpF2BQf+2qwVA==",
      "dev": true
    },
    "fastest-levenshtein": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/fastest-levenshtein/-/fastest-levenshtein-1.0.12.tgz",
      "integrity": "sha512-On2N+BpYJ15xIC974QNVuYGMOlEVt4s0EOI3wwMqOmK1fdDY+FN/zltPV8vosq4ad4c/gJ1KHScUn/6AWIgiow==",
      "dev": true
    },
    "fastq": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.11.0.tgz",
      "integrity": "sha512-7Eczs8gIPDrVzT+EksYBcupqMyxSHXXrHOLRRxU2/DicV8789MRBRR8+Hc2uWzUupOs4YS4JzBmBxjjCVBxD/g==",
      "dev": true,
      "requires": {
        "reusify": "^1.0.4"
      }
    },
    "fd-slicer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.1.0.tgz",
      "integrity": "sha1-JcfInLH5B3+IkbvmHY85Dq4lbx4=",
      "dev": true,
      "requires": {
        "pend": "~1.2.0"
      }
    },
    "file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "requires": {
        "flat-cache": "^3.0.4"
      }
    },
    "file-type": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-11.1.0.tgz",
      "integrity": "sha512-rM0UO7Qm9K7TWTtA6AShI/t7H5BPjDeGVDaNyg9BjHAj3PysKy7+8C8D137R88jnR3rFJZQB/tFgydl5sN5m7g==",
      "dev": true
    },
    "filename-reserved-regex": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/filename-reserved-regex/-/filename-reserved-regex-2.0.0.tgz",
      "integrity": "sha1-q/c9+rc10EVECr/qLZHzieu/oik=",
      "dev": true
    },
    "filenamify": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/filenamify/-/filenamify-3.0.0.tgz",
      "integrity": "sha512-5EFZ//MsvJgXjBAFJ+Bh2YaCTRF/VP1YOmGrgt+KJ4SFRLjI87EIdwLLuT6wQX0I4F9W41xutobzczjsOKlI/g==",
      "dev": true,
      "requires": {
        "filename-reserved-regex": "^2.0.0",
        "strip-outer": "^1.0.0",
        "trim-repeated": "^1.0.0"
      }
    },
    "fill-range": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "dev": true,
      "optional": true,
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "finalhandler": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
      "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
      "dev": true,
      "peer": true,
      "requires": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "statuses": "~1.5.0",
        "unpipe": "~1.0.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "peer": true,
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "find-cache-dir": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
      "integrity": "sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==",
      "dev": true,
      "requires": {
        "commondir": "^1.0.1",
        "make-dir": "^2.0.0",
        "pkg-dir": "^3.0.0"
      },
      "dependencies": {
        "make-dir": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
          "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
          "dev": true,
          "requires": {
            "pify": "^4.0.1",
            "semver": "^5.6.0"
          }
        },
        "pify": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
          "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
          "dev": true
        },
        "semver": {
          "version": "5.7.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.0.tgz",
          "integrity": "sha512-Ya52jSX2u7QKghxeoFGpLwCtGlt7j0oY9DYb5apt9nPlJ42ID+ulTXESnt/qAQcoSERyZ5sl3LDIOw0nAn/5DA==",
          "dev": true
        }
      }
    },
    "find-up": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
      "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
      "dev": true,
      "requires": {
        "locate-path": "^3.0.0"
      }
    },
    "first-chunk-stream": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/first-chunk-stream/-/first-chunk-stream-3.0.0.tgz",
      "integrity": "sha512-LNRvR4hr/S8cXXkIY5pTgVP7L3tq6LlYWcg9nWBuW7o1NMxKZo6oOVa/6GIekMGI0Iw7uC+HWimMe9u/VAeKqw==",
      "dev": true
    },
    "flat": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/flat/-/flat-5.0.2.tgz",
      "integrity": "sha512-b6suED+5/3rTpUBdG1gupIl8MPFCAMA0QXwmljLhvCUKcUvdE4gWky9zpuGCcXHOsz4J9wPGNWq6OKpmIzz3hQ==",
      "dev": true
    },
    "flat-cache": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.0.4.tgz",
      "integrity": "sha512-dm9s5Pw7Jc0GvMYbshN6zchCA9RgQlzzEZX3vylR9IqFfS8XciblUXOKfW6SiuJ0e13eDYZoZV5wdrev7P3Nwg==",
      "dev": true,
      "requires": {
        "flatted": "^3.1.0",
        "rimraf": "^3.0.2"
      }
    },
    "flatstr": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/flatstr/-/flatstr-1.0.12.tgz",
      "integrity": "sha512-4zPxDyhCyiN2wIAtSLI6gc82/EjqZc1onI4Mz/l0pWrAlsSfYH/2ZIcU+e3oA2wDwbzIWNKwa23F8rh6+DRWkw==",
      "dev": true
    },
    "flatted": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.1.1.tgz",
      "integrity": "sha512-zAoAQiudy+r5SvnSw3KJy5os/oRJYHzrzja/tBDqrZtNhUw8bt6y8OBzMWcjWr+8liV8Eb6yOhw8WZ7VFZ5ZzA==",
      "dev": true
    },
    "fluent-syntax": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/fluent-syntax/-/fluent-syntax-0.13.0.tgz",
      "integrity": "sha512-0Bk1AsliuYB550zr4JV9AYhsETsD3ELXUQzdXGJfIc1Ni/ukAfBdQInDhVMYJUaT2QxoamNslwkYF7MlOrPUwg==",
      "dev": true
    },
    "for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
      "dev": true,
      "optional": true
    },
    "foreground-child": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-2.0.0.tgz",
      "integrity": "sha512-dCIq9FpEcyQyXKCkyzmlPTFNgrCzPudOe+mhvJU5zAtlBnGVy2yKxtfsxK2tQBThwq225jcvBjpw1Gr40uzZCA==",
      "dev": true,
      "requires": {
        "cross-spawn": "^7.0.0",
        "signal-exit": "^3.0.2"
      }
    },
    "forever-agent": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
      "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
      "dev": true
    },
    "form-data": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
      "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
      "dev": true,
      "requires": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.6",
        "mime-types": "^2.1.12"
      }
    },
    "forwarded": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
      "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ=",
      "dev": true,
      "peer": true
    },
    "fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "dev": true,
      "optional": true,
      "requires": {
        "map-cache": "^0.2.2"
      }
    },
    "fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
      "dev": true,
      "peer": true
    },
    "from2": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/from2/-/from2-2.3.0.tgz",
      "integrity": "sha1-i/tVAr3kpNNs/e6gB/zKIdfjgq8=",
      "dev": true,
      "requires": {
        "inherits": "^2.0.1",
        "readable-stream": "^2.0.0"
      }
    },
    "fromentries": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/fromentries/-/fromentries-1.3.2.tgz",
      "integrity": "sha512-cHEpEQHUg0f8XdtZCc2ZAhrHzKzT0MrFUTcvx+hfxYu7rGMDc5SKoXFh+n4YigxsHXRzc6OrCshdR1bWH6HHyg==",
      "dev": true
    },
    "fs-constants": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz",
      "integrity": "sha512-y6OAwoSIf7FyjMIv94u+b5rdheZEjzR63GTyZJm5qh4Bi+2YgwLCcI/fPFZkL5PSixOt6ZNKm+w+Hfp/Bciwow==",
      "dev": true
    },
    "fs-extra": {
      "version": "10.0.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.0.0.tgz",
      "integrity": "sha512-C5owb14u9eJwizKGdchcDUQeFtlSHHthBk8pbX9Vc1PFZrLombudjDnNns88aYslCyF6IY5SUw3Roz6xShcEIQ==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      }
    },
    "fs-readdir-recursive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fs-readdir-recursive/-/fs-readdir-recursive-1.1.0.tgz",
      "integrity": "sha512-GNanXlVr2pf02+sPN40XN8HG+ePaNcvM0q5mZBd668Obwb0yD5GiUbZOFgwn8kGMY6I3mdyDJzieUy3PTYyTRA==",
      "dev": true
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
      "dev": true
    },
    "function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
      "dev": true
    },
    "functional-red-black-tree": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz",
      "integrity": "sha1-GwqzvVU7Kg1jmdKcDj6gslIHgyc=",
      "dev": true
    },
    "gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true
    },
    "get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "dev": true
    },
    "get-func-name": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/get-func-name/-/get-func-name-2.0.0.tgz",
      "integrity": "sha1-6td0q+5y4gQJQzoGY2YCPdaIekE=",
      "dev": true
    },
    "get-intrinsic": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.0.2.tgz",
      "integrity": "sha512-aeX0vrFm21ILl3+JpFFRNe9aUvp6VFZb2/CTbgLb8j75kOhvoNYjt9d8KA/tJG4gSo8nzEDedRl0h7vDmBYRVg==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1"
      }
    },
    "get-package-type": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
      "integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==",
      "dev": true
    },
    "get-stream": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz",
      "integrity": "sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ=",
      "dev": true
    },
    "get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
      "dev": true,
      "optional": true
    },
    "getpass": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
      "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0"
      }
    },
    "glob": {
      "version": "7.1.6",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
      "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
      "dev": true,
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "glob-parent": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
      "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
      "dev": true,
      "optional": true,
      "requires": {
        "is-glob": "^3.1.0",
        "path-dirname": "^1.0.0"
      },
      "dependencies": {
        "is-glob": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
          "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-extglob": "^2.1.0"
          }
        }
      }
    },
    "glob-to-regexp": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.4.1.tgz",
      "integrity": "sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==",
      "dev": true
    },
    "globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
      "dev": true
    },
    "globby": {
      "version": "11.0.3",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.0.3.tgz",
      "integrity": "sha512-ffdmosjA807y7+lA1NM0jELARVmYul/715xiILEjo3hBLPTcirgQNnXECn5g3mtR8TOLCVbkfua1Hpen25/Xcg==",
      "dev": true,
      "requires": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.1.1",
        "ignore": "^5.1.4",
        "merge2": "^1.3.0",
        "slash": "^3.0.0"
      },
      "dependencies": {
        "ignore": {
          "version": "5.1.8",
          "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.1.8.tgz",
          "integrity": "sha512-BMpfD7PpiETpBl/A6S498BaIJ6Y/ABT93ETbby2fP00v4EbvPBXWEoaR1UBPKs3iR53pJY7EtZk5KACI57i1Uw==",
          "dev": true
        },
        "slash": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
          "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
          "dev": true
        }
      }
    },
    "got": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/got/-/got-8.3.2.tgz",
      "integrity": "sha512-qjUJ5U/hawxosMryILofZCkm3C84PLJS/0grRIpjAwu+Lkxxj5cxeCU25BG0/3mDSpXKTyZr8oh8wIgLaH0QCw==",
      "dev": true,
      "requires": {
        "@sindresorhus/is": "^0.7.0",
        "cacheable-request": "^2.1.1",
        "decompress-response": "^3.3.0",
        "duplexer3": "^0.1.4",
        "get-stream": "^3.0.0",
        "into-stream": "^3.1.0",
        "is-retry-allowed": "^1.1.0",
        "isurl": "^1.0.0-alpha5",
        "lowercase-keys": "^1.0.0",
        "mimic-response": "^1.0.0",
        "p-cancelable": "^0.4.0",
        "p-timeout": "^2.0.1",
        "pify": "^3.0.0",
        "safe-buffer": "^5.1.1",
        "timed-out": "^4.0.1",
        "url-parse-lax": "^3.0.0",
        "url-to-options": "^1.0.1"
      },
      "dependencies": {
        "pify": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
          "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
          "dev": true
        }
      }
    },
    "graceful-fs": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.4.tgz",
      "integrity": "sha512-WjKPNJF79dtJAVniUlGGWHYGz2jWxT6VhN/4m1NdkbZ2nOsEF+cI1Edgql5zCRhs/VsQYRvrXctxktVXZUkixw==",
      "dev": true
    },
    "graceful-readlink": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/graceful-readlink/-/graceful-readlink-1.0.1.tgz",
      "integrity": "sha1-TK+tdrxi8C+gObL5Tpo906ORpyU=",
      "dev": true
    },
    "growl": {
      "version": "1.10.5",
      "resolved": "https://registry.npmjs.org/growl/-/growl-1.10.5.tgz",
      "integrity": "sha512-qBr4OuELkhPenW6goKVXiv47US3clb3/IbuWF9KNKEijAy9oeHxU9IgzjvJhHkUzhaj7rOUD7+YGWqUjLp5oSA==",
      "dev": true
    },
    "har-schema": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
      "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
      "dev": true
    },
    "har-validator": {
      "version": "5.1.5",
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
      "integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
      "dev": true,
      "requires": {
        "ajv": "^6.12.3",
        "har-schema": "^2.0.0"
      }
    },
    "has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1"
      }
    },
    "has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true
    },
    "has-symbol-support-x": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/has-symbol-support-x/-/has-symbol-support-x-1.4.2.tgz",
      "integrity": "sha512-3ToOva++HaW+eCpgqZrCfN51IPB+7bJNVT6CUATzueB5Heb8o6Nam0V3HG5dlDvZU1Gn5QLcbahiKw/XVk5JJw==",
      "dev": true
    },
    "has-symbols": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.1.tgz",
      "integrity": "sha512-PLcsoqu++dmEIZB+6totNFKq/7Do+Z0u4oT0zKOJNl3lYK6vGwwu2hjHs+68OEZbTjiUE9bgOABXbP/GvrS0Kg==",
      "dev": true
    },
    "has-to-string-tag-x": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/has-to-string-tag-x/-/has-to-string-tag-x-1.4.1.tgz",
      "integrity": "sha512-vdbKfmw+3LoOYVr+mtxHaX5a96+0f3DljYd8JOqvOLsf5mw2Otda2qCDT9qRqLAhrjyQ0h7ual5nOiASpsGNFw==",
      "dev": true,
      "requires": {
        "has-symbol-support-x": "^1.4.1"
      }
    },
    "has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "dev": true,
      "optional": true,
      "requires": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      }
    },
    "has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "dev": true,
      "optional": true,
      "requires": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
          "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "hasha": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/hasha/-/hasha-5.2.2.tgz",
      "integrity": "sha512-Hrp5vIK/xr5SkeN2onO32H0MgNZ0f17HRNH39WfL0SYUNOTZ5Lz1TJ8Pajo/87dYGEFlLMm7mIc/k/s6Bvz9HQ==",
      "dev": true,
      "requires": {
        "is-stream": "^2.0.0",
        "type-fest": "^0.8.0"
      },
      "dependencies": {
        "is-stream": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
          "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw==",
          "dev": true
        }
      }
    },
    "he": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
      "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
      "dev": true
    },
    "html-escaper": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
      "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==",
      "dev": true
    },
    "htmlparser2": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-6.1.0.tgz",
      "integrity": "sha512-gyyPk6rgonLFEDGoeRgQNaEUvdJ4ktTmmUh/h2t7s+M8oPpIPxgNACWa+6ESR57kXstwqPiCut0V8NRpcwgU7A==",
      "dev": true,
      "requires": {
        "domelementtype": "^2.0.1",
        "domhandler": "^4.0.0",
        "domutils": "^2.5.2",
        "entities": "^2.0.0"
      }
    },
    "http-cache-semantics": {
      "version": "3.8.1",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-3.8.1.tgz",
      "integrity": "sha512-5ai2iksyV8ZXmnZhHH4rWPoxxistEexSi5936zIQ1bnNTW5VnA85B6P/VpXiRM017IgRvb2kKo1a//y+0wSp3w==",
      "dev": true
    },
    "http-errors": {
      "version": "1.7.2",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
      "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
      "dev": true,
      "peer": true,
      "requires": {
        "depd": "~1.1.2",
        "inherits": "2.0.3",
        "setprototypeof": "1.1.1",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.0"
      }
    },
    "http-signature": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
      "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0",
        "jsprim": "^1.2.2",
        "sshpk": "^1.7.0"
      }
    },
    "human-signals": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-1.1.1.tgz",
      "integrity": "sha512-SEQu7vl8KjNL2eoGBLF3+wAjpsNfA9XMlXAYj/3EdaNfAlxKthD1xjEQfGOUhllCGGJVNY34bRr6lPINhNjyZw==",
      "dev": true
    },
    "iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "dev": true,
      "peer": true,
      "requires": {
        "safer-buffer": ">= 2.1.2 < 3"
      }
    },
    "ieee754": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.1.12.tgz",
      "integrity": "sha512-GguP+DRY+pJ3soyIiGPTvdiVXjZ+DbXOxGpXn3eMvNW4x4irjqXm4wHKscC+TfxSJ0yw/S1F24tqdMNsMZTiLA==",
      "dev": true
    },
    "ignore": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz",
      "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==",
      "dev": true
    },
    "image-size": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/image-size/-/image-size-1.0.0.tgz",
      "integrity": "sha512-JLJ6OwBfO1KcA+TvJT+v8gbE6iWbj24LyDNFgFEN0lzegn6cC6a/p3NIDaepMsJjQjlUWqIC7wJv8lBFxPNjcw==",
      "dev": true,
      "requires": {
        "queue": "6.0.2"
      }
    },
    "import-fresh": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
      "dev": true,
      "requires": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      }
    },
    "import-local": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/import-local/-/import-local-3.0.2.tgz",
      "integrity": "sha512-vjL3+w0oulAVZ0hBHnxa/Nm5TAurf9YLQJDhqRZyqb+VKGOB6LU8t9H1Nr5CIo16vh9XfJTOoHwU0B71S557gA==",
      "dev": true,
      "requires": {
        "pkg-dir": "^4.2.0",
        "resolve-cwd": "^3.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
          "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
          "dev": true,
          "requires": {
            "locate-path": "^5.0.0",
            "path-exists": "^4.0.0"
          }
        },
        "locate-path": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
          "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
          "dev": true,
          "requires": {
            "p-locate": "^4.1.0"
          }
        },
        "p-locate": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
          "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
          "dev": true,
          "requires": {
            "p-limit": "^2.2.0"
          }
        },
        "path-exists": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
          "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
          "dev": true
        },
        "pkg-dir": {
          "version": "4.2.0",
          "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
          "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
          "dev": true,
          "requires": {
            "find-up": "^4.0.0"
          }
        }
      }
    },
    "imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
      "dev": true
    },
    "indent-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
      "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
      "dev": true
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "dev": true,
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
      "dev": true
    },
    "interpret": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/interpret/-/interpret-2.2.0.tgz",
      "integrity": "sha512-Ju0Bz/cEia55xDwUWEa8+olFpCiQoypjnQySseKtmjNrnps3P+xfpUmGr90T7yjlVJmOtybRvPXhKMbHr+fWnw==",
      "dev": true
    },
    "into-stream": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/into-stream/-/into-stream-3.1.0.tgz",
      "integrity": "sha1-lvsKk2wSur1v8XUqF9BWFqvQlMY=",
      "dev": true,
      "requires": {
        "from2": "^2.1.1",
        "p-is-promise": "^1.1.0"
      }
    },
    "ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "dev": true,
      "peer": true
    },
    "is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dev": true,
      "optional": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-arguments": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.1.0.tgz",
      "integrity": "sha512-1Ij4lOMPl/xB5kBDn7I+b2ttPMKa8szhEIrXDuXQD/oe3HJLTLhqhgGspwgyGd6MOywBUqVvYicF72lkgDnIHg==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0"
      }
    },
    "is-binary-path": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
      "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
      "dev": true,
      "optional": true,
      "requires": {
        "binary-extensions": "^1.0.0"
      }
    },
    "is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
      "dev": true,
      "optional": true
    },
    "is-callable": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.2.tgz",
      "integrity": "sha512-dnMqspv5nU3LoewK2N/y7KLtxtakvTuaCsU9FU50/QDmdbHNy/4/JuRtMHqRU22o3q+W89YQndQEeCVwK+3qrA==",
      "dev": true
    },
    "is-core-module": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.4.0.tgz",
      "integrity": "sha512-6A2fkfq1rfeQZjxrZJGerpLCTHRNEBiSgnu0+obeJpEPZRUooHgsizvzv0ZjJwOz3iWIHdJtVWJ/tmPr3D21/A==",
      "dev": true,
      "requires": {
        "has": "^1.0.3"
      }
    },
    "is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dev": true,
      "optional": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-date-object": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz",
      "integrity": "sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g==",
      "dev": true
    },
    "is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dev": true,
      "optional": true,
      "requires": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
          "dev": true,
          "optional": true
        }
      }
    },
    "is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "dev": true,
      "optional": true
    },
    "is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
      "dev": true
    },
    "is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
      "dev": true
    },
    "is-glob": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "dev": true,
      "requires": {
        "is-extglob": "^2.1.1"
      }
    },
    "is-mergeable-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-mergeable-object/-/is-mergeable-object-1.1.1.tgz",
      "integrity": "sha512-CPduJfuGg8h8vW74WOxHtHmtQutyQBzR+3MjQ6iDHIYdbOnm1YC7jv43SqCoU8OPGTJD4nibmiryA4kmogbGrA==",
      "dev": true
    },
    "is-natural-number": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-natural-number/-/is-natural-number-4.0.1.tgz",
      "integrity": "sha1-q5124dtM7VHjXeDHLr7PCfc0zeg=",
      "dev": true
    },
    "is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dev": true,
      "optional": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-object": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-object/-/is-object-1.0.1.tgz",
      "integrity": "sha1-iVJojF7C/9awPsyF52ngKQMINHA=",
      "dev": true
    },
    "is-plain-obj": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
      "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4=",
      "dev": true
    },
    "is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dev": true,
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "is-regex": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.1.tgz",
      "integrity": "sha512-1+QkEcxiLlB7VEyFtyBg94e08OAsvq7FUBgApTq/w2ymCLyKJgDPsybBENVtA7XCQEgEXxKPonG+mvYRxh/LIg==",
      "dev": true,
      "requires": {
        "has-symbols": "^1.0.1"
      }
    },
    "is-retry-allowed": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-retry-allowed/-/is-retry-allowed-1.1.0.tgz",
      "integrity": "sha1-EaBgVotnM5REAz0BJaYaINVk+zQ=",
      "dev": true
    },
    "is-stream": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
      "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ=",
      "dev": true
    },
    "is-symbol": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz",
      "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
      "dev": true,
      "requires": {
        "has-symbols": "^1.0.1"
      }
    },
    "is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
      "dev": true
    },
    "is-utf8": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
      "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",
      "dev": true
    },
    "is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
      "dev": true
    },
    "isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
      "dev": true
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
      "dev": true
    },
    "isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true
    },
    "isstream": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
      "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
      "dev": true
    },
    "istanbul-lib-coverage": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.0.0.tgz",
      "integrity": "sha512-UiUIqxMgRDET6eR+o5HbfRYP1l0hqkWOs7vNxC/mggutCMUIhWMm8gAHb8tHlyfD3/l6rlgNA5cKdDzEAf6hEg==",
      "dev": true
    },
    "istanbul-lib-hook": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-hook/-/istanbul-lib-hook-3.0.0.tgz",
      "integrity": "sha512-Pt/uge1Q9s+5VAZ+pCo16TYMWPBIl+oaNIjgLQxcX0itS6ueeaA+pEfThZpH8WxhFgCiEb8sAJY6MdUKgiIWaQ==",
      "dev": true,
      "requires": {
        "append-transform": "^2.0.0"
      }
    },
    "istanbul-lib-instrument": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-4.0.3.tgz",
      "integrity": "sha512-BXgQl9kf4WTCPCCpmFGoJkz/+uhvm7h7PFKUYxh7qarQd3ER33vHG//qaE8eN25l07YqZPpHXU9I09l/RD5aGQ==",
      "dev": true,
      "requires": {
        "@babel/core": "^7.7.5",
        "@istanbuljs/schema": "^0.1.2",
        "istanbul-lib-coverage": "^3.0.0",
        "semver": "^6.3.0"
      }
    },
    "istanbul-lib-processinfo": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/istanbul-lib-processinfo/-/istanbul-lib-processinfo-2.0.2.tgz",
      "integrity": "sha512-kOwpa7z9hme+IBPZMzQ5vdQj8srYgAtaRqeI48NGmAQ+/5yKiHLV0QbYqQpxsdEF0+w14SoB8YbnHKcXE2KnYw==",
      "dev": true,
      "requires": {
        "archy": "^1.0.0",
        "cross-spawn": "^7.0.0",
        "istanbul-lib-coverage": "^3.0.0-alpha.1",
        "make-dir": "^3.0.0",
        "p-map": "^3.0.0",
        "rimraf": "^3.0.0",
        "uuid": "^3.3.3"
      },
      "dependencies": {
        "make-dir": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
          "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
          "dev": true,
          "requires": {
            "semver": "^6.0.0"
          }
        }
      }
    },
    "istanbul-lib-report": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
      "integrity": "sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw==",
      "dev": true,
      "requires": {
        "istanbul-lib-coverage": "^3.0.0",
        "make-dir": "^3.0.0",
        "supports-color": "^7.1.0"
      },
      "dependencies": {
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
          "dev": true
        },
        "make-dir": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
          "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
          "dev": true,
          "requires": {
            "semver": "^6.0.0"
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "dev": true,
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "istanbul-lib-source-maps": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.0.tgz",
      "integrity": "sha512-c16LpFRkR8vQXyHZ5nLpY35JZtzj1PQY1iZmesUbf1FZHbIupcWfjgOXBY9YHkLEQ6puz1u4Dgj6qmU/DisrZg==",
      "dev": true,
      "requires": {
        "debug": "^4.1.1",
        "istanbul-lib-coverage": "^3.0.0",
        "source-map": "^0.6.1"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "istanbul-reports": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.0.2.tgz",
      "integrity": "sha512-9tZvz7AiR3PEDNGiV9vIouQ/EAcqMXFmkcA1CDFTwOB98OZVDL0PH9glHotf5Ugp6GCOTypfzGWI/OqjWNCRUw==",
      "dev": true,
      "requires": {
        "html-escaper": "^2.0.0",
        "istanbul-lib-report": "^3.0.0"
      }
    },
    "isurl": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isurl/-/isurl-1.0.0.tgz",
      "integrity": "sha512-1P/yWsxPlDtn7QeRD+ULKQPaIaN6yF368GZ2vDfv0AL0NwpStafjWCDDdn0k8wgFMWpVAqG7oJhxHnlud42i9w==",
      "dev": true,
      "requires": {
        "has-to-string-tag-x": "^1.2.0",
        "is-object": "^1.0.1"
      }
    },
    "jed": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/jed/-/jed-1.1.1.tgz",
      "integrity": "sha1-elSbvZ/+FYWwzQoZHiAwVb7ldLQ=",
      "dev": true
    },
    "jest-worker": {
      "version": "26.6.2",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-26.6.2.tgz",
      "integrity": "sha512-KWYVV1c4i+jbMpaBC+U++4Va0cp8OisU185o73T1vo99hqi7w8tSJfUXYswwqqrjzwxa6KpRK54WhPvwf5w6PQ==",
      "dev": true,
      "requires": {
        "@types/node": "*",
        "merge-stream": "^2.0.0",
        "supports-color": "^7.0.0"
      },
      "dependencies": {
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
          "dev": true
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "dev": true,
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true
    },
    "js-yaml": {
      "version": "3.13.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.13.1.tgz",
      "integrity": "sha512-YfbcO7jXDdyj0DGxYVSlSeQNHbD7XPWvrVWeVUujrQEoZzWJIRrCPoyk6kL6IAjAG2IolMK4T0hNUe0HOUs5Jw==",
      "dev": true,
      "requires": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      }
    },
    "jsbn": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
      "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
      "dev": true
    },
    "jsesc": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
      "dev": true
    },
    "json-buffer": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
      "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg=",
      "dev": true
    },
    "json-merge-patch": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/json-merge-patch/-/json-merge-patch-0.2.3.tgz",
      "integrity": "sha1-+ixrWvh9p3uuKWalidUuI+2B/kA=",
      "dev": true,
      "requires": {
        "deep-equal": "^1.0.0"
      }
    },
    "json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
      "dev": true
    },
    "json-schema": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
      "dev": true
    },
    "json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE=",
      "dev": true
    },
    "json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
      "dev": true
    },
    "json5": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.1.3.tgz",
      "integrity": "sha512-KXPvOm8K9IJKFM0bmdn8QXh7udDh1g/giieX0NLCaMnb4hEiVFqnop2ImTXCc5e0/oHz3LTqmHGtExn5hfMkOA==",
      "dev": true,
      "requires": {
        "minimist": "^1.2.5"
      }
    },
    "jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.6",
        "universalify": "^2.0.0"
      }
    },
    "jsprim": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
      "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
      "dev": true,
      "requires": {
        "assert-plus": "1.0.0",
        "extsprintf": "1.3.0",
        "json-schema": "0.2.3",
        "verror": "1.10.0"
      }
    },
    "keyv": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.0.0.tgz",
      "integrity": "sha512-eguHnq22OE3uVoSYG0LVWNP+4ppamWr9+zWBe1bsNcovIMy6huUJFPgy4mGwCd/rnl3vOLGW1MTlu4c57CT1xA==",
      "dev": true,
      "requires": {
        "json-buffer": "3.0.0"
      }
    },
    "kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true
    },
    "levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "requires": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      }
    },
    "loader-runner": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-4.2.0.tgz",
      "integrity": "sha512-92+huvxMvYlMzMt0iIOukcwYBFpkYJdpl2xsZ7LrlayO7E8SOv+JJUEK17B/dJIHAOLMfh2dZZ/Y18WgmGtYNw==",
      "dev": true
    },
    "loader-utils": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.4.0.tgz",
      "integrity": "sha512-qH0WSMBtn/oHuwjy/NucEgbx5dbxxnxup9s4PVXJUDHZBQY+s0NWA9rJf53RBnQZxfch7euUui7hpoAPvALZdA==",
      "dev": true,
      "requires": {
        "big.js": "^5.2.2",
        "emojis-list": "^3.0.0",
        "json5": "^1.0.1"
      },
      "dependencies": {
        "json5": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
          "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
          "dev": true,
          "requires": {
            "minimist": "^1.2.0"
          }
        }
      }
    },
    "locate-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
      "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
      "dev": true,
      "requires": {
        "p-locate": "^3.0.0",
        "path-exists": "^3.0.0"
      }
    },
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
      "dev": true
    },
    "lodash.debounce": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz",
      "integrity": "sha1-gteb/zCmfEAF/9XiUVMArZyk168=",
      "dev": true
    },
    "lodash.flattendeep": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/lodash.flattendeep/-/lodash.flattendeep-4.4.0.tgz",
      "integrity": "sha1-+wMJF/hqMTTlvJvsDWngAT3f7bI=",
      "dev": true
    },
    "log-symbols": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.0.0.tgz",
      "integrity": "sha512-FN8JBzLx6CzeMrB0tg6pqlGU1wCrXW+ZXGH481kfsBqer0hToTIiHdjH4Mq8xJUbvATujKCvaREGWpGUionraA==",
      "dev": true,
      "requires": {
        "chalk": "^4.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "dev": true,
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.1.tgz",
          "integrity": "sha512-diHzdDKxcU+bAsUboHLPEDQiw0qEe0qd7SYUn3HgcFlWgbDcfLGswOHYeGrHKzG9z6UYf01d9VFMfZxPM1xZSg==",
          "dev": true,
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "dev": true,
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
          "dev": true
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
          "dev": true
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "dev": true,
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "lowercase-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
      "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA==",
      "dev": true
    },
    "lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "dev": true,
      "requires": {
        "yallist": "^4.0.0"
      }
    },
    "make-dir": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-1.3.0.tgz",
      "integrity": "sha512-2w31R7SJtieJJnQtGc7RVL2StM2vGYVfqUOvUDxH6bC6aJTxPxTF0GnIgCyu7tjockiUWAYQRbxa7vKn34s5sQ==",
      "dev": true,
      "requires": {
        "pify": "^3.0.0"
      },
      "dependencies": {
        "pify": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
          "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
          "dev": true
        }
      }
    },
    "map-age-cleaner": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/map-age-cleaner/-/map-age-cleaner-0.1.3.tgz",
      "integrity": "sha512-bJzx6nMoP6PDLPBFmg7+xRKeFZvFboMrGlxmNj9ClvX53KrmvM5bXFXEWjbz4cz1AFn+jWJ9z/DJSz7hrs0w3w==",
      "dev": true,
      "requires": {
        "p-defer": "^1.0.0"
      }
    },
    "map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
      "dev": true,
      "optional": true
    },
    "map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "dev": true,
      "optional": true,
      "requires": {
        "object-visit": "^1.0.0"
      }
    },
    "marked": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/marked/-/marked-2.0.4.tgz",
      "integrity": "sha512-MIL0xKRDQM3DE7dJr/wa6JV0EmK9yZ3cwuTc2bu66FNm/tmEMm9cJCgJZpt9R+K1T+pB2iBNV55wvnwSd345zg==",
      "dev": true
    },
    "media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g=",
      "dev": true,
      "peer": true
    },
    "merge-descriptors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E=",
      "dev": true,
      "peer": true
    },
    "merge-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
      "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
      "dev": true
    },
    "merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true
    },
    "methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4=",
      "dev": true,
      "peer": true
    },
    "micromatch": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "dev": true,
      "optional": true,
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      }
    },
    "mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
      "dev": true,
      "peer": true
    },
    "mime-db": {
      "version": "1.36.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.36.0.tgz",
      "integrity": "sha512-L+xvyD9MkoYMXb1jAmzI/lWYAxAMCPvIBSWur0PZ5nOf5euahRLVqH//FKW9mWp2lkqUgYiXPgkzfMUFi4zVDw==",
      "dev": true
    },
    "mime-types": {
      "version": "2.1.28",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.28.tgz",
      "integrity": "sha512-0TO2yJ5YHYr7M2zzT7gDU1tbwHxEUWBCLt0lscSNpcdAfFyJOVEpRYNS7EXVcTLNj/25QO8gulHC5JtTzSE2UQ==",
      "dev": true,
      "requires": {
        "mime-db": "1.45.0"
      },
      "dependencies": {
        "mime-db": {
          "version": "1.45.0",
          "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.45.0.tgz",
          "integrity": "sha512-CkqLUxUk15hofLoLyljJSrukZi8mAtgd+yE5uO4tqRZsdsAJKv0O+rFMhVDRJgozy+yG6md5KwuXhD4ocIoP+w==",
          "dev": true
        }
      }
    },
    "mimic-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
      "dev": true
    },
    "mimic-response": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
      "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ==",
      "dev": true
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "dev": true,
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
      "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw==",
      "dev": true
    },
    "mixin-deep": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "dev": true,
      "optional": true,
      "requires": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "dev": true,
          "optional": true,
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        }
      }
    },
    "mocha": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/mocha/-/mocha-8.4.0.tgz",
      "integrity": "sha512-hJaO0mwDXmZS4ghXsvPVriOhsxQ7ofcpQdm8dE+jISUOKopitvnXFQmpRR7jd2K6VBG6E26gU3IAbXXGIbu4sQ==",
      "dev": true,
      "requires": {
        "@ungap/promise-all-settled": "1.1.2",
        "ansi-colors": "4.1.1",
        "browser-stdout": "1.3.1",
        "chokidar": "3.5.1",
        "debug": "4.3.1",
        "diff": "5.0.0",
        "escape-string-regexp": "4.0.0",
        "find-up": "5.0.0",
        "glob": "7.1.6",
        "growl": "1.10.5",
        "he": "1.2.0",
        "js-yaml": "4.0.0",
        "log-symbols": "4.0.0",
        "minimatch": "3.0.4",
        "ms": "2.1.3",
        "nanoid": "3.1.20",
        "serialize-javascript": "5.0.1",
        "strip-json-comments": "3.1.1",
        "supports-color": "8.1.1",
        "which": "2.0.2",
        "wide-align": "1.1.3",
        "workerpool": "6.1.0",
        "yargs": "16.2.0",
        "yargs-parser": "20.2.4",
        "yargs-unparser": "2.0.0"
      },
      "dependencies": {
        "argparse": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
          "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
          "dev": true
        },
        "debug": {
          "version": "4.3.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
          "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
          "dev": true,
          "requires": {
            "ms": "2.1.2"
          },
          "dependencies": {
            "ms": {
              "version": "2.1.2",
              "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
              "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
              "dev": true
            }
          }
        },
        "escape-string-regexp": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
          "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
          "dev": true
        },
        "find-up": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
          "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
          "dev": true,
          "requires": {
            "locate-path": "^6.0.0",
            "path-exists": "^4.0.0"
          }
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
          "dev": true
        },
        "js-yaml": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.0.0.tgz",
          "integrity": "sha512-pqon0s+4ScYUvX30wxQi3PogGFAlUyH0awepWvwkj4jD4v+ova3RiYw8bmA6x2rDrEaj8i/oWKoRxpVNW+Re8Q==",
          "dev": true,
          "requires": {
            "argparse": "^2.0.1"
          }
        },
        "locate-path": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
          "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
          "dev": true,
          "requires": {
            "p-locate": "^5.0.0"
          }
        },
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
          "dev": true
        },
        "p-limit": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
          "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
          "dev": true,
          "requires": {
            "yocto-queue": "^0.1.0"
          }
        },
        "p-locate": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
          "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
          "dev": true,
          "requires": {
            "p-limit": "^3.0.2"
          }
        },
        "path-exists": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
          "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
          "dev": true
        },
        "supports-color": {
          "version": "8.1.1",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
          "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
          "dev": true,
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
      "dev": true
    },
    "nanoid": {
      "version": "3.1.20",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.1.20.tgz",
      "integrity": "sha512-a1cQNyczgKbLX9jwbS/+d7W8fX/RfgYR7lVWwWOGIPNgK2m0MWvrGF6/m4kk6U3QcFMnZf3RIhL0v2Jgh/0Uxw==",
      "dev": true
    },
    "nanomatch": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "dev": true,
      "optional": true,
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      }
    },
    "natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
      "dev": true
    },
    "natural-compare-lite": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare-lite/-/natural-compare-lite-1.4.0.tgz",
      "integrity": "sha1-F7CVgZiJef3a/gIB6TG6kzyWy7Q=",
      "dev": true
    },
    "negotiator": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
      "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw==",
      "dev": true,
      "peer": true
    },
    "neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
      "dev": true
    },
    "node-modules-regexp": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
      "integrity": "sha1-jZ2+KJZKSsVxLpExZCEHxx6Q7EA=",
      "dev": true
    },
    "node-preload": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/node-preload/-/node-preload-0.2.1.tgz",
      "integrity": "sha512-RM5oyBy45cLEoHqCeh+MNuFAxO0vTFBLskvQbOKnEE7YTTSN4tbN8QWDIPQ6L+WvKsB/qLEGpYe2ZZ9d4W9OIQ==",
      "dev": true,
      "requires": {
        "process-on-spawn": "^1.0.0"
      }
    },
    "node-releases": {
      "version": "1.1.72",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.72.tgz",
      "integrity": "sha512-LLUo+PpH3dU6XizX3iVoubUNheF/owjXCZZ5yACDxNnPtgFuludV1ZL3ayK1kVep42Rmm0+R9/Y60NQbZ2bifw==",
      "dev": true
    },
    "normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true
    },
    "normalize-url": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-2.0.1.tgz",
      "integrity": "sha512-D6MUW4K/VzoJ4rJ01JFKxDrtY1v9wrgzCX5f2qj/lzH1m/lW6MhUZFKerVsnyjOhOsYzI9Kqqak+10l4LvLpMw==",
      "dev": true,
      "requires": {
        "prepend-http": "^2.0.0",
        "query-string": "^5.0.1",
        "sort-keys": "^2.0.0"
      },
      "dependencies": {
        "sort-keys": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-2.0.0.tgz",
          "integrity": "sha1-ZYU1WEhh7JfXMNbPQYIuH1ZoQSg=",
          "dev": true,
          "requires": {
            "is-plain-obj": "^1.0.0"
          }
        }
      }
    },
    "npm-run-path": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
      "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
      "dev": true,
      "requires": {
        "path-key": "^3.0.0"
      }
    },
    "nth-check": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.0.0.tgz",
      "integrity": "sha512-i4sc/Kj8htBrAiH1viZ0TgU8Y5XqCaV/FziYK6TBczxmeKm3AEFWqqF3195yKudrarqy7Zu80Ra5dobFjn9X/Q==",
      "dev": true,
      "requires": {
        "boolbase": "^1.0.0"
      }
    },
    "nyc": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/nyc/-/nyc-15.1.0.tgz",
      "integrity": "sha512-jMW04n9SxKdKi1ZMGhvUTHBN0EICCRkHemEoE5jm6mTYcqcdas0ATzgUgejlQUHMvpnOZqGB5Xxsv9KxJW1j8A==",
      "dev": true,
      "requires": {
        "@istanbuljs/load-nyc-config": "^1.0.0",
        "@istanbuljs/schema": "^0.1.2",
        "caching-transform": "^4.0.0",
        "convert-source-map": "^1.7.0",
        "decamelize": "^1.2.0",
        "find-cache-dir": "^3.2.0",
        "find-up": "^4.1.0",
        "foreground-child": "^2.0.0",
        "get-package-type": "^0.1.0",
        "glob": "^7.1.6",
        "istanbul-lib-coverage": "^3.0.0",
        "istanbul-lib-hook": "^3.0.0",
        "istanbul-lib-instrument": "^4.0.0",
        "istanbul-lib-processinfo": "^2.0.2",
        "istanbul-lib-report": "^3.0.0",
        "istanbul-lib-source-maps": "^4.0.0",
        "istanbul-reports": "^3.0.2",
        "make-dir": "^3.0.0",
        "node-preload": "^0.2.1",
        "p-map": "^3.0.0",
        "process-on-spawn": "^1.0.0",
        "resolve-from": "^5.0.0",
        "rimraf": "^3.0.0",
        "signal-exit": "^3.0.2",
        "spawn-wrap": "^2.0.0",
        "test-exclude": "^6.0.0",
        "yargs": "^15.0.2"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
          "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
          "dev": true
        },
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "dev": true,
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "cliui": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz",
          "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
          "dev": true,
          "requires": {
            "string-width": "^4.2.0",
            "strip-ansi": "^6.0.0",
            "wrap-ansi": "^6.2.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "dev": true,
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
          "dev": true
        },
        "find-cache-dir": {
          "version": "3.3.1",
          "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.1.tgz",
          "integrity": "sha512-t2GDMt3oGC/v+BMwzmllWDuJF/xcDtE5j/fCGbqDD7OLuJkj0cfh1YSA5VKPvwMeLFLNDBkwOKZ2X85jGLVftQ==",
          "dev": true,
          "requires": {
            "commondir": "^1.0.1",
            "make-dir": "^3.0.2",
            "pkg-dir": "^4.1.0"
          }
        },
        "find-up": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
          "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
          "dev": true,
          "requires": {
            "locate-path": "^5.0.0",
            "path-exists": "^4.0.0"
          }
        },
        "is-fullwidth-code-point": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
          "dev": true
        },
        "locate-path": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
          "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
          "dev": true,
          "requires": {
            "p-locate": "^4.1.0"
          }
        },
        "make-dir": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
          "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
          "dev": true,
          "requires": {
            "semver": "^6.0.0"
          }
        },
        "p-locate": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
          "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
          "dev": true,
          "requires": {
            "p-limit": "^2.2.0"
          }
        },
        "path-exists": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
          "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
          "dev": true
        },
        "pkg-dir": {
          "version": "4.2.0",
          "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
          "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
          "dev": true,
          "requires": {
            "find-up": "^4.0.0"
          }
        },
        "resolve-from": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
          "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
          "dev": true
        },
        "string-width": {
          "version": "4.2.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
          "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
          "dev": true,
          "requires": {
            "emoji-regex": "^8.0.0",
            "is-fullwidth-code-point": "^3.0.0",
            "strip-ansi": "^6.0.0"
          }
        },
        "strip-ansi": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
          "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
          "dev": true,
          "requires": {
            "ansi-regex": "^5.0.0"
          }
        },
        "wrap-ansi": {
          "version": "6.2.0",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
          "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
          "dev": true,
          "requires": {
            "ansi-styles": "^4.0.0",
            "string-width": "^4.1.0",
            "strip-ansi": "^6.0.0"
          }
        },
        "y18n": {
          "version": "4.0.3",
          "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.3.tgz",
          "integrity": "sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ==",
          "dev": true
        },
        "yargs": {
          "version": "15.4.1",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz",
          "integrity": "sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==",
          "dev": true,
          "requires": {
            "cliui": "^6.0.0",
            "decamelize": "^1.2.0",
            "find-up": "^4.1.0",
            "get-caller-file": "^2.0.1",
            "require-directory": "^2.1.1",
            "require-main-filename": "^2.0.0",
            "set-blocking": "^2.0.0",
            "string-width": "^4.2.0",
            "which-module": "^2.0.0",
            "y18n": "^4.0.0",
            "yargs-parser": "^18.1.2"
          }
        },
        "yargs-parser": {
          "version": "18.1.3",
          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
          "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
          "dev": true,
          "requires": {
            "camelcase": "^5.0.0",
            "decamelize": "^1.2.0"
          }
        }
      }
    },
    "oauth-sign": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
      "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
      "dev": true
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
      "dev": true
    },
    "object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "dev": true,
      "optional": true,
      "requires": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "object-inspect": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.9.0.tgz",
      "integrity": "sha512-i3Bp9iTqwhaLZBxGkRfo5ZbE07BQRT7MGu8+nNgwW9ItGp1TzCTw2DLEoWwjClxBjOFI/hWljTAmYGCEwmtnOw==",
      "dev": true
    },
    "object-is": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/object-is/-/object-is-1.1.4.tgz",
      "integrity": "sha512-1ZvAZ4wlF7IyPVOcE1Omikt7UpaFlOQq0HlSti+ZvDH3UiD2brwGMwDbyV43jao2bKJ+4+WdPJHSd7kgzKYVqg==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3"
      }
    },
    "object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true
    },
    "object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "dev": true,
      "optional": true,
      "requires": {
        "isobject": "^3.0.0"
      }
    },
    "object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      }
    },
    "object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "dev": true,
      "optional": true,
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "dev": true,
      "peer": true,
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "dev": true,
      "requires": {
        "wrappy": "1"
      }
    },
    "onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "dev": true,
      "requires": {
        "mimic-fn": "^2.1.0"
      }
    },
    "optionator": {
      "version": "0.9.1",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.1.tgz",
      "integrity": "sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==",
      "dev": true,
      "requires": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.3"
      }
    },
    "p-cancelable": {
      "version": "0.4.1",
      "resolved": "http://registry.npmjs.org/p-cancelable/-/p-cancelable-0.4.1.tgz",
      "integrity": "sha512-HNa1A8LvB1kie7cERyy21VNeHb2CWJJYqyyC2o3klWFfMGlFmWv2Z7sFgZH8ZiaYL95ydToKTFVXgMV/Os0bBQ==",
      "dev": true
    },
    "p-defer": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-defer/-/p-defer-1.0.0.tgz",
      "integrity": "sha1-n26xgvbJqozXQwBKfU+WsZaw+ww=",
      "dev": true
    },
    "p-event": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/p-event/-/p-event-2.1.0.tgz",
      "integrity": "sha512-sDEpDVnzLGlJj3k590uUdpfEUySP5yAYlvfTCu5hTDvSTXQVecYWKcEwdO49PrZlnJ5wkfAvtawnno/jyXeqvA==",
      "dev": true,
      "requires": {
        "p-timeout": "^2.0.1"
      }
    },
    "p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
      "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
      "dev": true
    },
    "p-is-promise": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/p-is-promise/-/p-is-promise-1.1.0.tgz",
      "integrity": "sha1-nJRWmJ6fZYgBewQ01WCXZ1w9oF4=",
      "dev": true
    },
    "p-limit": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.2.0.tgz",
      "integrity": "sha512-pZbTJpoUsCzV48Mc9Nh51VbwO0X9cuPFE8gYwx9BTCt9SF8/b7Zljd2fVgOxhIF/HDTKgpVzs+GPhyKfjLLFRQ==",
      "dev": true,
      "requires": {
        "p-try": "^2.0.0"
      }
    },
    "p-locate": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
      "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
      "dev": true,
      "requires": {
        "p-limit": "^2.0.0"
      }
    },
    "p-map": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-3.0.0.tgz",
      "integrity": "sha512-d3qXVTF/s+W+CdJ5A29wywV2n8CQQYahlgz2bFiA+4eVNJbHJodPZ+/gXwPGh0bOqA+j8S+6+ckmvLGPk1QpxQ==",
      "dev": true,
      "requires": {
        "aggregate-error": "^3.0.0"
      }
    },
    "p-timeout": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/p-timeout/-/p-timeout-2.0.1.tgz",
      "integrity": "sha512-88em58dDVB/KzPEx1X0N3LwFfYZPyDc4B6eF38M1rk9VTZMbxXXgjugz8mmwpS9Ox4BDZ+t6t3QP5+/gazweIA==",
      "dev": true,
      "requires": {
        "p-finally": "^1.0.0"
      }
    },
    "p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
      "dev": true
    },
    "package-hash": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/package-hash/-/package-hash-4.0.0.tgz",
      "integrity": "sha512-whdkPIooSu/bASggZ96BWVvZTRMOFxnyUG5PnTSGKoJE2gd5mbVNmR2Nj20QFzxYYgAXpoqC+AiXzl+UMRh7zQ==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.15",
        "hasha": "^5.0.0",
        "lodash.flattendeep": "^4.4.0",
        "release-zalgo": "^1.0.0"
      }
    },
    "parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "requires": {
        "callsites": "^3.0.0"
      }
    },
    "parse5": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-6.0.1.tgz",
      "integrity": "sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw==",
      "dev": true
    },
    "parse5-htmlparser2-tree-adapter": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/parse5-htmlparser2-tree-adapter/-/parse5-htmlparser2-tree-adapter-6.0.1.tgz",
      "integrity": "sha512-qPuWvbLgvDGilKc5BoicRovlT4MtYT6JfJyBOMDsKoiT+GiuP5qyrPCnR9HcPECIJJmZh5jRndyNThnhhb/vlA==",
      "dev": true,
      "requires": {
        "parse5": "^6.0.1"
      }
    },
    "parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "dev": true,
      "peer": true
    },
    "pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
      "dev": true,
      "optional": true
    },
    "path-dirname": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
      "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA=",
      "dev": true,
      "optional": true
    },
    "path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
      "dev": true
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "dev": true
    },
    "path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true
    },
    "path-parse": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
      "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw==",
      "dev": true
    },
    "path-to-regexp": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w=",
      "dev": true,
      "peer": true
    },
    "path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true
    },
    "pathval": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/pathval/-/pathval-1.1.1.tgz",
      "integrity": "sha512-Dp6zGqpTdETdR63lehJYPeIOqpiNBNtc7BpWSLrOje7UaIsE5aY92r/AunQA7rsXvet3lrJ3JnZX29UPTKXyKQ==",
      "dev": true
    },
    "pend": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/pend/-/pend-1.2.0.tgz",
      "integrity": "sha1-elfrVQpng/kRUzH89GY9XI4AelA=",
      "dev": true
    },
    "performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
      "dev": true
    },
    "picomatch": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.3.tgz",
      "integrity": "sha512-KpELjfwcCDUb9PeigTs2mBJzXUPzAuP2oPcA989He8Rte0+YUAjw1JVedDhuTKPkHjSYzMN3npC9luThGYEKdg==",
      "dev": true
    },
    "pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
      "dev": true
    },
    "pinkie": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
      "dev": true
    },
    "pinkie-promise": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
      "dev": true,
      "requires": {
        "pinkie": "^2.0.0"
      }
    },
    "pino": {
      "version": "6.11.3",
      "resolved": "https://registry.npmjs.org/pino/-/pino-6.11.3.tgz",
      "integrity": "sha512-drPtqkkSf0ufx2gaea3TryFiBHdNIdXKf5LN0hTM82SXI4xVIve2wLwNg92e1MT6m3jASLu6VO7eGY6+mmGeyw==",
      "dev": true,
      "requires": {
        "fast-redact": "^3.0.0",
        "fast-safe-stringify": "^2.0.7",
        "flatstr": "^1.0.12",
        "pino-std-serializers": "^3.1.0",
        "quick-format-unescaped": "^4.0.3",
        "sonic-boom": "^1.0.2"
      }
    },
    "pino-std-serializers": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/pino-std-serializers/-/pino-std-serializers-3.2.0.tgz",
      "integrity": "sha512-EqX4pwDPrt3MuOAAUBMU0Tk5kR/YcCM5fNPEzgCO2zJ5HfX0vbiH9HbJglnyeQsN96Kznae6MWD47pZB5avTrg==",
      "dev": true
    },
    "pirates": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.1.tgz",
      "integrity": "sha512-WuNqLTbMI3tmfef2TKxlQmAiLHKtFhlsCZnPIpuv2Ow0RDVO8lfy1Opf4NUzlMXLjPl+Men7AuVdX6TA+s+uGA==",
      "dev": true,
      "requires": {
        "node-modules-regexp": "^1.0.0"
      }
    },
    "pkg-dir": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
      "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
      "dev": true,
      "requires": {
        "find-up": "^3.0.0"
      }
    },
    "posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
      "dev": true,
      "optional": true
    },
    "postcss": {
      "version": "8.2.14",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.2.14.tgz",
      "integrity": "sha512-+jD0ZijcvyCqPQo/m/CW0UcARpdFylq04of+Q7RKX6f/Tu+dvpUI/9Sp81+i6/vJThnOBX09Quw0ZLOVwpzX3w==",
      "dev": true,
      "requires": {
        "colorette": "^1.2.2",
        "nanoid": "^3.1.22",
        "source-map": "^0.6.1"
      },
      "dependencies": {
        "nanoid": {
          "version": "3.1.23",
          "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.1.23.tgz",
          "integrity": "sha512-FiB0kzdP0FFVGDKlRLEQ1BgDzU87dy5NnzjeW9YZNt+/c3+q82EQDUwniSAUxp/F0gFNI1ZhKU1FqYsMuqZVnw==",
          "dev": true
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true
    },
    "prepend-http": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
      "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc=",
      "dev": true
    },
    "process-nextick-args": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.0.tgz",
      "integrity": "sha512-MtEC1TqN0EU5nephaJ4rAtThHtC86dNN9qCuEhtshvpVBkAW5ZO7BASN9REnF9eoXGcRub+pFuKEpOHE+HbEMw==",
      "dev": true
    },
    "process-on-spawn": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/process-on-spawn/-/process-on-spawn-1.0.0.tgz",
      "integrity": "sha512-1WsPDsUSMmZH5LeMLegqkPDrsGgsWwk1Exipy2hvB0o/F0ASzbpIctSCcZIK1ykJvtTJULEH+20WOFjMvGnCTg==",
      "dev": true,
      "requires": {
        "fromentries": "^1.2.0"
      }
    },
    "progress": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/progress/-/progress-2.0.3.tgz",
      "integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==",
      "dev": true
    },
    "proxy-addr": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
      "integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
      "dev": true,
      "peer": true,
      "requires": {
        "forwarded": "~0.1.2",
        "ipaddr.js": "1.9.1"
      }
    },
    "psl": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
      "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==",
      "dev": true
    },
    "pump": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
      "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
      "dev": true,
      "requires": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
      "dev": true
    },
    "qs": {
      "version": "6.7.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
      "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ==",
      "dev": true,
      "peer": true
    },
    "query-string": {
      "version": "5.1.1",
      "resolved": "http://registry.npmjs.org/query-string/-/query-string-5.1.1.tgz",
      "integrity": "sha512-gjWOsm2SoGlgLEdAGt7a6slVOk9mGiXmPFMqrEhLQ68rhQuBnpfs3+EmlvqKyxnCo9/PPlF+9MtY02S1aFg+Jw==",
      "dev": true,
      "requires": {
        "decode-uri-component": "^0.2.0",
        "object-assign": "^4.1.0",
        "strict-uri-encode": "^1.0.0"
      }
    },
    "queue": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/queue/-/queue-6.0.2.tgz",
      "integrity": "sha512-iHZWu+q3IdFZFX36ro/lKBkSvfkztY5Y7HMiPlOUjhupPcG2JMfst2KKEpu5XndviX/3UhFbRngUPNKtgvtZiA==",
      "dev": true,
      "requires": {
        "inherits": "~2.0.3"
      }
    },
    "queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true
    },
    "quick-format-unescaped": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/quick-format-unescaped/-/quick-format-unescaped-4.0.3.tgz",
      "integrity": "sha512-MaL/oqh02mhEo5m5J2rwsVL23Iw2PEaGVHgT2vFt8AAsr0lfvQA5dpXo9TPu0rz7tSBdUPgkbam0j/fj5ZM8yg==",
      "dev": true
    },
    "randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
      "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
      "dev": true,
      "requires": {
        "safe-buffer": "^5.1.0"
      }
    },
    "range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "dev": true,
      "peer": true
    },
    "raw-body": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
      "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
      "dev": true,
      "peer": true,
      "requires": {
        "bytes": "3.1.0",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      }
    },
    "readable-stream": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
      "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
      "dev": true,
      "requires": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "readdirp": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",
      "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
      "dev": true,
      "optional": true,
      "requires": {
        "graceful-fs": "^4.1.11",
        "micromatch": "^3.1.10",
        "readable-stream": "^2.0.2"
      }
    },
    "rechoir": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.7.0.tgz",
      "integrity": "sha512-ADsDEH2bvbjltXEP+hTIAmeFekTFK0V2BTxMkok6qILyAJEXV0AFfoWcAq4yfll5VdIMd/RVXq0lR+wQi5ZU3Q==",
      "dev": true,
      "requires": {
        "resolve": "^1.9.0"
      }
    },
    "regenerate": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
      "integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==",
      "dev": true
    },
    "regenerate-unicode-properties": {
      "version": "8.2.0",
      "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-8.2.0.tgz",
      "integrity": "sha512-F9DjY1vKLo/tPePDycuH3dn9H1OTPIkVD9Kz4LODu+F2C75mgjAJ7x/gwy6ZcSNRAAkhNlJSOHRe8k3p+K9WhA==",
      "dev": true,
      "requires": {
        "regenerate": "^1.4.0"
      }
    },
    "regenerator-runtime": {
      "version": "0.13.7",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.7.tgz",
      "integrity": "sha512-a54FxoJDIr27pgf7IgeQGxmqUNYrcV338lf/6gH456HZ/PhX+5BcwHXG9ajESmwe6WRO0tAzRUrRmNONWgkrew==",
      "dev": true
    },
    "regenerator-transform": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.14.5.tgz",
      "integrity": "sha512-eOf6vka5IO151Jfsw2NO9WpGX58W6wWmefK3I1zEGr0lOD0u8rwPaNqQL1aRxUaxLeKO3ArNh3VYg1KbaD+FFw==",
      "dev": true,
      "requires": {
        "@babel/runtime": "^7.8.4"
      }
    },
    "regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "dev": true,
      "optional": true,
      "requires": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "regexp.prototype.flags": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.3.0.tgz",
      "integrity": "sha512-2+Q0C5g951OlYlJz6yu5/M33IcsESLlLfsyIaLJaG4FA2r4yP8MvVMJUUP/fVBkSpbbbZlS5gynbEWLipiiXiQ==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.0-next.1"
      }
    },
    "regexpp": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/regexpp/-/regexpp-3.1.0.tgz",
      "integrity": "sha512-ZOIzd8yVsQQA7j8GCSlPGXwg5PfmA1mrq0JP4nGhh54LaKN3xdai/vHUDu74pKwV8OxseMS65u2NImosQcSD0Q==",
      "dev": true
    },
    "regexpu-core": {
      "version": "4.7.1",
      "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-4.7.1.tgz",
      "integrity": "sha512-ywH2VUraA44DZQuRKzARmw6S66mr48pQVva4LBeRhcOltJ6hExvWly5ZjFLYo67xbIxb6W1q4bAGtgfEl20zfQ==",
      "dev": true,
      "requires": {
        "regenerate": "^1.4.0",
        "regenerate-unicode-properties": "^8.2.0",
        "regjsgen": "^0.5.1",
        "regjsparser": "^0.6.4",
        "unicode-match-property-ecmascript": "^1.0.4",
        "unicode-match-property-value-ecmascript": "^1.2.0"
      }
    },
    "regjsgen": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.5.2.tgz",
      "integrity": "sha512-OFFT3MfrH90xIW8OOSyUrk6QHD5E9JOTeGodiJeBS3J6IwlgzJMNE/1bZklWz5oTg+9dCMyEetclvCVXOPoN3A==",
      "dev": true
    },
    "regjsparser": {
      "version": "0.6.9",
      "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.6.9.tgz",
      "integrity": "sha512-ZqbNRz1SNjLAiYuwY0zoXW8Ne675IX5q+YHioAGbCw4X96Mjl2+dcX9B2ciaeyYjViDAfvIjFpQjJgLttTEERQ==",
      "dev": true,
      "requires": {
        "jsesc": "~0.5.0"
      },
      "dependencies": {
        "jsesc": {
          "version": "0.5.0",
          "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
          "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=",
          "dev": true
        }
      }
    },
    "relaxed-json": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/relaxed-json/-/relaxed-json-1.0.3.tgz",
      "integrity": "sha512-b7wGPo7o2KE/g7SqkJDDbav6zmrEeP4TK2VpITU72J/M949TLe/23y/ZHJo+pskcGM52xIfFoT9hydwmgr1AEg==",
      "dev": true,
      "requires": {
        "chalk": "^2.4.2",
        "commander": "^2.6.0"
      }
    },
    "release-zalgo": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/release-zalgo/-/release-zalgo-1.0.0.tgz",
      "integrity": "sha1-CXALflB0Mpc5Mw5TXFqQ+2eFFzA=",
      "dev": true,
      "requires": {
        "es6-error": "^4.0.1"
      }
    },
    "remove-trailing-separator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",
      "dev": true,
      "optional": true
    },
    "repeat-element": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.3.tgz",
      "integrity": "sha512-ahGq0ZnV5m5XtZLMb+vP76kcAM5nkLqk0lpqAuojSKGgQtn4eRi4ZZGm2olo2zKFH+sMsWaqOCW1dqAnOru72g==",
      "dev": true,
      "optional": true
    },
    "repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
      "dev": true,
      "optional": true
    },
    "request": {
      "version": "2.88.2",
      "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
      "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
      "dev": true,
      "requires": {
        "aws-sign2": "~0.7.0",
        "aws4": "^1.8.0",
        "caseless": "~0.12.0",
        "combined-stream": "~1.0.6",
        "extend": "~3.0.2",
        "forever-agent": "~0.6.1",
        "form-data": "~2.3.2",
        "har-validator": "~5.1.3",
        "http-signature": "~1.2.0",
        "is-typedarray": "~1.0.0",
        "isstream": "~0.1.2",
        "json-stringify-safe": "~5.0.1",
        "mime-types": "~2.1.19",
        "oauth-sign": "~0.9.0",
        "performance-now": "^2.1.0",
        "qs": "~6.5.2",
        "safe-buffer": "^5.1.2",
        "tough-cookie": "~2.5.0",
        "tunnel-agent": "^0.6.0",
        "uuid": "^3.3.2"
      },
      "dependencies": {
        "qs": {
          "version": "6.5.2",
          "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
          "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
          "dev": true
        }
      }
    },
    "require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
      "dev": true
    },
    "require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "dev": true
    },
    "require-main-filename": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
      "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
      "dev": true
    },
    "resolve": {
      "version": "1.20.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
      "integrity": "sha512-wENBPt4ySzg4ybFQW2TT1zMQucPK95HSh/nq2CFTZVOGut2+pQvSsgtda4d26YrYcr067wjbmzOG8byDPBX63A==",
      "dev": true,
      "requires": {
        "is-core-module": "^2.2.0",
        "path-parse": "^1.0.6"
      }
    },
    "resolve-cwd": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
      "integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
      "dev": true,
      "requires": {
        "resolve-from": "^5.0.0"
      },
      "dependencies": {
        "resolve-from": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
          "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
          "dev": true
        }
      }
    },
    "resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true
    },
    "resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
      "dev": true,
      "optional": true
    },
    "responselike": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
      "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
      "dev": true,
      "requires": {
        "lowercase-keys": "^1.0.0"
      }
    },
    "ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
      "dev": true,
      "optional": true
    },
    "reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true
    },
    "rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "dev": true,
      "requires": {
        "glob": "^7.1.3"
      }
    },
    "run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "requires": {
        "queue-microtask": "^1.2.2"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "dev": true
    },
    "safe-compare": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/safe-compare/-/safe-compare-1.1.4.tgz",
      "integrity": "sha512-b9wZ986HHCo/HbKrRpBJb2kqXMK9CEWIE1egeEvZsYn69ay3kdfl9nG3RyOcR+jInTDf7a86WQ1d4VJX7goSSQ==",
      "dev": true,
      "peer": true,
      "requires": {
        "buffer-alloc": "^1.2.0"
      }
    },
    "safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "dev": true,
      "optional": true,
      "requires": {
        "ret": "~0.1.10"
      }
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "dev": true
    },
    "schema-utils": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
      "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
      "dev": true,
      "requires": {
        "@types/json-schema": "^7.0.6",
        "ajv": "^6.12.5",
        "ajv-keywords": "^3.5.2"
      }
    },
    "seek-bzip": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/seek-bzip/-/seek-bzip-1.0.5.tgz",
      "integrity": "sha1-z+kXyz0nS8/6x5J1ivUxc+sfq9w=",
      "dev": true,
      "requires": {
        "commander": "~2.8.1"
      },
      "dependencies": {
        "commander": {
          "version": "2.8.1",
          "resolved": "https://registry.npmjs.org/commander/-/commander-2.8.1.tgz",
          "integrity": "sha1-Br42f+v9oMMwqh4qBy09yXYkJdQ=",
          "dev": true,
          "requires": {
            "graceful-readlink": ">= 1.0.0"
          }
        }
      }
    },
    "semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "dev": true
    },
    "send": {
      "version": "0.17.1",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
      "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
      "dev": true,
      "peer": true,
      "requires": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "~1.7.2",
        "mime": "1.6.0",
        "ms": "2.1.1",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "peer": true,
          "requires": {
            "ms": "2.0.0"
          },
          "dependencies": {
            "ms": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
              "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
              "dev": true,
              "peer": true
            }
          }
        },
        "ms": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
          "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
          "dev": true,
          "peer": true
        }
      }
    },
    "serialize-javascript": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-5.0.1.tgz",
      "integrity": "sha512-SaaNal9imEO737H2c05Og0/8LUXG7EnsZyMa8MzkmuHoELfT6txuj0cMqRj6zfPKnmQ1yasR4PCJc8x+M4JSPA==",
      "dev": true,
      "requires": {
        "randombytes": "^2.1.0"
      }
    },
    "serve-static": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
      "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
      "dev": true,
      "peer": true,
      "requires": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.1"
      }
    },
    "set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
      "dev": true
    },
    "set-value": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "dev": true,
      "optional": true,
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "setprototypeof": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
      "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw==",
      "dev": true,
      "peer": true
    },
    "sha.js": {
      "version": "2.4.11",
      "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
      "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "shallow-clone": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
      "integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
      "dev": true,
      "requires": {
        "kind-of": "^6.0.2"
      }
    },
    "shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "requires": {
        "shebang-regex": "^3.0.0"
      }
    },
    "shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true
    },
    "signal-exit": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
      "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA==",
      "dev": true
    },
    "slash": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
      "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
      "dev": true
    },
    "snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "dev": true,
      "optional": true,
      "requires": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "optional": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "dev": true,
      "optional": true,
      "requires": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "optional": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "optional": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "optional": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "dev": true,
      "optional": true,
      "requires": {
        "kind-of": "^3.2.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "sonic-boom": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/sonic-boom/-/sonic-boom-1.4.1.tgz",
      "integrity": "sha512-LRHh/A8tpW7ru89lrlkU4AszXt1dbwSjVWguGrmlxE7tawVmDBlI1PILMkXAxJTwqhgsEeTHzj36D5CmHgQmNg==",
      "dev": true,
      "requires": {
        "atomic-sleep": "^1.0.0",
        "flatstr": "^1.0.12"
      }
    },
    "sort-keys": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-1.1.2.tgz",
      "integrity": "sha1-RBttTTRnmPG05J6JIK37oOVD+a0=",
      "dev": true,
      "requires": {
        "is-plain-obj": "^1.0.0"
      }
    },
    "sort-keys-length": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/sort-keys-length/-/sort-keys-length-1.0.1.tgz",
      "integrity": "sha1-nLb09OnkgVWmqgZx7dM2/xR5oYg=",
      "dev": true,
      "requires": {
        "sort-keys": "^1.0.0"
      }
    },
    "source-list-map": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/source-list-map/-/source-list-map-2.0.1.tgz",
      "integrity": "sha512-qnQ7gVMxGNxsiL4lEuJwe/To8UnK7fAnmbGEEH8RpLouuKbeEm0lhbQVFIrNSuB+G7tVrAlVsZgETT5nljf+Iw==",
      "dev": true
    },
    "source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true
    },
    "source-map-resolve": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
      "dev": true,
      "optional": true,
      "requires": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "source-map-support": {
      "version": "0.5.19",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
      "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
      "dev": true,
      "requires": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "source-map-url": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.0.tgz",
      "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM=",
      "dev": true,
      "optional": true
    },
    "spawn-wrap": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/spawn-wrap/-/spawn-wrap-2.0.0.tgz",
      "integrity": "sha512-EeajNjfN9zMnULLwhZZQU3GWBoFNkbngTUPfaawT4RkMiviTxcX0qfhVbGey39mfctfDHkWtuecgQ8NJcyQWHg==",
      "dev": true,
      "requires": {
        "foreground-child": "^2.0.0",
        "is-windows": "^1.0.2",
        "make-dir": "^3.0.0",
        "rimraf": "^3.0.0",
        "signal-exit": "^3.0.2",
        "which": "^2.0.1"
      },
      "dependencies": {
        "make-dir": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
          "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
          "dev": true,
          "requires": {
            "semver": "^6.0.0"
          }
        }
      }
    },
    "split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "dev": true,
      "optional": true,
      "requires": {
        "extend-shallow": "^3.0.0"
      }
    },
    "sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
      "dev": true
    },
    "sshpk": {
      "version": "1.16.1",
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
      "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
      "dev": true,
      "requires": {
        "asn1": "~0.2.3",
        "assert-plus": "^1.0.0",
        "bcrypt-pbkdf": "^1.0.0",
        "dashdash": "^1.12.0",
        "ecc-jsbn": "~0.1.1",
        "getpass": "^0.1.1",
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.0.2",
        "tweetnacl": "~0.14.0"
      }
    },
    "static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "dev": true,
      "optional": true,
      "requires": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",
      "dev": true,
      "peer": true
    },
    "strict-uri-encode": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-1.1.0.tgz",
      "integrity": "sha1-J5siXfHVgrH1TmWt3UNS4Y+qBxM=",
      "dev": true
    },
    "string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dev": true,
      "requires": {
        "safe-buffer": "~5.1.0"
      }
    },
    "string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "dev": true,
      "requires": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      }
    },
    "string.prototype.trimend": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.3.tgz",
      "integrity": "sha512-ayH0pB+uf0U28CtjlLvL7NaohvR1amUvVZk+y3DYb0Ey2PUV5zPkkKy9+U1ndVEIXO8hNg18eIv9Jntbii+dKw==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3"
      }
    },
    "string.prototype.trimstart": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.3.tgz",
      "integrity": "sha512-oBIBUy5lea5tt0ovtOFiEQaBkoBBkyJhZXzJYrSmDo5IUUqbOPvVezuRs/agBIdZ2p2Eo1FD6bD9USyBLfl3xg==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3"
      }
    },
    "strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dev": true,
      "requires": {
        "ansi-regex": "^3.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        }
      }
    },
    "strip-bom": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
      "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==",
      "dev": true
    },
    "strip-bom-buf": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom-buf/-/strip-bom-buf-2.0.0.tgz",
      "integrity": "sha512-gLFNHucd6gzb8jMsl5QmZ3QgnUJmp7qn4uUSHNwEXumAp7YizoGYw19ZUVfuq4aBOQUtyn2k8X/CwzWB73W2lQ==",
      "dev": true,
      "requires": {
        "is-utf8": "^0.2.1"
      }
    },
    "strip-bom-stream": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom-stream/-/strip-bom-stream-4.0.0.tgz",
      "integrity": "sha512-0ApK3iAkHv6WbgLICw/J4nhwHeDZsBxIIsOD+gHgZICL6SeJ0S9f/WZqemka9cjkTyMN5geId6e8U5WGFAn3cQ==",
      "dev": true,
      "requires": {
        "first-chunk-stream": "^3.0.0",
        "strip-bom-buf": "^2.0.0"
      }
    },
    "strip-dirs": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/strip-dirs/-/strip-dirs-2.1.0.tgz",
      "integrity": "sha512-JOCxOeKLm2CAS73y/U4ZeZPTkE+gNVCzKt7Eox84Iej1LT/2pTWYpZKJuxwQpvX1LiZb1xokNR7RLfuBAa7T3g==",
      "dev": true,
      "requires": {
        "is-natural-number": "^4.0.1"
      }
    },
    "strip-final-newline": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
      "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
      "dev": true
    },
    "strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true
    },
    "strip-outer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/strip-outer/-/strip-outer-1.0.1.tgz",
      "integrity": "sha512-k55yxKHwaXnpYGsOzg4Vl8+tDrWylxDEpknGjhTiZB8dFRU5rTo9CAzeycivxV3s+zlTKwrs6WxMxR95n26kwg==",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^1.0.2"
      }
    },
    "supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "requires": {
        "has-flag": "^3.0.0"
      }
    },
    "tapable": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.0.tgz",
      "integrity": "sha512-FBk4IesMV1rBxX2tfiK8RAmogtWn53puLOQlvO8XuwlgxcYbP4mVPS9Ph4aeamSyyVjOl24aYWAuc8U5kCVwMw==",
      "dev": true
    },
    "tar-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/tar-stream/-/tar-stream-1.6.2.tgz",
      "integrity": "sha512-rzS0heiNf8Xn7/mpdSVVSMAWAoy9bfb1WOTYC78Z0UQKeKa/CWS8FOq0lKGNa8DWKAn9gxjCvMLYc5PGXYlK2A==",
      "dev": true,
      "requires": {
        "bl": "^1.0.0",
        "buffer-alloc": "^1.2.0",
        "end-of-stream": "^1.0.0",
        "fs-constants": "^1.0.0",
        "readable-stream": "^2.3.0",
        "to-buffer": "^1.1.1",
        "xtend": "^4.0.0"
      }
    },
    "terser": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/terser/-/terser-5.7.0.tgz",
      "integrity": "sha512-HP5/9hp2UaZt5fYkuhNBR8YyRcT8juw8+uFbAme53iN9hblvKnLUTKkmwJG6ocWpIKf8UK4DoeWG4ty0J6S6/g==",
      "dev": true,
      "requires": {
        "commander": "^2.20.0",
        "source-map": "~0.7.2",
        "source-map-support": "~0.5.19"
      },
      "dependencies": {
        "source-map": {
          "version": "0.7.3",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz",
          "integrity": "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ==",
          "dev": true
        }
      }
    },
    "terser-webpack-plugin": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-5.1.2.tgz",
      "integrity": "sha512-6QhDaAiVHIQr5Ab3XUWZyDmrIPCHMiqJVljMF91YKyqwKkL5QHnYMkrMBy96v9Z7ev1hGhSEw1HQZc2p/s5Z8Q==",
      "dev": true,
      "requires": {
        "jest-worker": "^26.6.2",
        "p-limit": "^3.1.0",
        "schema-utils": "^3.0.0",
        "serialize-javascript": "^5.0.1",
        "source-map": "^0.6.1",
        "terser": "^5.7.0"
      },
      "dependencies": {
        "p-limit": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
          "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
          "dev": true,
          "requires": {
            "yocto-queue": "^0.1.0"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "test-exclude": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
      "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
      "dev": true,
      "requires": {
        "@istanbuljs/schema": "^0.1.2",
        "glob": "^7.1.4",
        "minimatch": "^3.0.4"
      }
    },
    "text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha1-f17oI66AUgfACvLfSoTsP8+lcLQ=",
      "dev": true
    },
    "through": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
      "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU=",
      "dev": true
    },
    "timed-out": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/timed-out/-/timed-out-4.0.1.tgz",
      "integrity": "sha1-8y6srFoXW+ol1/q1Zas+2HQe9W8=",
      "dev": true
    },
    "to-buffer": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/to-buffer/-/to-buffer-1.1.1.tgz",
      "integrity": "sha512-lx9B5iv7msuFYE3dytT+KE5tap+rNYw+K4jVkb9R/asAb+pbBSM17jtunHplhBe6RRJdZx3Pn2Jph24O32mOVg==",
      "dev": true
    },
    "to-fast-properties": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
      "dev": true
    },
    "to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "dev": true,
      "optional": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "optional": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "dev": true,
      "optional": true,
      "requires": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "dev": true,
      "optional": true,
      "requires": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      }
    },
    "toidentifier": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
      "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",
      "dev": true,
      "peer": true
    },
    "tosource": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/tosource/-/tosource-1.0.0.tgz",
      "integrity": "sha1-QtiN0RZhi88A1hBt1URvNCeQL/E=",
      "dev": true
    },
    "tough-cookie": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
      "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
      "dev": true,
      "requires": {
        "psl": "^1.1.28",
        "punycode": "^2.1.1"
      }
    },
    "trim-repeated": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/trim-repeated/-/trim-repeated-1.0.0.tgz",
      "integrity": "sha1-42RqLqTokTEr9+rObPsFOAvAHCE=",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^1.0.2"
      }
    },
    "tslib": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.9.3.tgz",
      "integrity": "sha512-4krF8scpejhaOgqzBEcGM7yDIEfi0/8+8zDRZhNZZ2kjmHJ4hv3zCbQWxoJGz1iw5U0Jl0nma13xzHXcncMavQ==",
      "dev": true
    },
    "tsutils": {
      "version": "3.19.1",
      "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-3.19.1.tgz",
      "integrity": "sha512-GEdoBf5XI324lu7ycad7s6laADfnAqCw6wLGI+knxvw9vsIYBaJfYdmeCEG3FMMUiSm3OGgNb+m6utsWf5h9Vw==",
      "dev": true,
      "requires": {
        "tslib": "^1.8.1"
      }
    },
    "tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
      "dev": true,
      "requires": {
        "safe-buffer": "^5.0.1"
      }
    },
    "tweetnacl": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
      "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
      "dev": true
    },
    "type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "requires": {
        "prelude-ls": "^1.2.1"
      }
    },
    "type-detect": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
      "integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==",
      "dev": true
    },
    "type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
      "dev": true
    },
    "type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "dev": true,
      "peer": true,
      "requires": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      }
    },
    "typedarray-to-buffer": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
      "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
      "dev": true,
      "requires": {
        "is-typedarray": "^1.0.0"
      }
    },
    "typescript": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.2.4.tgz",
      "integrity": "sha512-V+evlYHZnQkaz8TRBuxTA92yZBPotr5H+WhQ7bD3hZUndx5tGOa1fuCgeSjxAzM1RiN5IzvadIXTVefuuwZCRg==",
      "dev": true
    },
    "unbzip2-stream": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/unbzip2-stream/-/unbzip2-stream-1.3.0.tgz",
      "integrity": "sha512-kE2WkurNnPUMcryNioS68DDbhoPB8Qxsd8btHSj+sd5Pjh2GsjmeHLzMSqV9HHziAo8FzVxVCJl9ZYhk7yY1pA==",
      "dev": true,
      "requires": {
        "buffer": "^3.0.1",
        "through": "^2.3.6"
      }
    },
    "unicode-canonical-property-names-ecmascript": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-1.0.4.tgz",
      "integrity": "sha512-jDrNnXWHd4oHiTZnx/ZG7gtUTVp+gCcTTKr8L0HjlwphROEW3+Him+IpvC+xcJEFegapiMZyZe02CyuOnRmbnQ==",
      "dev": true
    },
    "unicode-match-property-ecmascript": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-1.0.4.tgz",
      "integrity": "sha512-L4Qoh15vTfntsn4P1zqnHulG0LdXgjSO035fEpdtp6YxXhMT51Q6vgM5lYdG/5X3MjS+k/Y9Xw4SFCY9IkR0rg==",
      "dev": true,
      "requires": {
        "unicode-canonical-property-names-ecmascript": "^1.0.4",
        "unicode-property-aliases-ecmascript": "^1.0.4"
      }
    },
    "unicode-match-property-value-ecmascript": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-1.2.0.tgz",
      "integrity": "sha512-wjuQHGQVofmSJv1uVISKLE5zO2rNGzM/KCYZch/QQvez7C1hUhBIuZ701fYXExuufJFMPhv2SyL8CyoIfMLbIQ==",
      "dev": true
    },
    "unicode-property-aliases-ecmascript": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-1.1.0.tgz",
      "integrity": "sha512-PqSoPh/pWetQ2phoj5RLiaqIk4kCNwoV3CI+LfGmWLKI3rE3kl1h59XpX2BjgDrmbxD9ARtQobPGU1SguCYuQg==",
      "dev": true
    },
    "union-value": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "dev": true,
      "optional": true,
      "requires": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      }
    },
    "universalify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.0.tgz",
      "integrity": "sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ==",
      "dev": true
    },
    "unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=",
      "dev": true,
      "peer": true
    },
    "unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "dev": true,
      "optional": true,
      "requires": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "dependencies": {
        "has-value": {
          "version": "0.3.1",
          "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
          "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
          "dev": true,
          "optional": true,
          "requires": {
            "get-value": "^2.0.3",
            "has-values": "^0.1.4",
            "isobject": "^2.0.0"
          },
          "dependencies": {
            "isobject": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
              "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
              "dev": true,
              "optional": true,
              "requires": {
                "isarray": "1.0.0"
              }
            }
          }
        },
        "has-values": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
          "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
          "dev": true,
          "optional": true
        }
      }
    },
    "upath": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
      "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg==",
      "dev": true,
      "optional": true
    },
    "uri-js": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
      "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
      "dev": true,
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
      "dev": true,
      "optional": true
    },
    "url-parse-lax": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
      "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
      "dev": true,
      "requires": {
        "prepend-http": "^2.0.0"
      }
    },
    "url-to-options": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/url-to-options/-/url-to-options-1.0.1.tgz",
      "integrity": "sha1-FQWgOiiaSMvXpDTvuu7FBV9WM6k=",
      "dev": true
    },
    "use": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
      "dev": true,
      "optional": true
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
      "dev": true
    },
    "utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=",
      "dev": true,
      "peer": true
    },
    "uuid": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
      "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
      "dev": true
    },
    "v8-compile-cache": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.2.0.tgz",
      "integrity": "sha512-gTpR5XQNKFwOd4clxfnhaqvfqMpqEwr4tOtCyz4MtYZX2JYhfr1JvBFKdS+7K/9rfpZR3VLX+YWBbKoxCgS43Q==",
      "dev": true
    },
    "vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw=",
      "dev": true,
      "peer": true
    },
    "verror": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
      "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0",
        "core-util-is": "1.0.2",
        "extsprintf": "^1.2.0"
      }
    },
    "watchpack": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.1.0.tgz",
      "integrity": "sha512-UjgD1mqjkG99+3lgG36at4wPnUXNvis2v1utwTgQ43C22c4LD71LsYMExdWXh4HZ+RmW+B0t1Vrg2GpXAkTOQw==",
      "dev": true,
      "requires": {
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.1.2"
      }
    },
    "wcwidth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
      "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
      "dev": true,
      "requires": {
        "defaults": "^1.0.3"
      }
    },
    "webpack": {
      "version": "5.37.1",
      "resolved": "https://registry.npmjs.org/webpack/-/webpack-5.37.1.tgz",
      "integrity": "sha512-btZjGy/hSjCAAVHw+cKG+L0M+rstlyxbO2C+BOTaQ5/XAnxkDrP5sVbqWhXgo4pL3X2dcOib6rqCP20Zr9PLow==",
      "dev": true,
      "requires": {
        "@types/eslint-scope": "^3.7.0",
        "@types/estree": "^0.0.47",
        "@webassemblyjs/ast": "1.11.0",
        "@webassemblyjs/wasm-edit": "1.11.0",
        "@webassemblyjs/wasm-parser": "1.11.0",
        "acorn": "^8.2.1",
        "browserslist": "^4.14.5",
        "chrome-trace-event": "^1.0.2",
        "enhanced-resolve": "^5.8.0",
        "es-module-lexer": "^0.4.0",
        "eslint-scope": "^5.1.1",
        "events": "^3.2.0",
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.2.4",
        "json-parse-better-errors": "^1.0.2",
        "loader-runner": "^4.2.0",
        "mime-types": "^2.1.27",
        "neo-async": "^2.6.2",
        "schema-utils": "^3.0.0",
        "tapable": "^2.1.1",
        "terser-webpack-plugin": "^5.1.1",
        "watchpack": "^2.0.0",
        "webpack-sources": "^2.1.1"
      }
    },
    "webpack-cli": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/webpack-cli/-/webpack-cli-4.7.0.tgz",
      "integrity": "sha512-7bKr9182/sGfjFm+xdZSwgQuFjgEcy0iCTIBxRUeteJ2Kr8/Wz0qNJX+jw60LU36jApt4nmMkep6+W5AKhok6g==",
      "dev": true,
      "requires": {
        "@discoveryjs/json-ext": "^0.5.0",
        "@webpack-cli/configtest": "^1.0.3",
        "@webpack-cli/info": "^1.2.4",
        "@webpack-cli/serve": "^1.4.0",
        "colorette": "^1.2.1",
        "commander": "^7.0.0",
        "execa": "^5.0.0",
        "fastest-levenshtein": "^1.0.12",
        "import-local": "^3.0.2",
        "interpret": "^2.2.0",
        "rechoir": "^0.7.0",
        "v8-compile-cache": "^2.2.0",
        "webpack-merge": "^5.7.3"
      },
      "dependencies": {
        "commander": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/commander/-/commander-7.2.0.tgz",
          "integrity": "sha512-QrWXB+ZQSVPmIWIhtEO9H+gwHaMGYiF5ChvoJ+K9ZGHG/sVsa6yiesAD1GC/x46sET00Xlwo1u49RVVVzvcSkw==",
          "dev": true
        }
      }
    },
    "webpack-merge": {
      "version": "5.7.3",
      "resolved": "https://registry.npmjs.org/webpack-merge/-/webpack-merge-5.7.3.tgz",
      "integrity": "sha512-6/JUQv0ELQ1igjGDzHkXbVDRxkfA57Zw7PfiupdLFJYrgFqY5ZP8xxbpp2lU3EPwYx89ht5Z/aDkD40hFCm5AA==",
      "dev": true,
      "requires": {
        "clone-deep": "^4.0.1",
        "wildcard": "^2.0.0"
      }
    },
    "webpack-sources": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-2.2.0.tgz",
      "integrity": "sha512-bQsA24JLwcnWGArOKUxYKhX3Mz/nK1Xf6hxullKERyktjNMC4x8koOeaDNTA2fEJ09BdWLbM/iTW0ithREUP0w==",
      "dev": true,
      "requires": {
        "source-list-map": "^2.0.1",
        "source-map": "^0.6.1"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "which-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
      "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
      "dev": true
    },
    "wide-align": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
      "integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
      "dev": true,
      "requires": {
        "string-width": "^1.0.2 || 2"
      }
    },
    "wildcard": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/wildcard/-/wildcard-2.0.0.tgz",
      "integrity": "sha512-JcKqAHLPxcdb9KM49dufGXn2x3ssnfjbcaQdLlfZsL9rH9wgDQjUtDxbo8NE0F6SFvydeu1VhZe7hZuHsB2/pw==",
      "dev": true
    },
    "word-wrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
      "dev": true
    },
    "workerpool": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/workerpool/-/workerpool-6.1.0.tgz",
      "integrity": "sha512-toV7q9rWNYha963Pl/qyeZ6wG+3nnsyvolaNUS8+R5Wtw6qJPTxIlOP1ZSvcGhEJw+l3HMMmtiNo9Gl61G4GVg==",
      "dev": true
    },
    "wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "requires": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
          "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
          "dev": true
        },
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "dev": true,
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "dev": true,
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
          "dev": true
        },
        "is-fullwidth-code-point": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
          "dev": true
        },
        "string-width": {
          "version": "4.2.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
          "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
          "dev": true,
          "requires": {
            "emoji-regex": "^8.0.0",
            "is-fullwidth-code-point": "^3.0.0",
            "strip-ansi": "^6.0.0"
          }
        },
        "strip-ansi": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
          "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
          "dev": true,
          "requires": {
            "ansi-regex": "^5.0.0"
          }
        }
      }
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "dev": true
    },
    "write-file-atomic": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
      "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
      "dev": true,
      "requires": {
        "imurmurhash": "^0.1.4",
        "is-typedarray": "^1.0.0",
        "signal-exit": "^3.0.2",
        "typedarray-to-buffer": "^3.1.5"
      }
    },
    "xtend": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.1.tgz",
      "integrity": "sha1-pcbVMr5lbiPbgg77lDofBJmNY68=",
      "dev": true
    },
    "y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true
    },
    "yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "dev": true
    },
    "yargs": {
      "version": "16.2.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",
      "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",
      "dev": true,
      "requires": {
        "cliui": "^7.0.2",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.0",
        "y18n": "^5.0.5",
        "yargs-parser": "^20.2.2"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
          "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
          "dev": true
        },
        "is-fullwidth-code-point": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
          "dev": true
        },
        "string-width": {
          "version": "4.2.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
          "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
          "dev": true,
          "requires": {
            "emoji-regex": "^8.0.0",
            "is-fullwidth-code-point": "^3.0.0",
            "strip-ansi": "^6.0.0"
          }
        },
        "strip-ansi": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
          "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
          "dev": true,
          "requires": {
            "ansi-regex": "^5.0.0"
          }
        }
      }
    },
    "yargs-parser": {
      "version": "20.2.4",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.4.tgz",
      "integrity": "sha512-WOkpgNhPTlE73h4VFAFsOnomJVaovO8VqLDzy5saChRBFQFBoMYirowyW+Q9HB4HFF4Z7VZTiG3iSzJJA29yRA==",
      "dev": true
    },
    "yargs-unparser": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/yargs-unparser/-/yargs-unparser-2.0.0.tgz",
      "integrity": "sha512-7pRTIA9Qc1caZ0bZ6RYRGbHJthJWuakf+WmHK0rVeLkNrrGhfoabBNdue6kdINI6r4if7ocq9aD/n7xwKOdzOA==",
      "dev": true,
      "requires": {
        "camelcase": "^6.0.0",
        "decamelize": "^4.0.0",
        "flat": "^5.0.2",
        "is-plain-obj": "^2.1.0"
      },
      "dependencies": {
        "camelcase": {
          "version": "6.2.0",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.2.0.tgz",
          "integrity": "sha512-c7wVvbw3f37nuobQNtgsgG9POC9qMbNuMQmTCqZv23b6MIz0fcYpBiOlv9gEN/hdLdnZTDQhg6e9Dq5M1vKvfg==",
          "dev": true
        },
        "decamelize": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-4.0.0.tgz",
          "integrity": "sha512-9iE1PgSik9HeIIw2JO94IidnE3eBoQrFJ3w7sFuzSX4DpmZ3v5sZpUiV5Swcf6mQEF+Y0ru8Neo+p+nyh2J+hQ==",
          "dev": true
        },
        "is-plain-obj": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-2.1.0.tgz",
          "integrity": "sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==",
          "dev": true
        }
      }
    },
    "yauzl": {
      "version": "2.10.0",
      "resolved": "https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz",
      "integrity": "sha1-x+sXyT4RLLEIb6bY5R+wZnt5pfk=",
      "dev": true,
      "requires": {
        "buffer-crc32": "~0.2.3",
        "fd-slicer": "~1.1.0"
      }
    },
    "yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true
    }
  }
}
