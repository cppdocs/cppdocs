---
title: "std::basic_stacktrace<Allocator>::size"
source_path: "cpp/utility/basic_stacktrace/size"
category: "utility"
since: "C++23"
---

Returns the number of entries in the stacktrace.

## Declarations
```cpp
size_type size() const noexcept;
```
_(since C++23)_

## Return value
The number of entries in the stacktrace.

## Example
```cpp
#include <stacktrace>
#include <iostream>
 
int main()
{ 
    auto trace = std::stacktrace::current();
 
    std::cout << "trace contains " << trace.size() << " entries.\n";
}
```

## See also
- [empty](/cpp/utility/basic_stacktrace/empty/)
- [max_size](/cpp/utility/basic_stacktrace/max_size/)
