---
title: "std::valarray<T>::resize"
source_path: "cpp/numeric/valarray/resize"
category: "numeric"
---

Resizes the valarray to contain count elements and assigns value to each element.

## Declarations
```cpp
void resize( std::size_t count, T value = T() );
```

## Parameters
- `count`: new size of the container
- `value`: the value to initialize the new elements with

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <valarray>
 
int main()
{
    std::valarray<int> v{1, 2, 3};
    v.resize(10);
    for (int n : v)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## See also
- [size](/cpp/numeric/valarray/size/)
