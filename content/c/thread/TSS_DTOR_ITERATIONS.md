---
title: "TSS_DTOR_ITERATIONS"
source_path: "c/thread/TSS_DTOR_ITERATIONS"
header: "<threads.h>"
category: "c"
---

Expands to a positive integral [constant expression](/c/language/constant_expression/) defining the maximum number of times a destructor for thread-local storage pointer will be called by [thrd_exit](/c/thread/thrd_exit/).

## Declarations
```cpp
#define TSS_DTOR_ITERATIONS /* unspecified */
```
_(since C11)_
