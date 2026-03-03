---
title: "std::indirect_array<T>::operator="
source_path: "cpp/numeric/valarray/indirect_array/operator"
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
const indirect_array& operator=( const indirect_array& other_arr ) const;
```

## Parameters
- `value`: a value to assign to all of the referred elements
- `val_arr`: std::valarray to assign
- `other_arr`: std::indirect_array to assign

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <numeric>
#include <valarray>
 
void print(int n, std::valarray<int> const& v)
{
    std::cout << n << ':';
    for (int e : v)
        std::cout << std::setw(3) << e;
    std::cout << '\n';
}
 
int main()
{
    std::valarray<int> v(8);
    std::iota(std::begin(v), std::end(v), 0);
    print(1, v);
 
    std::valarray<std::size_t> idx{1, 3, 5, 7};
    const std::indirect_array<int> ia = v[idx];
    // 'ia' refers to v[1], v[3], v[5], v[7]
    ia = -1; // (1), effectively:
             // v[1] = v[3] = v[5] = v[7] = -1;
    print(2, v);
 
    ia = /*std::valarray<int>*/{-1, -2, -3, -4}; // (2),
        // effectively: v[1] = -1, v[3] = -2, v[5] = -3, v[7] = -4;
    print(3, v);
 
    std::valarray<std::size_t> idx2{0, 2, 4, 6};
    const std::indirect_array<int> ia2 = v[idx2];
    // 'ia2' refers to v[0], v[2], v[4], v[6]
    ia = ia2; // (3), effectively:
              // v[1] = v[0], v[3] = v[2], v[5] = v[4], v[7] = v[6];
    print(4, v);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 123 | C++98 | overload (2) was non-const | made const |
| LWG 253 | C++98 | the copy assignment operator was private | made public |
| LWG 621 | C++98 | the copy assignment operator was non-const | made const |
