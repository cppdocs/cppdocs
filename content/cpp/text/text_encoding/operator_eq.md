---
title: "operator==(std::text_encoding)"
source_path: "cpp/text/text_encoding/operator"
aliases:
  - "/cpp/text/text_encoding/operator/"
category: "text"
since: "C++26"
---

Performs comparison operations on text_encoding objects.

## Declarations
```cpp
friend constexpr bool operator==( const text_encoding& a,
const text_encoding& b ) noexcept;
```
_(since C++26)_

```cpp
friend constexpr bool operator==( const text_encoding& a, id i ) noexcept;
```
_(since C++26)_

## Parameters
- `a, b`: text_encoding objects to compare
- `i`: id value to compare with the MIBenum value contained in a

## Example
This section is incompleteReason: no example

## See also
- [operator==operator!=](/cpp/locale/locale/operator_cmp/)
