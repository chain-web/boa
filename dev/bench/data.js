window.BENCHMARK_DATA = {
  "lastUpdate": 1685785525003,
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
      }
    ]
  }
}