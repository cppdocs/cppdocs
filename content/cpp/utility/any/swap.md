---
title: "std::any::swap"
source_path: "cpp/utility/any/swap"
category: "utility"
since: "C++17"
---

Swaps the content of two any objects.

## Declarations
```cpp
void swap( any& other ) noexcept;
```
_(since C++17)_

## Parameters
- `other`: object to swap with

## Example
```cpp
#include <any>
#include <print>
#include <string>
#include <string_view>
 
int main()
{
    std::any a = std::string{"King"};
    std::any b = std::string_view{"Queen"};
    std::println("a = {}", std::any_cast<std::string&>(a));
    std::println("b = {}", std::any_cast<std::string_view&>(b));
    std::println("swap(a, b)");
    a.swap(b);
    std::println("a = {}", std::any_cast<std::string_view&>(a));
    std::println("b = {}", std::any_cast<std::string&>(b));
}
```
