---
title: "std::chrono::zoned_time<Duration,TimeZonePtr>::operator="
source_path: "cpp/chrono/zoned_time/operator"
category: "chrono"
since: "C++20"
---

Assign the value of other to *this.

## Declarations
```cpp
zoned_time& operator=( const zoned_time& other ) = default;
```
_(since C++20)_

```cpp
zoned_time& operator=( const std::chrono::sys_time<Duration>& other );
```
_(since C++20)_

```cpp
zoned_time& operator=( const std::chrono::local_time<Duration>& other );
```
_(since C++20)_

## Return value
*this
