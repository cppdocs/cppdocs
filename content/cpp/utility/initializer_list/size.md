---
title: "std::initializer_list<T>::size"
source_path: "cpp/utility/initializer_list/size"
category: "utility"
---

Obtains the number of elements in the initializer list.

## Declarations
```cpp
size_type size() const noexcept;
```
_(since C++11) (constexpr since C++14)_

## Return value
[std::distance](/cpp/iterator/distance/)(begin(), end())

## Example
```cpp
#include <initializer_list>
 
static_assert(std::initializer_list{1, 2, 3}.size() == 3);
 
int main() {}
```
