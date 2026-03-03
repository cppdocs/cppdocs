---
title: "Standard library header <cstdalign> (C++11)(until C++20), <stdalign.h> (C++11)"
source_path: "cpp/header/cstdalign"
category: "header"
---

This header was originally in the C standard library as [<stdalign.h>](/c/types/).

## Notes
<cstdalign> is deprecated in C++17 and removed in C++20. Corresponding [<stdalign.h>](/c/types/) is still available in C++20.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3827 | C++11 | C programs no longer need the compatibilitymacro __alignas_is_defined since C23 | deprecated thismacro in C++ |
