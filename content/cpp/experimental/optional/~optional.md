---
title: "std::experimental::optional<T>::~optional"
source_path: "cpp/experimental/optional/~optional"
category: "experimental"
---

If the object contains a value and the type T is not trivially destructible (see [std::is_trivially_destructible](/cpp/types/is_destructible/)), destroys the contained value by calling its destructor, as if by val->T::~T().

## Declarations
```cpp
~optional();
```
_(library fundamentals TS)_

## Notes
If T is trivially-destructible, then this destructor is also trivial, so optional<T> is also trivially-destructible.
