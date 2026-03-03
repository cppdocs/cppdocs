---
title: "std::weak_ptr<T>::operator="
source_path: "cpp/memory/weak_ptr/operator"
category: "memory"
since: "C++11"
---

Replaces the managed object with the one managed by r. The object is shared with r. If r manages no object, *this manages no object too.

## Declarations
```cpp
weak_ptr& operator=( const weak_ptr& r ) noexcept;
```
_(since C++11)_

```cpp
template< class Y >
weak_ptr& operator=( const weak_ptr<Y>& r ) noexcept;
```
_(since C++11)_

```cpp
template< class Y >
weak_ptr& operator=( const shared_ptr<Y>& r ) noexcept;
```
_(since C++11)_

```cpp
weak_ptr& operator=( weak_ptr&& r ) noexcept;
```
_(since C++11)_

```cpp
template< class Y >
weak_ptr& operator=( weak_ptr<Y>&& r ) noexcept;
```
_(since C++11)_

## Parameters
- `r`: smart pointer to share an object with

## Return value
*this

## Notes
The implementation may meet the requirements without creating a temporary weak_ptr object.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2315 | C++11 | move semantic was not enabled for weak_ptr | enabled |

## See also
- [(constructor)](/cpp/memory/weak_ptr/weak_ptr/)
- [swap](/cpp/memory/weak_ptr/swap/)
