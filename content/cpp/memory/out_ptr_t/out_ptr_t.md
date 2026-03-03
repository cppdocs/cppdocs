---
title: "std::out_ptr_t<Smart,Pointer,Args...>::out_ptr_t"
source_path: "cpp/memory/out_ptr_t/out_ptr_t"
category: "memory"
since: "C++23"
---

1) Creates an out_ptr_t. Adapts sp as if binds it to the Smart& member, captures every argument t in args... as if initializes the corresponding member of type T in Args... with [std::forward](/cpp/utility/forward/)<T>(t), then value-initializes the stored Pointer.
Then calls sp.reset() if the expression is well-formed; otherwise, calls sp = Smart() if [std::is_default_constructible_v](/cpp/types/is_default_constructible/)<Smart> is true. The program is ill-formed if both resetting operations are ill-formed.

## Declarations
```cpp
explicit out_ptr_t( Smart &sp, Args... args );
```
_(since C++23)_

```cpp
out_ptr_t( const out_ptr_t& ) = delete;
```
_(since C++23)_

## Parameters
- `sp`: the object (typically a smart pointer) to adapt
- `args...`: the arguments used for resetting to capture

## Return value
(none)

## Notes
After construction, the Pointer or void* object pointed by the return value of either conversion function is equal to nullptr.

Every argument in args... is moved into the created out_ptr_t if it is of an object type, or transferred into the created out_ptr_t as-is if it is of a reference type.

The constructor of out_ptr_t is allowed to throw exceptions. For example, when sp is a [std::shared_ptr](/cpp/memory/shared_ptr/), the allocation for the new control block may be performed within the constructor rather than the destructor.

## Example
This section is incompleteReason: no example
