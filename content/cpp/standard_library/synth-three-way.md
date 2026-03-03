---
title: "synth-three-way, synth-three-way-result"
source_path: "cpp/standard_library/synth-three-way"
category: "standard_library"
---

1) A function object whose operator() behaves as the synthesized three-way comparison function. Equivalent to:
constexpr auto synth-three-way =
[]<class T, class U>(const T& t, const U& u)
requires requires
{
{ t < u } -> [boolean-testable](/cpp/concepts/boolean-testable/);
{ u < t } -> [boolean-testable](/cpp/concepts/boolean-testable/);
}
{
if constexpr ([std::three_way_comparable_with](/cpp/utility/compare/three_way_comparable/)<T, U>)
return t <=> u;
else
{
if (t < u)
return std::weak_ordering::less;
if (u < t)
return std::weak_ordering::greater;
return std::weak_ordering::equivalent;
}
};

## Declarations
```cpp
constexpr auto synth-three-way = /* see below */;
```
_(since C++20) (exposition only*)_

```cpp
template< class T, class U = T >
using synth-three-way-result =
decltype(synth-three-way(std::declval<T&>(), std::declval<U&>()));
```
_(since C++20) (exposition only*)_

## Parameters
- `t, u`: the values to be compared

## Return value
The compare result.

## See also
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/utility/pair/operator_cmp/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/utility/tuple/operator_cmp/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/container/array/operator_cmp/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/container/deque/operator_cmp/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/container/forward_list/operator_cmp/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/container/list/operator_cmp/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/container/vector/operator_cmp/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/container/map/operator_cmp/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/container/multimap/operator_cmp/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/container/set/operator_cmp/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/container/multiset/operator_cmp/)
