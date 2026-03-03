---
title: "std::shared_ptr<T>::operator[]"
source_path: "cpp/memory/shared_ptr/operator_at"
category: "memory"
since: "C++17"
---

Index into the array pointed to by the stored pointer.

## Declarations
```cpp
element_type& operator[]( std::ptrdiff_t idx ) const;
```
_(since C++17)_

## Parameters
- `idx`: the array index

## Return value
A reference to the idx-th element of the array, i.e., get()[idx].

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <memory>
 
int main()
{
    const std::size_t arr_size = 10;
    std::shared_ptr<int[]> pis(new int[10]{0, 1, 2, 3, 4, 5, 6, 7, 8, 9});
    for (std::size_t i = 0; i < arr_size; ++i)
        std::cout << pis[i] << ' ';
    std::cout << '\n';
}
```

## See also
- [get](/cpp/memory/shared_ptr/get/)
