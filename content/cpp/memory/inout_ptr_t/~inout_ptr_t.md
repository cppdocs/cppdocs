---
title: "std::inout_ptr_t<Smart,Pointer,Args...>::~inout_ptr_t"
source_path: "cpp/memory/inout_ptr_t/~inout_ptr_t"
category: "memory"
since: "C++23"
---

Resets the adapted Smart object by the value of modified Pointer object (or the void* object if operator void**() has been called) and the captured arguments. release() may be called on the adapted Smart object if it is not called by the constructor.

## Declarations
```cpp
~inout_ptr_t();
```
_(since C++23)_

## Notes
The implementation may allocate the storage for the data structure needed for Smart (e.g. a control block) on construction, in order to leave non-throwing works to the destructor.

Arguments captured by value are destroyed after resetting.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3897 | C++23 | the destructor did not update a raw pointer to the null value | it does |
