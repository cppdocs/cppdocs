---
title: "Standard library header <cerrno>"
source_path: "cpp/header/cerrno"
category: "header"
---

This header was originally in the C standard library as [<errno.h>](/c/error/).

## Notes
Although the header <cerrno> is based on the C standard library header [<errno.h>](/c/error/), the majority of the macros defined by <cerrno> were adopted by C++ from the POSIX standard, rather than the C standard library.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 288 | C++98 | the macro EILSEQ was not defined in <cerrno> | defined |

## See also
- [Description for the error number values](/cpp/error/errno_macros/)
