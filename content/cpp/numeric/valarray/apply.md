---
title: "std::valarray<T>::apply"
source_path: "cpp/numeric/valarray/apply"
category: "numeric"
---

Returns a new valarray of the same size with values which are acquired by applying function func to the previous values of the elements.

## Declarations
```cpp
valarray<T> apply( T func(T) ) const;
```

```cpp
valarray<T> apply( T func(const T&) ) const;
```

## Parameters
- `func`: function to apply to the values

## Return value
The resulting valarray with values acquired by applying function func.

## Notes
The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <cmath>
#include <iostream>
#include <valarray>
 
int main()
{
    std::valarray<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    v = v.apply([](int n) -> int
                {
                    return std::round(std::tgamma(n + 1));
                });
    for (auto n : v)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## See also
- [for_each](/cpp/algorithm/for_each/)
- [ranges::for_each](/cpp/algorithm/ranges/for_each/)
