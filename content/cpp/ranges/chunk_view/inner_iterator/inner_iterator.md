---
title: "std::ranges::chunk_view<V>::inner-iterator::inner-iterator"
source_path: "cpp/ranges/chunk_view/inner_iterator/inner_iterator"
category: "ranges"
since: "C++23"
---

Construct an iterator.

## Declarations
```cpp
/*inner-iterator*/( /*inner-iterator*/&& other ) = default;
```
_(since C++23)_

```cpp
private:
constexpr explicit /*inner-iterator*/( chunk_view& parent );
```
_(exposition only*)_

## Parameters
- `other`: an iterator
- `parent`: the enclosing ranges::chunk_view object

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/ranges/chunk_view/inner_iterator/operator/)
