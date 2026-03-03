---
title: "std::swap(std::optional)"
source_path: "cpp/utility/optional/swap2"
header: "<optional>"
category: "utility"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::optional](/cpp/utility/optional/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class T >
void swap( std::optional<T>& lhs,
std::optional<T>& rhs ) noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `lhs, rhs`: optional objects whose states to swap

## Return value
(none)

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_optional
202106L
(C++20)(DR20)
Fully constexpr

## Example
```cpp
#include <iostream>
#include <optional>
#include <string>
 
int main()
{
    std::optional<std::string> a{"██████"}, b{"▒▒▒▒▒▒"};
 
    auto print = [&](auto const& s)
    {
        std::cout << s << "\t"
                     "a = " << a.value_or("(null)") << "  "
                     "b = " << b.value_or("(null)") << '\n';
    };
 
    print("Initially:");
    std::swap(a, b);
    print("swap(a, b):");
    a.reset();
    print("\n""a.reset():");
    std::swap(a, b);
    print("swap(a, b):");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2231R1 | C++20 | swap was not constexpr while the required operations can be constexpr in C++20 | made constexpr |

## See also
- [swap](/cpp/utility/optional/swap/)
