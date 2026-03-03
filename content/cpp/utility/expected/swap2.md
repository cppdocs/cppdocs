---
title: "swap(std::expected)"
source_path: "cpp/utility/expected/swap2"
category: "utility"
since: "C++23"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for std::expected. Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
friend constexpr void swap( expected& lhs, expected& rhs ) noexcept(/*see below*/);
```
_(since C++23)_

## Parameters
- `lhs, rhs`: expected objects whose states to swap

## Return value
(none)

## Example
```cpp
#include <expected>
#include <iostream>
#include <string>
 
using Ex = std::expected<std::string, int>;
 
void show(const Ex& ex1, const Ex& ex2)
{
    for (int i{}; i < 2; ++i)
    {
        std::cout << (i ? "ex2" : "ex1");
        if (const Ex& ex = (i ? ex2 : ex1); ex.has_value())
            std::cout << ".has_value() = " << *ex << '\n';
        else
            std::cout << ".error() = " << ex.error() << '\n';
    }
}
 
int main()
{
    Ex ex1("\N{DOG FACE}");
    Ex ex2{"\N{BONE}"};
    show(ex1, ex2);
    swap(ex1, ex2);
    std::cout << "swap(ex1, ex2);\n";
    show(ex1, ex2);
    std::cout << '\n';
 
    ex2 = std::unexpected(13);
    show(ex1, ex2);
    swap(ex1, ex2);
    std::cout << "swap(ex1, ex2);\n";
    show(ex1, ex2);
    std::cout << '\n';
 
    ex2 = std::unexpected(19937);
    show(ex1, ex2);
    swap(ex1, ex2);
    std::cout << "swap(ex1, ex2);\n";
    show(ex1, ex2);
    std::cout << '\n';
}
```

## See also
- [swap](/cpp/utility/expected/swap/)
