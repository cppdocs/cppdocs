---
title: "operator==, !=, <, <=, >, >=, <=> (std::shared_ptr)"
source_path: "cpp/memory/shared_ptr/operator_cmp"
header: "<memory>"
category: "memory"
since: "C++11"
---

Compares two shared_ptr<T> objects or compares shared_ptr<T> with a null pointer.

## Declarations
```cpp
Compare two shared_ptr objects.
```

```cpp
template< class T, class U >
bool operator==( const std::shared_ptr<T>& lhs,
const std::shared_ptr<U>& rhs ) noexcept;
```
_(since C++11)_

```cpp
template< class T, class U >
bool operator!=( const std::shared_ptr<T>& lhs,
const std::shared_ptr<U>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T, class U >
bool operator<( const std::shared_ptr<T>& lhs,
const std::shared_ptr<U>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T, class U >
bool operator>( const std::shared_ptr<T>& lhs,
const std::shared_ptr<U>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T, class U >
bool operator<=( const std::shared_ptr<T>& lhs,
const std::shared_ptr<U>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T, class U >
bool operator>=( const std::shared_ptr<T>& lhs,
const std::shared_ptr<U>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T, class U >
std::strong_ordering operator<=>( const std::shared_ptr<T>& lhs,
const std::shared_ptr<U>& rhs ) noexcept;
```
_(since C++20)_

```cpp
Compare a shared_ptr with a null pointer.
```

```cpp
template< class T >
bool operator==( const std::shared_ptr<T>& lhs, std::nullptr_t ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
bool operator==( std::nullptr_t, const std::shared_ptr<T>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T >
bool operator!=( const std::shared_ptr<T>& lhs, std::nullptr_t ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T >
bool operator!=( std::nullptr_t, const std::shared_ptr<T>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T >
bool operator<( const std::shared_ptr<T>& lhs, std::nullptr_t ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T >
bool operator<( std::nullptr_t, const std::shared_ptr<T>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T >
bool operator>( const std::shared_ptr<T>& lhs, std::nullptr_t ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T >
bool operator>( std::nullptr_t, const std::shared_ptr<T>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T >
bool operator<=( const std::shared_ptr<T>& lhs, std::nullptr_t ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T >
bool operator<=( std::nullptr_t, const std::shared_ptr<T>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T >
bool operator>=( const std::shared_ptr<T>& lhs, std::nullptr_t ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T >
bool operator>=( std::nullptr_t, const std::shared_ptr<T>& rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class T >
std::strong_ordering operator<=>( const std::shared_ptr<T>& lhs,
std::nullptr_t ) noexcept;
```
_(since C++20)_

## Parameters
- `lhs`: the left-hand shared_ptr to compare
- `rhs`: the right-hand shared_ptr to compare

## Notes
In all cases, it is the stored pointer (the one returned by [get()](/cpp/memory/shared_ptr/get/)) that is compared, rather than the managed pointer (the one passed to the deleter when [use_count](/cpp/memory/shared_ptr/use_count/) goes to zero). The two pointers may differ in a [shared_ptr](/cpp/memory/shared_ptr/) created using the aliasing constructor.

## Example
```cpp
#include <iostream>
#include <memory>
 
int main()
{
    std::shared_ptr<int> p1(new int(42));
    std::shared_ptr<int> p2(new int(42));
 
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
| LWG 3427 | C++20 | operator<=>(shared_ptr, nullptr_t) was ill-formed | definition fixed |

## See also
- [get](/cpp/memory/shared_ptr/get/)
