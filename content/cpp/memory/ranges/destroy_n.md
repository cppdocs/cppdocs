---
title: "std::ranges::destroy_n"
source_path: "cpp/memory/ranges/destroy_n"
header: "<memory>"
category: "memory"
since: "C++20"
---

Destroys the n objects in the range starting at first, equivalent to

## Declarations
```cpp
Call signature
```

```cpp
template< no-throw-input-iterator I >
requires std::destructible<std::iter_value_t<I>>
constexpr I destroy_n( I first, std::iter_difference_t<I> n ) noexcept;
```
_(since C++20)_

## Parameters
- `first`: the beginning of the range of elements to destroy
- `n`: the number of elements to destroy

## Return value
The end of the range of objects that has been destroyed.

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
 
    std::ranges::destroy_n(ptr, 8);
}
```

## See also
- [ranges::destroy_at](/cpp/memory/ranges/destroy_at/)
- [ranges::destroy](/cpp/memory/ranges/destroy/)
- [destroy_n](/cpp/memory/destroy_n/)
