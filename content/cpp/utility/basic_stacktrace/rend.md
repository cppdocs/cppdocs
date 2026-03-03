---
title: "std::basic_stacktrace<Allocator>::rend, std::basic_stacktrace<Allocator>::crend"
source_path: "cpp/utility/basic_stacktrace/rend"
category: "utility"
since: "C++23"
---

Returns a reverse iterator pointing past the last entry of the reversed basic_stacktrace. It corresponds to the iterator preceding the first entry of the original basic_stacktrace. This iterator acts as a placeholder, attempting to dereference it results in undefined behavior.

## Declarations
```cpp
const_reverse_iterator rend() const noexcept;
```
_(since C++23)_

```cpp
const_reverse_iterator crend() const noexcept;
```
_(since C++23)_

## Return value
The end iterator of the reversed basic_stacktrace.

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
- [rbegincrbegin](/cpp/utility/basic_stacktrace/rbegin/)
