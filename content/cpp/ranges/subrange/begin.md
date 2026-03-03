---
title: "std::ranges::subrange<I,S,K>::begin"
source_path: "cpp/ranges/subrange/begin"
category: "ranges"
since: "C++20"
---

Obtains the iterator to the beginning of the [subrange](/cpp/ranges/subrange/).

## Declarations
```cpp
constexpr I begin() const requires std::copyable<I>;
```
_(since C++20)_

```cpp
constexpr I begin() requires (!std::copyable<I>);
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## See also
- [end](/cpp/ranges/subrange/end/)
- [begincbegin](/cpp/iterator/begin/)
- [ranges::begin](/cpp/ranges/begin/)
