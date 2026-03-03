---
title: "std::valarray<T>::sum"
source_path: "cpp/numeric/valarray/sum"
category: "numeric"
---

Computes the sum of the elements.

## Declarations
```cpp
T sum() const;
```

## Return value
The sum of the elements.

## Example
```cpp
#include <iostream>
#include <valarray>
 
int main()
{
    std::valarray<int> a = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    std::cout << a.sum() << '\n';
}
```

## See also
- [apply](/cpp/numeric/valarray/apply/)
- [accumulate](/cpp/algorithm/accumulate/)
