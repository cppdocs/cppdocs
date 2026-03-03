---
title: "std::numeric_limits<T>::traps"
source_path: "cpp/types/numeric_limits/traps"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::traps is true for all arithmetic types T that have at least one value at the start of the program that, if used as an argument to an arithmetic operation, will generate a [trap](https://en.wikipedia.org/wiki/Trap_(computing)).

## Declarations
```cpp
static const bool traps;
```
_(until C++11)_

```cpp
static constexpr bool traps;
```
_(since C++11)_

## Notes
On most platforms integer division by zero always traps, and [std::numeric_limits](/cpp/types/numeric_limits/)<T>::traps is true for all integer types that support the value 0. The exception is the type bool: even though division by false traps due to integral promotion from bool to int, it is the zero-valued int that traps. Zero is not a value of type bool.

On most platforms, floating-point exceptions may be turned on and off at run time (e.g. feenableexcept() on Linux or _controlfp on Windows), in which case the value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::traps for floating-point types reflects the state of floating-point trapping facility at the time of program startup, which is false on most modern systems. An exception would be a [DEC Alpha](https://en.wikipedia.org/wiki/DEC_Alpha) program, where it is true if compiled without -ieee.

## Example
```cpp
#include <iostream>
#include <limits>
 
int main()
{
    std::cout << std::boolalpha
              << "bool:     traps = " << std::numeric_limits<bool>::traps << '\n'
              << "char:     traps = " << std::numeric_limits<char>::traps << '\n'
              << "char16_t: traps = " << std::numeric_limits<char16_t>::traps << '\n'
              << "long:     traps = " << std::numeric_limits<long>::traps << '\n'
              << "float:    traps = " << std::numeric_limits<float>::traps << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 497 | C++98 | it was unclear what is returned if trappingis enabled or disabled at runtime | returns the enable statusat the start of the program |

## See also
- [Floating-point environment](/cpp/numeric/fenv/)
- [tinyness_before](/cpp/types/numeric_limits/tinyness_before/)
- [has_denorm_loss](/cpp/types/numeric_limits/has_denorm_loss/)
