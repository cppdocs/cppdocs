---
title: "std::ranges::chunk_by_view<V,Pred>::iterator::iterator"
source_path: "cpp/ranges/chunk_by_view/iterator/iterator"
category: "ranges"
since: "C++23"
---

Construct an iterator.

## Declarations
```cpp
/*iterator*/() = default;
```
_(since C++23)_

```cpp
private:
constexpr /*iterator*/( chunk_by_view& parent,
ranges::iterator_t<V> current,
ranges::iterator_t<V> next );
```
_(exposition only*)_

## Parameters
- `parent`: a parent object
- `current, next`: iterators

## Example
This section is incompleteReason: no example
