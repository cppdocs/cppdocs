---
title: "std::regex_error::regex_error"
source_path: "cpp/regex/regex_error/regex_error"
header: "<regex>"
category: "regex"
since: "C++11"
---

1) Constructs a regex_error with a given ecode of type [std::regex_constants::error_type](/cpp/regex/error_type/).

## Declarations
```cpp
regex_error( std::regex_constants::error_type ecode );
```
_(since C++11)_

```cpp
regex_error( const regex_error& other );
```
_(since C++11)_

## Parameters
- `ecode`: error code indicating the error raised in regular expression parsing
- `other`: another regex_error object to copy

## See also
- [error_type](/cpp/regex/error_type/)
