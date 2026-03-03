---
title: "std::chrono::hh_mm_ss<Duration>::is_negative, std::chrono::hh_mm_ss<Duration>::hours, std::chrono::hh_mm_ss<Duration>::minutes, std::chrono::hh_mm_ss<Duration>::seconds, std::chrono::hh_mm_ss<Duration>::subseconds"
source_path: "cpp/chrono/hh_mm_ss/accessors"
category: "chrono"
---

Obtains the components of the stored "broken down" time.

## Declarations
```cpp
constexpr bool is_negative() const noexcept;
```

```cpp
constexpr std::chrono::hours hours() const noexcept;
```

```cpp
constexpr std::chrono::minutes minutes() const noexcept;
```

```cpp
constexpr std::chrono::seconds seconds() const noexcept;
```

```cpp
constexpr precision subseconds() const noexcept;
```

## Return value
Let d be the represented duration:

## Example
This section is incompleteReason: no example
