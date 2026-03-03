---
title: "std::allocator_traits<Alloc>::construct"
source_path: "cpp/memory/allocator_traits/construct"
header: "<memory>"
category: "memory"
---

If possible, constructs an object of type T in allocated uninitialized storage pointed to by p, by calling
a.construct(p, [std::forward](/cpp/utility/forward/)<Args>(args)...).

## Declarations
```cpp
template< class T, class... Args >
static void construct( Alloc& a, T* p, Args&&... args );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `a`: allocator to use for construction
- `p`: pointer to the uninitialized storage on which a T object will be constructed
- `args...`: the constructor arguments to pass to a.construct() or to placement-new(until C++20)std::construct_at()(since C++20)

## Return value
(none)

## Notes
This function is used by the standard library containers when inserting, copying, or moving elements.

Because this function provides the automatic fall back to placement new, the member function construct() is an optional [Allocator](/cpp/named_req/allocator/) requirement since C++11.

## See also
- [operator newoperator new[]](/cpp/memory/new/operator_new/)
- [construct](/cpp/memory/allocator/construct/)
- [construct_at](/cpp/memory/construct_at/)
