---
title: "std::expected<T,E>::swap"
source_path: "cpp/utility/expected/swap"
category: "utility"
since: "C++23"
---

Swaps the contents with those of other.

## Declarations
### Primary template

```cpp
constexpr void swap( expected& other ) noexcept(/* see below */);
```
_(since C++23)_

### `void` partial specialization

```cpp
constexpr void swap( expected& other ) noexcept(/* see below */);
```
_(since C++23)_

## Parameters
- `other`: the expected object to exchange the contents with

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
    Ex ex1("\N{CAT FACE}");
    Ex ex2{"\N{GREEN HEART}"};
    show(ex1, ex2);
    ex1.swap(ex2);
    std::cout << "ex1.swap(ex2);\n";
    show(ex1, ex2);
    std::cout << '\n';
 
    ex2 = std::unexpected(13);
    show(ex1, ex2);
    std::cout << "ex1.swap(ex2);\n";
    ex1.swap(ex2);
    show(ex1, ex2);
    std::cout << '\n';
 
    ex2 = std::unexpected(19937);
    show(ex1, ex2);
    std::cout << "ex1.swap(ex2);\n";
    ex1.swap(ex2);
    show(ex1, ex2);
}
```

## See also
- [swap(std::expected)](/cpp/utility/expected/swap2/)
- [std::swap](/cpp/utility/swap/)
