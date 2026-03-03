---
title: "tss_get"
source_path: "c/thread/tss_get"
header: "<threads.h>"
category: "c"
---

Returns the value held in thread-specific storage for the current thread identified by tss_key. Different threads may get different values identified by the same key.

## Declarations
```cpp
void *tss_get( tss_t tss_key );
```
_(since C11)_

## Parameters
- `tss_key`: thread-specific storage key, obtained from tss_create and not deleted by tss_delete

## Return value
The value on success, [NULL](/c/types/NULL/) on failure.

## Notes
The POSIX equivalent for this function is [pthread_getspecific](http://pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_getspecific.html).

## Example
This section is incompleteReason: no example

## See also
- [tss_set](/c/thread/tss_set/)
