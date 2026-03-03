---
title: "std::optional<T>::reset"
source_path: "cpp/utility/optional/reset"
category: "utility"
---

If *this contains a value, destroy that value as if by value().T::~T(). Otherwise, there are no effects.

## Declarations
```cpp
void reset() noexcept;
```
_(since C++17) (constexpr since C++20)_

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
 
struct A
{
    std::string s;
    A(std::string str) : s(std::move(str)) { std::cout << " constructed\n"; }
    ~A() { std::cout << " destructed\n"; }
    A(const A& o) : s(o.s) { std::cout << " copy constructed\n"; }
    A(A&& o) : s(std::move(o.s)) { std::cout << " move constructed\n"; }
 
    A& operator=(const A& other)
    {
        s = other.s;
        std::cout << " copy assigned\n";
        return *this;
    }
 
    A& operator=(A&& other)
    {
        s = std::move(other.s);
        std::cout << " move assigned\n";
        return *this;
    }
};
 
int main()
{
    std::cout << "Create empty optional:\n";
    std::optional<A> opt;
 
    std::cout << "Construct and assign value:\n";
    opt = A("Lorem ipsum dolor sit amet, consectetur adipiscing elit nec.");
 
    std::cout << "Reset optional:\n";
    opt.reset();
    std::cout << "End example\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2231R1 | C++20 | reset was not constexpr while non-trivial destruction is allowed in constexpr in C++20 | made constexpr |

## See also
- [operator=](/cpp/utility/optional/operator/)
