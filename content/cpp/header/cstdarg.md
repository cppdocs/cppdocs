---
title: "Standard library header <cstdarg>"
source_path: "cpp/header/cstdarg"
category: "header"
---

This header was originally in the C standard library as [<stdarg.h>](/c/variadic/).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2645 | C++98 | C++ defines "default argument promotions", but its C definition was used | the C++ definition overrides the C definition |
