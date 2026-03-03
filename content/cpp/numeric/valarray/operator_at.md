---
title: "std::valarray<T>::operator[]"
source_path: "cpp/numeric/valarray/operator_at"
category: "numeric"
---

Retrieve single elements or portions of the array.

## Declarations
```cpp
const T& operator[]( std::size_t pos ) const;
```

```cpp
T& operator[]( std::size_t pos );
```

```cpp
std::valarray<T> operator[]( std::slice slicearr ) const;
```

```cpp
std::slice_array<T> operator[]( std::slice slicearr );
```

```cpp
std::valarray<T> operator[]( const std::gslice& gslicearr ) const;
```

```cpp
std::gslice_array<T> operator[]( const std::gslice& gslicearr );
```

```cpp
std::valarray<T> operator[]( const std::valarray<bool>& boolarr ) const;
```

```cpp
std::mask_array<T> operator[]( const std::valarray<bool>& boolarr );
```

```cpp
std::valarray<T> operator[]( const std::valarray<std::size_t>& indarr ) const;
```

```cpp
std::indirect_array<T> operator[]( const std::valarray<std::size_t>& indarr );
```

## Parameters
- `pos`: position of the element to return
- `slicearr`: slice of the elements to return
- `gslicearr`: gslice of the elements to return
- `boolarr`: mask of the elements to return
- `indarr`: indices of the elements to return

## Notes
For proper [std::valarray](/cpp/numeric/valarray/) values a, b and proper [std::size_t](/cpp/types/size_t/) values i, j, all of the following expressions always evaluate to true:

References become invalid on [resize()](/cpp/numeric/valarray/resize/) or when the array is destructed.

For overloads (3,5,7,9), The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

Slice/mask/indirect index accesses do not chain: v[v == n][[std::slice](/cpp/numeric/valarray/slice/)(0, 5, 2)] = x; is an error because [std::mask_array](/cpp/numeric/valarray/mask_array/) (the type of v[v == n]) does not have operator[].

## Example
```cpp
#include <cstddef>
#include <iomanip>
#include <iostream>
#include <valarray>
 
int main() 
{
    std::valarray<int> data = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
 
    std::cout << "Initial valarray:   ";
    for (int n : data)
        std::cout << std::setw(3) << n;
    std::cout << '\n';
 
    data[data > 5] = -1; // valarray<bool> overload of operator[]
    // the type of data > 5 is std::valarray<bool>
    // the type of data[data > 5] is std::mask_array<int>
 
    std::cout << "After v[v > 5] = -1:";
    for (std::size_t n = 0; n < data.size(); ++n) 
        std::cout << std::setw(3) << data[n]; // regular operator[]
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 389 | C++98 | the return type of overload (1) was T | corrected to const T& |
| LWG 430 | C++98 | the behavior was unclear for overloads(3-10) if an invalid subset is specified | the behavior is undefined in this case |
