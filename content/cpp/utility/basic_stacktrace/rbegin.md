---
title: "std::basic_stacktrace<Allocator>::rbegin, std::basic_stacktrace<Allocator>::crbegin"
source_path: "cpp/utility/basic_stacktrace/rbegin"
category: "utility"
since: "C++23"
---

Returns a reverse iterator to the first entry of the reversed basic_stacktrace. It corresponds to the last entry of the original basic_stacktrace. If the basic_stacktrace is empty, the returned iterator is equal to rend().

## Declarations
```cpp
const_reverse_iterator rbegin() const noexcept;
```
_(since C++23)_

```cpp
const_reverse_iterator crbegin() const noexcept;
```
_(since C++23)_

## Return value
Reverse iterator to the first entry.

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
    std::for_each(trace.rbegin(), trace.rend(),
                  [](const auto& f) { std::cout << f << '\n'; });
 
    if (empty_trace.rbegin() == empty_trace.rend())
        std::cout << "stacktrace 'empty_trace' is indeed empty.\n";
}
```

## See also
- [rendcrend](/cpp/utility/basic_stacktrace/rend/)
