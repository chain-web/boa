window.BENCHMARK_DATA = {
  "lastUpdate": 1692599793092,
  "repoUrl": "https://github.com/chain-web/boa",
  "entries": {
    "Boa Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "jedel0124@gmail.com",
            "name": "José Julián Espina",
            "username": "jedel1043"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65bf54d7e047411ba3cdf2f345eae32feb55ca51",
          "message": "Fix WASM playground (#2992)",
          "timestamp": "2023-06-03T03:21:45Z",
          "tree_id": "9f5cdcf111738b171a08815290f057abcbbf202b",
          "url": "https://github.com/chain-web/boa/commit/65bf54d7e047411ba3cdf2f345eae32feb55ca51"
        },
        "date": 1685785523183,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 314982,
            "range": "± 1885785",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 6149,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 21294,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 23240,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 12568,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 13508,
            "range": "± 22878",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 14129,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 14896,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 11363,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 17100,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 13460,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 16235,
            "range": "± 54172",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 19712,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 176693,
            "range": "± 1794",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 11369,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 16767,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 8595,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 14389,
            "range": "± 893627",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 17853,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 17517,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 8659,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 41534,
            "range": "± 32998",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 40112,
            "range": "± 5137",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 3496,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 23933,
            "range": "± 271459",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 823672,
            "range": "± 2555414",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 3420,
            "range": "± 5783",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 3559,
            "range": "± 6609",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 3648,
            "range": "± 6917",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 10449,
            "range": "± 12510",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 10484,
            "range": "± 8013",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 14187,
            "range": "± 7845",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 14168,
            "range": "± 6941",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 5930,
            "range": "± 7139",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 1037062,
            "range": "± 702421",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 487025,
            "range": "± 9875",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 2914,
            "range": "± 8460",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 3387,
            "range": "± 6062",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 2622,
            "range": "± 3519",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 5191,
            "range": "± 4123",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 6530,
            "range": "± 5763",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 8518,
            "range": "± 15182",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 513,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 870272,
            "range": "± 305477",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 806090,
            "range": "± 1997",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jedel0124@gmail.com",
            "name": "José Julián Espina",
            "username": "jedel1043"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65bf54d7e047411ba3cdf2f345eae32feb55ca51",
          "message": "Fix WASM playground (#2992)",
          "timestamp": "2023-06-03T03:21:45Z",
          "tree_id": "9f5cdcf111738b171a08815290f057abcbbf202b",
          "url": "https://github.com/chain-web/boa/commit/65bf54d7e047411ba3cdf2f345eae32feb55ca51"
        },
        "date": 1685785553683,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 312082,
            "range": "± 2822004",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 6031,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 21076,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 22136,
            "range": "± 85875",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 12231,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 13369,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 14487,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 14822,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 11228,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 17049,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 13095,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 16180,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 19409,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 176910,
            "range": "± 3538",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 11311,
            "range": "± 4934",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 16776,
            "range": "± 1427",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 8523,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 14124,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 17838,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 17462,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 8739,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 45686,
            "range": "± 7642",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 38501,
            "range": "± 4188",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 2802,
            "range": "± 887",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 23966,
            "range": "± 194015",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 872178,
            "range": "± 2501588",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 3469,
            "range": "± 5651",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 3604,
            "range": "± 6291",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 3728,
            "range": "± 6875",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 10495,
            "range": "± 9995",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 10255,
            "range": "± 6677",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 14208,
            "range": "± 6898",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 14200,
            "range": "± 6461",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 5963,
            "range": "± 6342",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 1037081,
            "range": "± 581755",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 487849,
            "range": "± 9585",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 2917,
            "range": "± 5447",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 3360,
            "range": "± 4840",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 2636,
            "range": "± 3160",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 5187,
            "range": "± 3447",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 6565,
            "range": "± 4965",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 8595,
            "range": "± 7358",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 514,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 866683,
            "range": "± 214551",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 797784,
            "range": "± 16037",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shaneeverittmurphy@gmail.com",
            "name": "Shane Murphy",
            "username": "ShaneEverittM"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eeeaaeebccca04bfd256ca1fc61f979e39fcb758",
          "message": "Fix prompt on windows (#2986)\n\n* Fix typo\n\n* Refactor prompt highlighting into RLHelper\n\nBy moving the prompt coloring to be done in\nHighlighter::highlight_prompt, we sidestep the issue on Windows where\nthe prompt width is calculated post-coloring AND without ignoring escape\ncodes.\n\nBy including it in the implementation of Highlighter, Editor::readline\nnow operates on a plain-text prompt, so width calculation is correct.\n\nThis commit also re-arranges the trait impl order to match the\ndefinition.",
          "timestamp": "2023-06-05T10:23:40Z",
          "tree_id": "907167a537113cb4d1f21c8865427962be0a6ee9",
          "url": "https://github.com/chain-web/boa/commit/eeeaaeebccca04bfd256ca1fc61f979e39fcb758"
        },
        "date": 1685968569224,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 327187,
            "range": "± 3172353",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 5920,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 20096,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 20271,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 11697,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 12717,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 13812,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 13164,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 10912,
            "range": "± 19126",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 15390,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 12870,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 15249,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 18957,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 168495,
            "range": "± 3361",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 11215,
            "range": "± 1423",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 15885,
            "range": "± 952305",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 8005,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 13915,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 17385,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 17032,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 8783,
            "range": "± 114762",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 40058,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 35342,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 2684,
            "range": "± 9219",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 23894,
            "range": "± 38414",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 806722,
            "range": "± 1612343",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 3271,
            "range": "± 5668",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 3389,
            "range": "± 5724",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 3492,
            "range": "± 6069",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 8808,
            "range": "± 8103",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 8834,
            "range": "± 7403",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 12468,
            "range": "± 10323",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 12659,
            "range": "± 10001",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 5693,
            "range": "± 5460",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 933718,
            "range": "± 1596786",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 449204,
            "range": "± 276977",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 2977,
            "range": "± 5763",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 3460,
            "range": "± 4476",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 2635,
            "range": "± 5144",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 4937,
            "range": "± 4998",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 6262,
            "range": "± 7655",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 8179,
            "range": "± 6024",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 518,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 797656,
            "range": "± 381137",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 742014,
            "range": "± 3458",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "32105367+raskad@users.noreply.github.com",
            "name": "raskad",
            "username": "raskad"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22b014d5d5ab9fba5dc467734227558e75c66d20",
          "message": "Add early errors for `LexicalDeclaration` (#3207)",
          "timestamp": "2023-08-10T05:48:36Z",
          "tree_id": "babe1523254dcaca69dccd6a906b6cd7f8717e27",
          "url": "https://github.com/chain-web/boa/commit/22b014d5d5ab9fba5dc467734227558e75c66d20"
        },
        "date": 1691725271792,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 316259,
            "range": "± 1664134",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 5856,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 20923,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 22821,
            "range": "± 45151",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 11987,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 13011,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 14215,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 13500,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 11165,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 15632,
            "range": "± 61379",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 13104,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 16155,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 19584,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 184882,
            "range": "± 3086",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 10995,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 16306,
            "range": "± 2160",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 7594,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 14613,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 18168,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 18000,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 9322,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 46938,
            "range": "± 4666",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 38619,
            "range": "± 4696",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 1222,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 14581,
            "range": "± 48486",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 602865,
            "range": "± 1926101",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 1540,
            "range": "± 8583",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 1647,
            "range": "± 7110",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 1797,
            "range": "± 6951",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 6682,
            "range": "± 12700",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 6711,
            "range": "± 9857",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 12751,
            "range": "± 21089",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 12777,
            "range": "± 13027",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 4441,
            "range": "± 11331",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 667303,
            "range": "± 998176",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 262011,
            "range": "± 200044",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 1463,
            "range": "± 4890",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 1748,
            "range": "± 7992",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 1192,
            "range": "± 5095",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 3126,
            "range": "± 5245",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 3998,
            "range": "± 7158",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 5543,
            "range": "± 9861",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 438,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 540996,
            "range": "± 675082",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 487983,
            "range": "± 270383",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "frisoft@users.noreply.github.com",
            "name": "Andrea Frigido",
            "username": "frisoft"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "023c18f7049156081f2467c5da2d36ab413d1ff4",
          "message": "chore: Update license field following SPDX 2.1 license expression standard (#3209)",
          "timestamp": "2023-08-14T09:36:31Z",
          "tree_id": "ef4da160edd1f9e393f215e185ae9400fd8c4b73",
          "url": "https://github.com/chain-web/boa/commit/023c18f7049156081f2467c5da2d36ab413d1ff4"
        },
        "date": 1692013513624,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 324871,
            "range": "± 1542024",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 6025,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 20847,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 23002,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 12300,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 13129,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 14049,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 13299,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 11219,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 15848,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 13289,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 16274,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 19862,
            "range": "± 67112",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 183413,
            "range": "± 3335",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 11112,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 16434,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 8366,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 14818,
            "range": "± 3187",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 18401,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 19001,
            "range": "± 833",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 9362,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 41875,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 37287,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 1967,
            "range": "± 6698",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 17400,
            "range": "± 159267",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 592711,
            "range": "± 1984035",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 1455,
            "range": "± 18484",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 1590,
            "range": "± 11959",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 1745,
            "range": "± 9004",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 6788,
            "range": "± 19174",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 6767,
            "range": "± 10432",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 12939,
            "range": "± 18366",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 12866,
            "range": "± 23556",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 4466,
            "range": "± 8335",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 652700,
            "range": "± 1436827",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 259716,
            "range": "± 252846",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 1337,
            "range": "± 5213",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 2521,
            "range": "± 6096",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 1080,
            "range": "± 4680",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 3047,
            "range": "± 4459",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 4055,
            "range": "± 14800",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 6802,
            "range": "± 15158",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 458,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 531758,
            "range": "± 941632",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 485234,
            "range": "± 357952",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b204dcb0014fe825a06a2683b01a29b886436c46",
          "message": "Bump clap from 4.3.21 to 4.3.22 (#3225)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.3.21 to 4.3.22.\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/v4.3.21...v4.3.22)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-18T20:40:02Z",
          "tree_id": "89546e29a64474012b556eaf251ec053c6f8e442",
          "url": "https://github.com/chain-web/boa/commit/b204dcb0014fe825a06a2683b01a29b886436c46"
        },
        "date": 1692599788172,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 300511,
            "range": "± 1303167",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 6272,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 22191,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 24164,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 12842,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 13772,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 14679,
            "range": "± 128136",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 14781,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 11752,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 17359,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 13972,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 17102,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 20862,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 199230,
            "range": "± 13129",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 11800,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 17198,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 8611,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 15072,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 18708,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 18776,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 9437,
            "range": "± 385813",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 43290,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 38410,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 1283,
            "range": "± 7951",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 14157,
            "range": "± 34648",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 600844,
            "range": "± 1175524",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 1615,
            "range": "± 6693",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 1825,
            "range": "± 35275",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 1970,
            "range": "± 5245",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 9354,
            "range": "± 6076",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 8233,
            "range": "± 6861",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 13556,
            "range": "± 11148",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 13842,
            "range": "± 11402",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 4563,
            "range": "± 8828",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 695992,
            "range": "± 650672",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 274974,
            "range": "± 434515",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 1476,
            "range": "± 4199",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 1691,
            "range": "± 5363",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 1156,
            "range": "± 4484",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 3296,
            "range": "± 7304",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 4158,
            "range": "± 5365",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 5948,
            "range": "± 21329",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 487,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 537140,
            "range": "± 11076",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 512938,
            "range": "± 6047",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}