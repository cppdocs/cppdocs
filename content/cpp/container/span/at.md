---
title: "std::span<T,Extent>::at"
source_path: "cpp/container/span/at"
category: "container"
since: "C++26"
---

Returns a reference to the element at specified location pos, with bounds checking.

## Declarations
```cpp
constexpr reference at( size_type pos ) const;
```
_(since C++26)_

## Parameters
- `pos`: position of the element to return

## Return value
Reference to the requested element

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_span
202311L
(C++26)
std::span::at

## Example
```cpp
#include <chrono>
#include <cstddef>
#include <iostream>
#include <span>
#include <stdexcept>
 
int main()
{
    int x[]{1, 2, 4, 5, 5, 6};
    std::span data(x);
 
    // Set element 1
    data.at(1) = 88;
 
    // Read element 2
    std::cout << "Element at index 2 has value " << data.at(2) << '\n';
 
    std::cout << "data size = " << data.size() << '\n';
 
    try
    {
        // Try to set an element at random position >= size()
        auto moon_phase = []
        {
            return std::chrono::system_clock::now().time_since_epoch().count() % 8;
        };
        data.at(data.size() + moon_phase()) = 13;
    }
    catch(const std::out_of_range& ex)
    {
        std::cout << ex.what() << '\n';
    }
 
    // Print final values
    std::cout << "data:";
    for (int elem : data)
        std::cout << ' ' << elem;
    std::cout << '\n';
}
```

## See also
- [operator[]](/cpp/container/span/operator_at/)
