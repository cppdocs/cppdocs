---
title: "std::out_ptr_t<Smart,Pointer,Args...>::~out_ptr_t"
source_path: "cpp/memory/out_ptr_t/~out_ptr_t"
category: "memory"
since: "C++23"
---

Resets the adapted Smart object by the value of modified Pointer object (or the void* object if operator void**() has been called) and the captured arguments.

## Declarations
```cpp
~out_ptr_t();
```
_(since C++23)_

## Notes
If Smart is a [std::shared_ptr](/cpp/memory/shared_ptr/) specialization, the implementation may allocate the storage for the new control block on construction, in order to leave non-throwing works to the destructor.

Arguments captured by value are destroyed after resetting.
