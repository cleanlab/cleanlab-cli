window.BENCHMARK_DATA = {
  "lastUpdate": 1656454838595,
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
      }
    ]
  }
}