---
title: "std::ranges::join_view<V>::join_view"
source_path: "cpp/ranges/join_view/join_view"
category: "ranges"
since: "C++20"
---

Constructs a join_view.

## Declarations
```cpp
join_view() requires std::default_initializable<V> = default;
```
_(since C++20)_

```cpp
constexpr explicit join_view( V base );
```
_(since C++20)_

## Parameters
- `base`: a view of ranges to be flattened

## Example
This section is incompleteReason: no example
