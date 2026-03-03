---
title: "std::inout_ptr_t<Smart,Pointer,Args...>::inout_ptr_t"
source_path: "cpp/memory/inout_ptr_t/inout_ptr_t"
category: "memory"
since: "C++23"
---

1) Creates an inout_ptr_t. Adapts sp as if binds it to the Smart& member, captures every argument t in args... as if initializes the corresponding member of type T in Args... with [std::forward](/cpp/utility/forward/)<T>(t), then initializes the stored Pointer with sp if Smart is a pointer type, otherwise, initializes it with sp.get(). sp.release() may be called if Smart is not a pointer type, in which case it will not be called again within the destructor.

## Declarations
```cpp
explicit inout_ptr_t( Smart &sp, Args... args );
```
_(since C++23)_

```cpp
inout_ptr_t( const inout_ptr_t& ) = delete;
```
_(since C++23)_

## Parameters
- `sp`: the object (typically a smart pointer) to adapt
- `args...`: the arguments used for resetting to capture

## Return value
(none)

## Notes
If Smart is not a pointer type and sp.release() is not called by the constructor, it may be called by the destructor before resetting sp.

Every argument in args... is moved into the created inout_ptr_t if it is of an object type, or transferred into the created inout_ptr_t as-is if it is of a reference type.

The constructor of inout_ptr_t is allowed to throw exceptions. For example, when sp is an intrusive pointer with a control block, the allocation for the new control block may be performed within the constructor rather than the destructor.

## Example
This section is incompleteReason: no example
