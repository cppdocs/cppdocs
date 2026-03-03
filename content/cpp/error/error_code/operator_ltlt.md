---
title: "std::operator<<(std::error_code)"
source_path: "cpp/error/error_code/operator"
header: "<system_error>"
category: "error"
since: "C++11"
---

Performs stream output operation on error code ec.

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>&
operator<<( basic_ostream<CharT, Traits>& os, const error_code& ec );
```
_(since C++11)_

## Parameters
- `os`: output stream to insert data to
- `ec`: error code

## Return value
os
