---
title: "std::latch::latch"
source_path: "cpp/thread/latch/latch"
category: "thread"
since: "C++20"
---

1) Constructs a latch and initializes its internal counter. The behavior is undefined if expected is negative or greater than max().

## Declarations
```cpp
constexpr explicit latch( std::ptrdiff_t expected );
```
_(since C++20)_

```cpp
latch( const latch& ) = delete;
```
_(since C++20)_

## Parameters
- `expected`: the initial value of the internal counter
