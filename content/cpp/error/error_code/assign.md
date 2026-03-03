---
title: "std::error_code::assign"
source_path: "cpp/error/error_code/assign"
category: "error"
since: "C++11"
---

Replaces the contents with error code value val and corresponding category cat.

## Declarations
```cpp
void assign( int val, const error_category& cat ) noexcept;
```
_(since C++11)_

## Parameters
- `val`: platform-dependent error code value to assign
- `cat`: error category corresponding to val

## Return value
(none)

## See also
- [operator=](/cpp/error/error_code/operator/)
