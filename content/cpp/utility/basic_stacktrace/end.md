---
title: "std::basic_stacktrace<Allocator>::end, std::basic_stacktrace<Allocator>::cend"
source_path: "cpp/utility/basic_stacktrace/end"
category: "utility"
since: "C++23"
---

Returns the iterator pointing past the last entry of the basic_stacktrace.

## Declarations
```cpp
const_iterator end() const noexcept;
```
_(since C++23)_

```cpp
const_iterator cend() const noexcept;
```
_(since C++23)_

## Return value
The end iterator.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <stacktrace>
 
int main()
{
    auto trace       = std::stacktrace::current();
    auto empty_trace = std::stacktrace{};
 
    // Print stacktrace.
    std::for_each(trace.begin(), trace.end(),
                  [](const auto& f) { std::cout << f << '\n'; });
 
    if (empty_trace.begin() == empty_trace.end())
        std::cout << "stacktrace 'empty_trace' is indeed empty.\n";
}
```

## See also
- [begincbegin](/cpp/utility/basic_stacktrace/begin/)
