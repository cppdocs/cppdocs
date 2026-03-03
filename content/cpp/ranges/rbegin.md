---
title: "std::ranges::rbegin"
source_path: "cpp/ranges/rbegin"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Returns an iterator to the last element of the argument.

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ rbegin = /* unspecified */;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr std::input_or_output_iterator auto rbegin( T&& t );
```
_(since C++20)_

## Notes
If the argument is an rvalue (i.e. T is an object type) and [ranges::enable_borrowed_range](/cpp/ranges/borrowed_range/)<[std::remove_cv_t](/cpp/types/remove_cv/)<T>> is false, the call to ranges::rbegin is ill-formed, which also results in substitution failure.

The return type models [std::input_or_output_iterator](/cpp/iterator/input_or_output_iterator/) in all cases.

The C++20 standard requires that if the underlying rbegin function call returns a prvalue, the return value is move-constructed from the materialized temporary object. All implementations directly return the prvalue instead. The requirement is corrected by the post-C++20 proposal [P0849R8](https://wg21.link/P0849R8) to match the implementations.

## Example
```cpp
#include <iostream>
#include <ranges>
#include <span>
#include <vector>
 
int main()
{
    std::vector<int> v = {3, 1, 4};
    auto vi = std::ranges::rbegin(v);
    std::cout << *vi << '\n';
    *vi = 42; // OK
 
    int a[] = {-5, 10, 15};
    auto ai = std::ranges::rbegin(a);
    std::cout << *ai << '\n';
    *ai = 42; // OK
 
    // auto x_x = std::ranges::rbegin(std::vector{6, 6, 6});
    // ill-formed: the argument is an rvalue (see Notes ↑)
 
    auto si = std::ranges::rbegin(std::span{a}); // OK
    static_assert(std::ranges::enable_borrowed_range<
        std::remove_cv_t<decltype(std::span{a})>>);
    *si = 42; // OK
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2602R2 | C++20 | there's machinery to prohibit certain non-member rbegin found by ADL | removed such machinery |

## See also
- [ranges::crbegin](/cpp/ranges/crbegin/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
