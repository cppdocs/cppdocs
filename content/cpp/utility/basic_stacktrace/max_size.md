---
title: "std::basic_stacktrace<Allocator>::max_size"
source_path: "cpp/utility/basic_stacktrace/max_size"
category: "utility"
since: "C++23"
---

Returns the maximum number of elements the underlying container (typically a [std::vector](/cpp/container/vector/)) is able to hold due to system or library implementation limitations, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()) for the largest underlying container.

## Declarations
```cpp
size_type max_size() const noexcept;
```
_(since C++23)_

## Return value
Maximum number of elements.

## Notes
This value typically reflects the theoretical limit on the size of the underlying container, at most [std::numeric_limits](/cpp/types/numeric_limits/)<difference_type>::max(). At runtime, the size of the container may be limited to a value smaller than max_size() by the amount of RAM available.

## Example
```cpp
#include <iostream>
#include <stacktrace>
 
int main()
{
    std::stacktrace trace;
    std::cout << "Maximum size of a 'basic_stacktrace' is " << trace.max_size() << "\n";
}
```

## See also
- [size](/cpp/utility/basic_stacktrace/size/)
