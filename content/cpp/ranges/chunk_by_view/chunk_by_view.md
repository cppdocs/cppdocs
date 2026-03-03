---
title: "std::ranges::chunk_by_view<V,Pred>::chunk_by_view"
source_path: "cpp/ranges/chunk_by_view/chunk_by_view"
category: "ranges"
since: "C++23"
---

Constructs a chunk_by_view.

## Declarations
```cpp
chunk_by_view()
requires std::default_initializable<V> &&
std::default_initializable<Pred>
= default;
```
_(since C++23)_

```cpp
constexpr explicit chunk_by_view( V base, Pred pred );
```
_(since C++23)_

## Parameters
- `base`: the view to split
- `pred`: the function object (a binary predicate) used as a splitting criteria

## Example
This section is incompleteReason: no example
