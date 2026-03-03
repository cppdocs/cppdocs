---
title: "std::negation"
source_path: "cpp/types/negation"
header: "<type_traits>"
category: "types"
since: "C++17"
---

Forms the [logical negation](https://en.wikipedia.org/wiki/Negation) of the type trait B.

## Declarations
```cpp
template< class B >
struct negation;
```
_(since C++17)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_logical_traits
201510L
(C++17)
Logical operator type traits

## Example
```cpp
#include <type_traits>
 
static_assert(
    std::is_same<
        std::bool_constant<false>,
        typename std::negation<std::bool_constant<true>>::type>::value,
    "");
static_assert(
    std::is_same<
        std::bool_constant<true>,
        typename std::negation<std::bool_constant<false>>::type>::value,
    "");
 
static_assert(std::negation_v<std::bool_constant<true>> == false);
static_assert(std::negation_v<std::bool_constant<false>> == true);
 
int main() {}
```

## See also
- [conjunction](/cpp/types/conjunction/)
- [disjunction](/cpp/types/disjunction/)
- [integral_constantbool_constant](/cpp/types/integral_constant/)
