---
title: "std::inout_ptr"
source_path: "cpp/memory/inout_ptr_t/inout_ptr"
header: "<memory>"
category: "memory"
since: "C++23"
---

Returns an inout_ptr_t with deduced template arguments that captures arguments for resetting by reference.

## Declarations
```cpp
template< class Pointer = void, class Smart, class... Args >
auto inout_ptr( Smart& s, Args&&... args );
```
_(since C++23)_

## Parameters
- `s`: the object (typically a smart pointer) to adapt
- `args...`: the arguments for resetting to capture

## Return value
[std::inout_ptr_t](/cpp/memory/inout_ptr_t/)<Smart, P, Args&&>(s, [std::forward](/cpp/utility/forward/)<Args>(args)...), where P is

## Notes
Users may specify the template argument for the template parameter Pointer, in order to interoperate with foreign functions that take a Pointer*.

As all arguments for resetting are captured by reference, the returned inout_ptr_t should be a temporary object destroyed at the end of the full-expression containing the call to the foreign function, in order to avoid dangling references.

## Example
This section is incompleteReason: no example

## See also
- [out_ptr](/cpp/memory/out_ptr_t/out_ptr/)
- [make_uniquemake_unique_for_overwrite](/cpp/memory/unique_ptr/make_unique/)
- [make_sharedmake_shared_for_overwrite](/cpp/memory/shared_ptr/make_shared/)
