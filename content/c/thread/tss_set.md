---
title: "tss_set"
source_path: "c/thread/tss_set"
header: "<threads.h>"
category: "c"
---

Sets the value of the thread-specific storage identified by tss_id for the current thread to val. Different threads may set different values to the same key.

## Declarations
```cpp
int tss_set( tss_t tss_id, void *val );
```
_(since C11)_

## Parameters
- `tss_id`: thread-specific storage key, obtained from tss_create and not deleted by tss_delete
- `val`: value to set thread-specific storage to

## Return value
[thrd_success](/c/thread/thrd_errors/) if successful, [thrd_error](/c/thread/thrd_errors/) otherwise.

## Notes
The POSIX equivalent of this function is [pthread_setspecific](http://pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_setspecific.html).

Typically TSS is used to store pointers to blocks of dynamically allocated memory that have been reserved for use by the calling thread.

tss_set may be called in the TSS destructor. If the destructor exits with non-NULL value in the TSS storage, it will be retried by [thrd_exit](/c/thread/thrd_exit/) up to [TSS_DTOR_ITERATIONS](/c/thread/TSS_DTOR_ITERATIONS/) times, after which the storage will be lost.

## Example
```cpp
int thread_func(void *arg) {
    tss_t key;
    if (thrd_success == tss_create(&key, free)) {
        tss_set(key, malloc(4)); // stores a pointer on TSS
        // ...
    }
} // calls free() for the pointer stored on TSS
```

## See also
- [tss_get](/c/thread/tss_get/)
