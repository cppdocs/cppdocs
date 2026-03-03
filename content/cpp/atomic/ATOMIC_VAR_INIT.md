---
title: "ATOMIC_VAR_INIT"
source_path: "cpp/atomic/ATOMIC_VAR_INIT"
header: "<atomic>"
category: "atomic"
---

Expands to an expression which can be used to initialize an [std::atomic](/cpp/atomic/atomic/) object that can be initialized from value. If the atomic object has static storage duration, this initialization is [constant initialization](/cpp/language/constant_initialization/).

## Declarations
```cpp
#define ATOMIC_VAR_INIT(value) /* implementation-defined */
```
_(since C++11) (deprecated in C++20)_

## Notes
Accessing the variable during initialization from another thread, even through an atomic operation, is a data race (it may happen if the address is immediately passed to another thread with a [std::memory_order_relaxed](/cpp/atomic/memory_order/) operation)

This macro is primarily provided for compatibility with C; it behaves the same as the constructor of [std::atomic](/cpp/atomic/atomic/).

## Example
```cpp
#include <atomic>
#include <iostream>
 
int main()
{
    std::atomic<int> a = ATOMIC_VAR_INIT(1);
    // std::atomic<int> a(1);   // C++-only alternative
    std::cout << "Initialized std::atomic<int> as: " << a << '\n';
}
```

## See also
- [atomic_init](/cpp/atomic/atomic_init/)
- [(constructor)](/cpp/atomic/atomic/atomic/)
- [C documentation](/c/atomic/ATOMIC_VAR_INIT/)
