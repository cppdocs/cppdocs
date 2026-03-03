---
title: "std::valarray<T>::size"
source_path: "cpp/numeric/valarray/size"
category: "numeric"
---

Returns the number of elements in the valarray.

## Declarations
```cpp
std::size_t size() const;
```

## Return value
Number of elements in the valarray.

## Example
```cpp
#include <iostream>
#include <valarray>
 
int main()
{
    std::valarray<double> a = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    std::cout << "Average: " << a.sum()/a.size() << '\n';
}
```

## See also
- [resize](/cpp/numeric/valarray/resize/)
