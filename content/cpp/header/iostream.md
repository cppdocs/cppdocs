---
title: "Standard library header <iostream>"
source_path: "cpp/header/iostream"
category: "header"
---

This header is part of the [Input/output](/cpp/io/) library.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 155 | C++98 | the type of the static object was std::basic_ios::Init(not strictly wrong, but the wording was misleading) | corrected to std::ios_base::Init |
| LWG 1123 | C++98 | including <iostream> did not guarantee theconstruction of std::ios_base::Init objects | guarantees |
