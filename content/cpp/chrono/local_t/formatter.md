---
title: "std::formatter<std::chrono::local_time>, std::chrono::local_time_format"
source_path: "cpp/chrono/local_t/formatter"
header: "<chrono>"
category: "chrono"
---

Specialization of [std::formatter](/cpp/utility/format/formatter/) that defines formatting rules for a std::chrono::local_time.

## Declarations
```cpp
template< class Duration, class CharT >
struct formatter<std::chrono::local_time<Duration>, CharT>;
```

```cpp
template< class Duration >
struct /*local-time-format-t*/ {
std::chrono::local_time<Duration> time; // exposition only
const std::string* abbrev; // exposition only
const std::chrono::seconds* offset; // exposition only
};
```
_(exposition only*)_

```cpp
template< class Duration >
/*local-time-format-t*/<Duration>
local_time_format( const std::chrono::local_time<Duration>& tp,
const std::string* abbrev = nullptr,
const std::chrono::seconds* offset_sec = nullptr );
```

```cpp
template< class Duration, class CharT >
struct formatter</*local-time-format-t*/<Duration>, CharT>;
```

## Example
This section is incompleteReason: no example

## See also
- [format](/cpp/utility/format/format/)
