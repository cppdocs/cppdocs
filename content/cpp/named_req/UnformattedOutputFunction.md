---
title: "C++ named requirements: UnformattedOutputFunction"
source_path: "cpp/named_req/UnformattedOutputFunction"
category: "named_req"
---

A UnformattedOutputFunction is a stream output function that performs the following:

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 63 | C++98 | the exception-handling policy was missing | added |
| LWG 160 | C++98 | the process of determining whether the exception caughtis rethrown mentioned a non-existing function exception() | corrected to exceptions() |
| LWG 165 | C++98 | the only virtual member allowed to becalled on rdbuf() was overflow() | also allowedxsputn() and sync() |
