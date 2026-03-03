---
title: "std::destroy_n"
source_path: "cpp/memory/destroy_n"
header: "<memory>"
category: "memory"
since: "C++20"
---

1) Destroys the n objects in the range starting at first, as if by
for (; n > 0; (void) ++first, --n)
[std::destroy_at](/cpp/memory/destroy_at/)([std::addressof](/cpp/memory/addressof/)(*first));

## Declarations
```cpp
template< class ForwardIt, class Size >
ForwardIt destroy_n( ForwardIt first, Size n );
```
_(since C++17) (until C++20)_

```cpp
template< class ForwardIt, class Size >
constexpr ForwardIt destroy_n( ForwardIt first, Size n );
```
_(since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class Size >
ForwardIt destroy_n( ExecutionPolicy&& policy, ForwardIt first, Size n );
```
_(since C++17)_

## Parameters
- `first`: the beginning of the range of elements to destroy
- `n`: the number of elements to destroy
- `policy`: the execution policy to use

## Return value
The end of the range of objects that has been destroyed (i.e., [std::next](/cpp/iterator/next/)(first, n)).

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
 
    std::destroy_n(ptr, 8);
}
```

## See also
- [destroy](/cpp/memory/destroy/)
- [destroy_at](/cpp/memory/destroy_at/)
- [ranges::destroy_n](/cpp/memory/ranges/destroy_n/)
