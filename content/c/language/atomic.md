---
title: "Atomic types"
source_path: "c/language/atomic"
category: "c"
---

[1 Syntax](#Syntax)

## Notes
Accessing a member of an atomic struct/union is undefined behavior.

The library type [sig_atomic_t](/c/program/sig_atomic_t/) does not provide inter-thread synchronization or memory ordering, only atomicity.

The [volatile](/c/language/volatile/) types do not provide inter-thread synchronization, memory ordering, or atomicity.

Implementations are recommended to ensure that the representation of _Atomic(T) in C is same as that of std::atomic<T> in C++ for every possible type T. The mechanisms used to ensure atomicity and memory ordering should be compatible.

## Example
```cpp
#include <stdatomic.h>
#include <stdio.h>
#include <threads.h>
 
atomic_int acnt;
int cnt;
 
int f(void* thr_data)
{
    for (int n = 0; n < 1000; ++n)
    {
        ++cnt;
        ++acnt;
        // for this example, relaxed memory order is sufficient, e.g.
        // atomic_fetch_add_explicit(&acnt, 1, memory_order_relaxed);
    }
    return 0;
}
 
int main(void)
{
    thrd_t thr[10];
    for (int n = 0; n < 10; ++n)
        thrd_create(&thr[n], f, NULL);
    for (int n = 0; n < 10; ++n)
        thrd_join(thr[n], NULL);
 
    printf("The atomic counter is %u\n", acnt);
    printf("The non-atomic counter is %u\n", cnt);
}
```

## See also
- [Concurrency support library](/c/thread/)
- [C++ documentation](/cpp/atomic/atomic/)
