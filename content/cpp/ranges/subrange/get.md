---
title: "std::ranges::get(std::ranges::subrange)"
source_path: "cpp/ranges/subrange/get"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Provides [structured binding](/cpp/language/structured_binding/) support.

## Declarations
```cpp
template< std::size_t N, class I, class S, ranges::subrange_kind K >
requires ((N == 0 && std::copyable<I>) || N == 1)
constexpr auto get( const ranges::subrange<I, S, K>& r );
```
_(since C++20)_

```cpp
template< std::size_t N, class I, class S, ranges::subrange_kind K >
requires (N < 2)
constexpr auto get( ranges::subrange<I, S, K>&& r );
```
_(since C++20)_

```cpp
namespace std { using ranges::get; }
```
_(since C++20)_

## Parameters
- `r`: a subrange

## Example
```cpp
#include <array>
#include <iostream>
#include <iterator>
#include <ranges>
 
int main()
{
    std::array a{1, -2, 3, -4};
 
    std::ranges::subrange sub_a{std::next(a.begin()), std::prev(a.end())};
    std::cout << *std::ranges::get<0>(sub_a) << ' '   // == *(begin(a) + 1)
              << *std::ranges::get<1>(sub_a) << '\n'; // == *(end(a) - 1)
 
    *std::get<0>(sub_a) = 42; // OK
//  *std::get<2>(sub_a) = 13; // Error: index can only be 0 or 1
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3589 | C++20 | overload (1) copies begin_ if N is 0, but I might not model copyable | added constraints |

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [get(std::tuple)](/cpp/utility/tuple/get/)
- [get(std::pair)](/cpp/utility/pair/get/)
- [get(std::array)](/cpp/container/array/get/)
- [get(std::variant)](/cpp/utility/variant/get/)
- [get(std::complex)](/cpp/numeric/complex/get/)
- [std::complex](/cpp/numeric/complex/)
