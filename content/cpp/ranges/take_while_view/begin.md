---
title: "std::ranges::take_while_view<V,Pred>::begin"
source_path: "cpp/ranges/take_while_view/begin"
category: "ranges"
since: "C++20"
---

Returns an iterator to the first element of the view. Effectively calls [ranges::begin](/cpp/ranges/begin/) on the underlying view [base_](/cpp/ranges/take_while_view/#Data_members).

## Declarations
```cpp
constexpr auto begin() requires (!/*simple-view*/<V>);
```
_(since C++20)_

```cpp
constexpr auto begin() const requires
ranges::range<const V> &&
std::indirect_unary_predicate<const Pred, ranges::iterator_t<const V>>;
```
_(since C++20)_

## Return value
[ranges::begin](/cpp/ranges/begin/)(base_), where [base_](/cpp/ranges/take_while_view/#Data_members) is the underlying view.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3450 | C++20 | the const overload might return an iterator non-comparable to the sentinel | constrained |

## See also
- [end](/cpp/ranges/take_while_view/end/)
- [operator==](/cpp/ranges/take_while_view/sentinel/operator_cmp/)
