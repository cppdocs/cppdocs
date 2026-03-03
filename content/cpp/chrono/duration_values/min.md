---
title: "std::chrono::duration_values<Rep>::min"
source_path: "cpp/chrono/duration_values/min"
category: "chrono"
since: "C++20"
---

Returns the lowest possible representation.

## Declarations
```cpp
static constexpr Rep min();
```
_(since C++11) (until C++20)_

```cpp
static constexpr Rep min() noexcept;
```
_(since C++20)_

## Return value
[std::numeric_limits](/cpp/types/numeric_limits/)<Rep>::lowest()

## See also
- [min](/cpp/chrono/duration/min/)
- [zero](/cpp/chrono/duration_values/zero/)
- [max](/cpp/chrono/duration_values/max/)
