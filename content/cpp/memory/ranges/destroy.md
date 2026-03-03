---
title: "std::ranges::destroy"
source_path: "cpp/memory/ranges/destroy"
header: "<memory>"
category: "memory"
since: "C++20"
---

1) Destroys the objects in the range [first,last), as if by
for (; first != last; ++first)
std::[ranges::destroy_at](/cpp/memory/ranges/destroy_at/)([std::addressof](/cpp/memory/addressof/)(*first));
return first;

## Declarations
```cpp
Call signature
```

```cpp
template< no-throw-input-iterator I, no-throw-sentinel-for<I> S >
requires std::destructible<std::iter_value_t<I>>
constexpr I destroy( I first, S last ) noexcept;
```
_(since C++20)_

```cpp
template< no-throw-input-range R >
requires std::destructible<ranges::range_value_t<R>>
constexpr ranges::borrowed_iterator_t<R> destroy( R&& r ) noexcept;
```
_(since C++20)_

## Parameters
- `first, last`: iterator-sentinel pair denoting the range of elements to destroy
- `r`: the range to destroy

## Return value
An iterator compares equal to last.

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
 
    std::ranges::destroy(ptr, ptr + 8);
}
```

## See also
- [ranges::destroy_n](/cpp/memory/ranges/destroy_n/)
- [ranges::destroy_at](/cpp/memory/ranges/destroy_at/)
- [destroy](/cpp/memory/destroy/)
