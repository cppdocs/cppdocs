---
title: "tss_delete"
source_path: "c/thread/tss_delete"
header: "<threads.h>"
category: "c"
---

Destroys the thread-specific storage identified by tss_id.

## Declarations
```cpp
void tss_delete( tss_t tss_id );
```
_(since C11)_

## Parameters
- `tss_id`: thread-specific storage key previously returned by tss_create and not yet deleted by tss_delete

## Return value
(none)

## Notes
The POSIX equivalent of this function is [pthread_key_delete](http://pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_key_delete.html).

The reason tss_delete never calls destructors is that the destructors (called at thread exit) are normally intended to be executed by the same thread that originally set the value (via [tss_set](/c/thread/tss_set/)) that the destructor will be dealing with, and may even rely on the values of that or other thread-specific data as seen by that thread. The thread executing tss_delete has no access to other threads' TSS. Even if it were possible to call the destructor for each thread's own value associated with tss_id, tss_delete would have to synchronize with every thread if only to examine whether the value of this TSS in that thread is null (destructors are only called against non-null values).

## Example
This section is incompleteReason: no example
