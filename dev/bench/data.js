window.BENCHMARK_DATA = {
  "lastUpdate": 1654287490171,
  "repoUrl": "https://github.com/cleanlab/cleanlab-cli",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "efee922a68595bad8fa337ac064649eaf594067e",
          "message": "Update benchmarking.yml",
          "timestamp": "2022-06-03T14:20:50-04:00",
          "tree_id": "816dc0dd742a67d881b5e39020d81e333fe386a2",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/efee922a68595bad8fa337ac064649eaf594067e"
        },
        "date": 1654280837017,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 0.09932484329112731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.067974606000007 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 0.09576308086008954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.442437639000005 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.06653400548010074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.029908282000008 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.01489571512300179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.13339989000002 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "de55088dcba15a3fef96418bcba07172d6e6f9a3",
          "message": "test gh-pages",
          "timestamp": "2022-06-03T16:13:59-04:00",
          "tree_id": "5dd21a5335d22a0b50e0e705773487c5511ae275",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/de55088dcba15a3fef96418bcba07172d6e6f9a3"
        },
        "date": 1654287489656,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.8223076030952,
            "unit": "iter/sec",
            "range": "stddev: 0.006704996712748292",
            "extra": "mean: 56.10945688235849 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.2695755269479716,
            "unit": "iter/sec",
            "range": "stddev: 0.020845888359361863",
            "extra": "mean: 440.6110253333395 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.2003697041046669,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.990774450999993 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.018060444573412354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.369622599000024 sec\nrounds: 1"
          }
        ]
      }
    ]
  }
}