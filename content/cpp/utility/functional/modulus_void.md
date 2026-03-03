---
title: "std::modulus<void>"
source_path: "cpp/utility/functional/modulus_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::modulus](/cpp/utility/functional/modulus/)<void> is a specialization of [std::modulus](/cpp/utility/functional/modulus/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class modulus<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to divide

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) % [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
```cpp
#include <functional>
#include <iostream>
 
struct M
{
    M(int x) { std::cout << "M(" << x << ");\n"; }
    M() {}
};
 
auto operator%(M, M) { std::cout << "operator%(M, M);\n"; return M{}; }
auto operator%(M, int) { std::cout << "operator%(M, int);\n"; return M{}; }
auto operator%(int, M) { std::cout << "operator%(int, M);\n"; return M{}; }
 
int main()
{
    M m;
 
    // 42 is converted into a temporary object M{42}
    std::modulus<M>{}(m, 42);    // calls operator%(M, M)
 
    // no temporary object
    std::modulus<void>{}(m, 42); // calls operator%(M, int)
    std::modulus<void>{}(42, m); // calls operator%(int, M)
}
```
