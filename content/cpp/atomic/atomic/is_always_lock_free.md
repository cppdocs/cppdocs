---
title: "std::atomic<T>::is_always_lock_free"
source_path: "cpp/atomic/atomic/is_always_lock_free"
category: "atomic"
since: "C++17"
---

Equals true if this atomic type is always lock-free and false if it is never or sometimes lock-free.

## Declarations
```cpp
static constexpr bool is_always_lock_free = /*implementation-defined*/;
```
_(since C++17)_

## Notes
There is no non-member function equivalent of this static member constant because non-member functions take pointers to atomic types, and therefore aren't as useful in [constant expressions](/cpp/language/constant_expression/).

## See also
- [is_lock_free](/cpp/atomic/atomic/is_lock_free/)
- [atomic_is_lock_free](/cpp/atomic/atomic_is_lock_free/)
