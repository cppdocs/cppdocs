---
title: "std::optional<T>::~optional"
source_path: "cpp/utility/optional/~optional"
category: "utility"
---

If the object contains a value and the type T is not trivially destructible (see [std::is_trivially_destructible](/cpp/types/is_destructible/)), destroys the contained value by calling its destructor, as if by value().T::~T().

## Declarations
```cpp
~optional();
```
_(since C++17) (constexpr since C++20)_

## Notes
If T is trivially-destructible, then this destructor is also trivial, so [std::optional](/cpp/utility/optional/)<T> is also trivially-destructible.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2231R1 | C++20 | the destructor was not constexpr while non-trivial destructors can be constexpr in C++20 | made constexpr |
