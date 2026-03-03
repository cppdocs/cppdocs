---
title: "std::empty"
source_path: "cpp/iterator/empty"
header: "<array>"
category: "iterator"
since: "C++17"
---

Returns whether the given range is empty.

## Declarations
```cpp
template< class C >
constexpr auto empty( const C& c ) -> decltype(c.empty());
```
_(since C++17)_

```cpp
template< class T, std::size_t N >
constexpr bool empty( const T (&array)[N] ) noexcept;
```
_(since C++17)_

```cpp
template< class E >
constexpr bool empty( std::initializer_list<E> il ) noexcept;
```
_(since C++17)_

## Parameters
- `c`: a container or view with an empty member function
- `array`: an array of arbitrary type
- `il`: an std::initializer_list

## Notes
The overload for [std::initializer_list](/cpp/utility/initializer_list/) is necessary because it does not have a member function empty.

## Example
```cpp
#include <iostream>
#include <vector>
 
template<class T>
void print(const T& container)
{
    if (std::empty(container))
        std::cout << "Empty\n";
    else
    {
        std::cout << "Elements:";
        for (const auto& element : container)
            std::cout << ' ' << element;
        std::cout << '\n';
    }
}
 
int main()
{
    std::vector<int> c = {1, 2, 3};
    print(c);
    c.clear();
    print(c);
 
    int array[] = {4, 5, 6};
    print(array);
 
    auto il = {7, 8, 9};
    print(il);
}
```

## See also
- [ranges::empty](/cpp/ranges/empty/)
