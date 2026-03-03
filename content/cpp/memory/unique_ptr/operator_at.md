---
title: "std::unique_ptr<T,Deleter>::operator[]"
source_path: "cpp/memory/unique_ptr/operator_at"
category: "memory"
---

operator[] provides access to elements of an array managed by a unique_ptr.

## Declarations
```cpp
T& operator[]( std::size_t i ) const;
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `i`: the index of the element to be returned

## Return value
Returns the element at index i, i.e. [get()[i]](/cpp/memory/unique_ptr/get/).

## Example
```cpp
#include <iostream>
#include <memory>
 
int main() 
{
    const int size = 10; 
    std::unique_ptr<int[]> fact(new int[size]);
 
    for (int i = 0; i < size; ++i)
        fact[i] = (i == 0) ? 1 : i * fact[i - 1];
 
    for (int i = 0; i < size; ++i)
        std::cout << i << "! = " << fact[i] << '\n';
}
```

## See also
- [get](/cpp/memory/unique_ptr/get/)
