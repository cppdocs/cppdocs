---
title: "std::basic_stacktrace<Allocator>::begin, std::basic_stacktrace<Allocator>::cbegin"
source_path: "cpp/utility/basic_stacktrace/begin"
category: "utility"
since: "C++23"
---

Returns an iterator to the first entry of the basic_stacktrace.

## Declarations
```cpp
const_iterator begin() const noexcept;
```
_(since C++23)_

```cpp
const_iterator cbegin() const noexcept;
```
_(since C++23)_

## Return value
Iterator to the first entry.

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
- [endcend](/cpp/utility/basic_stacktrace/end/)
