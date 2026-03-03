---
title: "std::ranges::begin"
source_path: "cpp/ranges/begin"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Returns an iterator to the first element of the argument.

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ begin = /* unspecified */;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr std::input_or_output_iterator auto begin( T&& t );
```
_(since C++20)_

## Notes
If the argument is an rvalue (i.e. T is an object type) and [ranges::enable_borrowed_range](/cpp/ranges/borrowed_range/)<[std::remove_cv_t](/cpp/types/remove_cv/)<T>> is false, the call to ranges::begin is ill-formed, which also results in substitution failure.

The return type models [std::input_or_output_iterator](/cpp/iterator/input_or_output_iterator/) in all cases.

The C++20 standard requires that if the underlying begin function call returns a prvalue, the return value is move-constructed from the materialized temporary object. All implementations directly return the prvalue instead. The requirement is corrected by the post-C++20 proposal [P0849R8](https://wg21.link/P0849R8) to match the implementations.

## Example
```cpp
#include <cassert>
#include <ranges>
#include <vector>
 
int main() 
{
    std::vector v{3, 1, 4};
    auto vi = std::ranges::begin(v);
    auto vci = std::ranges::cbegin(v);
    assert(*vi == 3 and *vi == *vci);
    ++vi;
    ++vci; // OK: vci is modifiable object
    *vi = 42; // OK: vi points to mutable element
    // *vci = 13; // Error: vci points to immutable element
 
    int a[]{-5, 10, 15};
    auto ai = std::ranges::begin(a); // works with C-arrays as well
    assert(*ai == -5);
    *ai = 42; // OK
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2602R2 | C++20 | there's machinery to prohibit certain non-member begin found by ADL | removed such machinery |

## See also
- [ranges::cbegin](/cpp/ranges/cbegin/)
- [begincbegin](/cpp/iterator/begin/)
