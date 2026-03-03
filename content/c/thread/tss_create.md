---
title: "tss_create"
source_path: "c/thread/tss_create"
header: "<threads.h>"
category: "c"
---

Creates new thread-specific storage key and stores it in the object pointed to by tss_key. Although the same key value may be used by different threads, the values bound to the key by [tss_set](/c/thread/tss_set/) are maintained on a per-thread basis and persist for the life of the calling thread.

## Declarations
```cpp
int tss_create( tss_t* tss_key, tss_dtor_t destructor );
```
_(since C11)_

## Parameters
- `tss_key`: pointer to memory location to store the new thread-specific storage key
- `destructor`: pointer to a function to call at thread exit

## Return value
[thrd_success](/c/thread/thrd_errors/) if successful, [thrd_error](/c/thread/thrd_errors/) otherwise.

## Notes
The POSIX equivalent of this function is [pthread_key_create](http://pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_key_create.html).

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
