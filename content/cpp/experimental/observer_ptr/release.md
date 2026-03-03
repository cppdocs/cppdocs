---
title: "std::experimental::observer_ptr<W>::release"
source_path: "cpp/experimental/observer_ptr/release"
category: "experimental"
---

Stop watching the watched object, if any. get() returns nullptr after the call.

## Declarations
```cpp
constexpr element_type* release() noexcept;
```
_(library fundamentals TS v2)_

## Return value
A pointer to the previously watched object, or nullptr if there was no watched object, i.e. the value which would be returned by get() before the call.

## Example
This section is incompleteReason: no example

## See also
- [get](/cpp/experimental/observer_ptr/get/)
- [reset](/cpp/experimental/observer_ptr/reset/)
