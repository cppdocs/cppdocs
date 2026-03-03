---
title: "std::valarray<T>::min"
source_path: "cpp/numeric/valarray/min"
category: "numeric"
---

Computes the minimum value of the elements.

## Declarations
```cpp
T min() const;
```

## Return value
The minimum of the elements.

## Example
```cpp
#include <valarray>
#include <iostream>
 
int main()
{
    std::valarray<double> a{1, 2, 3, 4, 5, 6, 7, 8};
    std::cout << "Minimum value : " << a.min() << "\n";
}
```

## See also
- [max](/cpp/numeric/valarray/max/)
