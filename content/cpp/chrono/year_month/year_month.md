---
title: "std::chrono::year_month::year_month"
source_path: "cpp/chrono/year_month/year_month"
category: "chrono"
since: "C++20"
---

Constructs a year_month object.

## Declarations
```cpp
year_month() = default;
```
_(since C++20)_

```cpp
constexpr year_month( const std::chrono::year& y,
const std::chrono::month& m ) noexcept;
```
_(since C++20)_

## Notes
A more convenient way to construct a year_month is with operator/, e.g., 2007y/[std::chrono::April](/cpp/chrono/month/).

## See also
- [operator/](/cpp/chrono/operator_slash/)
