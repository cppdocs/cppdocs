---
title: "std::ranges::common_view<V>::common_view"
source_path: "cpp/ranges/common_view/common_view"
category: "ranges"
since: "C++20"
---

Constructs a common_view.

## Declarations
```cpp
common_view() = default;
```
_(since C++20)_

```cpp
constexpr explicit common_view( V r );
```
_(since C++20)_

## Parameters
- `r`: underlying view to be adapted into a common-range

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3405 | C++20 | the redundant converting constructor might cause constraint recursion | removed |
