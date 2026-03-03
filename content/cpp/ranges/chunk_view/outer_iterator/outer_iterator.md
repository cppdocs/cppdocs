---
title: "std::ranges::chunk_view<V>::outer-iterator::outer-iterator"
source_path: "cpp/ranges/chunk_view/outer_iterator/outer_iterator"
category: "ranges"
since: "C++23"
---

Construct an iterator.

## Declarations
```cpp
/*outer-iterator*/( /*outer-iterator*/&& other ) = default;
```
_(since C++23)_

```cpp
private:
constexpr explicit /*outer-iterator*/( chunk_view& parent );
```
_(exposition only*)_

## Parameters
- `other`: an iterator
- `parent`: the enclosing ranges::chunk_view object

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/ranges/chunk_view/outer_iterator/operator/)
