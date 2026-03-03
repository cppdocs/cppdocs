---
title: "std::chrono::time_zone::get_info"
source_path: "cpp/chrono/time_zone/get_info"
category: "chrono"
since: "C++20"
---

Obtains information about this time zone at the time point tp.

## Declarations
```cpp
template< class Duration >
std::chrono::sys_info get_info( const std::chrono::sys_time<Duration>& tp ) const;
```
_(since C++20)_

```cpp
template< class Duration >
std::chrono::local_info get_info( const std::chrono::local_time<Duration>& tp ) const;
```
_(since C++20)_
