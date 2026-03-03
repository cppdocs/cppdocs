---
title: "std::experimental::make_observer"
source_path: "cpp/experimental/observer_ptr/make_observer"
header: "<experimental/memory>"
category: "experimental"
---

Creates an observer_ptr object, deducing the template argument from the type of the function argument.

## Declarations
```cpp
template< class W >
std::experimental::observer_ptr<W> make_observer( W* p ) noexcept;
```
_(library fundamentals TS v2)_

## Parameters
- `p`: pointer to the object to be watched by the observer_ptr object

## Return value
A observer_ptr object, created as if by [std::experimental::observer_ptr](/cpp/experimental/observer_ptr/)<W>(p).

## Example
This section is incompleteReason: no example
