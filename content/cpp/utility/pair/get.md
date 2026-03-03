---
title: "std::get(std::pair)"
source_path: "cpp/utility/pair/get"
header: "<utility>"
category: "utility"
since: "C++14"
---

Extracts an element from the pair using [tuple-like](/cpp/utility/tuple/tuple-like/) interface.

## Declarations
```cpp
template< std::size_t I, class T1, class T2 >
typename std::tuple_element<I, std::pair<T1,T2> >::type&
get( std::pair<T1, T2>& p ) noexcept;
```
_(since C++11) (constexpr since C++14)_

```cpp
template< std::size_t I, class T1, class T2 >
const typename std::tuple_element<I, std::pair<T1,T2> >::type&
get( const std::pair<T1,T2>& p ) noexcept;
```
_(since C++11) (constexpr since C++14)_

```cpp
template< std::size_t I, class T1, class T2 >
typename std::tuple_element<I, std::pair<T1,T2> >::type&&
get( std::pair<T1,T2>&& p ) noexcept;
```
_(since C++11) (constexpr since C++14)_

```cpp
template< std::size_t I, class T1, class T2 >
const typename std::tuple_element<I, std::pair<T1,T2> >::type&&
get( const std::pair<T1,T2>&& p ) noexcept;
```
_(since C++11) (constexpr since C++14)_

```cpp
template< class T, class U >
constexpr T& get( std::pair<T, U>& p ) noexcept;
```
_(since C++14)_

```cpp
template< class T, class U >
constexpr const T& get( const std::pair<T, U>& p ) noexcept;
```
_(since C++14)_

```cpp
template< class T, class U >
constexpr T&& get( std::pair<T, U>&& p ) noexcept;
```
_(since C++14)_

```cpp
template< class T, class U >
constexpr const T&& get( const std::pair<T, U>&& p ) noexcept;
```
_(since C++14)_

```cpp
template< class T, class U >
constexpr T& get( std::pair<U, T>& p ) noexcept;
```
_(since C++14)_

```cpp
template< class T, class U >
constexpr const T& get( const std::pair<U, T>& p ) noexcept;
```
_(since C++14)_

```cpp
template< class T, class U >
constexpr T&& get( std::pair<U, T>&& p ) noexcept;
```
_(since C++14)_

```cpp
template< class T, class U >
constexpr const T&& get( const std::pair<U, T>&& p ) noexcept;
```
_(since C++14)_

## Parameters
- `p`: pair whose contents to extract

## Example
```cpp
#include <iostream>
#include <utility>
 
int main()
{
    auto p = std::make_pair(1, 3.14);
    std::cout << '(' << std::get<0>(p) << ", " << std::get<1>(p) << ")\n";
    std::cout << '(' << std::get<int>(p) << ", " << std::get<double>(p) << ")\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2485 | C++11 (by index)C++14 (by type) | there are no overloads for const pair&& | the overloads are added |

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [get(std::tuple)](/cpp/utility/tuple/get/)
- [get(std::array)](/cpp/container/array/get/)
- [get(std::variant)](/cpp/utility/variant/get/)
- [get(std::ranges::subrange)](/cpp/ranges/subrange/get/)
- [std::ranges::subrange](/cpp/ranges/subrange/)
- [get(std::complex)](/cpp/numeric/complex/get/)
- [std::complex](/cpp/numeric/complex/)
