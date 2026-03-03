---
title: "std::numeric_limits<T>::is_modulo"
source_path: "cpp/types/numeric_limits/is_modulo"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_modulo is true for all arithmetic types T that handle overflows with modulo arithmetic, that is, if the result of addition, subtraction, multiplication, or division of this type would fall outside the range [[min()](/cpp/types/numeric_limits/min/),[max()](/cpp/types/numeric_limits/max/)], the value returned by such operation differs from the expected value by a multiple of max() - min() + 1.

## Declarations
```cpp
static const bool is_modulo;
```
_(until C++11)_

```cpp
static constexpr bool is_modulo;
```
_(since C++11)_

## Notes
The standard said "On most machines, this is true for signed integers." before the resolution of [LWG issue 2422](https://cplusplus.github.io/LWG/issue2422). See [GCC PR 22200](http://gcc.gnu.org/bugzilla/show_bug.cgi?id=22200) for a related discussion.

## Example
```cpp
#include <iostream>
#include <type_traits>
#include <limits>
 
template<class T>
typename std::enable_if<std::numeric_limits<T>::is_modulo>::type
    check_overflow()
{
    std::cout << "max value is " << std::numeric_limits<T>::max() << '\n'
              << "min value is " << std::numeric_limits<T>::min() << '\n'
              << "max value + 1 is " << std::numeric_limits<T>::max()+1 << '\n';
}
 
int main()
{
    check_overflow<int>();
    std::cout << '\n';
    check_overflow<unsigned long>();
//  check_overflow<float>(); // compile-time error, not a modulo type
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 612 | C++98 | the definition of "handle overflowswith modulo arithmetic" was poor[1] | provided abetter definition |
| LWG 2422 | C++98 | is_modulo was required to be true forsigned integer types on most machines | required to be false for signed integer typesunless signed integer overflow is defined to wrap |

## See also
- [is_integer](/cpp/types/numeric_limits/is_integer/)
- [is_iec559](/cpp/types/numeric_limits/is_iec559/)
- [is_exact](/cpp/types/numeric_limits/is_exact/)
