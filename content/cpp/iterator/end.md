---
title: "std::end, std::cend"
source_path: "cpp/iterator/end"
header: "<array>"
category: "iterator"
since: "C++14"
---

Returns an iterator to the end (i.e. the element after the last element) of the given range.

## Declarations
```cpp
template< class C >
auto end( C& c ) -> decltype(c.end());
```
_(since C++11) (constexpr since C++17)_

```cpp
template< class C >
auto end( const C& c ) -> decltype(c.end());
```
_(since C++11) (constexpr since C++17)_

```cpp
template< class T, std::size_t N >
T* end( T (&array)[N] );
```
_(since C++11) (noexcept since C++14) (constexpr since C++14)_

```cpp
template< class C >
constexpr auto cend( const C& c ) noexcept(/* see below */)
-> decltype(std::end(c));
```
_(since C++14)_

## Parameters
- `c`: a container or view with an end member function
- `array`: an array of arbitrary type

## Notes
The non-array overloads exactly reflect the behavior of C::end(). Their effects may be surprising if the member function does not have a reasonable implementation.

std::cend is introduced for unification of member and non-member range accesses. See also [LWG issue 2128](https://cplusplus.github.io/LWG/issue2128).

If C is a shallow-const view, std::cend may return a mutable iterator. Such behavior is unexpected for some users. See also [P2276](https://wg21.link/P2276) and [P2278](https://wg21.link/P2278).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> v = {3, 1, 4};
    if (std::find(std::begin(v), std::end(v), 5) != std::end(v))
        std::cout << "Found a 5 in vector v!\n";
 
    int w[] = {5, 10, 15};
    if (std::find(std::begin(w), std::end(w), 5) != std::end(w))
        std::cout << "Found a 5 in array w!\n";
}
```

## See also
- [begincbegin](/cpp/iterator/begin/)
- [ranges::end](/cpp/ranges/end/)
- [ranges::cend](/cpp/ranges/cend/)
