---
title: "C++ named requirements: FormattedOutputFunction"
source_path: "cpp/named_req/FormattedOutputFunction"
category: "named_req"
---

[1 Requirements](#Requirements)

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 160 | C++98 | the process of determining whether the exception caughtis rethrown mentioned a non-existing function exception() | corrected to exceptions() |
| LWG 165 | C++98 | the only virtual member allowed to becalled on rdbuf() was overflow() | also allowedxsputn() and sync() |
