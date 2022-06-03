window.BENCHMARK_DATA = {
  "lastUpdate": 1654288938454,
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
          "id": "801c35bf0f7a95875c51fdbf04e19cd81a746637",
          "message": "Update schema_helpers.py",
          "timestamp": "2022-06-03T16:27:35-04:00",
          "tree_id": "fcd8a9891eaa4be8bddb8e519a56c8a1ebb87d73",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/801c35bf0f7a95875c51fdbf04e19cd81a746637"
        },
        "date": 1654288214246,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 0.09932862356970189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.067591436000015 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 0.09572594804578366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.446488339000013 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.06646321645153391,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.045916423999984 sec\nrounds: 1"
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
          "id": "ba65af53ea2545e28c08051fbf3bf4419a053cbc",
          "message": "Revert \"Update schema_helpers.py\"\n\nThis reverts commit 801c35bf0f7a95875c51fdbf04e19cd81a746637.",
          "timestamp": "2022-06-03T16:38:06-04:00",
          "tree_id": "47b8d1b5c9de76a154de2b91a63866ba7d0b0c67",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/ba65af53ea2545e28c08051fbf3bf4419a053cbc"
        },
        "date": 1654288754807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.766790720076802,
            "unit": "iter/sec",
            "range": "stddev: 0.006691069833662203",
            "extra": "mean: 56.28478523529753 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.2735608996670478,
            "unit": "iter/sec",
            "range": "stddev: 0.01756304274726995",
            "extra": "mean: 439.8386690000014 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.1998625623504846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.003438303999985 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cleanlab",
            "username": "cleanlab"
          },
          "committer": {
            "name": "cleanlab",
            "username": "cleanlab"
          },
          "id": "ba65af53ea2545e28c08051fbf3bf4419a053cbc",
          "message": "Benchmark performance regression alerts and charts",
          "timestamp": "2022-05-24T17:06:46Z",
          "url": "https://github.com/cleanlab/cleanlab-cli/pull/8/commits/ba65af53ea2545e28c08051fbf3bf4419a053cbc"
        },
        "date": 1654288937672,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 16.502368416304726,
            "unit": "iter/sec",
            "range": "stddev: 0.0057178089782241185",
            "extra": "mean: 60.5973624375018 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.2311059382077123,
            "unit": "iter/sec",
            "range": "stddev: 0.031165569453342944",
            "extra": "mean: 448.2082104999989 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.19652145875241514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.088502835 sec\nrounds: 1"
          }
        ]
      }
    ]
  }
}