---
title: "thrd_exit"
source_path: "c/thread/thrd_exit"
header: "<threads.h>"
category: "c"
---

First, for every thread-specific storage key which was created with a non-null destructor and for which the associated value is non-null (see [tss_create](/c/thread/tss_create/)), thrd_exit sets the value associated with the key to [NULL](/c/types/NULL/) and then invokes the destructor with the previous value of the key. The order in which the destructors are invoked is unspecified.

## Declarations
```cpp
_Noreturn void thrd_exit( int res );
```
_(since C11) (until C23)_

```cpp
[[noreturn]] void thrd_exit( int res );
```
_(since C23)_

## Parameters
- `res`: the result value to return

## Return value
(none)

## See also
- [thrd_join](/c/thread/thrd_join/)
- [thrd_detach](/c/thread/thrd_detach/)
