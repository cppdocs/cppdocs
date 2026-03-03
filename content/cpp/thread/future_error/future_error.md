---
title: "std::future_error::future_error"
source_path: "cpp/thread/future_error/future_error"
category: "thread"
since: "C++11"
---

1) Copy constructor. Initializes the contents of the new future_error object with those of other. If *this and other both have dynamic type std::future_error then [std::strcmp](/cpp/string/byte/strcmp/)(what(), other.what()) == 0.

## Declarations
```cpp
future_error( const future_error& other ) noexcept;
```
_(since C++11)_

```cpp
explicit future_error( std::future_errc ec );
```
_(since C++17)_

## Parameters
- `other`: another future_error object to copy
- `ec`: error code

## Notes
There is no standard-compliant way for the user to construct a future_error other than copying from another future_error prior to C++17. C++11 and C++14 depict an exposition-only public constructor taking a [std::error_code](/cpp/error/error_code/), and some implementations provide such a constructor.
