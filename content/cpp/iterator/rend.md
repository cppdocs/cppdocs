---
title: "std::rend, std::crend"
source_path: "cpp/iterator/rend"
header: "<array>"
category: "iterator"
---

Returns an iterator to the reverse-end of the given range.

## Declarations
```cpp
template< class C >
auto rend( C& c ) -> decltype(c.rend());
```
_(since C++14) (constexpr since C++17)_

```cpp
template< class C >
auto rend( const C& c ) -> decltype(c.rend());
```
_(since C++14) (constexpr since C++17)_

```cpp
template< class T, std::size_t N >
std::reverse_iterator<T*> rend( T (&array)[N] );
```
_(since C++14) (constexpr since C++17)_

```cpp
template< class T >
std::reverse_iterator<const T*> rend( std::initializer_list<T> il );
```
_(since C++14) (constexpr since C++17)_

```cpp
template< class C >
auto crend( const C& c ) -> decltype(std::rend(c));
```
_(since C++14) (constexpr since C++17)_

## Parameters
- `c`: a container or view with a rend member function
- `array`: an array of arbitrary type
- `il`: an std::initializer_list

## Notes
The overload for [std::initializer_list](/cpp/utility/initializer_list/) is necessary because it does not have a member function rend.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    int a[]{4, 6, -3, 9, 10};
    std::cout << "C-style array `a` backwards: ";
    std::copy(std::rbegin(a), std::rend(a), std::ostream_iterator<int>(std::cout, " "));
 
    auto il = {3, 1, 4};
    std::cout << "\nstd::initializer_list `il` backwards: ";
    std::copy(std::rbegin(il), std::rend(il), std::ostream_iterator<int>(std::cout, " "));
 
    std::vector<int> v{4, 6, -3, 9, 10};
    std::cout << "\nstd::vector `v` backwards: ";
    std::copy(std::rbegin(v), std::rend(v), std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
}
```

## See also
- [endcend](/cpp/iterator/end/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
- [begincbegin](/cpp/iterator/begin/)
- [ranges::rend](/cpp/ranges/rend/)
- [ranges::crend](/cpp/ranges/crend/)
