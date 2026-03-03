---
title: "std::mask_array<T>::operator="
source_path: "cpp/numeric/valarray/mask_array/operator"
category: "numeric"
---

Assigns values to all referred elements.

## Declarations
```cpp
void operator=( const T& value ) const;
```

```cpp
void operator=( const std::valarray<T>& val_arr ) const;
```

```cpp
const mask_array& operator=( const mask_array& other_arr ) const;
```

## Parameters
- `value`: a value to assign to all of the referred elements
- `val_arr`: std::valarray to assign
- `other_arr`: std::mask_array to assign

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <valarray>
 
void print(std::valarray<int> const& v)
{
    for (int e : v)
        std::cout << std::setw(2) << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    const auto init = {1, 2, 3, 4, 5, 6, 7, 8};
    std::valarray<int> v;
 
    v = init;
    v[(v % 2) == 0] = 0; // (1)
    print(v);
 
    v = init;
    v[(v % 2) == 1] = std::valarray<int>{-1, -2, -3, -4}; // (2)
    print(v);
 
    v = init;
    v[(v % 2) == 0] = v[(v % 2) == 1]; // (3)
    print(v);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 123 | C++98 | overload (2) was non-const | made const |
| LWG 253 | C++98 | the copy assignment operator was private | made public |
| LWG 621 | C++98 | the copy assignment operator was non-const | made const |
