---
title: "std::swap(std::any)"
source_path: "cpp/utility/any/swap2"
header: "<any>"
category: "utility"
since: "C++17"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::any](/cpp/utility/any/). Swaps the content of two any objects by calling lhs.swap(rhs).

## Declarations
```cpp
void swap( any& lhs, any& rhs ) noexcept;
```
_(since C++17)_

## Parameters
- `lhs, rhs`: objects to swap

## Example
```cpp
#include <any>
#include <print>
#include <string>
 
int main()
{
    std::any p = 42, q = std::string{"Bishop"};
    std::println("p: {}, q: {}", std::any_cast<int>(p), std::any_cast<std::string&>(q));
    std::println("swap(p, q)");
    std::swap(p, q);
    std::println("p: {}, q: {}", std::any_cast<std::string&>(p), std::any_cast<int>(q));
}
```

## See also
- [swap](/cpp/utility/any/swap/)
