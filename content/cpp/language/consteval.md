---
title: "consteval specifier (since C++20)"
source_path: "cpp/language/consteval"
category: "language"
since: "C++20"
---

consteval - specifies that a function is an immediate function, that is, every call to the function must produce a compile-time constant

## Notes
Feature-test macro
Value
Std
Feature
__cpp_consteval
201811L
(C++20)
Immediate functions
202211L
(C++23)(DR20)
Making consteval propagate up

## Example
```cpp
#include <iostream>
 
// This function might be evaluated at compile-time, if the input
// is known at compile-time. Otherwise, it is executed at run-time.
constexpr unsigned factorial(unsigned n)
{
    return n < 2 ? 1 : n * factorial(n - 1);
}
 
// With consteval we enforce that the function will be evaluated at compile-time.
consteval unsigned combination(unsigned m, unsigned n)
{
    return factorial(n) / factorial(m) / factorial(n - m);
}
 
static_assert(factorial(6) == 720);
static_assert(combination(4, 8) == 70);
 
int main(int argc, const char*[])
{
    constexpr unsigned x{factorial(4)};
    std::cout << x << '\n';
 
    [[maybe_unused]]
    unsigned y = factorial(argc); // OK
//  unsigned z = combination(argc, 7); // error: 'argc' is not a constant expression
}
```

## See also
- [constexpr specifier](/cpp/language/constexpr/)
- [constinit specifier](/cpp/language/constinit/)
- [zero initialization](/cpp/language/zero_initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
- [constant expression](/cpp/language/constant_expression/)
- [expression](/cpp/language/expressions/)
