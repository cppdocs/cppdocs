---
title: "std::atomic_ref<T>::required_alignment"
source_path: "cpp/atomic/atomic_ref/required_alignment"
category: "atomic"
since: "C++20"
---

The value of required_alignment is the required alignment for an object to be referenced by an atomic reference, which is at least alignof(T).

## Declarations
```cpp
static constexpr std::size_t required_alignment = /*implementation-defined*/;
```
_(since C++20)_

## Notes
Hardware could require that an object to be referenced by an atomic_ref<T> have stricter alignment than other T objects, and whether operations on an atomic_ref are lock-free can depend on the alignment of the referenced object.
