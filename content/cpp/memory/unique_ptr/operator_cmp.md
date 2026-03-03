---
title: "operator==,!=,<,<=,>,>=,<=>(std::unique_ptr)"
source_path: "cpp/memory/unique_ptr/operator_cmp"
header: "<memory>"
category: "memory"
since: "C++11"
---

Compares the pointer values of two unique_ptrs, or a unique_ptr and nullptr.

## Declarations
```cpp
template< class T1, class D1, class T2, class D2 >
bool operator==( const unique_ptr<T1, D1>& x, const unique_ptr<T2, D2>& y );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class T1, class D1, class T2, class D2 >
bool operator!=( const unique_ptr<T1, D1>& x, const unique_ptr<T2, D2>& y );
```
_(since C++11) (until C++20)_

```cpp
template< class T1, class D1, class T2, class D2 >
bool operator<( const unique_ptr<T1, D1>& x, const unique_ptr<T2, D2>& y );
```
_(since C++11)_

```cpp
template< class T1, class D1, class T2, class D2 >
bool operator<=( const unique_ptr<T1, D1>& x, const unique_ptr<T2, D2>& y );
```
_(since C++11)_

```cpp
template< class T1, class D1, class T2, class D2 >
bool operator>( const unique_ptr<T1, D1>& x, const unique_ptr<T2, D2>& y );
```
_(since C++11)_

```cpp
template< class T1, class D1, class T2, class D2 >
bool operator>=( const unique_ptr<T1, D1>& x, const unique_ptr<T2, D2>& y );
```
_(since C++11)_

```cpp
template< class T1, class D1, class T2, class D2 >
requires std::three_way_comparable_with<
typename unique_ptr<T1, D1>::pointer,
typename unique_ptr<T2, D2>::pointer>
std::compare_three_way_result_t<typename unique_ptr<T1, D1>::pointer,
typename unique_ptr<T2, D2>::pointer>
operator<=>( const unique_ptr<T1, D1>& x, const unique_ptr<T2, D2>& y );
```
_(since C++20)_

```cpp
template< class T, class D >
bool operator==( const unique_ptr<T, D>& x, std::nullptr_t ) noexcept;
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class T, class D >
bool operator==( std::nullptr_t, const unique_ptr<T, D>& x ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T, class D >
bool operator!=( const unique_ptr<T, D>& x, std::nullptr_t ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T, class D >
bool operator!=( std::nullptr_t, const unique_ptr<T, D>& x ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T, class D >
bool operator<( const unique_ptr<T, D>& x, std::nullptr_t );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class T, class D >
bool operator<( std::nullptr_t, const unique_ptr<T, D>& y );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class T, class D >
bool operator<=( const unique_ptr<T, D>& x, std::nullptr_t );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class T, class D >
bool operator<=( std::nullptr_t, const unique_ptr<T, D>& y );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class T, class D >
bool operator>( const unique_ptr<T, D>& x, std::nullptr_t );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class T, class D >
bool operator>( std::nullptr_t, const unique_ptr<T, D>& y );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class T, class D >
bool operator>=( const unique_ptr<T, D>& x, std::nullptr_t );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class T, class D >
bool operator>=( std::nullptr_t, const unique_ptr<T, D>& y );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class T, class D >
requires std::three_way_comparable<typename unique_ptr<T, D>::pointer>
std::compare_three_way_result_t<typename unique_ptr<T, D>::pointer>
operator<=>( const unique_ptr<T, D>& x, std::nullptr_t );
```
_(since C++20) (constexpr since C++23)_

## Parameters
- `x, y`: unique_ptrs to compare

## Example
```cpp
#include <iostream>
#include <memory>
 
int main()
{
    std::unique_ptr<int> p1(new int(42));
    std::unique_ptr<int> p2(new int(42));
 
    std::cout << std::boolalpha
        << "(p1 == p1)       : " << (p1 == p1) << '\n'
        << "(p1 <=> p1) == 0 : " << ((p1 <=> p1) == 0) << '\n' // Since C++20
 
    // p1 and p2 point to different memory locations, so p1 != p2
        << "(p1 == p2)       : " << (p1 == p2) << '\n'
        << "(p1 < p2)        : " << (p1 < p2) << '\n'
        << "(p1 <=> p2) < 0  : " << ((p1 <=> p2) < 0) << '\n'   // Since C++20
        << "(p1 <=> p2) == 0 : " << ((p1 <=> p2) == 0) << '\n'; // Since C++20
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3426 | C++20 | operator<=>(unique_ptr, nullptr_t) was ill-formed | constraints and definition fixed |

## See also
- [get](/cpp/memory/unique_ptr/get/)
