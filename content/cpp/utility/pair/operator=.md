---
title: "std::pair<T1,T2>::operator="
source_path: "cpp/utility/pair/operator"
category: "utility"
since: "C++20"
---

Replaces the contents of the pair.

## Declarations
```cpp
pair& operator=( const pair& other );
```
_(until C++20)_

```cpp
constexpr pair& operator=( const pair& other );
```
_(since C++20)_

```cpp
constexpr const pair& operator=( const pair& other ) const;
```
_(since C++23)_

```cpp
template< class U1, class U2 >
pair& operator=( const pair<U1, U2>& other );
```
_(until C++20)_

```cpp
template< class U1, class U2 >
constexpr pair& operator=( const pair<U1, U2>& other );
```
_(since C++20)_

```cpp
template< class U1, class U2 >
constexpr const pair& operator=( const pair<U1, U2>& other ) const;
```
_(since C++23)_

```cpp
pair& operator=( pair&& other ) noexcept(/* see below */);
```
_(since C++11) (until C++20)_

```cpp
constexpr pair& operator=( pair&& other ) noexcept(/* see below */);
```
_(since C++20)_

```cpp
constexpr const pair& operator=( pair&& other ) const;
```
_(since C++23)_

```cpp
template< class U1, class U2 >
pair& operator=( pair<U1, U2>&& p );
```
_(since C++11) (until C++20)_

```cpp
template< class U1, class U2 >
constexpr pair& operator=( pair<U1, U2>&& p );
```
_(since C++20)_

```cpp
template< class U1, class U2 >
constexpr const pair& operator=( pair<U1, U2>&& p ) const;
```
_(since C++23)_

```cpp
template< pair-like P >
constexpr pair& operator=( P&& u );
```
_(since C++23)_

```cpp
template< pair-like P >
constexpr const pair& operator=( P&& u ) const;
```
_(since C++23)_

## Parameters
- `other`: pair of values to replace the contents of this pair
- `p`: pair of values of possibly different types to replace the contents of this pair
- `u`: pair-like object of values to replace the contents of this pair

## Return value
*this

## Example
```cpp
#include <cstddef>
#include <iomanip>
#include <iostream>
#include <utility>
#include <vector>
 
template<class Os, class T>
Os& operator<<(Os& os, const std::vector<T>& v)
{
    os << '{';
    for (std::size_t t = 0; t != v.size(); ++t)
        os << v[t] << (t + 1 < v.size() ? ", " : "");
    return os << '}';
}
 
template<class Os, class U1, class U2>
Os& operator<<(Os& os, const std::pair<U1, U2>& pair)
{
    return os << '{' << pair.first << ", " << pair.second << '}';
}
 
int main()
{
    std::pair<int, std::vector<int>> p{1, {2}}, q{2, {5, 6}};
 
    p = q; // (1) operator=(const pair& other);
    std::cout << std::setw(23) << std::left
              << "(1) p = q;"
              << "p: " << p << "     q: " << q << '\n';
 
    std::pair<short, std::vector<int>> r{4, {7, 8, 9}};
    p = r; // (3) operator=(const pair<U1, U2>& other);
    std::cout << std::setw(23)
              << "(3) p = r;"
              << "p: " << p << "  r: " << r << '\n';
 
    p = std::pair<int, std::vector<int>>{3, {4}};
    p = std::move(q); // (5) operator=(pair&& other);
    std::cout << std::setw(23)
              << "(5) p = std::move(q);"
              << "p: " << p << "     q: " << q << '\n';
 
    p = std::pair<int, std::vector<int>>{5, {6}};
    p = std::move(r); // (7) operator=(pair<U1, U2>&& other);
    std::cout << std::setw(23)
              << "(7) p = std::move(r);"
              << "p: " << p << "  r: " << r << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 885 | C++98 | missing heterogeneous copy assignment | added (as overload (3)) |
| LWG 2729 | C++11 | pair::operator= was unconstrained and mightresult in unnecessary undefined behavior | constrained |

## See also
- [operator=](/cpp/utility/tuple/operator/)
