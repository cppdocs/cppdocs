---
title: "std::destroy"
source_path: "cpp/memory/destroy"
header: "<memory>"
category: "memory"
since: "C++20"
---

1) Destroys the objects in the range [first,last), as if by
for (; first != last; ++first)
[std::destroy_at](/cpp/memory/destroy_at/)([std::addressof](/cpp/memory/addressof/)(*first));

## Declarations
```cpp
template< class ForwardIt >
void destroy( ForwardIt first, ForwardIt last );
```
_(since C++17) (until C++20)_

```cpp
template< class ForwardIt >
constexpr void destroy( ForwardIt first, ForwardIt last );
```
_(since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt >
void destroy( ExecutionPolicy&& policy, ForwardIt first, ForwardIt last );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to destroy
- `policy`: the execution policy to use

## Return value
(none)

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
 
    std::destroy(ptr, ptr + 8);
}
```

## See also
- [destroy_n](/cpp/memory/destroy_n/)
- [destroy_at](/cpp/memory/destroy_at/)
- [ranges::destroy](/cpp/memory/ranges/destroy/)
