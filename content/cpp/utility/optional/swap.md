---
title: "std::optional<T>::swap"
source_path: "cpp/utility/optional/swap"
category: "utility"
---

Swaps the contents with those of other.

## Declarations
```cpp
void swap( optional& other ) noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `other`: the optional object to exchange the contents with

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <optional>
#include <string>
 
int main()
{
    std::optional<std::string> opt1("First example text");
    std::optional<std::string> opt2("2nd text");
 
    enum Swap { Before, After };
    auto print_opts = [&](Swap e)
    {
        std::cout << (e == Before ? "Before swap:\n" : "After swap:\n");
        std::cout << "opt1 contains '" << opt1.value_or("") << "'\n";
        std::cout << "opt2 contains '" << opt2.value_or("") << "'\n";
        std::cout << (e == Before ? "---SWAP---\n": "\n");
    };
 
    print_opts(Before);
    opt1.swap(opt2);
    print_opts(After);
 
    // Swap with only 1 set
    opt1 = "Lorem ipsum dolor sit amet, consectetur tincidunt.";
    opt2.reset();
 
    print_opts(Before);
    opt1.swap(opt2);
    print_opts(After);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2231R1 | C++20 | swap was not constexpr while the required operations can be constexpr in C++20 | made constexpr |

## See also
- [std::swap(std::optional)](/cpp/utility/optional/swap2/)
- [std::swap](/cpp/utility/swap/)
