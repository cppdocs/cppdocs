---
title: "std::experimental::observer_ptr<W>::reset"
source_path: "cpp/experimental/observer_ptr/reset"
category: "experimental"
---

Set *this to watch the object pointed to by p. get() returns p after the call.

## Declarations
```cpp
constexpr void reset( element_type* p = nullptr ) noexcept;
```
_(library fundamentals TS v2)_

## Parameters
- `ptr`: pointer to a new object to watch

## Example
This section is incompleteReason: no example

## See also
- [release](/cpp/experimental/observer_ptr/release/)
