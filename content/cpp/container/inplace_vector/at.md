---
title: "std::inplace_vector<T,N>::at"
source_path: "cpp/container/inplace_vector/at"
category: "container"
since: "C++26"
---

Returns a reference to the element at specified location pos, with bounds checking.

## Declarations
```cpp
constexpr reference at( size_type pos );
```
_(since C++26)_

```cpp
constexpr const_reference at( size_type pos ) const;
```
_(since C++26)_

## Parameters
- `pos`: position of the element to return

## Return value
Reference to the requested element

## Example
```cpp
#include <chrono>
#include <cstddef>
#include <iostream>
#include <inplace_vector>
#include <stdexcept>
 
int main()
{
    std::inplace_vector<int, 6> data{1, 2, 4, 5, 5, 6};
 
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
- [operator[]](/cpp/container/inplace_vector/operator_at/)
