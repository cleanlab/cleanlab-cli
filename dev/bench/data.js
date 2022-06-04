window.BENCHMARK_DATA = {
  "lastUpdate": 1654319709364,
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
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "Caleb Chiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74d82da328ab4b4779721a418fb34ffbca1311f8",
          "message": "Benchmark performance regression alerts and charts (#8)\n\n* alert on failure\r\n\r\n* temp commit to test alert\r\n\r\n* Revert \"temp commit to test alert\"\r\n\r\nThis reverts commit 36ba821af7e61bdfcc6f14e16e42cc2dad718a4e.\r\n\r\n* Revert \"Revert \"temp commit to test alert\"\"\r\n\r\nThis reverts commit 912f59f16dfbe35426cfd40ec1dd06fec70b5b43.\r\n\r\n* Update benchmarking.yml\r\n\r\n* del output.json\r\n\r\n* Update benchmarking.yml\r\n\r\n* test gh-pages\r\n\r\n* no 1G test\r\n\r\n* Update schema_helpers.py\r\n\r\n* Revert \"Update schema_helpers.py\"\r\n\r\nThis reverts commit 801c35bf0f7a95875c51fdbf04e19cd81a746637.",
          "timestamp": "2022-06-03T16:51:49-04:00",
          "tree_id": "47b8d1b5c9de76a154de2b91a63866ba7d0b0c67",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/74d82da328ab4b4779721a418fb34ffbca1311f8"
        },
        "date": 1654289578757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.58966060214993,
            "unit": "iter/sec",
            "range": "stddev: 0.006279989707955956",
            "extra": "mean: 56.85158017646874 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.254111242501027,
            "unit": "iter/sec",
            "range": "stddev: 0.020698997217719454",
            "extra": "mean: 443.6338283333612 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.1987058565749477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.03256429999999 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "Caleb Chiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74d82da328ab4b4779721a418fb34ffbca1311f8",
          "message": "Benchmark performance regression alerts and charts (#8)\n\n* alert on failure\r\n\r\n* temp commit to test alert\r\n\r\n* Revert \"temp commit to test alert\"\r\n\r\nThis reverts commit 36ba821af7e61bdfcc6f14e16e42cc2dad718a4e.\r\n\r\n* Revert \"Revert \"temp commit to test alert\"\"\r\n\r\nThis reverts commit 912f59f16dfbe35426cfd40ec1dd06fec70b5b43.\r\n\r\n* Update benchmarking.yml\r\n\r\n* del output.json\r\n\r\n* Update benchmarking.yml\r\n\r\n* test gh-pages\r\n\r\n* no 1G test\r\n\r\n* Update schema_helpers.py\r\n\r\n* Revert \"Update schema_helpers.py\"\r\n\r\nThis reverts commit 801c35bf0f7a95875c51fdbf04e19cd81a746637.",
          "timestamp": "2022-06-03T16:51:49-04:00",
          "tree_id": "47b8d1b5c9de76a154de2b91a63866ba7d0b0c67",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/74d82da328ab4b4779721a418fb34ffbca1311f8"
        },
        "date": 1654291572297,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.647904555084466,
            "unit": "iter/sec",
            "range": "stddev: 0.006926423017429656",
            "extra": "mean: 56.66395105881814 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.2658053848970985,
            "unit": "iter/sec",
            "range": "stddev: 0.021116990004975716",
            "extra": "mean: 441.34417133332704 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.20091871848091716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.977137061000008 sec\nrounds: 1"
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
          "id": "e35338bf3682e1af280c8c266ea43cac92216b9d",
          "message": "implemented reservoir sampling",
          "timestamp": "2022-06-03T19:34:50-04:00",
          "tree_id": "0cba73209c09c9ac45ba78245204fb9907cc72a0",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/e35338bf3682e1af280c8c266ea43cac92216b9d"
        },
        "date": 1654299367931,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 12.133108499283528,
            "unit": "iter/sec",
            "range": "stddev: 0.005705082730197958",
            "extra": "mean: 82.41910966666548 msec\nrounds: 12"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 1.7614688698667311,
            "unit": "iter/sec",
            "range": "stddev: 0.03955851399566432",
            "extra": "mean: 567.7080174999958 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.2849959675464556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5088215760000026 sec\nrounds: 1"
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
          "id": "e35338bf3682e1af280c8c266ea43cac92216b9d",
          "message": "Reservoir sampling",
          "timestamp": "2022-05-24T17:06:46Z",
          "url": "https://github.com/cleanlab/cleanlab-cli/pull/9/commits/e35338bf3682e1af280c8c266ea43cac92216b9d"
        },
        "date": 1654299469562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 15.696226204468092,
            "unit": "iter/sec",
            "range": "stddev: 0.004306872065188072",
            "extra": "mean: 63.70958133333601 msec\nrounds: 15"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.252256006012223,
            "unit": "iter/sec",
            "range": "stddev: 0.024335398096823026",
            "extra": "mean: 443.9992600000077 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.3445149131440001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9026319669999907 sec\nrounds: 1"
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
          "id": "b5327340a1b805c34ccbda6efb079b16c388400f",
          "message": "Update schema_helpers.py",
          "timestamp": "2022-06-03T19:37:14-04:00",
          "tree_id": "f36b219de194867f9d364ec9e9e1f63f4353ad6e",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/b5327340a1b805c34ccbda6efb079b16c388400f"
        },
        "date": 1654299493639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 13.971261464449332,
            "unit": "iter/sec",
            "range": "stddev: 0.0066946299922515",
            "extra": "mean: 71.57549821428485 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.577279179256859,
            "unit": "iter/sec",
            "range": "stddev: 0.004265031508898312",
            "extra": "mean: 388.0060833333327 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.39017083352924875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.562979889999994 sec\nrounds: 1"
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
          "id": "b5327340a1b805c34ccbda6efb079b16c388400f",
          "message": "Reservoir sampling",
          "timestamp": "2022-05-24T17:06:46Z",
          "url": "https://github.com/cleanlab/cleanlab-cli/pull/9/commits/b5327340a1b805c34ccbda6efb079b16c388400f"
        },
        "date": 1654299499507,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 15.095323465570182,
            "unit": "iter/sec",
            "range": "stddev: 0.004461964210963081",
            "extra": "mean: 66.24568213333266 msec\nrounds: 15"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.7336081574192077,
            "unit": "iter/sec",
            "range": "stddev: 0.004345065074918982",
            "extra": "mean: 365.8168773333254 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.399641092725293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5022451849999925 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "Caleb Chiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "229547c7cbdf0885d55bde6ee0d9231a8da639f3",
          "message": "Reservoir sampling (#9)\n\n* implemented reservoir sampling\r\n\r\n* Update schema_helpers.py",
          "timestamp": "2022-06-03T19:48:49-04:00",
          "tree_id": "f36b219de194867f9d364ec9e9e1f63f4353ad6e",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/229547c7cbdf0885d55bde6ee0d9231a8da639f3"
        },
        "date": 1654300188586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.99699607169248,
            "unit": "iter/sec",
            "range": "stddev: 0.005285127033224984",
            "extra": "mean: 66.68002013333498 msec\nrounds: 15"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.758107813483709,
            "unit": "iter/sec",
            "range": "stddev: 0.002205909973132001",
            "extra": "mean: 362.5674076666788 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.39808035747386494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5120556220000196 sec\nrounds: 1"
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
          "id": "a6d133bdda6d82f25ebc6c5a22710ef035d3d2d7",
          "message": "remove redundant pull_request",
          "timestamp": "2022-06-03T19:50:31-04:00",
          "tree_id": "fa0620012282daf5671c412beae3c4245dcc2e02",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/a6d133bdda6d82f25ebc6c5a22710ef035d3d2d7"
        },
        "date": 1654300292413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.659376359156726,
            "unit": "iter/sec",
            "range": "stddev: 0.007256693592410792",
            "extra": "mean: 68.21572592857044 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.725861618098621,
            "unit": "iter/sec",
            "range": "stddev: 0.003459771644339471",
            "extra": "mean: 366.8564806666647 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.3955062381881876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.528405126000024 sec\nrounds: 1"
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
          "id": "e1da81c95f475d7111a10230dadabeb2555b53b7",
          "message": "cap max_rows_checked to 200K",
          "timestamp": "2022-06-04T01:00:27-04:00",
          "tree_id": "8307d00d18de9e36ff7e3dc20eed2bb02eb05077",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/e1da81c95f475d7111a10230dadabeb2555b53b7"
        },
        "date": 1654318888026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 11.698850599944755,
            "unit": "iter/sec",
            "range": "stddev: 0.007417143854590601",
            "extra": "mean: 85.47848281819431 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.1551525188866547,
            "unit": "iter/sec",
            "range": "stddev: 0.002345695418867741",
            "extra": "mean: 464.0042833333193 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.6391027030770728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5646937420000313 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "Caleb Chiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72f8e4aa41b2aa32298903cccd11c0c58d5ecef8",
          "message": "Cap number of rows in Datasets sampled from to 200K (#10)",
          "timestamp": "2022-06-04T01:12:25-04:00",
          "tree_id": "8307d00d18de9e36ff7e3dc20eed2bb02eb05077",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/72f8e4aa41b2aa32298903cccd11c0c58d5ecef8"
        },
        "date": 1654319599350,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 12.755041153390613,
            "unit": "iter/sec",
            "range": "stddev: 0.00743123395305415",
            "extra": "mean: 78.4003742500019 msec\nrounds: 12"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.3719276367951547,
            "unit": "iter/sec",
            "range": "stddev: 0.008116847388256791",
            "extra": "mean: 421.59802200001195 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7020637241099295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.424372126999998 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "Caleb Chiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "effa704ed29b1c2daadb6ca90ee409898e7bb134",
          "message": "Add link to performance benchmarks",
          "timestamp": "2022-06-04T01:14:14-04:00",
          "tree_id": "56e6e4bbf7fdceb155efd8c1226c3e6f51690fb3",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/effa704ed29b1c2daadb6ca90ee409898e7bb134"
        },
        "date": 1654319708378,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 16.814684530513237,
            "unit": "iter/sec",
            "range": "stddev: 0.006031821792417264",
            "extra": "mean: 59.47182643750004 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.7178980569329063,
            "unit": "iter/sec",
            "range": "stddev: 0.0034850057385878066",
            "extra": "mean: 367.9313863333344 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7984039630128404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2524987930000009 sec\nrounds: 1"
          }
        ]
      }
    ]
  }
}