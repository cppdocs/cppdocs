---
title: "std::ranges::size"
source_path: "cpp/ranges/size"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Calculates the number of elements in t in constant time.

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr auto size = /* unspecified */;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr auto size( T&& t );
```
_(since C++20)_

## Notes
Whenever ranges::size(e) is valid for an expression e, the return type is [integer-like](/cpp/iterator/is-integer-like/).

The C++20 standard requires that if the underlying size function call returns a prvalue, the return value is move-constructed from the materialized temporary object. All implementations directly return the prvalue instead. The requirement is corrected by the post-C++20 proposal [P0849R8](https://wg21.link/P0849R8) to match the implementations.

The expression [ranges::distance](/cpp/iterator/ranges/distance/)(e) can also be used to determine the size of a range e. Unlike ranges::size(e), [ranges::distance](/cpp/iterator/ranges/distance/)(e) works even if e is an unsized range, at the cost of having linear complexity in that case.

## Example
```cpp
#include <iostream>
#include <ranges>
#include <type_traits>
#include <vector>
 
int main()
{
    auto v = std::vector<int>{};
    std::cout << "ranges::size(v) == " << std::ranges::size(v) << '\n';
 
    auto il = {7};     // std::initializer_list
    std::cout << "ranges::size(il) == " << std::ranges::size(il) << '\n';
 
    int array[]{4, 5}; // array has a known bound
    std::cout << "ranges::size(array) == " << std::ranges::size(array) << '\n';
 
    static_assert(std::is_signed_v<decltype(std::ranges::size(v))> == false);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2602R2 | C++20 | there's machinery to prohibit certain non-member size found by ADL | removed such machinery |

## See also
- [ranges::ssize](/cpp/ranges/ssize/)
- [ranges::sized_range](/cpp/ranges/sized_range/)
- [ranges::distance](/cpp/iterator/ranges/distance/)
- [sizessize](/cpp/iterator/size/)
