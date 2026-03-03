---
title: "operator==(std::ranges::take_view::sentinel<Const>)"
source_path: "cpp/ranges/take_view/sentinel/operator_cmp"
category: "ranges"
since: "C++20"
---

Compares a take_view::/*sentinel*/ with a [std::counted_iterator](/cpp/iterator/counted_iterator/) (typically obtained from a call to [take_view::begin](/cpp/ranges/take_view/begin/)).

## Declarations
```cpp
friend constexpr bool
operator==( const std::counted_iterator<ranges::iterator_t<Base>>& y,
const /*sentinel*/& x );
```
_(since C++20)_

```cpp
template< bool OtherC = !Const >
requires std::sentinel_for<ranges::sentinel_t<Base>,
ranges::iterator_t</*add-const-if*/<OtherC, V>>>
friend constexpr bool
operator==( const std::counted_iterator<
ranges::iterator_t</*add-const-if*/<OtherC, V>>>& y,
const /*sentinel*/& x );
```
_(since C++20)_

## Parameters
- `y`: std::counted_iterator to compare
- `x`: sentinel to compare

## Return value
y.count() == 0 || y.base() == x.end_, where end_ denotes the underlying sentinel.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3449 | C++20 | comparison between the iterator and the sentinel ofdifferently const-qualified take_view was unsupported | made supported when possible |
