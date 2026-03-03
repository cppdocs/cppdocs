---
title: "std::ranges::destroy_at"
source_path: "cpp/memory/ranges/destroy_at"
header: "<memory>"
category: "memory"
since: "C++20"
---

If T is not an array type, calls the destructor of the object pointed to by p, as if by p->~T(). Otherwise, recursively destroys elements of *p in order, as if by calling [std::destroy](/cpp/memory/destroy/)([std::begin](/cpp/iterator/begin/)(*p), [std::end](/cpp/iterator/end/)(*p)).

## Declarations
```cpp
Call signature
```

```cpp
template< std::destructible T >
constexpr void destroy_at( T* p ) noexcept;
```
_(since C++20)_

## Parameters
- `p`: a pointer to the object to be destroyed

## Return value
(none)

## Notes
destroy_at deduces the type of object to be destroyed and hence avoids writing it explicitly in the destructor call.

When destroy_at is called in the evaluation of some [constant expression](/cpp/language/constant_expression/) e, the argument p must point to an object whose lifetime began within the evaluation of e.

## Example
```cpp
#include <iostream>
#include <memory>
#include <new>
 
struct Tracer
{
    int value;
    ~Tracer() { std::cout << value << " destructed\n"; }
};
 
int main()
{
    alignas(Tracer) unsigned char buffer[sizeof(Tracer) * 8];
 
    for (int i = 0; i < 8; ++i)
        new(buffer + sizeof(Tracer) * i) Tracer{i}; //manually construct objects
 
    auto ptr = std::launder(reinterpret_cast<Tracer*>(buffer));
 
    for (int i = 0; i < 8; ++i)
        std::ranges::destroy_at(ptr + i);
}
```

## See also
- [ranges::destroy](/cpp/memory/ranges/destroy/)
- [ranges::destroy_n](/cpp/memory/ranges/destroy_n/)
- [ranges::construct_at](/cpp/memory/ranges/construct_at/)
- [destroy_at](/cpp/memory/destroy_at/)
