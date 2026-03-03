---
title: "std::counting_semaphore<LeastMaxValue>::max"
source_path: "cpp/thread/counting_semaphore/max"
category: "thread"
since: "C++20"
---

Returns the internal counter's maximum possible value, which is greater than or equal to LeastMaxValue.

## Declarations
```cpp
constexpr std::ptrdiff_t max() noexcept;
```
_(since C++20)_

## Return value
The internal counter's maximum possible value, as a [std::ptrdiff_t](/cpp/types/ptrdiff_t/).

## Notes
For specialization binary_semaphore, LeastMaxValue is equal to 1.

As its name indicates, the LeastMaxValue is the minimum max value, not the actual max value. Thus max() can yield a number larger than LeastMaxValue.
