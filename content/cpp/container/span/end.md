---
title: "std::span<T,Extent>::end, std::span<T,Extent>::cend"
source_path: "cpp/container/span/end"
category: "container"
since: "C++20"
---

Returns an iterator to the element following the last element of the span.

## Declarations
```cpp
constexpr iterator end() const noexcept;
```
_(since C++20)_

```cpp
constexpr const_iterator cend() const noexcept;
```
_(since C++23)_

## Return value
Iterator to the element following the last element.

## Example
```cpp
#include <iostream>
#include <span>
 
void print(std::span<const int> array)
{
    std::cout << "array = ";
    for (auto it = array.begin(); it != array.end(); ++it)
        std::cout << *it << ' ';
    std::cout << '\n';
}
 
void set_first_element(std::span<int> sp, int new_value)
{
    if (!sp.empty())
    {
        std::cout << "old *begin = " << *sp.begin() << '\n';
        *sp.begin() = new_value;
        std::cout << "new *begin = " << *sp.begin() << '\n';
    }
}
 
int main()
{
    int array[]{1, 3, 4, 5};
    print(array);
    set_first_element(array, 2);
    print(array);
}
```

## See also
- [begincbegin](/cpp/container/span/begin/)
- [endcend](/cpp/iterator/end/)
