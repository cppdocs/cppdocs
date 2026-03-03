---
title: "operator==,!=,<,<=,>,>=,<=>(std::pair)"
source_path: "cpp/utility/pair/operator_cmp"
header: "<utility>"
category: "utility"
since: "C++14"
---

1,2) Tests if both elements of lhs and rhs are equal, that is, compares lhs.first with rhs.first and lhs.second with rhs.second.The behavior is undefined if the type and value category of either lhs.first == rhs.first or lhs.second == rhs.second do not meet the [BooleanTestable](/cpp/named_req/booleantestable/) requirements.
(until C++26)
This overload participates in overload resolution only if both decltype(lhs.first == rhs.first) and decltype(lhs.second == rhs.second) model [boolean-testable](/cpp/concepts/boolean-testable/).
(since C++26)

## Declarations
```cpp
template< class T1, class T2, class U1, class U2 >
bool operator==( const std::pair<T1, T2>& lhs, const std::pair<U1, U2>& rhs );
```
_(until C++14)_

```cpp
template< class T1, class T2, class U1, class U2 >
constexpr bool operator==( const std::pair<T1, T2>& lhs,
const std::pair<U1, U2>& rhs );
```
_(since C++14)_

```cpp
template< class T1, class T2, class U1, class U2 >
bool operator!=( const std::pair<T1, T2>& lhs, const std::pair<U1, U2>& rhs );
```
_(until C++14)_

```cpp
template< class T1, class T2, class U1, class U2 >
constexpr bool operator!=( const std::pair<T1, T2>& lhs,
const std::pair<U1, U2>& rhs );
```
_(since C++14) (until C++20)_

```cpp
template< class T1, class T2, class U1, class U2 >
bool operator<( const std::pair<T1, T2>& lhs, const std::pair<U1, U2>& rhs );
```
_(until C++14)_

```cpp
template< class T1, class T2, class U1, class U2 >
constexpr bool operator<( const std::pair<T1, T2>& lhs,
const std::pair<U1, U2>& rhs );
```
_(since C++14) (until C++20)_

```cpp
template< class T1, class T2, class U1, class U2 >
bool operator<=( const std::pair<T1, T2>& lhs, const std::pair<U1, U2>& rhs );
```
_(until C++14)_

```cpp
template< class T1, class T2, class U1, class U2 >
constexpr bool operator<=( const std::pair<T1, T2>& lhs,
const std::pair<U1, U2>& rhs );
```
_(since C++14) (until C++20)_

```cpp
template< class T1, class T2, class U1, class U2 >
bool operator>( const std::pair<T1, T2>& lhs, const std::pair<U1, U2>& rhs );
```
_(until C++14)_

```cpp
template< class T1, class T2, class U1, class U2 >
constexpr bool operator>( const std::pair<T1, T2>& lhs,
const std::pair<U1, U2>& rhs );
```
_(since C++14) (until C++20)_

```cpp
template< class T1, class T2, class U1, class U2 >
bool operator>=( const std::pair<T1, T2>& lhs, const std::pair<U1, U2>& rhs );
```
_(until C++14)_

```cpp
template< class T1, class T2, class U1, class U2 >
constexpr bool operator>=( const std::pair<T1, T2>& lhs,
const std::pair<U1, U2>& rhs );
```
_(since C++14) (until C++20)_

```cpp
template< class T1, class T2, class U1, class U2 >
constexpr std::common_comparison_category_t<synth-three-way-result<T1, U1>,
synth-three-way-result<T2, U2>>
operator<=>( const std::pair<T1, T2>& lhs, const std::pair<U1, U2>& rhs );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: pairs to compare

## Notes
The relational operators are defined in terms of each element's operator<.

The relational operators are defined in terms of [synth-three-way](/cpp/standard_library/synth-three-way/), which uses operator<=> if possible, or operator< otherwise.

Notably, if an element type does not itself provide operator<=>, but is implicitly convertible to a three-way comparable type, that conversion will be used instead of operator<.

## Example
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <string>
#include <utility>
#include <vector>
 
int main()
{
    std::vector<std::pair<int, std::string>> v = {{2, "baz"}, {2, "bar"}, {1, "foo"}};
    std::sort(v.begin(), v.end());
 
    for (auto p : v)
        std::cout << '{' << p.first << ", " << std::quoted(p.second) << "}\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 296 | C++98 | the descriptions of operators other than == and < were missing | added |
| LWG 2114(P2167R3) | C++98 | type preconditions for boolean operations were missing | added |
| LWG 3865 | C++98 | comparison operators only accepted pairs of the same type | accept pairs of different types |

## See also
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/utility/tuple/operator_cmp/)
