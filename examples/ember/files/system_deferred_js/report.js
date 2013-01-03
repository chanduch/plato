__report = {
  "info": {
    "file": "/tmp/plato/ember/packages/ember-runtime/lib/system/deferred.js",
    "fileShort": "system/deferred.js",
    "fileSafe": "system_deferred_js",
    "link": "files/system_deferred_js"
  },
  "complexity": {
    "aggregate": {
      "line": 1,
      "complexity": {
        "sloc": {
          "physical": 18,
          "logical": 12
        },
        "cyclomatic": 1,
        "halstead": {
          "operators": {
            "distinct": 8,
            "total": 29,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 19,
            "total": 38,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 67,
          "vocabulary": 27,
          "difficulty": 8,
          "volume": 318.57746264495245,
          "effort": 2548.6197011596196,
          "bugs": 0.10619248754831748,
          "time": 141.58998339775664
        }
      }
    },
    "functions": [
      {
        "name": "promise",
        "line": 11,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 3
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 20,
            "vocabulary": 13,
            "difficulty": 3.75,
            "volume": 74.00879436282185,
            "effort": 277.5329788605819,
            "bugs": 0.024669598120940616,
            "time": 15.418498825587884
          }
        }
      }
    ],
    "maintainability": 133.9617669140546,
    "module": "system/deferred.js"
  },
  "jshint": {
    "messages": [
      {
        "severity": "error",
        "line": 12,
        "column": 5,
        "message": "Missing \"use strict\" statement.",
        "source": "Missing \"use strict\" statement."
      },
      {
        "severity": "error",
        "line": 4,
        "column": 21,
        "message": "'Ember' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 5,
        "column": 19,
        "message": "'Ember' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 6,
        "column": 11,
        "message": "'Ember' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 8,
        "column": 16,
        "message": "'Ember' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 18,
        "column": 1,
        "message": "'Ember' is not defined.",
        "source": "'{a}' is not defined."
      },
      {
        "severity": "error",
        "line": 5,
        "column": 16,
        "message": "'EmberObject' is defined but never used.",
        "source": "'{a}' is defined but never used."
      },
      {
        "severity": "warning",
        "line": [
          4,
          5,
          6,
          8,
          18
        ],
        "column": 0,
        "message": "Implied global 'Ember'",
        "source": "jshint.implied-globals"
      },
      {
        "severity": "warning",
        "line": 5,
        "column": 0,
        "message": "Unused variable: 'EmberObject'",
        "source": "jshint.implied-unuseds"
      }
    ]
  }
}