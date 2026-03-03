---
title: "std::chars_format"
source_path: "cpp/utility/chars_format"
header: "<charconv>"
category: "utility"
since: "C++17"
---

A [BitmaskType](/cpp/named_req/bitmasktype/) used to specify floating-point formatting for [std::to_chars](/cpp/utility/to_chars/) and [std::from_chars](/cpp/utility/from_chars/).

## Declarations
```cpp
enum class chars_format {
scientific = /*unspecified*/,
fixed = /*unspecified*/,
hex = /*unspecified*/,
general = fixed | scientific
};
```
_(since C++17)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_to_chars
201611L
(C++17)
Elementary string conversions (std::to_chars, std::from_chars)

## Example
This section is incompleteReason: no example

## See also
- [to_chars](/cpp/utility/to_chars/)
- [from_chars](/cpp/utility/from_chars/)
