---
title: "std::error_code::operator bool"
source_path: "cpp/error/error_code/operator_bool"
category: "error"
since: "C++11"
---

Checks if the error code value is valid, i.e. non-zero.

## Declarations
```cpp
explicit operator bool() const noexcept;
```
_(since C++11)_

## Return value
false if value() == 0, true otherwise.

## Notes
Although this operator is often used as a convenient shorthand to check if any error was returned, as in if (ec) { /* handle error */ }, such use is not robust: some error codes, for example, HTTP status code 200, may indicate success as well.
