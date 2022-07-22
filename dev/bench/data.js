window.BENCHMARK_DATA = {
  "lastUpdate": 1658473780414,
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
          "id": "df17c2fee888c5a25806960013e06213ea4ebd8f",
          "message": "Merge branch 'main' of https://github.com/cleanlab/cleanlab-cli",
          "timestamp": "2022-06-04T01:15:14-04:00",
          "tree_id": "e12ea4f48bbf2a7af16ec20ef914034d8f898ce3",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/df17c2fee888c5a25806960013e06213ea4ebd8f"
        },
        "date": 1654319800933,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 15.753901457633656,
            "unit": "iter/sec",
            "range": "stddev: 0.00440327596976551",
            "extra": "mean: 63.47633966666991 msec\nrounds: 15"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.8874998331386683,
            "unit": "iter/sec",
            "range": "stddev: 0.0002712680335220947",
            "extra": "mean: 346.3203663333256 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.830982772528849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.203394381999999 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.8445774091562884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1840240920000156 sec\nrounds: 1"
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
          "id": "6c06c9698faf933918e211c882b7aeb177df98bf",
          "message": "fix value type when ints/floats are loaded as strings",
          "timestamp": "2022-06-04T14:11:17-04:00",
          "tree_id": "7bc8d70b52de66925598541c32a4f5902b60e6f7",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/6c06c9698faf933918e211c882b7aeb177df98bf"
        },
        "date": 1654366385406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 10.306226071352139,
            "unit": "iter/sec",
            "range": "stddev: 0.01244367015050622",
            "extra": "mean: 97.02872740000004 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.0877983162106926,
            "unit": "iter/sec",
            "range": "stddev: 0.0038036241352882453",
            "extra": "mean: 478.9734680000019 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.6483538276541058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.542367697000003 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.6701079187694685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.492296945000021 sec\nrounds: 1"
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
          "id": "eeca13863e7c9160492b2cc156a3d2496456f963",
          "message": "fix typo",
          "timestamp": "2022-06-04T17:19:48-04:00",
          "tree_id": "66d9762fdc90322348c63a30e74dad7c3811d274",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/eeca13863e7c9160492b2cc156a3d2496456f963"
        },
        "date": 1654377674763,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 13.7418549534982,
            "unit": "iter/sec",
            "range": "stddev: 0.009017607601668129",
            "extra": "mean: 72.77037949999864 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.5923081843809554,
            "unit": "iter/sec",
            "range": "stddev: 0.0199720933160885",
            "extra": "mean: 385.75660333333417 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7706403635253021,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2976221429999981 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7804214685963874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2813589069999978 sec\nrounds: 1"
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
          "id": "a9d9ed718f79a2f67f6160b807e3b4b5dde50726",
          "message": "Read streaming array instead of records (#11)\n\n* optimize ExcelDataset to get values array\r\n\r\n* optimize propose_schema to read_streaming_values\r\n\r\n* fix typo",
          "timestamp": "2022-06-04T17:43:14-04:00",
          "tree_id": "66d9762fdc90322348c63a30e74dad7c3811d274",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/a9d9ed718f79a2f67f6160b807e3b4b5dde50726"
        },
        "date": 1654379076489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.373779130343369,
            "unit": "iter/sec",
            "range": "stddev: 0.007390629706975518",
            "extra": "mean: 69.57112607142945 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.6990926662616057,
            "unit": "iter/sec",
            "range": "stddev: 0.018700166990109866",
            "extra": "mean: 370.49487499999617 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7827776707368466,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2775019489999977 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7895813926705825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2664938779999915 sec\nrounds: 1"
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
          "id": "6aae8553f3e8e775bb6bcc311dee3ea8f60ac378",
          "message": "read json with 'rb' for ijson",
          "timestamp": "2022-06-04T17:43:54-04:00",
          "tree_id": "6939d2a20add5060cdd1da27a9ffc1f2d10950df",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/6aae8553f3e8e775bb6bcc311dee3ea8f60ac378"
        },
        "date": 1654379111268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 13.927396175193573,
            "unit": "iter/sec",
            "range": "stddev: 0.0075752216318560215",
            "extra": "mean: 71.80093015384486 msec\nrounds: 13"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.6998762387531396,
            "unit": "iter/sec",
            "range": "stddev: 0.0065810703527042266",
            "extra": "mean: 370.38734800000367 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7485300329785872,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3359517399999987 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.759287450913328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.317024269000001 sec\nrounds: 1"
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
          "id": "1fb7a1cebbc23c6231341bde2fb75b5f8c6c1a48",
          "message": "Update api_service.py",
          "timestamp": "2022-06-06T18:21:27-04:00",
          "tree_id": "2c7252a84734a615bc79296569b9fb8f999a500b",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/1fb7a1cebbc23c6231341bde2fb75b5f8c6c1a48"
        },
        "date": 1654554165778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.32967405568035,
            "unit": "iter/sec",
            "range": "stddev: 0.006037533235879076",
            "extra": "mean: 57.70448981250276 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.2741441440207475,
            "unit": "iter/sec",
            "range": "stddev: 0.011965142215500784",
            "extra": "mean: 305.4233277500025 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9352706409675646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0692092280000054 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9449974872138752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.058203872000007 sec\nrounds: 1"
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
          "id": "3a6ebd30c33d626955f330479bb3c67a32ca341b",
          "message": "fix download for json",
          "timestamp": "2022-06-06T18:32:55-04:00",
          "tree_id": "30e809271b42c5fd8c17aea15a3b6deaddd302d0",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/3a6ebd30c33d626955f330479bb3c67a32ca341b"
        },
        "date": 1654554872826,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 20.047458813506225,
            "unit": "iter/sec",
            "range": "stddev: 0.0051498735720773865",
            "extra": "mean: 49.88163384210509 msec\nrounds: 19"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 31.669027234371892,
            "unit": "iter/sec",
            "range": "stddev: 0.0036706481769657523",
            "extra": "mean: 31.576593515150748 msec\nrounds: 33"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 4.0094314819012045,
            "unit": "iter/sec",
            "range": "stddev: 0.004148857927540326",
            "extra": "mean: 249.41191900000172 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 4.555648234954678,
            "unit": "iter/sec",
            "range": "stddev: 0.012753223977326603",
            "extra": "mean: 219.5077293999958 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 1.1130715931717095,
            "unit": "iter/sec",
            "range": "stddev: 0.007326713076221344",
            "extra": "mean: 898.4148064999929 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.6819027833268173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4664847020000025 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 1.1087388135079315,
            "unit": "iter/sec",
            "range": "stddev: 0.0007603964695358503",
            "extra": "mean: 901.9256725000062 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.6507502966106817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5366877360000046 sec\nrounds: 1"
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
          "id": "5289f59321c20d40f7250ce0ddde2a17a7706d17",
          "message": "experiment -> cleanset",
          "timestamp": "2022-06-07T01:12:34-04:00",
          "tree_id": "2caa32c60488bb23b6c30e8cdca06a0a4d425174",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/5289f59321c20d40f7250ce0ddde2a17a7706d17"
        },
        "date": 1654578865784,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.684127940793235,
            "unit": "iter/sec",
            "range": "stddev: 0.007510212808002377",
            "extra": "mean: 68.10074142856999 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 21.720361681379455,
            "unit": "iter/sec",
            "range": "stddev: 0.00651146751405858",
            "extra": "mean: 46.03974900000331 msec\nrounds: 21"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.876843919942984,
            "unit": "iter/sec",
            "range": "stddev: 0.0022182342049860662",
            "extra": "mean: 347.60314700000094 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.3682485756131064,
            "unit": "iter/sec",
            "range": "stddev: 0.01637273583206248",
            "extra": "mean: 296.8902020000037 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7770339721094257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2869450189999867 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.47223026860623707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.117610976000009 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.803045796594384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.245258992999993 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.475004216042425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.105244471999981 sec\nrounds: 1"
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
          "id": "ab9e36a67a46a7454a4c26e35ea49c7497a2ab92",
          "message": "experiment -> cleanset (#12)",
          "timestamp": "2022-06-07T01:26:32-04:00",
          "tree_id": "2caa32c60488bb23b6c30e8cdca06a0a4d425174",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/ab9e36a67a46a7454a4c26e35ea49c7497a2ab92"
        },
        "date": 1654579719023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.710701733818254,
            "unit": "iter/sec",
            "range": "stddev: 0.005484167044338275",
            "extra": "mean: 56.46303658824081 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 27.39025654249683,
            "unit": "iter/sec",
            "range": "stddev: 0.003913670285360107",
            "extra": "mean: 36.50933310713863 msec\nrounds: 28"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.4159683256728544,
            "unit": "iter/sec",
            "range": "stddev: 0.0007111722819794867",
            "extra": "mean: 292.7427612499969 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.949333229924142,
            "unit": "iter/sec",
            "range": "stddev: 0.0116509133558905",
            "extra": "mean: 253.2072989999904 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9607782891369618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0408228530000088 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5765347113890432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.734500942000011 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9369570377885822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0672847950000062 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5484547933100994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8233043309999744 sec\nrounds: 1"
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
          "id": "4224dc724bb2cc8481c39d74d3a8d027dd0a61dc",
          "message": "--all flag to allow downloading of all Cleanlab columns",
          "timestamp": "2022-06-07T02:31:31-04:00",
          "tree_id": "fa6ff61345f0a7ee2461ab511dfce8768d321843",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/4224dc724bb2cc8481c39d74d3a8d027dd0a61dc"
        },
        "date": 1654583649469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 13.988630409213084,
            "unit": "iter/sec",
            "range": "stddev: 0.006306079259811873",
            "extra": "mean: 71.48662669230205 msec\nrounds: 13"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 20.88093422878356,
            "unit": "iter/sec",
            "range": "stddev: 0.005010063869639946",
            "extra": "mean: 47.89057754999959 msec\nrounds: 20"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.771196706482218,
            "unit": "iter/sec",
            "range": "stddev: 0.013120608314742639",
            "extra": "mean: 360.8549323333345 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.0771632471474666,
            "unit": "iter/sec",
            "range": "stddev: 0.011536963110779161",
            "extra": "mean: 324.97463400000015 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.8004041650436169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2493688110000107 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4614457903032826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1671017940000183 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7988806084913744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2517515000000117 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.43704463333570953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.288095822999992 sec\nrounds: 1"
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
          "id": "4f2092490de4a4d2825dbdb663e41e486e79650a",
          "message": "--all flag to allow downloading of all Cleanlab columns (#13)",
          "timestamp": "2022-06-07T02:44:28-04:00",
          "tree_id": "fa6ff61345f0a7ee2461ab511dfce8768d321843",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/4f2092490de4a4d2825dbdb663e41e486e79650a"
        },
        "date": 1654584413847,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 16.102312142976054,
            "unit": "iter/sec",
            "range": "stddev: 0.006401917247400718",
            "extra": "mean: 62.102882562502515 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 23.487023335523922,
            "unit": "iter/sec",
            "range": "stddev: 0.0052070407689018645",
            "extra": "mean: 42.57670227999938 msec\nrounds: 25"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.339791998438955,
            "unit": "iter/sec",
            "range": "stddev: 0.013535676462366796",
            "extra": "mean: 299.41984425000356 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.760712236025439,
            "unit": "iter/sec",
            "range": "stddev: 0.009799039752709175",
            "extra": "mean: 265.9070774999961 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.8696701767505807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1498612080000044 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.529024896734272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8902702050000073 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9061004711095446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1036303719999978 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.4950111768722099,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0201564060000123 sec\nrounds: 1"
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
          "id": "bd1c00296fe74b45c9133c192005674ba9543631",
          "message": "update makefile and README",
          "timestamp": "2022-06-07T11:14:22-04:00",
          "tree_id": "4faf7eaf6cc1b5bb0987b0ef224b1637adc09372",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/bd1c00296fe74b45c9133c192005674ba9543631"
        },
        "date": 1654615018519,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 13.722106434326088,
            "unit": "iter/sec",
            "range": "stddev: 0.009721634182574749",
            "extra": "mean: 72.87510884615227 msec\nrounds: 13"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 20.932360948081993,
            "unit": "iter/sec",
            "range": "stddev: 0.006699458186973828",
            "extra": "mean: 47.77291976190717 msec\nrounds: 21"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.6864710013482047,
            "unit": "iter/sec",
            "range": "stddev: 0.002749038352107051",
            "extra": "mean: 372.23554599999414 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.1168813519996124,
            "unit": "iter/sec",
            "range": "stddev: 0.015605753523985796",
            "extra": "mean: 320.8335150000039 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7643303796512068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3083347549999758 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.47551480746381486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1029839330000186 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7709486521700176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2971032469999955 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.4552621779309193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.196536519999995 sec\nrounds: 1"
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
          "id": "72572fed7cd141b5ae419a778812f3cdba88204b",
          "message": "override __len__ for Dataset",
          "timestamp": "2022-06-07T11:29:52-04:00",
          "tree_id": "e7bd1582709a57c9caa62e4ab686d725d57b2908",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/72572fed7cd141b5ae419a778812f3cdba88204b"
        },
        "date": 1654615919741,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.57909101644159,
            "unit": "iter/sec",
            "range": "stddev: 0.010750996839971933",
            "extra": "mean: 68.59138192307384 msec\nrounds: 13"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 23.182080330503524,
            "unit": "iter/sec",
            "range": "stddev: 0.0050243947748524476",
            "extra": "mean: 43.13676709523677 msec\nrounds: 21"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.1698415015931865,
            "unit": "iter/sec",
            "range": "stddev: 0.02708339250511676",
            "extra": "mean: 315.4731867499976 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.743319794322582,
            "unit": "iter/sec",
            "range": "stddev: 0.011610730901616491",
            "extra": "mean: 267.14255125001074 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.8097532695391632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2349440719999905 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5065924537631444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.973973344000001 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9644339705200843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0368776199999843 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.49036845929042816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.039282872000001 sec\nrounds: 1"
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
          "id": "108e995cb35d1deaaebe0ba48831a08252f06ba9",
          "message": "optimize upload",
          "timestamp": "2022-06-07T13:27:05-04:00",
          "tree_id": "3638507cae96e76c5ffec0e1e8726c39b5cb0d65",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/108e995cb35d1deaaebe0ba48831a08252f06ba9"
        },
        "date": 1654622932762,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.502935825155856,
            "unit": "iter/sec",
            "range": "stddev: 0.007352047813428683",
            "extra": "mean: 68.95155657142637 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 22.290107156345293,
            "unit": "iter/sec",
            "range": "stddev: 0.005469796016301932",
            "extra": "mean: 44.86295166666937 msec\nrounds: 21"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.8191412545600145,
            "unit": "iter/sec",
            "range": "stddev: 0.00331057501075985",
            "extra": "mean: 354.7179476666808 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.2434023356341464,
            "unit": "iter/sec",
            "range": "stddev: 0.012593088795446575",
            "extra": "mean: 308.31820925000386 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7711105772575557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2968308689999901 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.48360026274486007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0678235249999943 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7924622700590441,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2618897300000071 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.4636100999893308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1569849320000003 sec\nrounds: 1"
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
          "id": "4e411f64a4afdf3b2dfa535ba3d53a4ef3da8e1c",
          "message": "Upload row arrays instead of records (#14)",
          "timestamp": "2022-06-07T13:33:44-04:00",
          "tree_id": "3638507cae96e76c5ffec0e1e8726c39b5cb0d65",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/4e411f64a4afdf3b2dfa535ba3d53a4ef3da8e1c"
        },
        "date": 1654623333437,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 15.154913542468329,
            "unit": "iter/sec",
            "range": "stddev: 0.0073575570991863265",
            "extra": "mean: 65.98519992857226 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 23.071781433976934,
            "unit": "iter/sec",
            "range": "stddev: 0.005753619784260581",
            "extra": "mean: 43.34299034782542 msec\nrounds: 23"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.0651188734529042,
            "unit": "iter/sec",
            "range": "stddev: 0.005085431888081525",
            "extra": "mean: 326.25162066666746 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.406180408248286,
            "unit": "iter/sec",
            "range": "stddev: 0.016086184754380534",
            "extra": "mean: 293.5839797499966 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.8219758403891133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2165807689999895 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.49811509685825883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0075681430000003 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.8258141100531238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2109262700000016 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.454695188564565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.199275525999994 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "b3aa66fba44b6399cc47c2e3d3f5154ef25e32ff",
          "message": "fixed race condition for table creation",
          "timestamp": "2022-06-17T09:53:43-06:00",
          "tree_id": "5931a23f297c29a0e769dc3b42de184974c83a40",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/b3aa66fba44b6399cc47c2e3d3f5154ef25e32ff"
        },
        "date": 1655481460167,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.022127659344672,
            "unit": "iter/sec",
            "range": "stddev: 0.0023558966976450144",
            "extra": "mean: 71.31585336363534 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 19.961584648959874,
            "unit": "iter/sec",
            "range": "stddev: 0.007845268323871434",
            "extra": "mean: 50.09622320000062 msec\nrounds: 20"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.858818930951003,
            "unit": "iter/sec",
            "range": "stddev: 0.006381169239407479",
            "extra": "mean: 349.7948013333409 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.0047277829207153,
            "unit": "iter/sec",
            "range": "stddev: 0.01698784318735098",
            "extra": "mean: 332.8088506666518 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7544497197387966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3254693769999903 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4535664421008371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2047486480000202 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7931946821572747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.260724539000023 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.44223324187367724,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2612501849999944 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43079376+ryansingman@users.noreply.github.com",
            "name": "ryansingman",
            "username": "ryansingman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7622e7a3c5127746b7595031dad6ccf2c1ebfe04",
          "message": "fixed broken link in upload dataset success prompt (#16)\n\nCo-authored-by: Ryan Singman <ryan@cleanlab.ai>",
          "timestamp": "2022-06-27T11:21:36-06:00",
          "tree_id": "1a0a7b955aa620d89a1b0a763b660ce9e42e3a7b",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/7622e7a3c5127746b7595031dad6ccf2c1ebfe04"
        },
        "date": 1656350604541,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 16.695223115387904,
            "unit": "iter/sec",
            "range": "stddev: 0.007299125436319624",
            "extra": "mean: 59.89737262500583 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 25.63448711155262,
            "unit": "iter/sec",
            "range": "stddev: 0.006068828198530314",
            "extra": "mean: 39.00994764000302 msec\nrounds: 25"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.1355836088451174,
            "unit": "iter/sec",
            "range": "stddev: 0.01606641724046192",
            "extra": "mean: 318.91989650000596 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.577895313725899,
            "unit": "iter/sec",
            "range": "stddev: 0.013650238261687417",
            "extra": "mean: 279.49392375000315 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9356907565404564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0687291639999899 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5659385269320761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7669763629999693 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 1.044415644253701,
            "unit": "iter/sec",
            "range": "stddev: 0.0054576318636157745",
            "extra": "mean: 957.4732104999839 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5422410712641188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8441981860000283 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "a65b03d79acef6ee0fb332a08810d27870e56bcc",
          "message": "fixed broken link in upload dataset success prompt",
          "timestamp": "2022-06-27T11:19:44-06:00",
          "tree_id": "1a0a7b955aa620d89a1b0a763b660ce9e42e3a7b",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/a65b03d79acef6ee0fb332a08810d27870e56bcc"
        },
        "date": 1656350651530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.40361211315438,
            "unit": "iter/sec",
            "range": "stddev: 0.006984999639014824",
            "extra": "mean: 69.42702928571164 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 21.672437150079638,
            "unit": "iter/sec",
            "range": "stddev: 0.005107369204570882",
            "extra": "mean: 46.14155727272811 msec\nrounds: 22"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.7979665964292306,
            "unit": "iter/sec",
            "range": "stddev: 0.014369771875812181",
            "extra": "mean: 357.40240833332376 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 2.9582137283149583,
            "unit": "iter/sec",
            "range": "stddev: 0.01130157220125567",
            "extra": "mean: 338.04183600000215 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7975623101376872,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2538205320000202 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4562885800007955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.191595503000002 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.8283452597614012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2072260790000087 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.4517315325892973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.213704220000011 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "a65b03d79acef6ee0fb332a08810d27870e56bcc",
          "message": "fixed broken link in upload dataset success prompt",
          "timestamp": "2022-06-27T11:19:44-06:00",
          "tree_id": "1a0a7b955aa620d89a1b0a763b660ce9e42e3a7b",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/a65b03d79acef6ee0fb332a08810d27870e56bcc"
        },
        "date": 1656351567879,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 15.91808531466528,
            "unit": "iter/sec",
            "range": "stddev: 0.0066447409036103945",
            "extra": "mean: 62.82162585714397 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 23.731232308189348,
            "unit": "iter/sec",
            "range": "stddev: 0.004768456434850292",
            "extra": "mean: 42.138561833340304 msec\nrounds: 24"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.985069559673046,
            "unit": "iter/sec",
            "range": "stddev: 0.006630563625336401",
            "extra": "mean: 335.0005686666577 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.692055334077609,
            "unit": "iter/sec",
            "range": "stddev: 0.016243466550552137",
            "extra": "mean: 270.85184524999306 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9018009534979476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.10889215200001 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5343172376333432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8715473310000448 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.8504970071898884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.175783091000028 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.48799002265359626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.049222224999994 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "2735c90ddf85a7af49822f3487976e3780ffc5b1",
          "message": "mini optimizations to serialization",
          "timestamp": "2022-06-27T15:04:29-06:00",
          "tree_id": "755ce03bb48726a78e50651681b88d2a6b4a1b85",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/2735c90ddf85a7af49822f3487976e3780ffc5b1"
        },
        "date": 1656364034036,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 15.059944608899746,
            "unit": "iter/sec",
            "range": "stddev: 0.0006177789355845183",
            "extra": "mean: 66.40130664285745 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 21.835108530430812,
            "unit": "iter/sec",
            "range": "stddev: 0.006858792132952582",
            "extra": "mean: 45.79780304761643 msec\nrounds: 21"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.842780246017003,
            "unit": "iter/sec",
            "range": "stddev: 0.0023954121193512363",
            "extra": "mean: 351.76830899999817 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.302540638899157,
            "unit": "iter/sec",
            "range": "stddev: 0.0012915272382488113",
            "extra": "mean: 302.79718233333597 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7873179070871051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2701349620000002 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.48103595942704747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0788466650000146 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7955499652542409,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2569920729999922 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.467758133714167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.137856998999979 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "7ef9dea2e1f99a57856e346f82b496ac05d3a352",
          "message": "fix rows per payload math",
          "timestamp": "2022-06-28T09:56:48-06:00",
          "tree_id": "931ab4795a41de0f618d32b1c0dbaae86b7c6f66",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/7ef9dea2e1f99a57856e346f82b496ac05d3a352"
        },
        "date": 1656431918013,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.336460718159366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006601390464064554",
            "extra": "mean: 57.68190037500176 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 26.115808856849803,
            "unit": "iter/sec",
            "range": "stddev: 0.0059970327569800795",
            "extra": "mean: 38.2909832692283 msec\nrounds: 26"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.1524881450094098,
            "unit": "iter/sec",
            "range": "stddev: 0.018115312687497945",
            "extra": "mean: 317.20975749998104 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.6966081635942882,
            "unit": "iter/sec",
            "range": "stddev: 0.014308874360013851",
            "extra": "mean: 270.5182577500125 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9257489055916994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0802065159999756 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5743687354463645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7410418399999799 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9316695244806562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0733419669999762 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5363240978978094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.864544225999964 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "d93304ede10dce794bca8bcfc58b89e057291c51",
          "message": "added gzip encoding to dataset uploads",
          "timestamp": "2022-06-28T14:21:31-06:00",
          "tree_id": "56b5a2841e46d7bef8d53d51305921ea0393f508",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/d93304ede10dce794bca8bcfc58b89e057291c51"
        },
        "date": 1656447793269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.600924334283945,
            "unit": "iter/sec",
            "range": "stddev: 0.0008436910455421636",
            "extra": "mean: 56.81519794117579 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 25.904207245156076,
            "unit": "iter/sec",
            "range": "stddev: 0.0076649318357836045",
            "extra": "mean: 38.603767740740025 msec\nrounds: 27"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.122824155191927,
            "unit": "iter/sec",
            "range": "stddev: 0.020482679305717042",
            "extra": "mean: 320.22296174999985 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 4.0078346851747675,
            "unit": "iter/sec",
            "range": "stddev: 0.015702666081235418",
            "extra": "mean: 249.51128940000018 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9309768113133712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0741406100000006 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.6262512931384636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5968030900000088 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9320722902293842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0728781560000016 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.6242919390078843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.601814692000005 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "7e2fc600b684cde2cd25ca021d45fe2dfc5a8307",
          "message": "mp -> threading to alleviate shared mem issues (mutable log dict)",
          "timestamp": "2022-06-28T16:04:35-06:00",
          "tree_id": "c04c3be7379d966ec3f5daa8f59fd351481af96f",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/7e2fc600b684cde2cd25ca021d45fe2dfc5a8307"
        },
        "date": 1656453979931,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.151502884682195,
            "unit": "iter/sec",
            "range": "stddev: 0.0007836637236419785",
            "extra": "mean: 58.303928625000445 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 25.418461487954946,
            "unit": "iter/sec",
            "range": "stddev: 0.008148855647108173",
            "extra": "mean: 39.34148416000198 msec\nrounds: 25"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.089869062611651,
            "unit": "iter/sec",
            "range": "stddev: 0.025569161814031825",
            "extra": "mean: 323.63830950000505 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.4674097524564433,
            "unit": "iter/sec",
            "range": "stddev: 0.019919558306598223",
            "extra": "mean: 288.3997194999992 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9175574334110682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0898500339999941 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.55571884859949,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7994710860000112 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.924566850323499,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0815875559999881 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5379387552617303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8589476779999927 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "0a8c06ee3b3fad7298a09873f44f1e57ef484ea9",
          "message": "bump black version for click compatibility",
          "timestamp": "2022-06-28T16:18:45-06:00",
          "tree_id": "7dac768f3c63d6dcfd88ac9373c3a2874db5ca34",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/0a8c06ee3b3fad7298a09873f44f1e57ef484ea9"
        },
        "date": 1656454838137,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.151022144214036,
            "unit": "iter/sec",
            "range": "stddev: 0.007507280351363551",
            "extra": "mean: 58.30556287500066 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 26.9833771790033,
            "unit": "iter/sec",
            "range": "stddev: 0.005838626640585055",
            "extra": "mean: 37.05985330769251 msec\nrounds: 26"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.2447006628090764,
            "unit": "iter/sec",
            "range": "stddev: 0.014086083279067851",
            "extra": "mean: 308.19483950000404 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.7665050735862984,
            "unit": "iter/sec",
            "range": "stddev: 0.01749767426138544",
            "extra": "mean: 265.49811575000604 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9443684894114815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0589086900000098 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5734563774061975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7438118039999893 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9394100393163474,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0644978849999802 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.558559628255601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.790319151999995 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43079376+ryansingman@users.noreply.github.com",
            "name": "ryansingman",
            "username": "ryansingman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3f957adcf1eef1db9bbc58bf36665d3b4e5864a",
          "message": "bump black version for click compatibility (#18)\n\nCo-authored-by: Ryan Singman <ryan@cleanlab.ai>",
          "timestamp": "2022-06-28T16:22:03-06:00",
          "tree_id": "7dac768f3c63d6dcfd88ac9373c3a2874db5ca34",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/b3f957adcf1eef1db9bbc58bf36665d3b4e5864a"
        },
        "date": 1656455078368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.117666090203807,
            "unit": "iter/sec",
            "range": "stddev: 0.007769399924657359",
            "extra": "mean: 70.83323784615476 msec\nrounds: 13"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 22.091553650236627,
            "unit": "iter/sec",
            "range": "stddev: 0.0054292674874448724",
            "extra": "mean: 45.26616895454471 msec\nrounds: 22"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.7178731901576056,
            "unit": "iter/sec",
            "range": "stddev: 0.0010785039301336328",
            "extra": "mean: 367.9347526666656 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.218158738732268,
            "unit": "iter/sec",
            "range": "stddev: 0.011231779879315113",
            "extra": "mean: 310.7366917499945 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7439126874558727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3442437760000132 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4783351343599842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.090584462999999 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7687223658242649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3008597699999882 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.44893247849867596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.227506468999991 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "14ef1d506eacd80dc128e8dd166c1aab9fdb5952",
          "message": "mp -> threading to alleviate shared mem issues (mutable log dict)",
          "timestamp": "2022-06-28T16:22:34-06:00",
          "tree_id": "224efad06a240e954198dbd4ac7bddcad6268ba6",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/14ef1d506eacd80dc128e8dd166c1aab9fdb5952"
        },
        "date": 1656455081250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 19.944249285964034,
            "unit": "iter/sec",
            "range": "stddev: 0.0005650890338488679",
            "extra": "mean: 50.13976638888885 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 27.96610976432203,
            "unit": "iter/sec",
            "range": "stddev: 0.008431996362577847",
            "extra": "mean: 35.757565440001144 msec\nrounds: 25"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.5446119081471816,
            "unit": "iter/sec",
            "range": "stddev: 0.01781665682073006",
            "extra": "mean: 282.1183322500076 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 4.051844208885065,
            "unit": "iter/sec",
            "range": "stddev: 0.017196615812239618",
            "extra": "mean: 246.80119680000416 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 1.0475953815913235,
            "unit": "iter/sec",
            "range": "stddev: 0.010503292709961493",
            "extra": "mean: 954.5670185000006 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.575294163913572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7382411689999913 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 1.0400381283802,
            "unit": "iter/sec",
            "range": "stddev: 0.02286227968690464",
            "extra": "mean: 961.5032110000072 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.6182071903940589,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6175806679999596 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "2248c3900b84845c6714cb42941e9525b3c211ba",
          "message": "pre-commit format fixes",
          "timestamp": "2022-06-28T16:22:57-06:00",
          "tree_id": "557d6f148e95be122e87cb5acf09e007052dce1d",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/2248c3900b84845c6714cb42941e9525b3c211ba"
        },
        "date": 1656455097292,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.513360809039195,
            "unit": "iter/sec",
            "range": "stddev: 0.0006339228660778124",
            "extra": "mean: 57.09926329410564 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 26.95331629353152,
            "unit": "iter/sec",
            "range": "stddev: 0.007993041317892658",
            "extra": "mean: 37.10118595833004 msec\nrounds: 24"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.089866981303617,
            "unit": "iter/sec",
            "range": "stddev: 0.022934908340625542",
            "extra": "mean: 323.6385275000089 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.533006900571908,
            "unit": "iter/sec",
            "range": "stddev: 0.019794878792073922",
            "extra": "mean: 283.045017500001 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9208777499876826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0859204709999517 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5570521209521337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.795164155000009 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.925167294740689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.080885593000005 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5439259544982332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8384855360000074 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "1ebad38a540e770863c07d41016b402e771a703e",
          "message": "naming changes for clarity",
          "timestamp": "2022-06-28T16:43:21-06:00",
          "tree_id": "8dc7d36d187008bd0ea55ddf3e96b0d19eb8a5be",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/1ebad38a540e770863c07d41016b402e771a703e"
        },
        "date": 1656456322153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 20.3227537589647,
            "unit": "iter/sec",
            "range": "stddev: 0.000823914814700986",
            "extra": "mean: 49.205930055560685 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 29.544028168415128,
            "unit": "iter/sec",
            "range": "stddev: 0.005715382115423587",
            "extra": "mean: 33.84778792856277 msec\nrounds: 28"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.7945823452008596,
            "unit": "iter/sec",
            "range": "stddev: 0.016412261443013342",
            "extra": "mean: 263.5336142499938 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 4.227171443207688,
            "unit": "iter/sec",
            "range": "stddev: 0.013409985208561641",
            "extra": "mean: 236.5648077999822 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9475218455852056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.055384637999964 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.6495359100672903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5395607609999615 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 1.0628185990057712,
            "unit": "iter/sec",
            "range": "stddev: 0.02497953558069146",
            "extra": "mean: 940.8943360000137 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5342905611788664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.871640775000003 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "00e7bb1bdf20fc515ba2b6834997d36a67a58ffd",
          "message": "refactored out walrus operator for <3.8 compat",
          "timestamp": "2022-06-28T16:44:35-06:00",
          "tree_id": "39619995a5779926ff592388cf5729a8659cf38b",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/00e7bb1bdf20fc515ba2b6834997d36a67a58ffd"
        },
        "date": 1656456390746,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 16.282023508258828,
            "unit": "iter/sec",
            "range": "stddev: 0.002068865335961287",
            "extra": "mean: 61.41742760000094 msec\nrounds: 15"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 24.262649022971196,
            "unit": "iter/sec",
            "range": "stddev: 0.0052007767024395265",
            "extra": "mean: 41.21561495833485 msec\nrounds: 24"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.2276879047312734,
            "unit": "iter/sec",
            "range": "stddev: 0.014378877429412854",
            "extra": "mean: 309.8192977499963 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.598355450804806,
            "unit": "iter/sec",
            "range": "stddev: 0.022602905944306525",
            "extra": "mean: 277.90473000001725 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9046249467849532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.105430492000039 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5259849236404739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9011951770000337 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.8881672439241739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1259140739999793 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.49756189447307375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.009800210000037 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43079376+ryansingman@users.noreply.github.com",
            "name": "ryansingman",
            "username": "ryansingman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "826609af7126f853c612d7d89abd89c8ec4d499f",
          "message": "Feature: async cli upload (#17)\n\n* made post requests async\r\n\r\n* fixed race condition for table creation\r\n\r\n* resolve unexpected mime type error\r\n\r\n* upload row as list\r\n\r\n* mini optimizations to serialization\r\n\r\n* fix rows per payload math\r\n\r\n* added gzip encoding to dataset uploads\r\n\r\n* mp -> threading to alleviate shared mem issues (mutable log dict)\r\n\r\n* pre-commit format fixes\r\n\r\n* naming changes for clarity\r\n\r\n* refactored out walrus operator for <3.8 compat\r\n\r\nCo-authored-by: Ryan Singman <ryan@cleanlab.ai>",
          "timestamp": "2022-06-28T17:07:02-06:00",
          "tree_id": "39619995a5779926ff592388cf5729a8659cf38b",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/826609af7126f853c612d7d89abd89c8ec4d499f"
        },
        "date": 1656457803787,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.322441248734227,
            "unit": "iter/sec",
            "range": "stddev: 0.00228290219538332",
            "extra": "mean: 69.82049935714534 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 19.62331567276331,
            "unit": "iter/sec",
            "range": "stddev: 0.00928909675274726",
            "extra": "mean: 50.959787666667154 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.729703714546706,
            "unit": "iter/sec",
            "range": "stddev: 0.016219551921376512",
            "extra": "mean: 366.3401249999983 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 2.773037037308463,
            "unit": "iter/sec",
            "range": "stddev: 0.02578261701211838",
            "extra": "mean: 360.6154503333319 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7859310964839362,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2723761720000084 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4676040658038853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1385613879999994 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7681681285772809,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.301798347000016 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.4542217282421623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.201567952000005 sec\nrounds: 1"
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
          "id": "751dc266828e5ce4043d81160ce57db638aa0498",
          "message": "add min supported schema / settings versions",
          "timestamp": "2022-07-02T23:40:14+03:00",
          "tree_id": "8b4a80ac548eb351b2b993d09d1a21db720aa68b",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/751dc266828e5ce4043d81160ce57db638aa0498"
        },
        "date": 1656794522983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 19.38625434329388,
            "unit": "iter/sec",
            "range": "stddev: 0.0002968167720706074",
            "extra": "mean: 51.582940277780956 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 29.65545875804096,
            "unit": "iter/sec",
            "range": "stddev: 0.003717747162137975",
            "extra": "mean: 33.720604633332606 msec\nrounds: 30"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.6779183325021334,
            "unit": "iter/sec",
            "range": "stddev: 0.011860626089317768",
            "extra": "mean: 271.89293224999034 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 4.514669005195551,
            "unit": "iter/sec",
            "range": "stddev: 0.012354781189997886",
            "extra": "mean: 221.50018059999184 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 1.0105200783915325,
            "unit": "iter/sec",
            "range": "stddev: 0.009557364856061887",
            "extra": "mean: 989.5894414999873 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.6310181880738684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5847403749999955 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 1.006819540632125,
            "unit": "iter/sec",
            "range": "stddev: 0.014945395492140407",
            "extra": "mean: 993.2266505000058 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5987047575773046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6702723459999902 sec\nrounds: 1"
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
          "id": "b443175bf138517a70aa82c4143ef1c1ef745f60",
          "message": "minor tweaks for emphasis",
          "timestamp": "2022-07-02T23:47:16+03:00",
          "tree_id": "144d83d166d8e9aa9af0551f2d0c2fc368ea7f4e",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/b443175bf138517a70aa82c4143ef1c1ef745f60"
        },
        "date": 1656794954827,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 16.649110375647528,
            "unit": "iter/sec",
            "range": "stddev: 0.0029997015128066847",
            "extra": "mean: 60.06326929411731 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 24.47249159436497,
            "unit": "iter/sec",
            "range": "stddev: 0.005185215901370992",
            "extra": "mean: 40.86220629166585 msec\nrounds: 24"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.3170333100234437,
            "unit": "iter/sec",
            "range": "stddev: 0.012350352020581856",
            "extra": "mean: 301.4742109999891 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.4574586008813397,
            "unit": "iter/sec",
            "range": "stddev: 0.01510951196345719",
            "extra": "mean: 289.22978274999167 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.8883087782490467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.125734682000001 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5237297615874154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9093816570000115 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9389504589794663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0650189159999854 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.4879793470900313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0492670560000192 sec\nrounds: 1"
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
          "id": "e265dd2b21a793ed5288fb9301b0623001cd56d9",
          "message": "Version handling details (#19)\n\n* add details for how versions are managed for CLI\r\n\r\n* add min supported schema / settings versions\r\n\r\n* add semver comparison for settings\r\n\r\n* minor tweaks for emphasis",
          "timestamp": "2022-07-02T23:53:48+03:00",
          "tree_id": "144d83d166d8e9aa9af0551f2d0c2fc368ea7f4e",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/e265dd2b21a793ed5288fb9301b0623001cd56d9"
        },
        "date": 1656795340937,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 19.009035994894305,
            "unit": "iter/sec",
            "range": "stddev: 0.0004109902976632698",
            "extra": "mean: 52.60656038889048 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 28.7690941296171,
            "unit": "iter/sec",
            "range": "stddev: 0.0039916842238378655",
            "extra": "mean: 34.75952337931015 msec\nrounds: 29"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.5749134832730283,
            "unit": "iter/sec",
            "range": "stddev: 0.011210645067292108",
            "extra": "mean: 279.727049249999 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 4.263719503701495,
            "unit": "iter/sec",
            "range": "stddev: 0.010867322675822348",
            "extra": "mean: 234.5370043999992 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9967996719827479,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0032106029999852 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.605666589477296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6510734079999736 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9960581397542388,
            "unit": "iter/sec",
            "range": "stddev: 0.0013734856259884744",
            "extra": "mean: 1.0039574600000094 sec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5771391066389998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7326845270000035 sec\nrounds: 1"
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
          "id": "1dc9391358b3f4698ab576bfb9de09977e3ca367",
          "message": "release v0.1.5",
          "timestamp": "2022-07-03T00:26:37+03:00",
          "tree_id": "f7086d67ac946e649f4da2d357d931e733faeca4",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/1dc9391358b3f4698ab576bfb9de09977e3ca367"
        },
        "date": 1656797357248,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.13325602630757,
            "unit": "iter/sec",
            "range": "stddev: 0.003375809459415039",
            "extra": "mean: 70.75510399999867 msec\nrounds: 12"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 19.913459315396096,
            "unit": "iter/sec",
            "range": "stddev: 0.004831802513499231",
            "extra": "mean: 50.21729194117717 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.7762257519063724,
            "unit": "iter/sec",
            "range": "stddev: 0.003704796267532995",
            "extra": "mean: 360.20125500000216 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 2.969551608301045,
            "unit": "iter/sec",
            "range": "stddev: 0.013012034485440744",
            "extra": "mean: 336.75117724999734 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7792615947166445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2832661160000072 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.45021952352796074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.221138683999996 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7958266208972218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2565551010000036 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.42640667930517806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3451790240000037 sec\nrounds: 1"
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
          "id": "471eda26df14ee6ef35347248edd37692b50855a",
          "message": "bump to v0.1.6",
          "timestamp": "2022-07-03T13:13:46+03:00",
          "tree_id": "821be024b0639d8fcb7b1063404bacd9fae63e6c",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/471eda26df14ee6ef35347248edd37692b50855a"
        },
        "date": 1656843342940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.886711338317994,
            "unit": "iter/sec",
            "range": "stddev: 0.0009976614879091022",
            "extra": "mean: 55.9074265294224 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 26.54856068128772,
            "unit": "iter/sec",
            "range": "stddev: 0.005602782910562689",
            "extra": "mean: 37.66682540740644 msec\nrounds: 27"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.2658858318475272,
            "unit": "iter/sec",
            "range": "stddev: 0.017465591968462355",
            "extra": "mean: 306.19563924997806 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.818273550641732,
            "unit": "iter/sec",
            "range": "stddev: 0.014278143316004367",
            "extra": "mean: 261.8984697500082 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9231301331499138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.083270889000005 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5597111527758778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.786635830000023 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9338831499403929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0707977759999494 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5324409937483168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8781423890000042 sec\nrounds: 1"
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
          "id": "b61746b0f483be2d552da475f423a9452eae0a60",
          "message": "add max schema / settings versions",
          "timestamp": "2022-07-04T08:13:50+03:00",
          "tree_id": "02bc8d137ad52f24eaac1333e6a4c75fa32b15c8",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/b61746b0f483be2d552da475f423a9452eae0a60"
        },
        "date": 1656911742906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 18.137592252808354,
            "unit": "iter/sec",
            "range": "stddev: 0.00041778277909074673",
            "extra": "mean: 55.13410964705991 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 27.31045763547139,
            "unit": "iter/sec",
            "range": "stddev: 0.005115006060477055",
            "extra": "mean: 36.616010370371065 msec\nrounds: 27"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.3168889855043813,
            "unit": "iter/sec",
            "range": "stddev: 0.012694672921917135",
            "extra": "mean: 301.487328749996 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.8758058140631646,
            "unit": "iter/sec",
            "range": "stddev: 0.011749829587150243",
            "extra": "mean: 258.01086224999995 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9266222001429044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.079188476000013 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5655925256373073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7680573110000068 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9448467149805163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0583727329999988 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5370390635539433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8620619390000002 sec\nrounds: 1"
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
          "id": "21636731b39c7beabdcd21e72ee5b0c5dd96c59b",
          "message": "Update DEVELOPMENT.md",
          "timestamp": "2022-07-04T08:17:16+03:00",
          "tree_id": "de2600066cc597c0d8b74452d21b2aa0fd0b30c0",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/21636731b39c7beabdcd21e72ee5b0c5dd96c59b"
        },
        "date": 1656911937372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 18.44315230441777,
            "unit": "iter/sec",
            "range": "stddev: 0.00045358504804207986",
            "extra": "mean: 54.22066594117242 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 27.151813933375436,
            "unit": "iter/sec",
            "range": "stddev: 0.005842775441375351",
            "extra": "mean: 36.82995185713115 msec\nrounds: 28"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.411691575671185,
            "unit": "iter/sec",
            "range": "stddev: 0.014777337247064499",
            "extra": "mean: 293.1097310000155 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.9645220755236292,
            "unit": "iter/sec",
            "range": "stddev: 0.019161440535849214",
            "extra": "mean: 252.23721320001002 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9418956160911311,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.061688772000025 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5781071038635593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7297832760000347 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9531383624190676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0491656189999503 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.545096274882264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8345383120000065 sec\nrounds: 1"
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
          "id": "f749d093156dfac6a507982cb20b3ce8e6aa27dd",
          "message": "fix schema version in sample schema",
          "timestamp": "2022-07-04T08:18:20+03:00",
          "tree_id": "0521a417c1ccf721d4e5751f7d0563ebb5fa03ba",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/f749d093156dfac6a507982cb20b3ce8e6aa27dd"
        },
        "date": 1656912002695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.960823579029036,
            "unit": "iter/sec",
            "range": "stddev: 0.0005950456912596397",
            "extra": "mean: 55.67673417646588 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 27.142926221604952,
            "unit": "iter/sec",
            "range": "stddev: 0.004881986448162255",
            "extra": "mean: 36.84201149999922 msec\nrounds: 28"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.331177339839439,
            "unit": "iter/sec",
            "range": "stddev: 0.01450232480211488",
            "extra": "mean: 300.1941649999935 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.8783367431361513,
            "unit": "iter/sec",
            "range": "stddev: 0.01364950843490567",
            "extra": "mean: 257.8424892500095 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9177105445922348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0896682030000306 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5669505198747298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7638223529999664 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9430076921222034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0604367370000318 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5436954955867744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8392648239999971 sec\nrounds: 1"
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
          "id": "a0b03d5a062c8966524c1466ccb5b8176cdadcaf",
          "message": "added type annotation for upload_queue",
          "timestamp": "2022-07-04T08:24:12+03:00",
          "tree_id": "204205b03217db8f751d6b808217c883804d1c9b",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/a0b03d5a062c8966524c1466ccb5b8176cdadcaf"
        },
        "date": 1656912405825,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 15.560814864311938,
            "unit": "iter/sec",
            "range": "stddev: 0.002112441255781013",
            "extra": "mean: 64.26398673333343 msec\nrounds: 15"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 21.656556925690698,
            "unit": "iter/sec",
            "range": "stddev: 0.005602366941720822",
            "extra": "mean: 46.1753917500026 msec\nrounds: 20"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.971870278979712,
            "unit": "iter/sec",
            "range": "stddev: 0.005277818703543926",
            "extra": "mean: 336.48844200000383 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.2769793354362684,
            "unit": "iter/sec",
            "range": "stddev: 0.009663033482152252",
            "extra": "mean: 305.15908025000374 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.8354233592919318,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1969978919999988 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4715536749823091,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.120649362000023 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7615751510189023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3130680520000055 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.47505802608136416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1050060099999826 sec\nrounds: 1"
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
          "id": "4f12c9841e928fb8e369c152482a79c551d58287",
          "message": "ignore missing stubs for semver",
          "timestamp": "2022-07-11T22:50:59+03:00",
          "tree_id": "faa04d7dbfb4cf9acd811836b7529dd732deea08",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/4f12c9841e928fb8e369c152482a79c551d58287"
        },
        "date": 1657569218236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.564782821833665,
            "unit": "iter/sec",
            "range": "stddev: 0.0013052061463692418",
            "extra": "mean: 68.65876492857329 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 20.581056197986285,
            "unit": "iter/sec",
            "range": "stddev: 0.005558161386578132",
            "extra": "mean: 48.58837128571871 msec\nrounds: 21"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.7436743953484495,
            "unit": "iter/sec",
            "range": "stddev: 0.006812069830516384",
            "extra": "mean: 364.4747356666566 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 2.9817938436579072,
            "unit": "iter/sec",
            "range": "stddev: 0.012336407251773209",
            "extra": "mean: 335.36859099999106 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7916655715952616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.263159642000005 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4475862919370239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2342060469999865 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.8023561618756473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2463293079999858 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.42329630714959565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3624113490000127 sec\nrounds: 1"
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
          "id": "2cb741b346c65c0bb974a106d190492fb3eacbb7",
          "message": "fixed bug where upload resume did not work for upload with schema",
          "timestamp": "2022-07-12T17:20:55+03:00",
          "tree_id": "acdcf69c1da0bc8ce696b2b718de4c59ad36d767",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/2cb741b346c65c0bb974a106d190492fb3eacbb7"
        },
        "date": 1657635773007,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 16.97741751462004,
            "unit": "iter/sec",
            "range": "stddev: 0.0005273453956517813",
            "extra": "mean: 58.90177343750036 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 25.508339159748072,
            "unit": "iter/sec",
            "range": "stddev: 0.005581092509249257",
            "extra": "mean: 39.20286592307785 msec\nrounds: 26"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.0885239864030303,
            "unit": "iter/sec",
            "range": "stddev: 0.018881569032799833",
            "extra": "mean: 323.7792565000035 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.6106385913519445,
            "unit": "iter/sec",
            "range": "stddev: 0.0178167660753199",
            "extra": "mean: 276.95931750000113 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.907556462951472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.101859819000012 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5645073742512787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7714560440000042 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9096029295414252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.099380803999992 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5328976007284685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8765331250000088 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "committer": {
            "email": "ryan@cleanlab.ai",
            "name": "Ryan Singman"
          },
          "distinct": true,
          "id": "aafc0d822eec32c2783aacc9c9a5068c0d55848b",
          "message": "submit upload tasks to event loop as it iterates, rather than post iteration",
          "timestamp": "2022-07-12T16:22:08-06:00",
          "tree_id": "125e88eefc3d1a8ab81c86288db4589e873bb708",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/aafc0d822eec32c2783aacc9c9a5068c0d55848b"
        },
        "date": 1657664684101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 19.177053034941444,
            "unit": "iter/sec",
            "range": "stddev: 0.0006973654638943066",
            "extra": "mean: 52.145655444449964 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 28.51861265370796,
            "unit": "iter/sec",
            "range": "stddev: 0.006365225055771929",
            "extra": "mean: 35.064819321425894 msec\nrounds: 28"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.3664589329500494,
            "unit": "iter/sec",
            "range": "stddev: 0.016837692453034854",
            "extra": "mean: 297.04803174999483 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.8346841914340986,
            "unit": "iter/sec",
            "range": "stddev: 0.019702544887039566",
            "extra": "mean: 260.77766775000555 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 1.023643944076212,
            "unit": "iter/sec",
            "range": "stddev: 0.013821012271416425",
            "extra": "mean: 976.902179499973 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.6026166297430718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6594298109999954 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9926077646022607,
            "unit": "iter/sec",
            "range": "stddev: 0.03945491295270994",
            "extra": "mean: 1.007447287500014 sec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5910637539167878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.691864867999982 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43079376+ryansingman@users.noreply.github.com",
            "name": "ryansingman",
            "username": "ryansingman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "257321280248623d35e4d453f29e93f2cd349d1a",
          "message": "Submit upload tasks to event loop as it iterates, rather than post iteration (#20)\n\nCo-authored-by: Ryan Singman <ryan@cleanlab.ai>",
          "timestamp": "2022-07-13T13:26:00+03:00",
          "tree_id": "125e88eefc3d1a8ab81c86288db4589e873bb708",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/257321280248623d35e4d453f29e93f2cd349d1a"
        },
        "date": 1657708114646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.5063661809685,
            "unit": "iter/sec",
            "range": "stddev: 0.001794829566127287",
            "extra": "mean: 68.93525142857219 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 20.46059545816192,
            "unit": "iter/sec",
            "range": "stddev: 0.006886971368021236",
            "extra": "mean: 48.87443290909165 msec\nrounds: 22"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.912811995698494,
            "unit": "iter/sec",
            "range": "stddev: 0.0020367605571228148",
            "extra": "mean: 343.31086299999924 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.073468857286916,
            "unit": "iter/sec",
            "range": "stddev: 0.014299650533272043",
            "extra": "mean: 325.36526200000066 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.8084175357055502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2369845479999952 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4625451369468268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1619511699999947 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.810330319753502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2340646469999967 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.4319717027156257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3149664520000215 sec\nrounds: 1"
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
          "id": "21c8dc113ea8ae4a0b8bfcc1bc426ff9c57d5f4c",
          "message": "asyncio.sleep(0)",
          "timestamp": "2022-07-13T16:42:13+03:00",
          "tree_id": "caeb7068813ca986fb7f833b4fb51ec56088a221",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/21c8dc113ea8ae4a0b8bfcc1bc426ff9c57d5f4c"
        },
        "date": 1657719837797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.635183291101225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006599784703676275",
            "extra": "mean: 56.704825999999876 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 27.042459585255344,
            "unit": "iter/sec",
            "range": "stddev: 0.006227409647116903",
            "extra": "mean: 36.9788848846146 msec\nrounds: 26"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.2019146860670493,
            "unit": "iter/sec",
            "range": "stddev: 0.02029821358530353",
            "extra": "mean: 312.3131307499989 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.63733493044346,
            "unit": "iter/sec",
            "range": "stddev: 0.015295785015184402",
            "extra": "mean: 274.92656549999947 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9257638786736654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0801890449999973 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5787427487440103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7278834199999977 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9340179931804112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.070643185999998 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5302587769944027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8858716599999923 sec\nrounds: 1"
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
          "id": "47e1f51f8cb0864fbd1d88d3829f6e88a9967f0e",
          "message": "remove unused upload_rows() -- sync version",
          "timestamp": "2022-07-13T16:41:40+03:00",
          "tree_id": "df561b99feeb58709bdce4613b0b3d2127a96506",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/47e1f51f8cb0864fbd1d88d3829f6e88a9967f0e"
        },
        "date": 1657719878104,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.815910251481109,
            "unit": "iter/sec",
            "range": "stddev: 0.00570017511637332",
            "extra": "mean: 67.49500928571247 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 22.706930045732516,
            "unit": "iter/sec",
            "range": "stddev: 0.004979262014157983",
            "extra": "mean: 44.03941871428531 msec\nrounds: 21"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.063011031611885,
            "unit": "iter/sec",
            "range": "stddev: 0.010635896539873811",
            "extra": "mean: 326.476134 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.2852492508217073,
            "unit": "iter/sec",
            "range": "stddev: 0.01786910987962719",
            "extra": "mean: 304.39090724999926 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.8208000079125125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2183235749999994 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4480258026160026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2320143040000033 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.8306547659035249,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2038695749999988 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.46563399606917344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1476095140000098 sec\nrounds: 1"
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
          "id": "a3b07f3e46af2266d6ad4035c90c21314651e2dd",
          "message": "asyncio.sleep(0) (#21)",
          "timestamp": "2022-07-13T17:06:19+03:00",
          "tree_id": "caeb7068813ca986fb7f833b4fb51ec56088a221",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/a3b07f3e46af2266d6ad4035c90c21314651e2dd"
        },
        "date": 1657721289959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.541927973289166,
            "unit": "iter/sec",
            "range": "stddev: 0.000957304197770495",
            "extra": "mean: 57.00627670588349 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 26.449805870817226,
            "unit": "iter/sec",
            "range": "stddev: 0.005309200286957592",
            "extra": "mean: 37.807460851851715 msec\nrounds: 27"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.2157869309106992,
            "unit": "iter/sec",
            "range": "stddev: 0.014005595857965387",
            "extra": "mean: 310.9658760000009 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.779964730131863,
            "unit": "iter/sec",
            "range": "stddev: 0.012513673540781426",
            "extra": "mean: 264.55273300000215 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9266965229937696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0791019230000103 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5644567006182198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7716150749999997 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9339279276386899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0707464360000074 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5418120997350234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.845658302000004 sec\nrounds: 1"
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
          "id": "fc9dcbd38fa099d63b28190f71adae9521657782",
          "message": "fix check that user is not resuming upload",
          "timestamp": "2022-07-13T17:06:58+03:00",
          "tree_id": "bca13a3ff08e8cb49067eed835643cc0096b1539",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/fc9dcbd38fa099d63b28190f71adae9521657782"
        },
        "date": 1657721344755,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.66064240580542,
            "unit": "iter/sec",
            "range": "stddev: 0.0006646921539603815",
            "extra": "mean: 56.62308182352864 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 26.466612518966162,
            "unit": "iter/sec",
            "range": "stddev: 0.005439395628536239",
            "extra": "mean: 37.78345261538071 msec\nrounds: 26"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.2510075860003487,
            "unit": "iter/sec",
            "range": "stddev: 0.014691008788944948",
            "extra": "mean: 307.5969444999913 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.735681130723943,
            "unit": "iter/sec",
            "range": "stddev: 0.01660672333608799",
            "extra": "mean: 267.6888002499851 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9246241031322093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0815205839999749 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5679418766147972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.760743557000012 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9322619041180017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.072659941999973 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5300727380335136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8865335419999951 sec\nrounds: 1"
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
          "id": "60d7074064213cf1f04726d3fb824ac0d571bc65",
          "message": "rewrite async upload",
          "timestamp": "2022-07-15T15:22:39+03:00",
          "tree_id": "97914a14087d660dee32a46b9ad720fdda188f83",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/60d7074064213cf1f04726d3fb824ac0d571bc65"
        },
        "date": 1657887887506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 18.766909885054,
            "unit": "iter/sec",
            "range": "stddev: 0.0003408895598628586",
            "extra": "mean: 53.285277444445 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 28.90484983023146,
            "unit": "iter/sec",
            "range": "stddev: 0.004594319952701209",
            "extra": "mean: 34.59627037930861 msec\nrounds: 29"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.501311056734321,
            "unit": "iter/sec",
            "range": "stddev: 0.009008623840643704",
            "extra": "mean: 285.6073007499944 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 4.261402273481139,
            "unit": "iter/sec",
            "range": "stddev: 0.012313299242200468",
            "extra": "mean: 234.6645389999992 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9883180226613777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0118200590000015 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.6237805799212987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6031278179999902 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9920647784014491,
            "unit": "iter/sec",
            "range": "stddev: 0.01005389028808023",
            "extra": "mean: 1.0079986930000047 sec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.6018131909266861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.661645199999981 sec\nrounds: 1"
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
          "id": "0a1d5518c069ef855397e700ca99714c5bf43c36",
          "message": "type fixes",
          "timestamp": "2022-07-15T16:31:57+03:00",
          "tree_id": "31aceb43ddb5b866e3fca5ec4b911e5b60eed274",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/0a1d5518c069ef855397e700ca99714c5bf43c36"
        },
        "date": 1657892020356,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 18.011981417467613,
            "unit": "iter/sec",
            "range": "stddev: 0.0016000919074088036",
            "extra": "mean: 55.5186004705858 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 26.671967605920624,
            "unit": "iter/sec",
            "range": "stddev: 0.004867680045919641",
            "extra": "mean: 37.49254703571329 msec\nrounds: 28"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.42827950567401,
            "unit": "iter/sec",
            "range": "stddev: 0.012672395604462742",
            "extra": "mean: 291.69150249999734 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.9600831945998856,
            "unit": "iter/sec",
            "range": "stddev: 0.015844065843089842",
            "extra": "mean: 252.51994740000328 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9360554964164484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0683127270000057 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5699209364528656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7546293460000015 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9587391322545077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0430365950000038 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5542019631361997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8043963510000083 sec\nrounds: 1"
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
          "id": "3fb151e23dde401b3a15952eaca4614e3fada770",
          "message": "comment out measurements code",
          "timestamp": "2022-07-15T16:33:59+03:00",
          "tree_id": "e02899d9ddee178000c7aa448ef08ba4a76d2600",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/3fb151e23dde401b3a15952eaca4614e3fada770"
        },
        "date": 1657892141258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 15.325805922173656,
            "unit": "iter/sec",
            "range": "stddev: 0.0011297474704350635",
            "extra": "mean: 65.24942342857035 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 23.082369319504718,
            "unit": "iter/sec",
            "range": "stddev: 0.005873655299380045",
            "extra": "mean: 43.32310891304365 msec\nrounds: 23"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.8843658176364575,
            "unit": "iter/sec",
            "range": "stddev: 0.0028262185342816455",
            "extra": "mean: 346.69666166666485 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.283574189615792,
            "unit": "iter/sec",
            "range": "stddev: 0.01480586369651522",
            "extra": "mean: 304.54618725000057 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7742667118958206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2915446119999956 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4893738181487698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0434276680000067 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.8051212098387699,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.242049007999995 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.4627803172837428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.160852487999989 sec\nrounds: 1"
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
          "id": "18cefc9601db242b156603523dd93ae20a21be87",
          "message": "fixing type for mypy",
          "timestamp": "2022-07-15T16:36:24+03:00",
          "tree_id": "e3a8c2d0e60758d0b19d9f174073db3005a82f00",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/18cefc9601db242b156603523dd93ae20a21be87"
        },
        "date": 1657892314973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 18.516630050854307,
            "unit": "iter/sec",
            "range": "stddev: 0.0003642484558951607",
            "extra": "mean: 54.00550733333157 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 28.15057825947755,
            "unit": "iter/sec",
            "range": "stddev: 0.0039017874483799463",
            "extra": "mean: 35.523248964284655 msec\nrounds: 28"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.4440830798630917,
            "unit": "iter/sec",
            "range": "stddev: 0.011417825726985771",
            "extra": "mean: 290.3530422500005 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 4.030692078882862,
            "unit": "iter/sec",
            "range": "stddev: 0.012902407157809772",
            "extra": "mean: 248.096351800001 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9805504340453093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.019835354999998 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5915123207393748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6905818609999983 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9629643747400652,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.038460016000002 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.561920365411152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7796115989999919 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukemainwaring@Lukes-MBP.lan",
            "name": "Luke Mainwaring"
          },
          "committer": {
            "email": "lukemainwaring@Lukes-MBP.lan",
            "name": "Luke Mainwaring"
          },
          "distinct": true,
          "id": "ff17d089dd1c2fe6a0b9363fa0f8b21ca1a9e3f5",
          "message": "increase parsing speed of datetime with Timestamp",
          "timestamp": "2022-07-15T16:41:23-04:00",
          "tree_id": "70cfe9624947dd556ce11c2440358a6fec20cfe7",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/ff17d089dd1c2fe6a0b9363fa0f8b21ca1a9e3f5"
        },
        "date": 1657917838542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 18.29569376935679,
            "unit": "iter/sec",
            "range": "stddev: 0.00040321973386468735",
            "extra": "mean: 54.6576704117603 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 27.407938217584952,
            "unit": "iter/sec",
            "range": "stddev: 0.004952238925638582",
            "extra": "mean: 36.48577985185326 msec\nrounds: 27"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.4051292723830016,
            "unit": "iter/sec",
            "range": "stddev: 0.01320045921635753",
            "extra": "mean: 293.67460675000245 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.901952234340497,
            "unit": "iter/sec",
            "range": "stddev: 0.016814278052990107",
            "extra": "mean: 256.28196860001253 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.938032221014691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0660614610000039 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5744319593859984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7408502150000231 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.949664850311433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0530030669999633 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5576053465756663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7933830910000097 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukemain@sas.upenn.edu",
            "name": "Luke Mainwaring",
            "username": "LukeMainwaring"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86800c0aa2341c5eed8dc5328bc2a6a6f38546f4",
          "message": "increase parsing speed of datetime with Timestamp (#23)\n\nCo-authored-by: Luke Mainwaring <lukemainwaring@Lukes-MBP.lan>",
          "timestamp": "2022-07-16T10:13:47+03:00",
          "tree_id": "70cfe9624947dd556ce11c2440358a6fec20cfe7",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/86800c0aa2341c5eed8dc5328bc2a6a6f38546f4"
        },
        "date": 1657955747163,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 18.205823290006013,
            "unit": "iter/sec",
            "range": "stddev: 0.00044837418856439064",
            "extra": "mean: 54.927480294118006 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 27.470981069843454,
            "unit": "iter/sec",
            "range": "stddev: 0.0055114843104746665",
            "extra": "mean: 36.40204903703858 msec\nrounds: 27"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.3261757274699564,
            "unit": "iter/sec",
            "range": "stddev: 0.014175094726173615",
            "extra": "mean: 300.64557074999954 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.883052168547784,
            "unit": "iter/sec",
            "range": "stddev: 0.013872752187111844",
            "extra": "mean: 257.5293754999919 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.945090324895512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0580999230000145 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5706209738467674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7524767680000082 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9497891072594806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0528653069999905 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5535315970999498,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8065816030000406 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@anishathalye.com",
            "name": "Anish Athalye",
            "username": "anishathalye"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c1d468eb0650cb029266f73fac6662555def8ff",
          "message": "Allow overriding API URL with an env var (#25)\n\n* Allow overriding API URL with an env var\r\n\r\nWith this patch, rather than modifying the `api_service.py` file for\r\nlocal development, a developer can run the following in their shell:\r\n\r\n    export CLEANLAB_API_URL=\"http://localhost:8500/api/cli/v0\"\r\n\r\n* add instructions for exporting CLEANLAB_API_URL\r\n\r\nCo-authored-by: calebchiam <calebchiam@gmail.com>",
          "timestamp": "2022-07-20T22:57:47+03:00",
          "tree_id": "f19787a2bce4abd390350a0af54a00a74c77fbed",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/7c1d468eb0650cb029266f73fac6662555def8ff"
        },
        "date": 1658347169989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.287063598600177,
            "unit": "iter/sec",
            "range": "stddev: 0.0016271867310526248",
            "extra": "mean: 57.84672418750026 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 26.293034722883878,
            "unit": "iter/sec",
            "range": "stddev: 0.005901910370843158",
            "extra": "mean: 38.0328862962958 msec\nrounds: 27"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.125870801669001,
            "unit": "iter/sec",
            "range": "stddev: 0.0175392535050548",
            "extra": "mean: 319.9108547500007 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.722143821104293,
            "unit": "iter/sec",
            "range": "stddev: 0.01553612485168268",
            "extra": "mean: 268.6623752500026 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9289308995493528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.076506337000012 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5610104354914373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7824980369999963 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9236613537410061,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.082647872999999 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5438794091777495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8386428740000014 sec\nrounds: 1"
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
          "id": "5ee454b9d463ec04c021268176c09f2fcbf5b8ee",
          "message": "Update README.md",
          "timestamp": "2022-07-20T23:31:29+03:00",
          "tree_id": "b43c5f26246ca962a8136905901a21e7e6274b1f",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/5ee454b9d463ec04c021268176c09f2fcbf5b8ee"
        },
        "date": 1658349232484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 13.467299955744574,
            "unit": "iter/sec",
            "range": "stddev: 0.0034198987066120885",
            "extra": "mean: 74.25393384614136 msec\nrounds: 13"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 19.665322290825568,
            "unit": "iter/sec",
            "range": "stddev: 0.0059376065208924965",
            "extra": "mean: 50.85093370000493 msec\nrounds: 20"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.676307673725536,
            "unit": "iter/sec",
            "range": "stddev: 0.005338166933527958",
            "extra": "mean: 373.6491173333434 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 2.659005872209703,
            "unit": "iter/sec",
            "range": "stddev: 0.036233138232275",
            "extra": "mean: 376.0804030000031 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7417576448674869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.348149233000015 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4400965111580556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2722288740000067 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7543338831336018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3256729180000093 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.41359078339409283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4178488499999844 sec\nrounds: 1"
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
          "id": "2b5a89e4ee20574a5e957476ded20af09ac17c36",
          "message": "v0.1.7",
          "timestamp": "2022-07-21T00:30:59+03:00",
          "tree_id": "eb793632db926dd3a7eabdbbdf68973db6c15368",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/2b5a89e4ee20574a5e957476ded20af09ac17c36"
        },
        "date": 1658352792347,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 12.598920191712883,
            "unit": "iter/sec",
            "range": "stddev: 0.0038979806206570276",
            "extra": "mean: 79.37188146153701 msec\nrounds: 13"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 19.327781331845294,
            "unit": "iter/sec",
            "range": "stddev: 0.008432063850413415",
            "extra": "mean: 51.73899594737014 msec\nrounds: 19"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.560511778980275,
            "unit": "iter/sec",
            "range": "stddev: 0.007338764148587573",
            "extra": "mean: 390.5469243333262 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 2.855375817336282,
            "unit": "iter/sec",
            "range": "stddev: 0.017072304129408813",
            "extra": "mean: 350.21659633332547 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.6992469560598317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4301099079999915 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.41008639878227254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4385105259999875 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7145612593153087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3994601400000306 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.41025865216215146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4374866800000063 sec\nrounds: 1"
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
          "id": "227bda7a5b35bf7502b80205adae530a004cb363",
          "message": "fix instructions",
          "timestamp": "2022-07-21T00:38:02+03:00",
          "tree_id": "ca786a3c67e0f71d9aed454ee8c4231485834790",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/227bda7a5b35bf7502b80205adae530a004cb363"
        },
        "date": 1658353257046,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 18.953835589461523,
            "unit": "iter/sec",
            "range": "stddev: 0.0003792820325193192",
            "extra": "mean: 52.759769666674096 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 28.936362997549097,
            "unit": "iter/sec",
            "range": "stddev: 0.0036655555626001835",
            "extra": "mean: 34.558593285711126 msec\nrounds: 28"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.5611698458615266,
            "unit": "iter/sec",
            "range": "stddev: 0.009521324468918166",
            "extra": "mean: 280.80660099998056 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 4.314885560208026,
            "unit": "iter/sec",
            "range": "stddev: 0.012074081719379487",
            "extra": "mean: 231.7558568000095 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9863999670526392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0137875440000244 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5970237328098064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6749752900000203 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9601568125033638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0414965420000044 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5748442750882705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7396015639999973 sec\nrounds: 1"
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
          "id": "227bda7a5b35bf7502b80205adae530a004cb363",
          "message": "fix instructions",
          "timestamp": "2022-07-21T00:38:02+03:00",
          "tree_id": "ca786a3c67e0f71d9aed454ee8c4231485834790",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/227bda7a5b35bf7502b80205adae530a004cb363"
        },
        "date": 1658353446319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 20.66248766113685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006462711117046118",
            "extra": "mean: 48.396883105264 msec\nrounds: 19"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 32.51005437548813,
            "unit": "iter/sec",
            "range": "stddev: 0.0003962322984536367",
            "extra": "mean: 30.759714777775887 msec\nrounds: 18"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.792598644568647,
            "unit": "iter/sec",
            "range": "stddev: 0.011343025199696275",
            "extra": "mean: 263.6714542500016 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 4.3134639193758195,
            "unit": "iter/sec",
            "range": "stddev: 0.016224862502346588",
            "extra": "mean: 231.83223940000062 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 1.0746232557715354,
            "unit": "iter/sec",
            "range": "stddev: 0.0023516497709324233",
            "extra": "mean: 930.5586815000026 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.6426243255721944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5561191200000053 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 1.0779860043751122,
            "unit": "iter/sec",
            "range": "stddev: 0.01642844448544307",
            "extra": "mean: 927.6558285000008 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.6033062876232597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6575328659999968 sec\nrounds: 1"
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
          "id": "0f2ca3ac4244a52b1251038b04e16a118e6b319b",
          "message": "cast str value to int if possible",
          "timestamp": "2022-07-22T01:16:30+03:00",
          "tree_id": "84236c458b8286edeb296e4e29d4632135640847",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/0f2ca3ac4244a52b1251038b04e16a118e6b319b"
        },
        "date": 1658441948782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 12.841457883137599,
            "unit": "iter/sec",
            "range": "stddev: 0.004211544043452555",
            "extra": "mean: 77.87277808332978 msec\nrounds: 12"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 17.860528585556498,
            "unit": "iter/sec",
            "range": "stddev: 0.008134812988253966",
            "extra": "mean: 55.98938436842697 msec\nrounds: 19"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.522620260194504,
            "unit": "iter/sec",
            "range": "stddev: 0.008829690157582806",
            "extra": "mean: 396.4132120000083 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 2.75446318524061,
            "unit": "iter/sec",
            "range": "stddev: 0.018613179677604362",
            "extra": "mean: 363.04714666667337 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.692186203299462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4446979660000068 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4111261010976567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4323437440000077 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.704054990637479,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4203435999999954 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.4004667755837287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4970860529999754 sec\nrounds: 1"
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
          "id": "c1c20bfb91cbfc5dab0986fa6159bf32317a45e3",
          "message": "remove recommended editors",
          "timestamp": "2022-07-22T10:07:47+03:00",
          "tree_id": "10740c8beb86679ec97b87bc6f58c0b66f3467a3",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/c1c20bfb91cbfc5dab0986fa6159bf32317a45e3"
        },
        "date": 1658473778998,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.79478408312007,
            "unit": "iter/sec",
            "range": "stddev: 0.0005250526114164912",
            "extra": "mean: 56.19624241176315 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 26.49966174163196,
            "unit": "iter/sec",
            "range": "stddev: 0.005651966025317981",
            "extra": "mean: 37.73633074074159 msec\nrounds: 27"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.243698438458566,
            "unit": "iter/sec",
            "range": "stddev: 0.015396986631204358",
            "extra": "mean: 308.29006424999505 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.7883992981573296,
            "unit": "iter/sec",
            "range": "stddev: 0.01404153418855827",
            "extra": "mean: 263.96372750000194 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9292020151916275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0761922420000047 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5577098934435705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7930469079999938 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9453574694805104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0578009190000017 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5389026699684357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8556226489999972 sec\nrounds: 1"
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
          "id": "0f2ca3ac4244a52b1251038b04e16a118e6b319b",
          "message": "cast str value to int if possible",
          "timestamp": "2022-07-22T01:16:30+03:00",
          "tree_id": "84236c458b8286edeb296e4e29d4632135640847",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/0f2ca3ac4244a52b1251038b04e16a118e6b319b"
        },
        "date": 1658473774543,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 24.420307037620677,
            "unit": "iter/sec",
            "range": "stddev: 0.003980545673550963",
            "extra": "mean: 40.94952608333102 msec\nrounds: 24"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 37.93461716518153,
            "unit": "iter/sec",
            "range": "stddev: 0.0031448104255273356",
            "extra": "mean: 26.361146486482927 msec\nrounds: 37"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 4.707406356365597,
            "unit": "iter/sec",
            "range": "stddev: 0.0013494914217272458",
            "extra": "mean: 212.43120400000066 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 5.297447429935187,
            "unit": "iter/sec",
            "range": "stddev: 0.009960458780321351",
            "extra": "mean: 188.77016020001065 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 1.3339739529806802,
            "unit": "iter/sec",
            "range": "stddev: 0.001318285335117451",
            "extra": "mean: 749.6398244999938 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.7925476490940438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2617537900000002 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 1.1310370008993837,
            "unit": "iter/sec",
            "range": "stddev: 0.1554898410329254",
            "extra": "mean: 884.1443730000123 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.7688701431103623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3006097439999849 sec\nrounds: 1"
          }
        ]
      }
    ]
  }
}