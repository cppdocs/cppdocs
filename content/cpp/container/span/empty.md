---
title: "std::span<T,Extent>::empty"
source_path: "cpp/container/span/empty"
category: "container"
since: "C++20"
---

Checks if the span is empty.

## Declarations
```cpp
constexpr bool empty() const noexcept;
```
_(since C++20)_

## Return value
true if the span is empty (i.e., size() == 0); false otherwise.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <span>
 
int main()
{
    std::span<const char> span{"ABCDEF"};
 
    while (!span.empty())
    {
        std::cout << std::quoted(span.data()) << '\n';
        span = span.last(span.size() - 1);
    }
}
```

## See also
- [size](/cpp/container/span/size/)
