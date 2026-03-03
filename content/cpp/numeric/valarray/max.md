---
title: "std::valarray<T>::max"
source_path: "cpp/numeric/valarray/max"
category: "numeric"
---

Computes the maximum value of the elements.

## Declarations
```cpp
T max() const;
```

## Return value
The maximum of the elements.

## Example
```cpp
#include <valarray>
#include <iostream>
 
int main()
{
    std::valarray<double> a{1, 2, 3, 4, 5, 6, 7, 8};
    std::cout << "Maximum value : " << a.max() << "\n";
}
```

## See also
- [min](/cpp/numeric/valarray/min/)
