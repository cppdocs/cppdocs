---
title: "std::compare_partial_order_fallback"
source_path: "cpp/utility/compare/compare_partial_order_fallback"
header: "<compare>"
category: "utility"
since: "C++20"
---

Performs three-way comparison on [subexpressions](/cpp/language/expressions/#Full-expressions) t and u and produces a result of type [std::partial_ordering](/cpp/utility/compare/partial_ordering/), even if the operator <=> is unavailable.

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */
compare_partial_order_fallback = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< class T, class U >
requires /* see below */
constexpr std::partial_ordering
compare_partial_order_fallback( T&& t, U&& u ) noexcept(/* see below */);
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2114(P2167R3) | C++20 | the fallback mechanism only requiredreturn types to be convertible to bool | constraints strengthened |
| LWG 3465 | C++20 | the fallback mechanism did not require u < t to be well-formed | required |

## See also
- [partial_order](/cpp/utility/compare/partial_order/)
