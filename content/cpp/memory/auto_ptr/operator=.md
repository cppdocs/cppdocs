---
title: "std::auto_ptr<T>::operator="
source_path: "cpp/memory/auto_ptr/operator"
category: "memory"
---

Replaces the managed object with the one managed by r or m.

## Declarations
```cpp
auto_ptr& operator=( auto_ptr& r ) throw();
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class Y >
auto_ptr& operator=( auto_ptr<Y>& r ) throw();
```
_(deprecated in C++11) (removed in C++17)_

```cpp
auto_ptr& operator=( auto_ptr_ref<T> m ) throw();
```
_(deprecated in C++11) (removed in C++17)_

## Parameters
- `r`: another auto_ptr to transfer the ownership of the object from
- `m`: an object of implementation-defined type that holds a reference to auto_ptr

## Return value
*this.

## Notes
The constructor and the copy assignment operator from auto_ptr_ref is provided to allow copy-constructing and assigning [std::auto_ptr](/cpp/memory/auto_ptr/) from nameless temporaries. Since its copy constructor and copy assignment operator take the argument as non-const reference, they cannot bind rvalue arguments directly. However, a [user-defined conversion](/cpp/memory/auto_ptr/operator_auto_ptr/) can be executed (which releases the original auto_ptr), followed by a call to the constructor or copy-assignment operator that take auto_ptr_ref by value. This is an early implementation of [move semantics](/cpp/utility/move/).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 127 | C++98 | auto_ptr was not assignable from auto_ptr_ref | added overload (3) |
