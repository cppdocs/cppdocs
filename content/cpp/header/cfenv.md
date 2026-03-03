---
title: "Standard library header <cfenv> (C++11)"
source_path: "cpp/header/cfenv"
category: "header"
---

This header was originally in the C standard library as [<fenv.h>](/c/numeric/fenv/).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3905 | C++11 | std::fexcept_t must be an integer type | it is an object type |
