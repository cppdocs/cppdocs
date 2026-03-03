---
title: "std::chrono::duration<Rep,Period>::min"
source_path: "cpp/chrono/duration/min"
category: "chrono"
since: "C++20"
---

Returns a duration with the lowest possible value.

## Declarations
```cpp
static constexpr duration min();
```
_(until C++20)_

```cpp
static constexpr duration min() noexcept;
```
_(since C++20)_

## Return value
duration([std::chrono::duration_values](/cpp/chrono/duration_values/)<rep>::min())

## See also
- [zero](/cpp/chrono/duration/zero/)
- [max](/cpp/chrono/duration/max/)
