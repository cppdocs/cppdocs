---
title: "operator==,!=,<,<=,>,>=,<=>(std::tuple)"
source_path: "cpp/utility/tuple/operator_cmp"
header: "<tuple>"
category: "utility"
since: "C++20"
---

1,2) Compares every element of the tuple lhs with the corresponding element of the tuple rhs by operator==.

## Declarations
```cpp
template< class... TTypes, class... UTypes >
bool operator==( const std::tuple<TTypes...>& lhs,
const std::tuple<UTypes...>& rhs );
```
_(since C++11) (constexpr since C++14)_

```cpp
template< class... TTypes, class... UTypes >
bool operator!=( const std::tuple<TTypes...>& lhs,
const std::tuple<UTypes...>& rhs );
```
_(since C++11) (constexpr since C++14) (until C++20)_

```cpp
template< class... TTypes, class... UTypes >
bool operator<( const std::tuple<TTypes...>& lhs,
const std::tuple<UTypes...>& rhs );
```
_(since C++11) (constexpr since C++14) (until C++20)_

```cpp
template< class... TTypes, class... UTypes >
bool operator<=( const std::tuple<TTypes...>& lhs,
const std::tuple<UTypes...>& rhs );
```
_(since C++11) (constexpr since C++14) (until C++20)_

```cpp
template< class... TTypes, class... UTypes >
bool operator>( const std::tuple<TTypes...>& lhs,
const std::tuple<UTypes...>& rhs );
```
_(since C++11) (constexpr since C++14) (until C++20)_

```cpp
template< class... TTypes, class... UTypes >
bool operator>=( const std::tuple<TTypes...>& lhs,
const std::tuple<UTypes...>& rhs );
```
_(since C++11) (constexpr since C++14) (until C++20)_

```cpp
template< class... TTypes, class... UTypes >
constexpr std::common_comparison_category_t<
synth-three-way-result<TTypes, Elems>...>
operator<=>( const std::tuple<TTypes...>& lhs,
const std::tuple<UTypes...>& rhs );
```
_(since C++20)_

```cpp
template< class... TTypes, tuple-like UTuple >
constexpr bool operator==( const tuple<TTypes...>& lhs, const UTuple& rhs );
```
_(since C++23)_

```cpp
template< class... TTypes, tuple-like UTuple >
constexpr std::common_comparison_category_t<
synth-three-way-result<TTypes, /* Elems */>...>
operator<=>( const tuple<TTypes...>& lhs, const UTuple& rhs );
```
_(since C++23)_

## Parameters
- `lhs, rhs`: tuples to compare

## Notes
The relational operators are defined in terms of each element's operator<.

The relational operators are defined in terms of [synth-three-way](/cpp/standard_library/synth-three-way/), which uses operator<=> if possible, or operator< otherwise.

Notably, if an element type does not itself provide operator<=>, but is implicitly convertible to a three-way comparable type, that conversion will be used instead of operator<.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <tuple>
#include <vector>
 
int main()
{
    std::vector<std::tuple<int, std::string, float>> v
    {
        {2, "baz", -0.1},
        {2, "bar", 3.14},
        {1, "foo", 10.1},
        {2, "baz", -1.1},
    };
    std::sort(v.begin(), v.end());
 
    for (const auto& p: v)
        std::cout << "{ " << get<0>(p)
                  << ", " << get<1>(p)
                  << ", " << get<2>(p)
                  << " }\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2114(P2167R3) | C++11 | type preconditions for boolean operations were missing | added |

## See also
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/utility/pair/operator_cmp/)
