---
title: "std::variant_alternative, std::variant_alternative_t"
source_path: "cpp/utility/variant/variant_alternative"
header: "<variant>"
category: "utility"
since: "C++17"
---

Provides compile-time indexed access to the types of the alternatives of the possibly cv-qualified variant, combining cv-qualifications of the variant (if any) with the cv-qualifications of the alternative.

## Declarations
```cpp
template <std::size_t I, class T>
struct variant_alternative; /* undefined */
```
_(since C++17)_

```cpp
template <std::size_t I, class... Types>
struct variant_alternative<I, variant<Types...>>;
```
_(since C++17)_

```cpp
template <std::size_t I, class T> class variant_alternative<I, const T>;
```
_(since C++17)_

```cpp
template <std::size_t I, class T>
class variant_alternative<I, volatile T>;
template <std::size_t I, class T>
class variant_alternative<I, const volatile T>;
```
_(since C++17) (deprecated in C++20)_

## Example
```cpp
#include <variant>
#include <iostream>
 
using my_variant = std::variant<int, float>;
static_assert(std::is_same_v
    <int,   std::variant_alternative_t<0, my_variant>>);
static_assert(std::is_same_v
    <float, std::variant_alternative_t<1, my_variant>>);
// cv-qualification on the variant type propagates to the extracted alternative type.
static_assert(std::is_same_v
    <const int, std::variant_alternative_t<0, const my_variant>>);
 
int main()
{
    std::cout << "All static assertions passed.\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2974 | C++17 | out-of-bounds index resulted in undefined behavior | made ill-formed |

## See also
- [variant_sizevariant_size_v](/cpp/utility/variant/variant_size/)
- [std::tuple_element<std::tuple>](/cpp/utility/tuple/tuple_element/)
