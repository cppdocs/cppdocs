---
title: "std::basic_stacktrace<Allocator>::empty"
source_path: "cpp/utility/basic_stacktrace/empty"
category: "utility"
since: "C++23"
---

Checks if the stacktrace has no stacktrace entries.

## Declarations
```cpp
bool empty() const noexcept;
```
_(since C++23)_

## Return value
true if the stacktrace is empty, false otherwise.

## Example
```cpp
#include <stacktrace>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
    std::stacktrace bktr;
    std::cout << "Initially, bktr.empty(): " << bktr.empty() << '\n';
 
    bktr = std::stacktrace::current();
    std::cout << "After getting entries, bktr.empty(): " << bktr.empty() << '\n';
}
```

## See also
- [size](/cpp/utility/basic_stacktrace/size/)
