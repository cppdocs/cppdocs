---
title: "std::allocator_traits<Alloc>::destroy"
source_path: "cpp/memory/allocator_traits/destroy"
header: "<memory>"
category: "memory"
---

Calls the destructor of the object pointed to by p. If possible, does so by calling a.destroy(p). If not possible (e.g. Alloc does not have the member function destroy()), then calls the destructor of *p directly, as p->~T()(until C++20)[std::destroy_at](/cpp/memory/destroy_at/)(p)(since C++20).

## Declarations
```cpp
template< class T >
static void destroy( Alloc& a, T* p );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `a`: allocator to use for destruction
- `p`: pointer to the object being destroyed

## Return value
(none)

## Notes
Because this function provides the automatic fall back to direct call to the destructor, the member function destroy() is an optional [Allocator](/cpp/named_req/allocator/) requirement since C++11.

## Example
This section is incompleteReason: no example

## See also
- [destroy](/cpp/memory/allocator/destroy/)
