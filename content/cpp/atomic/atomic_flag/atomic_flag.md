---
title: "std::atomic_flag::atomic_flag"
source_path: "cpp/atomic/atomic_flag/atomic_flag"
header: "<atomic>"
category: "atomic"
since: "C++20"
---

Constructs a new [std::atomic_flag](/cpp/atomic/atomic_flag/).

## Declarations
```cpp
atomic_flag() noexcept = default;
```
_(since C++11) (until C++20)_

```cpp
constexpr atomic_flag() noexcept;
```
_(since C++20)_

```cpp
atomic_flag( const atomic_flag& ) = delete;
```
_(since C++11)_

## See also
- [ATOMIC_FLAG_INIT](/cpp/atomic/atomic_flag_init/)
- [std::atomic_flag](/cpp/atomic/atomic_flag/)
