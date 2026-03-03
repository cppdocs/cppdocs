---
title: "std::counting_semaphore<LeastMaxValue>::counting_semaphore"
source_path: "cpp/thread/counting_semaphore/counting_semaphore"
category: "thread"
since: "C++20"
---

1) Constructs an object of type std::counting_semaphore with the internal counter initialized to desired.

## Declarations
```cpp
constexpr explicit counting_semaphore( std::ptrdiff_t desired );
```
_(since C++20)_

```cpp
counting_semaphore( const counting_semaphore& ) = delete;
```
_(since C++20)_

## Parameters
- `desired`: the value to initialize counting_semaphore's counter with
