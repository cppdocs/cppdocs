---
title: "std::span<T,Extent>::begin, std::span<T,Extent>::cbegin"
source_path: "cpp/container/span/begin"
category: "container"
since: "C++20"
---

Returns an iterator to the first element of the span.

## Declarations
```cpp
constexpr iterator begin() const noexcept;
```
_(since C++20)_

```cpp
constexpr const_iterator cbegin() const noexcept;
```
_(since C++23)_

## Return value
Iterator to the first element.

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
- [endcend](/cpp/container/span/end/)
- [begincbegin](/cpp/iterator/begin/)
