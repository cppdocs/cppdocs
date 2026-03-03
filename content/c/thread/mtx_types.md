---
title: "mtx_plain, mtx_recursive, mtx_timed"
source_path: "c/thread/mtx_types"
header: "<threads.h>"
category: "c"
---

When passed to [mtx_init](/c/thread/mtx_init/), identifies the type of a mutex to create.

## Declarations
```cpp
enum {
mtx_plain = /* unspecified */,
mtx_recursive = /* unspecified */,
mtx_timed = /* unspecified */
};
```
_(since C11)_

## See also
- [mtx_init](/c/thread/mtx_init/)
