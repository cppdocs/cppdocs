---
title: "std::experimental::source_location::current"
source_path: "cpp/experimental/source_location/current"
category: "experimental"
---

Constructs a new source_location object.

## Declarations
```cpp
static constexpr source_location current() noexcept;
```
_(library fundamentals TS v2)_

## Return value
If current() is invoked directly (via a function call that names current()), it returns a source_location object with implementation-defined values representing the location of the call. The values should be affected by the [#line preprocessor directive](/cpp/preprocessor/line/) in the same manner as the predefined macros __LINE__ and __FILE__.

## Notes
When current() is used in a default argument, the return value will correspond to the location of the call to current() at the call site.

## See also
- [(constructor)](/cpp/experimental/source_location/source_location/)
