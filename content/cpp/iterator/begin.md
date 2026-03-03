---
title: "std::begin, std::cbegin"
source_path: "cpp/iterator/begin"
header: "<array>"
category: "iterator"
since: "C++14"
---

Returns an iterator to the beginning of the given range.

## Declarations
```cpp
template< class C >
auto begin( C& c ) -> decltype(c.begin());
```
_(since C++11) (constexpr since C++17)_

```cpp
template< class C >
auto begin( const C& c ) -> decltype(c.begin());
```
_(since C++11) (constexpr since C++17)_

```cpp
template< class T, std::size_t N >
T* begin( T (&array)[N] );
```
_(since C++11) (noexcept since C++14) (constexpr since C++14)_

```cpp
template< class C >
constexpr auto cbegin( const C& c ) noexcept(/* see below */)
-> decltype(std::begin(c));
```
_(since C++14)_

## Parameters
- `c`: a container or view with a begin member function
- `array`: an array of arbitrary type

## Notes
The non-array overloads exactly reflect the behavior of C::begin. Their effects may be surprising if the member function does not have a reasonable implementation.

std::cbegin is introduced for unification of member and non-member range accesses. See also [LWG issue 2128](https://cplusplus.github.io/LWG/issue2128).

If C is a shallow-const view, std::cbegin may return a mutable iterator. Such behavior is unexpected for some users. See also [P2276](https://wg21.link/P2276) and [P2278](https://wg21.link/P2278).

## Example
```cpp
#include <iostream>
#include <iterator>
#include <vector>
 
int main() 
{
    std::vector<int> v = {3, 1, 4};
    auto vi = std::begin(v);
    std::cout << std::showpos << *vi << '\n'; 
 
    int a[] = {-5, 10, 15};
    auto ai = std::begin(a);
    std::cout << *ai << '\n';
}
```

## See also
- [endcend](/cpp/iterator/end/)
- [ranges::begin](/cpp/ranges/begin/)
- [ranges::cbegin](/cpp/ranges/cbegin/)
