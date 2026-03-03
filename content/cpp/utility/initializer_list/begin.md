---
title: "std::initializer_list<T>::begin"
source_path: "cpp/utility/initializer_list/begin"
category: "utility"
---

Obtains a pointer to the first element in the initializer list.

## Declarations
```cpp
const T* begin() const noexcept;
```
_(since C++11) (constexpr since C++14)_

## Return value
A pointer to the first element in the initializer list

## Example
```cpp
#include <initializer_list>
 
int main()
{
    static constexpr auto il = {42, 24};
    static_assert(*il.begin() == 0x2A);
    static_assert(il.begin()[1] == 030);
}
```

## See also
- [end](/cpp/utility/initializer_list/end/)
