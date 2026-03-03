---
title: "std::ranges::join_view<V>::iterator<Const>::operator*,->"
source_path: "cpp/ranges/join_view/iterator/operator"
category: "ranges"
since: "C++20"
---

Returns the element the underlying iterator [inner_](/cpp/ranges/join_view/iterator/#Data_members) points to.

## Declarations
```cpp
constexpr decltype(auto) operator*() const;
```
_(since C++20)_

```cpp
constexpr InnerIter operator->() const
requires /*has-arrow*/<InnerIter> && std::copyable<InnerIter>;
```
_(since C++20)_

## Return value
The current element.

## Example
This section is incompleteReason: no example
