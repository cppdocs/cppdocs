---
title: "std::ranges::take_while_view<V,Pred>::end"
source_path: "cpp/ranges/take_while_view/end"
category: "ranges"
since: "C++20"
---

Returns a [sentinel](/cpp/ranges/take_while_view/sentinel/) representing the end of the view.

## Declarations
```cpp
constexpr auto end() requires (!/*simple-view*/<V>);
```
_(since C++20)_

```cpp
constexpr auto end() const requires
ranges::range<const V> &&
std::indirect_unary_predicate<const Pred, ranges::iterator_t<const V>>;
```
_(since C++20)_

## Return value
A [sentinel](/cpp/ranges/take_while_view/sentinel/) representing the end of the view.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3450 | C++20 | the const overload might return a sentinel non-comparable to the iterator | constrained |

## See also
- [begin](/cpp/ranges/take_while_view/begin/)
- [operator==](/cpp/ranges/take_while_view/sentinel/operator_cmp/)
- [take_while_view::begin](/cpp/ranges/take_while_view/begin/)
