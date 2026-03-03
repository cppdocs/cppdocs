---
title: "std::auto_ptr<T>::auto_ptr"
source_path: "cpp/memory/auto_ptr/auto_ptr"
category: "memory"
---

Constructs the auto_ptr from a pointer that refers to the object to manage.

## Declarations
```cpp
explicit auto_ptr( X* p = 0 ) throw();
```
_(deprecated in C++11) (removed in C++17)_

```cpp
auto_ptr( auto_ptr& r ) throw();
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class Y >
auto_ptr( auto_ptr<Y>& r ) throw();
```
_(deprecated in C++11) (removed in C++17)_

```cpp
auto_ptr( auto_ptr_ref<X> m ) throw();
```
_(deprecated in C++11) (removed in C++17)_

## Parameters
- `p`: a pointer to an object to manage
- `r`: another auto_ptr to transfer the ownership of the object from
- `m`: an implementation-defined type that holds a reference to auto_ptr

## Notes
The constructor and the copy assignment operator from auto_ptr_ref is provided to allow copy-constructing and assigning [std::auto_ptr](/cpp/memory/auto_ptr/) from nameless temporaries. Since its copy constructor and copy assignment operator take the argument as non-const reference, they cannot bind rvalue arguments directly. However, a [user-defined conversion](/cpp/memory/auto_ptr/operator_auto_ptr/) can be executed (which releases the original auto_ptr), followed by a call to the constructor or copy-assignment operator that take auto_ptr_ref by value. This is an early implementation of [move semantics](/cpp/utility/move/).
