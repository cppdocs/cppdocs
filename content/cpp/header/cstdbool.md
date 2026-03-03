---
title: "Standard library header <cstdbool> (C++11)(until C++20), <stdbool.h> (C++11)"
source_path: "cpp/header/cstdbool"
category: "header"
---

This header was originally in the C standard library as [<stdbool.h>](/c/types/).

## Notes
<cstdbool> is deprecated in C++17 and removed in C++20. Corresponding <stdbool.h> is still available in C++20.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3827 | C++11 | C programs no longer need the compatibility macro__bool_true_false_are_defined since C23 | deprecated thismacro in C++ |
