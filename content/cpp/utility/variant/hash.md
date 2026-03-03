---
title: "std::hash<std::variant>"
source_path: "cpp/utility/variant/hash"
header: "<variant>"
category: "utility"
since: "C++17"
---

The template specialization of [std::hash](/cpp/utility/hash/) for the [std::variant](/cpp/utility/variant/) template allows users to obtain hashes of variant objects.

## Declarations
```cpp
template< class... Types >
struct hash<std::variant<Types...>>;
```
_(since C++17)_

## Notes
Unlike [std::hash<std::optional>](/cpp/utility/optional/hash/), hash of a variant does not typically equal the hash of the contained value; this makes it possible to distinguish [std::variant](/cpp/utility/variant/)<int, int> holding the same value as different alternatives.

## Example
```cpp
#include <iostream>
#include <string>
#include <variant>
 
using Var = std::variant<int, int, int, std::string>;
 
template<unsigned I>
void print(Var const& var)
{
    std::cout << "get<" << var.index() << "> = "
              << std::get<I>(var)
              << "\t" "# = "
              << std::hash<Var>{}(var) << '\n';
}
 
int main()
{
    Var var;
    std::get<0>(var) = 2020;
    print<0>(var);
    var.emplace<1>(2023);
    print<1>(var);
    var.emplace<2>(2026);
    print<2>(var);
    var = "C++";
    print<3>(var);
}
```

## See also
- [hash](/cpp/utility/hash/)
