---
title: "std::span<T,Extent>::data"
source_path: "cpp/container/span/data"
category: "container"
since: "C++20"
---

Returns a pointer to the beginning of the sequence.

## Declarations
```cpp
constexpr pointer data() const noexcept;
```
_(since C++20)_

## Return value
A pointer to the beginning of the sequence.

## Example
```cpp
#include <iostream>
#include <span>
 
int main()
{
    constexpr char str[] = "ABCDEF\n";
 
    const std::span sp{str};
 
    for (auto n{sp.size()}; n != 2; --n)
        std::cout << sp.last(n).data();
}
```

## See also
- [(constructor)](/cpp/container/span/span/)
