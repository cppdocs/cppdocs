---
title: "std::inplace_vector<T,N>::rend, std::inplace_vector<T,N>::crend"
source_path: "cpp/container/inplace_vector/rend"
category: "container"
since: "C++26"
---

Returns a reverse iterator to the element following the last element of the reversed inplace_vector. It corresponds to the element preceding the first element of the non-reversed inplace_vector. This element acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
constexpr reverse_iterator rend() noexcept;
```
_(since C++26)_

```cpp
constexpr const_reverse_iterator rend() const noexcept;
```
_(since C++26)_

```cpp
constexpr const_reverse_iterator crend() const noexcept;
```
_(since C++26)_

## Return value
Reverse iterator to the element following the last element.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <inplace_vector>
 
int main()
{
    std::inplace_vector<int, 11> a{1, 11, 11, 35, 0, 12, 79, 76, 76, 69, 40};
 
    // Print elements of container in reverse order using const_reverse_iterator's.
    std::for_each(a.crbegin(), a.crend(), [](int e){ std::cout << e << ' '; });
    std::cout << '\n';
 
    // Modify each element of container using non-const reverse_iterator's.
    std::for_each(a.rbegin(), a.rend(), [](int& e){ e += 32; });
 
    // Print elements as chars in reverse order using const_reverse_iterator's.
    std::for_each(a.crbegin(), a.crend(), [](char e){ std::cout << e; });
    std::cout << '\n';
}
```

## See also
- [rbegincrbegin](/cpp/container/inplace_vector/rbegin/)
- [rendcrend](/cpp/iterator/rend/)
