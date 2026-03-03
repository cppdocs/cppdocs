---
title: "std::rbegin, std::crbegin"
source_path: "cpp/iterator/rbegin"
header: "<array>"
category: "iterator"
---

Returns an iterator to the reverse-beginning of the given range.

## Declarations
```cpp
template< class C >
auto rbegin( C& c ) -> decltype(c.rbegin());
```
_(since C++14) (constexpr since C++17)_

```cpp
template< class C >
auto rbegin( const C& c ) -> decltype(c.rbegin());
```
_(since C++14) (constexpr since C++17)_

```cpp
template< class T, std::size_t N >
std::reverse_iterator<T*> rbegin( T (&array)[N] );
```
_(since C++14) (constexpr since C++17)_

```cpp
template< class T >
std::reverse_iterator<const T*> rbegin( std::initializer_list<T> il );
```
_(since C++14) (constexpr since C++17)_

```cpp
template< class C >
auto crbegin( const C& c ) -> decltype(std::rbegin(c));
```
_(since C++14) (constexpr since C++17)_

## Parameters
- `c`: a container or view with a rbegin member function
- `array`: an array of arbitrary type
- `il`: an std::initializer_list

## Notes
The overload for [std::initializer_list](/cpp/utility/initializer_list/) is necessary because it does not have a member function rbegin.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v = {3, 1, 4};
    auto vi = std::rbegin(v); // the type of “vi” is std::vector<int>::reverse_iterator
    std::cout << "*vi = " << *vi << '\n';
 
    *std::rbegin(v) = 42; // OK: after assignment v[2] == 42
//  *std::crbegin(v) = 13; // error: the location is read-only
 
    int a[] = {-5, 10, 15};
    auto ai = std::rbegin(a); // the type of “ai” is std::reverse_iterator<int*>
    std::cout << "*ai = " << *ai << '\n';
 
    auto il = {3, 1, 4};
    // the type of “it” below is std::reverse_iterator<int const*>:
    for (auto it = std::rbegin(il); it != std::rend(il); ++it)
        std::cout << *it << ' ';
    std::cout << '\n';
}
```

## See also
- [begincbegin](/cpp/iterator/begin/)
- [endcend](/cpp/iterator/end/)
- [rendcrend](/cpp/iterator/rend/)
- [ranges::rbegin](/cpp/ranges/rbegin/)
- [ranges::crbegin](/cpp/ranges/crbegin/)
