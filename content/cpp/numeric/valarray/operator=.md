---
title: "std::valarray<T>::operator="
source_path: "cpp/numeric/valarray/operator"
category: "numeric"
since: "C++11"
---

Replaces the contents of the numeric array.

## Declarations
```cpp
valarray<T>& operator=( const valarray<T>& other );
```

```cpp
valarray<T>& operator=( valarray<T>&& other ) noexcept;
```
_(since C++11)_

```cpp
valarray<T>& operator=( const T& val );
```

```cpp
valarray<T>& operator=( const std::slice_array<T>& other );
```

```cpp
valarray<T>& operator=( const std::gslice_array<T>& other );
```

```cpp
valarray<T>& operator=( const std::mask_array<T>& other );
```

```cpp
valarray<T>& operator=( const std::indirect_array<T>& other );
```

```cpp
valarray<T>& operator=( std::initializer_list<T> il );
```
_(since C++11)_

## Parameters
- `other`: another numeric array (or a mask) to assign
- `val`: the value to initialize each element with
- `il`: initializer list to assign

## Return value
*this

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <valarray>
 
void print(const char* rem, const std::valarray<int>& v)
{
    std::cout << std::left << std::setw(36) << rem << std::right;
    for (int n : v)
        std::cout << std::setw(3) << n;
    std::cout << '\n';
}
 
int main()
{
    std::valarray<int> v1(3);
    v1 = -1; // (3) from a scalar 
    print("assigned from scalar: ", v1);
 
    v1 = {1, 2, 3, 4, 5, 6}; // (8): from initializer list of different size
    print("assigned from initializer_list:", v1);
 
    std::valarray<int> v2(3);
    v2 = v1[std::slice(0, 3, 2)]; // (4): from slice array
    print("every 2nd element starting at pos 0:", v2);
 
    v2 = v1[v1 % 2 == 0]; // (6): from mask array
    print("values that are even:", v2);
 
    std::valarray<std::size_t> idx = {0, 1, 2, 4}; // index array
    v2.resize(4); // sizes must match when assigning from gen subscript
    v2 = v1[idx]; // (7): from indirect array
    print("values at positions 0, 1, 2, 4:", v2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 624 | C++98 | the behaviors of overloads (4-7) wereunclear if the length of other is not size() | the behaviors areundefined in this case |
| LWG 630 | C++98 | the behavior of the copy assignment operatorwas undefined if size() != other.size() | resizes *thisfirst in this case |
| LWG 2071 | C++11 | the move assignment operator resized*this if size() != other.size() | not required toresize in this case |
