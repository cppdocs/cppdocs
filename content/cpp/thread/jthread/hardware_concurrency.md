---
title: "std::jthread::hardware_concurrency"
source_path: "cpp/thread/jthread/hardware_concurrency"
category: "thread"
since: "C++20"
---

Returns the number of concurrent threads supported by the implementation. The value should be considered only a hint.

## Declarations
```cpp
static unsigned int hardware_concurrency() noexcept;
```
_(since C++20)_

## Return value
Number of concurrent threads supported. If the value is not well defined or not computable, returns 0.

## Example
```cpp
#include <iostream>
#include <thread>
 
int main()
{
    unsigned int n = std::jthread::hardware_concurrency();
    std::cout << n << " concurrent threads are supported.\n";
}
```

## See also
- [hardware_destructive_interference_sizehardware_constructive_interference_size](/cpp/thread/hardware_destructive_interference_size/)
