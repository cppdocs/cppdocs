---
title: "std::nostopstate, std::nostopstate_t"
source_path: "cpp/thread/stop_source/nostopstate_t"
header: "<stop_token>"
category: "thread"
since: "C++20"
---

1) Empty tag type intended for use as a placeholder in [std::stop_source](/cpp/thread/stop_source/) non-default constructor, that makes the constructed [std::stop_source](/cpp/thread/stop_source/) empty with no associated stop-state.

## Declarations
```cpp
struct nostopstate_t { explicit nostopstate_t() = default; };
```
_(since C++20)_

```cpp
inline constexpr std::nostopstate_t nostopstate {};
```
_(since C++20)_

## See also
- [stop_source](/cpp/thread/stop_source/)
- [std::jthread](/cpp/thread/jthread/)
