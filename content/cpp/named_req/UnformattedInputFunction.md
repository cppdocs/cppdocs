---
title: "C++ named requirements: UnformattedInputFunction"
source_path: "cpp/named_req/UnformattedInputFunction"
category: "named_req"
---

An UnformattedInputFunction is a stream input function that performs the following:

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 61 | C++98 | it was unclear whether throwing an exception because ofsetting eofbit and/or failbit will result in setting badbit | exceptions thrown from basic_ios::clearare not caught or rethrown |
| LWG 160 | C++98 | the process of determining whether the exception caughtis rethrown mentioned a non-existing function exception() | corrected to exceptions() |
| LWG 243 | C++98 | the behavior when sentry::operator bool() returns falseor the sentry object fails to be constructed was not specified | specified |
