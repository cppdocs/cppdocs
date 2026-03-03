---
title: "std::ranges::enumerate_view<V>::end"
source_path: "cpp/ranges/enumerate_view/end"
category: "ranges"
since: "C++23"
---

Returns an [iterator](/cpp/ranges/enumerate_view/iterator/) or a [sentinel](/cpp/ranges/enumerate_view/sentinel/) that compares equal to the end iterator of the enumerate_view.

## Declarations
```cpp
constexpr auto end() requires (!__simple_view<V>);
```
_(since C++23)_

```cpp
constexpr auto end() const requires /*range-with-movable-references*/<const V>;
```
_(since C++23)_

## Return value
An [iterator](/cpp/ranges/enumerate_view/iterator/) or a [sentinel](/cpp/ranges/enumerate_view/sentinel/) representing the end of the enumerate_view, as described above.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3919 | C++23 | ranges::distance may invoke UB for sized common non-forward underlying ranges | sentinel type is returned for such ranges |

## See also
- [begin](/cpp/ranges/enumerate_view/begin/)
- [ranges::end](/cpp/ranges/end/)
