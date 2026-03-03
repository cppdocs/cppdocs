---
title: "std::inplace_vector<T,N>::operator[]"
source_path: "cpp/container/inplace_vector/operator_at"
category: "container"
since: "C++26"
---

Returns a reference to the element at specified location pos. No bounds checking is performed.

## Declarations
```cpp
constexpr reference operator[]( size_type pos );
```
_(since C++26)_

```cpp
constexpr const_reference operator[]( size_type pos ) const;
```
_(since C++26)_

## Parameters
- `pos`: position of the element to return

## Return value
Reference to the requested element.

## Notes
Unlike [std::map::operator[]](/cpp/container/map/operator_at/), this operator never inserts a new element into the container. Accessing a nonexistent element through this operator is undefined behavior.

## Example
```cpp
#include <inplace_vector>
#include <iostream>
 
int main()
{
    std::inplace_vector<int, 4> numbers{2, 4, 6, 8};
 
    std::cout << "Second element: " << numbers[1] << '\n';
 
    numbers[0] = 5;
 
    std::cout << "All numbers:";
    for (auto i : numbers)
        std::cout << ' ' << i;
    std::cout << '\n';
}
```

## See also
- [at](/cpp/container/inplace_vector/at/)
