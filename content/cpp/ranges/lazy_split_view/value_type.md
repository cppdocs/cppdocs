---
title: "std::ranges::lazy_split_view<V, Pattern>::outer_iterator<Const>::value_type"
source_path: "cpp/ranges/lazy_split_view/value_type"
category: "ranges"
since: "C++20"
---

The value type of the iterator [ranges::lazy_split_view](/cpp/ranges/lazy_split_view/)<V, Pattern>::[outer_iterator](/cpp/ranges/lazy_split_view/outer_iterator/)<Const>.

## Declarations
```cpp
struct value_type : ranges::view_interface<value_type>
```
_(since C++20)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3593 | C++20 | end was not be noexcept | made noexcept |
| LWG 4013 | C++20 | value_type was default-initializable | not default-initializable |
