---
title: "C++ named requirements: BasicFormatter (since C++20)"
source_path: "cpp/named_req/BasicFormatter"
category: "named_req"
since: "C++20"
---

BasicFormatter is a type that abstracts formatting operations for a given formatting argument type and character type. Specializations of [std::formatter](/cpp/utility/format/formatter/) are required to meet the requirements of BasicFormatter.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3892 | C++20 | the value of pc.begin() was unclear if format-spec is not present | made clear |
